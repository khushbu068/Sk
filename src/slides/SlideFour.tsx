import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { loveConfig } from '@/data/loveConfig';
import { HeartIcon, RoseIcon, SparkleIcon, StarIcon, Tape, DoodleHeart } from '@/components/Decorations';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function SlideFour() {
  const { memories } = loveConfig;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % memories.photos.length);
  };
  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + memories.photos.length) % memories.photos.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden paper-texture py-24 px-4">
      {/* Background decorations */}
      <RoseIcon size={180} className="absolute -top-10 -right-16 text-baby-200/25 animate-float-slow" />
      <RoseIcon size={150} className="absolute bottom-10 -left-16 text-baby-100/25 animate-float" />
      <SparkleIcon size={26} className="absolute top-1/4 left-8 text-cherry/25 animate-sparkle" />
      <SparkleIcon size={20} className="absolute bottom-1/3 right-10 text-baby-400/35 animate-sparkle" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-burgundy text-shadow-soft">
          {memories.title}
        </h2>
        <p className="font-handwritten text-lg sm:text-xl text-cherry mt-3 max-w-2xl mx-auto px-4">
          {memories.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-16 bg-baby-300" />
          <HeartIcon size={16} className="text-baby-400" />
          <div className="h-px w-16 bg-baby-300" />
        </div>
      </motion.div>

      {/* Polaroid grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-5xl relative z-10">
        {memories.photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotate: photo.rotate * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.12, type: 'spring', bounce: 0.3 }}
            whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
            onClick={() => openLightbox(i)}
            className="relative bg-white p-3 pb-12 polaroid-shadow rounded-sm cursor-pointer"
            style={{ rotate: `${photo.rotate}deg` }}
          >
            <Tape />
            {/* Photo */}
            <div className="relative w-full aspect-square overflow-hidden bg-baby-100 rounded-sm">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/10 to-transparent" />
              {/* Hover hint */}
              <div className="absolute inset-0 bg-burgundy/0 hover:bg-burgundy/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <StarIcon size={28} className="text-white/80" />
                </div>
              </div>
            </div>
            {/* Caption */}
            <p className="font-handwritten text-base sm:text-lg text-burgundy text-center mt-3">
              {photo.caption}
            </p>
            {/* Label sticker */}
            <span
              className="absolute -bottom-2 right-2 font-handwritten text-xs bg-baby-100 text-cherry px-2 py-0.5 rounded-full border border-baby-pink/40 shadow-sm"
              style={{ transform: 'rotate(8deg)' }}
            >
              {photo.label}
            </span>
            <HeartIcon
              size={14}
              className={`absolute bottom-3 left-3 text-cherry/50`}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex items-center gap-2 relative z-10"
      >
        <DoodleHeart size={20} className="text-cherry animate-wiggle" />
        <span className="font-handwritten text-lg text-cherry italic">click any photo to see it bigger ❤️</span>
        <DoodleHeart size={20} className="text-cherry animate-wiggle" />
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-dark/90 backdrop-blur-md px-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Photo */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              className="relative bg-white p-4 pb-16 max-w-md w-full polaroid-shadow rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={memories.photos[lightboxIndex].src}
                alt={memories.photos[lightboxIndex].caption}
                className="w-full h-auto max-h-[70vh] object-contain rounded-sm"
              />
              <p className="font-handwritten text-xl text-burgundy text-center mt-4">
                {memories.photos[lightboxIndex].caption}
              </p>
              <span className="font-handwritten text-sm text-cherry mt-1 block text-center">
                {memories.photos[lightboxIndex].label}
              </span>
            </motion.div>

            {/* Counter */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-handwritten text-baby-200 text-lg">
              {lightboxIndex + 1} / {memories.photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
