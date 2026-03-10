/* ── RESET & VARIABLES ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #07090f;
  --surface: #0f1320;
  --surface2: #161b2e;
  --border: rgba(255,255,255,0.07);
  --accent: #2f6fff;
  --accent2: #00e5c3;
  --text: #eef0f7;
  --muted: #7a8199;
  --radius: 14px;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 5vw;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(7,9,15,0.75);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--text);
}

.logo-icon {
  width: 34px; height: 34px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color .2s;
}
.nav-links a:hover { color: var(--text); }

/* ── BUTTONS ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all .2s;
  border: none;
}
.btn-primary {
  background: var(--accent);
  color: #fff;
}
.btn-primary:hover {
  background: #1a5aff;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(47,111,255,0.35);
}
.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-outline:hover {
  border-color: rgba(255,255,255,0.25);
  background: var(--surface);
}
.btn-lg { padding: 14px 30px; font-size: 1rem; }
.btn-green {
  background: var(--accent2);
  color: #07090f;
  font-weight: 600;
}
.btn-green:hover {
  background: #00cfb0;
  box-shadow: 0 8px 24px rgba(0,229,195,0.3);
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  padding: 120px 5vw 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(47,111,255,0.18) 0%, transparent 70%);
  top: -100px; left: -100px;
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(0,229,195,0.1) 0%, transparent 70%);
  bottom: 50px; right: 5vw;
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(47,111,255,0.12);
  border: 1px solid rgba(47,111,255,0.25);
  color: #7aadff;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 28px;
  letter-spacing: 0.02em;
}
.hero-badge span { color: var(--accent2); }

.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.4rem, 4.5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.hero-title .highlight {
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 480px;
  margin-bottom: 40px;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-trust {
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatars { display: flex; }
.avatars div {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 2px solid var(--bg);
  background: linear-gradient(135deg, #2f6fff, #00e5c3);
  margin-left: -10px;
  font-size: 0.7rem;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700;
}
.avatars div:first-child { margin-left: 0; }

.trust-text { color: var(--muted); font-size: 0.85rem; }
.trust-text strong { color: var(--text); }

/* PHONE MOCKUP */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.phone-wrap { position: relative; width: 260px; }

.phone {
  background: var(--surface);
  border-radius: 36px;
  padding: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
  position: relative;
  z-index: 2;
}

.phone-screen {
  background: linear-gradient(160deg, #0f1320, #07090f);
  border-radius: 26px;
  padding: 20px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.phone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.phone-header .brand { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; }
.phone-status { font-size: 0.7rem; color: var(--muted); }

.balance-card {
  background: linear-gradient(135deg, var(--accent), #0040d4);
  border-radius: 18px;
  padding: 20px;
}
.balance-label { font-size: 0.75rem; opacity: 0.8; margin-bottom: 6px; }
.balance-amount { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; }
.balance-sub { font-size: 0.7rem; opacity: 0.75; margin-top: 4px; }

.action-row { display: flex; gap: 10px; }
.action-btn {
  flex: 1;
  background: var(--surface2);
  border-radius: 12px;
  padding: 12px 8px;
  text-align: center;
  font-size: 0.7rem;
  color: var(--muted);
  border: 1px solid var(--border);
}
.action-btn .icon { font-size: 1.1rem; display: block; margin-bottom: 4px; }

.tx-list { display: flex; flex-direction: column; gap: 8px; }
.tx-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface2);
  border-radius: 12px;
  padding: 10px 12px;
  border: 1px solid var(--border);
}
.tx-left { display: flex; align-items: center; gap: 10px; }
.tx-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem;
}
.tx-name { font-size: 0.75rem; font-weight: 500; }
.tx-date { font-size: 0.65rem; color: var(--muted); }
.tx-amount { font-size: 0.8rem; font-weight: 600; }
.tx-amount.pos { color: var(--accent2); }
.tx-amount.neg { color: #ff6b6b; }

.phone-float {
  position: absolute;
  right: -60px;
  top: 40px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 16px;
  font-size: 0.75rem;
  width: 160px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  z-index: 3;
}
.phone-float .pf-label { color: var(--muted); font-size: 0.65rem; margin-bottom: 4px; }
.phone-float .pf-val { font-weight: 700; color: var(--accent2); font-family: 'Syne', sans-serif; }

/* ── SECTION COMMONS ── */
section { padding: 100px 5vw; }

.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent2);
  margin-bottom: 16px;
}
.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}
.section-sub {
  color: var(--muted);
  max-width: 520px;
  font-weight: 300;
}

/* ── PLATFORMS ── */
.platforms {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 48px 5vw;
}
.platforms-label {
  text-align: center;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 32px;
}
.platforms-grid {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  align-items: center;
}
.platform-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-weight: 500;
  font-size: 1rem;
  transition: color .2s;
}
.platform-item:hover { color: var(--text); }
.platform-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem;
}

