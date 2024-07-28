import { StyleFunctionProps, extendTheme, theme } from "@chakra-ui/react";
import { poppins } from "./font";
import { web } from "./web";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: web.prefix,
};

const fonts = {
  body: poppins.style.fontFamily,
  heading: poppins.style.fontFamily,
};

const styles = {
  global: {
    "html, body, #__next": {
      h: "full",
      fontFamily: "body",
    },
    body: {
      color: "black",
      bg: "gray.50",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    a: {
      bgGradient: "linear(to-b, primary.400, primary.500)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      bgClip: "text",
      _hover: {
        textDecoration: "none",
      },
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: 600,
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
  },
};

const baseColor = {
  50: "#c9cdf2",
  100: "#525463",
  200: "#4a4b59",
  300: "#41424f",
  400: "#393a44",
  500: "#30313a",
  600: "#282930",
  700: "#1f2026",
  800: "#17171c",
  900: "#0c0c0f",
};
/*
const baseColor = {
  50: 'hsv(234, 17%, 44%)',
  100: "yellow",//'hsv(234, 17%, 39%)',
  200: 'hsv(234, 17%, 35%)',
  300: 'hsv(234, 17%, 31%)',
  400: 'hsv(234, 17%, 27%)',
  500: 'hsv(234, 17%, 23%)',
  600: 'hsv(234, 17%, 19%)',
  700: 'hsv(234, 17%, 15%)',
  800: 'hsv(234, 17%, 11%)',
  900: 'hsv(234, 17%, 6%)',
}
*/

export const defaultTheme = extendTheme({
  config,
  fonts,
  //    colors,
  // components,
  styles,
  colors: {
    primary: baseColor,
  },
  shadows: {
    outline: "none",
  },
});
