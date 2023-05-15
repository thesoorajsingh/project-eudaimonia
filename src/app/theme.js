import { createTheme } from "@mui/material/styles";
import { Readex_Pro } from "next/font/google";
import { Roboto } from "next/font/google";

const readex = Readex_Pro({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1CA76D",
    },
    surface: {
      main: "#E9EBEB",
    },
    border: {
      green: "#49B98A",
    },
    text: {
      primary: "#152420",
      label: "#788582",
      active: "#1CA770",
    },
  },
  typography: {
    fontFamily: [
      readex.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h4: {
      fontSize: "26px",
      fontWeight: "600",
      lineHeight: "39px",
    },
    label: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
    },
    labelMedium: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    labelSmall: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "21px",
    },
    labelXSmall: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
    },
  },
});
