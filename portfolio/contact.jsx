// Contact — glass form over photography, fake send with success state.
function PfContact() {
  const { GlassCard, Button, Input, Avatar } = window.SriHarshaPortfolioDesignSystem_04f779;
  const { motion, AnimatePresence } = window.Motion;
  const { useSelector, useDispatch } = ReactRedux;
  const status = useSelector((s) => s.contact.status);
  const tweaks = useSelector((s) => s.tweaks);
  const dispatch = useDispatch();
  const PF = window.PF;
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const send = (e) => {
    e.preventDefault();
    if (status !== 'idle') return;
    dispatch({ type: 'contact/status', status: 'sending' });
    setTimeout(() => dispatch({ type: 'contact/status', status: 'sent' }), 1100);
  };

  const infoRows = [
    { icon: 'mail', text: PF.email, href: 'mailto:' + PF.email },
    { icon: 'phone', text: PF.phone, href: 'tel:+14145956127' },
    { icon: 'map-pin', text: PF.location, href: null },
    { icon: 'github', text: 'github.com/harsha3131', href: PF.github },
    { icon: 'linkedin', text: 'linkedin.com/in/sri-harsha-joshi', href: PF.linkedin },
  ];

  return (
    <section id="contact" data-spy="contact" data-screen-label="Contact" style={{ position: 'relative', padding: '96px 24px 120px' }}>
      <PfPhotoBg src={PF.photos[tweaks.photo]} blur wash={Math.min(0.7, tweaks.wash + 0.1)} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 980, margin: '0 auto' }}>
        <SectionHead
          eyebrow="Contact"
          title="Let's put a model in production."
          sub="Open to senior AI/ML roles and consulting on LLM systems. I reply within a day."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18, alignItems: 'start' }}>
          <Reveal>
            <GlassCard strength="strong" style={{ padding: '28px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <Avatar src="../assets/portfolio/headshot.jpg" name={PF.name} size={52} ring status="online" />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', letterSpacing: '-0.015em', color: 'var(--text-strong)' }}>{PF.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{PF.role}</div>
                </div>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
                {infoRows.map((r) => (
                  <li key={r.icon} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <span style={{ color: 'var(--sunset-500)', flex: 'none' }}><LIcon name={r.icon} size={16} /></span>
                    {r.href
                      ? <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)' }}>{r.text}</a>
                      : <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)' }}>{r.text}</span>}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard strength="strong" style={{ padding: '28px 30px' }}>
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: PF_EASE }}
                  style={{ textAlign: 'center', padding: '34px 10px' }}
                >
                  <div style={{ fontSize: 40, lineHeight: 1 }}>✨</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '14px 0 0' }}>Message sent.</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', margin: '10px 0 22px' }}>Thanks{form.name ? ', ' + form.name.split(' ')[0] : ''} — I'll get back to you within a day.</p>
                  <Button variant="secondary" onClick={() => { dispatch({ type: 'contact/status', status: 'idle' }); setForm({ name: '', email: '', message: '' }); }}>Send another</Button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={send}
                  style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <Input label="Name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <Input label="Email" type="email" required placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>Message</span>
                    <textarea
                      required
                      placeholder="A role, a system to build, or a model that's stuck at 71%…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-strong)',
                        background: 'var(--surface-card)', border: '1.5px solid var(--border-strong)',
                        borderRadius: 'var(--radius-sm)', padding: '11px 14px', resize: 'vertical', outline: 'none', boxSizing: 'border-box', width: '100%',
                      }}
                    ></textarea>
                  </label>
                  <Button type="submit" size="lg" disabled={status === 'sending'} style={{ alignSelf: 'flex-start' }}>
                    {status === 'sending' ? 'Sending…' : 'Send message'} {status !== 'sending' && <LIcon name="send" size={16} />}
                  </Button>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.PfContact = PfContact;
