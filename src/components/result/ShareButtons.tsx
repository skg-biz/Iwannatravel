'use client';

import { useState } from 'react';
import { TravelPersonality } from '@/lib/quiz/types';
import { personalityResults } from '@/lib/quiz/scoring';

interface ShareButtonsProps {
  type: TravelPersonality;
}

export default function ShareButtons({ type }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const result = personalityResults[type];

  const shareText = `아 여행가고싶다 - 나의 여행 유형은 "${result.emoji} ${result.name}"!\n지금 당신의 여행 유형도 알아보세요 👇`;

  const getUrl = () => (typeof window !== 'undefined' ? window.location.href : '');
  const getOrigin = () => (typeof window !== 'undefined' ? window.location.origin : '');

  /** 카카오톡: Web Share API → URL 스킴 폴백 */
  const shareKakao = async () => {
    const url = getUrl();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text: shareText, url });
        return;
      } catch {
        // 취소 등 — 폴백
      }
    }
    const msg = encodeURIComponent(`${shareText}\n${url}`);
    window.location.href = `kakaotalk://sendmemo?msg=${msg}`;
  };

  /** 인스타 DM: Web Share API (모바일 IG DM 옵션 포함) → 링크 복사 + 인스타 열기 */
  const shareInstagramDM = async () => {
    const url = getUrl();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text: shareText, url });
        return;
      } catch {
        // 취소 등
      }
    }
    // 폴백: 링크 복사 후 앱 열기
    await navigator.clipboard.writeText(`${shareText}\n${url}`);
    window.location.href = 'instagram://app';
  };

  /** 인스타 스토리: OG 이미지를 파일로 공유 → 폴백: 스토리 카메라 + 링크 복사 */
  const shareInstagramStory = async () => {
    const url = getUrl();
    const imageUrl = `${getOrigin()}/api/og?type=${type}`;

    // Web Share API with files — 모바일에서 "Instagram Stories에 공유" 옵션 표시
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        const res = await fetch(imageUrl);
        const blob = await res.blob();
        const file = new File([blob], `${result.name}.png`, { type: 'image/png' });

        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({ files: [file], text: shareText, url });
          return;
        }
        // 파일 공유 불가 시 텍스트만 공유 시도
        await navigator.share({ text: shareText, url });
        return;
      } catch {
        // 취소 등
      }
    }

    // 폴백: 링크 복사 + 인스타 스토리 카메라 열기
    await navigator.clipboard.writeText(url);
    window.location.href = 'instagram://story-camera';
  };

  const copyLink = async () => {
    const url = getUrl();
    await navigator.clipboard.writeText(`${shareText}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          인스타 DM
        </button>

        {/* 인스타 스토리 */}
        <button
          onClick={shareInstagramStory}
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          인스타 스토리
        </button>

        {/* 링크 복사 */}
        <button
          onClick={copyLink}
          className="rounded-full border border-foreground/20 px-4 py-2.5 text-sm font-medium transition-all hover:scale-105 hover:border-foreground/40"
        >
          {copied ? '✓ 복사됨!' : '링크 복사'}
        </button>
      </div>
    </div>
  );
}
