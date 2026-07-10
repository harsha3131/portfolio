// App — nav, scroll-spy, progress bar, tweaks, composition.

// "City" accent — soft steel blue that sits naturally over the Milwaukee photo.
// Overrides the design system's sunset tokens at page scope; removing the
// overrides reverts to the original orange theme.
const PF_CITY_ACCENT = {
  '--sunset-50': '#eef4f9', '--sunset-100': '#dce8f3', '--sunset-200': '#bcd3e6',
  '--sunset-300': '#93b6d3', '--sunset-400': '#5f8fbf', '--sunset-500': '#4a7ba6',
  '--sunset-600': '#3a6489', '--sunset-700': '#2c4e6c',
  '--amber-300': '#9fc6cf', '--amber-400': '#7fb0bf', '--amber-500': '#5f96a6',
  '--grad-sunset': 'linear-gradient(120deg, #5f8fbf 0%, #7fb0bf 100%)',
  '--grad-sunset-soft': 'linear-gradient(120deg, #5f8fbf33 0%, #7fb0bf33 100%)',
  '--glow-sunset': '0 8px 28px rgba(95, 143, 191, 0.32)',
  '--focus-ring': 'rgba(95, 143, 191, 0.45)',
};

function PfApp() {
  const { GlassNav } = window.SriHarshaPortfolioDesignSystem_04f779;
  const { motion, useScroll, useSpring } = window.Motion;
  const { useSelector, useDispatch } = ReactRedux;
  const active = useSelector((s) => s.active);
  const tweaks = useSelector((s) => s.tweaks);
  const dispatch = useDispatch();
  const PF = window.PF;

  // Tweaks panel state (host protocol) mirrored into Redux.
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "photo": "milwaukee",
    "accent": "city",
    "motionOn": false,
    "wash": 0.65
  }/*EDITMODE-END*/);
  React.useEffect(() => { dispatch({ type: 'tweaks/set', patch: t }); }, [t.photo, t.motionOn, t.wash, t.accent]);

  // Apply / revert the accent override.
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.accent === 'city') {
      Object.entries(PF_CITY_ACCENT).forEach(([k, v]) => root.style.setProperty(k, v));
    } else {
      Object.keys(PF_CITY_ACCENT).forEach((k) => root.style.removeProperty(k));
    }
  }, [t.accent]);

  // Scroll progress bar.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  // Scroll-spy → Redux. Driven by a rAF loop: 'scroll' events and
  // IntersectionObserver both fail to fire in some embedded previews.
  React.useEffect(() => {
    let raf, lastY = -1, lastActive = null;
    const tick = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        lastY = y;
        const probe = y + window.innerHeight * 0.42;
        let cur = 'home';
        for (const el of document.querySelectorAll('[data-spy]')) {
          if (el.offsetTop <= probe) cur = el.dataset.spy;
        }
        if (cur !== lastActive) {
          lastActive = cur;
          dispatch({ type: 'nav/active', id: cur });
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dispatch]);

  const navMap = { Home: 'home', Experience: 'experience', Skills: 'skills', Projects: 'projects', Contact: 'contact' };
  const activeLabel = Object.keys(navMap).find((k) => navMap[k] === active) || 'Home';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-page)' }}>
      <motion.div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 100,
        background: 'var(--grad-sunset)', transformOrigin: '0 50%', scaleX: progress,
      }}></motion.div>

      <div style={{ position: 'fixed', top: 16, left: 0, right: 0, zIndex: 60, display: 'flex', justifyContent: 'center', padding: '0 16px', pointerEvents: 'none' }}>
        <motion.div
          initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: PF_EASE, delay: 0.2 }}
          style={{ width: '100%', maxWidth: 820, pointerEvents: 'auto' }}
        >
          <GlassNav
            brand="Sri Harsha"
            links={['Home', 'Experience', 'Skills', 'Projects', 'Contact']}
            active={activeLabel}
            cta="Hire me"
            onNavigate={(l) => pfScrollTo(navMap[l] || 'home')}
            onCta={() => pfScrollTo('contact')}
          />
        </motion.div>
      </div>

      <main>
        <PfHero />
        <PfExperience />
        <PfSkills />
        <PfProjects />
        <PfCreds />
        <PfContact />
      </main>

      <footer style={{
        position: 'relative', zIndex: 2, textAlign: 'center', padding: '28px 16px 36px',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)',
        background: 'var(--surface-page)', borderTop: '1px solid var(--border-subtle)',
      }}>
        © 2026 {PF.name} · <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>React · Redux · Framer Motion</span>
      </footer>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Accent" value={t.accent === 'city' ? 'City blue' : 'Sunset'}
          options={['City blue', 'Sunset']}
          onChange={(v) => setTweak('accent', v === 'City blue' ? 'city' : 'sunset')} />
        <TweakSection label="Backdrop" />
        <TweakRadio label="Photo" value={t.photo === 'milwaukee' ? 'Milwaukee' : 'Golden hour'}
          options={['Golden hour', 'Milwaukee']}
          onChange={(v) => setTweak('photo', v === 'Milwaukee' ? 'milwaukee' : 'bg')} />
        <TweakSlider label="Wash" value={t.wash} min={0.2} max={0.75} step={0.05}
          onChange={(v) => setTweak('wash', v)} />
        <TweakSection label="Motion" />
        <TweakToggle label="Ambient drift" value={t.motionOn} onChange={(v) => setTweak('motionOn', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactRedux.Provider store={window.pfStore}>
    <PfApp />
  </ReactRedux.Provider>
);
