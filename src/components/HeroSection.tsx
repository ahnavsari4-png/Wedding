import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Heart, BookOpen, Share2, Clock, Check } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface HeroSectionProps {
  onOpenKankotri: () => void;
  onTriggerShower: () => void;
  isGujarati: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenKankotri,
  onTriggerShower,
  isGujarati,
}) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DETAILS.weddingDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: `શુભ લગ્ન આમંત્રણ - ${WEDDING_DETAILS.groom.nameGu} & ${WEDDING_DETAILS.bride.nameGu}`,
      text: `સ્નેહી શ્રી, ${WEDDING_DETAILS.groom.nameGu} અને ${WEDDING_DETAILS.bride.nameGu}ના શુભ લગ્ન ઉત્સવનું સ્નેહભર્યું નિમંત્રણ. કૃપા કરીને અમારી ડિજિટલ કંકોત્રી જુઓ અને પધારી નવદંપતીને આશીર્વાદ આપો.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or fallback
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSaveToCalendar = () => {
    const startDate = '20270211T061500Z'; // 11:45 AM IST = 06:15 UTC (11 Feb 2027)
    const endDate = '20270211T163000Z'; // 10:00 PM IST
    const title = encodeURIComponent(`${WEDDING_DETAILS.groom.nameGu} & ${WEDDING_DETAILS.bride.nameGu} શુભ લગ્ન ઉત્સવ`);
    const details = encodeURIComponent(`${WEDDING_DETAILS.groom.nameGu} અને ${WEDDING_DETAILS.bride.nameGu}ના શુભ વિવાહ અને પ્રીતિભોજન સમારંભ. સ્થળ: ${WEDDING_DETAILS.mainVenueGu}`);
    const location = encodeURIComponent(WEDDING_DETAILS.mainVenueGu + ', ' + WEDDING_DETAILS.mainVenueAddressGu);

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bandhani-bg">
      {/* Decorative Ornate Corners & Background Accent */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 pointer-events-none opacity-20 bg-[radial-gradient(#851214_2px,transparent_2px)]"></div>
      <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 pointer-events-none opacity-20 bg-[radial-gradient(#851214_2px,transparent_2px)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Sacred Shloka & Auspicious Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-[#851214] font-serif-gu font-semibold text-sm sm:text-base border-b-2 border-[#D4AF37] pb-1 mb-3">
            <span className="text-[#C41E3A]">卐</span>
            <span>॥ શ્રી ગણેશાય નમઃ ॥</span>
            <span className="text-[#C41E3A]">卐</span>
          </div>

          <div className="max-w-xl mx-auto bg-gradient-to-r from-transparent via-[#FDE68A]/30 to-transparent py-2 px-4 rounded-xl">
            <p className="font-serif-gu text-xs sm:text-sm text-[#851214]/90 italic leading-relaxed whitespace-pre-line">
              {WEDDING_DETAILS.shlokas[0].shloka}
            </p>
          </div>

          <div className="mt-4 inline-block bg-[#851214] text-[#FDE68A] text-xs uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-sm">
            {isGujarati ? 'સ્નેહ નિમંત્રણ પત્રિકા' : 'Wedding Invitation'}
          </div>
        </div>

        {/* Central Royal Invitation Card Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border-2 border-[#D4AF37]/40 relative text-center">
          {/* Decorative Kalash / Toran Top SVG */}
          <div className="flex justify-center -mt-12 sm:-mt-16 mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#851214] p-1.5 shadow-xl border-2 border-[#FDE68A] flex items-center justify-center text-[#FDE68A]">
              <div className="w-full h-full rounded-full border border-dashed border-[#FDE68A]/60 flex items-center justify-center">
                <span className="font-ornate text-2xl sm:text-3xl font-bold">ૐ</span>
              </div>
            </div>
          </div>

          <p className="font-serif-gu text-sm sm:text-base text-[#6B4B3E] mb-2 font-medium">
            {isGujarati
              ? 'શ્રીમંત ગણેશજીના મંગળ આશીર્વાદ અને વડીલોના સ્નેહ સાથે'
              : 'With the divine blessings of Lord Ganesha & our Elders'}
          </p>

          <h2 className="text-sm uppercase tracking-[0.25em] text-[#9A3412] font-bold mb-6">
            {isGujarati ? 'શુભ લગ્ન મહોત્સવ' : 'Cordially invite you to the wedding ceremony of'}
          </h2>

          {/* Couple Names Spotlight with Portraits */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center my-6">
            {/* Groom side */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-xl ring-4 ring-[#851214]/10 transition-transform group-hover:scale-105 duration-300">
                  <img
                    referrerPolicy="no-referrer"
                    src={WEDDING_DETAILS.groom.image}
                    alt={WEDDING_DETAILS.groom.nameGu}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 bg-[#851214] text-[#FDE68A] text-[11px] font-bold px-3 py-0.5 rounded-full border border-[#D4AF37] shadow">
                  {isGujarati ? 'વરરાજા' : 'Groom'}
                </div>
              </div>

              <h1 className="mt-5 font-serif-gu text-2xl sm:text-3xl font-bold text-[#851214]">
                {isGujarati ? WEDDING_DETAILS.groom.nameGu : WEDDING_DETAILS.groom.nameEn}
              </h1>
              <p className="font-serif-gu text-xs sm:text-sm text-[#4B5563] mt-1 font-medium">
                {WEDDING_DETAILS.groom.fullNameGu}
              </p>
              <div className="mt-2 text-xs text-[#78350F] bg-[#FEF3C7] px-3 py-1 rounded-md border border-[#FDE68A]">
                {WEDDING_DETAILS.groom.fatherGu} અને {WEDDING_DETAILS.groom.motherGu}ના સુપુત્ર
              </div>
              <div className="text-[11px] text-[#6B7280] mt-1 font-medium">
                {WEDDING_DETAILS.groom.educationGu} ({WEDDING_DETAILS.groom.professionGu})
              </div>
            </div>

            {/* Wedding Ampersand Symbol */}
            <div className="md:col-span-1 flex flex-col items-center justify-center my-2 md:my-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#9A7B1C] text-white flex items-center justify-center shadow-lg font-serif text-xl font-bold">
                &
              </div>
              <span className="text-[11px] font-serif-gu font-semibold text-[#851214] mt-1">
                {isGujarati ? 'સંગ' : 'Weds'}
              </span>
            </div>

            {/* Bride side */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-xl ring-4 ring-[#851214]/10 transition-transform group-hover:scale-105 duration-300">
                  <img
                    referrerPolicy="no-referrer"
                    src={WEDDING_DETAILS.bride.image}
                    alt={WEDDING_DETAILS.bride.nameGu}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 bg-[#C41E3A] text-white text-[11px] font-bold px-3 py-0.5 rounded-full border border-[#D4AF37] shadow">
                  {isGujarati ? 'કન્યા (લાડકડી)' : 'Bride'}
                </div>
              </div>

              <h1 className="mt-5 font-serif-gu text-2xl sm:text-3xl font-bold text-[#851214]">
                {isGujarati ? WEDDING_DETAILS.bride.nameGu : WEDDING_DETAILS.bride.nameEn}
              </h1>
              <p className="font-serif-gu text-xs sm:text-sm text-[#4B5563] mt-1 font-medium">
                {WEDDING_DETAILS.bride.fullNameGu}
              </p>
              <div className="mt-2 text-xs text-[#78350F] bg-[#FEF3C7] px-3 py-1 rounded-md border border-[#FDE68A]">
                {WEDDING_DETAILS.bride.fatherGu} અને {WEDDING_DETAILS.bride.motherGu}ની સુપુત્રી
              </div>
              <div className="text-[11px] text-[#6B7280] mt-1 font-medium">
                {WEDDING_DETAILS.bride.educationGu} ({WEDDING_DETAILS.bride.professionGu})
              </div>
            </div>
          </div>

          {/* Date & Muhurat Highlight Box */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#D4AF37]/60">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#FAF5EE] px-6 py-4 rounded-2xl border border-[#E8DFC8] shadow-inner">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-full bg-[#851214] text-[#FDE68A] flex items-center justify-center shadow">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#9A3412] font-bold">
                    {isGujarati ? 'શુભ લગ્ન તારીખ' : 'Auspicious Date'}
                  </div>
                  <div className="font-serif-gu font-bold text-base text-[#851214]">
                    {isGujarati ? WEDDING_DETAILS.weddingDateFormattedGu : WEDDING_DETAILS.weddingDateFormattedEn}
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#D4AF37]/40"></div>

              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-full bg-[#C41E3A] text-white flex items-center justify-center shadow">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#9A3412] font-bold">
                    {isGujarati ? 'હસ્તમેળાપ મુહૂર્ત' : 'Auspicious Muhurat'}
                  </div>
                  <div className="font-serif-gu font-bold text-base text-[#851214]">
                    {isGujarati ? WEDDING_DETAILS.muhuratTimeGu : WEDDING_DETAILS.muhuratTimeEn}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center text-xs text-[#522504] font-medium space-x-1.5">
              <MapPin className="w-4 h-4 text-[#C41E3A]" />
              <span>{WEDDING_DETAILS.mainVenueGu} - {WEDDING_DETAILS.mainVenueAddressGu}</span>
            </div>
          </div>

          {/* Live Muhurat Countdown Timer */}
          <div className="mt-8 pt-6">
            <div className="text-xs uppercase tracking-widest text-[#78350F] font-bold mb-3 flex items-center justify-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{isGujarati ? 'મંગલ મુહૂર્ત કાઉન્ટડાઉન' : 'Countdown to the Sacred Vows'}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              <div className="bg-gradient-to-b from-[#851214] to-[#600C0E] text-white p-2.5 sm:p-3.5 rounded-2xl shadow-md border border-[#FDE68A]/30">
                <div className="font-serif text-2xl sm:text-3xl font-black text-[#FDE68A]">
                  {timeLeft.days}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 font-medium mt-0.5">
                  {isGujarati ? 'દિવસો' : 'Days'}
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#851214] to-[#600C0E] text-white p-2.5 sm:p-3.5 rounded-2xl shadow-md border border-[#FDE68A]/30">
                <div className="font-serif text-2xl sm:text-3xl font-black text-[#FDE68A]">
                  {timeLeft.hours}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 font-medium mt-0.5">
                  {isGujarati ? 'કલાકો' : 'Hours'}
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#851214] to-[#600C0E] text-white p-2.5 sm:p-3.5 rounded-2xl shadow-md border border-[#FDE68A]/30">
                <div className="font-serif text-2xl sm:text-3xl font-black text-[#FDE68A]">
                  {timeLeft.minutes}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 font-medium mt-0.5">
                  {isGujarati ? 'મિનિટ' : 'Mins'}
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#851214] to-[#600C0E] text-white p-2.5 sm:p-3.5 rounded-2xl shadow-md border border-[#FDE68A]/30">
                <div className="font-serif text-2xl sm:text-3xl font-black text-[#FDE68A]">
                  {timeLeft.seconds}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 font-medium mt-0.5">
                  {isGujarati ? 'સેકન્ડ' : 'Secs'}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              id="hero-open-kankotri"
              onClick={onOpenKankotri}
              className="bg-gradient-to-r from-[#851214] via-[#A8191D] to-[#851214] text-[#FDE68A] hover:text-white px-6 py-3 rounded-xl font-serif-gu font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-[#D4AF37] flex items-center space-x-2"
            >
              <BookOpen className="w-5 h-5 text-[#FDE68A]" />
              <span>{isGujarati ? 'ડિજિટલ કંકોત્રી જુઓ' : 'View Digital Kankotri'}</span>
            </button>

            <a
              id="hero-view-events-btn"
              href="#events"
              className="bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A] px-5 py-3 rounded-xl font-serif-gu font-semibold text-sm sm:text-base shadow hover:shadow-md transition-all border border-[#F59E0B]/50 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5 text-[#D97706]" />
              <span>{isGujarati ? 'કાર્યક્રમ વિગત' : 'Wedding Events'}</span>
            </a>

            <button
              id="hero-shower-blessing-btn"
              onClick={onTriggerShower}
              className="bg-white text-[#C41E3A] hover:bg-[#FEE2E2] px-5 py-3 rounded-xl font-serif-gu font-semibold text-sm sm:text-base shadow hover:shadow-md transition-all border border-[#C41E3A]/40 flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-[#C41E3A]" />
              <span>{isGujarati ? 'પુષ્પવૃષ્ટિ કરો' : 'Shower Blessings'}</span>
            </button>

            <button
              id="hero-calendar-btn"
              onClick={handleSaveToCalendar}
              className="bg-white text-[#4A2810] hover:bg-[#F3F4F6] px-4 py-3 rounded-xl font-serif-gu font-medium text-xs sm:text-sm shadow hover:shadow-md transition-all border border-[#E5E7EB] flex items-center space-x-1.5"
              title="Google Calendar માં ઉમેરો"
            >
              <Calendar className="w-4 h-4 text-[#851214]" />
              <span>{isGujarati ? 'કેલેન્ડર સેવ' : 'Add to Cal'}</span>
            </button>

            <button
              id="hero-share-invite-btn"
              onClick={handleShare}
              className="bg-white text-[#4A2810] hover:bg-[#F3F4F6] px-4 py-3 rounded-xl font-serif-gu font-medium text-xs sm:text-sm shadow hover:shadow-md transition-all border border-[#E5E7EB] flex items-center space-x-1.5"
              title="આમંત્રણ શેર કરો"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-semibold">{isGujarati ? 'લિંક કોપી થઈ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#851214]" />
                  <span>{isGujarati ? 'આમંત્રણ શેર' : 'Share'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
