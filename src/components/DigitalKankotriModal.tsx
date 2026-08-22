import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Printer, Sparkles, Download, Heart } from 'lucide-react';
import { WEDDING_DETAILS, WEDDING_EVENTS, FAMILY_LIST } from '../data/weddingData';

interface DigitalKankotriModalProps {
  isOpen: boolean;
  onClose: () => void;
  isGujarati: boolean;
}

export const DigitalKankotriModal: React.FC<DigitalKankotriModalProps> = ({
  isOpen,
  onClose,
  isGujarati,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const totalPages = 4;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="kankotri-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#851214] text-[#FDE68A] w-full max-w-3xl rounded-3xl p-1.5 sm:p-2 shadow-2xl border-4 border-[#D4AF37] relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Inner Card Container */}
        <div className="bg-[#FFFDF9] text-[#2C1810] rounded-2xl p-5 sm:p-10 border-2 border-[#D4AF37] relative overflow-hidden shadow-inner min-h-[520px] flex flex-col justify-between">
          {/* Ornate Gold Border Corners */}
          <div className="absolute top-2 left-2 text-[#D4AF37] text-lg select-none">❖</div>
          <div className="absolute top-2 right-2 text-[#D4AF37] text-lg select-none">❖</div>
          <div className="absolute bottom-2 left-2 text-[#D4AF37] text-lg select-none">❖</div>
          <div className="absolute bottom-2 right-2 text-[#D4AF37] text-lg select-none">❖</div>

          {/* Close Button */}
          <button
            id="close-kankotri-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#851214] text-[#FDE68A] hover:bg-[#A8191D] flex items-center justify-center shadow-md transition-colors z-20"
            title="બંધ કરો / Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Page Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === idx ? 'w-8 bg-[#851214]' : 'w-2 bg-[#D4AF37]/50 hover:bg-[#D4AF37]'
                }`}
                title={`પાનું ${idx + 1}`}
              />
            ))}
          </div>

          {/* Card Content - Page 0: Cover Page */}
          {currentPage === 0 && (
            <div className="text-center py-4 sm:py-6 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#851214] border-2 border-[#D4AF37] text-[#FDE68A] flex items-center justify-center shadow-lg mb-4">
                <span className="font-ornate text-4xl">卐</span>
              </div>

              <div className="text-[#851214] font-serif-gu font-bold text-lg mb-1">
                ॥ શ્રી ગણેશાય નમઃ ॥
              </div>
              <div className="text-xs text-[#9A3412] font-semibold mb-6">
                ॥ શ્રી કુળદેવી માતાય નમઃ ॥
              </div>

              <p className="font-serif-gu text-xs sm:text-sm text-[#851214] italic max-w-md mx-auto mb-6 whitespace-pre-line bg-[#FAF5EE] p-3 rounded-xl border border-[#E8DFC8]">
                {WEDDING_DETAILS.shlokas[0].shloka}
              </p>

              <div className="my-2">
                <div className="text-xs uppercase tracking-[0.3em] text-[#9A3412] font-bold mb-2">
                  શુભ લગ્ન કંકોત્રી
                </div>
                <h2 className="font-serif-gu text-3xl sm:text-4xl font-black text-[#851214]">
                  {WEDDING_DETAILS.groom.nameGu} <span className="text-[#C41E3A] font-sans">&</span> {WEDDING_DETAILS.bride.nameGu}
                </h2>
                <div className="text-xs sm:text-sm font-serif-gu text-[#6B4B3E] mt-2">
                  શુભ વિવાહ તારીખ: <span className="font-bold text-[#851214]">{WEDDING_DETAILS.weddingDateFormattedGu}</span>
                </div>
              </div>

              <div className="mt-8 text-xs font-serif-gu text-[#78350F] bg-[#FEF3C7] p-2.5 rounded-lg border border-[#FDE68A] max-w-sm mx-auto">
                સ્નેહભર્યું નિમંત્રણ પાઠવતા: <br />
                <span className="font-bold">સમસ્ત પટેલ પરિવાર (ભૈરવી & રાનકુવા)</span>
              </div>
            </div>
          )}

          {/* Card Content - Page 1: Invocation & Couple Details */}
          {currentPage === 1 && (
            <div className="text-center py-4 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
              <div className="text-xs font-serif-gu text-[#851214] font-semibold mb-2">
                ॥ શ્રી લક્ષ્મીનારાયણાય નમઃ ॥
              </div>

              <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#851214] mb-3">
                સ્નેહ નિમંત્રણ
              </h3>

              <p className="text-xs sm:text-sm font-serif-gu text-[#4A2810] leading-relaxed max-w-xl mx-auto mb-5">
                સ્નેહી શ્રી, પરમ કૃપાળુ પરમાત્મા તથા વડીલોના આશીર્વાદથી અમારા સુપુત્ર / સુપુત્રીના માંગલિક લગ્ન ઉત્સવ પ્રસંગે આપશ્રીને સપરિવાર પધારવા ભાવભર્યું નિમંત્રણ પાઠવીએ છીએ.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left bg-[#FAF5EE] p-4 rounded-xl border border-[#E8DFC8] my-2">
                <div className="border-b sm:border-b-0 sm:border-r border-[#D4AF37]/50 pb-3 sm:pb-0 sm:pr-3">
                  <div className="text-[11px] uppercase font-bold text-[#851214]">વરપક્ષ (GROOM)</div>
                  <div className="font-serif-gu font-bold text-base text-[#851214] mt-1">
                    {WEDDING_DETAILS.groom.nameGu}
                  </div>
                  <div className="text-xs text-[#4B5563] mt-1">
                    {WEDDING_DETAILS.groom.fatherGu} <br />
                    અને {WEDDING_DETAILS.groom.motherGu} ના સુપુત્ર
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-1">
                    મૂળ વતન: {WEDDING_DETAILS.groom.nativeGu}
                  </div>
                </div>

                <div className="pt-2 sm:pt-0 sm:pl-3">
                  <div className="text-[11px] uppercase font-bold text-[#C41E3A]">કન્યાપક્ષ (BRIDE)</div>
                  <div className="font-serif-gu font-bold text-base text-[#851214] mt-1">
                    {WEDDING_DETAILS.bride.nameGu}
                  </div>
                  <div className="text-xs text-[#4B5563] mt-1">
                    {WEDDING_DETAILS.bride.fatherGu} <br />
                    અને {WEDDING_DETAILS.bride.motherGu} ની સુપુત્રી
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-1">
                    મૂળ વતન: {WEDDING_DETAILS.bride.nativeGu}
                  </div>
                </div>
              </div>

              <div className="text-xs font-serif-gu text-[#851214] mt-3 italic">
                {WEDDING_DETAILS.shlokas[1].shloka}
              </div>
            </div>
          )}

          {/* Card Content - Page 2: Programs & Timings */}
          {currentPage === 2 && (
            <div className="py-2 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
              <div className="text-center mb-3">
                <div className="text-xs font-serif-gu text-[#851214] font-semibold">
                  ॥ મંગલ કાર્યક્રમ પત્રિકા ॥
                </div>
                <h3 className="font-serif-gu text-xl font-bold text-[#851214]">
                  લગ્ન વિધિ & મુહૂર્ત
                </h3>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {WEDDING_EVENTS.slice(0, 5).map((evt) => (
                  <div
                    key={evt.id}
                    className="p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E8DFC8] flex items-start justify-between text-xs"
                  >
                    <div>
                      <div className="font-serif-gu font-bold text-[#851214] text-sm">
                        {evt.titleGu}
                      </div>
                      <div className="text-[#6B7280] text-[11px]">{evt.venueGu}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#C41E3A]">{evt.timeGu}</div>
                      <div className="text-[10px] text-[#78350F]">{evt.dateGu}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-center p-2 rounded bg-[#FEF3C7] border border-[#FDE68A] text-xs font-serif-gu text-[#92400E]">
                મુખ્ય સ્થળ: <span className="font-bold">{WEDDING_DETAILS.mainVenueGu}</span>
              </div>
            </div>
          )}

          {/* Card Content - Page 3: Family Members & Best Wishes */}
          {currentPage === 3 && (
            <div className="py-3 flex-1 flex flex-col justify-center animate-in fade-in duration-300 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF5EE] text-[#851214] border border-[#D4AF37] flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-[#C41E3A] fill-[#C41E3A]" />
              </div>

              <h3 className="font-serif-gu text-xl font-bold text-[#851214] mb-2">
                દર્શનાભિલાષી & સ્નેહીજનો
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left my-2">
                {FAMILY_LIST.map((fam, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E8DFC8]">
                    <div className="text-[11px] font-bold text-[#851214] border-b border-[#D4AF37]/30 pb-1 mb-1">
                      {fam.relationGu}
                    </div>
                    <ul className="text-xs text-[#4A2810] space-y-0.5">
                      {fam.namesGu.map((name, idx) => (
                        <li key={idx} className="flex items-center space-x-1">
                          <span className="text-[#C41E3A] text-[10px]">❖</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="text-xs font-serif-gu text-[#851214] font-medium mt-3 bg-[#FEF3C7] p-2.5 rounded-lg border border-[#FDE68A]">
                નિમંત્રક: {WEDDING_DETAILS.groom.fatherGu} (મો. {WEDDING_DETAILS.contactNumbers[0].phone}) અને {WEDDING_DETAILS.bride.fatherGu} (મો. {WEDDING_DETAILS.contactNumbers[1].phone})
              </div>

              <div className="text-[11px] text-[#6B7280] mt-2">
                “આપની મંગલ ઉપસ્થિતિ એ જ અમારો ઉત્સવ છે”
              </div>
            </div>
          )}

          {/* Bottom Controls (Previous / Next / Print) */}
          <div className="mt-4 pt-3 border-t border-[#D4AF37]/40 flex items-center justify-between">
            <button
              id="kankotri-prev-btn"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentPage === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'bg-[#FAF5EE] text-[#851214] hover:bg-[#FDE68A] border border-[#D4AF37]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isGujarati ? 'પાછળ' : 'Prev'}</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-serif-gu font-bold text-[#851214]">
                પાનું {currentPage + 1} / {totalPages}
              </span>
              <button
                id="kankotri-print-btn"
                onClick={handlePrint}
                className="p-1.5 rounded-lg bg-[#FAF5EE] text-[#851214] hover:bg-[#FDE68A] border border-[#D4AF37] transition-all"
                title="કંકોત્રી પ્રિન્ટ / સેવ કરો"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            <button
              id="kankotri-next-btn"
              disabled={currentPage === totalPages - 1}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentPage === totalPages - 1
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'bg-[#851214] text-[#FDE68A] hover:bg-[#A8191D] shadow'
              }`}
            >
              <span>{isGujarati ? 'આગળ' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
