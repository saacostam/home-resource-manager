import { useEditCategoryLoader } from "../hooks";
import { EditCategoryContent } from "./edit-category-content";

export interface EditCategoryProps {
  id: string;
  onClose: () => void;
}

export function EditCategory({ id, onClose }: EditCategoryProps) {
  const { category, status } = useEditCategoryLoader({ id });

  if (status === "error") return "Error";
  if (status === "success")
    return <EditCategoryContent category={category} onClose={onClose} />;

  return "Loading";
}
