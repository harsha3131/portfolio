// Experience — timeline of roles, each expandable (Redux-driven).
function PfExperience() {
  const { GlassCard, Badge, Tag } = window.SriHarshaPortfolioDesignSystem_04f779;
  const { motion, AnimatePresence } = window.Motion;
  const { useSelector, useDispatch } = ReactRedux;
  const expanded = useSelector((s) => s.expanded);
  const dispatch = useDispatch();
  const PF = window.PF;

  return (
    <section id="experience" data-spy="experience" data-screen-label="Experience" style={{ position: 'relative', padding: '96px 24px', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHead
          eyebrow="Experience"
          title="Five years of models in production."
          sub="Every role measured in shipped systems and business outcomes — not notebooks."
        />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            position: 'absolute', left: 11, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(180deg, var(--sunset-300), var(--neutral-200))', borderRadius: 2,
          }}></div>

          {PF.experience.map((job, i) => {
            const open = !!expanded[job.id];
            const shown = open ? job.bullets : job.bullets.slice(0, 2);
            return (
              <Reveal key={job.id} delay={i * 0.08} style={{ display: 'flex', gap: 20 }}>
                <div style={{ flex: 'none', width: 24, display: 'flex', justifyContent: 'center', paddingTop: 26 }}>
                  <span style={{
                    width: 12, height: 12, borderRadius: '50%', background: i === 0 ? 'var(--grad-sunset)' : 'var(--neutral-300)',
                    boxShadow: i === 0 ? 'var(--glow-sunset)' : 'none', border: '2px solid var(--neutral-50)', display: 'inline-block',
                  }}></span>
                </div>

                <GlassCard
                  strength={i === 0 ? 'strong' : 'standard'}
                  interactive
                  onClick={() => dispatch({ type: 'exp/toggle', id: job.id })}
                  style={{ flex: 1, padding: '24px 28px' }}
                  role="button"
                  aria-expanded={open}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0 }}>
                      {job.company}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-md)', color: 'var(--text-accent)' }}>{job.title}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginLeft: 'auto' }}>{job.dates}</span>
                  </div>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '14px 0 4px' }}>
                    {job.chips.map((c) => (
                      <Badge key={c} tone={i === 0 ? 'accent' : 'neutral'} size="sm">{c}</Badge>
                    ))}
                  </div>

                  <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <AnimatePresence initial={false}>
                      {shown.map((b, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: PF_EASE }}
                          style={{ overflow: 'hidden', display: 'flex', gap: 10 }}
                        >
                          <span style={{ color: 'var(--sunset-400)', flex: 'none', paddingTop: 2 }}><LIcon name="chevron-right" size={15} /></span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.55, color: 'var(--text-body)' }}>{b}</span>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16,
                    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-accent)',
                  }}>
                    {open ? 'Show less' : 'Show all ' + job.bullets.length + ' highlights'}
                    <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: 'inline-flex' }}>
                      <LIcon name="chevron-down" size={15} />
                    </motion.span>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.PfExperience = PfExperience;
