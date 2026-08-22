import React from 'react';

// Authentic South Gujarat & Warli tribal art SVG elements & motifs

export const TribalGeometricBorder: React.FC<{ className?: string; color?: string; inverted?: boolean }> = ({
  className = 'w-full h-4',
  color = '#8C2D19',
  inverted = false,
}) => (
  <svg
    className={`w-full ${className}`}
    viewBox="0 0 1200 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="repeat-x"
  >
    <pattern id={`tribal-border-pattern-${inverted ? 'inv' : 'norm'}`} width="48" height="24" patternUnits="userSpaceOnUse">
      {/* Top line */}
      <line x1="0" y1="2" x2="48" y2="2" stroke={color} strokeWidth="1.5" strokeOpacity="0.85" />
      {/* Geometric triangles top and bottom */}
      <polygon points="12,4 24,14 0,14" fill={color} fillOpacity="0.75" />
      <polygon points="36,4 48,14 24,14" fill={color} fillOpacity="0.75" />
      <polygon points="24,20 12,12 36,12" fill={color} fillOpacity="0.9" />
      {/* Dots/Beads */}
      <circle cx="12" cy="7" r="1.5" fill="#FFF8EE" />
      <circle cx="36" cy="7" r="1.5" fill="#FFF8EE" />
      <circle cx="24" cy="18" r="1.5" fill="#FFF8EE" />
      {/* Bottom line */}
      <line x1="0" y1="22" x2="48" y2="22" stroke={color} strokeWidth="1.5" strokeOpacity="0.85" />
      <circle cx="0" cy="12" r="1.2" fill={color} />
      <circle cx="48" cy="12" r="1.2" fill={color} />
    </pattern>
    <rect width="1200" height="24" fill={`url(#tribal-border-pattern-${inverted ? 'inv' : 'norm'})`} />
  </svg>
);

export const WarliTarpaDance: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-48 h-48',
  color = '#8C2D19',
}) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Concentric subtle guide rings */}
    <circle cx="100" cy="100" r="92" stroke={color} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
    <circle cx="100" cy="100" r="62" stroke={color} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.3" />

    {/* Center Tarpa / Flute Player */}
    <g transform="translate(90, 80)">
      {/* Head */}
      <circle cx="10" cy="6" r="4" fill={color} />
      <path d="M7 3 Q10 0 13 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Body: Two interlocking triangles */}
      <polygon points="10,10 5,20 15,20" fill={color} />
      <polygon points="10,30 4,20 16,20" fill={color} />
      {/* Tarpa instrument */}
      <path d="M12 12 Q24 6 28 0 Q32 8 20 16 Z" fill="#D97706" stroke={color} strokeWidth="1" />
      {/* Arms holding Tarpa */}
      <path d="M6 14 Q12 11 16 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 16 Q18 13 22 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs in rhythm */}
      <path d="M7 30 L4 40 L0 42" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 30 L16 39 L21 41" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Dancing circle of 12 tribal figures */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 72 * Math.cos(rad);
      const y = 100 + 72 * Math.sin(rad);
      return (
        <g key={idx} transform={`translate(${x}, ${y}) rotate(${angle + 90})`}>
          {/* Head & bun */}
          <circle cx="0" cy="-14" r="3.2" fill={color} />
          <circle cx={idx % 2 === 0 ? "3.2" : "-3.2"} cy="-16" r="1.8" fill={color} />
          {/* Body: Upper & Lower Triangle */}
          <polygon points="0,-10 -5,-2 5,-2" fill={color} />
          <polygon points="0,6 -6,-2 6,-2" fill={color} />
          {/* Interlocking hands reaching to next dancer */}
          <path d="M-5,-4 Q-12,-9 -17,-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5,-4 Q12,-9 17,-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          {/* Dancing bent legs */}
          <path d="M-2,6 L-5,14 L-8,15" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2,6 L5,13 L8,16" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    })}

    {/* Small outer dancing circle */}
    {[15, 75, 135, 195, 255, 315].map((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 92 * Math.cos(rad);
      const y = 100 + 92 * Math.sin(rad);
      return (
        <circle key={idx} cx={x} cy={y} r="2" fill="#D97706" />
      );
    })}
  </svg>
);

