import * as React from 'react';

/**
 * Floating frosted navigation pill for published portfolios.
 * @startingPoint section="Navigation" subtitle="Floating glass nav bar" viewport="700x120"
 */
export interface GlassNavProps {
  brand?: string;
  links?: string[];
  active?: string;
  cta?: string;
  onCta?: (() => void) | null;
  onNavigate?: ((link: string) => void) | null;
  style?: React.CSSProperties;
}

export function GlassNav(props: GlassNavProps): JSX.Element;
