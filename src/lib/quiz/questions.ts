import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    question: '토요일 아침, 알람 없이 눈을 떴습니다.\n가장 먼저 하고 싶은 것은?',
    answers: [
      { text: '이불 속에서 좋아하는 음악 듣기', scores: { energy: -10, stimulus: -10, experience: -10 } },
      { text: '근처 새로 생긴 카페 탐방하기', scores: { energy: 10, environment: 10, experience: 10 } },
      { text: '아무 계획 없이 산책 나가기', scores: { planning: -10, environment: -10, experience: -5 } },
      { text: '친구들에게 연락해서 뭐 할지 정하기', scores: { energy: 10, planning: 10, experience: 10 } },
    ],
  },
  {
    id: 2,
    question: '스트레스를 받으면 당신은 주로...',
    answers: [
      { text: '혼자만의 시간이 필요하다', scores: { energy: -10, stimulus: -10, experience: -10 } },
      { text: '격렬한 운동으로 풀어야 한다', scores: { stimulus: 10, experience: 10 } },
      { text: '맛있는 걸 먹으러 나간다', scores: { energy: 10, environment: 10 } },
      { text: '새로운 곳을 가보고 싶어진다', scores: { stimulus: 10, planning: -10 } },
    ],
  },
  {
    id: 3,
    question: '영화를 고를 때 끌리는 장르는?',
    answers: [
      { text: '잔잔한 힐링 다큐멘터리', scores: { stimulus: -10, environment: -10, experience: -10 } },
      { text: '스릴 넘치는 액션/어드벤처', scores: { stimulus: 10, experience: 10 } },
      { text: '감성적인 로맨스/드라마', scores: { energy: -5, stimulus: -5 } },
      { text: '미지의 세계를 다룬 SF/판타지', scores: { stimulus: 10, planning: -10 } },
    ],
  },
  {
    id: 4,
    question: '친구가 깜짝 여행을 제안합니다.\n당신의 반응은?',
    answers: [
      { text: '"어디? 언제? 뭐 준비해야 해?"', scores: { planning: 10, stimulus: -10 } },
      { text: '"좋아! 일단 가자!"', scores: { planning: -10, stimulus: 10, energy: 10 } },
      { text: '"가고 싶긴 한데... 일정 좀 확인해볼게"', scores: { planning: 10, energy: -5 } },
      { text: '"어디든 좋아, 근데 나 픽업해줘"', scores: { planning: -5, experience: -10 } },
    ],
  },
  {
    id: 5,
    question: 'SNS에 가장 올리고 싶은 사진은?',
    answers: [
      { text: '아무도 없는 해변의 석양', scores: { environment: -10, energy: -10, experience: -10 } },
      { text: '높은 곳에서 내려다본 도시 야경', scores: { environment: 10, stimulus: 10 } },
      { text: '현지 시장에서 먹는 길거리 음식', scores: { energy: 10, environment: 10, stimulus: 10 } },
      { text: '예쁜 숙소에서의 한 컷', scores: { stimulus: -10, experience: -10, planning: 10 } },
    ],
  },
  {
    id: 6,
    question: '길을 걷다 갈림길이 나왔습니다.\n당신은?',
    answers: [
      { text: '지도 앱을 켜서 확인한다', scores: { planning: 10, stimulus: -10 } },
      { text: '사람이 적은 길로 간다', scores: { stimulus: 10, environment: -10, energy: -10 } },
      { text: '사람이 많은 길로 간다', scores: { energy: 10, environment: 10, stimulus: -10 } },
      { text: '그냥 느낌 가는 대로 간다', scores: { planning: -10, stimulus: 10 } },
    ],
  },
  {
    id: 7,
    question: '가장 이상적인 저녁 시간은?',
    answers: [
      { text: '좋은 음악과 와인, 그리고 책', scores: { energy: -10, stimulus: -10, experience: -10 } },
      { text: '현지인들과 어울리는 야시장', scores: { energy: 10, environment: 10, experience: 10 } },
      { text: '모닥불 앞에서 별 보기', scores: { environment: -10, energy: -5, experience: -10 } },
      { text: '새로운 클래스나 체험 활동', scores: { experience: 10, stimulus: 10 } },
    ],
  },
  {
    id: 8,
    question: '당신의 가방 스타일은?',
    answers: [
      { text: '필요한 것만 딱, 미니멀하게', scores: { planning: -10, stimulus: 10 } },
      { text: '만약을 대비해 다 챙기는 편', scores: { planning: 10, stimulus: -10 } },
      { text: '예쁜 것 위주로', scores: { environment: 10, stimulus: -5 } },
      { text: '카메라, 등산화 등 장비 위주', scores: { environment: -10, experience: 10, stimulus: 10 } },
    ],
  },
  {
    id: 9,
    question: '지금 가장 듣고 싶은 자연의 소리는?',
    answers: [
      { text: '파도 소리', scores: { environment: -10, experience: -10, energy: -10 } },
      { text: '새벽 숲속 새 소리', scores: { environment: -10, experience: 10, stimulus: 10 } },
      { text: '비 오는 카페 창가', scores: { environment: 10, energy: -10, experience: -10 } },
      { text: '축제의 북소리와 환호성', scores: { energy: 10, experience: 10, environment: 10 } },
    ],
  },
  {
    id: 10,
    question: '여행 중 하루가 남았다면?',
    answers: [
      { text: '아직 못 가본 곳을 한 군데라도 더', scores: { stimulus: 10, experience: 10 } },
      { text: '가장 좋았던 곳을 다시 방문', scores: { stimulus: -10, planning: 10 } },
      { text: '숙소에서 느긋하게 보내기', scores: { experience: -10, energy: -10 } },
      { text: '현지인 추천 맛집 투어', scores: { energy: 10, environment: 10 } },
    ],
  },
  {
    id: 11,
    question: '잠들기 전 자주 하는 상상은?',
    answers: [
      { text: '아무도 없는 섬에서 쉬는 나', scores: { environment: -10, energy: -10, experience: -10 } },
      { text: '유럽 골목길을 걷는 나', scores: { environment: 10, stimulus: 10, planning: -10 } },
      { text: '번지점프 같은 극한 체험하는 나', scores: { stimulus: 10, experience: 10 } },
      { text: '예쁜 호텔에서 룸서비스 받는 나', scores: { stimulus: -10, experience: -10, planning: 10 } },
    ],
  },
  {
    id: 12,
    question: '당신에게 여행이란?',
    answers: [
      { text: '지친 나를 위한 선물', scores: { experience: -10, stimulus: -10, energy: -10 } },
      { text: '새로운 나를 발견하는 시간', scores: { stimulus: 10, planning: -10 } },
      { text: '소중한 사람과의 추억 만들기', scores: { energy: 10, stimulus: -5 } },
      { text: '세상을 더 넓게 보는 경험', scores: { stimulus: 10, experience: 10, environment: 10 } },
    ],
  },
];
