'use client';

import { useState, useCallback } from 'react';
import { questions } from '@/lib/quiz/questions';
import { createInitialScores, addScores, calculatePersonality } from '@/lib/quiz/scoring';
import { TraitScores, TravelPersonality } from '@/lib/quiz/types';

type QuizPhase = 'intro' | 'playing' | 'calculating' | 'done';

export function useQuiz() {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<TraitScores>(createInitialScores);
  const [result, setResult] = useState<TravelPersonality | null>(null);

  const start = useCallback(() => {
    setPhase('playing');
    setCurrentIndex(0);
    setScores(createInitialScores());
    setResult(null);
  }, []);

  const answer = useCallback(
    (answerIndex: number) => {
      const question = questions[currentIndex];
      const selected = question.answers[answerIndex];
      const newScores = addScores(scores, selected.scores);
      setScores(newScores);

      if (currentIndex + 1 >= questions.length) {
        setPhase('calculating');
        const personality = calculatePersonality(newScores);
        setResult(personality);
        setTimeout(() => setPhase('done'), 2500);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [currentIndex, scores],
  );

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      // Note: scores won't revert, but this is acceptable UX
    }
  }, [currentIndex]);

  return {
    phase,
    currentIndex,
    totalQuestions: questions.length,
    currentQuestion: questions[currentIndex] ?? null,
    scores,
    result,
    start,
    answer,
    goBack,
  };
}
