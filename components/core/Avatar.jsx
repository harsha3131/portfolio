import React from 'react';

/**
 * Avatar — round profile image with optional ring & status.
 */
export function Avatar({ src = null, name = '', size = 48, ring = false, status = null, style = {}, ...rest }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  const statusColors = { online: 'var(--success-500)', away: 'var(--warning-500)', busy: 'var(--danger-500)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', width: size, height: size, ...style }} {...rest}>
      <span style={{
        width: size, height: size, borderRadius: '50%', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: src ? 'transparent' : 'var(--grad-sunset)',
        color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: size * 0.38,
        border: ring ? '2.5px solid #fff' : 'none',
        boxShadow: ring ? 'var(--shadow-sm)' : 'none',
      }}>
        {src
          ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : initials}
      </span>
      {status && (
        <span style={{
          position: 'absolute', bottom: 0, right: 0,
          width: size * 0.28, height: size * 0.28, borderRadius: '50%',
          background: statusColors[status] || 'var(--neutral-400)',
          border: '2px solid #fff',
        }} />
      )}
    </span>
  );
}
