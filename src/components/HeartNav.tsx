import { HeartIcon } from './Decorations';

interface HeartNavProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export function HeartNav({ sections, activeSection, onNavigate }: HeartNavProps) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 bg-white/60 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 border border-baby-pink/40 shadow-lg">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="relative transition-all duration-300"
          aria-label={`Go to section ${i + 1}`}
        >
          <HeartIcon
            size={i === activeSection ? 28 : 20}
            className={`transition-all duration-300 ${
              i === activeSection
                ? 'text-cherry animate-heartbeat drop-shadow-[0_0_8px_rgba(230,57,70,0.8)]'
                : i < activeSection
                ? 'text-baby-rose'
                : 'text-baby-200 hover:text-baby-400'
            }`}
          />
          {i === activeSection && (
            <span className="absolute -inset-2 rounded-full border-2 border-cherry/30 animate-pulse" />
          )}
        </button>
      ))}
    </nav>
  );
}
