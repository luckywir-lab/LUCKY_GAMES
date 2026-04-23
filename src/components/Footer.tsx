import { Gamepad2, Instagram, Facebook, Twitter, Mail, Youtube, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sultan-surface pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center shadow-md">
                <Gamepad2 size={20} className="text-black" />
              </div>
              <span className="text-xl font-black gold-text-gradient ml-2 uppercase tracking-tighter">Lucky Games</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Level up pengalaman gaming kamu dengan layanan top up tercepat dan termurah di Indonesia. Kepercayaan kamu adalah prioritas kami.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gold/10 flex items-center justify-center text-gold hover:text-gold-dark shadow-sm hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gold/10 flex items-center justify-center text-gold hover:text-gold-dark shadow-sm hover:scale-110 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gold/10 flex items-center justify-center text-gold hover:text-gold-dark shadow-sm hover:scale-110 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gold/10 flex items-center justify-center text-gold hover:text-gold-dark shadow-sm hover:scale-110 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-black uppercase text-xs tracking-widest mb-6">Menu Cepat</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="#" className="hover:text-gold-dark transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-gold-dark transition-colors">Semua Game</a></li>
              <li><a href="#" className="hover:text-gold-dark transition-colors">Promo & Event</a></li>
              <li><a href="#" className="hover:text-gold-dark transition-colors">Status Pesanan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-black uppercase text-xs tracking-widest mb-6">Bantuan</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="https://wa.me/6285117633965" className="hover:text-gold-dark transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-gold-dark transition-colors">Ketentuan Layanan</a></li>
              <li><a href="#" className="hover:text-gold-dark transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-gold-dark transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-black uppercase text-xs tracking-widest mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3 font-bold text-gray-600">
                <Mail size={18} className="text-gold-dark" />
                support@luckygames.id
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-600">
                <Phone size={18} className="text-gold-dark" />
                +62 851-1763-3965
              </li>
              <li className="flex items-center gap-3 leading-relaxed font-bold">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Layanan tersedia 24 Jam Nonstop
              </li>
            </ul>
            <div className="mt-8">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Menerima Pembayaran:</p>
               <span className="text-xl font-black gold-text-gradient uppercase tracking-tighter">All Payment</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-semibold tracking-wide">
            © 2026 Lucky Games Indonesia. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-gold-dark transition-colors">Sitemap</a>
            <a href="#" className="hover:text-gold-dark transition-colors">Compliance</a>
            <a href="#" className="hover:text-gold-dark transition-colors">Partnership</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
