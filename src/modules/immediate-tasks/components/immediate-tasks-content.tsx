import {
  Badge,
  Checkbox,
  Divider,
  Flex,
  Paper,
  ScrollArea,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { CalendarDaysIcon } from "@/modules/icons";
import type {
  IMutationCreateTaskCompletionIn,
  IMutationDeleteTaskCompletionIn,
} from "@/modules/repositories/app";
import type { TImmediateTaskEntry } from "../types";

export interface ImmediateTasksContentProps {
  onCreateTaskCompletion: (args: IMutationCreateTaskCompletionIn) => void;
  onDeleteTaskCompletion: (args: IMutationDeleteTaskCompletionIn) => void;
  tableEntries: TImmediateTaskEntry[];
}

export function ImmediateTasksContent({
  tableEntries,
  onCreateTaskCompletion,
  onDeleteTaskCompletion,
}: ImmediateTasksContentProps) {
  return (
    <ScrollArea offsetScrollbars scrollbarSize={6}>
      <Flex direction="column" gap="lg">
        {tableEntries.map((section, si) => (
          <Paper withBorder key={si}>
            <Flex p="sm" direction="row" align="center" gap="xs">
              <ThemeIcon variant="light">
                <CalendarDaysIcon width={20} height={20} />
              </ThemeIcon>
              <Text size="md" fw="bold" lh="xs">
                {section.utcDate.toDateString()}
              </Text>
            </Flex>
            <Divider />
            {section.entries.map((entry, ei, entries) => {
              const checked = entry.status.type !== "virtual";

              const doNothing = () => {
                // do nothing
              };

              const onChange =
                entry.status.type === "virtual"
                  ? () => {
                      onCreateTaskCompletion({
                        date: section.utcDate.toISOString().split("T")[0],
                        taskId: entry.taskId,
                      });
                    }
                  : entry.status.type === "committed"
                    ? () => {
                        if (entry.status.type !== "committed") return;

                        onDeleteTaskCompletion({
                          id: entry.status.id,
                        });
                      }
                    : doNothing;

              return (
                <>
                  <Paper p="sm">
                    <Flex gap="sm" align="center">
                      <Checkbox
                        checked={checked}
                        disabled={entry.status.type === "mutating"}
                        indeterminate={entry.status.type === "mutating"}
                        onChange={onChange}
                      />
                      <Paper style={{ flex: 1 }}>
                        <Text size="sm">{entry.name}</Text>
                      </Paper>
                      {entry.categoryName && (
                        <Badge>{entry.categoryName}</Badge>
                      )}
                    </Flex>
                  </Paper>
                  {ei < entries.length - 1 && <Divider />}
                </>
              );
            })}
          </Paper>
        ))}
      </Flex>
    </ScrollArea>
  );
}
