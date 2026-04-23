import React from 'react';
import { motion } from 'motion/react';
import { GAMES } from '../constants';
import { Search, TrendingUp } from 'lucide-react';

export default function GameGrid() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showAll, setShowAll] = React.useState(false);

  const filteredGames = GAMES.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.publisher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedGames = searchQuery 
    ? filteredGames 
    : (showAll ? filteredGames : filteredGames.slice(0, 6));

  return (
    <section id="games" className="py-20 bg-sultan-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-gold-dark mb-4">
              <TrendingUp size={20} />
              <span className="text-sm font-black uppercase tracking-[0.2em]">Pilihan Terpopuler</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Pilih Game Favoritmu</h2>
          </div>
          
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold-dark transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Cari game favorit..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gold/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all text-sm font-medium shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 min-h-[400px]">
          {displayedGames.map((game, idx) => (
            <motion.div
              key={game.id}
              data-game-id={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 border border-gold/10 group-hover:border-gold transition-colors shadow-sm group-hover:shadow-xl group-hover:shadow-gold/10 bg-white">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[10px] font-black text-gold-light uppercase tracking-widest mb-1">{game.publisher}</p>
                    <h3 className="text-sm font-black text-white leading-tight">{game.name}</h3>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
          {displayedGames.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-20">
               <div className="w-16 h-16 bg-white border border-gold/10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Search size={32} strokeWidth={1} />
               </div>
               <p className="font-bold text-gray-600">Game "{searchQuery}" tidak ditemukan</p>
               <button 
                  onClick={() => setSearchQuery('')}
                  className="text-gold-dark mt-2 hover:underline font-bold"
               >
                  Reset Pencarian
               </button>
            </div>
          )}
        </div>

        {/* View All Button */}
        {!searchQuery && filteredGames.length > 6 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-gray-500 hover:text-gold-dark font-black text-xs uppercase tracking-widest transition-colors border-b-2 border-gold/10 hover:border-gold-dark pb-2"
            >
              {showAll ? 'Sembunyikan Game' : 'Lihat Semua Game'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
