import { ModalLoader, QueryError } from "@/modules/core.components";
import { useEditResourceLoader } from "../hooks";
import { EditResourceContent } from "./edit-resource-content";

export interface EditResourceProps {
  id: string;
  onClose: () => void;
}

export function EditResource({ id, onClose }: EditResourceProps) {
  const { categories, isFetching, status, resource, retry } =
    useEditResourceLoader({ id });

  if (status === "error") {
    return (
      <QueryError
        title="Couldn't fetch resource and the necessary categories."
        retry={{
          onClick: retry,
          isPending: isFetching,
        }}
      />
    );
  }

  if (status === "success")
    return (
      <EditResourceContent
        id={id}
        categories={categories}
        resource={resource}
        onClose={onClose}
      />
    );

  return <ModalLoader />;
}
