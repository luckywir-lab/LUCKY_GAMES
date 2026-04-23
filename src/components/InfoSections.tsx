import { TESTIMONIALS, NEWS } from '../constants';
import { Star, ArrowRight, Quote } from 'lucide-react';

export default function InfoSections() {
  return (
    <section className="py-24 space-y-32 bg-white">
      {/* Testimonials */}
      <div id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Suara Gamers Lucky</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Bergabunglah dengan ribuan user yang telah merasakan kemudahan top up di platform kami.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-sultan-surface border border-gold/10 p-8 rounded-[2rem] relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-gold/5 transition-all">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-gold/5 group-hover:text-gold/10 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-6 leading-relaxed font-medium">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-gold/10 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-gold/20 p-0.5" />
                <div>
                  <h4 className="font-black text-gray-900">{t.name}</h4>
                  <p className="text-[10px] text-gold-dark uppercase tracking-[0.2em] font-black">{t.game}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News & Updates */}
      <div id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black mb-2 text-gray-900">Berita & Update</h2>
            <p className="text-gray-500 font-medium">Info terbaru seputar game favoritmu.</p>
          </div>
          <button className="flex items-center gap-2 text-gold-dark font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
            Lihat Semua <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {NEWS.map((n) => (
            <div key={n.id} className="group cursor-pointer">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-video mb-6 border border-gold/10 shadow-lg">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase border border-gold/20 text-gold-dark shadow-sm">
                  {n.date}
                </div>
              </div>
              <h3 className="text-2xl font-black group-hover:text-gold-dark transition-colors mb-3 leading-tight text-gray-900">{n.title}</h3>
              <p className="text-gray-500 mb-4 line-clamp-2 font-medium">{n.excerpt}</p>
              <span className="text-gold-dark font-black text-xs uppercase tracking-widest flex items-center gap-2">
                Baca Selengkapnya <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About Us */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sultan-surface border border-gold/20 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-gold/5">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 leading-tight">Partner Gaming #1 Kamu Sejak 2024</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium italic">
              "Lucky Games lahir dari semangat untuk memberikan pengalaman top up yang adil, cepat, dan aman bagi seluruh komunitas gaming di Indonesia. Kami bekerja sama langsung dengan publisher resmi untuk menjamin setiap transaksi legal dan instan."
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gold/10 pt-10">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-black text-gold-dark tracking-tighter">24/7</p>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Support</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-black text-gold-dark tracking-tighter">100%</p>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Legal</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-black text-gold-dark tracking-tighter">100+</p>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Game</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-black text-gold-dark tracking-tighter">5-Sec</p>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Proses</p>
              </div>
            </div>
          </div>
          {/* Subtle Decorative Logo */}
          <div className="absolute top-1/2 -right-40 -translate-y-1/2 opacity-[0.03] pointer-events-none transform rotate-12">
             <div className="w-[600px] h-[600px] border-[100px] border-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
