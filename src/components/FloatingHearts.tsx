import { useMemo } from 'react';
import { HeartIcon, RosePetal, SparkleIcon, StarIcon } from './Decorations';

const HEART_COLORS = [
  'text-baby-pink',
  'text-cherry',
  'text-baby-rose',
  'text-baby-300',
  'text-burgundy',
  'text-cherry-light',
];

interface FloatItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'heart' | 'sparkle' | 'star';
  color: string;
  opacity: number;
}

export function FloatingHearts({ count = 15 }: { count?: number }) {
  const items = useMemo<FloatItem[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 14 + Math.random() * 28,
      type: (['heart', 'sparkle', 'star'] as const)[Math.floor(Math.random() * 3)],
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.color}`}
          style={{
            left: `${item.left}%`,
            top: `${10 + Math.random() * 70}%`,
            opacity: item.opacity,
            animation: `float ${item.duration}s ease-in-out ${item.delay}s infinite`,
          }}
        >
          {item.type === 'heart' && <HeartIcon size={item.size} />}
          {item.type === 'sparkle' && <SparkleIcon size={item.size} />}
          {item.type === 'star' && <StarIcon size={item.size} />}
        </div>
      ))}
    </div>
  );
}

interface PetalItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  color: string;
}

export function FallingPetals({ count = 20 }: { count?: number }) {
  const petals = useMemo<PetalItem[]>(() => {
    const colors = [
      'text-baby-pink',
      'text-baby-rose',
      'text-baby-300',
      'text-baby-200',
      'text-cherry-light',
    ];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      size: 12 + Math.random() * 18,
      opacity: 0.3 + Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.color}`}
          style={{
            left: `${p.left}%`,
            top: '-5%',
            opacity: p.opacity,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <RosePetal size={p.size} />
        </div>
      ))}
    </div>
  );
}
