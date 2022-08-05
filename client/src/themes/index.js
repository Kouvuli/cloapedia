import { createTheme } from "@mui/material/styles"

export const Theme = createTheme({
  keys: ["xs", "sm", "md", "lg", "xl"],
  breakpoints: {
    values: {
      xs: 0,
      xsm: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    secondary: {
      main: "#18c1f0",
      light: "#41d2fa",
      dark: "#1c8ba9"
    },
    primary: {
      main: "#007bff",
      light: "#57a3f5",
      dark: "#006fe7"
    }
    // text: {
    //   primary: "#070720",
    //   secondary: "",
    //   disable: ""
    // },
  }
})
