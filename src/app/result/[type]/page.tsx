'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TravelPersonality } from '@/lib/quiz/types';
import { personalityResults } from '@/lib/quiz/scoring';
import TraitRadar from '@/components/result/TraitRadar';
import RecommendationList from '@/components/result/RecommendationList';
import ShareButtons from '@/components/result/ShareButtons';
import { TraitScores } from '@/lib/quiz/types';

// Default representative scores for each type (used when directly accessing URL)
const defaultScores: Record<TravelPersonality, TraitScores> = {
  healer:     { energy: 25, stimulus: 20, planning: 50, environment: 30, experience: 15 },
  adventurer: { energy: 60, stimulus: 85, planning: 40, environment: 45, experience: 80 },
  romantic:   { energy: 35, stimulus: 30, planning: 55, environment: 75, experience: 35 },
  wanderer:   { energy: 55, stimulus: 65, planning: 20, environment: 45, experience: 55 },
  planner:    { energy: 50, stimulus: 35, planning: 80, environment: 60, experience: 50 },
  gourmet:    { energy: 60, stimulus: 45, planning: 65, environment: 78, experience: 55 },
};

const VALID_TYPES: TravelPersonality[] = ['healer', 'adventurer', 'romantic', 'wanderer', 'planner', 'gourmet'];

export default function ResultPage() {
  const params = useParams();
  const type = params.type as string;

  if (!VALID_TYPES.includes(type as TravelPersonality)) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <p>잘못된 유형입니다.</p>
        <Link href="/" className="mt-4 text-purple-500 underline">처음으로 돌아가기</Link>
      </main>
    );
  }

  const personality = type as TravelPersonality;
  const result = personalityResults[personality];
  const scores = defaultScores[personality];

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      <div className="w-full max-w-lg space-y-10">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 text-6xl">{result.emoji}</div>
          <h1 className={`mb-2 text-3xl font-extrabold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
            {result.name}
          </h1>
          <p className="text-foreground/60">{result.subtitle}</p>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TraitRadar scores={scores} />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-white/60 p-6 text-center leading-relaxed dark:bg-white/5"
        >
          <p>{result.description}</p>
        </motion.div>

        {/* Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="mb-3 text-sm font-medium text-foreground/50">이런 여행지가 어울려요</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {result.destinations.map((d) => (
              <span
                key={d}
                className="rounded-full bg-foreground/5 px-4 py-1.5 text-sm font-medium"
              >
                {d}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <RecommendationList type={personality} />
        </motion.div>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <ShareButtons type={personality} />
        </motion.div>

        {/* Retry */}
        <div className="flex flex-col items-center gap-3 pb-8">
          <Link
            href="/quiz"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-all hover:border-purple-400 hover:text-purple-500"
          >
            다시 테스트하기
          </Link>
          <Link href="/" className="text-sm text-foreground/40 hover:text-foreground/60">
            처음으로
          </Link>
        </div>
      </div>
    </main>
  );
}
