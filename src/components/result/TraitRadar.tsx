'use client';

import { motion } from 'framer-motion';
import { TraitScores } from '@/lib/quiz/types';

interface TraitRadarProps {
  scores: TraitScores;
}

const TRAITS = [
  { key: 'energy' as const, label: '외향', labelAlt: '내향' },
  { key: 'stimulus' as const, label: '모험', labelAlt: '안정' },
  { key: 'planning' as const, label: '체계', labelAlt: '즉흥' },
  { key: 'environment' as const, label: '도시', labelAlt: '자연' },
  { key: 'experience' as const, label: '활동', labelAlt: '휴식' },
];

const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = 90;

function polarToCart(angleDeg: number, r: number): [number, number] {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)];
}

export default function TraitRadar({ scores }: TraitRadarProps) {
  const angleStep = 360 / TRAITS.length;

  // Background pentagon rings
  const rings = [0.33, 0.66, 1].map((scale) => {
    const points = TRAITS.map((_, i) => polarToCart(i * angleStep, RADIUS * scale));
    return points.map((p) => p.join(',')).join(' ');
  });

  // Data polygon
  const dataPoints = TRAITS.map((t, i) => {
    const value = scores[t.key] / 100;
    return polarToCart(i * angleStep, RADIUS * value);
  });
  const dataPolygon = dataPoints.map((p) => p.join(',')).join(' ');

  return (
    <div className="flex flex-col items-center">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {/* Grid lines */}
        {rings.map((ring, i) => (
          <polygon
            key={i}
            points={ring}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.1}
            strokeWidth={1}
          />
        ))}

        {/* Axis lines */}
        {TRAITS.map((_, i) => {
          const [x, y] = polarToCart(i * angleStep, RADIUS);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth={1}
            />
          );
        })}

        {/* Data shape */}
        <motion.polygon
          points={dataPolygon}
          fill="url(#radarGrad)"
          fillOpacity={0.3}
          stroke="url(#radarGrad)"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {/* Data points */}
        {dataPoints.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={4}
            fill="white"
            stroke="#8B5CF6"
            strokeWidth={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Labels */}
        {TRAITS.map((t, i) => {
          const [x, y] = polarToCart(i * angleStep, RADIUS + 22);
          const value = scores[t.key];
          const label = value >= 50 ? t.label : t.labelAlt;
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-foreground/70 text-[11px] font-medium"
            >
              {label}
            </text>
          );
        })}

        <defs>
          <linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
