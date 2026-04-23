/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';
import TopUpFlow from './components/TopUpFlow';
import { Game } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedGame, setSelectedGame] = React.useState<Game | null>(null);

  const handleGameSelect = (gameId: string) => {
    import('./constants').then(({ GAMES }) => {
      const game = GAMES.find(g => g.id === gameId);
      if (game) setSelectedGame(game);
    });
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero onPromoClick={() => handleGameSelect('mlbb')} />
        <div id="games">
          <div onClick={(e) => {
            const card = (e.target as HTMLElement).closest('[data-game-id]');
            if (card) {
              const id = card.getAttribute('data-game-id');
              if (id) handleGameSelect(id);
            }
          }}>
            <GameGrid />
          </div>
        </div>
        <InfoSections />
      </main>
      <Footer />

      <AnimatePresence>
        {selectedGame && (
          <TopUpFlow 
            game={selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}


