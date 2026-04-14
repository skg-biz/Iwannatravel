'use client';

import { motion } from 'framer-motion';

const traits = [
  { label: '에너지 방향', color: 'bg-teal-400' },
  { label: '자극 선호', color: 'bg-red-400' },
  { label: '계획 성향', color: 'bg-blue-400' },
  { label: '환경 선호', color: 'bg-green-400' },
  { label: '경험 가치', color: 'bg-purple-400' },
];

export default function CalculatingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-col items-center gap-8 py-12"
    >
      <div className="text-4xl animate-pulse-slow">🔮</div>
      <h2 className="text-xl font-bold">당신의 여행 유형을 분석하고 있어요...</h2>

      <div className="w-full max-w-sm space-y-4">
        {traits.map((trait, i) => (
          <div key={trait.label} className="space-y-1">
            <span className="text-sm text-foreground/60">{trait.label}</span>
            <div className="h-3 w-full overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                className={`h-full rounded-full ${trait.color}`}
                initial={{ width: '0%' }}
                animate={{ width: `${50 + Math.random() * 40}%` }}
                transition={{ duration: 1.5, delay: i * 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
