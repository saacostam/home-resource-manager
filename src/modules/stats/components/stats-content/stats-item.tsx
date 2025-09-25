import { Card, Flex, Text, type MantineStyleProps } from "@mantine/core";
import type { ReactNode } from "react";

export interface StatsItemProps {
  bg: MantineStyleProps["bg"];
  content: ReactNode;
  icon: ReactNode;
  title: ReactNode;
}

export function StatsItem(props: StatsItemProps) {
  const { bg, content, icon, title } = props;

  return (
    <Card bg={bg} w="100%" style={{ color: "white" }}>
      <Flex
        direction={{ base: "row", xs: "column" }}
        align={{ base: "normal", xs: "end" }}
      >
        <div style={{ width: "100%" }}>
          <Text size="md" fw="bold">
            {title}
          </Text>
          <Text style={{ fontSize: "2em" }}>{content}</Text>
        </div>
        {icon}
      </Flex>
    </Card>
  );
}
