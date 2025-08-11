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
import type { TImmediateTaskEntry } from "../types";

export interface ImmediateTasksContentProps {
  tableEntries: TImmediateTaskEntry[];
}

export function ImmediateTasksContent({
  tableEntries,
}: ImmediateTasksContentProps) {
  return (
    <ScrollArea h={400} offsetScrollbars scrollbarSize={6}>
      <Flex direction="column" gap="lg">
        {tableEntries.map((section, si) => (
          <Paper withBorder key={+si}>
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
              return (
                <>
                  <Paper p="sm">
                    <Flex gap="sm" align="center">
                      <Checkbox defaultChecked={false} />
                      <Paper style={{ flex: 1 }}>
                        <Text size="sm">{entry.name}</Text>
                      </Paper>
                      <Badge>{entry.categoryName}</Badge>
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
