import React from 'react';
import Image from 'next/image';

// ==========================================
// PINTEREST / DRIBBBLE 3D ILLUSTRATED ICONS
// ==========================================

// 1. Personal Speaking Practice: 3D Dual Speech Bubbles with Soundwaves & Microphone
function IconSpeakingPractice() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
      {/* Ambient 3D Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/35 to-fuchsia-400/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
      
      {/* 3D Container */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-50 via-fuchsia-50/80 to-purple-100/70 p-2 border border-purple-200/90 shadow-lg shadow-purple-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="speakGradMain" x1="10" y1="12" x2="44" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333EA" />
              <stop offset="1" stopColor="#6B21A8" />
            </linearGradient>
            <linearGradient id="speakGradSecond" x1="24" y1="22" x2="54" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="1" stopColor="#BE185D" />
            </linearGradient>
            <linearGradient id="micGold" x1="32" y1="18" x2="48" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Primary 3D Speech Bubble (Left / Background) */}
          <path
            d="M12 28C12 19.163 19.163 12 28 12C36.837 12 44 19.163 44 28C44 32.2 42.4 36.0 39.8 38.9L42 46L34.5 43.1C32.5 43.7 30.3 44 28 44C19.163 44 12 36.837 12 28Z"
            fill="url(#speakGradMain)"
            stroke="#C084FC"
            strokeWidth="1.5"
          />
          {/* Sound waves inside primary bubble */}
          <path d="M20 28H23M25 24V32M28 21V35M31 25V31M33 28H35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

          {/* Secondary 3D Speech Bubble (Right / Foreground) */}
          <path
            d="M26 38C26 32 30.5 27 36 27C41.5 27 46 32 46 38C46 40.5 45.1 42.8 43.6 44.5L45 49L40.2 47.3C38.9 47.8 37.5 48 36 48C30.5 48 26 43 26 38Z"
            fill="url(#speakGradSecond)"
            stroke="#F472B6"
            strokeWidth="1.5"
            className="drop-shadow-sm"
          />
          
          {/* Dynamic 3D Microphone Floating Badge */}
          <g transform="translate(38, 14)">
            <rect x="0" y="0" width="14" height="20" rx="7" fill="url(#micGold)" stroke="#FFFFFF" strokeWidth="1.2" />
            <path d="M3 8V11C3 13.2 4.8 15 7 15C9.2 15 11 13.2 11 11V8" stroke="#78350F" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M7 15V19M4 19H10" stroke="#78350F" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="4" y1="4" x2="10" y2="4" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="4" y1="7" x2="10" y2="7" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Sparkles of confident talk */}
          <circle cx="15" cy="16" r="2" fill="#FDE047" />
          <path d="M51 34L52 36L54 37L52 38L51 40L50 38L48 37L50 36L51 34Z" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

// 2. Structured Learning Program: 3D Multi-tier Roadmap & Milestone Target
function IconStructuredLearning() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/35 to-teal-400/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/80 to-emerald-100/70 p-2 border border-emerald-200/90 shadow-lg shadow-emerald-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="step1" x1="8" y1="42" x2="26" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="step2" x1="22" y1="30" x2="42" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="step3" x1="36" y1="18" x2="56" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6EE7B7" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Stepped Structured Levels (Foundational to Advanced) */}
          {/* Step 1: Dasar / Foundation */}
          <rect x="10" y="42" width="16" height="12" rx="3" fill="url(#step1)" stroke="#065F46" strokeWidth="1" />
          <text x="18" y="50" fontSize="7" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">1</text>

          {/* Step 2: Level Kemampuan / Intermediate */}
          <rect x="24" y="30" width="16" height="24" rx="3" fill="url(#step2)" stroke="#047857" strokeWidth="1" />
          <text x="32" y="38" fontSize="7" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">2</text>

          {/* Step 3: Persiapan HSK / Advanced */}
          <rect x="38" y="18" width="16" height="36" rx="3" fill="url(#step3)" stroke="#059669" strokeWidth="1" />
          <text x="46" y="26" fontSize="7" fontWeight="bold" fill="#065F46" textAnchor="middle" fontFamily="sans-serif">3</text>

          {/* Curved Upward Progression Arrow */}
          <path
            d="M12 36C18 24 30 16 48 12"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 0"
          />
          {/* Milestone Flag at Top */}
          <path d="M48 8V18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M48 8L56 12L48 16Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />

          {/* Floating Target Checkmark */}
          <circle cx="20" cy="18" r="4.5" fill="#059669" stroke="#A7F3D0" strokeWidth="1.5" />
          <path d="M18 18L19.5 19.5L22.5 16.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Sparkles */}
          <circle cx="56" cy="38" r="1.8" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

