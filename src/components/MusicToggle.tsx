import { useState, useRef, useEffect } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';

const MUSIC_URL = import.meta.env.VITE_BACKGROUND_MUSIC_URL;

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!MUSIC_URL) return;
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current || !MUSIC_URL) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      {/* Volume slider */}
      {showVolume && MUSIC_URL && (
        <div className="glass-card rounded-full px-3 py-2 flex items-center gap-2">
          {volume === 0 ? (
            <VolumeX size={16} className="text-burgundy" />
          ) : (
            <Volume2 size={16} className="text-burgundy" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolume}
            className="w-20 accent-cherry"
          />
        </div>
      )}

      {/* Main toggle */}
      <button
        onClick={toggle}
        disabled={!MUSIC_URL}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          !MUSIC_URL
            ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
            : isPlaying
            ? 'bg-gradient-to-br from-baby-rose to-cherry text-white ribbon-glow scale-110'
            : 'bg-white/80 backdrop-blur-md text-burgundy border-2 border-baby-pink hover:scale-105'
        }`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={MUSIC_URL ? 'Tere Paas Main — Deepali Sahay' : 'Add VITE_BACKGROUND_MUSIC_URL to enable music'}
      >
        {isPlaying ? (
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Music2 size={20} className="absolute" />
            <span
              className="absolute inset-0 rounded-full border border-white/40"
              style={{ animation: 'spin 3s linear infinite' }}
            />
          </div>
        ) : (
          <Music size={22} />
        )}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-2 border-baby-pink animate-ping" />
        )}
      </button>
    </div>
  );
}
