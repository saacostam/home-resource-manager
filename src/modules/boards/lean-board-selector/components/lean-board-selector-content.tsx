import { useState } from "react";
import { Select, Space } from "@mantine/core";
import { LeanBoardEditorLoader } from "@/modules/boards/lean-board-editor";
import type { TLeanBoard } from "@/modules/boards/manage-board";
import { EmptyQuery } from "@/modules/core.components";

export interface LeanBoardSelectorContentProps {
  boards: TLeanBoard[];
}

export function LeanBoardSelectorContent({
  boards,
}: LeanBoardSelectorContentProps) {
  const [id, setId] = useState<string | null>(null);

  return (
    <>
      <Select
        size="sm"
        placeholder="Board"
        data={boards.map((board) => ({
          value: board.id,
          label: board.name,
        }))}
        value={id}
        onChange={(v) => {
          setId(v);
        }}
        nothingFoundMessage="Nothing found..."
        searchable
        clearable
      />
      <Space h="lg" />
      {id ? (
        <div key={id}>
          <LeanBoardEditorLoader id={id} />
        </div>
      ) : (
        <EmptyQuery
          title="Nothing Selected"
          description="Please select a Board"
        />
      )}
    </>
  );
}
