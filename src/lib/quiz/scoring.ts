import { TraitScores, TravelPersonality, PersonalityResult } from './types';

const BASE_SCORE = 50;

export function createInitialScores(): TraitScores {
  return {
    energy: BASE_SCORE,
    stimulus: BASE_SCORE,
    planning: BASE_SCORE,
    environment: BASE_SCORE,
    experience: BASE_SCORE,
  };
}

export function addScores(current: TraitScores, delta: Partial<TraitScores>): TraitScores {
  return {
    energy: clamp(current.energy + (delta.energy || 0)),
    stimulus: clamp(current.stimulus + (delta.stimulus || 0)),
    planning: clamp(current.planning + (delta.planning || 0)),
    environment: clamp(current.environment + (delta.environment || 0)),
    experience: clamp(current.experience + (delta.experience || 0)),
  };
}

function clamp(v: number): number {
  return Math.max(0, Math.min(100, v));
}

export function calculatePersonality(scores: TraitScores): TravelPersonality {
  const { energy, stimulus, planning, environment, experience } = scores;

  // Healing Traveler: rest-oriented introvert seeking stability
  if (experience <= 35 && stimulus <= 40 && energy <= 40) return 'healer';

  // Adventure Explorer: high adventure + high activity
  if (stimulus >= 65 && experience >= 60) return 'adventurer';

  // Emotional Romanticist: urban-leaning, moderate stability, introverted
  if (environment >= 55 && stimulus <= 50 && energy <= 55) return 'romantic';

  // Free Wanderer: spontaneous + adventurous
  if (planning <= 35 && stimulus >= 50) return 'wanderer';

  // Perfect Planner: structured + stability
  if (planning >= 60) return 'planner';

  // Fallback: pick by strongest trait deviation from center
  const deviations: [TravelPersonality, number][] = [
    ['healer', (100 - experience) + (100 - stimulus) + (100 - energy)],
    ['adventurer', stimulus + experience],
    ['romantic', environment + (100 - stimulus)],
    ['wanderer', (100 - planning) + stimulus],
    ['planner', planning + (100 - stimulus)],
  ];
  deviations.sort((a, b) => b[1] - a[1]);
  return deviations[0][0];
}

export const personalityResults: Record<TravelPersonality, PersonalityResult> = {
  healer: {
    type: 'healer',
    name: '힐링 여행자',
    emoji: '🌊',
    subtitle: '지친 영혼을 위한 쉼표',
    description:
      '당신은 지금 깊은 쉼이 필요한 사람입니다. 파도 소리를 들으며 아무 생각 없이 멍때리는 것이 최고의 치료제예요. 복잡한 일상에서 벗어나 온전히 나만을 위한 시간이 필요한 당신, 조용한 리조트에서 스파를 받으며 재충전하는 여행이 딱이에요.',
    destinations: ['발리', '제주', '오키나와', '다낭', '몰디브'],
    color: '#4ECDC4',
    gradient: 'from-teal-400 to-cyan-300',
  },
  adventurer: {
    type: 'adventurer',
    name: '모험 탐험가',
    emoji: '🏔️',
    subtitle: '심장이 뛰는 곳으로',
    description:
      '당신의 심장은 미지의 세계를 향해 뛰고 있어요! 익스트림한 경험이 당신을 살아있게 만듭니다. 높은 산 정상에서 세상을 내려다보거나, 급류를 타고 내려오는 그 짜릿함. 일상의 루틴에서 벗어나 한계를 시험하는 여행이 당신을 기다리고 있어요.',
    destinations: ['네팔', '뉴질랜드', '아이슬란드', '스위스', '코스타리카'],
    color: '#FF6B6B',
    gradient: 'from-red-400 to-orange-300',
  },
  romantic: {
    type: 'romantic',
    name: '감성 로맨티스트',
    emoji: '🌸',
    subtitle: '아름다운 순간을 수집하는 사람',
    description:
      '예쁜 카페, 아름다운 거리, 감성적인 순간을 사랑하는 당신. 여행은 인스타그램 한 컷보다 가슴에 남는 장면이에요. 골목골목 숨겨진 보석 같은 장소를 발견할 때의 설렘, 석양이 물드는 거리를 거닐 때의 평화. 그런 순간들이 당신의 여행을 완성해요.',
    destinations: ['파리', '프라하', '교토', '산토리니', '포르투'],
    color: '#DDA0DD',
    gradient: 'from-purple-300 to-pink-300',
  },
  wanderer: {
    type: 'wanderer',
    name: '자유로운 방랑자',
    emoji: '🎒',
    subtitle: '바람이 부는 대로, 발길이 닿는 대로',
    description:
      '계획은 NO! 바람이 부는 대로, 발길이 닿는 대로. 당신은 진정한 자유를 아는 여행자입니다. 현지인만 아는 골목을 누비고, 우연한 만남에서 최고의 추억을 만드는 타입. 가이드북에 없는 나만의 여행을 만들어가는 것이 당신의 스타일이에요.',
    destinations: ['방콕', '하노이', '리스본', '바르셀로나', '멕시코시티'],
    color: '#FFD93D',
    gradient: 'from-yellow-300 to-amber-300',
  },
  planner: {
    type: 'planner',
    name: '완벽한 계획가',
    emoji: '📋',
    subtitle: '여행 전 리서치가 여행의 반',
    description:
      '여행 전 리서치가 여행의 반! 완벽한 동선과 맛집 리스트로 무장한 당신은 여행의 달인입니다. 분 단위로 짜인 일정, 미리 예약한 레스토랑, 꼼꼼히 체크한 리뷰. 철저한 준비 덕분에 당신의 여행은 언제나 만족스러워요.',
    destinations: ['도쿄', '오사카', '런던', '로마', '싱가포르'],
    color: '#45B7D1',
    gradient: 'from-blue-400 to-indigo-300',
  },
};
