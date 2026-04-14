'use client';

import { PriceRange, PRICE_RANGES } from '@/lib/quiz/types';

interface PriceRangeSelectorProps {
  selected: PriceRange;
  onChange: (range: PriceRange) => void;
}

const rangeKeys: PriceRange[] = ['budget', 'mid', 'luxury'];

export default function PriceRangeSelector({ selected, onChange }: PriceRangeSelectorProps) {
  return (
    <div className="flex w-full gap-3">
      {rangeKeys.map((key) => {
        const r = PRICE_RANGES[key];
        const active = selected === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex-1 rounded-2xl border-2 px-3 py-4 text-center transition-all ${
              active
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                : 'border-foreground/10 hover:border-foreground/20'
            }`}
          >
            <div className="text-sm font-bold">{r.label}</div>
            <div className="mt-1 text-xs text-foreground/50">{r.range}</div>
          </button>
        );
      })}
    </div>
  );
}
