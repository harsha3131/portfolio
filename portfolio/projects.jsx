// Projects — glass cards over photography; click opens a shared-layout modal.
function PfProjects() {
  const { GlassCard, Tag, Button, IconButton } = window.SriHarshaPortfolioDesignSystem_04f779;
  const { motion, AnimatePresence } = window.Motion;
  const { useSelector, useDispatch } = ReactRedux;
  const modal = useSelector((s) => s.modal);
  const dispatch = useDispatch();
  const PF = window.PF;
  const open = PF.projects.find((p) => p.id === modal) || null;

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') dispatch({ type: 'projects/close' }); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [dispatch]);

  return (
    <section id="projects" data-spy="projects" data-screen-label="Projects" style={{ position: 'relative', padding: '96px 24px' }}>
      <PfPhotoBg src={PF.photos.milwaukee} blur wash={0.7} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead
          eyebrow="AI/ML Projects"
          title="Built, benchmarked, open on GitHub."
          sub="Five production-shaped systems — each with a number it had to hit. Click any card for the full story."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
          {PF.projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <motion.div layoutId={'proj-' + p.id} style={{ height: '100%' }}>
                <GlassCard
                  strength="standard"
                  interactive
                  onClick={() => dispatch({ type: 'projects/open', id: p.id })}
                  style={{ padding: '24px 26px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
                  role="button"
                  aria-label={'Open ' + p.title}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <span style={{
                      width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--grad-sunset)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: 'var(--shadow-xs)',
                    }}><LIcon name={p.icon} size={19} /></span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0, textWrap: 'balance' }}>{p.title}</h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 34, letterSpacing: '-0.02em', color: 'var(--text-accent)' }}>{p.stat.value}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{p.stat.label}</span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.55, color: 'var(--text-body)', margin: '12px 0 18px', flex: 1 }}>{p.blurb}</p>

                  <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', alignItems: 'center' }}>
                    {p.tags.map((t) => <Tag key={t} style={{ cursor: 'default', padding: '5px 10px' }}>{t}</Tag>)}
                    <span style={{
                      marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 4,
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-accent)',
                    }}>Details <LIcon name="arrow-up-right" size={15} /></span>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => dispatch({ type: 'projects/close' })}
            style={{
              position: 'fixed', inset: 0, zIndex: 90, background: 'var(--surface-overlay)',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
            }}
          >
            <motion.div
              layoutId={'proj-' + open.id}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.4, ease: PF_EASE }}
              style={{
                width: 'min(680px, 94vw)', maxHeight: '86vh', overflowY: 'auto',
                background: 'var(--glass-white-strong)', backdropFilter: 'var(--glass-blur-strong)', WebkitBackdropFilter: 'var(--glass-blur-strong)',
                border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass-lg)',
                padding: '32px 34px', boxSizing: 'border-box',
              }}
              role="dialog" aria-modal="true" aria-label={open.title}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--grad-sunset)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: 'var(--glow-sunset)',
                }}><LIcon name={open.icon} size={22} /></span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0, flex: 1, textWrap: 'balance' }}>{open.title}</h3>
                <IconButton variant="ghost" size="sm" label="Close" onClick={() => dispatch({ type: 'projects/close' })}><LIcon name="x" size={18} /></IconButton>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 44, letterSpacing: '-0.02em', color: 'var(--text-accent)' }}>{open.stat.value}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-muted)' }}>{open.stat.label}</span>
              </div>

              <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {open.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: PF_EASE }}
                    style={{ display: 'flex', gap: 10 }}
                  >
                    <span style={{ color: 'var(--sunset-400)', flex: 'none', paddingTop: 2 }}><LIcon name="chevron-right" size={15} /></span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</span>
                  </motion.li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '22px 0 0' }}>
                {open.tags.map((t) => <Tag key={t} style={{ cursor: 'default' }}>{t}</Tag>)}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 26 }}>
                <a href={open.github} target="_blank" rel="noopener" style={{ display: 'inline-flex' }}>
                  <Button variant="primary"><LIcon name="github" size={16} /> View on GitHub</Button>
                </a>
                <Button variant="secondary" onClick={() => dispatch({ type: 'projects/close' })}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
window.PfProjects = PfProjects;
