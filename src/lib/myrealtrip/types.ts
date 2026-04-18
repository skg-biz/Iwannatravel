import { TravelPersonality, PriceRange } from '@/lib/quiz/types';

export interface TravelProduct {
  id: string;
  title: string;
  destination: string;
  price: number;
  priceRange: PriceRange;
  imageEmoji: string;
  description: string;
  myrealTripUrl: string;
  tripComUrl: string;
  rating: number;
  personalityTypes: TravelPersonality[];
  tags: string[];
}
