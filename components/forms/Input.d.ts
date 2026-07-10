import * as React from 'react';

/**
 * Text field with label, optional leading icon, hint / error states.
 * @startingPoint section="Forms" subtitle="Text input with label & states" viewport="700x180"
 */
export interface InputProps {
  label?: string | null;
  hint?: string | null;
  error?: string | null;
  iconLeft?: React.ReactNode;
  /** @default "md" */
  size?: 'md' | 'lg';
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
