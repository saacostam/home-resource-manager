import { Select, Space } from "@mantine/core";
import { BoardEditorLoader } from "@/modules/boards/board-editor";
import { useBoardModalManagerService } from "@/modules/boards/board-modal-manager";
import type { TLeanBoard } from "@/modules/boards/manage-board";
import { EmptyQuery } from "@/modules/core.components";

export interface BoardSelectorContentProps {
  boards: TLeanBoard[];
}

export function BoardSelectorContent({ boards }: BoardSelectorContentProps) {
  const { id: boardId, setId: setBoardId } = useBoardModalManagerService();

  return (
    <div data-testid="board-selector-content">
      <Select
        size="sm"
        placeholder="Board"
        data={boards.map((board) => ({
          value: board.id,
          label: board.name,
        }))}
        value={boardId}
        onChange={(v) => {
          setBoardId(v);
        }}
        nothingFoundMessage="Nothing found..."
        searchable
        clearable
      />
      <Space h="lg" />
      {boardId ? (
        <div key={boardId}>
          <BoardEditorLoader id={boardId} />
        </div>
      ) : (
        <EmptyQuery
          title="Nothing Selected"
          description="Please select a Board"
        />
      )}
    </div>
  );
}
