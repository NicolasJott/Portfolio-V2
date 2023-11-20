import { aboutMeData } from "@/data/landingData";
import { Box, Heading, Text } from "@chakra-ui/react";

export const AboutMe = () => {
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
        {aboutMeData.description}
      </Text>
    </Box>
  );
};
