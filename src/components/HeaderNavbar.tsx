import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, Heart, Calendar, BookOpen } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';
import { WEDDING_DETAILS } from '../data/weddingData';

interface HeaderNavbarProps {
  onOpenKankotri: () => void;
  onTriggerShower: () => void;
  isGujarati: boolean;
  setIsGujarati: (val: boolean) => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  onOpenKankotri,
  onTriggerShower,
  isGujarati,
  setIsGujarati,
}) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = () => {
    const playing = weddingAudio.toggle();
    setIsPlayingMusic(playing);
  };

  const navLinks = [
    { href: '#home', labelGu: 'પ્રારંભ', labelEn: 'Home' },
    { href: '#couple', labelGu: 'વર-કન્યા', labelEn: 'Couple' },
    { href: '#events', labelGu: 'શુભ કાર્યક્રમ', labelEn: 'Events' },
    { href: '#kankotri-section', labelGu: 'ડિજિટલ કંકોત્રી', labelEn: 'Kankotri' },
    { href: '#customs', labelGu: 'લગ્ન પરંપરા', labelEn: 'Customs' },
    { href: '#gallery', labelGu: 'સ્મૃતિ ગેલેરી', labelEn: 'Gallery' },
    { href: '#blessings', labelGu: 'શુભાશિષ', labelEn: 'Blessings' },
    { href: '#rsvp', labelGu: 'હાજરી નોંધણી', labelEn: 'RSVP' },
    { href: '#venue', labelGu: 'સ્થળ દર્શન', labelEn: 'Venue' },
  ];

  return (
    <>
      {/* Top Auspicious Invocation Bar */}
      <div className="bg-[#851214] text-[#FDE68A] py-1.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide shadow-inner flex items-center justify-between z-50 relative">
        <div className="hidden sm:flex items-center space-x-2">
          <span>卐</span>
          <span>શ્રી કુળદેવી માતાય નમઃ</span>
        </div>
        <div className="flex-1 text-center font-serif-gu font-semibold flex items-center justify-center space-x-2">
          <span className="text-[#FBBF24]">॥ ૐ શ્રી ગણેશાય નમઃ ॥</span>
          <span className="hidden md:inline text-white/70">|</span>
          <span className="hidden md:inline text-white/90">
            {WEDDING_DETAILS.groom.nameGu} weds {WEDDING_DETAILS.bride.nameGu}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            id="lang-toggle-btn"
            onClick={() => setIsGujarati(!isGujarati)}
            className="text-[11px] uppercase tracking-wider bg-[#9E1B1E] hover:bg-[#B91C1C] px-2 py-0.5 rounded border border-[#FDE68A]/30 text-white transition-colors"
            title="ભાષા બદલો / Toggle Language"
          >
            {isGujarati ? 'EN / ગુજ' : 'GUJ / English'}
          </button>
          <span className="hidden sm:inline">卐</span>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#D4AF37]/30'
            : 'bg-[#FFFDF9] py-3.5 border-b border-[#E8DFC8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Couple monogram */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#851214] to-[#C41E3A] flex items-center justify-center text-[#FDE68A] font-ornate text-base font-bold shadow-md ring-2 ring-[#D4AF37]/50 group-hover:scale-105 transition-transform">
              હ&ટ
            </div>
            <div>
              <div className="font-serif-gu font-bold text-lg text-[#851214] leading-tight">
                ડો. હર્ષ <span className="text-[#C41E3A]">&</span> ડો. ટ્વિન્કલ
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#B45309] font-medium">
                {isGujarati ? 'શુભ લગ્ન મહોત્સવ ૨૦૨૭' : 'Shubh Vivah 2027'}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#4A2810]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C41E3A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C41E3A] hover:after:w-full after:transition-all"
              >
                {isGujarati ? link.labelGu : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Flower shower button */}
            <button
              id="flower-shower-nav-btn"
              onClick={onTriggerShower}
              className="flex items-center space-x-1 bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A] px-2.5 py-1.5 rounded-full text-xs font-semibold border border-[#F59E0B]/40 transition-all hover:scale-105 shadow-sm"
              title={isGujarati ? 'પુષ્પવૃષ્ટિ કરો' : 'Shower Flowers'}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706] animate-spin" />
              <span className="hidden sm:inline">{isGujarati ? 'આશીર્વાદ વૃષ્ટિ' : 'Bless'}</span>
            </button>

            {/* Shehnai / Music Player button */}
            <button
              id="wedding-music-btn"
              onClick={handleToggleMusic}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isPlayingMusic
                  ? 'bg-[#851214] text-[#FDE68A] border-[#D4AF37] shadow-md ring-2 ring-[#F59E0B]/50'
                  : 'bg-white text-[#851214] border-[#E5E7EB] hover:bg-[#FDF2F2]'
              }`}
              title={isPlayingMusic ? (isGujarati ? 'શરણાઈ બંધ કરો' : 'Mute Music') : (isGujarati ? 'શરણાઈ સૂર વગાડો' : 'Play Shehnai Music')}
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#FDE68A] animate-pulse" />
                  <span className="flex space-x-0.5 items-center">
                    <span className="w-1 h-3 bg-[#FDE68A] rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1 h-4 bg-[#FDE68A] rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1 h-2.5 bg-[#FDE68A] rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </span>
                  <span className="hidden md:inline text-[11px] font-medium ml-1">
                    {isGujarati ? 'મંગળ સૂર' : 'Playing'}
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#9CA3AF]" />
                  <span className="hidden sm:inline text-[11px] font-medium">
                    {isGujarati ? 'મંગળ સૂર વગાડો' : 'Play Music'}
                  </span>
                </>
              )}
            </button>

            {/* View Kankotri Button */}
            <button
              id="kankotri-quick-btn"
              onClick={onOpenKankotri}
              className="hidden sm:flex items-center space-x-1.5 bg-gradient-to-r from-[#C41E3A] to-[#851214] text-white px-3.5 py-1.5 rounded-full text-xs font-medium shadow hover:shadow-md transition-all hover:scale-105 border border-[#FDE68A]/40"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>{isGujarati ? 'કંકોત્રી' : 'Kankotri'}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-[#851214] hover:bg-[#FDF2F2]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFDF9] border-t border-[#E8DFC8] px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-[#FAF5EE] text-[#851214] hover:bg-[#FEE2E2] flex items-center space-x-2 border border-[#E8DFC8]/60"
                >
                  <span className="text-xs text-[#C41E3A]">❖</span>
                  <span>{isGujarati ? link.labelGu : link.labelEn}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenKankotri();
                }}
                className="flex-1 py-2.5 bg-gradient-to-r from-[#C41E3A] to-[#851214] text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 shadow"
              >
                <BookOpen className="w-4 h-4 text-[#FDE68A]" />
                <span>{isGujarati ? 'ડિજિટલ કંકોત્રી જુઓ' : 'Open Kankotri Card'}</span>
              </button>
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/50 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4 text-[#D97706]" />
                <span>{isGujarati ? 'હાજરી નોંધણી' : 'RSVP'}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
