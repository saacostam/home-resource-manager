import { useMemo, type PropsWithChildren } from "react";
import { AdaptersContext } from "@/modules/adapters/core/app";
import type { IAdapters } from "@/modules/adapters/core/domain";
import { useThemeAdapterImpl } from "@/modules/adapters/theme/infra";

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
