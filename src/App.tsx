import { Layout, Eye, Zap, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const translations = {
  en: {
    title: "CHISTO-STUDIO // \nDESIGN PORTFOLIO",
    description: "Crafting high-end digital experiences and a zero-gravity aesthetic for those who don't just watch the future—they build it. Shift your vision.",
    nextProject: "NEXT PROJECT",
    techSpecs: "Technical Specs",
    specs: [
      { label: 'Focus', value: 'Visual Systems' },
      { label: 'Logic', value: 'Creative Strategy' },
      { label: 'Motion', value: 'Interactive Design' },
      { label: 'Build', value: 'Full-Stack Product' },
    ],
    cardTitle: "AC-01: PORTFOLIO CORE",
    cardDesc: "High-resolution optics and a light frame for comfort and clarity. Optimized for modern web standards.",
    viewCaseStudy: "View Case Study",
    tags: ['UI/UX', 'A+', 'ULTRA-WIDE', 'NEURAL-SYNC']
  },
  ru: {
    title: "ЧИСТО СТУДИЯ // \nДИЗАЙН ПОРТФОЛИО",
    description: "Создание высококлассного цифрового опыта и эстетики нулевой гравитации для тех, кто не просто наблюдает за будущим, а строит его. Измените свое видение.",
    nextProject: "СЛЕДУЮЩИЙ ПРОЕКТ",
    techSpecs: "Тех. характеристики",
    specs: [
      { label: 'Фокус', value: 'Визуальные системы' },
      { label: 'Логика', value: 'Креативная стратегия' },
      { label: 'Движение', value: 'Интерактивный дизайн' },
      { label: 'Сборка', value: 'Full-Stack продукт' },
    ],
    cardTitle: "AC-01: ЯДРО ПОРТФОЛИО",
    cardDesc: "Оптика высокого разрешения и легкая рама для комфорта и четкости. Оптимизировано для современных веб-стандартов.",
    viewCaseStudy: "Посмотреть кейс",
    tags: ['UI/UX', 'A+', 'ULTRA-WIDE', 'NEURAL-SYNC']
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'ru'>('en');
  const t = translations[lang];

  return (
    <main className="relative min-h-screen w-full bg-black text-white p-6 md:p-16 flex flex-col justify-between select-none overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://media.chisto-studio.ru/videos/20260210_background.webm" type="video/webm" />
        </video>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 md:top-16 md:right-16 z-50 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded-full text-[10px] tracking-widest transition-all ${lang === 'en' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('ru')}
          className={`px-3 py-1 rounded-full text-[10px] tracking-widest transition-all ${lang === 'ru' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
        >
          RU
        </button>
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start w-full gap-8 sm:gap-0">
        <div className="flex flex-col gap-1">
          <motion.h1 
            key={`${lang}-title`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.9] uppercase whitespace-pre-line"
          >
            {t.title}
          </motion.h1>
          
          <motion.p 
            key={`${lang}-desc`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-md text-xs sm:text-sm text-white/50 mt-4 sm:mt-6 leading-relaxed font-light"
          >
            {t.description}
          </motion.p>

          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[Layout, Eye, Zap].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <Icon size={14} className="sm:w-4 sm:h-4" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8 text-[9px] sm:text-[10px] tracking-[0.2em] font-medium text-white/40 self-end sm:self-start mt-14 sm:mt-12">
          <span>1/26</span>
          <div className="hidden sm:block w-24 h-[1px] bg-white/20 relative">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-white" />
          </div>
          <span className="text-white flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap uppercase">
            {t.nextProject} <ArrowRight size={10} />
          </span>
        </div>
      </div>

      {/* Middle Right: Technical Specs */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 z-10 hidden lg:block w-80">
        <h3 className="text-[11px] tracking-[0.2em] font-display font-bold mb-6 uppercase">{t.techSpecs}</h3>
        <div className="space-y-4">
          {t.specs.map((spec, i) => (
            <div key={i} className="flex justify-between items-baseline border-b border-white/10 pb-2">
              <span className="text-[10px] text-white/40 uppercase tracking-wider small-heading">{spec.label}</span>
              <span className="text-xs font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 mt-12 md:mt-0">
        {/* Glass Card */}
        <motion.div 
          key={`${lang}-card`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="glass-card p-6 sm:p-8 max-w-sm w-full"
        >
          <h4 className="text-[10px] sm:text-xs font-display font-bold tracking-widest uppercase mb-3 small-heading">{t.cardTitle}</h4>
          <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed mb-6">
            {t.cardDesc}
          </p>
          <button className="px-5 sm:px-6 py-2 rounded-lg border border-white/20 text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all small-heading">
            {t.viewCaseStudy}
          </button>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-start md:justify-end">
          {t.tags.map((tag, i) => (
            <motion.div
              key={`${lang}-${tag}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className={`pill-tag small-heading ${i === 3 ? 'bg-white text-black border-none' : ''}`}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  );
}
