import { Layout, Eye, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white p-6 md:p-16 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-8 sm:gap-0">
        <div className="flex flex-col gap-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.9] uppercase"
          >
            ANTON-C // <br />
            DESIGN PORTFOLIO
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-md text-xs sm:text-sm text-white/50 mt-4 sm:mt-6 leading-relaxed font-light"
          >
            Crafting high-end digital experiences and a zero-gravity aesthetic for those who don't just watch the future—they build it. Shift your vision.
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

        <div className="flex items-center gap-4 sm:gap-8 text-[9px] sm:text-[10px] tracking-[0.2em] font-medium text-white/40 self-end sm:self-start">
          <span>1/26</span>
          <div className="hidden sm:block w-24 h-[1px] bg-white/20 relative">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-white" />
          </div>
          <span className="text-white flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap">
            NEXT PROJECT <ArrowRight size={10} />
          </span>
        </div>
      </div>

      {/* Middle Right: Technical Specs */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block w-80">
        <h3 className="text-[11px] tracking-[0.2em] font-display font-bold mb-6 uppercase">Technical Specs</h3>
        <div className="space-y-4">
          {[
            { label: 'Focus', value: 'Visual Systems' },
            { label: 'Logic', value: 'Creative Strategy' },
            { label: 'Motion', value: 'Interactive Design' },
            { label: 'Build', value: 'Full-Stack Product' },
          ].map((spec, i) => (
            <div key={i} className="flex justify-between items-baseline border-b border-white/10 pb-2">
              <span className="text-[10px] text-white/40 uppercase tracking-wider">{spec.label}</span>
              <span className="text-xs font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 mt-12 md:mt-0">
        {/* Glass Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="glass-card p-6 sm:p-8 max-w-sm w-full"
        >
          <h4 className="text-[10px] sm:text-xs font-display font-bold tracking-widest uppercase mb-3">AC-01: PORTFOLIO CORE</h4>
          <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed mb-6">
            High-resolution optics and a light frame for comfort and clarity. Optimized for modern web standards.
          </p>
          <button className="px-5 sm:px-6 py-2 rounded-lg border border-white/20 text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            View Case Study
          </button>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-start md:justify-end">
          {['UI/UX', 'A+', 'ULTRA-WIDE', 'NEURAL-SYNC'].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className={`pill-tag ${i === 3 ? 'bg-white text-black border-none' : ''}`}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
