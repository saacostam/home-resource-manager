import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/modules/auth";
import { handleApiErrors } from "@/modules/forms";
import { genRoute, TRouteType } from "@/modules/routing";
import { useMutationLogin } from "../fetcher";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).max(48),
  password: z.string().min(1, { message: "Password is required" }).max(48),
});

export function useLogin() {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const login = useMutationLogin();

  const onSubmit = useCallback(
    (data: ReturnType<typeof loginSchema.parse>) => {
      login.mutate(
        {
          ...data,
        },
        {
          onSuccess: (data) => {
            setToken(data.token);
            void navigate(genRoute({ type: TRouteType.DASHBOARD }));
          },
          onError: (error) => {
            if (!isAxiosError(error)) {
              form.setError("root", { message: "Something went wrong!" });
              return;
            }

            handleApiErrors({
              axiosError: error,
              setError: form.setError,
            });
          },
        },
      );
    },
    [form, login, navigate, setToken],
  );

  return useMemo(
    () => ({
      form,
      isLoading: login.isPending,
      onSubmit,
    }),
    [form, login.isPending, onSubmit],
  );
}
