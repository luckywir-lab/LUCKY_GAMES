import { Game, Testimonial, NewsItem, PaymentMethod } from './types';

export const GAMES: Game[] = [
  {
    id: 'mlbb',
    name: 'Mobile Legends',
    publisher: 'Moonton',
    image: 'https://images.unsplash.com/photo-1772927253232-91fb2e5c30b0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Top up Diamond, Twilight Pass, dan Weekly Diamond Pass.'
  },
  {
    id: 'ff',
    name: 'Free Fire',
    publisher: 'Garena',
    image: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?',
    description: 'Top up Diamond Free Fire dengan harga termurah.'
  },
  {
    id: 'pubgm',
    name: 'PUBG Mobile',
    publisher: 'Level Infinite',
    image: 'https://images.unsplash.com/photo-1633450797384-9242a83a7597?',
    description: 'Top up UC PUBG Mobile aman dan terpercaya.'
  },
  {
    id: 'valorant',
    name: 'Valorant',
    publisher: 'Riot Games',
    image: 'https://images.unsplash.com/photo-1732631486871-267980e49951?',
    description: 'Top up Valorant Points untuk skin eksklusif.'
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    publisher: 'HoYoverse',
    image: 'https://images.unsplash.com/photo-1661347999665-579bb8f9402d?',
    description: 'Top up Genesis Crystal dan Welkin Moon.'
  },
  {
    id: 'honor-of-kings',
    name: 'Honor of Kings',
    publisher: 'Tencent',
    image: 'https://images.unsplash.com/photo-1620495087695-2c21f0b561ef?',
    description: 'Top up Token Honor of Kings tercepat.'
  },
  {
    id: 'roblox',
    name: 'Roblox',
    publisher: 'Roblox Corporation',
    image: 'https://images.unsplash.com/photo-1656639969809-ebc544c96955?',
    description: 'Top up Robux murah dan instant untuk item favoritmu.'
  },
  {
    id: 'codm',
    name: 'Call of Duty Mobile',
    publisher: 'Activision',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=700&auto=format&fit=crop',
    description: 'Top up CP CODM termurah untuk Battle Pass & Skin.'
  },
  {
    id: 'wild-rift',
    name: 'LoL: Wild Rift',
    publisher: 'Riot Games',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=700&auto=format&fit=crop',
    description: 'Top up Wild Cores untuk skin Champion favoritmu.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Andi Pratama',
    game: 'Mobile Legends',
    content: 'Prosesnya super cepat! Diamond langsung masuk dalam hitungan detik. Lucky Games emang paling mantap.',
    avatar: 'https://i.pravatar.cc/150?u=andi'
  },
  {
    id: '2',
    name: 'Siska Amelia',
    game: 'Free Fire',
    content: 'Harga bersaing banget, apalagi sering ada promo skin. CS-nya juga ramah kalau mau tanya-tanya.',
    avatar: 'https://i.pravatar.cc/150?u=siska'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Event Diamond Kuning MLBB Kembali Lagi!',
    date: '20 April 2026',
    image: 'https://picsum.photos/seed/news1/800/400',
    excerpt: 'Siapkan diamond kalian untuk belanja skin idaman di event promo kali ini...'
  },
  {
    id: '2',
    title: 'Cara Aman Top Up UC PUBG Agar Tidak Kena Banned',
    date: '18 April 2026',
    image: 'https://picsum.photos/seed/news2/800/400',
    excerpt: 'Gunakan platform resmi seperti Lucky Games untuk menjamin keamanan akun gaming Anda.'
  }
];

export const PAYMENTS: PaymentMethod[] = [
  { id: 'gopay', name: 'GoPay', icon: 'Wallet', category: 'E-Wallet' },
  { id: 'ovo', name: 'OVO', icon: 'Wallet', category: 'E-Wallet' },
  { id: 'dana', name: 'DANA', icon: 'Wallet', category: 'E-Wallet' },
  { id: 'bca', name: 'BCA Virtual Account', icon: 'CreditCard', category: 'Virtual Account' },
  { id: 'mandiri', name: 'Mandiri Virtual Account', icon: 'CreditCard', category: 'Virtual Account' },
  { id: 'alfamart', name: 'Alfamart', icon: 'Store', category: 'Retail' }
];

export const THEME = {
  black: '#0a0a0a',
  gold: '#D4AF37',
  goldGradient: 'linear-gradient(135deg, #D4AF37 0%, #F1D279 50%, #B4902C 100%)',
  emerald: '#059669', // Alternative as requested
};
