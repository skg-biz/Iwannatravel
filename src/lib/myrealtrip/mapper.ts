import { TravelPersonality, PriceRange } from '@/lib/quiz/types';
import { products } from './products';
import { TravelProduct } from './types';

export function getRecommendations(type: TravelPersonality, priceRange: PriceRange): TravelProduct[] {
  return products.filter(
    (p) => p.personalityTypes.includes(type) && p.priceRange === priceRange,
  );
}
