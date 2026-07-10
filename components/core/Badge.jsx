import React from 'react';

/**
 * Badge — small status/count pill.
 */
export function Badge({ tone = 'accent', size = 'md', dot = false, children, style = {}, ...rest }) {
  const tones = {
    accent:  { bg: 'var(--sunset-50)',  fg: 'var(--sunset-700)' },
    neutral: { bg: 'var(--neutral-100)', fg: 'var(--neutral-700)' },
    success: { bg: 'var(--success-50)', fg: 'var(--success-500)' },
    warning: { bg: 'var(--warning-50)', fg: 'var(--warning-500)' },
    danger:  { bg: 'var(--danger-50)',  fg: 'var(--danger-500)' },
    solid:   { bg: 'var(--grad-sunset)', fg: '#fff' },
  };
  const t = tones[tone] || tones.accent;
  const sz = size === 'sm'
    ? { padding: '2px 8px', fontSize: 'var(--text-2xs)' }
    : { padding: '4px 10px', fontSize: 'var(--text-xs)' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      background: t.bg, color: t.fg,
      fontFamily: 'var(--font-body)', fontWeight: 600, lineHeight: 1,
      borderRadius: 'var(--radius-pill)', ...sz, ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
