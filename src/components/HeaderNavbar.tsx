import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, Heart, Calendar, BookOpen } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';
import { WEDDING_DETAILS } from '../data/weddingData';
import { TribalGeometricBorder } from './TribalDecorations';

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
      {/* Top Auspicious Invocation Bar with Tribal Motifs */}
      <div className="bg-gradient-to-r from-[#701D0E] via-[#8C2D19] to-[#701D0E] text-[#FDE68A] py-1.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide shadow-inner flex items-center justify-between z-50 relative border-b border-[#D97706]/40">
        <div className="hidden sm:flex items-center space-x-2">
          <span className="text-[#FBBF24]">✦</span>
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
            className="text-[11px] uppercase tracking-wider bg-[#701D0E] hover:bg-[#B94625] px-2.5 py-0.5 rounded-full border border-[#FDE68A]/40 text-white transition-colors shadow-sm"
            title="ભાષા બદલો / Toggle Language"
          >
            {isGujarati ? 'EN / ગુજ' : 'GUJ / English'}
          </button>
          <span className="hidden sm:inline text-[#FBBF24]">✦</span>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDF9F2]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#8C2D19]/30'
            : 'bg-[#FDF9F2] py-3.5 border-b border-[#E8DFC8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Couple monogram with tribal terracotta aesthetic */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#701D0E] via-[#8C2D19] to-[#D97706] flex items-center justify-center text-[#FDE68A] font-ornate text-base font-bold shadow-md ring-2 ring-[#D97706]/60 group-hover:scale-105 transition-transform border border-white/20">
              હ&ટ
            </div>
            <div>
              <div className="font-serif-gu font-bold text-lg text-[#8C2D19] leading-tight flex items-center gap-1.5">
                <span>ડો. હર્ષ</span>
                <span className="text-[#D97706] text-sm">&</span>
                <span>ડો. ટવિન્ક્લ</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#B45309] font-medium flex items-center gap-1">
                <span>✦</span>
                <span>{isGujarati ? 'શુભ લગ્ન મહોત્સવ ૨૦૨૭' : 'Shubh Vivah 2027'}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#4A2810]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#8C2D19] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8C2D19] hover:after:w-full after:transition-all font-serif-gu"
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
              className="flex items-center space-x-1 bg-[#FAF4EB] text-[#8C2D19] hover:bg-[#F3E9D2] px-2.5 py-1.5 rounded-full text-xs font-semibold border border-[#8C2D19]/30 transition-all hover:scale-105 shadow-sm"
              title={isGujarati ? 'પુષ્પવૃષ્ટિ કરો' : 'Shower Flowers'}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706] animate-spin" />
              <span className="hidden sm:inline font-serif-gu">{isGujarati ? 'આશીર્વાદ વૃષ્ટિ' : 'Bless'}</span>
            </button>

            {/* Shehnai / Music Player button */}
            <button
              id="wedding-music-btn"
              onClick={handleToggleMusic}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isPlayingMusic
                  ? 'bg-[#8C2D19] text-[#FDE68A] border-[#D97706] shadow-md ring-2 ring-[#D97706]/50'
                  : 'bg-white text-[#8C2D19] border-[#E8DFC8] hover:bg-[#FAF4EB]'
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
                  <span className="hidden sm:inline text-[11px] font-medium font-serif-gu">
                    {isGujarati ? 'મંગળ સૂર' : 'Play Music'}
                  </span>
                </>
              )}
            </button>

            {/* View Kankotri Button */}
            <button
              id="kankotri-quick-btn"
              onClick={onOpenKankotri}
              className="hidden sm:flex items-center space-x-1.5 bg-gradient-to-r from-[#8C2D19] to-[#701D0E] text-[#FDE68A] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow hover:shadow-md transition-all hover:scale-105 border border-[#D97706]/40"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span className="font-serif-gu">{isGujarati ? 'કંકોત્રી' : 'Kankotri'}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-[#8C2D19] hover:bg-[#FAF4EB]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDF9F2] border-t border-[#8C2D19]/30 px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <TribalGeometricBorder color="#8C2D19" className="h-2 mb-2 opacity-60" />
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-[#FAF4EB] text-[#8C2D19] hover:bg-[#F3E9D2] flex items-center space-x-2 border border-[#E8DFC8]/60 font-serif-gu text-xs"
                >
                  <span className="text-xs text-[#D97706]">✦</span>
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
                className="flex-1 py-2.5 bg-gradient-to-r from-[#8C2D19] to-[#701D0E] text-[#FDE68A] rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 shadow font-serif-gu"
              >
                <BookOpen className="w-4 h-4 text-[#FDE68A]" />
                <span>{isGujarati ? 'ડિજિટલ કંકોત્રી જુઓ' : 'Open Kankotri Card'}</span>
              </button>
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 bg-[#FAF4EB] text-[#8C2D19] border border-[#8C2D19]/40 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 font-serif-gu"
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
