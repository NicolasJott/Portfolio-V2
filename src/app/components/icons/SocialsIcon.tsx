import { Box, HStack, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const icons = (size: number) => [
  {
    icon: <FaLinkedin size={size} color={"white"} />,
    backgroundColor: "#0072b1",
    url: "https://www.linkedin.com/in/nicolas-ott-892317226/",
    name: "Nicolas Ott",
  },
  {
    icon: <FaGithub size={size} color={"white"} />,
    backgroundColor: "#111111",
    url: "https://github.com/NicolasJott",
    name: "NicolasJott",
  },
  {
    icon: <IoIosMail size={size} color={"white"} />,
    backgroundColor: "#111111",
    url: "mailto:njott@student.ysu.edu",
    name: "Email",
  },
];

export const SocialsIcon = () => {
  return (
    <HStack spacing={6} my={8}>
      {icons(36).map((icon, index) => (
        <Link key={index} href={icon.url} target="_blank">
          <Tooltip
            label={icon.name}
            borderRadius={"lg"}
            bg={icon.backgroundColor}
          >
            <Box
              key={index}
              bg={icon.backgroundColor}
              p={2}
              borderRadius={"md"}
            >
              {icon.icon}
            </Box>
          </Tooltip>
        </Link>
      ))}
    </HStack>
  );
};
