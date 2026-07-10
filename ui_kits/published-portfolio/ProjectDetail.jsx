// ProjectDetail — a single case study view.
function ProjectDetail({ id, go }) {
  const { Button, Badge, GlassCard } = window.SriHarshaPortfolioDesignSystem_04f779;
  const p = window.SH_PROJECTS.find(x => x.id === id) || window.SH_PROJECTS[0];
  const idx = window.SH_PROJECTS.indexOf(p);
  const next = window.SH_PROJECTS[(idx + 1) % window.SH_PROJECTS.length];

  return (
    <section style={{ position: 'relative', minHeight: 640 }}>
      <PhotoBg src={p.cover} wash={0.5} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 880, margin: '0 auto', padding: '56px 24px 72px' }}>
        <Button variant="ghost" size="sm" onClick={() => go('work')} iconLeft={<span>&larr;</span>}>All work</Button>
        <div style={{ display: 'flex', gap: 8, margin: '20px 0 12px' }}>
          {p.tags.map(t => <Badge key={t} tone="solid">{t}</Badge>)}
          <Badge tone="neutral">{p.year}</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5.5vw,60px)',
          letterSpacing: '-0.035em', color: 'var(--text-strong)', margin: '0 0 16px', lineHeight: 1.04 }}>{p.title}</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xl)', lineHeight: 1.55,
          color: 'var(--text-body)', maxWidth: '54ch', margin: '0 0 32px' }}>{p.blurb}</p>

        <GlassCard strength="strong" padding="0" style={{ overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ height: 320, background: `url('${p.cover}') center/cover` }} />
        </GlassCard>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
          {[['Role', 'Lead Designer'], ['Timeline', '12 weeks'], ['Team', '4 people']].map(([k, v]) => (
            <GlassCard key={k} strength="standard" padding="16px">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 6 }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)',
                color: 'var(--text-strong)' }}>{v}</div>
            </GlassCard>
          ))}
        </div>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.7,
          color: 'var(--text-body)', maxWidth: '62ch', margin: '0 0 40px' }}>
          We started by stripping the interface back to a single calm surface, then layered information
          through depth rather than borders — frosted panels that recede and advance as you move.
          The result reads instantly, even over a busy photographic backdrop.
        </p>

        <GlassCard strength="strong" interactive padding="20px 24px" onClick={() => go('project', next.id)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase',
              letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Next project</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)',
              color: 'var(--text-strong)' }}>{next.title}</div>
          </div>
          <span style={{ fontSize: 24, color: 'var(--text-accent)' }}>&rarr;</span>
        </GlassCard>
      </div>
    </section>
  );
}
window.ProjectDetail = ProjectDetail;
