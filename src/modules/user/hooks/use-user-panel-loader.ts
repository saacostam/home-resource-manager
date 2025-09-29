import { useMemo } from "react";
import { useQueryMyUser } from "./use-query-my-user";

export function useUserPanelLoader() {
  const myUser = useQueryMyUser();

  return useMemo(
    () =>
      myUser.isLoading
        ? { status: "loading" as const }
        : myUser.isSuccess
          ? { status: "success" as const, data: myUser.data }
          : { status: "error" as const },
    [myUser.data, myUser.isLoading, myUser.isSuccess],
  );
}
