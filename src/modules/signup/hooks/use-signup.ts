import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { useCallback, useMemo } from "react";

const signupSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).max(48),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(48),
  username: z.string().min(1, { message: "Username is required" }).max(48),
  password: z.string().min(1, { message: "Password is required" }).max(48),
});

export function useSignup() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    validate: zodResolver(signupSchema),
  });

  const isLoading = false;

  const onSubmit = useCallback((data: (typeof form)["values"]) => {
    console.log(data);
  }, []);

  return useMemo(
    () => ({
      form,
      isLoading,
      onSubmit,
    }),
    [form, isLoading, onSubmit],
  );
}
