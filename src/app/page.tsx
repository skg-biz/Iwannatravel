import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-teal-200 to-cyan-200 opacity-30 blur-3xl dark:opacity-10" />
        <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl dark:opacity-10" />
        <div className="absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200 to-yellow-200 opacity-30 blur-3xl dark:opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Floating emojis */}
        <div className="mb-8 flex items-center gap-4">
          <span className="animate-float text-4xl">✈️</span>
          <span className="animate-float-delay text-5xl">🌍</span>
          <span className="animate-float text-4xl">🏖️</span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
            아 여행가고싶다
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-2 text-lg text-foreground/70 sm:text-xl">
          지금 당신의 마음이 원하는 여행은 어떤 걸까요?
        </p>
        <p className="mb-10 text-sm text-foreground/50">
          12개의 심리 질문으로 나만의 여행 유형을 알아보세요
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-100"
        >
          <span>내 여행 유형 알아보기</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        {/* Type preview */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/50">
          <span className="rounded-full bg-teal-100 px-3 py-1 dark:bg-teal-900/30">🌊 힐링 여행자</span>
          <span className="rounded-full bg-red-100 px-3 py-1 dark:bg-red-900/30">🏔️ 모험 탐험가</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 dark:bg-purple-900/30">🌸 감성 로맨티스트</span>
          <span className="rounded-full bg-yellow-100 px-3 py-1 dark:bg-yellow-900/30">🎒 자유로운 방랑자</span>
          <span className="rounded-full bg-blue-100 px-3 py-1 dark:bg-blue-900/30">📋 완벽한 계획가</span>
          <span className="rounded-full bg-orange-100 px-3 py-1 dark:bg-orange-900/30">🍜 미식 탐험가</span>
        </div>
      </div>
    </main>
  );
}
