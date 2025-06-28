import type { CSSProperties } from "react";

export interface LogoProps {
  style?: CSSProperties;
}

export function Logo({ style }: LogoProps) {
  return <img src="/logo.png" height={32} style={style} />;
}
