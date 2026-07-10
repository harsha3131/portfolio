// Motion + icon helpers shared by every section.
const { motion, AnimatePresence, useInView, animate, useScroll, useSpring, useMotionValue, useTransform } = window.Motion;

const PF_EASE = [0.22, 1, 0.36, 1];

// Brand glyphs (GitHub, LinkedIn) — lucide@latest dropped brand icons, so these
// two are inlined from the classic lucide set.
const PF_BRAND_ICONS = {
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>',
};

// Lucide icon, React-safe (lucide only touches the inside of our span).
function LIcon({ name, size = 18, strokeWidth = 2, color = null, style = {} }) {
  const ref = React.useRef(null);
  const brand = PF_BRAND_ICONS[name] || null;
  React.useEffect(() => {
    const el = ref.current;
    if (brand || !el || !window.lucide) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    try { window.lucide.createIcons(); } catch (e) { /* icon may not exist */ }
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
    }
  }, [name, size, strokeWidth, brand]);
  const wrapStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 0, color: color || 'currentColor', flex: 'none', ...style };
  if (brand) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + strokeWidth + '" stroke-linecap="round" stroke-linejoin="round">' + brand + '</svg>';
    return <span aria-hidden="true" style={wrapStyle} dangerouslySetInnerHTML={{ __html: svg }}></span>;
  }
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={wrapStyle}
    ></span>
  );
}

// Fade-up reveal on scroll into view.
function Reveal({ children, delay = 0, y = 26, once = true, style = {}, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px 0px' }}
      transition={{ duration: 0.7, delay, ease: PF_EASE }}
      style={style}
      {...rest}
    >{children}</motion.div>
  );
}

// Animated number counter, triggers in view.
function Counter({ to, prefix = '', suffix = '', decimals = 0, duration = 1.6, style = {} }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  React.useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration, ease: PF_EASE,
      onUpdate: (v) => { if (ref.current) ref.current.textContent = prefix + v.toFixed(decimals) + suffix; },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, duration]);
  return <span ref={ref} style={style}>{prefix}0{suffix}</span>;
}

// Magnetic hover — element leans toward the cursor, springs back on leave.
function Magnetic({ children, strength = 0.28, style = {} }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18 });
  const sy = useSpring(y, { stiffness: 240, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy, display: 'inline-block', ...style }}>
      {children}
    </motion.div>
  );
}

// Headline that reveals word by word.
function StaggerWords({ text, gradientFrom = -1, delay = 0, style = {} }) {
  const words = text.split(' ');
  return (
    <span style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={gradientFrom >= 0 && i >= gradientFrom ? 'sh-gradient-text' : undefined}
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, delay: delay + i * 0.055, ease: PF_EASE }}
          style={{ display: 'inline-block', marginRight: '0.24em' }}
        >{w}</motion.span>
      ))}
    </span>
  );
}

// Section header — eyebrow + display heading.
function SectionHead({ eyebrow, title, sub = null, align = 'left' }) {
  return (
    <Reveal style={{ textAlign: align, marginBottom: 40 }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)',
      }}>{eyebrow}</span>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 4.4vw, 46px)',
        letterSpacing: '-0.03em', lineHeight: 1.08, color: 'var(--text-strong)', margin: '10px 0 0', textWrap: 'balance',
      }}>{title}</h2>
      {sub && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 1.55,
          color: 'var(--text-body)', maxWidth: '58ch', margin: align === 'center' ? '14px auto 0' : '14px 0 0',
        }}>{sub}</p>
      )}
    </Reveal>
  );
}

// Shared photographic background (wash + optional drift), tweak-aware.
function PfPhotoBg({ src, blur = false, wash = 0.5, drift = true }) {
  const motionOn = ReactRedux.useSelector((s) => s.tweaks.motionOn);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <div style={{
        position: 'absolute', inset: '-4%',
        background: "url('" + src + "') center/cover",
        filter: (blur ? 'blur(4px) ' : '') + 'saturate(0.72) brightness(1.04)',
        willChange: 'transform', transform: 'translateZ(0)', backfaceVisibility: 'hidden',
        animation: drift && motionOn ? 'sh-bg-drift 36s var(--ease-in-out) infinite' : 'none',
      }}></div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(255,255,255,' + (wash * 0.55) + '), rgba(255,247,240,' + wash + '))',
      }}></div>
    </div>
  );
}

Object.assign(window, { LIcon, Reveal, Counter, Magnetic, StaggerWords, SectionHead, PfPhotoBg, PF_EASE });
