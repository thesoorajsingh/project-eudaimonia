"use client";
import { Box, useMediaQuery, ThemeProvider } from "@mui/material";
import "@/app/globals.css";
import { Readex_Pro } from "next/font/google";
import { theme } from "@/app/theme.js";

const readex = Readex_Pro({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Find an Advisor",
// 	description: "Generated by Sooraj Singh",
// };

const BasePageStyled = ({ children }) => (
  <Box sx={{ backgroundColor: theme.palette.surface.main, minHeight: "100vh" }}>
    {children}
  </Box>
);

const Section = ({ children }) => (
  <Box
    sx={{
      maxWidth: "1060px",
      margin: "auto",
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.surface.main,
      paddingTop: "84px",
      height: "100%",
    }}
  >
    {children}
  </Box>
);

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <BasePageStyled>
        <Section>{children}</Section>
      </BasePageStyled>
    </ThemeProvider>
  );
}
