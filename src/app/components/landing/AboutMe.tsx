import { aboutMeData } from "@/data/landingData";
import { Box, Heading, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Box mt={24}>
      <Heading
        color="primary.900"
        textDecoration="underline"
        textUnderlineOffset={5}
        textDecorationColor="accent.900"
        textDecorationThickness="4px"
        mb={4}
        size="lg"
      >
        {aboutMeData.header}
      </Heading>
      <Text color="text.900" fontSize={18}>
        {aboutMeData.description}
      </Text>
    </Box>
  );
};
