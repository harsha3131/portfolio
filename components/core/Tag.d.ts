import * as React from 'react';

export interface TagProps {
  /** Filled accent state. @default false */
  selected?: boolean;
  /** Show an × and call this on click. */
  onRemove?: (() => void) | null;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/** Filter / category chip — selectable and optionally removable. */
export function Tag(props: TagProps): JSX.Element;
