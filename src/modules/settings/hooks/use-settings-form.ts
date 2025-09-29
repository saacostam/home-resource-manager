import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const settingsFormSchema = z.object({
  timezone: z.string(),
});

export type TSettingForm = z.infer<typeof settingsFormSchema>;

export interface UseSettingsFormArgs {
  defaultValues: TSettingForm;
}

export function useSettingsForm({ defaultValues }: UseSettingsFormArgs) {
  return useForm({
    defaultValues,
    resolver: zodResolver(settingsFormSchema),
  });
}
