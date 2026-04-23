import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, User, Phone, MessageSquare, Newspaper, Info, Menu, X, LogIn } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [authModal, setAuthModal] = React.useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login'
  });

  const menuItems = [
    { name: 'Beranda', icon: <Gamepad2 size={18} />, href: '#' },
    { name: 'Kontak', icon: <Phone size={18} />, href: 'https://wa.me/6285117633965' },
    { name: 'Testimoni', icon: <MessageSquare size={18} />, href: '#testimonials' },
    { name: 'Berita', icon: <Newspaper size={18} />, href: '#news' },
    { name: 'Tentang', icon: <Info size={18} />, href: '#about' },
  ];

  const toggleAuth = (mode: 'login' | 'register') => {
    setAuthModal({ isOpen: true, mode });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg transform rotate-6">
                <Gamepad2 className="text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tighter gold-text-gradient ml-2 uppercase">
                Lucky <span className="text-gold-dark font-black">Games</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gold transition-colors text-sm font-semibold flex items-center gap-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pl-4 border-l border-gold/20">
                <button 
                  onClick={() => toggleAuth('login')}
                  className="text-sm font-semibold text-gray-700 hover:text-gold transition-colors"
                >
                  Masuk
                </button>
                <button 
                  onClick={() => toggleAuth('register')}
                  className="sultan-button px-6 py-2 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-transform"
                >
                  Daftar
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gold p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gold/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-4 text-gray-700 hover:text-gold transition-colors border-b border-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-gold">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button 
                    onClick={() => toggleAuth('login')}
                    className="border border-gold/30 text-gold-dark py-3 rounded-xl font-bold"
                  >
                    Masuk
                  </button>
                  <button 
                    onClick={() => toggleAuth('register')}
                    className="sultan-button py-3 rounded-xl font-bold"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal 
        isOpen={authModal.isOpen} 
        onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
        initialMode={authModal.mode} 
      />
    </>
  );
}