export const WarliMusiciansBand: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-16',
  color = '#8C2D19',
}) => (
  <svg
    viewBox="0 0 600 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base tribal line */}
    <line x1="10" y1="54" x2="590" y2="54" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M10 57 L590 57" stroke="#D97706" strokeWidth="1" strokeDasharray="4 4" />

    {/* Musician 1: Dhol / Dholak Player */}
    <g transform="translate(60, 10)">
      <circle cx="15" cy="6" r="4" fill={color} />
      <circle cx="19" cy="4" r="2" fill={color} /> {/* Turban/Headband */}
      <polygon points="15,10 9,20 21,20" fill={color} />
      <polygon points="15,30 8,20 22,20" fill={color} />
      {/* Dholak instrument */}
      <ellipse cx="15" cy="22" rx="10" ry="6" fill="#D97706" stroke={color} strokeWidth="1.2" />
      <line x1="8" y1="20" x2="22" y2="24" stroke={color} strokeWidth="1" />
      <line x1="8" y1="24" x2="22" y2="20" stroke={color} strokeWidth="1" />
      {/* Arms playing */}
      <path d="M10 14 L6 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 14 L24 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs */}
      <path d="M11 30 L8 42 L4 44" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 30 L22 42 L26 44" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Musician 2: Shehnai / Horn (Tutari) */}
    <g transform="translate(160, 8)">
      <circle cx="15" cy="6" r="4" fill={color} />
      <polygon points="15,10 9,21 21,21" fill={color} />
      <polygon points="15,32 7,21 23,21" fill={color} />
      {/* Long Curved Tutari / Horn */}
      <path d="M17 12 Q28 6 36 0 Q40 6 32 10 Q24 12 18 14 Z" fill="#D97706" stroke={color} strokeWidth="1" />
      <path d="M10 15 L18 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 32 L9 44 L5 46" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 32 L22 44 L27 46" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </g>

    {/* Dancing Couple / Group in Center */}
    <g transform="translate(260, 8)">
      {/* Dancer 1 */}
      <g transform="translate(0, 0)">
        <circle cx="12" cy="6" r="4" fill={color} />
        <circle cx="16" cy="4" r="2.2" fill={color} /> {/* Hair Bun */}
        <polygon points="12,10 6,20 18,20" fill={color} />
        <polygon points="12,31 5,20 19,20" fill={color} />
        <path d="M6 14 Q0 10 -6 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 14 Q24 10 30 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 31 L6 43 L2 45" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 31 L18 43 L22 45" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </g>
      {/* Dancer 2 */}
      <g transform="translate(36, 0)">
        <circle cx="12" cy="6" r="4" fill={color} />
        <polygon points="12,10 6,20 18,20" fill={color} />
        <polygon points="12,31 5,20 19,20" fill={color} />
        <path d="M6 14 Q0 10 -6 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 14 Q24 10 30 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 31 L6 43 L2 45" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 31 L18 43 L22 45" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </g>
      {/* Dancer 3 */}
      <g transform="translate(72, 0)">
        <circle cx="12" cy="6" r="4" fill={color} />
        <circle cx="16" cy="4" r="2.2" fill={color} />
        <polygon points="12,10 6,20 18,20" fill={color} />
        <polygon points="12,31 5,20 19,20" fill={color} />
        <path d="M6 14 Q0 10 -6 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 14 Q24 10 30 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 31 L6 43 L2 45" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 31 L18 43 L22 45" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </g>

    {/* Musician 3: Tarpa / Flute Player */}
    <g transform="translate(420, 8)">
      <circle cx="14" cy="6" r="4" fill={color} />
      <polygon points="14,10 8,21 20,21" fill={color} />
      <polygon points="14,32 7,21 21,21" fill={color} />
      {/* Tarpa instrument */}
      <path d="M16 14 Q26 9 30 4 Q34 11 22 18 Z" fill="#D97706" stroke={color} strokeWidth="1" />
      <path d="M9 15 L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 32 L8 44 L4 46" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 32 L20 44 L24 46" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </g>

    {/* Sacred Sun & Peacock motifs */}
    <g transform="translate(520, 12)">
      {/* Peacock */}
      <path d="M10 35 Q18 20 30 25 Q35 28 40 22 Q42 20 38 18 Q32 20 28 26 Q18 28 12 40 Z" fill={color} />
      <circle cx="40" cy="18" r="2.5" fill={color} />
      {/* Crest */}
      <line x1="40" y1="16" x2="42" y2="10" stroke={color} strokeWidth="1.2" />
      <circle cx="42" cy="10" r="1" fill="#D97706" />
      <line x1="41" y1="16" x2="45" y2="12" stroke={color} strokeWidth="1.2" />
      <circle cx="45" cy="12" r="1" fill="#D97706" />
      {/* Legs */}
      <path d="M22 34 L20 44 L16 46" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M26 34 L28 44 L32 46" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Feathers */}
      <circle cx="14" cy="28" r="1.5" fill="#D97706" />
      <circle cx="20" cy="24" r="1.5" fill="#D97706" />
      <circle cx="26" cy="22" r="1.5" fill="#D97706" />
    </g>
  </svg>
);

