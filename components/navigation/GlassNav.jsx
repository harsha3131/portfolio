import React from 'react';
import { Button } from '../core/Button.jsx';

/**
 * GlassNav — floating frosted navigation bar for published portfolios.
 */
export function GlassNav({
  brand = 'Sri Harsha',
  links = ['Work', 'About', 'Contact'],
  active = 'Work',
  cta = 'Hire me',
  onCta = null,
  onNavigate = null,
  style = {},
}) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
      padding: '10px 14px 10px 20px',
      background: 'var(--glass-white)',
      backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-glass)',
      fontFamily: 'var(--font-body)',
      ...style,
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-lg)',
        letterSpacing: '-0.02em', color: 'var(--text-strong)', marginRight: 'auto',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{
          width: 22, height: 22, borderRadius: '7px', background: 'var(--grad-sunset)',
          display: 'inline-block', boxShadow: 'var(--shadow-xs)',
        }} />
        {brand}
      </span>
      <ul style={{ display: 'flex', gap: 'var(--space-5)', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }}
              style={{
                textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 600,
                color: l === active ? 'var(--text-accent)' : 'var(--text-body)',
                transition: 'color var(--dur-fast) var(--ease-out)',
              }}
            >{l}</a>
          </li>
        ))}
      </ul>
      <Button size="sm" variant="primary" onClick={onCta}>{cta}</Button>
    </nav>
  );
}
