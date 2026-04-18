export type TraitKey = 'energy' | 'stimulus' | 'planning' | 'environment' | 'experience';

export interface TraitScores {
  energy: number;      // 0=내향, 100=외향
  stimulus: number;    // 0=안정, 100=모험
  planning: number;    // 0=즉흥, 100=체계
  environment: number; // 0=자연, 100=도시
  experience: number;  // 0=휴식, 100=활동
}

export type TravelPersonality =
  | 'healer'
  | 'adventurer'
  | 'romantic'
  | 'wanderer'
  | 'planner'
  | 'gourmet';

export interface AnswerOption {
  text: string;
  scores: Partial<TraitScores>;
}

export interface Question {
  id: number;
  question: string;
  answers: AnswerOption[];
}

export interface PersonalityResult {
  type: TravelPersonality;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  destinations: string[];
  color: string;
  gradient: string;
}

export type PriceRange = 'budget' | 'mid' | 'luxury';

export const PRICE_RANGES: Record<PriceRange, { label: string; description: string; range: string }> = {
  budget:  { label: '가성비 여행',      description: '알뜰하게, 하지만 알차게',    range: '~100만원' },
  mid:     { label: '적당한 사치',      description: '나를 위한 작은 사치',        range: '100~250만원' },
  luxury:  { label: '나를 위한 투자',   description: '특별한 나를 위한 프리미엄',  range: '250만원~' },
};
