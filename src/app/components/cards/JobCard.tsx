import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface JobCardProps {
  title: string;
  company: string;
  url: string;
  description: string[];
}

export const JobCard = ({ title, company, url, description }: JobCardProps) => {
  return (
    <Box>
      <Heading as={"h3"} color="white" size="md">
        {title}
      </Heading>
      <Heading as={"h4"} size={"md"} color="systemGrayLight.500">
        <Link href={url} target="_blank">
          {company}
        </Link>
      </Heading>{" "}
      {description.map((p, index) => (
        <Text key={index}>- {p}</Text>
      ))}
    </Box>
  );
};
