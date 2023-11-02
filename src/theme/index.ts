import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";

const overrides = {
  colors,
  fonts,
};

export const theme = extendTheme(overrides);
