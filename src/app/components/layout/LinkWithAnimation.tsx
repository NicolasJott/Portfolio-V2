"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

export interface LinkWithAnimationProps {
  href: string;
  target?: string;
  color: string;
  children: ReactNode;
}

export const LinkWithAnimation = ({
  href,
  target,
  color,
  children,
}: LinkWithAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const linkStyle: any = {
    textDecoration: "none",
    position: "relative",
  };

  const underlineStyle: any = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: isHovered ? "100%" : "0%",
    height: "2px",
    background: "#387ac7",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <Link href={href} passHref target={target}>
      <Box
        color={color}
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span style={underlineStyle}></span>
      </Box>
    </Link>
  );
};
