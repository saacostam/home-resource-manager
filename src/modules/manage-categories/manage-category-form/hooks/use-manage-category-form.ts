import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const categorySchema = z.object({
  name: z.string().min(1).max(24),
  description: z.string().max(255).nullable(),
});

export type TManageCategoryForm = z.infer<typeof categorySchema>;

export interface UseManageCategoryFormProps {
  defaultValues: TManageCategoryForm;
}

export function useManageCategoryForm({
  defaultValues,
}: UseManageCategoryFormProps) {
  return useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(categorySchema),
  });
}
