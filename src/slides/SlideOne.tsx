import { motion } from 'framer-motion';
import { useState } from 'react';
import { loveConfig } from '@/data/loveConfig';
import { HeartIcon, RoseIcon, SparkleIcon, StarIcon, DoodleHeart, DoodleStar } from '@/components/Decorations';

interface SlideOneProps {
  onProceed: () => void;
  isOpening?: boolean;
}

export function SlideOne({ onProceed, isOpening = true }: SlideOneProps) {
  const [isExiting, setIsExiting] = useState(false);
  const { hero } = loveConfig;

  const handleClick = () => {
    if (isOpening) {
      setIsExiting(true);
      setTimeout(() => {
        onProceed();
      }, 1400);
    } else {
      onProceed();
    }
  };

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-romantic"
      animate={isExiting ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Giant background roses */}
      <RoseIcon size={280} className="absolute -top-20 -left-20 text-baby-200/30 animate-float-slow" />
      <RoseIcon size={220} className="absolute -bottom-10 -right-10 text-baby-300/30 animate-float" />
      <RoseIcon size={180} className="absolute top-1/3 -right-20 text-baby-100/40 animate-float-delay" />
      <RoseIcon size={160} className="absolute bottom-1/4 -left-16 text-baby-200/25 animate-float-slow" />

      {/* Sparkles scattered */}
      <SparkleIcon size={30} className="absolute top-20 right-1/4 text-cherry/40 animate-sparkle" />
      <SparkleIcon size={24} className="absolute bottom-32 left-1/4 text-baby-400/50 animate-sparkle" />
      <SparkleIcon size={36} className="absolute top-1/4 left-1/3 text-burgundy/30 animate-sparkle" />
      <StarIcon size={20} className="absolute top-1/2 right-1/3 text-cherry/40 animate-sparkle" />
      <DoodleStar size={40} className="absolute bottom-1/3 right-1/4 text-baby-400/40 animate-wiggle" />
      <DoodleStar size={30} className="absolute top-10 left-1/2 text-burgundy/30 animate-wiggle" />

      {/* Big heartbeat heart */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        className="mb-6"
      >
        <div className="relative">
          <HeartIcon size={80} className="text-cherry animate-heartbeat drop-shadow-[0_0_30px_rgba(230,57,70,0.5)]" />
          <SparkleIcon size={20} className="absolute -top-2 -right-2 text-baby-400 animate-sparkle" />
          <SparkleIcon size={16} className="absolute -bottom-1 -left-1 text-baby-300 animate-sparkle" />
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-6"
      >
        <span className="font-handwritten text-3xl sm:text-4xl font-bold text-cherry bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-cherry/30 shadow-md">
          {hero.badge}
        </span>
      </motion.div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center px-6 max-w-2xl"
      >
        <h1 className="font-serif italic text-xl sm:text-3xl md:text-4xl text-burgundy leading-relaxed text-shadow-soft whitespace-pre-line">
          {hero.title}
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="font-handwritten text-lg sm:text-xl text-cherry mt-6 text-center px-6"
      >
        {hero.subtitle}
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6, type: 'spring', bounce: 0.4 }}
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 relative group"
      >
        <span className="relative z-10 font-handwritten text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-cherry to-baby-500 px-8 sm:px-12 py-4 rounded-full shadow-xl transition-all duration-300 group-hover:shadow-2xl block">
          {hero.button}
        </span>
        <span className="absolute inset-0 rounded-full bg-cherry/30 blur-xl animate-glow-pulse" />
        <DoodleHeart size={28} className="absolute -top-4 -right-4 text-baby-400 animate-wiggle" />
      </motion.button>

      {/* Bottom decorative line */}
      {isOpening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 flex items-center gap-3"
        >
          <div className="h-px w-12 bg-baby-300" />
          <span className="font-handwritten text-baby-400 text-sm">scroll to relive us</span>
          <div className="h-px w-12 bg-baby-300" />
        </motion.div>
      )}

      {/* Exit heart animation */}
      {isExiting && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 50, opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, ease: 'easeIn' }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <HeartIcon size={100} className="text-cherry" />
        </motion.div>
      )}
    </motion.div>
  );
}
