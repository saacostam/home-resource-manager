import { Logo } from "@/modules/core.components";
import { CheckCircleIcon } from "@/modules/icons";
import { genRoute, TRouteType } from "@/modules/routing";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  GridCol,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <>
      <Container>
        <Flex align="center" justify="space-between" py="sm">
          <Link to={genRoute({ type: TRouteType.LANDING })}>
            <Logo style={{ marginBottom: "-0.5rem" }} />
          </Link>
          <Flex direction="row" gap="xs">
            <Button
              component={Link}
              to={genRoute({ type: TRouteType.LOGIN })}
              size="sm"
              variant="subtle"
            >
              Login
            </Button>
            <Button
              component={Link}
              to={genRoute({ type: TRouteType.SIGNUP })}
              size="sm"
              variant="subtle"
            >
              Sign up
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Box bg="violet" c="white">
        <Container>
          <Flex
            align="center"
            direction={{ base: "column", xs: "row" }}
            gap="md"
            justify="center"
            py="xl"
          >
            <Flex direction="column" gap="md" flex={{ base: 1, xs: 2, sm: 3 }}>
              <Title size="2.5rem">Home Resource Manager</Title>
              <Text>
                Get a clear overview of everything happening in your home —
                tasks, items, notes, and more, always organized and easy to
                access.
              </Text>
              <Button
                component={Link}
                to={genRoute({ type: TRouteType.LOGIN })}
                variant="white"
                w="fit-content"
              >
                Get Started
              </Button>
            </Flex>
            <Box flex={{ base: 1, xs: 3, sm: 4 }}>
              <Image src="hero.png" radius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container my="5rem">
        <Title c="violet">🌱 About the Project</Title>
        <Text
          size="xl"
          fw="bold"
          my="xs"
          variant="gradient"
          gradient={{ to: "violet", from: "black" }}
        >
          Built to bring order to everyday home life.
        </Text>
        <Text>
          HRM started as a personal tool to keep my home organized — tasks,
          notes, items, and categories all scattered across different apps. So I
          built a single, intuitive system that brings everything together… and
          it turned into a great portfolio project to showcase product design,
          UX thinking, and real engineering depth.
        </Text>
      </Container>
      <Box bg="violet" c="white" py="5rem">
        <Container>
          <Title ta="center" mb="md">
            🏡 What You Can Do:
          </Title>
          <Text
            size="xl"
            fw="bold"
            mb="xl"
            variant="gradient"
            gradient={{ to: "white", from: "yellow" }}
            ta="center"
          >
            A simple, calm way to manage your home.
          </Text>
          <Grid>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <Card>
                <Title size="h4" mb="sm">
                  Tasks
                </Title>
                <Text>
                  Keep track of chores, repairs, and routines — clearly
                  categorized and easy to update.
                </Text>
              </Card>
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <Card>
                <Title size="h4" mb="sm">
                  Boards
                </Title>
                <Text>
                  Lightweight spaces for ideas, notes, and running lists.
                </Text>
              </Card>
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <Card>
                <Title size="h4" mb="sm">
                  Resources
                </Title>
                <Text>
                  A home inventory you&apos;ll actually use — know what you own
                  and where it is.
                </Text>
              </Card>
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <Card>
                <Title size="h4" mb="sm">
                  Categories
                </Title>
                <Text>The glue that keeps everything tidy and intuitive.</Text>
              </Card>
            </GridCol>
          </Grid>
        </Container>
      </Box>
      <Container my="3rem">
        <Box mx="auto" w="fit-content">
          <Title mb="sm">🐛 Built as a Portfolio Showcase</Title>
          <Text mb="sm">This project demonstrates:</Text>
          <List
            icon={
              <ThemeIcon color="green" size={24} radius="xl">
                <CheckCircleIcon />
              </ThemeIcon>
            }
            mb="sm"
          >
            <List.Item>A consistent and thoughtful user experience</List.Item>
            <List.Item>A clean, vertically-sliced architecture</List.Item>
            <List.Item>
              A maintainable foundation designed for feature expansion
            </List.Item>
            <List.Item>State management powered by React Query</List.Item>
            <List.Item>A component-driven, reusable UI</List.Item>
            <List.Item>Authentication and routing</List.Item>
            <List.Item>Clean, scalable data modeling</List.Item>
            <List.Item>Full CRUD workflows throughout the app</List.Item>
            <List.Item>Comprehensive, user-centric testing</List.Item>
          </List>
        </Box>
      </Container>
    </>
  );
}
