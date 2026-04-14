'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '@/hooks/useQuiz';
import ProgressBar from '@/components/ui/ProgressBar';
import QuestionCard from './QuestionCard';
import CalculatingScreen from './CalculatingScreen';

export default function QuizContainer() {
  const router = useRouter();
  const { phase, currentIndex, totalQuestions, currentQuestion, result, start, answer } = useQuiz();

  useEffect(() => {
    if (phase === 'done' && result) {
      router.push(`/result/${result}`);
    }
  }, [phase, result, router]);

  if (phase === 'intro') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <div className="text-6xl">🧳</div>
        <h1 className="text-2xl font-bold sm:text-3xl">여행 심리 테스트</h1>
        <p className="max-w-md text-foreground/60">
          지금 당신의 마음 상태를 기반으로<br />
          딱 맞는 여행 유형을 알려드릴게요.<br />
          <span className="text-sm">총 {totalQuestions}개의 질문, 약 1분 소요</span>
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={start}
          className="rounded-full bg-gradient-to-r from-teal-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg"
        >
          시작하기
        </motion.button>
      </motion.div>
    );
  }

  if (phase === 'calculating') {
    return <CalculatingScreen />;
  }

  if (phase === 'playing' && currentQuestion) {
    return (
      <div className="w-full max-w-lg">
        <ProgressBar current={currentIndex} total={totalQuestions} />
        <div className="mt-8">
          <QuestionCard
            question={currentQuestion}
            onAnswer={answer}
            questionIndex={currentIndex}
          />
        </div>
      </div>
    );
  }

  return null;
}
