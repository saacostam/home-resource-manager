import { ModalLoader, QueryError } from "@/modules/core.components";
import { useGetBoardById } from "@/modules/core.fetching-hooks";
import { EditBoardContent } from "./edit-board-content";

export interface EditBoardProps {
  id: string;
  onClose: () => void;
}

export function EditBoard({ id, onClose }: EditBoardProps) {
  const getBoardById = useGetBoardById({ req: { id } });

  if (getBoardById.isError)
    return (
      <QueryError
        title="Couldn't fetch board."
        retry={{
          onClick: () => void getBoardById.refetch(),
          isPending: getBoardById.isPending,
        }}
      />
    );
  if (getBoardById.isSuccess)
    return <EditBoardContent board={getBoardById.data} onClose={onClose} />;

  return <ModalLoader />;
}
