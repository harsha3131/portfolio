// Work — filterable project gallery in frosted glass cards.
function Work({ go }) {
  const { GlassCard, Badge, Tag } = window.SriHarshaPortfolioDesignSystem_04f779;
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Product', 'Brand', 'Web'];
  const projects = window.SH_PROJECTS.filter(p => filter === 'All' || p.tags.includes(filter));

  return (
    <section style={{ position: 'relative', minHeight: 640, padding: '64px 0' }}>
      <PhotoBg src={window.SH_PHOTOS.studio} wash={0.6} blur />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1080, margin: '0 auto', padding: '0 24px' }}>
        <Eyebrow>Selected work</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.5vw,48px)',
          letterSpacing: '-0.03em', color: 'var(--text-strong)', margin: '10px 0 24px' }}>
          Things I&rsquo;ve made
        </h2>
        <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <Tag key={f} selected={filter === f} onClick={() => setFilter(f)}>{f}</Tag>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map(p => (
            <GlassCard key={p.id} strength="strong" padding="0" interactive
              style={{ overflow: 'hidden' }}
              onClick={() => go('project', p.id)}>
              <div style={{ height: 180, background: `url('${p.cover}') center/cover` }} />
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)',
                    color: 'var(--text-strong)', margin: 0 }}>{p.title}</h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{p.year}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1.5,
                  color: 'var(--text-body)', margin: '8px 0 14px' }}>{p.blurb}</p>
                <div style={{ display: 'flex', gap: 6 }}>
                  {p.tags.map(t => <Badge key={t} tone="neutral" size="sm">{t}</Badge>)}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Work = Work;
