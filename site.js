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

function toast(message) {
  const el = $('#toast');
  const text = $('#toast-text');
  if (!el || !text) return;
  text.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* header preferences */
function initPrefs() {
  const settings = $('#settings');
  const prefs = $('#prefs');
  if (!settings || !prefs) return;

  settings.addEventListener('click', e => {
    e.stopPropagation();
    const open = prefs.hidden;
    prefs.hidden = !open;
    settings.setAttribute('aria-expanded', String(open));
  });
  prefs.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('click', () => {
    if (!prefs.hidden) {
      prefs.hidden = true;
      settings.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !prefs.hidden) {
      prefs.hidden = true;
      settings.setAttribute('aria-expanded', 'false');
      settings.focus();
    }
  });
  $$('.switch', prefs).forEach(sw => {
    sw.addEventListener('click', () => {
      const on = sw.getAttribute('aria-pressed') !== 'true';
      sw.setAttribute('aria-pressed', String(on));
      toast(`${sw.getAttribute('aria-label')} ${on ? 'on' : 'off'}`);
    });
  });
}

function initBell() {
  const bell = $('#bell');
  if (bell) bell.addEventListener('click', () => toast('2 new deal alerts near you'));
}

/* deal quick view */
let dealDialog;


function buildDealDialog() {
  if (dealDialog) return;
  const wrap = document.createElement('dialog');
  wrap.className = 'deal-dialog';
  wrap.id = 'deal-dialog';
  wrap.setAttribute('aria-labelledby', 'dd-title');
  wrap.innerHTML = `
    <div class="dd-grid">
      <div class="dd-media"><img id="dd-img" alt="" /></div>
      <div class="dd-body">
        <button class="dd-close" type="button" id="dd-close" aria-label="Close deal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
        <div class="dd-meta"><span id="dd-cuisine"></span><span class="off" id="dd-off"></span></div>
        <h2 id="dd-title" tabindex="-1"></h2>
        <p class="dd-place" id="dd-place"></p>
        <div class="dd-facts">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8L6.7 19.6l1-6L3.3 9.4l6-.9L12 3Z"/></svg><span id="dd-rating"></span></span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg><span id="dd-distance"></span></span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/></svg><span id="dd-ends"></span></span>
        </div>
        <p class="dd-desc" id="dd-desc"></p>
        <div class="dd-foot">
          <div class="dd-price"><strong id="dd-price"></strong><span>SAR</span><s id="dd-was"></s></div>
          <button class="btn" type="button" id="dd-add">Add to my deals</button>
        </div>
        <p class="dd-fine" id="dd-fine"></p>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  dealDialog = wrap;

  $('#dd-close', wrap).addEventListener('click', () => wrap.close());
  wrap.addEventListener('click', e => { if (e.target === wrap) wrap.close(); });
  wrap.addEventListener('close', () => { document.body.style.overflow = ''; });
  $('#dd-add', wrap).addEventListener('click', () => {
    toast(`${$('#dd-place', wrap).textContent} saved to your deals`);
    wrap.close();
  });
  return wrap;
}

function openDeal(id) {
  const deal = DEALS[id];
  if (!deal) return;
  buildDealDialog();
  const d = dealDialog;
  $('#dd-img', d).src = deal.img;
  $('#dd-img', d).alt = deal.name;
  $('#dd-cuisine', d).textContent = deal.cuisine;
  $('#dd-off', d).textContent = deal.discount;
  $('#dd-title', d).textContent = deal.name;
  $('#dd-place', d).textContent = `${deal.place} · ${deal.distance}`;
  $('#dd-rating', d).textContent = `${deal.rating} rating`;
  $('#dd-distance', d).textContent = deal.distance;
  $('#dd-ends', d).textContent = `Ends ${deal.ends}`;
  $('#dd-desc', d).textContent = deal.desc;
  $('#dd-price', d).textContent = deal.price;
  $('#dd-was', d).textContent = `${deal.was} SAR`;
  $('#dd-fine', d).textContent = deal.fine;
  d.showModal();
  document.body.style.overflow = 'hidden';
  $('#dd-title', d).focus();
}

function initDealBrowser() {
  const grid = $('[data-deal-grid]');
  if (!grid) return;
  const cards = $$('.deal', grid);
  const search = $('[data-deal-search]');
  const chips = $$('[data-deal-cats] .chip');
  const count = $('#deals-count');
  const live = $('#live-count');
  const empty = $('#empty');
  const sort = $('#deal-sort');
  let cat = 'all';

  const apply = () => {
    const q = (search?.value || '').trim().toLowerCase();
    const visible = [];
    cards.forEach(card => {
      const inCat = cat === 'all' || card.dataset.cat === cat;
      const inText = !q || card.textContent.toLowerCase().includes(q) || (card.dataset.place || '').toLowerCase().includes(q);
      const show = inCat && inText;
      card.hidden = !show;
      if (show) visible.push(card);
    });
    if (count) count.textContent = `${visible.length} ${visible.length === 1 ? 'deal' : 'deals'} in Riyadh`;
    if (live) live.textContent = `${visible.length} ${visible.length === 1 ? 'deal' : 'deals'} live near you`;
    if (empty) empty.classList.toggle('show', visible.length === 0);
  };

  const sortCards = () => {
    if (!sort) return;
    const mode = sort.value;
    const sorted = [...cards].sort((a, b) => {
      if (mode === 'price') return Number(a.dataset.price) - Number(b.dataset.price);
      if (mode === 'discount') return Number(b.dataset.off) - Number(a.dataset.off);
      if (mode === 'rating') return Number(b.dataset.rating) - Number(a.dataset.rating);
      return (a.dataset.ends || '').localeCompare(b.dataset.ends || '');
    });
    sorted.forEach(c => grid.appendChild(c));
    apply();
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      cat = chip.dataset.cat;
      chips.forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
      apply();
    });
  });
  if (search) search.addEventListener('input', apply);
  if (sort) sort.addEventListener('change', sortCards);
  apply();
  if (sort) sortCards();
}

/* home premium rail */

function initPlans() {
  const plans = $$('.plan[data-plan]');
  const subscribe = $('#subscribe');
  if (!plans.length || !subscribe) return;
  let plan = 'monthly';
  plans.forEach(btn => {
    btn.addEventListener('click', () => {
      plan = btn.dataset.plan;
      plans.forEach(p => p.setAttribute('aria-checked', String(p === btn)));
      subscribe.textContent = plan === 'monthly' ? 'Subscribe now — 49 SAR' : 'Subscribe now — 399 SAR';
    });
  });
  subscribe.addEventListener('click', () => {
    toast(plan === 'monthly' ? 'Welcome to Premium · 49 SAR / month' : 'Welcome to Premium · 399 SAR / year');
  });
}

/* premium page pricing */
function initPremiumPricing() {
  $$('[data-choose]').forEach(btn => {
    btn.addEventListener('click', () => {
      const yearly = btn.dataset.choose === 'yearly';
      toast(yearly ? 'Yearly plan selected · 399 SAR / year' : 'Monthly plan selected · 49 SAR / month');
    });
  });
}

/* partners form */

function initPartnerForm() {
  const form = $('#partner-form');
  if (!form) return;
  const success = $('#partner-success');
  const nameOut = $('#success-name');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const restaurant = form.elements.restaurant.value.trim();
    nameOut.textContent = restaurant || 'your restaurant';
    form.closest('.form-card').hidden = true;
    success.classList.add('show');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    toast('Application received — check your inbox');
  });
  $('#again')?.addEventListener('click', () => {
    form.reset();
    form.closest('.form-card').hidden = false;
    success.classList.remove('show');
    form.elements.restaurant.focus();
  });
}

/* help centre filters */

function initHelp() {
  const items = $$('.qa');
  if (!items.length) return;
  const search = $('#help-search');
  const topics = $$('.topic');
  const empty = $('#help-empty');
  const count = $('#help-count');
  let topic = 'all';

  const apply = () => {
    const q = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    items.forEach(item => {
      const inTopic = topic === 'all' || item.dataset.topic === topic;
      const inText = !q || (item.textContent + ' ' + (item.dataset.keywords || '')).toLowerCase().includes(q);
      const show = inTopic && inText;
      item.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.classList.toggle('show', visible === 0);
    if (count) count.textContent = `${visible} ${visible === 1 ? 'answer' : 'answers'}`;
  };

  topics.forEach(t => {
    t.addEventListener('click', () => {
      topic = t.dataset.topic === topic ? 'all' : t.dataset.topic;
      topics.forEach(x => x.setAttribute('aria-pressed', String(x.dataset.topic === topic)));
      apply();
    });
  });
  if (search) search.addEventListener('input', apply);
  apply();
}

/* gooey search */

function initQuickView() {
  document.addEventListener('click', e => {
    const card = e.target.closest('[data-deal]');
    if (!card) return;
    e.preventDefault();
    openDeal(card.dataset.deal);
  });
}

/* filtered deal grids */


/* toast */
let toastTimer;
function initGooey() {
  $$('.gooey').forEach(g => {
    const input = $('.gooey-input', g);
    const trigger = $('.gooey-trigger', g);
    const clear = $('.gooey-clear', g);
    if (!input || !trigger) return;
    const pinned = g.dataset.pinned === 'true';
    if (g.dataset.open === 'true' || pinned) {
      g.dataset.open = 'true';
      trigger.setAttribute('aria-expanded', 'true');
    }
    const open = () => {
      g.dataset.open = 'true';
      trigger.setAttribute('aria-expanded', 'true');
      input.focus({ preventScroll: true });
    };
    const collapse = () => {
      if (pinned) return;
      if (input.value.trim()) return;
      g.dataset.open = 'false';
      trigger.setAttribute('aria-expanded', 'false');
    };
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      if (g.dataset.open === 'true' && document.activeElement === input) input.blur();
      else open();
    });
    g.addEventListener('click', e => {
      if (g.dataset.open !== 'true' && !e.target.closest('.gooey-input')) open();
    });
    input.addEventListener('focus', () => {
      g.dataset.open = 'true';
      trigger.setAttribute('aria-expanded', 'true');
    });
    input.addEventListener('input', () => {
      g.dataset.hasValue = input.value.trim() ? 'true' : 'false';
    });
    input.addEventListener('blur', () => setTimeout(collapse, 150));
    if (clear) {
      clear.addEventListener('click', () => {
        input.value = '';
        g.dataset.hasValue = 'false';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.focus({ preventScroll: true });
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === '/' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        open();
      }
    });
    if (input.value.trim()) g.dataset.hasValue = 'true';
  });
}

/* header cube field */

function initStorefront(){
  const photo = document.querySelector('.sf-photo');
  if (!photo) return;
  const toggle = photo.querySelector('.sf-switch');
  const setNight = (on) => {
    photo.classList.toggle('is-night', on);
    if (toggle) toggle.textContent = on ? 'Daylight' : 'Evening';
  };
  photo.addEventListener('click', (e) => {
    if (e.target.closest('.sf-cta')) return;
    setNight(!photo.classList.contains('is-night'));
  });
}

/* boot */

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
  initGooey();
  initQuickView();
  initPrefs();
  initBell();
  initStorefront();
  initDealBrowser();
  initPlans();
  initPremiumPricing();
  initPartnerForm();
  initHelp();
});