export const WarliCoupleWeddingMotif: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-36 h-28',
  color = '#8C2D19',
}) => (
  <svg
    viewBox="0 0 160 110"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wedding Toran Arch above couple */}
    <path d="M10 40 Q80 5 150 40" stroke={color} strokeWidth="2" fill="none" />
    <path d="M10 44 Q80 9 150 44" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" fill="none" />
    {/* Hanging mango leaf tassels */}
    {[25, 45, 65, 80, 95, 115, 135].map((pos, i) => (
      <g key={i} transform={`translate(${pos}, ${24 + (i === 3 ? -10 : i === 2 || i === 4 ? -7 : 0)})`}>
        <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="1.2" />
        <polygon points="0,8 -3,14 3,14" fill={i % 2 === 0 ? "#D97706" : color} />
        <circle cx="0" cy="16" r="1.2" fill={color} />
      </g>
    ))}

    {/* Groom (Dr. Harsh) */}
    <g transform="translate(48, 38)">
      {/* Safa / Turban feather */}
      <path d="M10 -2 L12 -8 L14 -2" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="5" r="4.5" fill={color} />
      {/* Body Triangles */}
      <polygon points="10,10 3,22 17,22" fill={color} />
      <polygon points="10,34 2,22 18,22" fill={color} />
      {/* Wedding Garland */}
      <path d="M5 14 Q10 24 16 15" stroke="#D97706" strokeWidth="2" strokeDasharray="2 2" />
      {/* Arm holding bride's hand (Hasta Melap) */}
      <path d="M15 16 Q24 22 34 22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M4 16 L-2 26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Legs */}
      <path d="M7 34 L4 48 L0 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13 34 L16 48 L20 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Bride (Dr. Twinkle) */}
    <g transform="translate(90, 38)">
      {/* Chunari / Odhani / Hair Bun */}
      <circle cx="10" cy="5" r="4.5" fill={color} />
      <circle cx="16" cy="3" r="3" fill={color} /> {/* Traditional bun */}
      <path d="M7 3 Q16 -3 20 8 Q18 26 22 42" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Body Triangles */}
      <polygon points="10,10 3,22 17,22" fill={color} />
      <polygon points="10,34 1,22 19,22" fill={color} />
      {/* Wedding Garland */}
      <path d="M4 15 Q10 24 15 15" stroke="#D97706" strokeWidth="2" strokeDasharray="2 2" />
      {/* Arm reaching for Hasta Melap */}
      <path d="M4 16 Q-3 22 -8 22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16 L22 26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Skirt flair lines (Ghaghro) & Legs */}
      <path d="M7 34 L4 48 L1 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13 34 L16 48 L19 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Sacred Agni / Kalash between them at base */}
    <g transform="translate(73, 76)">
      {/* Pot / Kalash */}
      <ellipse cx="7" cy="12" rx="6" ry="4" fill="#D97706" stroke={color} strokeWidth="1.2" />
      <path d="M3 10 Q7 3 11 10" stroke={color} strokeWidth="1.2" fill="#D97706" />
      {/* Coconut & Mango leaves */}
      <circle cx="7" cy="4" r="2.5" fill={color} />
      <path d="M3 6 L0 2" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 6 L14 2" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const TribalCornerFiligree: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
}> = ({ position = 'top-left', className = 'w-12 h-12', color = '#8C2D19' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'rotate(90deg)';
      case 'bottom-right':
        return 'rotate(180deg)';
      case 'bottom-left':
        return 'rotate(270deg)';
      default:
        return 'none';
    }
  };

  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      style={{ transform: getTransform() }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer corner lines */}
      <path d="M4 56 L4 4 L56 4" stroke={color} strokeWidth="2" />
      <path d="M10 50 L10 10 L50 10" stroke="#D97706" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Geometric tribal corner triangles */}
      <polygon points="6,6 18,6 6,18" fill={color} />
      <polygon points="14,14 22,14 14,22" fill="#D97706" />
      <circle cx="26" cy="8" r="2" fill={color} />
      <circle cx="8" cy="26" r="2" fill={color} />
      <circle cx="36" cy="8" r="1.5" fill="#D97706" />
      <circle cx="8" cy="36" r="1.5" fill="#D97706" />

      {/* Small tribal Sun motif at corner */}
      <circle cx="10" cy="10" r="3" fill="#FFF8EE" stroke={color} strokeWidth="1" />
    </svg>
  );
};

