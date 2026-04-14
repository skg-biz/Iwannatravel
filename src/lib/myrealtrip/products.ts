import { TravelProduct } from './types';

export const products: TravelProduct[] = [
  // === HEALER (힐링 여행자) ===
  // Budget
  { id: 'h1', title: '제주 힐링 게스트하우스 2박', destination: '제주', price: 150000, priceRange: 'budget', imageEmoji: '🏡', description: '한라산이 보이는 조용한 게스트하우스에서 힐링', myrealTripUrl: 'https://www.myrealtrip.com/search?q=제주+힐링+게스트하우스', rating: 4.5, personalityTypes: ['healer'], tags: ['힐링', '제주'] },
  { id: 'h2', title: '다낭 해변 마사지 패키지', destination: '다낭', price: 350000, priceRange: 'budget', imageEmoji: '💆', description: '다낭 미케비치 근처 스파 & 마사지 풀코스', myrealTripUrl: 'https://www.myrealtrip.com/search?q=다낭+스파+마사지', rating: 4.7, personalityTypes: ['healer'], tags: ['스파', '다낭'] },
  { id: 'h3', title: '속초 온천 당일치기', destination: '속초', price: 80000, priceRange: 'budget', imageEmoji: '♨️', description: '설악산 뷰 온천에서 하루 힐링', myrealTripUrl: 'https://www.myrealtrip.com/search?q=속초+온천', rating: 4.3, personalityTypes: ['healer'], tags: ['온천', '속초'] },
  // Mid
  { id: 'h4', title: '발리 우붓 풀빌라 4박 5일', destination: '발리', price: 890000, priceRange: 'mid', imageEmoji: '🌴', description: '열대 정글 속 프라이빗 풀빌라에서의 완벽한 휴식', myrealTripUrl: 'https://www.myrealtrip.com/search?q=발리+우붓+풀빌라', rating: 4.8, personalityTypes: ['healer'], tags: ['리조트', '발리'] },
  { id: 'h5', title: '오키나와 리조트 3박 패키지', destination: '오키나와', price: 750000, priceRange: 'mid', imageEmoji: '🏖️', description: '에메랄드빛 바다가 보이는 리조트 올인클루시브', myrealTripUrl: 'https://www.myrealtrip.com/search?q=오키나와+리조트', rating: 4.6, personalityTypes: ['healer'], tags: ['리조트', '오키나와'] },
  { id: 'h6', title: '제주 럭셔리 한달살기', destination: '제주', price: 1200000, priceRange: 'mid', imageEmoji: '🍊', description: '서귀포 오션뷰 숙소에서 한 달간의 느린 여행', myrealTripUrl: 'https://www.myrealtrip.com/search?q=제주+한달살기', rating: 4.4, personalityTypes: ['healer'], tags: ['한달살기', '제주'] },
  // Luxury
  { id: 'h7', title: '몰디브 오버워터 빌라 5박', destination: '몰디브', price: 3500000, priceRange: 'luxury', imageEmoji: '🐠', description: '수상 빌라에서 즐기는 꿈같은 몰디브 바다', myrealTripUrl: 'https://www.myrealtrip.com/search?q=몰디브+오버워터+빌라', rating: 4.9, personalityTypes: ['healer'], tags: ['럭셔리', '몰디브'] },
  { id: 'h8', title: '하와이 마우이 프리미엄 리조트', destination: '하와이', price: 2800000, priceRange: 'luxury', imageEmoji: '🌺', description: '마우이 섬 최고급 리조트에서의 프리미엄 힐링', myrealTripUrl: 'https://www.myrealtrip.com/search?q=하와이+마우이+리조트', rating: 4.8, personalityTypes: ['healer'], tags: ['럭셔리', '하와이'] },

  // === ADVENTURER (모험 탐험가) ===
  // Budget
  { id: 'a1', title: '지리산 종주 2박 3일 트레킹', destination: '지리산', price: 200000, priceRange: 'budget', imageEmoji: '🥾', description: '지리산 종주 코스를 따라 걷는 3일간의 도전', myrealTripUrl: 'https://www.myrealtrip.com/search?q=지리산+트레킹', rating: 4.6, personalityTypes: ['adventurer'], tags: ['트레킹', '지리산'] },
  { id: 'a2', title: '세부 아일랜드호핑 + 스노클링', destination: '세부', price: 450000, priceRange: 'budget', imageEmoji: '🤿', description: '세부 섬 투어와 고래상어 스노클링 체험', myrealTripUrl: 'https://www.myrealtrip.com/search?q=세부+아일랜드호핑', rating: 4.7, personalityTypes: ['adventurer'], tags: ['액티비티', '세부'] },
  { id: 'a3', title: '치앙마이 정글 트레킹 투어', destination: '치앙마이', price: 350000, priceRange: 'budget', imageEmoji: '🌿', description: '태국 북부 정글을 누비는 2일 트레킹 어드벤처', myrealTripUrl: 'https://www.myrealtrip.com/search?q=치앙마이+트레킹', rating: 4.5, personalityTypes: ['adventurer'], tags: ['트레킹', '치앙마이'] },
  // Mid
  { id: 'a4', title: '뉴질랜드 번지점프 + 스카이다이빙', destination: '뉴질랜드', price: 1200000, priceRange: 'mid', imageEmoji: '🪂', description: '퀸즈타운에서 즐기는 극한 액티비티 풀패키지', myrealTripUrl: 'https://www.myrealtrip.com/search?q=뉴질랜드+번지점프', rating: 4.9, personalityTypes: ['adventurer'], tags: ['극한스포츠', '뉴질랜드'] },
  { id: 'a5', title: '아이슬란드 링로드 7일 투어', destination: '아이슬란드', price: 1400000, priceRange: 'mid', imageEmoji: '🌋', description: '빙하, 화산, 오로라를 한 번에 즐기는 아이슬란드 일주', myrealTripUrl: 'https://www.myrealtrip.com/search?q=아이슬란드+링로드', rating: 4.8, personalityTypes: ['adventurer'], tags: ['어드벤처', '아이슬란드'] },
  // Luxury
  { id: 'a6', title: '네팔 에베레스트 베이스캠프 트레킹', destination: '네팔', price: 2500000, priceRange: 'luxury', imageEmoji: '🏔️', description: '세계의 지붕, 에베레스트 베이스캠프까지의 위대한 여정', myrealTripUrl: 'https://www.myrealtrip.com/search?q=네팔+에베레스트+트레킹', rating: 4.9, personalityTypes: ['adventurer'], tags: ['트레킹', '네팔'] },
  { id: 'a7', title: '코스타리카 어드벤처 10일', destination: '코스타리카', price: 3000000, priceRange: 'luxury', imageEmoji: '🦜', description: '열대우림 짚라인, 화산 트레킹, 래프팅 올인원', myrealTripUrl: 'https://www.myrealtrip.com/search?q=코스타리카+어드벤처', rating: 4.7, personalityTypes: ['adventurer'], tags: ['어드벤처', '코스타리카'] },

  // === ROMANTIC (감성 로맨티스트) ===
  // Budget
  { id: 'r1', title: '교토 골목길 카페 투어', destination: '교토', price: 400000, priceRange: 'budget', imageEmoji: '🍵', description: '교토의 숨겨진 카페와 전통 거리를 걷는 감성 투어', myrealTripUrl: 'https://www.myrealtrip.com/search?q=교토+카페+투어', rating: 4.6, personalityTypes: ['romantic'], tags: ['감성', '교토'] },
  { id: 'r2', title: '전주 한옥마을 감성 투어', destination: '전주', price: 120000, priceRange: 'budget', imageEmoji: '🏯', description: '한복 체험과 전통 찻집이 어우러진 전주 감성 여행', myrealTripUrl: 'https://www.myrealtrip.com/search?q=전주+한옥마을', rating: 4.4, personalityTypes: ['romantic'], tags: ['감성', '전주'] },
  { id: 'r3', title: '후쿠오카 야경 & 카페 3일', destination: '후쿠오카', price: 450000, priceRange: 'budget', imageEmoji: '🌃', description: '후쿠오카의 감성 카페와 야타이 거리 야경 투어', myrealTripUrl: 'https://www.myrealtrip.com/search?q=후쿠오카+야경+카페', rating: 4.5, personalityTypes: ['romantic'], tags: ['야경', '후쿠오카'] },
  // Mid
  { id: 'r4', title: '프라하 + 체스키크룸로프 5일', destination: '프라하', price: 1100000, priceRange: 'mid', imageEmoji: '🏰', description: '동화 같은 프라하와 체스키크룸로프의 감성 여행', myrealTripUrl: 'https://www.myrealtrip.com/search?q=프라하+체스키크룸로프', rating: 4.8, personalityTypes: ['romantic'], tags: ['유럽', '프라하'] },
  { id: 'r5', title: '포르투 와이너리 투어 4일', destination: '포르투', price: 950000, priceRange: 'mid', imageEmoji: '🍷', description: '포르투갈의 보석, 포르투에서 즐기는 와인과 감성', myrealTripUrl: 'https://www.myrealtrip.com/search?q=포르투+와이너리', rating: 4.7, personalityTypes: ['romantic'], tags: ['와인', '포르투'] },
  // Luxury
  { id: 'r6', title: '파리 5성급 호텔 + 에펠탑 디너', destination: '파리', price: 2500000, priceRange: 'luxury', imageEmoji: '🗼', description: '파리 시내 5성급 호텔에서 즐기는 로맨틱 파리 여행', myrealTripUrl: 'https://www.myrealtrip.com/search?q=파리+5성급+호텔', rating: 4.9, personalityTypes: ['romantic'], tags: ['럭셔리', '파리'] },
  { id: 'r7', title: '산토리니 선셋 빌라 7일', destination: '산토리니', price: 2800000, priceRange: 'luxury', imageEmoji: '🌅', description: '이아 마을 선셋 뷰 프라이빗 빌라에서의 완벽한 일주일', myrealTripUrl: 'https://www.myrealtrip.com/search?q=산토리니+빌라', rating: 4.9, personalityTypes: ['romantic'], tags: ['럭셔리', '산토리니'] },

  // === WANDERER (자유로운 방랑자) ===
  // Budget
  { id: 'w1', title: '방콕 배낭여행 5일 가이드', destination: '방콕', price: 300000, priceRange: 'budget', imageEmoji: '🛺', description: '카오산로드에서 시작하는 자유로운 방콕 탐험', myrealTripUrl: 'https://www.myrealtrip.com/search?q=방콕+배낭여행', rating: 4.5, personalityTypes: ['wanderer'], tags: ['배낭여행', '방콕'] },
  { id: 'w2', title: '하노이 올드쿼터 워킹투어', destination: '하노이', price: 250000, priceRange: 'budget', imageEmoji: '🏍️', description: '하노이 구시가지를 누비며 현지 문화 체험', myrealTripUrl: 'https://www.myrealtrip.com/search?q=하노이+워킹투어', rating: 4.6, personalityTypes: ['wanderer'], tags: ['워킹투어', '하노이'] },
  { id: 'w3', title: '부산 감천문화마을 자유여행', destination: '부산', price: 150000, priceRange: 'budget', imageEmoji: '🎨', description: '부산의 숨겨진 골목과 로컬 맛집을 자유롭게 탐험', myrealTripUrl: 'https://www.myrealtrip.com/search?q=부산+감천문화마을', rating: 4.3, personalityTypes: ['wanderer'], tags: ['자유여행', '부산'] },
  // Mid
  { id: 'w4', title: '리스본 + 포르투 자유여행 7일', destination: '리스본', price: 1000000, priceRange: 'mid', imageEmoji: '🚃', description: '포르투갈 두 도시를 자유롭게 누비는 일주일', myrealTripUrl: 'https://www.myrealtrip.com/search?q=리스본+포르투+자유여행', rating: 4.7, personalityTypes: ['wanderer'], tags: ['자유여행', '리스본'] },
  { id: 'w5', title: '바르셀로나 현지체험 6일', destination: '바르셀로나', price: 1100000, priceRange: 'mid', imageEmoji: '🎭', description: '로컬 시장, 타파스 바, 골목길 탐험 바르셀로나', myrealTripUrl: 'https://www.myrealtrip.com/search?q=바르셀로나+현지체험', rating: 4.6, personalityTypes: ['wanderer'], tags: ['현지체험', '바르셀로나'] },
  // Luxury
  { id: 'w6', title: '모로코 사하라 사막 캠핑 투어', destination: '모로코', price: 2000000, priceRange: 'luxury', imageEmoji: '🐪', description: '사하라 사막 위 럭셔리 글램핑과 낙타 트레킹', myrealTripUrl: 'https://www.myrealtrip.com/search?q=모로코+사하라+사막', rating: 4.8, personalityTypes: ['wanderer'], tags: ['사막', '모로코'] },
  { id: 'w7', title: '남미 3개국 배낭여행 14일', destination: '남미', price: 2500000, priceRange: 'luxury', imageEmoji: '🌎', description: '페루, 볼리비아, 칠레를 잇는 남미 대장정', myrealTripUrl: 'https://www.myrealtrip.com/search?q=남미+배낭여행', rating: 4.7, personalityTypes: ['wanderer'], tags: ['배낭여행', '남미'] },

  // === PLANNER (완벽한 계획가) ===
  // Budget
  { id: 'p1', title: '오사카 3박 4일 알찬 패키지', destination: '오사카', price: 450000, priceRange: 'budget', imageEmoji: '🏯', description: '오사카 주요 관광지를 효율적으로 도는 알찬 패키지', myrealTripUrl: 'https://www.myrealtrip.com/search?q=오사카+패키지', rating: 4.5, personalityTypes: ['planner'], tags: ['패키지', '오사카'] },
  { id: 'p2', title: '도쿄 디즈니 + 시내관광 3일', destination: '도쿄', price: 500000, priceRange: 'budget', imageEmoji: '🎡', description: '도쿄 디즈니랜드와 시내 주요 명소를 알차게', myrealTripUrl: 'https://www.myrealtrip.com/search?q=도쿄+디즈니+패키지', rating: 4.6, personalityTypes: ['planner'], tags: ['패키지', '도쿄'] },
  { id: 'p3', title: '타이베이 맛집 완전정복 3일', destination: '타이베이', price: 350000, priceRange: 'budget', imageEmoji: '🧋', description: '타이베이 인기 맛집과 야시장 완벽 가이드 투어', myrealTripUrl: 'https://www.myrealtrip.com/search?q=타이베이+맛집+투어', rating: 4.4, personalityTypes: ['planner'], tags: ['맛집투어', '타이베이'] },
  // Mid
  { id: 'p4', title: '일본 간사이 JR패스 7일 투어', destination: '간사이', price: 900000, priceRange: 'mid', imageEmoji: '🚅', description: '교토, 오사카, 나라, 고베를 잇는 완벽한 일본 여행', myrealTripUrl: 'https://www.myrealtrip.com/search?q=간사이+JR패스+투어', rating: 4.8, personalityTypes: ['planner'], tags: ['패키지', '일본'] },
  { id: 'p5', title: '싱가포르 패밀리 올인원 5일', destination: '싱가포르', price: 1100000, priceRange: 'mid', imageEmoji: '🦁', description: '유니버셜, 가든스바이더베이, 센토사 올인원 패키지', myrealTripUrl: 'https://www.myrealtrip.com/search?q=싱가포르+패키지', rating: 4.7, personalityTypes: ['planner'], tags: ['패키지', '싱가포르'] },
  // Luxury
  { id: 'p6', title: '유럽 3개국 가이드 투어 12일', destination: '유럽', price: 3500000, priceRange: 'luxury', imageEmoji: '🗺️', description: '프랑스, 스위스, 이탈리아를 전문 가이드와 함께', myrealTripUrl: 'https://www.myrealtrip.com/search?q=유럽+가이드+투어', rating: 4.9, personalityTypes: ['planner'], tags: ['가이드투어', '유럽'] },
  { id: 'p7', title: '지중해 크루즈 7박', destination: '지중해', price: 4000000, priceRange: 'luxury', imageEmoji: '🚢', description: '로마, 바르셀로나, 마르세유를 잇는 럭셔리 크루즈', myrealTripUrl: 'https://www.myrealtrip.com/search?q=지중해+크루즈', rating: 4.8, personalityTypes: ['planner'], tags: ['크루즈', '지중해'] },
];
