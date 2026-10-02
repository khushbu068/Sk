import { motion } from 'framer-motion';
import { loveConfig } from '@/data/loveConfig';
import { HeartIcon, RoseIcon, SparkleIcon, StarIcon, DoodleHeart } from '@/components/Decorations';

export function SlideThree() {
  const { storyTimeline } = loveConfig;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-rose py-24 px-4">
      {/* Background decorations */}
      <RoseIcon size={200} className="absolute -top-10 -right-20 text-baby-200/30 animate-float-slow" />
      <RoseIcon size={160} className="absolute bottom-10 -left-16 text-baby-100/30 animate-float" />
      <SparkleIcon size={28} className="absolute top-1/4 left-10 text-cherry/30 animate-sparkle" />
      <SparkleIcon size={20} className="absolute bottom-1/3 right-12 text-baby-400/40 animate-sparkle" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <h2 className="font-serif italic text-4xl sm:text-6xl md:text-7xl text-burgundy text-shadow-soft">
          {storyTimeline.title}
        </h2>
        <p className="font-handwritten text-xl sm:text-2xl text-cherry mt-3 max-w-xl mx-auto">
          {storyTimeline.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-16 bg-baby-300" />
          <RoseIcon size={18} className="text-cherry" />
          <div className="h-px w-16 bg-baby-300" />
        </div>
      </motion.div>

      {/* Vertical timeline */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* Center line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-baby-300 via-cherry/40 to-baby-300 sm:-translate-x-1/2" />

        {storyTimeline.events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.3 }}
            className={`relative flex items-center mb-12 last:mb-0 ${
              event.side === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl border-2 border-baby-pink">
                {event.emoji}
              </div>
              <HeartIcon
                size={14}
                className="absolute -top-1 -right-1 text-cherry animate-heartbeat"
              />
            </div>

            {/* Card */}
            <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${event.side === 'left' ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
              <div className="glass-card rounded-2xl p-5 sm:p-6 relative">
                <span className="font-handwritten text-sm text-cherry font-bold tracking-wide">
                  {event.date}
                </span>
                <h3 className="font-serif italic text-xl sm:text-2xl text-burgundy mt-1 leading-tight">
                  {event.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-burgundy/80 mt-2 leading-relaxed">
                  {event.text}
                </p>
                {event.quote && (
                  <p className="font-handwritten text-base sm:text-lg text-cherry/80 mt-3 italic border-l-2 border-baby-pink/40 pl-3 sm:border-l-0 sm:pl-0 sm:border-r-2 sm:pr-3"
                     style={{ borderColor: 'rgba(255, 158, 181, 0.4)' }}
                  >
                    "{event.quote}"
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* End decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center gap-2 relative z-10"
      >
        <StarIcon size={16} className="text-baby-400" />
        <DoodleHeart size={20} className="text-cherry animate-wiggle" />
        <span className="font-handwritten text-lg text-cherry">...and the story continues every day</span>
        <DoodleHeart size={20} className="text-cherry animate-wiggle" />
        <StarIcon size={16} className="text-baby-400" />
      </motion.div>
    </section>
  );
}
