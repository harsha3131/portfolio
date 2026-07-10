// Contact — closing call-to-action with a glass form.
function Contact() {
  const { Button, Input, GlassCard, Avatar } = window.SriHarshaPortfolioDesignSystem_04f779;
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ position: 'relative', minHeight: 600, display: 'flex', alignItems: 'center', padding: '64px 0' }}>
      <PhotoBg src={window.SH_PHOTOS.coast} wash={0.5} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 920, margin: '0 auto', padding: '0 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', width: '100%' }}>
        <div>
          <Eyebrow>Let&rsquo;s talk</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4.5vw,52px)',
            letterSpacing: '-0.03em', color: 'var(--text-strong)', margin: '12px 0 16px', lineHeight: 1.05 }}>
            Have a project in mind?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 1.6,
            color: 'var(--text-body)', maxWidth: '40ch' }}>
            I take on a few select engagements each quarter. Tell me what you&rsquo;re building.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <Avatar src="https://i.pravatar.cc/120?img=33" name="Sri Harsha" size={48} ring />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-strong)' }}>Sri Harsha</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>hello@sriharsha.design</div>
            </div>
          </div>
        </div>
        <GlassCard strength="strong" padding="28px">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>✨</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)',
                color: 'var(--text-strong)' }}>Thanks — talk soon.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Your name" placeholder="Jane Doe" />
              <Input label="Email" placeholder="jane@studio.com" />
              <Input label="Project" placeholder="A portfolio for…" />
              <Button size="lg" fullWidth onClick={() => setSent(true)}>Send message</Button>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
window.Contact = Contact;
