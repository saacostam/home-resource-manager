import { ModalLoader, QueryError } from "@/modules/core.components";
import { EditBoardContent } from "./edit-board-content";
import { useEditBoardLoader } from "../hooks";

export interface EditBoardProps {
  id: string;
  onClose: () => void;
}

export function EditBoard({ id, onClose }: EditBoardProps) {
  const { status, data, retry } = useEditBoardLoader({ id });

  if (status === "error")
    return <QueryError title="Couldn't fetch board." retry={retry} />;

  if (status === "success")
    return <EditBoardContent board={data} onClose={onClose} />;

  return <ModalLoader />;
}
