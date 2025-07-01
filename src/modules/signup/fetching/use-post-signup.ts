import { useAuth } from "@/modules/auth";
import { MutationKey } from "@/modules/fetcher";
import { useMutation } from "@tanstack/react-query";

export interface UsePostSignupRequest {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export function usePostSignup() {
  const auth = useAuth();

  return useMutation<unknown, Error, UsePostSignupRequest>({
    mutationKey: [MutationKey.POST_SIGNUP],
    mutationFn: (data) =>
      auth.fetch({
        endpoint: "/auth/signup",
        method: "POST",
        body: data,
      }),
  });
}
