import { useAdapters } from "@/shared/adapters/core/app";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import { useCallback, useMemo } from "react";

export function useToggleTheme() {
  const { theme } = useAdapters();

  const toggleTheme = useCallback(() => {
    theme.setTheme(
      theme.theme === IThemeVariant.DARK
        ? IThemeVariant.LIGHT
        : IThemeVariant.DARK,
    );
  }, [theme]);

  return useMemo(() => ({ toggleTheme }), [toggleTheme]);
}
