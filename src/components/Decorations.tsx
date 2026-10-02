interface IconProps {
  className?: string;
  size?: number;
}

export function HeartIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeartOutlineIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function RoseIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M50 20 C42 20 36 26 36 34 C36 30 33 28 29 28 C23 28 19 33 19 39 C19 44 23 48 28 48 C25 50 23 54 23 58 C23 64 28 69 34 69 C36 72 40 74 44 74 L56 74 C60 74 64 72 66 69 C72 69 77 64 77 58 C77 54 75 50 72 48 C77 48 81 44 81 39 C81 33 77 28 71 28 C67 28 64 30 64 34 C64 26 58 20 50 20 Z" fill="currentColor" opacity="0.9" />
      </g>
    </svg>
  );
}

export function SparkleIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0 L13.5 8.5 L22 10 L13.5 11.5 L12 20 L10.5 11.5 L2 10 L10.5 8.5 Z"
        fill="currentColor"
      />
      <path
        d="M19 14 L19.8 17.2 L23 18 L19.8 18.8 L19 22 L18.2 18.8 L15 18 L18.2 17.2 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M5 14 L5.8 16.2 L8 17 L5.8 17.8 L5 20 L4.2 17.8 L2 17 L4.2 16.2 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export function RibbonIcon({ className = '', size = 60 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 5 C30 5 22 12 22 22 C22 32 30 39 40 39 C50 39 58 32 58 22 C58 12 50 5 40 5 Z" fill="currentColor" />
      <path d="M22 30 L10 50 L22 45 L28 38 Z" fill="currentColor" opacity="0.8" />
      <path d="M58 30 L70 50 L58 45 L52 38 Z" fill="currentColor" opacity="0.8" />
      <circle cx="40" cy="22" r="6" fill="white" opacity="0.3" />
    </svg>
  );
}

export function StarIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" />
    </svg>
  );
}

export function RosePetal({ className = '', size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2 C8 2 3 8 3 15 C3 22 8 28 15 28 C18 28 21 26 23 23 C26 21 28 18 28 15 C28 8 22 2 15 2 Z M15 6 C19 6 22 10 22 15 C22 19 19 22 15 22 C11 22 8 19 8 15 C8 10 11 6 15 6 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DoodleHeart({ className = '', size = 40 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 35 C20 35 5 25 5 15 C5 10 9 6 14 6 C17 6 19 8 20 10 C21 8 23 6 26 6 C31 6 35 10 35 15 C35 25 20 35 20 35 Z" />
    </svg>
  );
}

export function DoodleStar({ className = '', size = 30 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 3 L18 11 L27 12 L20 18 L22 27 L15 22 L8 27 L10 18 L3 12 L12 11 Z" />
    </svg>
  );
}

export function DoodleArrow({ className = '', size = 60 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 60 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 15 C15 5 25 25 35 12 C42 5 50 10 55 15 M55 15 L48 10 M55 15 L48 20" />
    </svg>
  );
}

export function Tape({ className = '' }: IconProps) {
  return (
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-baby-pink/40 backdrop-blur-sm rotate-2 ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    />
  );
}

export function PaperTear({ className = '', color = '#fff8f0' }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 L1200 0 L1200 20 L1180 25 L1160 18 L1140 28 L1120 16 L1100 26 L1080 14 L1060 24 L1040 18 L1020 30 L1000 16 L980 26 L960 14 L940 22 L920 28 L900 16 L880 24 L860 14 L840 26 L820 18 L800 28 L780 14 L760 22 L740 30 L720 16 L700 24 L680 14 L660 26 L640 18 L620 22 L600 30 L580 14 L560 24 L540 16 L520 28 L500 18 L480 26 L460 14 L440 22 L420 30 L400 16 L380 24 L360 14 L340 26 L320 18 L300 22 L280 30 L260 14 L240 24 L220 16 L200 28 L180 18 L160 26 L140 14 L120 22 L100 30 L80 16 L60 24 L40 14 L20 22 L0 18 Z"
        fill={color}
      />
    </svg>
  );
}
