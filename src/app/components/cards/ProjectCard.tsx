import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

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

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Box w="100%" mb={[12, 24]}>
      <Stack
        direction={["column", "row"]}
        spacing={12}
        justifyContent={"space-between"}
      >
        <Image src={project.img} alt="pave routes route" maxWidth={"600px"} />
        <VStack spacing={8} alignItems={["center", "flex-end"]}>
          <VStack alignItems={["center", "flex-end"]}>
            <Heading textColor={"white"} size={["md", "lg"]}>
              {project.name}
            </Heading>
            <Text textColor={"white"}>{project.projectType}</Text>
          </VStack>
          <Box
            bg={project.primaryColor}
            borderRadius={"md"}
            p={4}
            boxShadow={"dark-lg"}
          >
            <Text textColor={"white"}>{project.description}</Text>
          </Box>
          <HStack
            spacing={4}
            justifyContent={["center", "flex-end"]}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {project.tags.map((tag, index) => (
              <Tag
                size={["md", "lg"]}
                bg={project.primaryColor}
                borderRadius={"full"}
                key={index}
                boxShadow={"lg"}
              >
                {tag.icon}
                <TagLabel color={"white"} ml={1}>
                  {tag.name}
                </TagLabel>
              </Tag>
            ))}
          </HStack>
          <HStack>
            {project.github && (
              <Link href={project.github}>
                <FaGithubSquare size={36} color={"white"} />
              </Link>
            )}
            {project.website && (
              <Link href={project.website}>
                <FaExternalLinkAlt size={28} color={"white"} />
              </Link>
            )}
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};
