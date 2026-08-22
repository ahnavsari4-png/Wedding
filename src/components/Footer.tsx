import React from 'react';
import { Heart, Share2, ArrowUp, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface FooterProps {
  onOpenKankotri: () => void;
  onTriggerShower: () => void;
  isGujarati: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenKankotri,
  onTriggerShower,
  isGujarati,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `*॥ શ્રી ગણેશાય નમઃ ॥*\n\n` +
      `સ્નેહી શ્રી,\n` +
      `અમારા સુપુત્ર *${WEDDING_DETAILS.groom.nameGu}* અને સુપુત્રી *${WEDDING_DETAILS.bride.nameGu}* ના શુભ લગ્ન ઉત્સવ પ્રસંગે આપશ્રીને સપરિવાર પધારવા ભાવભર્યું નિમંત્રણ પાઠવીએ છીએ.\n\n` +
      `🗓 *તારીખ:* ${WEDDING_DETAILS.weddingDateFormattedGu}\n` +
      `⏰ *મુહૂર્ત:* ${WEDDING_DETAILS.muhuratTimeGu}\n` +
      `📍 *સ્થળ:* ${WEDDING_DETAILS.mainVenueGu}\n\n` +
      `✨ ડિજિટલ કંકોત્રી અને કાર્યક્રમ પત્રિકા જોવા માટે અહીં ક્લિક કરો:\n${window.location.href}\n\n` +
      `_નિમંત્રક: સમસ્ત પટેલ પરિવાર (ભૈરવી & રાનકુવા)_`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[#851214] text-[#FDE68A] pt-14 pb-10 border-t-4 border-[#D4AF37] relative overflow-hidden">
      {/* Background Motifs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Sacred Symbol */}
        <div className="w-16 h-16 rounded-full bg-[#FAF5EE] text-[#851214] mx-auto flex items-center justify-center shadow-lg border-2 border-[#D4AF37] mb-6">
          <span className="font-ornate text-3xl">卐</span>
        </div>

        {/* Closing Shloka */}
        <div className="max-w-xl mx-auto mb-6 bg-black/20 p-4 rounded-2xl border border-[#FDE68A]/20">
          <p className="font-serif-gu text-xs sm:text-sm text-white/90 italic leading-relaxed whitespace-pre-line">
            {WEDDING_DETAILS.shlokas[2].shloka}
          </p>
          <div className="text-[11px] text-[#FDE68A] mt-2 font-serif-gu">
            {WEDDING_DETAILS.shlokas[2].meaning}
          </div>
        </div>

        <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#FDE68A] mb-2">
          {WEDDING_DETAILS.groom.nameGu} & {WEDDING_DETAILS.bride.nameGu}ના શુભ લગ્ન ઉત્સવ
        </h3>

        <p className="text-xs sm:text-sm font-serif-gu text-white/80 max-w-lg mx-auto mb-8">
          {isGujarati
            ? 'આપની મંગલ ઉપસ્થિતિ અને સ્નેહભર્યા આશીર્વાદ અમારા આ ઉત્સવને ચિરસ્મરણીય બનાવશે.'
            : 'Your gracious presence and blessings will add boundless joy to this sacred union.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            id="footer-kankotri-btn"
            onClick={onOpenKankotri}
            className="bg-[#FAF5EE] text-[#851214] hover:bg-[#FDE68A] px-5 py-2.5 rounded-xl font-serif-gu font-bold text-xs sm:text-sm shadow transition-all border border-[#D4AF37]"
          >
            {isGujarati ? 'ડિજિટલ કંકોત્રી જુઓ' : 'View Digital Kankotri'}
          </button>

          <button
            id="footer-whatsapp-share-btn"
            onClick={handleWhatsAppShare}
            className="bg-[#25D366] text-white hover:bg-[#1EBE5D] px-5 py-2.5 rounded-xl font-serif-gu font-bold text-xs sm:text-sm shadow transition-all flex items-center space-x-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{isGujarati ? 'WhatsApp પર કંકોત્રી મોકલો' : 'Share on WhatsApp'}</span>
          </button>

          <button
            onClick={onTriggerShower}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-serif-gu font-medium text-xs sm:text-sm transition-all border border-white/20 flex items-center space-x-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#FDE68A]" />
            <span>{isGujarati ? 'પુષ્પવૃષ્ટિ' : 'Shower Flowers'}</span>
          </button>
        </div>

        {/* Family Regard Line */}
        <div className="border-t border-[#FDE68A]/20 pt-8 pb-4 text-xs font-serif-gu text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            નિમંત્રક:{' '}
            <span className="text-[#FDE68A] font-bold">
              {WEDDING_DETAILS.groom.fatherGu} & {WEDDING_DETAILS.bride.fatherGu} પરિવાર
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span>સર્વ હક્ક સુરક્ષિત © ૨૦૨૭ શુભ વિવાહ</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="ઉપર જાઓ / Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