// 3. Experienced Teachers: 3D Professional Laoshi with Graduation Mortarboard & Book
function IconExperiencedTeachers() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/35 to-blue-400/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-indigo-50 via-blue-50/80 to-indigo-100/70 p-2 border border-indigo-200/90 shadow-lg shadow-indigo-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="teacherRobe" x1="16" y1="36" x2="48" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#312E81" />
            </linearGradient>
            <linearGradient id="laoshiCap" x1="18" y1="10" x2="46" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E1B4B" />
              <stop offset="1" stopColor="#312E81" />
            </linearGradient>
            <linearGradient id="bookCover" x1="36" y1="34" x2="54" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Teacher Robe / Body */}
          <path d="M16 54C16 43 23 37 32 37C41 37 48 43 48 54H16Z" fill="url(#teacherRobe)" />
          {/* White Shirt Collar */}
          <path d="M29 37L32 43L35 37Z" fill="#FFFFFF" />

          {/* Friendly Face */}
          <circle cx="32" cy="27" r="9" fill="#FFEDD5" />
          <circle cx="32" cy="27" r="8" fill="#FED7AA" />
          {/* Smart Glasses */}
          <rect x="26" y="25" width="5" height="3.5" rx="1.2" stroke="#312E81" strokeWidth="1.2" fill="none" />
          <rect x="33" y="25" width="5" height="3.5" rx="1.2" stroke="#312E81" strokeWidth="1.2" fill="none" />
          <path d="M31 27H33" stroke="#312E81" strokeWidth="1.2" />
          {/* Warm Smile */}
          <path d="M30 31C30 32.5 34 32.5 34 31" stroke="#9A3412" strokeWidth="1.2" strokeLinecap="round" />

          {/* Academic Graduation Mortarboard */}
          <path d="M32 12L46 17L32 22L18 17L32 12Z" fill="url(#laoshiCap)" stroke="#4338CA" strokeWidth="1" />
          <path d="M43 18V24" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="43" cy="25" r="1.5" fill="#F59E0B" />

          {/* 3D Teaching Book / Tablet held in front */}
          <g transform="translate(34, 38)">
            <rect x="0" y="0" width="18" height="14" rx="2.5" fill="url(#bookCover)" stroke="#FFFFFF" strokeWidth="1" className="drop-shadow-sm" />
            <path d="M4 4H14M4 7H12M4 10H10" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="14" cy="10" r="1.5" fill="#FEF08A" />
          </g>

          {/* Star of Excellence */}
          <circle cx="14" cy="22" r="2.5" fill="#FBBF24" />
          <path d="M50 28L51 30L53 31L51 32L50 34L49 32L47 31L49 30L50 28Z" fill="#FDE047" />
        </svg>
      </div>
    </div>
  );
}

