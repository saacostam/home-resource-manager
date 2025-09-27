import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const boardSchema = z.object({
  name: z.string().nonempty("Name is required").max(24),
});

export type TManageBoardForm = z.infer<typeof boardSchema>;

export interface UseManageBoardFormArgs {
  defaultValues: TManageBoardForm;
}

export function useManageBoardForm({ defaultValues }: UseManageBoardFormArgs) {
  return useForm({
    defaultValues,
    resolver: zodResolver(boardSchema),
  });
}
