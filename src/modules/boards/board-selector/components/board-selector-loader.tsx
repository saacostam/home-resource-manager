import { Button, Flex, Paper, Text, Title } from "@mantine/core";

import { QueryError } from "@/modules/core.components";
import { PencilSquareIcon } from "@/modules/icons";
import { useBoardSelectorLoader } from "../hooks";
import { BoardSelectorSkeleton } from "./board-selector-skeleton";
import { BoardSelectorContent } from "./board-selector-content";
import { BoardModalManager } from "./board-modal-manager";

export function BoardSelectorLoader() {
  const { status, data, retry, onCreateBoard } = useBoardSelectorLoader();

  return (
    <>
      <Flex
        py="md"
        align="start"
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        gap="lg"
      >
        <Paper>
          <Title size="h2" order={4}>
            Boards
          </Title>
          <Text size="sm" c="gray" fw={500}>
            Jot down quick notes, ideas, and running lists
          </Text>
        </Paper>
        {status === "success" && (
          <Button
            leftSection={
              <PencilSquareIcon style={{ width: "1.1rem", height: "1.1rem" }} />
            }
            onClick={onCreateBoard}
          >
            Create Board
          </Button>
        )}
      </Flex>
      <Paper p="md" withBorder>
        {status === "loading" ? (
          <BoardSelectorSkeleton />
        ) : status === "error" ? (
          <QueryError title="Couldn't fetch boards." retry={retry} />
        ) : (
          <BoardSelectorContent boards={data} />
        )}
      </Paper>
      {status === "success" && (
        <>
          <BoardModalManager />
        </>
      )}
    </>
  );
}
