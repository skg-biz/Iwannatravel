import type { Metadata } from 'next';
import { personalityResults } from '@/lib/quiz/scoring';
import { TravelPersonality } from '@/lib/quiz/types';
import ResultContent from './ResultContent';

const VALID_TYPES: TravelPersonality[] = ['healer', 'adventurer', 'romantic', 'wanderer', 'planner', 'gourmet'];

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;

  if (!VALID_TYPES.includes(type as TravelPersonality)) {
    return { title: '아 여행가고싶다' };
  }

  const result = personalityResults[type as TravelPersonality];
  const title = `${result.emoji} ${result.name} | 아 여행가고싶다`;
  const description = result.description.slice(0, 120);
  // ogImage URL is relative — Next.js resolves it against metadataBase
  const ogImage = `/api/og?type=${type}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${result.emoji} ${result.name} — 아 여행가고싶다`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ResultPage({ params }: Props) {
  const { type } = await params;
  return <ResultContent type={type} />;
}
