import { NextRequest, NextResponse } from 'next/server';
import { TravelPersonality, PriceRange } from '@/lib/quiz/types';
import { getRecommendations, getSearchUrl } from '@/lib/myrealtrip/mapper';

const VALID_TYPES: TravelPersonality[] = ['healer', 'adventurer', 'romantic', 'wanderer', 'planner'];
const VALID_RANGES: PriceRange[] = ['budget', 'mid', 'luxury'];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const type = searchParams.get('type') as TravelPersonality;
  const priceRange = searchParams.get('priceRange') as PriceRange;

  if (!type || !VALID_TYPES.includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }
  if (!priceRange || !VALID_RANGES.includes(priceRange)) {
    return NextResponse.json({ error: 'Invalid priceRange' }, { status: 400 });
  }

  const products = getRecommendations(type, priceRange);
  const searchUrl = getSearchUrl(type);

  return NextResponse.json({ products, searchUrl });
}