// 4. Practical Mandarin Skills: 3D Mini Globe, Travel Briefcase & Daily Conversation
function IconPracticalSkills() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/35 to-cyan-400/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-sky-50 via-cyan-50/80 to-blue-100/70 p-2 border border-sky-200/90 shadow-lg shadow-sky-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="globeGrad" x1="14" y1="12" x2="42" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="caseGrad" x1="26" y1="30" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* 3D Global Earth (Travel & International situations) */}
          <circle cx="26" cy="26" r="15" fill="url(#globeGrad)" stroke="#0284C7" strokeWidth="1.5" />
          {/* Continents & Lat/Long grid */}
          <path d="M13 26H39" stroke="#E0F2FE" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.8" />
          <ellipse cx="26" cy="26" rx="8" ry="15" stroke="#E0F2FE" strokeWidth="1.2" opacity="0.8" />
          <path d="M22 18C25 21 28 20 31 18C34 16 38 19 36 24C34 27 28 28 26 31C24 34 20 34 18 31" fill="#4ADE80" opacity="0.85" />

          {/* 3D Professional & Travel Briefcase (Real-world practical usage) */}
          <g transform="translate(26, 32)">
            {/* Handle */}
            <path d="M8 4V1C8 0.5 8.5 0 9 0H15C15.5 0 16 0.5 16 1V4" stroke="#78350F" strokeWidth="1.5" />
            {/* Body */}
            <rect x="0" y="4" width="24" height="16" rx="3.5" fill="url(#caseGrad)" stroke="#FFFFFF" strokeWidth="1.2" className="drop-shadow-md" />
            {/* Straps / Locks */}
            <rect x="5" y="4" width="2.5" height="16" fill="#78350F" opacity="0.4" />
            <rect x="16.5" y="4" width="2.5" height="16" fill="#78350F" opacity="0.4" />
            <circle cx="12" cy="12" r="2" fill="#FEF08A" stroke="#B45309" strokeWidth="1" />
          </g>

          {/* Mini Real-world Speech Chip (Daily Talk) */}
          <g transform="translate(38, 12)">
            <rect x="0" y="0" width="16" height="12" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" className="drop-shadow-xs" />
            <text x="8" y="8" fontSize="6" fontWeight="bold" fill="#0284C7" textAnchor="middle" fontFamily="sans-serif">你好</text>
            <path d="M4 12L7 15V12H4Z" fill="#FFFFFF" />
          </g>

          <circle cx="12" cy="14" r="2" fill="#38BDF8" />
        </svg>
      </div>
    </div>
  );
}

// 5. HSK & Academic Support: 3D Official HSK Certificate & Academic Ribbon Badge
function IconAcademicSupport() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/35 to-rose-400/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-amber-50 via-rose-50/80 to-orange-100/70 p-2 border border-amber-200/90 shadow-lg shadow-amber-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="hskDoc" x1="12" y1="8" x2="44" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.85" stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
            <linearGradient id="hskBadgeGrad" x1="28" y1="28" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC2626" />
              <stop offset="1" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="goldRibbon" x1="30" y1="36" x2="52" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Academic Certificate Document */}
          <rect x="12" y="10" width="32" height="42" rx="4" fill="url(#hskDoc)" stroke="#D97706" strokeWidth="1.8" />
          
          {/* Certificate Header Banner */}
          <path d="M16 16H40" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          {/* Text Lines */}
          <path d="M16 22H36M16 26H32M16 30H26" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />

          {/* Mini Academic Cap (Academic School Support) */}
          <g transform="translate(10, 8)">
            <path d="M12 0L20 4L12 8L4 4L12 0Z" fill="#1E293B" />
            <path d="M18 5V9" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="18" cy="9.5" r="0.8" fill="#F59E0B" />
          </g>

          {/* Official 3D HSK Badge with Golden Laurel */}
          <g transform="translate(28, 28)">
            {/* Ribbons */}
            <path d="M8 16L3 25L9 23L13 25L10 16" fill="url(#goldRibbon)" />
            <path d="M16 16L13 25L17 23L23 25L18 16" fill="url(#goldRibbon)" />
            
            {/* Main Red Stamp */}
            <circle cx="13" cy="13" r="11" fill="url(#hskBadgeGrad)" stroke="#FEF08A" strokeWidth="1.5" className="drop-shadow-md" />
            {/* Golden Star & HSK Text */}
            <text x="13" y="12" fontSize="6.5" fontWeight="900" fill="#FEF08A" textAnchor="middle" fontFamily="sans-serif">
              HSK
            </text>
            <text x="13" y="18" fontSize="4.5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">
              PASS
            </text>
          </g>

          {/* Sparkles */}
          <circle cx="48" cy="14" r="2" fill="#F59E0B" />
          <path d="M8 26L9.5 28.5L12 29.5L9.5 30.5L8 33L6.5 30.5L4 29.5L6.5 28.5L8 26Z" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

