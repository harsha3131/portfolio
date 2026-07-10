// Hero — the published portfolio landing view.
function Hero({ go }) {
  const { Button, Badge, Avatar } = window.SriHarshaPortfolioDesignSystem_04f779;
  return (
    <section style={{ position: 'relative', minHeight: 620, display: 'flex', flexDirection: 'column' }}>
      <PhotoBg src={window.SH_PHOTOS.hero} wash={0.45} />
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', maxWidth: 920, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
          <Avatar src="https://i.pravatar.cc/120?img=33" name="Sri Harsha" size={44} ring status="online" />
          <Badge tone="success" dot>Available for work</Badge>
        </div>
        <Eyebrow>Designer &amp; Developer · Portfolio</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 76px)',
          lineHeight: 1.02, letterSpacing: '-0.035em', color: 'var(--text-strong)', margin: '14px 0 0', textWrap: 'balance' }}>
          I craft interfaces that feel like <span className="sh-gradient-text">light through glass</span>.
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xl)', lineHeight: 1.55,
          color: 'var(--text-body)', maxWidth: '52ch', margin: '20px 0 0' }}>
          Product design, brand systems, and front-end for teams who care about the last 5%.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <Button size="lg" onClick={() => go('work')}>View work</Button>
          <Button size="lg" variant="secondary" onClick={() => go('contact')}>Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
