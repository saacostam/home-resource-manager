import { useAuth } from "@/modules/auth";
import { MutationKey } from "@/modules/fetcher";
import { useMutation } from "@tanstack/react-query";

export interface UsePostLoginRequest {
  username: string;
  password: string;
}

export interface UsePostLoginResponse {
  token: string;
}

export function usePostLogin() {
  const { fetch } = useAuth();

  return useMutation<UsePostLoginResponse, Error, UsePostLoginRequest>({
    mutationKey: [MutationKey.POST_LOGIN],
    mutationFn: (data) =>
      fetch({
        endpoint: "/auth/login",
        method: "POST",
        body: data,
      }),
  });
}
