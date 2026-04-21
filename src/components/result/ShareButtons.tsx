'use client';

import { useState, useEffect } from 'react';
import { TravelPersonality } from '@/lib/quiz/types';
import { personalityResults } from '@/lib/quiz/scoring';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

interface ShareButtonsProps {
  type: TravelPersonality;
}

export default function ShareButtons({ type }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [dmHint, setDmHint] = useState(false);
  const result = personalityResults[type];

  const shareText = `아 여행가고싶다 - 나의 여행 유형은 "${result.emoji} ${result.name}"!\n지금 당신의 여행 유형도 알아보세요 👇`;
  const getUrl = () => (typeof window !== 'undefined' ? window.location.href : '');
  const getOrigin = () => (typeof window !== 'undefined' ? window.location.origin : '');

  // ── Kakao SDK 로드 ──────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const key = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    if (!key) return; // App Key 미설정 시 스킵

    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) window.Kakao.init(key);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) window.Kakao.init(key);
    };
    document.head.appendChild(script);
  }, []);

  // ── 카카오톡 ─────────────────────────────────────────────────────────────
  // SDK 있으면 → KakaoTalk Feed 공유 (앱 직접 진입 + OG 카드)
  // SDK 없으면 → Web Share API 폴백
  const shareKakao = () => {
    const url = getUrl();
    if (typeof window !== 'undefined' && window.Kakao?.Share) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${result.emoji} ${result.name} | 아 여행가고싶다`,
          description: result.subtitle,
          imageUrl: `${getOrigin()}/api/og?type=${type}`,
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [{ title: '내 유형 확인하기', link: { mobileWebUrl: url, webUrl: url } }],
      });
    } else {
      // SDK 미설정 폴백: Web Share API
      navigator.share?.({ text: shareText, url }).catch(() => {});
    }
  };

  // ── 인스타 DM ─────────────────────────────────────────────────────────────
  // 링크를 클립보드 복사 → instagram://direct 로 앱 열기
  // 인스타 DM 창에서 붙여넣기하면 URL OG 미리보기 자동 표시
  const shareInstagramDM = async () => {
    const url = getUrl();
    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
    } catch {
      // clipboard 실패 무시
    }
    setDmHint(true);
    setTimeout(() => setDmHint(false), 3000);
    // 클립보드 복사 완료 후 앱으로 이동
    setTimeout(() => {
      window.location.href = 'instagram://direct';
    }, 300);
  };

  // ── 인스타 스토리 ─────────────────────────────────────────────────────────
  // OG 이미지를 파일로 가져와 navigator.share({ files }) 로 공유
  // → iOS/Android 공유시트에 "Instagram Stories에 추가" 옵션 표시
  const shareInstagramStory = async () => {
    const imageUrl = `${getOrigin()}/api/og?type=${type}`;
    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      const file = new File([blob], `${result.name}.png`, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], url: getUrl() });
        return;
      }
    } catch {
      // fetch 실패 등
    }
    // 폴백: 링크 복사 + 스토리 카메라 열기
    try { await navigator.clipboard.writeText(getUrl()); } catch { /* ignore */ }
    window.location.href = 'instagram://story-camera';
  };

  // ── 링크 복사 + 공유시트 ──────────────────────────────────────────────────
  const copyAndShare = async () => {
    const url = getUrl();
    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
    } catch { /* ignore */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // 공유시트 (카카오, 인스타, 메시지 등 모두 포함)
    navigator.share?.({ text: shareText, url }).catch(() => {});
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-medium text-foreground/60">친구에게 공유하기</p>

      <div className="flex flex-wrap justify-center gap-2">
        {/* 카카오톡 */}
        <button
          onClick={shareKakao}
          className="flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-2.5 text-sm font-semibold text-[#191919] transition-transform hover:scale-105 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 1C4.582 1 1 3.91 1 7.5c0 2.332 1.488 4.376 3.75 5.546L3.9 16.1a.25.25 0 0 0 .373.274L8.1 13.96c.296.027.596.04.9.04 4.418 0 8-2.91 8-6.5S13.418 1 9 1Z"
              fill="#191919"
            />
          </svg>
          카카오톡
        </button>

        {/* 인스타 DM */}
        <button
          onClick={shareInstagramDM}
          className="relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {dmHint ? '복사됨! DM에 붙여넣기 👆' : '인스타 DM'}
        </button>

        {/* 인스타 스토리 */}
        <button
          onClick={shareInstagramStory}
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
          </svg>
          인스타 스토리
        </button>

        {/* 링크 복사 + 공유시트 */}
        <button
          onClick={copyAndShare}
          className="rounded-full border border-foreground/20 px-4 py-2.5 text-sm font-medium transition-all hover:scale-105 hover:border-foreground/40"
        >
          {copied ? '✓ 복사됨!' : '링크 복사'}
        </button>
      </div>
    </div>
  );
}
