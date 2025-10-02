import { useMutation } from "@tanstack/react-query";
import { MutationKey } from "@/modules/fetcher";
import {
  useRepositories,
  type IMutationLoginIn,
} from "@/modules/repositories/app";

export function useMutationLogin() {
  const { auth } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.POST_LOGIN],
    mutationFn: (args: IMutationLoginIn) => auth.login(args),
  });
}
