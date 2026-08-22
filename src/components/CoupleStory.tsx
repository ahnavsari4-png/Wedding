import React from 'react';
import { Heart, Award, MapPin, Sparkles, User, Briefcase, GraduationCap } from 'lucide-react';
import { WEDDING_DETAILS, FAMILY_LIST } from '../data/weddingData';

interface CoupleStoryProps {
  isGujarati: boolean;
}

export const CoupleStory: React.FC<CoupleStoryProps> = ({ isGujarati }) => {
  return (
    <section id="couple" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[#851214] font-serif-gu font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="text-[#C41E3A]">❖</span>
            <span>{isGujarati ? 'વર-કન્યા પરિચય' : 'The Beautiful Couple'}</span>
            <span className="text-[#C41E3A]">❖</span>
          </div>
          <h2 className="font-serif-gu text-2xl sm:text-4xl font-bold text-[#851214]">
            {isGujarati ? 'બે પવિત્ર હૃદયોનું મંગલ મિલન' : 'Two Hearts, One Divine Journey'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6B4B3E] font-serif-gu leading-relaxed">
            {isGujarati
              ? 'પરિવારના સંસ્કારો, પરસ્પર સ્નેહ અને વડીલોના મંગળ આશિષ સાથે શરૂ થતી નવી દામ્પત્ય યાત્રા.'
              : 'Bound by family values, sacred traditions, and timeless love, beginning a blessed new chapter.'}
          </p>
        </div>

        {/* Detailed Couple Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Groom Profile Card */}
          <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-lg relative overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#851214_1px,transparent_1px)] opacity-20"></div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={WEDDING_DETAILS.groom.image}
                    alt={WEDDING_DETAILS.groom.nameGu}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block bg-[#851214] text-[#FDE68A] text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full mb-1">
                    {isGujarati ? 'વરરાજા' : 'The Groom'}
                  </div>
                  <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#851214]">
                    {WEDDING_DETAILS.groom.nameGu}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-medium">
                    {WEDDING_DETAILS.groom.fullNameGu}
                  </p>
                </div>
              </div>

              <p className="font-serif-gu text-xs sm:text-sm text-[#522504] leading-relaxed mb-6 bg-white/70 p-3 rounded-xl border border-[#E8DFC8]">
                “{WEDDING_DETAILS.groom.bioGu}”
              </p>

              {/* Groom Details List */}
              <div className="space-y-2.5 text-xs text-[#4A2810]">
                <div className="flex items-start space-x-2.5">
                  <GraduationCap className="w-4 h-4 text-[#851214] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">શિક્ષણ: </span>
                    <span>{WEDDING_DETAILS.groom.educationGu}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Briefcase className="w-4 h-4 text-[#851214] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">વ્યવસાય: </span>
                    <span>{WEDDING_DETAILS.groom.professionGu}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <User className="w-4 h-4 text-[#851214] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">માતા-પિતા: </span>
                    <span>{WEDDING_DETAILS.groom.fatherGu} & {WEDDING_DETAILS.groom.motherGu}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#851214] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">મૂળ વતન: </span>
                    <span>{WEDDING_DETAILS.groom.nativeGu} (હાલ: {WEDDING_DETAILS.groom.currentCityGu})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between text-[11px] text-[#78350F]">
              <span>કુળદેવી: શ્રી ઉમિયા માતાજી</span>
              <span className="font-semibold text-[#851214]">પટેલ પરિવાર</span>
            </div>
          </div>

          {/* Bride Profile Card */}
          <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-lg relative overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] opacity-20"></div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={WEDDING_DETAILS.bride.image}
                    alt={WEDDING_DETAILS.bride.nameGu}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block bg-[#C41E3A] text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full mb-1">
                    {isGujarati ? 'કન્યા' : 'The Bride'}
                  </div>
                  <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#851214]">
                    {WEDDING_DETAILS.bride.nameGu}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-medium">
                    {WEDDING_DETAILS.bride.fullNameGu}
                  </p>
                </div>
              </div>

              <p className="font-serif-gu text-xs sm:text-sm text-[#522504] leading-relaxed mb-6 bg-white/70 p-3 rounded-xl border border-[#E8DFC8]">
                “{WEDDING_DETAILS.bride.bioGu}”
              </p>

              {/* Bride Details List */}
              <div className="space-y-2.5 text-xs text-[#4A2810]">
                <div className="flex items-start space-x-2.5">
                  <GraduationCap className="w-4 h-4 text-[#C41E3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">શિક્ષણ: </span>
                    <span>{WEDDING_DETAILS.bride.educationGu}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Briefcase className="w-4 h-4 text-[#C41E3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">વ્યવસાય: </span>
                    <span>{WEDDING_DETAILS.bride.professionGu}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <User className="w-4 h-4 text-[#C41E3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">માતા-પિતા: </span>
                    <span>{WEDDING_DETAILS.bride.fatherGu} & {WEDDING_DETAILS.bride.motherGu}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#C41E3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#851214]">મૂળ વતન: </span>
                    <span>{WEDDING_DETAILS.bride.nativeGu} (હાલ: {WEDDING_DETAILS.bride.currentCityGu})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between text-[11px] text-[#78350F]">
              <span>કુળદેવી: શ્રી અંબા માતાજી</span>
              <span className="font-semibold text-[#851214]">પટેલ પરિવાર (રાનકુવા)</span>
            </div>
          </div>
        </div>

        {/* Love Story / How Destiny Connected Them */}
        <div className="bg-gradient-to-r from-[#851214] via-[#9E1B1E] to-[#851214] text-[#FDE68A] rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-[#D4AF37] relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EE] text-[#851214] mx-auto flex items-center justify-center mb-4 shadow">
              <Heart className="w-6 h-6 text-[#C41E3A] fill-[#C41E3A]" />
            </div>

            <h3 className="font-serif-gu text-xl sm:text-2xl font-bold text-[#FDE68A] mb-3">
              {isGujarati ? 'સ્નેહ યાત્રા - પ્રેમ અને સંસ્કારનો સંગમ' : 'Our Story & How Destiny Met'}
            </h3>

            <p className="font-serif-gu text-xs sm:text-base text-white/90 leading-relaxed">
              {isGujarati
                ? 'ડો. હર્ષ અને ડો. ટ્વિન્કલ બંને તબીબી શિક્ષણ તથા સેવાભાવના સમાન મૂલ્યો સાથે જોડાયા છે. બંનેના ઉમદા વિચારો, જીવન પ્રત્યેનો આદર અને પારિવારિક સંસ્કારો પ્રત્યેની શ્રદ્ધાએ એક અનોખો સ્નેહસેતુ રચ્યો. વડીલોના મંગળ આશીર્વાદ સાથે આ સંબંધ પવિત્ર લગ્નગ્રંથિમાં પરિણમી રહ્યો છે.'
                : 'Dr. Harsh and Dr. Twinkle share a deep dedication to medical care, family values, and mutual respect. Blessed warmly by their families, their journey blossoms into a sacred lifetime partnership.'}
            </p>

            <div className="mt-6 inline-flex items-center space-x-2 text-xs font-serif-gu text-[#FDE68A] bg-black/20 px-4 py-1.5 rounded-full border border-[#FDE68A]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>“જ્યાં સ્નેહ હોય ત્યાં ઈશ્વરનો વાસ હોય છે”</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
