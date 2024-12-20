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
  SiMui,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiVercel,
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
    icon: ReactElement | null;
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
      "Discover a new dimension of running with Pave Routes, the all-in-one app designed to revolutionize your running journey. Whether you're a seasoned athlete or just getting started on your running adventure, Pave Routes is your go-to companion for creating, tracking, and saving your running routes and workouts",
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
    name: "Fantasy Football Insights",
    img: "images/ffi.png",
    description:
      "Fantasy Football Insights is an idea based largely on existing fantasy football apps such as ESPN Fantasy Football, Sleeper, and Yahoo! Fantasy Football, among others. The idea is to improve upon ideas from these existing applications to create the best possible fantasy football assistance software as well as help users win their leagues.",
    primaryColor: "#EE0C0C",
    projectType: "Personal Project",
    github: "https://github.com/orgs/Fantasy-Football-Insights/repositories",
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
        name: "NestJS",
        icon: <SiNestjs size={size} color={color} />,
      },
    ],
  },
  {
    name: "ASLingo",
    img: "images/aslingo.jpg",
    description:
      "ASLingo, the first-place winning project at Hack YSU 2023, showcases a unique blend of technologies. This project integrates machine learning in a FastAPI server to accurately detect if a user has signed the correct letter. Complementing the backend is a responsive React front end, ensuring a seamless user experience.",
    primaryColor: "#289DFF",
    projectType: "HackYSU 2023 1st Place Winner",
    github: "https://github.com/nickgwinsen/hackysu",
    website: "https://hackysu.com/",
    tags: [
      {
        name: "React",
        icon: <FaReact size={size} color={color} />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi size={size} color={color} />,
      },
      {
        name: "Machine Learning",
        icon: null,
      },
    ],
  },
  {
    name: "React Hook Form Kit",
    img: "images/rhf_kit.png",
    description:
      "A library of packages that provide a set of components and utilities to help you build forms with React Hook Form and popular UI libraries.",
    primaryColor: "#031BAC",
    projectType: "Open Source",
    github: "https://github.com/dev-youngstown/rhf-kit",
    website: "https://dev-youngstown.github.io/rhf-kit/",
    tags: [
      {
        name: "React",
        icon: <FaReact size={size} color={color} />,
      },
      {
        name: "Material-UI",
        icon: <SiMui size={size} color={color} />,
      },
      {
        name: "React Hook Form",
        icon: null,
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
    name: "Workout Tracker",
    description:
      "Experience seamless tracking and effortless organization of your daily fitness regimen with this workout logger.",
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
    name: "Water-Cooling Guide",
    description:
      "A simple and fun drag and drop guide to learn how to build a custom water-cooling loop for the pc enthusiast.",
    github: "https://github.com/NicolasJott/watercooling-guide",
    website: "https://watercool.nicolasjott.com/",
    tags: [
      {
        name: "React",
        icon: <FaReact size={size} color={color} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={size} color={color} />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={size} color={color} />,
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
