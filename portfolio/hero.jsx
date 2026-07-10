// Hero — name, headline, animated impact counters, CTAs.
function PfHero() {
  const { Button, Badge, Avatar, IconButton } = window.SriHarshaPortfolioDesignSystem_04f779;
  const { useSelector } = ReactRedux;
  const tweaks = useSelector((s) => s.tweaks);
  const PF = window.PF;

  const links = [
    { icon: 'github', label: 'GitHub', href: PF.github },
    { icon: 'linkedin', label: 'LinkedIn', href: PF.linkedin },
    { icon: 'mail', label: 'Email', href: 'mailto:' + PF.email },
  ];

  return (
    <section id="home" data-spy="home" data-screen-label="Hero" style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column' }}>
      <PfPhotoBg src={PF.photos[tweaks.photo]} wash={tweaks.wash} />
      <div style={{
        position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: 1040, margin: '0 auto', padding: '140px 24px 80px', width: '100%', boxSizing: 'border-box',
      }}>
        <Motion.motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: PF_EASE }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}
        >
          <Avatar src="../assets/portfolio/headshot.jpg" name={PF.name} size={48} ring status="online" />
          <Badge tone="success" dot>Open to new roles</Badge>
          <Badge tone="neutral">{PF.location}</Badge>
        </Motion.motion.div>

        <Motion.motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)',
          }}
        >{PF.role} · LLMs · RAG · MLOps</Motion.motion.span>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 6.6vw, 74px)',
          lineHeight: 1.04, letterSpacing: '-0.035em', color: 'var(--text-strong)', margin: '16px 0 0', textWrap: 'balance',
        }}>
          <StaggerWords text="I build machine learning that ships —" delay={0.15} />
          <br />
          <StaggerWords text="and keeps learning in production." gradientFrom={3} delay={0.55} />
        </h1>

        <Reveal delay={0.75} y={14}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-xl)', lineHeight: 1.55,
            color: 'var(--text-body)', maxWidth: '56ch', margin: '22px 0 0',
          }}>{PF.summary}</p>
        </Reveal>

        <Reveal delay={0.9} y={12}>
          <div style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap', alignItems: 'center' }}>
            <Magnetic><Button size="lg" onClick={() => pfScrollTo('projects')}>View projects</Button></Magnetic>
            <Magnetic><Button size="lg" variant="secondary" onClick={() => pfScrollTo('contact')}>Get in touch</Button></Magnetic>
            <span style={{ display: 'flex', gap: 8, marginLeft: 6 }}>
              {links.map((l) => (
                <Magnetic key={l.icon} strength={0.35}>
                  <a href={l.href} target="_blank" rel="noopener" aria-label={l.label} style={{ display: 'inline-flex' }}>
                    <IconButton variant="glass" size="md" label={l.label}><LIcon name={l.icon} size={18} /></IconButton>
                  </a>
                </Magnetic>
              ))}
            </span>
          </div>
        </Reveal>

        <Reveal delay={1.05} y={16}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12, marginTop: 56,
          }}>
            {PF.heroStats.map((s, i) => (
              <div key={i} style={{
                background: 'var(--glass-white)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-glass)',
                padding: '18px 20px',
              }}>
                <Counter to={s.to} prefix={s.prefix || ''} suffix={s.suffix || ''} decimals={s.decimals}
                  style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'clamp(26px, 2.6vw, 34px)', color: 'var(--text-strong)', letterSpacing: '-0.02em' }} />
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Motion.motion.button
        onClick={() => pfScrollTo('experience')}
        aria-label="Scroll to experience"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{
          position: 'absolute', left: '50%', bottom: 22, transform: 'translateX(-50%)', zIndex: 2,
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
        }}
      >
        <Motion.motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} style={{ display: 'inline-flex' }}>
          <LIcon name="chevron-down" size={22} />
        </Motion.motion.span>
      </Motion.motion.button>
    </section>
  );
}
window.PfHero = PfHero;
