import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { handleApiErrors } from "@/modules/forms";
import { genRoute, TRouteType } from "@/modules/routing";
import { usePostSignup } from "../fetching";

const signupSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).max(48),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(48),
  username: z.string().min(1, { message: "Username is required" }).max(48),
  password: z.string().min(1, { message: "Password is required" }).max(48),
});

export function useSignup() {
  const navigate = useNavigate();
  const signup = usePostSignup();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = useCallback(
    (data: ReturnType<typeof signupSchema.parse>) => {
      signup.mutate(
        {
          ...data,
        },
        {
          onSuccess: () => {
            void navigate(genRoute({ type: TRouteType.LOGIN }));
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
    [form, signup, navigate],
  );

  return useMemo(
    () => ({
      form,
      isLoading: signup.isPending,
      onSubmit,
    }),
    [form, signup.isPending, onSubmit],
  );
}
