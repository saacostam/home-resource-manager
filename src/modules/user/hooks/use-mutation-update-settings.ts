import { MutationKey } from "@/modules/fetcher";
import {
  useRepositories,
  type IMutationUpdateSettingsIn,
} from "@/modules/repositories/app";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useMutationUpdateSettings() {
  const queryClient = useQueryClient();
  const { user } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.PUT_SETTINGS],
    mutationFn: (args: IMutationUpdateSettingsIn) => user.updateSettings(args),
    onSettled: () => {
      void queryClient.invalidateQueries();
    },
  });
}