/* ── HOW IT WORKS ── */
.how { background: var(--bg); }
.how-header { text-align: center; margin-bottom: 64px; }
.how-header .section-sub { margin: 0 auto; }

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.step {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 24px;
  position: relative;
  transition: border-color .25s, transform .25s;
}
.step:hover {
  border-color: rgba(47,111,255,0.3);
  transform: translateY(-4px);
}
.step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -18px;
  top: 40px;
  color: var(--muted);
  font-size: 1.1rem;
  z-index: 1;
}

.step-num {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, var(--accent), #0040d4);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.step h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 10px;
}
.step p { color: var(--muted); font-size: 0.875rem; font-weight: 300; }

/* ── FEATURES ── */
.features {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.features-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feat-list { display: flex; flex-direction: column; gap: 24px; margin-top: 40px; }

.feat-item {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 20px;
  border-radius: var(--radius);
  border: 1px solid transparent;
  transition: border-color .2s, background .2s;
  cursor: default;
}
.feat-item:hover {
  border-color: var(--border);
  background: var(--surface2);
}

.feat-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.feat-item h4 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 6px;
}
.feat-item p { color: var(--muted); font-size: 0.85rem; font-weight: 300; }

/* STATS */
.stats-panel {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 36px;
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 28px;
}
.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}
.stat-val {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label { color: var(--muted); font-size: 0.8rem; margin-top: 4px; }

.countries-list { display: flex; flex-wrap: wrap; gap: 8px; }
.country-tag {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 50px;
  padding: 5px 12px;
  font-size: 0.78rem;
  color: var(--muted);
}

/* ── FAQ ── */
.faq { background: var(--bg); }
.faq-inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  align-items: start;
}

.faq-list { display: flex; flex-direction: column; gap: 2px; }

.faq-item { border-bottom: 1px solid var(--border); }

.faq-q {
  width: 100%;
  background: none;
  border: none;
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
  padding: 20px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  transition: color .2s;
}
.faq-q:hover { color: var(--accent2); }
.faq-q .arrow {
  flex-shrink: 0;
  font-size: 0.8rem;
  transition: transform .3s;
  color: var(--muted);
}
.faq-item.open .faq-q { color: var(--accent2); }
.faq-item.open .arrow { transform: rotate(180deg); color: var(--accent2); }

.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height .35s ease;
}
.faq-a-inner {
  padding-bottom: 20px;
  color: var(--muted);
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.7;
}
.faq-item.open .faq-a { max-height: 200px; }

/* ── TESTIMONIALS ── */
.testimonials {
  background: var(--surface);
  border-top: 1px solid var(--border);
}
.test-header { text-align: center; margin-bottom: 56px; }
.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.test-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color .25s, transform .25s;
}
.test-card:hover {
  border-color: rgba(47,111,255,0.25);
  transform: translateY(-3px);
}
.stars { color: #fbbf24; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 16px; }
.test-text {
  color: var(--muted);
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 24px;
}
.test-author { display: flex; align-items: center; gap: 12px; }
.author-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}
.author-name { font-weight: 600; font-size: 0.875rem; }
.author-loc { font-size: 0.75rem; color: var(--muted); }

/* ── CTA ── */
.cta {
  background: var(--bg);
  text-align: center;
  padding: 120px 5vw;
  position: relative;
  overflow: hidden;
}
.cta::before {
  content: '';
  position: absolute;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(47,111,255,0.12) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
.cta .section-title { font-size: clamp(2rem, 3.5vw, 3.2rem); }
.cta .section-sub { margin: 0 auto 40px; }
.cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

/* ── FOOTER ── */
footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 48px 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}
.footer-copy { color: var(--muted); font-size: 0.8rem; }
.footer-links { display: flex; gap: 24px; }
.footer-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.8rem;
  transition: color .2s;
}
.footer-links a:hover { color: var(--text); }

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-content > * {
  animation: fadeUp .6s ease both;
}
.hero-content > *:nth-child(1) { animation-delay: .1s; }
.hero-content > *:nth-child(2) { animation-delay: .2s; }
.hero-content > *:nth-child(3) { animation-delay: .3s; }
.hero-content > *:nth-child(4) { animation-delay: .4s; }
.hero-content > *:nth-child(5) { animation-delay: .5s; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; padding-top: 100px; }
  .hero-visual { display: none; }
  .steps { grid-template-columns: 1fr 1fr; }
  .step::after { display: none; }
  .features-inner { grid-template-columns: 1fr; }
  .faq-inner { grid-template-columns: 1fr; }
  .test-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .steps { grid-template-columns: 1fr; }
  .test-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr; }
  nav .nav-links { display: none; }
}

/* ── FOOTER SUB ── */
.footer-sub {
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: 16px 5vw;
  text-align: center;
}
.footer-sub p {
  color: var(--muted);
  font-size: 0.78rem;
}
.footer-sub a {
  color: var(--muted);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color .2s;
}
.footer-sub a:hover { color: var(--text); }