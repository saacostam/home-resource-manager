import { Avatar, Flex } from "@mantine/core";
import type { TUser } from "../types";

export interface UserPanelContentProps {
  user: TUser;
}

export function UserPanelContent({ user }: UserPanelContentProps) {
  return (
    <Flex gap="sm">
      <Avatar color="violet">
        {user.firstName.charAt(0).toUpperCase()}
        {user.lastName.charAt(0).toUpperCase()}
      </Avatar>
    </Flex>
  );
}
