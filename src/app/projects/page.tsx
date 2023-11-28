import Layout from "@/app/components/layout/Layout";
import { Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { FeaturedProjects, OtherProjects } from "../components/cards";
import { Project } from "../components/cards/FeaturedProjects";
import { OtherProject } from "../components/cards/OtherProjects";
import Section from "../components/layout/Section";

const featuredProjects = (size: number, color: string): Project[] => [
  {
    name: "Pave Routes",
    img: "images/pave.png",
    description:
      "A running app that generates routes for you. The only user input required is distance, route shape, terrain, and elevation preferences.",
    primaryColor: "#0095B6",
    projectType: "@Dev Youngstown",
    website: "https://www.paveroutes.com/",
    tags: [
      {
        name: "React Native",
        icon: <FaReact size={size} color={color} />,
      },
      {
        name: "Expo",
        icon: <SiExpo size={size} color={color} />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi size={size} color={color} />,
      },
    ],
  },
  {
    name: "Workout Tracker",
    img: "images/workoutTracker.png",
    description:
      "Experience seamless tracking and effortless organization of your daily fitness regimen with our user-friendly workout logger. Effortlessly document and monitor your workouts, conveniently logging each exercise, set, and progress made.",
    primaryColor: "#ff5047",
    projectType: "Personal Project",
    github: "https://github.com/NicolasJott/workoutTracker",
    tags: [
      {
        name: "React",
        icon: <FaReact size={size} color={color} />,
      },
      {
        name: "Express",
        icon: <SiExpress size={size} color={color} />,
      },
      {
        name: "Node.JS",
        icon: <SiNodedotjs size={size} color={color} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={size} color={color} />,
      },
    ],
  },
];

const otherProjects = (size: number, color: string): OtherProject[] => [
  {
    name: "Nest.JS & MySQL restAPI Template",
    description:
      "🚀 This template should help get you started developing with NestJS, TypeORM + MySQL.",
    github: "https://github.com/NicolasJott/nest-mysql-template",
    tags: [
      {
        name: "NestJS",
        icon: <SiNestjs size={size} color={color} />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={size} color={color} />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript size={size} color={color} />,
      },
    ],
  },
  {
    name: "Personal Portfolio V1",
    description: "The first iteration of my personal portfolio.",
    github: "https://github.com/NicolasJott/Personal-website",
    website: "https://v1.nicolasjott.com/",
    tags: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={size} color={color} />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 size={size} color={color} />,
      },
      {
        name: "CSS3",
        icon: <SiCss3 size={size} color={color} />,
      },
    ],
  },
  {
    name: "Clash of Clans API Wrapper",
    description: "A read-only wrapper for the Clash of Clans API",
    github: "https://github.com/NicolasJott/ClashofClansJavaWrapper",
    tags: [
      {
        name: "Java",
        icon: <FaJava size={size} color={color} />,
      },
      {
        name: "RestAPI",
        icon: null,
      },
    ],
  },
];

export default function Home() {
  return (
    <Layout title={"Projects"}>
      <Container maxW={"90%"} mt={[12, 24]}>
        <Section delay={0.1}>
          <VStack>
            <Heading
              color="white.900"
              textDecoration="underline"
              textUnderlineOffset={5}
              textDecorationColor="primary.900"
              textDecorationThickness="4px"
              mb={24}
              size="xl"
            >
              Featured Projects
            </Heading>
            {featuredProjects(16, "white").map((project, index) => (
              <FeaturedProjects key={index} project={project} />
            ))}
          </VStack>
        </Section>
        <Section delay={0.2}>
          <VStack>
            <Heading
              color="white.900"
              textDecoration="underline"
              textUnderlineOffset={5}
              textDecorationColor="primary.900"
              textDecorationThickness="4px"
              mb={24}
              size="xl"
            >
              Other Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 1, 3, 3, 3, 3]} spacing={4} mb={24}>
              {otherProjects(12, "white").map((project, index) => (
                <OtherProjects key={index} project={project} />
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
}
