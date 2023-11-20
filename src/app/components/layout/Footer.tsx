"use client";

import {
  Box,
  chakra,
  Container, Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden, VStack,
} from "@chakra-ui/react";
import { FaCodeBranch } from "react-icons/fa6";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box color="black">
      <VStack spacing={2} align={"center"} py={6}>
        <Text fontSize={16} textColor={"white"}>
          © Nicolas Ott {new Date().getFullYear()}
        </Text>
        <Link href={"https://github.com/NicolasJott/Portfolio-V2"}>
        <FaCodeBranch size={16} color={"white"}/>
        </Link>
      </VStack>
    </Box>
  );
}
