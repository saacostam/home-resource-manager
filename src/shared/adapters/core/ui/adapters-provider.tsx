import { useMemo, type PropsWithChildren } from "react";
import { AdaptersContext } from "@/shared/adapters/core/app";
import type { IAdapters } from "@/shared/adapters/core/domain";
import { useThemeAdapterImpl } from "@/shared/adapters/theme/infra";

export function AdaptersProvider({ children }: PropsWithChildren) {
  const theme = useThemeAdapterImpl();

  const adapters: IAdapters = useMemo(
    () => ({
      theme,
    }),
    [theme],
  );

  return (
    <AdaptersContext.Provider value={adapters}>
      {children}
    </AdaptersContext.Provider>
  );
}
