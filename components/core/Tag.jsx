import React from 'react';

/**
 * Tag — filter / category chip. Optionally removable or selectable.
 */
export function Tag({ selected = false, onRemove = null, children, style = {}, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '6px 12px',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500, lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--sunset-400)' : 'var(--glass-white-strong)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-subtle)'}`,
      backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
      cursor: 'pointer', transition: 'all var(--dur-fast) var(--ease-out)',
      ...style,
    }} {...rest}>
      {children}
      {onRemove && (
        <button onClick={(e) => { e.stopPropagation(); onRemove(); }} style={{
          border: 'none', background: 'none', cursor: 'pointer', padding: 0,
          color: 'inherit', opacity: 0.7, fontSize: '14px', lineHeight: 1, display: 'inline-flex',
        }} aria-label="Remove">×</button>
      )}
    </span>
  );
}
