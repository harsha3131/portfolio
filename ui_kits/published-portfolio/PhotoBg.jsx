// Shared photographic background with light wash + slow drift.
function PhotoBg({ src, blur = false, wash = 0.5, drift = true }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <div style={{
        position: 'absolute', inset: '-4%',
        background: `url('${src}') center/cover`,
        filter: blur ? 'blur(4px)' : 'none',
        animation: drift ? 'sh-bg-drift var(--dur-ambient) var(--ease-in-out) infinite' : 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, rgba(255,255,255,${wash * 0.55}), rgba(255,247,240,${wash}))`,
      }} />
    </div>
  );
}

// Section eyebrow label
function Eyebrow({ children, style = {} }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
      color: 'var(--text-accent)', ...style,
    }}>{children}</span>
  );
}

window.PhotoBg = PhotoBg;
window.Eyebrow = Eyebrow;
