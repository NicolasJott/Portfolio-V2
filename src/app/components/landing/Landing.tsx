"use client";
import { SocialsIcon } from "@/app/components/icons";
import { landingData } from "@/data/landingData";
import { Box, Heading } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <Box my={24} p={4}>
      <Heading color="white.900" mb={4} size="3xl">
        {landingData.header2}
      </Heading>
      <Heading color="primary.900" mb={4} size="xl">
        {landingData.typeWriterText[0]}
      </Heading>
      <SocialsIcon />
    </Box>
  );
};
