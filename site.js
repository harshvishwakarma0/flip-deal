'use strict';

/* --- Flip Deal shared behaviour --- */

const DEALS = {
  zaytoun: {
    name: 'Mixed grill for two', place: 'Zaytoun Grill', cuisine: 'Arabic',
    discount: '40% off', price: 79, was: 129, rating: '4.8', distance: '2.4 km',
    ends: '9:00 PM',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80&auto=format&fit=crop',
    desc: 'Charcoal-grilled chicken, kofta and lamb chops with saffron rice, garlic sauce and warm flatbread. Plenty for two, best shared.',
    fine: 'Dine-in only · valid today until 9:00 PM · one deal per table'
  },
  tandoor: {
    name: 'Hyderabadi biryani', place: 'Tandoor House', cuisine: 'Arabic',
    discount: '30% off', price: 25, was: 39, rating: '4.7', distance: '1.2 km',
    ends: '10:00 PM',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80&auto=format&fit=crop',
    desc: 'Slow-cooked basmati with marinated chicken, fried onion and mint raita, sealed with dough and opened at the table.',
    fine: 'Dine-in or pickup · valid today until 10:00 PM'
  },
  marsa: {
    name: 'Shrimp sayadieh', place: 'Marsa 12', cuisine: 'Arabic',
    discount: '35% off', price: 45, was: 69, rating: '4.8', distance: '4.6 km',
    ends: '9:30 PM',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=80&auto=format&fit=crop',
    desc: 'Spiced rice with shrimp, white fish, caramelised onion, lemon and tahini. Served in the pan it was cooked in.',
    fine: 'Dine-in only · valid today until 9:30 PM'
  },
  olea: {
    name: 'Butter chicken & naan', place: 'Olea Kitchen', cuisine: 'Arabic',
    discount: '25% off', price: 45, was: 60, rating: '4.7', distance: '2.0 km',
    ends: '10:00 PM',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80&auto=format&fit=crop',
    desc: 'Tomato-butter curry with charred naan, cucumber salad and a pot of mint chutney. A quiet weeknight favourite.',
    fine: 'Dine-in or pickup · valid today until 10:00 PM'
  },
  bean: {
    name: 'Flat white & croissant', place: 'Bean & Bloom', cuisine: 'Cafe',
    discount: '2 for 1', price: 24, was: 48, rating: '4.9', distance: '0.8 km',
    ends: '6:00 PM',
    img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=900&q=80&auto=format&fit=crop',
    desc: 'Two flat whites and two butter croissants, made for a slow morning or a long catch-up. Oat milk on request.',
    fine: 'Dine-in only · valid today until 6:00 PM'
  },
  qahwa: {
    name: 'Pistachio latte', place: 'Qahwa 28', cuisine: 'Cafe',
    discount: '25% off', price: 19, was: 25, rating: '4.6', distance: '3.1 km',
    ends: '8:00 PM',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80&auto=format&fit=crop',
    desc: 'Double shot, pistachio cream and toasted pistachio on top. Sweet, but not too sweet.',
    fine: 'Dine-in or pickup · valid today until 8:00 PM'
  },
  kaffa: {
    name: 'Chemex for two', place: 'Kaffa Roasters', cuisine: 'Cafe',
    discount: '20% off', price: 32, was: 40, rating: '4.8', distance: '1.7 km',
    ends: '7:00 PM',
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80&auto=format&fit=crop',
    desc: 'Single-origin Ethiopian beans brewed to order, served with two small pastries from the morning bake.',
    fine: 'Dine-in only · valid today until 7:00 PM'
  },
  ribroom: {
    name: 'Smoked short rib', place: 'Rib Room', cuisine: 'Grill',
    discount: '45% off', price: 89, was: 162, rating: '4.9', distance: '5.2 km',
    ends: '11:00 PM',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80&auto=format&fit=crop',
    desc: 'Twelve-hour smoked short rib with house pickles, slaw, grilled tomato and a pot of barbecue sauce.',
    fine: 'Dine-in only · valid today until 11:00 PM · one per guest'
  },
  maison: {
    name: 'Chef\'s tasting plate', place: 'Maison Riyadh', cuisine: 'Dining',
    discount: '30% off', price: 120, was: 170, rating: '4.9', distance: '3.8 km',
    ends: '10:30 PM',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop',
    desc: 'A five-course tasting plate for one: market vegetables, aged rice, grilled protein and a dark chocolate finish.',
    fine: 'Reservation required · valid today until 10:30 PM'
  }
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* toast */
let toastTimer;
