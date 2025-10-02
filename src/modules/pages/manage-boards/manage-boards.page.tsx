import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { BoardSelector } from "@/modules/boards/board-selector";
import { genRoute, TRouteType } from "@/modules/routing";

export default function ManageBoardsPage() {
  return (
    <>
      <Breadcrumbs>
        <Anchor component={Link} to={genRoute({ type: TRouteType.DASHBOARD })}>
          Dashboard
        </Anchor>
        <Text c="violet">Boards</Text>
      </Breadcrumbs>
      <BoardSelector />
    </>
  );
}
