import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: '아 여행가고싶다 - 나의 여행 유형 테스트',
  description: '심리 테스트로 알아보는 나만의 여행 스타일! 12개의 질문으로 당신에게 딱 맞는 여행을 추천해드려요.',
  openGraph: {
    title: '아 여행가고싶다 - 나의 여행 유형 테스트',
    description: '심리 테스트로 알아보는 나만의 여행 스타일!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
