'use client';

import { TravelPersonality } from '@/lib/quiz/types';
import { personalityResults } from '@/lib/quiz/scoring';

interface ShareButtonsProps {
  type: TravelPersonality;
}

export default function ShareButtons({ type }: ShareButtonsProps) {
  const result = personalityResults[type];

  const shareText =
    `아 여행가고싶다\n- 나의 여행 유형은 "${result.emoji} ${result.name}"!\n지금 당신의 여행 유형도 알아보세요 👇`;

  const share = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      await navigator.share({ text: shareText, url });
    } catch {
      // 취소 또는 미지원 — 링크 복사 폴백
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-medium text-foreground/60">친구에게 공유하기</p>
      <button
        onClick={share}
        className="flex items-center gap-2 rounded-full bg-foreground/10 px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 hover:bg-foreground/15 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        공유하기
      </button>
    </div>
  );
}
