import { Project } from "@/data/projectData";
import {
  Box,
  HStack,
  Heading,
  Image,
  ResponsiveValue,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as CSS from "csstype";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export const FeaturedProjects = ({ project }: ProjectCardProps) => {
  const textAlignConstants:
    | ResponsiveValue<CSS.Property.TextAlign>
    | undefined = ["center", "center", "center", "center", "right"];
  return (
    <Box w="100%" mb={[12, 24]}>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={12}
        justifyContent={"center"}
      >
        <Image
          src={project.img}
          alt="pave routes route"
          maxWidth={["250px", "250px", "350px", "400px", "600px"]}
          alignSelf={"center"}
        />
        <VStack
          spacing={8}
          alignItems={["center", "center", "center", "center", "flex-end"]}
          w={["100%", "100%", "100%", "80%", "80%", "20%"]}
        >
          <VStack
            alignItems={[
              "center",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
            ]}
            w={"100%"}
          >
            <Heading
              textColor={"white"}
              size={["md", "lg"]}
              textAlign={textAlignConstants}
            >
              {project.name}
            </Heading>
            <Text textColor={"white"} textAlign={textAlignConstants}>
              {project.projectType}
            </Text>
          </VStack>
          <Box
            bg={project.primaryColor}
            borderRadius={"md"}
            p={4}
            boxShadow={"dark-lg"}
          >
            <Text textColor={"white"} textAlign={textAlignConstants}>
              {project.description}
            </Text>
          </Box>
          <HStack
            spacing={4}
            justifyContent={[
              "center",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
            ]}
            w={"100%"}
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
