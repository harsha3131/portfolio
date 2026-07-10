import * as React from 'react';

/**
 * The signature frosted-glass surface — place over a photographic background.
 * @startingPoint section="Core" subtitle="Frosted glass surface, 3 strengths" viewport="700x260"
 */
export interface GlassCardProps {
  /** Frost strength. @default "standard" */
  strength?: 'faint' | 'standard' | 'strong';
  /** CSS padding value. @default "var(--space-6)" */
  padding?: string;
  /** Lift + deepen shadow on hover. @default false */
  interactive?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function GlassCard(props: GlassCardProps): JSX.Element;
