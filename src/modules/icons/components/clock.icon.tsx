import type { CSSProperties } from "react";

export interface ClockIconProps {
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export function ClockIcon({ width, height, style }: ClockIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={width}
      height={height}
      style={style}
    >
      <title>Clock Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
