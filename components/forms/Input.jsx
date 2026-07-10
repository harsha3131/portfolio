import React from 'react';

/**
 * Input — text field with optional label, leading icon, and hint/error.
 */
export function Input({
  label = null,
  hint = null,
  error = null,
  iconLeft = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'lg' ? '14px 16px' : '11px 14px';
  const fs = size === 'lg' ? 'var(--text-lg)' : 'var(--text-md)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-body)' }}>
      {label && (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>{label}</span>
      )}
      <span style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: pad,
        background: 'var(--surface-card)',
        border: `1.5px solid ${error ? 'var(--danger-500)' : focus ? 'var(--sunset-400)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-sm)',
        boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
        transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--text-muted)' }}>{iconLeft}</span>}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            border: 'none', outline: 'none', background: 'transparent', width: '100%',
            fontFamily: 'var(--font-body)', fontSize: fs, color: 'var(--text-strong)',
          }}
          {...rest}
        />
      </span>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
