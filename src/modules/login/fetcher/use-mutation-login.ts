import { useMutation } from "@tanstack/react-query";
import { MutationKey } from "@/shared/fetcher";
import {
  useRepositories,
  type IMutationLoginIn,
} from "@/shared/repositories/app";

export function useMutationLogin() {
  const { auth } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.POST_LOGIN],
    mutationFn: (args: IMutationLoginIn) => auth.login(args),
  });
}
