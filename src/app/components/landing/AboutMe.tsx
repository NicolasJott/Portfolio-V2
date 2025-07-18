import { aboutMeData } from "@/data/landingData";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  const descriptionParts = aboutMeData.description.split("InsureScope");

  return (
    <Box my={24} p={4}>
      <Heading
        color="white.900"
        textDecoration="underline"
        textUnderlineOffset={5}
        textDecorationColor="primary.900"
        textDecorationThickness="4px"
        mb={4}
        size="xl"
      >
        {aboutMeData.header}
      </Heading>
      <Text color="white.900" fontSize={18}>
        {descriptionParts[0]}
        <Link
          href="https://www.insurescope.ai/"
          color={"#007BFF"}
          _hover={{ color: "#4da3ff", cursor: "pointer" }}
          target="_blank"
        >
          InsureScope
        </Link>
        {descriptionParts[1]}
      </Text>
    </Box>
  );
};