// 6. Engaging & Interactive Learning: 3D Gamepad, Fun Activity Dice & Sparkles
function IconInteractiveLearning() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-500/35 to-orange-400/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-rose-50 via-orange-50/80 to-amber-100/70 p-2 border border-rose-200/90 shadow-lg shadow-rose-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="gameGrad" x1="12" y1="18" x2="48" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F43F5E" />
              <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
            <linearGradient id="diceGrad" x1="36" y1="12" x2="54" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* 3D Game Controller / Fun Practice Pad */}
          <path
            d="M16 26C13 26 10 29 11 34L13 46C14 50 18 52 21 49L26 44H38L43 49C46 52 50 50 51 46L53 34C54 29 51 26 48 26H16Z"
            fill="url(#gameGrad)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            className="drop-shadow-md"
          />
          
          {/* D-Pad Buttons (Left) */}
          <path d="M19 32V40M15 36H23" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
          
          {/* Action Buttons (Right: Colorful buttons for interactive games) */}
          <circle cx="41" cy="33" r="1.8" fill="#FDE047" />
          <circle cx="45" cy="37" r="1.8" fill="#38BDF8" />
          <circle cx="37" cy="37" r="1.8" fill="#4ADE80" />
          <circle cx="41" cy="41" r="1.8" fill="#C084FC" />

          {/* Center Joy & Fun Indicators */}
          <circle cx="30" cy="37" r="2" fill="#BE123C" />
          <circle cx="34" cy="37" r="2" fill="#BE123C" />

          {/* 3D Fun Activity Game Dice / Hanzi Cube Floating Top-Right */}
          <g transform="translate(36, 10)">
            <rect x="0" y="0" width="16" height="16" rx="3.5" fill="url(#diceGrad)" stroke="#FFFFFF" strokeWidth="1.2" className="drop-shadow-md" />
            {/* Dots on dice */}
            <circle cx="4.5" cy="4.5" r="1.3" fill="#FFFFFF" />
            <circle cx="11.5" cy="4.5" r="1.3" fill="#FFFFFF" />
            <circle cx="8" cy="8" r="1.5" fill="#DC2626" />
            <circle cx="4.5" cy="11.5" r="1.3" fill="#FFFFFF" />
            <circle cx="11.5" cy="11.5" r="1.3" fill="#FFFFFF" />
          </g>

          {/* Dynamic Interactive Sparkles */}
          <path d="M14 14L15.5 17L18.5 18.5L15.5 20L14 23L12.5 20L9.5 18.5L12.5 17L14 14Z" fill="#FBBF24" />
          <circle cx="26" cy="16" r="1.8" fill="#FB7185" />
          <circle cx="56" cy="38" r="2" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}


import { KeunggulanItem, SiteSettings } from '@/lib/sanity';

interface FeatureWhyUsProps {
  keunggulan?: KeunggulanItem[];
  settings?: SiteSettings;
}

