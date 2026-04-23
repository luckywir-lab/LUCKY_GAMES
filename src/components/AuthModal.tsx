import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Github, Chrome } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = React.useState<'login' | 'register'>(initialMode);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      alert(mode === 'login' ? 'Berhasil Masuk!' : 'Berhasil Terdaftar!');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gold-dark/20 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-md bg-white border border-gold/20 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl"
          >
             {/* Background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gold-dark transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-10 pt-4">
              <h2 className="text-3xl font-black mb-2 text-gray-900 tracking-tight">
                {mode === 'login' ? 'Selamat Datang' : 'Gabung Bersama'}
              </h2>
              <p className="text-gray-500 text-sm font-medium italic">
                {mode === 'login' ? 'Masuk ke portal eksklusif Lucky Games' : 'Dapatkan akses VIP ke seluruh layanan kami'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark" size={18} />
                  <input 
                    type="text" 
                    required
                    placeholder="Nama Lengkap" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 font-medium"
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="Alamat Email" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 font-medium"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="Kata Sandi" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 font-medium"
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full sultan-button py-4 rounded-2xl text-black font-black mt-6 disabled:opacity-50 flex items-center justify-center gap-2 tracking-widest uppercase text-xs"
              >
                {isLoading ? (
                   <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  mode === 'login' ? 'Masuk Sekarang' : 'Daftar Sultan'
                )}
              </button>
            </form>

            <div className="mt-10">
              <div className="relative flex items-center justify-center mb-6">
                <div className="w-full h-px bg-gray-100" />
                <span className="absolute bg-white px-4 text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">Metode Lain</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-100 py-3 rounded-2xl hover:bg-gold/5 hover:border-gold/20 transition-all text-[11px] font-black uppercase tracking-widest text-gray-600">
                  <Chrome size={16} className="text-gold-dark" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-100 py-3 rounded-2xl hover:bg-gold/5 hover:border-gold/20 transition-all text-[11px] font-black uppercase tracking-widest text-gray-600">
                  <Github size={16} className="text-gold-dark" /> GitHub
                </button>
              </div>
            </div>

            <p className="text-center mt-10 text-sm text-gray-500 font-medium">
              {mode === 'login' ? 'Belum punya akun?' : 'Sudah punya akun Sultan?'} {' '}
              <button 
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-gold-dark font-black hover:underline underline-offset-4"
              >
                {mode === 'login' ? 'Daftar Disini' : 'Masuk Disini'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
