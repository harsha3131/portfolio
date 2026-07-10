import React from 'react';

/**
 * IconButton — square/circular control wrapping a single icon (pass the icon
 * SVG as children, e.g. a Lucide icon).
 */
export function IconButton({
  variant = 'glass',
  size = 'md',
  round = true,
  label = 'button',
  children,
  style = {},
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size] || dims.md;
  const variants = {
    glass: {
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--shadow-sm)',
    },
    solid: {
      background: 'var(--grad-sunset)', color: '#fff', border: '1px solid transparent',
      boxShadow: 'var(--glow-sunset)',
    },
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
  };
  return (
    <button
      type="button"
      aria-label={label}
      style={{
        width: d, height: d, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: round ? '50%' : 'var(--radius-sm)',
        cursor: 'pointer', padding: 0,
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)',
        ...(variants[variant] || variants.glass), ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
