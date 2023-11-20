"use client";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  delay: any;
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, delay = 0 }: SectionProps) => {
  const transitionOptions: any = {
    duration: 0.8,
    delay: delay,
  };
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transitionOptions}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
