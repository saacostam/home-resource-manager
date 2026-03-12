import { ActionIcon } from "@mantine/core";
import { useAdapters } from "@/modules/adapters/core/app";
import { IThemeVariant } from "@/modules/adapters/theme/domain";
import { MoonIcon, SunIcon } from "@/modules/icons";
import { useToggleTheme } from "@/modules/theme/app";

const iconProps = {
  style: {
    height: "70%",
    width: "70%",
  },
};

export function ThemeToggle() {
  const { theme } = useAdapters();
  const { toggleTheme } = useToggleTheme();

  return (
    <ActionIcon onClick={toggleTheme} size="lg" variant="subtle">
      {theme.theme === IThemeVariant.DARK ? (
        <SunIcon {...iconProps} />
      ) : (
        <MoonIcon {...iconProps} />
      )}
    </ActionIcon>
  );
}
