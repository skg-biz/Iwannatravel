'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/lib/quiz/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  questionIndex: number;
}

export default function QuestionCard({ question, onAnswer, questionIndex }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full"
      >
        <h2 className="mb-8 whitespace-pre-line text-center text-xl font-bold leading-relaxed sm:text-2xl">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.answers.map((answer, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(idx)}
              className="w-full rounded-2xl border border-foreground/10 bg-white/60 px-5 py-4 text-left text-base font-medium transition-colors hover:border-purple-300 hover:bg-purple-50 active:bg-purple-100 dark:bg-white/5 dark:hover:border-purple-500/50 dark:hover:bg-purple-900/20 sm:text-lg"
            >
              {answer.text}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
