import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Printer, Sparkles, Download, Heart } from 'lucide-react';
import { WEDDING_DETAILS, WEDDING_EVENTS, FAMILY_LIST } from '../data/weddingData';
import {
  TribalGeometricBorder,
  TribalCornerFiligree,
  WarliCoupleWeddingMotif,
  WarliMusiciansBand,
  TribalToranBanner,
} from './TribalDecorations';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#701D0E] via-[#8C2D19] to-[#541208] text-[#FDE68A] w-full max-w-3xl rounded-3xl p-2 sm:p-3 shadow-2xl border-4 border-[#D97706] relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Inner Card Container with Tribal Canvas */}
        <div className="bg-[#FFFDF9] text-[#3D1D13] rounded-2xl p-5 sm:p-8 border-2 border-[#8C2D19]/40 relative overflow-hidden shadow-inner min-h-[540px] flex flex-col justify-between">
          {/* Tribal Corner Filigrees */}
          <div className="absolute top-1.5 left-1.5 pointer-events-none opacity-80">
            <TribalCornerFiligree position="top-left" color="#8C2D19" className="w-8 h-8" />
          </div>
          <div className="absolute top-1.5 right-1.5 pointer-events-none opacity-80">
            <TribalCornerFiligree position="top-right" color="#8C2D19" className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1.5 left-1.5 pointer-events-none opacity-80">
            <TribalCornerFiligree position="bottom-left" color="#8C2D19" className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1.5 right-1.5 pointer-events-none opacity-80">
            <TribalCornerFiligree position="bottom-right" color="#8C2D19" className="w-8 h-8" />
          </div>

          {/* Close Button */}
          <button
            id="close-kankotri-btn"
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#8C2D19] text-[#FDE68A] hover:bg-[#701D0E] flex items-center justify-center shadow-md transition-colors z-20 border border-[#D97706]/50"
            title="બંધ કરો / Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Toran Banner at Top */}
          <div className="mb-2">
            <TribalToranBanner className="w-full h-8 opacity-85" />
          </div>

          {/* Top Page Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === idx ? 'w-8 bg-[#8C2D19]' : 'w-2 bg-[#D97706]/40 hover:bg-[#D97706]'
                }`}
                title={`પાનું ${idx + 1}`}
              />
            ))}
          </div>

          {/* Card Content - Page 0: Cover Page */}
          {currentPage === 0 && (
            <div className="text-center py-2 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-[#701D0E] via-[#8C2D19] to-[#D97706] border-2 border-[#FDE68A] text-[#FDE68A] flex items-center justify-center shadow-lg mb-2">
                <span className="font-ornate text-2xl font-bold">ૐ</span>
              </div>

              <div className="text-[#8C2D19] font-serif-gu font-bold text-lg mb-0.5">
                ॥ શ્રી ગણેશાય નમઃ ॥
              </div>
              <div className="text-xs text-[#B45309] font-semibold mb-3">
                ॥ શ્રી કુળદેવી માતાય નમઃ ॥
              </div>

              {/* Tribal Warli Couple Badge */}
              <div className="flex justify-center mb-3">
                <div className="bg-[#FAF4EB] px-4 py-1 rounded-xl border border-[#8C2D19]/30 shadow-inner">
                  <WarliCoupleWeddingMotif color="#8C2D19" className="w-36 h-20" />
                </div>
              </div>

              <p className="font-serif-gu text-xs text-[#701D0E] italic max-w-md mx-auto mb-3 whitespace-pre-line bg-[#FAF4EB] p-2.5 rounded-xl border border-[#8C2D19]/20">
                {WEDDING_DETAILS.shlokas[0].shloka}
              </p>

              <div className="my-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-[#B45309] font-bold mb-1 flex items-center justify-center gap-1.5">
                  <span>✦</span>
                  <span>પરંપરાગત શુભ લગ્ન કંકોત્રી</span>
                  <span>✦</span>
                </div>
                <h2 className="font-serif-gu text-2xl sm:text-3xl font-black text-[#8C2D19]">
                  {WEDDING_DETAILS.groom.nameGu} <span className="text-[#D97706] font-sans">&</span> {WEDDING_DETAILS.bride.nameGu}
                </h2>
                <div className="text-xs sm:text-sm font-serif-gu text-[#701D0E] mt-1">
                  શુભ વિવાહ તારીખ: <span className="font-bold text-[#8C2D19]">{WEDDING_DETAILS.weddingDateFormattedGu}</span>
                </div>
              </div>

              <div className="mt-4 text-xs font-serif-gu text-[#701D0E] bg-[#FAF4EB] p-2 rounded-lg border border-[#8C2D19]/30 max-w-sm mx-auto shadow-sm">
                સ્નેહભર્યું નિમંત્રણ પાઠવતા: <br />
                <span className="font-bold text-[#8C2D19]">સમસ્ત પટેલ પરિવાર (ભૈરવી & રાનકુવા)</span>
              </div>
            </div>
          )}

          {/* Card Content - Page 1: Invocation & Couple Details */}
          {currentPage === 1 && (
            <div className="text-center py-2 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
              <div className="text-xs font-serif-gu text-[#8C2D19] font-bold mb-1 flex items-center justify-center gap-1">
                <span>✦</span>
                <span>॥ શ્રી લક્ષ્મીનારાયણાય નમઃ ॥</span>
                <span>✦</span>
              </div>

              <h3 className="font-serif-gu text-xl font-bold text-[#8C2D19] mb-2">
                સ્નેહ નિમંત્રણ
              </h3>

              <p className="text-xs font-serif-gu text-[#4A2810] leading-relaxed max-w-xl mx-auto mb-3">
                સ્નેહી શ્રી, પરમ કૃપાળુ પરમાત્મા તથા વડીલોના આશીર્વાદથી અમારા સુપુત્ર / સુપુત્રીના માંગલિક લગ્ન ઉત્સવ પ્રસંગે આપશ્રીને સપરિવાર પધારવા ભાવભર્યું નિમંત્રણ પાઠવીએ છીએ.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left bg-[#FAF4EB] p-3.5 rounded-xl border border-[#8C2D19]/30 my-2">
                <div className="border-b sm:border-b-0 sm:border-r border-[#8C2D19]/30 pb-2 sm:pb-0 sm:pr-3">
                  <div className="text-[11px] uppercase font-bold text-[#8C2D19] flex items-center gap-1">
                    <span>✦</span>
                    <span>વરપક્ષ (GROOM)</span>
                  </div>
                  <div className="font-serif-gu font-bold text-base text-[#8C2D19] mt-0.5">
                    {WEDDING_DETAILS.groom.nameGu}
                  </div>
                  <div className="text-xs text-[#4B5563] mt-0.5">
                    {WEDDING_DETAILS.groom.fatherGu} <br />
                    અને {WEDDING_DETAILS.groom.motherGu} ના સુપુત્ર
                  </div>
                  <div className="text-[11px] text-[#701D0E] mt-1 font-medium">
                    મૂળ વતન: {WEDDING_DETAILS.groom.nativeGu}
                  </div>
                </div>

                <div className="pt-2 sm:pt-0 sm:pl-3">
                  <div className="text-[11px] uppercase font-bold text-[#8C2D19] flex items-center gap-1">
                    <span>✦</span>
                    <span>કન્યાપક્ષ (BRIDE)</span>
                  </div>
                  <div className="font-serif-gu font-bold text-base text-[#8C2D19] mt-0.5">
                    {WEDDING_DETAILS.bride.nameGu}
                  </div>
                  <div className="text-xs text-[#4B5563] mt-0.5">
                    {WEDDING_DETAILS.bride.fatherGu} <br />
                    અને {WEDDING_DETAILS.bride.motherGu} ની સુપુત્રી
                  </div>
                  <div className="text-[11px] text-[#701D0E] mt-1 font-medium">
                    મૂળ વતન: {WEDDING_DETAILS.bride.nativeGu}
                  </div>
                </div>
              </div>

              {/* Musicians Strip */}
              <div className="my-2 px-2 py-1 bg-[#FAF4EB] rounded-lg border border-[#8C2D19]/20">
                <WarliMusiciansBand color="#8C2D19" className="w-full h-8" />
              </div>

              <div className="text-xs font-serif-gu text-[#8C2D19] mt-1 italic">
                {WEDDING_DETAILS.shlokas[1].shloka}
              </div>
            </div>
          )}

          {/* Card Content - Page 2: Programs & Timings */}
          {currentPage === 2 && (
            <div className="py-2 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
              <div className="text-center mb-2">
                <div className="text-xs font-serif-gu text-[#8C2D19] font-bold">
                  ॥ મંગલ કાર્યક્રમ પત્રિકા ॥
                </div>
                <h3 className="font-serif-gu text-lg sm:text-xl font-bold text-[#8C2D19]">
                  લગ્ન વિધિ & શુભ મુહૂર્ત
                </h3>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {WEDDING_EVENTS.slice(0, 5).map((evt) => (
                  <div
                    key={evt.id}
                    className="p-2 rounded-lg bg-[#FAF4EB] border border-[#8C2D19]/20 flex items-start justify-between text-xs"
                  >
                    <div>
                      <div className="font-serif-gu font-bold text-[#8C2D19] text-sm">
                        {evt.titleGu}
                      </div>
                      <div className="text-[#4B5563] text-[11px]">{evt.venueGu}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#8C2D19]">{evt.timeGu}</div>
                      <div className="text-[10px] text-[#B45309] font-medium">{evt.dateGu}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-center p-2 rounded-xl bg-[#FAF4EB] border border-[#8C2D19]/30 text-xs font-serif-gu text-[#701D0E]">
                મુખ્ય સ્થળ: <span className="font-bold text-[#8C2D19]">{WEDDING_DETAILS.mainVenueGu}</span>
              </div>
            </div>
          )}

          {/* Card Content - Page 3: Family Members & Best Wishes */}
          {currentPage === 3 && (
            <div className="py-2 flex-1 flex flex-col justify-center animate-in fade-in duration-300 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF4EB] text-[#8C2D19] border border-[#8C2D19]/30 flex items-center justify-center mb-1 shadow-sm">
                <Heart className="w-5 h-5 text-[#8C2D19] fill-[#8C2D19]" />
              </div>

              <h3 className="font-serif-gu text-lg sm:text-xl font-bold text-[#8C2D19] mb-1">
                દર્શનાભિલાષી & સ્નેહીજનો
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left my-2">
                {FAMILY_LIST.map((fam, i) => (
                  <div key={i} className="p-2 rounded-lg bg-[#FAF4EB] border border-[#8C2D19]/20">
                    <div className="text-[11px] font-bold text-[#8C2D19] border-b border-[#8C2D19]/30 pb-0.5 mb-1 flex items-center gap-1">
                      <span>✦</span>
                      <span>{fam.relationGu}</span>
                    </div>
                    <ul className="text-xs text-[#4A2810] space-y-0.5">
                      {fam.namesGu.map((name, idx) => (
                        <li key={idx} className="flex items-center space-x-1">
                          <span className="text-[#D97706] text-[9px]">❖</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="text-xs font-serif-gu text-[#701D0E] font-medium mt-2 bg-[#FAF4EB] p-2 rounded-lg border border-[#8C2D19]/30">
                નિમંત્રક: {WEDDING_DETAILS.groom.fatherGu} (મો. {WEDDING_DETAILS.contactNumbers[0].phone}) અને {WEDDING_DETAILS.bride.fatherGu} (મો. {WEDDING_DETAILS.contactNumbers[1].phone})
              </div>

              <div className="text-[11px] text-[#701D0E]/80 mt-1 font-serif-gu">
                “આપની મંગલ ઉપસ્થિતિ એ જ અમારો ઉત્સવ છે”
              </div>
            </div>
          )}

          {/* Bottom Controls (Previous / Next / Print) */}
          <div className="mt-3 pt-2 border-t border-[#8C2D19]/30 flex items-center justify-between">
            <button
              id="kankotri-prev-btn"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentPage === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'bg-[#FAF4EB] text-[#8C2D19] hover:bg-[#F3E9D2] border border-[#8C2D19]/40 font-serif-gu'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isGujarati ? 'પાછળ' : 'Prev'}</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-serif-gu font-bold text-[#8C2D19]">
                પાનું {currentPage + 1} / {totalPages}
              </span>
              <button
                id="kankotri-print-btn"
                onClick={handlePrint}
                className="p-1.5 rounded-lg bg-[#FAF4EB] text-[#8C2D19] hover:bg-[#F3E9D2] border border-[#8C2D19]/40 transition-all shadow-sm"
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
                  : 'bg-gradient-to-r from-[#8C2D19] to-[#701D0E] text-[#FDE68A] hover:brightness-110 shadow font-serif-gu'
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
