import * as React from 'react';

export interface AvatarProps {
  src?: string | null;
  /** Used for initials fallback + alt. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** White ring. @default false */
  ring?: boolean;
  status?: 'online' | 'away' | 'busy' | null;
  style?: React.CSSProperties;
}

/** Round profile image with initials fallback, optional ring + status dot. */
export function Avatar(props: AvatarProps): JSX.Element;
