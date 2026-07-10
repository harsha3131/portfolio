// Skills — filterable tag cloud with layout animations.
function PfSkills() {
  const { Tag } = window.SriHarshaPortfolioDesignSystem_04f779;
  const { motion, AnimatePresence } = window.Motion;
  const { useSelector, useDispatch } = ReactRedux;
  const group = useSelector((s) => s.skillGroup);
  const dispatch = useDispatch();
  const PF = window.PF;

  const groups = ['All', ...PF.skillGroups.map((g) => g.name)];
  const visible = group === 'All' ? PF.skillGroups : PF.skillGroups.filter((g) => g.name === group);

  return (
    <section id="skills" data-spy="skills" data-screen-label="Skills" style={{ position: 'relative', padding: '96px 24px', background: 'var(--surface-sunk)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <SectionHead
          eyebrow="Skills"
          title="The stack, end to end."
          sub="Filter by concern — from fine-tuning to feature stores to what keeps it all observable."
        />

        <Reveal>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {groups.map((g) => (
              <Tag key={g} selected={group === g} onClick={() => dispatch({ type: 'skills/group', group: g })}>{g}</Tag>
            ))}
          </div>
        </Reveal>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          <AnimatePresence mode="popLayout">
            {visible.map((g) => (
              <motion.div
                key={g.name}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ duration: 0.35, ease: PF_EASE }}
                style={{
                  background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: '20px 22px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{
                    width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--grad-sunset-soft)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sunset-600)',
                  }}><LIcon name={g.icon} size={17} /></span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', letterSpacing: '-0.015em', color: 'var(--text-strong)', margin: 0 }}>{g.name}</h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginLeft: 'auto' }}>{g.skills.length}</span>
                </div>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {g.skills.map((s) => (
                    <motion.span key={s} whileHover={{ y: -2 }} style={{ display: 'inline-flex' }}>
                      <Tag style={{ cursor: 'default', background: 'var(--surface-sunk)', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>{s}</Tag>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
window.PfSkills = PfSkills;
