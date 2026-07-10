import * as React from 'react';

export interface BadgeProps {
  /** @default "accent" */
  tone?: 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small status / count pill. */
export function Badge(props: BadgeProps): JSX.Element;
