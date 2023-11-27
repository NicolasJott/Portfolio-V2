import {
  Box,
  HStack,
  Heading,
  Link,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export type OtherProject = {
  name: string;
  description: string;
  github?: string;
  website?: string;
  tags: {
    name: string;
    icon: ReactElement;
  }[];
};

interface OtherProjectsProps {
  project: OtherProject;
}

export const OtherProjects = ({ project }: OtherProjectsProps) => {
  return (
    <Box
      bg={"systemGrayDark.700"}
      w={[
        "300px",
        "300px",
        "400px",
        "275px",
        "400px",
        "400px",
        "400px",
        "400px",
      ]}
      h={"300px"}
      p={8}
      borderRadius={"md"}
      boxShadow={"xl"}
    >
      <VStack
        spacing={4}
        w={"100%"}
        h={"100%"}
        justifyContent={"space-between"}
      >
        <VStack spacing={2} w={"100%"}>
          <HStack
            w={"100%"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            mb={2}
          >
            {project.github && (
              <Link href={project.github}>
                <FaGithub color={"white"} size={24} />
              </Link>
            )}
            {project.website && (
              <Link href={project.website}>
                <FaExternalLinkAlt color={"white"} size={24} />
              </Link>
            )}
          </HStack>
          <Heading color={"white"} fontSize={"lg"} alignSelf={"flex-start"}>
            {project.name}
          </Heading>
          <Text color={"white"} fontSize={"sm"} alignSelf={"flex-start"}>
            {project.description}
          </Text>
        </VStack>
        <HStack
          spacing={4}
          w={"100%"}
          alignItems={"center"}
          flexWrap={"wrap"}
          alignSelf={"flex-end"}
        >
          {project.tags.map((tag, index) => (
            <Tag
              size={"sm"}
              bg={"primary.900"}
              borderRadius={"full"}
              key={index}
              boxShadow={"sm"}
            >
              {tag.icon}
              <TagLabel color={"white"} ml={1}>
                {tag.name}
              </TagLabel>
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};
