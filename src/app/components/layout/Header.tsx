import { Box, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { LinkWithAnimation } from "./LinkWithAnimation";

const Pages = [
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Resume", "/resume"],
];

export const Header = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      zIndex={2}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        flexDirection="row"
        justifyContent={"space-around"}
        py={8}
      >
        <Box>
          <Heading size="lg">
            <LinkWithAnimation href="/" color="white.900">
              Nicolas Ott
            </LinkWithAnimation>
          </Heading>
        </Box>

        <ButtonGroup gap={2}>
          {Pages.map(([title, url]) => (
            <LinkWithAnimation href={url} color="white.900" key={title}>
              {title}
            </LinkWithAnimation>
          ))}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
