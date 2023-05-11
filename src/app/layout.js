"use client";
import { Box, useMediaQuery, ThemeProvider } from "@mui/material";
import "./globals.css";
import { Readex_Pro } from "next/font/google";
import { theme } from "./theme.js";

const readex = Readex_Pro({ subsets: ["latin"] });

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
      height: "100%",
    }}
  >
    {children}
  </Box>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={readex.className}>
        <ThemeProvider theme={theme}>
          <BasePageStyled>
            <Section>{children}</Section>
          </BasePageStyled>
        </ThemeProvider>
      </body>
    </html>
  );
}
