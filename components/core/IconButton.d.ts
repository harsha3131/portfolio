import * as React from 'react';

export interface IconButtonProps {
  /** @default "glass" */
  variant?: 'glass' | 'solid' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Circular when true, rounded-square when false. @default true */
  round?: boolean;
  /** Accessible label. */
  label?: string;
  /** The icon node (e.g. a Lucide SVG). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/** Compact control wrapping a single icon. */
export function IconButton(props: IconButtonProps): JSX.Element;
