import { ModalLoader, QueryError } from "@/modules/core.components";
import { useEditCategoryLoader } from "../hooks";
import { EditCategoryContent } from "./edit-category-content";

export interface EditCategoryProps {
  id: string;
  onClose: () => void;
}

export function EditCategory({ id, onClose }: EditCategoryProps) {
  const { category, status, retry, isFetching } = useEditCategoryLoader({ id });

  if (status === "error")
    return (
      <QueryError
        title="Couldn't fetch category."
        retry={{
          onClick: () => void retry(),
          isPending: isFetching,
        }}
      />
    );
  if (status === "success")
    return <EditCategoryContent category={category} onClose={onClose} />;

  return <ModalLoader />;
}