export const WarliTreeOfLife: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-40 h-48',
  color = '#8C2D19',
}) => (
  <svg
    viewBox="0 0 160 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Trunk with geometric tribal texture */}
    <path d="M74 190 L74 90 L86 90 L86 190 Z" fill={color} />
    <path d="M74 100 L86 110 M74 120 L86 130 M74 140 L86 150 M74 160 L86 170" stroke="#FFF8EE" strokeWidth="1.5" />

    {/* Roots */}
    <path d="M74 190 Q60 196 48 198" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M86 190 Q100 196 112 198" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

    {/* Branches & Leaves (Triangles) */}
    {/* Central top branch */}
    <path d="M80 90 L80 30" stroke={color} strokeWidth="2.5" />
    <polygon points="80,18 72,34 88,34" fill="#D97706" />
    <polygon points="80,34 74,48 86,48" fill={color} />

    {/* Left Branches */}
    <path d="M76 80 Q50 65 30 70" stroke={color} strokeWidth="2" />
    <polygon points="26,68 36,60 38,76" fill={color} />
    <polygon points="44,65 52,58 54,72" fill="#D97706" />

    <path d="M76 110 Q40 100 20 115" stroke={color} strokeWidth="2" />
    <polygon points="16,115 28,106 30,122" fill={color} />
    <polygon points="38,105 48,96 50,112" fill="#D97706" />

    {/* Right Branches */}
    <path d="M84 80 Q110 65 130 70" stroke={color} strokeWidth="2" />
    <polygon points="134,68 124,60 122,76" fill={color} />
    <polygon points="116,65 108,58 106,72" fill="#D97706" />

    <path d="M84 110 Q120 100 140 115" stroke={color} strokeWidth="2" />
    <polygon points="144,115 132,106 130,122" fill={color} />
    <polygon points="122,105 112,96 110,112" fill="#D97706" />

    {/* Birds / Peacocks on tree */}
    <g transform="translate(35, 45)">
      <ellipse cx="6" cy="6" rx="6" ry="3" fill={color} />
      <circle cx="12" cy="4" r="2" fill={color} />
      <line x1="0" y1="6" x2="-4" y2="3" stroke={color} strokeWidth="1.2" />
    </g>

    <g transform="translate(110, 45) scale(-1, 1)">
      <ellipse cx="6" cy="6" rx="6" ry="3" fill={color} />
      <circle cx="12" cy="4" r="2" fill={color} />
      <line x1="0" y1="6" x2="-4" y2="3" stroke={color} strokeWidth="1.2" />
    </g>

    {/* Sacred Sun in corner */}
    <g transform="translate(130, 20)">
      <circle cx="12" cy="12" r="6" fill="#D97706" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
        <line
          key={i}
          x1={12 + 8 * Math.cos((ang * Math.PI) / 180)}
          y1={12 + 8 * Math.sin((ang * Math.PI) / 180)}
          x2={12 + 12 * Math.cos((ang * Math.PI) / 180)}
          y2={12 + 12 * Math.sin((ang * Math.PI) / 180)}
          stroke="#D97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </g>
  </svg>
);

export const TribalToranBanner: React.FC<{ className?: string }> = ({ className = 'w-full' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-[#701D0E] via-[#8C2D19] to-[#701D0E] border-y border-[#D97706]/40 shadow-inner">
      <div className="flex items-center space-x-3 overflow-hidden text-xs text-[#FDE68A] font-serif-gu tracking-wide select-none py-0.5">
        <span className="text-[#FBBF24]">✦</span>
        <span>પરંપરાગત આદિવાસી & દક્ષિણ ગુજરાત સંસ્કૃતિ ધરોહર</span>
        <span className="text-[#FBBF24]">✦</span>
        <span className="hidden sm:inline">મંગલ તારપા & ઢોલ વાદન</span>
        <span className="text-[#FBBF24] hidden sm:inline">✦</span>
        <span className="hidden md:inline">વરલી & ડાંગી લોકકલા શૈલી</span>
        <span className="text-[#FBBF24] hidden md:inline">✦</span>
        <span>શુભ લગ્ન મહોત્સવ ૨૦૨૭</span>
        <span className="text-[#FBBF24]">✦</span>
      </div>
    </div>
    <TribalGeometricBorder color="#8C2D19" className="h-3 sm:h-4 opacity-90" />
  </div>
);
