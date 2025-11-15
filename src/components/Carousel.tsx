"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselItem = {
  src: string;
  alt: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({ items }: CarouselProps) {
  const slides = useMemo(() => items ?? [], [items]);
  const [current, setCurrent] = useState(0);

  if (!slides.length) {
    return null;
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrent(index);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex h-full flex-col"
          >
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-white/10 to-white/5">
              <Image
                key={slides[current].src}
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                priority={current === 0}
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain p-4 sm:p-8"
                unoptimized={false}
              />
              {/* Indicador de slide atual - dentro da área da imagem, no canto superior direito */}
              <div className="absolute top-4 right-4 z-20 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                {current + 1} / {slides.length}
              </div>
            </div>
            <figcaption className="px-6 py-4 text-center text-sm text-[#94a3b8] sm:px-8 sm:py-6 sm:text-base">
              {slides[current].alt}
            </figcaption>
          </motion.div>
        </AnimatePresence>

        {/* Botão Anterior - Mais visível */}
        <button
          type="button"
          onClick={goToPrev}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border-2 border-white/40 bg-white/20 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:border-white/60 hover:shadow-xl md:left-4 md:p-4"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} className="md:size-6" />
        </button>

        {/* Botão Próximo - Mais visível */}
        <button
          type="button"
          onClick={goToNext}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border-2 border-white/40 bg-white/20 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:border-white/60 hover:shadow-xl md:right-4 md:p-4"
          aria-label="Próximo slide"
        >
          <ChevronRight size={24} className="md:size-6" />
        </button>
      </div>

      {/* Indicadores de navegação */}
      <div className="mt-6 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "h-3 w-12 bg-blue-500 shadow-lg shadow-blue-500/50"
                : "h-3 w-3 bg-white/30 hover:bg-white/50 hover:scale-110"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={current === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}

