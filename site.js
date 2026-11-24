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
function initCubes() {
  const canvas = $('#cube-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, dpr = 1;
  let pointer = 0, pointerTarget = 0;
  let raf = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, Math.round(rect.width));
    h = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduce) draw(0);
  };

  const drawCube = (cx, cy, hw, hh, rise, topFill, leftFill, rightFill) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy - rise - hh);
    ctx.lineTo(cx + hw, cy - rise);
    ctx.lineTo(cx, cy - rise + hh);
    ctx.lineTo(cx - hw, cy - rise);
    ctx.closePath();
    ctx.fillStyle = topFill;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cx - hw, cy - rise);
    ctx.lineTo(cx, cy - rise + hh);
    ctx.lineTo(cx, cy + hh);
    ctx.lineTo(cx - hw, cy);
    ctx.closePath();
    ctx.fillStyle = leftFill;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cx + hw, cy - rise);
    ctx.lineTo(cx, cy - rise + hh);
    ctx.lineTo(cx, cy + hh);
    ctx.lineTo(cx + hw, cy);
    ctx.closePath();
    ctx.fillStyle = rightFill;
    ctx.fill();
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w * 0.5 + pointer * 28;
    const top = -h * 0.04;
    const field = h * 0.7;
    const cols = w > 900 ? 12 : 7;
    const rows = 6;
    const angle = 0.62 + pointer * 0.05 + Math.sin(t * 0.00006) * 0.045;
    const cos = Math.cos(angle), sin = Math.sin(angle);

    const cells = [];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const gx = (i - (cols - 1) / 2) * 138;
        const gz = (j - (rows - 1) / 2) * 138;
        const rx = gx * cos - gz * sin;
        const rz = gx * sin + gz * cos;
        const d = Math.min(1, Math.max(0, (rz + 520) / 1040));
        const scale = 0.38 + d * 0.62;
        const sx = cx + rx * scale * 1.2;
        const sy = top + Math.pow(d, 1.3) * field;
        const seed = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
        const rnd = seed - Math.floor(seed);
        const pulse = reduce ? 1 : 1 + Math.sin(t * 0.0009 + i * 0.7 + j * 0.5) * 0.12;
        cells.push({ sx, sy, d, scale, rnd, pulse });
      }
    }
    cells.sort((a, b) => a.d - b.d);

    cells.forEach(c => {
      const hw = 24 * c.scale;
      const hh = hw * 0.52;
      const rise = (20 + c.rnd * 46) * c.scale * c.pulse;
      const accent = c.rnd > 0.92;
      const near = 0.18 + c.d * 0.26;
      drawCube(
        c.sx, c.sy, hw, hh, rise,
        accent ? `rgba(240,122,34,${0.12 + c.d * 0.12})` : `rgba(255,248,239,${near + 0.08})`,
        accent ? `rgba(213,101,26,${0.1 + c.d * 0.1})` : `rgba(229,211,190,${near})`,
        accent ? `rgba(196,90,22,${0.12 + c.d * 0.12})` : `rgba(217,197,173,${near - 0.02})`
      );
      ctx.strokeStyle = `rgba(25,23,19,${0.012 + c.d * 0.02})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    });
  };

  const loop = (t) => {
    pointer += (pointerTarget - pointer) * 0.04;
    draw(t);
    raf = requestAnimationFrame(loop);
  };

  resize();
  window.addEventListener('resize', resize);
  if (!reduce) {
    raf = requestAnimationFrame(loop);
    window.addEventListener('pointermove', e => {
      pointerTarget = (e.clientX / window.innerWidth - 0.5) * 2;
    }, { passive: true });
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else if (!reduce) raf = requestAnimationFrame(loop);
  });
}

/* storefront day / evening state */

document.addEventListener('DOMContentLoaded', () => {
  initCubes();
});
