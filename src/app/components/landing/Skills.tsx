"use client";
import {
  BackEndIcons,
  FrontEndIcons,
  languageIcons,
  MobileIcons,
} from "@/data/skillsData";
import { Box, Heading, HStack, Tooltip, VStack } from "@chakra-ui/react";

export const Skills = () => {
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
        My Skills
      </Heading>
      <VStack my={12} alignItems={"flex-end"} spacing={12}>
        <VStack alignItems={"flex-end"}>
          <Heading color="white.900" mb={4} size="xl">
            Languages
          </Heading>
          <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
            {languageIcons(30, "white").map((iconObj, index) => (
              <Tooltip
                key={index}
                label={iconObj.name}
                borderRadius={"lg"}
                bg={iconObj.backgroundColor}
              >
                <Box
                  key={index}
                  p={3}
                  bg={iconObj.backgroundColor}
                  borderRadius={"md"}
                >
                  {iconObj.icon}
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>

        <VStack alignItems={"flex-end"}>
          <Heading color="white.900" mb={4} size="xl">
            Frontend
          </Heading>
          <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
            {FrontEndIcons(30, "white").map((iconObj, index) => (
              <Tooltip
                key={index}
                label={iconObj.name}
                borderRadius={"lg"}
                bg={iconObj.backgroundColor}
              >
                <Box
                  key={index}
                  p={3}
                  bg={iconObj.backgroundColor}
                  borderRadius={"md"}
                >
                  {iconObj.icon}
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>

        <VStack alignItems={"flex-end"}>
          <Heading color="white.900" mb={4} size="xl">
            Backend & DevOps
          </Heading>
          <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
            {BackEndIcons(30, "white").map((iconObj, index) => (
              <Tooltip
                key={index}
                label={iconObj.name}
                borderRadius={"lg"}
                bg={iconObj.backgroundColor}
              >
                <Box
                  key={index}
                  p={3}
                  bg={iconObj.backgroundColor}
                  borderRadius={"md"}
                >
                  {iconObj.icon}
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>

        <VStack alignItems={"flex-end"}>
          <Heading color="white.900" mb={4} size="xl">
            Mobile
          </Heading>
          <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
            {MobileIcons(30, "white").map((iconObj, index) => (
              <Tooltip
                key={index}
                label={iconObj.name}
                borderRadius={"lg"}
                bg={iconObj.backgroundColor}
              >
                <Box
                  key={index}
                  p={3}
                  bg={iconObj.backgroundColor}
                  borderRadius={"md"}
                >
                  {iconObj.icon}
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
