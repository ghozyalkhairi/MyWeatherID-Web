import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    primary: "#1C1D4B",
    secondary: "#F2F2F2",
    accent: "#FED059",
    neutral: "#404040",
    other: "#11123E",
  },
}

const fonts = {
  heading: `"Poppins", sans-serif`,
  body: `"Poppins", sans-serif`,
}

export const theme = extendTheme({ colors, config, fonts })
