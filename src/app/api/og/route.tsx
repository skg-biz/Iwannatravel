import { ImageResponse } from 'next/og';
import { personalityResults } from '@/lib/quiz/scoring';
import { TravelPersonality } from '@/lib/quiz/types';

// Node.js runtime — no 500 KB bundle limit (unlike Edge)
export const runtime = 'nodejs';

const VALID_TYPES: TravelPersonality[] = ['healer', 'adventurer', 'romantic', 'wanderer', 'planner', 'gourmet'];

const palette: Record<TravelPersonality, { bg: string; glow: string; accent: string }> = {
  healer:     { bg: '#0a2422', glow: '#4ECDC4', accent: '#4ECDC4' },
  adventurer: { bg: '#2a0d0d', glow: '#FF6B6B', accent: '#FF6B6B' },
  romantic:   { bg: '#1e0e2e', glow: '#DDA0DD', accent: '#DDA0DD' },
  wanderer:   { bg: '#2a250a', glow: '#FFD93D', accent: '#FFD93D' },
  planner:    { bg: '#0a1a2e', glow: '#45B7D1', accent: '#45B7D1' },
  gourmet:    { bg: '#2a1a08', glow: '#F4A261', accent: '#F4A261' },
};

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const type = (searchParams.get('type') ?? 'healer') as TravelPersonality;

  if (!VALID_TYPES.includes(type)) {
    return new Response('Invalid type', { status: 400 });
  }

  const result = personalityResults[type];
  const c = palette[type];

  // Korean font (served from /public/fonts/)
  const fontData = await fetch(`${origin}/fonts/NotoSansKR-Bold.ttf`).then((r) =>
    r.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `radial-gradient(ellipse at 50% 40%, ${c.glow}22 0%, ${c.bg} 60%, #0d1117 100%)`,
          fontFamily: 'NotoSansKR',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
            display: 'flex',
          }}
        />

        {/* Emoji */}
        <div style={{ fontSize: '110px', marginBottom: '24px', display: 'flex' }}>
          {result.emoji}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '76px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '18px',
            display: 'flex',
            letterSpacing: '-1px',
          }}
        >
          {result.name}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '34px',
            color: c.accent,
            marginBottom: '0px',
            display: 'flex',
            opacity: 0.9,
          }}
        >
          {result.subtitle}
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: '48px',
            width: '120px',
            height: '2px',
            background: `${c.accent}66`,
            display: 'flex',
          }}
        />

        {/* Service name */}
        <div
          style={{
            marginTop: '24px',
            fontSize: '26px',
            color: 'rgba(255,255,255,0.35)',
            display: 'flex',
            letterSpacing: '2px',
          }}
        >
          아 여행가고싶다
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'NotoSansKR',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
