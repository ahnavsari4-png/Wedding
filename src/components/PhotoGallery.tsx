import React, { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { TribalGeometricBorder } from './TribalDecorations';

interface PhotoGalleryProps {
  isGujarati: boolean;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ isGujarati }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'prewedding' | 'engagement' | 'rituals'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F5EDE1] relative overflow-hidden">
      <TribalGeometricBorder color="#8C2D19" className="h-3 mb-8 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#8C2D19] font-serif-gu font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#D97706]">✦</span>
            <span>{isGujarati ? 'સ્મૃતિ મંજૂષા' : 'Photo Gallery'}</span>
            <span className="text-[#D97706]">✦</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#8C2D19]">
            {isGujarati ? 'પ્રેમ અને સ્નેહની અમૂલ્ય ક્ષણો' : 'Cherished Memories & Moments'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#701D0E] font-serif-gu">
            {isGujarati
              ? 'પ્રી-વેડિંગ શૂટ, ગોળધાણા-સગાઈ મહોત્સવ અને પરંપરાગત શણગારની યાદગાર તસવીરો.'
              : 'Glimpses from pre-wedding shoots, engagement ceremonies, and traditional preparations.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold font-serif-gu transition-all ${
              activeCategory === 'all'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow border border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'તમામ તસવીરો' : 'All Photos'}
          </button>
          <button
            onClick={() => setActiveCategory('prewedding')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold font-serif-gu transition-all ${
              activeCategory === 'prewedding'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow border border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'પ્રી-વેડિંગ ક્ષણો' : 'Pre-Wedding'}
          </button>
          <button
            onClick={() => setActiveCategory('engagement')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold font-serif-gu transition-all ${
              activeCategory === 'engagement'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow border border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'સગાઈ મહોત્સવ' : 'Engagement'}
          </button>
          <button
            onClick={() => setActiveCategory('rituals')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold font-serif-gu transition-all ${
              activeCategory === 'rituals'
                ? 'bg-[#8C2D19] text-[#FDE68A] shadow border border-[#D97706]'
                : 'bg-[#FAF4EB] text-[#4A2810] hover:bg-[#F3E9D2] border border-[#8C2D19]/30'
            }`}
          >
            {isGujarati ? 'શુકન & શણગાર' : 'Rituals & Decor'}
          </button>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#8C2D19]/25 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col hover:border-[#D97706]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  referrerPolicy="no-referrer"
                  src={photo.url}
                  alt={photo.titleGu}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-serif-gu font-medium flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
                    <span>{isGujarati ? 'મોટી સ્ક્રીન પર જુઓ' : 'Click to Expand'}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#FFFDF9] flex-1 flex flex-col justify-between">
                <h3 className="font-serif-gu font-bold text-sm text-[#8C2D19]">
                  {isGujarati ? photo.titleGu : photo.titleEn}
                </h3>
                <p className="text-[11px] text-[#701D0E]/80 font-serif-gu mt-1">
                  {photo.captionGu}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-[#D97706]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20"
                title="બંધ કરો"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20"
                title="પાછળ"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20"
                title="આગળ"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] flex items-center justify-center bg-black">
                <img
                  referrerPolicy="no-referrer"
                  src={filteredPhotos[selectedPhotoIndex].url}
                  alt={filteredPhotos[selectedPhotoIndex].titleGu}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-4 bg-gradient-to-r from-[#701D0E] to-[#8C2D19] text-[#FDE68A] border-t border-[#D97706]/40 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-gu font-bold text-base">
                    {isGujarati ? filteredPhotos[selectedPhotoIndex].titleGu : filteredPhotos[selectedPhotoIndex].titleEn}
                  </h3>
                  <p className="text-xs text-white/90 font-serif-gu mt-0.5">
                    {filteredPhotos[selectedPhotoIndex].captionGu}
                  </p>
                </div>
                <div className="text-xs text-[#FDE68A]/80 font-medium">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
