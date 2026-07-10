import React from 'react';

/**
 * Button — the primary action control.
 * Variants: primary (sunset gradient), secondary (glass), ghost, outline.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: '6px' },
    md: { padding: '11px 20px', fontSize: 'var(--text-md)', radius: 'var(--radius-md)', gap: '8px' },
    lg: { padding: '15px 28px', fontSize: 'var(--text-lg)', radius: 'var(--radius-md)', gap: '10px' },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    border: '1px solid transparent',
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
  };

  const variants = {
    primary: {
      background: 'var(--grad-sunset)',
      color: 'var(--color-on-primary)',
      boxShadow: 'var(--glow-sunset)',
    },
    secondary: {
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--text-strong)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1.5px solid var(--sunset-300)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
