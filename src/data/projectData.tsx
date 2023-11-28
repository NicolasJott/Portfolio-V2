import { ReactElement } from "react";
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

export type Project = {
  name: string;
  img: string;
  description: string;
  primaryColor: string;
  projectType: string;
  github?: string;
  website?: string;
  tags: {
    name: string;
    icon: ReactElement;
  }[];
};

export type OtherProject = {
  name: string;
  description: string;
  github?: string;
  website?: string;
  tags: {
    name: string;
    icon: ReactElement | null;
  }[];
};

export const featuredProjects = (size: number, color: string): Project[] => [
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

export const otherProjects = (size: number, color: string): OtherProject[] => [
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
