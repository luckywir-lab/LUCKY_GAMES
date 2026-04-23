/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Game {
  id: string;
  name: string;
  publisher: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  game: string;
  content: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  category: 'E-Wallet' | 'Virtual Account' | 'Retail' | 'Transfer Bank';
}
