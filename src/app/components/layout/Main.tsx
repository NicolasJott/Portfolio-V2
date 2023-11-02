import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Box as="main" bg="white">
      <Header />
      <Box pt={14} bg="" justifyContent="space-between">
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
