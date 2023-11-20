import { theme } from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";
import type { Metadata } from "next";
import Main from "./components/layout/Main";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Nicolas's Site",
  description: "Nicolas Ott's personal website",
  authors: [{ name: "Nicolas Ott" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
