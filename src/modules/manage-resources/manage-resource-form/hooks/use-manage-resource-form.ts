import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const resourceSchema = z.object({
  name: z.string().nonempty("Name is required").max(24),
  description: z.string().max(255).nullable(),
  quantity: z.coerce.number().nonnegative(),
  categoryId: z.string().nullable(),
});

export type TManageResourceForm = z.infer<typeof resourceSchema>;

export interface UseManageResourceFormProps {
  defaultValues: TManageResourceForm;
}

export function useManageResourceForm({
  defaultValues,
}: UseManageResourceFormProps) {
  return useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(resourceSchema),
  });
}
