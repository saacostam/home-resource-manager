import { useAuth } from "@/modules/auth";
import { genRoute, TRouteType } from "@/modules/routing";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { usePostLogin } from "../fetcher";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isAxiosError } from "axios";
import { handleApiErrors } from "@/modules/forms";

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

  const login = usePostLogin();

  const onSubmit = useCallback(
    (data: ReturnType<typeof loginSchema.parse>) => {
      login.mutate(
        {
          ...data,
        },
        {
          onSuccess: (data) => {
            setToken(data.token);
            void navigate(genRoute({ type: TRouteType.BASE }));
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
