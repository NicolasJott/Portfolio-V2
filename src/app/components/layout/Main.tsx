import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";
import Footer from "@/app/components/layout/Footer";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Box as="main" bg="systemGrayDark.900">
      <Header />
      <Box pt={14} bg="" justifyContent="space-between">
        {children}
      </Box>
        <Footer/>
    </Box>
  );
};

export default Main;
