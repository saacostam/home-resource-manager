import { ModalLoader, QueryError } from "@/modules/core.components";
import { useCreateResourceLoader } from "../hooks";
import { CreateResourceContent } from "./create-resource-content";

export interface CreateResourceProps {
  onClose: () => void;
}

export function CreateResource({ onClose }: CreateResourceProps) {
  const { categories, status, retry } = useCreateResourceLoader();

  if (status === "error")
    return <QueryError title="Couldn't fetch your categories." retry={retry} />;

  if (status === "success")
    return <CreateResourceContent categories={categories} onClose={onClose} />;

  return <ModalLoader />;
}
