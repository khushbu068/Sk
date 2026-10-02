import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { loveConfig } from '@/data/loveConfig';
import { HeartIcon, RoseIcon, SparkleIcon, StarIcon, DoodleHeart, DoodleStar } from '@/components/Decorations';

export function SlideFive() {
  const { finale, memories } = loveConfig;
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(0);

  const handleClick = () => {
    setShowModal(true);
    setModalStep(0);
    setTimeout(() => setModalStep(1), 800);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-burgundy py-24 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/30 via-burgundy/20 to-burgundy-dark/40" />

      {/* Floating photos around the message */}
      {memories.photos.slice(0, 5).map((photo, i) => {
        const positions = [
          'top-[8%] left-[4%] hidden md:block',
          'top-[12%] right-[6%] hidden md:block',
          'bottom-[15%] left-[5%] hidden lg:block',
          'bottom-[10%] right-[4%] hidden lg:block',
          'top-[45%] right-[2%] hidden xl:block',
        ];
        const rotations = [-8, 6, -5, 7, -3];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.35, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 + i * 0.5, duration: 1.2 }}
            className={`absolute ${positions[i]} z-0`}
          >
            <div
              className="bg-white/90 p-2 pb-6 rounded-sm shadow-lg"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
            >
              <img
                src={photo.src}
                alt=""
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-sm"
              />
              <p className="font-handwritten text-xs text-burgundy text-center mt-1">
                {photo.label}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Decorations */}
      <RoseIcon size={200} className="absolute -top-16 -left-16 text-cherry/10 animate-float-slow" />
      <RoseIcon size={180} className="absolute -bottom-10 -right-10 text-baby-500/10 animate-float" />
      <SparkleIcon size={30} className="absolute top-1/4 right-1/4 text-baby-300/30 animate-sparkle" />
      <SparkleIcon size={24} className="absolute bottom-1/3 left-1/4 text-cherry-light/30 animate-sparkle" />
      <DoodleStar size={36} className="absolute top-20 left-1/3 text-baby-300/20 animate-wiggle" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-serif italic text-2xl sm:text-4xl text-baby-100 text-center mb-8 relative z-10"
      >
        {finale.title}
      </motion.h2>

      {/* Love message paragraphs */}
      <div className="space-y-4 sm:space-y-5 max-w-2xl text-center relative z-10 mb-8">
        {finale.paragraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.6, duration: 0.8 }}
            className={`font-serif italic ${
              i === finale.paragraphs.length - 1
                ? 'text-xl sm:text-2xl md:text-3xl text-white text-shadow-glow font-semibold'
                : i === 0 || i === 1
                ? 'text-lg sm:text-xl text-baby-200'
                : 'text-base sm:text-lg md:text-xl text-baby-100'
            } leading-relaxed`}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Big reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3.8, duration: 1, type: 'spring', bounce: 0.5 }}
        className="text-center relative z-10 mb-6"
      >
        <p className="font-handwritten text-xl sm:text-2xl text-baby-300 mb-2">{finale.revealPre}</p>
        <h3 className="font-serif italic text-3xl sm:text-5xl md:text-6xl shimmer-text font-bold leading-tight">
          {finale.reveal}
        </h3>
        <SparkleIcon size={24} className="absolute -top-4 -left-4 text-baby-300 animate-sparkle" />
        <SparkleIcon size={20} className="absolute -bottom-2 -right-4 text-cherry-light animate-sparkle" />
        <StarIcon size={18} className="absolute top-1/2 -right-8 text-baby-300/60 animate-sparkle" />
      </motion.div>

      {/* Closing + postscript */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 4.6, duration: 0.8 }}
        className="font-handwritten text-2xl sm:text-3xl text-baby-100 text-center relative z-10 mb-3"
      >
        {finale.closing}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 5, duration: 0.8 }}
        className="font-handwritten text-lg sm:text-xl text-baby-200 text-center relative z-10 mb-10 max-w-xl px-4"
      >
        {finale.postscript}
      </motion.p>

      {/* Glowing heart button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 5.5, duration: 0.6, type: 'spring', bounce: 0.4 }}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative group z-10"
      >
        <span className="relative z-10 font-handwritten text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-cherry to-baby-500 px-8 sm:px-12 py-4 rounded-full shadow-xl transition-all duration-300 block">
          {finale.button}
        </span>
        <span className="absolute inset-0 rounded-full bg-cherry/50 blur-xl animate-glow-pulse" />
        <DoodleHeart size={28} className="absolute -top-4 -right-4 text-baby-300 animate-wiggle" />
        <DoodleHeart size={24} className="absolute -bottom-3 -left-4 text-baby-300 animate-wiggle" />
      </motion.button>

      {/* Modal — confetti / rose petal explosion */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-dark/80 backdrop-blur-md px-4"
            onClick={() => setShowModal(false)}
          >
            {/* Confetti hearts explosion */}
            {Array.from({ length: 30 }).map((_, i) => {
              const angle = (i / 30) * Math.PI * 2;
              const distance = 150 + Math.random() * 200;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              const sizes = [16, 20, 24, 28];
              const colors = ['text-cherry', 'text-baby-500', 'text-baby-400', 'text-baby-300', 'text-cherry-light'];
              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ x, y, opacity: [1, 1, 0], scale: [0, 1, 0.5], rotate: Math.random() * 360 }}
                  transition={{ duration: 1.5 + Math.random(), ease: 'easeOut' }}
                  className="absolute pointer-events-none"
                  style={{ color: colors[i % colors.length] }}
                >
                  {i % 3 === 0 ? (
                    <SparkleIcon size={sizes[i % sizes.length]} />
                  ) : i % 5 === 0 ? (
                    <StarIcon size={sizes[i % sizes.length]} />
                  ) : (
                    <HeartIcon size={sizes[i % sizes.length]} />
                  )}
                </motion.div>
              );
            })}

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={modalStep === 1 ? { scale: 1, rotate: 0 } : { scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
              className="relative bg-gradient-to-br from-cream to-baby-50 rounded-3xl px-8 sm:px-16 py-10 sm:py-14 text-center shadow-2xl border-4 border-baby-pink max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <HeartIcon size={50} className="text-cherry mx-auto mb-4 animate-heartbeat drop-shadow-[0_0_15px_rgba(230,57,70,0.5)]" />
              <h3 className="font-serif italic text-3xl sm:text-4xl text-burgundy mb-4">
                {finale.modalTitle}
              </h3>
              <p className="font-handwritten text-xl sm:text-2xl text-cherry mb-6">
                {finale.modalBody}
              </p>
              <div className="flex items-center justify-center gap-2">
                <RoseIcon size={24} className="text-cherry/60" />
                <span className="font-handwritten text-lg text-burgundy italic">come hereeee 🌹</span>
                <RoseIcon size={24} className="text-cherry/60" />
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 font-handwritten text-lg text-baby-400 hover:text-cherry transition-colors"
              >
                {finale.modalClose}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
