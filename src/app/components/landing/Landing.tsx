import { landingData } from "@/data/landingData";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <Box>
      <Heading
        color="primary.900"
        textDecoration="underline"
        textUnderlineOffset={5}
        textDecorationColor="accent.900"
        textDecorationThickness="4px"
        mb={4}
        size="lg"
      >
        {landingData.header}
      </Heading>
      <Text color="text.900" fontSize={18}>
        {landingData.description}
      </Text>
    </Box>
  );
};
