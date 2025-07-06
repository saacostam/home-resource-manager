import {
  ActionIcon,
  Alert,
  Badge,
  Box,
  Button,
  Center,
  CloseIcon,
  Flex,
  Group,
  Loader,
  Paper,
  Space,
  Table,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
  Transition,
  type MantineSpacing,
  type StyleProp,
} from "@mantine/core";
import { ExclamationCircleIcon, PlusIcon } from "@/modules/icons";
import { useManageCategoriesLoader } from "../hooks";

export interface ManageCategoriesLoader {
  mt?: StyleProp<MantineSpacing>;
  mb?: StyleProp<MantineSpacing>;
}

export function ManageCategoriesLoader({ mt, mb }: ManageCategoriesLoader) {
  const {
    categories,
    closeForm,
    openForm,
    isFormOpen,
    status,
    newCategoryForm,
    onSubmitNewCategoryForm,
  } = useManageCategoriesLoader();

  const errors = newCategoryForm?.formState.errors;

  return (
    <Box mb={mb} mt={mt}>
      <Flex direction="row" align="end" justify="space-between">
        <div>
          <Title size="h2" order={4}>
            Categories
          </Title>
          <Text size="sm" c="gray" fw={500}>
            Used for organizing your resources and tasks:
          </Text>
        </div>
        {status === "success" && (
          <Button
            onClick={openForm}
            leftSection={
              <ThemeIcon variant="transparent" c="white" size="xs">
                <PlusIcon />
              </ThemeIcon>
            }
            size="compact-sm"
          >
            Add Category
          </Button>
        )}
      </Flex>
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
          <Flex direction="row" align="start" gap="md">
            <Table>
              <Table.Tbody>
                {categories.length === 0 ? (
                  <Flex
                    p="md"
                    direction="column"
                    align="center"
                    justify="center"
                  >
                    <ThemeIcon color="gray" size="lg" variant="transparent">
                      <ExclamationCircleIcon />
                    </ThemeIcon>
                    <Text c="gray" fw="bold" size="sm">
                      No categories created yet.
                    </Text>
                  </Flex>
                ) : (
                  categories.map((cat) => (
                    <Table.Tr key={cat.id}>
                      <Table.Td>
                        <Group gap="md">
                          <Badge>{cat.name}</Badge>
                          <Text size="xs" c="gray">
                            {cat.description === ""
                              ? "(Empty)"
                              : cat.description}
                          </Text>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))
                )}
              </Table.Tbody>
            </Table>
            <Transition
              mounted={!!isFormOpen}
              transition="fade-left"
              duration={200}
              timingFunction="ease"
            >
              {(styles) => (
                <Paper
                  style={{
                    ...styles,
                    borderTop: "transparent",
                    borderBottom: "transparent",
                    borderRight: "transparent",
                  }}
                  w="50%"
                  withBorder
                  pl="md"
                >
                  <Flex direction="row-reverse">
                    <ActionIcon variant="subtle" c="gray" onClick={closeForm}>
                      <CloseIcon />
                    </ActionIcon>
                  </Flex>
                  <Title size="h4" order={4}>
                    New Category
                  </Title>
                  <Space h="sm" />
                  <form
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onSubmit={newCategoryForm.handleSubmit(
                      onSubmitNewCategoryForm,
                    )}
                  >
                    <TextInput
                      size="sm"
                      label="Name"
                      placeholder="Name"
                      withAsterisk
                      {...newCategoryForm.register("name")}
                      error={errors?.name?.message}
                    />
                    <Space h="xs" />
                    <Textarea
                      size="sm"
                      label="Description"
                      placeholder="Description"
                      {...newCategoryForm.register("description")}
                      error={errors?.description?.message}
                    />
                    <Space h="md" />
                    <Button type="submit" w="100%">
                      Create
                    </Button>
                  </form>
                </Paper>
              )}
            </Transition>
          </Flex>
        )}
      </Paper>
    </Box>
  );
}
