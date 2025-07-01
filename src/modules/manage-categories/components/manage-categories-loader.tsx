import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Loader,
  Paper,
  Space,
  Table,
  Text,
  ThemeIcon,
  Title,
  type MantineSpacing,
  type StyleProp,
} from "@mantine/core";
import { ExclamationCircleIcon } from "@/modules/icons";
import { useManageCategoriesLoader } from "../hooks";

export interface ManageCategoriesLoader {
  mt?: StyleProp<MantineSpacing>;
  mb?: StyleProp<MantineSpacing>;
}

export function ManageCategoriesLoader({ mt, mb }: ManageCategoriesLoader) {
  const { categories, status } = useManageCategoriesLoader();

  return (
    <Box mb={mb} mt={mt}>
      <Title size="h2" order={4}>
        Categories
      </Title>
      <Text size="sm" c="gray" fw={500}>
        Used for organizing your resources and tasks:
      </Text>
      <Space h="md" />
      <Paper withBorder p="md">
        {status === "loading" && (
          <Center>
            <Loader type="dots" />
          </Center>
        )}
        {status === "error" && (
          <Alert
            c="red"
            title="Something went wrong while fetching categories."
          />
        )}
        {status === "success" && (
          <Table>
            <Table.Tbody>
              {categories.length === 0 ? (
                <Flex p="md" direction="column" align="center" justify="center">
                  <ThemeIcon color="gray" size="xl" variant="light">
                    <ExclamationCircleIcon />
                  </ThemeIcon>
                  <Text c="gray" fw="bold" size="lg">
                    No categories created yet.
                  </Text>
                  <Space h="xs" />
                  <Button size="sm">Create</Button>
                </Flex>
              ) : (
                categories.map((cat) => (
                  <Table.Tr key={cat.id}>
                    <Table.Td>
                      <Group gap="xs">
                        <Badge>{cat.name}</Badge>
                        <Text size="xs" c="gray">
                          {cat.description}
                        </Text>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))
              )}
            </Table.Tbody>
          </Table>
        )}
      </Paper>
    </Box>
  );
}
