import { MutationKey } from "@/shared/fetcher";
import {
  useRepositories,
  type IMutationSignUpIn,
} from "@/shared/repositories/app";
import { useMutation } from "@tanstack/react-query";

export function useMutationSignup() {
  const { auth } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.POST_SIGNUP],
    mutationFn: (args: IMutationSignUpIn) => auth.signup(args),
  });
}
