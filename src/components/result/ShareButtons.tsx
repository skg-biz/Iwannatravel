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

  const shareText = `나의 여행 유형은 "${result.emoji} ${result.name}"! 당신의 여행 유형은? #아여행가고싶다`;

  const copyLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    await navigator.clipboard.writeText(`${shareText}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const encoded = encodeURIComponent(`${shareText}\n${url}`);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-medium text-foreground/60">친구에게 공유하기</p>
      <div className="flex gap-3">
        <button
          onClick={shareTwitter}
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
        >
          X (Twitter)
        </button>
        <button
          onClick={copyLink}
          className="rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 hover:border-foreground/40"
        >
          {copied ? '복사됨!' : '링크 복사'}
        </button>
      </div>
    </div>
  );
}
