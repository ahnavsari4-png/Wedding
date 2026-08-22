import React, { useState } from 'react';
import { Sparkles, Heart, Flame, Shield, Sun, Crown } from 'lucide-react';
import { GUJARATI_CUSTOMS } from '../data/weddingData';
import { TribalGeometricBorder, WarliMusiciansBand } from './TribalDecorations';

interface GujaratiCustomsProps {
  isGujarati: boolean;
}

export const GujaratiCustoms: React.FC<GujaratiCustomsProps> = ({ isGujarati }) => {
  const icons = [Flame, Sun, Heart, Crown, Sparkles, Shield];

  return (
    <section id="customs" className="py-16 sm:py-24 bg-[#FFFDF9] relative overflow-hidden">
      <TribalGeometricBorder color="#8C2D19" className="h-3 mb-8 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[#8C2D19] font-serif-gu font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#D97706]">✦</span>
            <span>{isGujarati ? 'સંસ્કૃતિ અને સંસ્કાર' : 'Sacred Gujarati Traditions'}</span>
            <span className="text-[#D97706]">✦</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#8C2D19]">
            {isGujarati ? 'ગુજરાતી લગ્નની મંગલ વિધિઓ અને મહત્વ' : 'The Spiritual Meaning of Wedding Customs'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#701D0E] font-serif-gu leading-relaxed">
            {isGujarati
              ? 'ગુજરાતી લગ્નની દરેક રસમ પાછળ ઊંડા પારિવારિક સંબંધો, આધ્યાત્મિક સંસ્કારો અને પરસ્પર સમર્પણની ભાવના જોડાયેલી છે.'
              : 'Every Gujarati wedding ritual carries deep spiritual significance, honoring family bonds and divine harmony.'}
          </p>
        </div>

        {/* Customs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUJARATI_CUSTOMS.map((custom, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-[#FAF4EB] rounded-2xl p-6 border border-[#8C2D19]/25 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#D97706]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#701D0E] to-[#8C2D19] text-[#FDE68A] flex items-center justify-center shadow-md mb-4 border border-[#D97706]/40">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-gu text-lg font-bold text-[#8C2D19] mb-2">
                    {isGujarati ? custom.titleGu : custom.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] font-serif-gu leading-relaxed mb-4">
                    {custom.summaryGu}
                  </p>
                </div>

                <div className="bg-white/90 p-3 rounded-xl border border-[#8C2D19]/20 text-xs font-serif-gu text-[#701D0E]">
                  <span className="font-bold text-[#8C2D19]">મહત્વ: </span>
                  {custom.meaningGu}
                </div>
              </div>
            );
          })}
        </div>

        {/* Musicians Divider */}
        <div className="my-10 px-4 py-2 bg-[#FAF4EB] rounded-2xl border border-[#8C2D19]/20 shadow-inner">
          <WarliMusiciansBand color="#8C2D19" className="w-full h-9 opacity-80" />
        </div>

        {/* Saptapadi (7 Sacred Vows) Highlight Box */}
        <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-8 border-2 border-[#8C2D19]/40 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C2D19]">
              સપ્તપદી સંકલ્પ
            </span>
            <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#8C2D19] mt-1">
              મંગલ ફેરા અને આજીવન સાથના ૭ પવિત્ર વચનો
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-serif-gu">
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm">
              <div className="font-bold text-[#8C2D19] mb-1">૧. પ્રથમ પદ (અન્ન & પોષણ)</div>
              <p className="text-[#4B5563]">પરિવારના શુદ્ધ પોષણ અને તંદુરસ્તીની જવાબદારી સાથે નિભાવશું.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm">
              <div className="font-bold text-[#8C2D19] mb-1">૨. દ્વિતીય પદ (બળ & સામર્થ્ય)</div>
              <p className="text-[#4B5563]">જીવનના દરેક સંઘર્ષમાં એકબીજાની ઢાલ અને શક્તિ બનીને ઊભા રહીશું.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm">
              <div className="font-bold text-[#8C2D19] mb-1">૩. તૃતીય પદ (ધન & સમૃદ્ધિ)</div>
              <p className="text-[#4B5563]">સત્ય અને નીતિથી ધન કમાઈ ગૃહસ્થ ધર્મનું સુખેથી પાલન કરીશું.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm">
              <div className="font-bold text-[#8C2D19] mb-1">૪. ચતુર્થ પદ (સુખ & આનંદ)</div>
              <p className="text-[#4B5563]">પરસ્પર આદર અને સ્નેહથી પરિવારમાં સદા હાસ્ય અને શાંતિ જાળવીશું.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm">
              <div className="font-bold text-[#8C2D19] mb-1">૫. પંચમ પદ (સંસ્કાર & વંશ)</div>
              <p className="text-[#4B5563]">આવનારી પેઢીને ઉત્તમ સંસ્કારો અને સદ્વિચારોનું વારસો આપીશું.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm">
              <div className="font-bold text-[#8C2D19] mb-1">૬. ષષ્ઠ પદ (ઋતુઓ & સાથ)</div>
              <p className="text-[#4B5563]">દરેક ઋતુ અને સમયના બદલાવમાં અમારો પ્રેમ અખંડ અને અડગ રહેશે.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#8C2D19]/20 shadow-sm sm:col-span-2">
              <div className="font-bold text-[#8C2D19] mb-1">૭. સપ્તમ પદ (શાશ્વત મૈત્રી & એકતા)</div>
              <p className="text-[#4B5563]">આપણે માત્ર પતિ-પત્ની નહીં પરંતુ આજીવન પરમ મિત્ર બની અર્ધાંગિની અને અર્ધાંગ તરીકે જીવીશું.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
