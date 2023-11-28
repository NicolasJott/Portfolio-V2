import {
  FaAndroid,
  FaAppStoreIos,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import {
  SiAstro,
  SiChakraui,
  SiCplusplus,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const languageIcons = (size: number, color: string) => [
  {
    icon: <SiTypescript size={size} color={color} />,
    name: "TypeScript",
    backgroundColor: "#3178C6",
  },
  {
    icon: <SiJavascript size={size} color={color} />,
    name: "JavaScript",
    backgroundColor: "#F7DF1E",
  },
  {
    icon: <FaPython size={size} color={color} />,
    name: "Python",
    backgroundColor: "#3776AB",
  },
  {
    icon: <FaSwift size={size} color={color} />,
    name: "Swift",
    backgroundColor: "#e68600",
  },
  {
    icon: <FaHtml5 size={size} color={color} />,
    name: "HTML5",
    backgroundColor: "#E34F26",
  },
  {
    icon: <FaCss3Alt size={size} color={color} />,
    name: "CSS3",
    backgroundColor: "#1572B6",
  },
  {
    icon: <SiCplusplus size={size} color={color} />,
    name: "C++",
    backgroundColor: "#00599C",
  },
];

export const FrontEndIcons = (size: number, color: string) => [
  {
    icon: <FaReact size={size} color={color} />,
    name: "React",
    backgroundColor: "#61DAFB",
  },
  {
    icon: <SiNextdotjs size={size} color={color} />,
    name: "Next.js",
    backgroundColor: "#111111",
  },
  {
    icon: <SiAstro size={size} color={color} />,
    name: "Astro",
    backgroundColor: "#bc52ee",
  },
  {
    icon: <SiVercel size={size} color={color} />,
    name: "Vercel",
    backgroundColor: "#111111",
  },
  {
    icon: <SiChakraui size={size} color={color} />,
    name: "HTML5",
    backgroundColor: "#4FD1C5",
  },
];

export const BackEndIcons = (size: number, color: string) => [
  {
    icon: <FaNodeJs size={size} color={color} />,
    name: "Node.JS",
    backgroundColor: "#61DAFB",
  },
  {
    icon: <SiExpress size={size} color={color} />,
    name: "Express",
    backgroundColor: "#111111",
  },
  {
    icon: <SiFastapi size={size} color={color} />,
    name: "FastAPI",
    backgroundColor: "#009688",
  },
  {
    icon: <SiNestjs size={size} color={color} />,
    name: "NestJS",
    backgroundColor: "#ed1543",
  },
  {
    icon: <SiPostgresql size={size} color={color} />,
    name: "PostgreSQL",
    backgroundColor: "#336791",
  },
  {
    icon: <SiMysql size={size} color={color} />,
    name: "MySQL",
    backgroundColor: "#4479A1",
  },
  {
    icon: <FaAws size={size} color={color} />,
    name: "Amazon Web Services",
    backgroundColor: "#f90",
  },
  {
    icon: <FaDocker size={size} color={color} />,
    name: "Docker",
    backgroundColor: "#1d63ed",
  },
  {
    icon: <FaGithub size={size} color={color} />,
    name: "Github",
    backgroundColor: "#111111",
  },
];

export const MobileIcons = (size: number, color: string) => [
  {
    icon: <FaReact size={size} color={color} />,
    name: "React Native",
    backgroundColor: "#61DAFB",
  },
  {
    icon: <SiExpo size={size} color={color} />,
    name: "Expo",
    backgroundColor: "#111111",
  },
  {
    icon: <FaAppStoreIos size={size} color={color} />,
    name: "iOS",
    backgroundColor: "#0071e3",
  },
  {
    icon: <FaAndroid size={size} color={color} />,
    name: "Expo",
    backgroundColor: "#3DDC84",
  },
];
