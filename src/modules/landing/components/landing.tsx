import { Logo } from "@/modules/core.components";
import {
  CheckCircleIcon,
  ListBulletIcon,
  PencilIcon,
  RectangleGroupIcon,
  TagIcon,
} from "@/modules/icons";
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
  Overlay,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const ScreenShotsUrl: string[] = [
  "home.png",
  "resource.png",
  "task.png",
  "signup.png",
  "board.png",
];

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
                Explore the Demo
              </Button>
            </Flex>
            <Box flex={{ base: 1, xs: 3, sm: 4 }}>
              <Image src="hero.png" radius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container my="xl">
        <Title c="violet" ta="center" mb="lg">
          🌱 About the Project
        </Title>
        <Text
          size="xl"
          fw="bold"
          my="xs"
          variant="gradient"
          gradient={{ to: "violet", from: "black" }}
          ta="center"
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
        <Carousel withIndicators height="384px" withControls mt="lg">
          {ScreenShotsUrl.map((url) => (
            <Carousel.Slide pos="relative">
              <Image src={url} radius="md" height="384px" fit="contain" />
              <Overlay
                gradient="linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.10) 33%, rgba(0, 0, 0, 0.10) 66%, rgba(0, 0, 0, 1) 100%)"
                opacity={0.05}
                radius="md"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
      <Box bg="violet" c="white" py="xl">
        <Container>
          <Title ta="center" mb="md">
            🏡 What You Can Do:
          </Title>
          <Text size="xl" fw="bold" mb="xl" ta="center">
            A simple, calm way to manage your home.
          </Text>
          <Grid>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <CardFeature
                title="Tasks"
                icon={<ListBulletIcon width={20} height={20} />}
                description="Keep track of chores, repairs, and routines — clearly categorized."
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <CardFeature
                title="Boards"
                icon={<PencilIcon width={20} height={20} />}
                description="Lightweight spaces for ideas, notes, and running lists."
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <CardFeature
                title="Resources"
                icon={<RectangleGroupIcon width={20} height={20} />}
                description={
                  <>
                    A home inventory you&apos;ll actually use — know what you
                    own and where it is.
                  </>
                }
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 3 }}>
              <CardFeature
                title="Categories"
                icon={<TagIcon width={20} height={20} />}
                description={
                  <>The glue that keeps everything tidy and intuitive.</>
                }
              />
            </GridCol>
          </Grid>
        </Container>
      </Box>
      <Container my="xl">
        <Box w="fit-content">
          <Title mb="xl" ta="center">
            🐛 Built as a Portfolio Showcase
          </Title>
          <Text mb="lg">This project demonstrates:</Text>
          <Flex
            direction={{
              base: "column",
              sm: "row",
            }}
          >
            <List
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <CheckCircleIcon />
                </ThemeIcon>
              }
              mb="sm"
              style={{
                flexWrap: "wrap",
              }}
            >
              <List.Item>A consistent and thoughtful user experience</List.Item>
              <List.Item>A clean, vertically-sliced architecture</List.Item>
              <List.Item>
                A maintainable foundation designed for feature expansion
              </List.Item>
              <List.Item>State management powered by React Query</List.Item>
              <List.Item>A component-driven, reusable UI</List.Item>
            </List>
            <List
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <CheckCircleIcon />
                </ThemeIcon>
              }
            >
              <List.Item>Authentication and routing</List.Item>
              <List.Item>Clean, scalable data modeling</List.Item>
              <List.Item>Full CRUD workflows throughout the app</List.Item>
              <List.Item>Comprehensive, user-centric testing</List.Item>
            </List>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

function CardFeature(props: {
  title: string;
  icon: ReactNode;
  description: ReactNode;
}) {
  return (
    <Card>
      <Title
        size="h4"
        mb="sm"
        style={{
          display: "flex",
          alignContent: "center",
          gap: "0.4rem",
        }}
        c="violet"
      >
        {props.icon} {props.title}
      </Title>
      <Text>{props.description}</Text>
    </Card>
  );
}
