import Layout from "@/app/components/layout/Layout";
import { Container, Heading, VStack } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import {
  SiExpo,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { ProjectCard } from "../components/cards";
import { Project } from "../components/cards/ProjectCard";
import Section from "../components/layout/Section";

const projects = (size: number, color: string): Project[] => [
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
  {
    name: "Nest.JS & MySQL restAPI Template",
    img: "images/pave.png",
    description:
      "🚀 This template should help get you started developing with NestJS, TypeORM + MySQL.",
    primaryColor: "#ed1543",
    projectType: "Personal Project",
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
];

export default function Home() {
  return (
    <Layout title={"Projects"}>
      <Container maxW={"90%"} mt={[12, 24]}>
        <Section delay={0.1}>
          <VStack>
            <Heading
              textColor={"white"}
              alignSelf="center"
              justifySelf={"center"}
              mb={20}
              size={["md", "lg"]}
            >
              Nicolas Ott - Projects
            </Heading>
            {projects(16, "white").map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
}
