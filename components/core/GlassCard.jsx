import React from 'react';

/**
 * GlassCard — the signature frosted surface. Sits over photographic
 * backgrounds. Strength controls blur + opacity.
 */
export function GlassCard({
  strength = 'standard',
  padding = 'var(--space-6)',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const variants = {
    faint: {
      background: 'var(--glass-white-faint)',
      backdropFilter: 'blur(12px) saturate(130%)',
      WebkitBackdropFilter: 'blur(12px) saturate(130%)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
    },
    standard: {
      background: 'var(--glass-white)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-glass)',
    },
    strong: {
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur-strong)',
      WebkitBackdropFilter: 'var(--glass-blur-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-glass-lg)',
    },
  };

  const base = {
    border: '1px solid var(--glass-border)',
    padding,
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default',
  };

  return (
    <div
      style={{ ...base, ...(variants[strength] || variants.standard), ...style }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glass-lg)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = (variants[strength] || variants.standard).boxShadow;
      } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
