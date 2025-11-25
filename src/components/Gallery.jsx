import React, { useState, useEffect } from 'react';
import FadeIn from './common/FadeIn';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = Array.from({ length: 12 }).map((_, i) => `${import.meta.env.BASE_URL}/image/g${i + 1}.jpg`);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ESC로 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <section className="py-16 bg-brand">
      <FadeIn>
        <h3 className="text-xl font-serif text-center mb-10 text-accent">
          G A L L E R Y
        </h3>
        <div className="grid grid-cols-3 gap-1 px-1 max-w-[800px] mx-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => openModal(idx)}
              className="aspect-square overflow-hidden cursor-pointer bg-gray-300 focus:outline-none"
            >
              <img
                src={img}
                alt={`Wedding ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* 라이트박스 모달 */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full mx-4 bg-black/30 rounded-xl overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // 안쪽 클릭은 닫히지 않도록
            >
              {/* 닫기 버튼 */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 p-1 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <X size={18} />
              </button>

              {/* 이전 버튼 */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronLeft size={20} />
              </button>

              {/* 메인 이미지 */}
              <img
                src={images[currentIndex]}
                alt={`Wedding ${currentIndex + 1}`}
                className="max-h-[80vh] w-auto object-contain"
              />

              {/* 다음 버튼 */}
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </FadeIn>
    </section>
  );
};

export default Gallery;
