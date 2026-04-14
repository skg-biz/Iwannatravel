import { TravelPersonality, PriceRange } from '@/lib/quiz/types';
import { products } from './products';
import { TravelProduct } from './types';

export function getRecommendations(type: TravelPersonality, priceRange: PriceRange): TravelProduct[] {
  return products.filter(
    (p) => p.personalityTypes.includes(type) && p.priceRange === priceRange,
  );
}

const searchKeywords: Record<TravelPersonality, string> = {
  healer: '힐링 스파 리조트',
  adventurer: '액티비티 트레킹 어드벤처',
  romantic: '감성 유럽 카페',
  wanderer: '자유여행 배낭여행 현지체험',
  planner: '패키지 가이드투어',
};

export function getSearchUrl(type: TravelPersonality): string {
  const q = encodeURIComponent(searchKeywords[type]);
  return `https://www.myrealtrip.com/search?q=${q}`;
}
