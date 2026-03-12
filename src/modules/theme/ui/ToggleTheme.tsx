import { ActionIcon } from "@mantine/core";
import { useCallback } from "react";
import { useAdapters } from "@/modules/adapters/core/app";
import { IThemeVariant } from "@/modules/adapters/theme/domain";
import { MoonIcon, SunIcon } from "@/modules/icons";

const iconProps = {
  style: {
    height: "70%",
    width: "70%",
  },
};

export function ThemeToggle() {
  const { theme } = useAdapters();

  const toggleTheme = useCallback(() => {
    theme.setTheme(
      theme.theme === IThemeVariant.DARK
        ? IThemeVariant.LIGHT
        : IThemeVariant.DARK,
    );
  }, [theme]);

  return (
    <ActionIcon onClick={toggleTheme} size="lg" variant="light">
      {theme.theme === IThemeVariant.DARK ? (
        <SunIcon {...iconProps} />
      ) : (
        <MoonIcon {...iconProps} />
      )}
    </ActionIcon>
  );
}
