import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Zap, CreditCard } from 'lucide-react';

interface HeroProps {
  onPromoClick?: () => void;
}

export default function Hero({ onPromoClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gold-pale/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-6 font-bold">
              <Zap size={14} className="text-gold" />
              <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">Top Up Instan 24/7</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-gray-900">
              Level Up Permainanmu Dengan <span className="gold-text-gradient">Lucky Games</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed font-medium">
              Platform top up game terpercaya di Indonesia. Dapatkan Diamond, UC, dan Points favoritmu dalam hitungan detik dengan harga paling bersahabat.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                className="sultan-button px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                Top Up Sekarang <ChevronRight size={20} />
              </button>
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex flex-col">
                  <span className="text-gray-900 font-black text-xl">1M+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Transaksi</span>
                </div>
                <div className="h-8 w-px bg-gold/20" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-black text-xl">500k+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">User Aktif</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                <ShieldCheck size={16} className="text-gold-dark" />
                Aman & Legal
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                <Zap size={16} className="text-gold-dark" />
                Proses Instan
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                <CreditCard size={16} className="text-gold-dark" />
                Multi Pembayaran
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-gold/5 shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1682141882061-c7676602e111?"
                alt="Gaming Room"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/40 to-transparent" />
              
              {/* Floating Poster Overlay */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl border border-white"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Zap size={24} className="text-gold-dark" />
                    </div>
                    <div>
                      <p className="text-gold-dark font-black text-xs tracking-widest">PROMO SPECIAL</p>
                      <p className="text-gray-900 text-lg font-black">Diamond MLBB 50% Cashback</p>
                    </div>
                  </div>
                  <button 
                    onClick={onPromoClick}
                    className="bg-gold-pale text-gold-dark px-4 py-2 rounded-lg text-sm font-black hover:bg-gold-light transition-colors"
                  >
                    Ambil
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold-pale/30 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
