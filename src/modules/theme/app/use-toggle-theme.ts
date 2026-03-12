import { useAdapters } from "@/modules/adapters/core/app";
import { IThemeVariant } from "@/modules/adapters/theme/domain";
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
