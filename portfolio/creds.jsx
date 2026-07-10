// Credentials — education + certifications.
function PfCreds() {
  const { GlassCard, Badge } = window.SriHarshaPortfolioDesignSystem_04f779;
  const PF = window.PF;

  return (
    <section id="credentials" data-spy="credentials" data-screen-label="Credentials" style={{ position: 'relative', padding: '96px 24px', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <SectionHead eyebrow="Credentials" title="Degree, certified, current." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          <Reveal>
            <div style={{
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-sm)', padding: '26px 28px', height: '100%', boxSizing: 'border-box',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--grad-sunset-soft)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sunset-600)',
                }}><LIcon name="graduation-cap" size={20} /></span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Education</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0 }}>{PF.education.degree}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', margin: '8px 0 0' }}>{PF.education.school}</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 14, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{PF.education.dates}</span>
                <Badge tone="accent" size="sm">{PF.education.gpa}</Badge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-sm)', padding: '26px 28px', height: '100%', boxSizing: 'border-box',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--grad-sunset-soft)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sunset-600)',
                }}><LIcon name="award" size={20} /></span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Certifications</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {PF.certs.map((c) => (
                  <li key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: c.status === 'earned' ? 'var(--success-500)' : 'var(--warning-500)', flex: 'none' }}>
                      <LIcon name={c.status === 'earned' ? 'badge-check' : 'loader'} size={17} />
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', flex: 1 }}>{c.name}</span>
                    {c.year && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{c.year}</span>}
                    {c.status === 'in progress' && <Badge tone="warning" size="sm">In progress</Badge>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.PfCreds = PfCreds;
