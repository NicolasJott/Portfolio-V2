"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <Box bg="primary.200" color="white">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date().getFullYear()} by Nicolas Ott. Created with Next.js and
          Chakra UI.
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Github"}
            href={"https://github.com/NicolasJott"}
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/nicolas-ott-892317226/"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"mailto:njott@student.ysu.edu"}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
