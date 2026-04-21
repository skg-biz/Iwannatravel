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

  const shareText = `나의 여행 유형은 "${result.emoji} ${result.name}"!\n지금 당신의 여행 유형도 알아보세요 👇`;

  const getUrl = () => (typeof window !== 'undefined' ? window.location.href : '');

  /** 카카오톡 공유
   * - 모바일: navigator.share → 네이티브 공유 시트 (KakaoTalk 포함)
   * - 폴백: kakaotalk:// URL 스킴
   */
  const shareKakao = async () => {
    const url = getUrl();

    // 1) Web Share API (모바일 브라우저 네이티브 공유 시트)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${result.emoji} ${result.name} — 아 여행가고싶다`,
          text: shareText,
          url,
        });
        return;
      } catch {
        // 취소한 경우 등 — 아래 폴백으로
      }
    }

    // 2) KakaoTalk URL 스킴 (모바일, SDK 불필요)
    const msg = encodeURIComponent(`${shareText}\n${url}`);
    window.location.href = `kakaotalk://sendmemo?msg=${msg}`;
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
      <div className="flex gap-3">
        {/* 카카오톡 공유 */}
        <button
          onClick={shareKakao}
          className="flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-2.5 text-sm font-semibold text-[#191919] transition-transform hover:scale-105 active:scale-95"
        >
          {/* 카카오 말풍선 아이콘 */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 1C4.582 1 1 3.91 1 7.5c0 2.332 1.488 4.376 3.75 5.546L3.9 16.1a.25.25 0 0 0 .373.274L8.1 13.96c.296.027.596.04.9.04 4.418 0 8-2.91 8-6.5S13.418 1 9 1Z"
              fill="#191919"
            />
          </svg>
          카카오톡
        </button>

        {/* 링크 복사 */}
        <button
          onClick={copyLink}
          className="rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 hover:border-foreground/40"
        >
          {copied ? '✓ 복사됨!' : '링크 복사'}
        </button>
      </div>
    </div>
  );
}