export default function FeatureWhyUs({ keunggulan, settings }: FeatureWhyUsProps) {
  const defaultIcons = [
    IconSpeakingPractice,
    IconStructuredLearning,
    IconExperiencedTeachers,
    IconPracticalSkills,
    IconAcademicSupport,
    IconInteractiveLearning,
  ];

  const colorClasses = [
    'text-purple-600',
    'text-emerald-600',
    'text-indigo-600',
    'text-sky-600',
    'text-amber-600',
    'text-rose-600',
  ];

  const defaultFeatures = [
    {
      IconComponent: IconSpeakingPractice,
      title: 'Personal Speaking Practice',
      desc: 'Siswa mendapatkan kesempatan untuk berlatih berbicara secara langsung dan aktif, sehingga lebih percaya diri menggunakan bahasa Mandarin dalam percakapan sehari-hari.',
      badge: 'Latihan Berbicara Pribadi',
      colorClass: 'text-purple-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconStructuredLearning,
      title: 'Structured Learning Program',
      desc: 'Program pembelajaran disusun secara terstruktur sesuai usia, level kemampuan, dan kebutuhan siswa, dari dasar hingga persiapan HSK.',
      badge: 'Program Pembelajaran Terstruktur',
      colorClass: 'text-emerald-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconExperiencedTeachers,
      title: 'Experienced Teachers',
      desc: 'Didampingi oleh guru yang berpengalaman dalam mengajar Mandarin untuk anak-anak, remaja, maupun dewasa.',
      badge: 'Guru Berpengalaman',
      colorClass: 'text-indigo-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconPracticalSkills,
      title: 'Practical Mandarin Skills',
      desc: 'Tidak hanya belajar kosakata dan tata bahasa, tetapi juga bagaimana menggunakan Mandarin dalam situasi nyata, seperti percakapan, sekolah, perjalanan, hingga kebutuhan profesional.',
      badge: 'Keterampilan Praktis Mandarin',
      colorClass: 'text-sky-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconAcademicSupport,
      title: 'HSK & Academic Support',
      desc: 'Membantu siswa mempersiapkan ujian HSK sekaligus mendukung kebutuhan Mandarin di sekolah maupun pendidikan lanjutan.',
      badge: 'HSK & Dukungan Akademik',
      colorClass: 'text-amber-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconInteractiveLearning,
      title: 'Engaging & Interactive Learning',
      desc: 'Pembelajaran dibuat interaktif melalui speaking practice, games, activities, dan berbagai aktivitas yang membuat belajar Mandarin lebih menyenangkan.',
      badge: 'Pembelajaran Interaktif & Menarik',
      colorClass: 'text-rose-600',
      customIconUrl: '',
    },
  ];

  const displayFeatures = (keunggulan && keunggulan.length > 0)
    ? keunggulan.map((k, idx) => ({
        IconComponent: defaultIcons[idx % defaultIcons.length],
        title: k.title,
        desc: k.desc,
        badge: k.badge || 'Keunggulan',
        colorClass: colorClasses[idx % colorClasses.length],
        customIconUrl: k.customIconUrl,
      }))
    : defaultFeatures;

  return (
    <section className="py-20 bg-amber-100/50 border-b border-amber-300/70 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-10 right-5 w-72 h-72 rounded-full bg-yellow-300/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {settings?.whyUsTitle || 'MENGAPA MEMILIH BRIGHT MANDARIN?'}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            {settings?.whyUsSubtitle || 'Belajar Mandarin Lebih Cepat, Seru, & Bergaransi Lulus'}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            {settings?.whyUsDesc || 'Kurikulum akselerasi terbukti, materi interaktif yang menyenangkan, serta bimbingan intensif dari para Laoshi terbaik lulusan Tiongkok.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((item, idx) => {
            const Icon = item.IconComponent;
            return (
              <div
                key={idx}
                className="group relative bg-white hover:bg-amber-50/30 rounded-3xl p-8 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Centered 3D Icon or Custom Uploaded Icon */}
                  <div className="mb-4 flex justify-center">
                    {item.customIconUrl ? (
                      <div className="w-20 h-20 rounded-2xl overflow-hidden p-2 bg-amber-50 border border-amber-200 shadow-md flex items-center justify-center">
                        <img src={item.customIconUrl} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <Icon />
                    )}
                  </div>

                  {/* Formal Sub-label with matching color positioned directly under the icon */}
                  <div className="mb-2">
                    <span className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase ${item.colorClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

