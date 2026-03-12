import { useAdapters } from "@/modules/adapters/core/app";
import { IThemeVariant } from "@/modules/adapters/theme/domain";
import type { CSSProperties } from "react";

export interface LogoProps {
  style?: CSSProperties;
}

export function Logo({ style }: LogoProps) {
  const { theme } = useAdapters();

  return (
    <img
      src={
        theme.theme === IThemeVariant.LIGHT ? "logo.png" : "logo-dark-mode.png"
      }
      height={32}
      style={style}
    />
  );
}
