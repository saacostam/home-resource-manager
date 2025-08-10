import type { CSSProperties } from "react";

export interface ChevronRightIconProps {
  style?: CSSProperties;
}

export function ChevronRightIcon({ style }: ChevronRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={style}
    >
      <title>Chervron Right icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
