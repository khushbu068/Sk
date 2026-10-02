import { motion } from 'framer-motion';
import { loveConfig } from '@/data/loveConfig';
import { DoodleHeart, DoodleStar, SparkleIcon, HeartIcon, RoseIcon } from '@/components/Decorations';

export function SlideTwo() {
  const { bubuSection } = loveConfig;

  const decorations = [
    { component: <DoodleHeart size={30} className="text-baby-400" />, pos: 'top-10 left-10', anim: 'animate-float' },
    { component: <DoodleStar size={24} className="text-cherry/50" />, pos: 'top-20 right-16', anim: 'animate-sparkle' },
    { component: <SparkleIcon size={20} className="text-burgundy/40" />, pos: 'bottom-32 left-20', anim: 'animate-sparkle' },
    { component: <RoseIcon size={50} className="text-baby-200" />, pos: 'top-1/3 right-8', anim: 'animate-float-slow' },
    { component: <HeartIcon size={18} className="text-cherry/40" />, pos: 'bottom-10 left-1/3', anim: 'animate-float' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden paper-texture py-24 px-4">
      {/* Section decorations */}
      {decorations.map((dec, i) => (
        <div key={i} className={`absolute ${dec.pos} ${dec.anim} pointer-events-none hidden sm:block`}>
          {dec.component}
        </div>
      ))}

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 sm:mb-14 relative z-10"
      >
        <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-burgundy text-shadow-soft">
          {bubuSection.title}
        </h2>
        <p className="font-handwritten text-lg sm:text-2xl text-cherry mt-3 max-w-xl mx-auto px-4">
          {bubuSection.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-16 bg-baby-300" />
          <HeartIcon size={16} className="text-baby-400" />
          <div className="h-px w-16 bg-baby-300" />
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl relative z-10 mb-10">
        {bubuSection.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', bounce: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={`glass-card rounded-3xl p-6 sm:p-8 relative cursor-default ${
              i % 2 === 0 ? 'border-baby-pink/60' : 'border-baby-rose/60'
            }`}
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cherry to-baby-500 flex items-center justify-center text-2xl shadow-lg">
              {card.emoji}
            </div>

            <HeartIcon
              size={20}
              className={`absolute top-4 right-4 ${
                i % 3 === 0 ? 'text-baby-400' : i % 3 === 1 ? 'text-cherry/50' : 'text-baby-rose'
              } animate-heartbeat`}
            />

            <p className="font-handwritten text-xl sm:text-2xl text-burgundy leading-relaxed pl-2 pt-2">
              {card.text}
            </p>

            <div className="mt-4 flex items-center gap-1">
              <SparkleIcon size={14} className="text-baby-300" />
              <div className="h-px flex-1 bg-gradient-to-r from-baby-200 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <p className="font-serif italic text-xl sm:text-2xl text-burgundy leading-relaxed">
          {bubuSection.closing}
        </p>
      </motion.div>

      {/* Sticker labels */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-3 relative z-10"
      >
        {bubuSection.stickers.map((sticker, i) => (
          <span
            key={i}
            className="font-handwritten text-sm sm:text-base bg-white/70 backdrop-blur-sm text-cherry px-4 py-1.5 rounded-full border border-baby-pink/40 shadow-sm"
            style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
          >
            {sticker}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
