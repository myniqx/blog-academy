import { StyleFunctionProps, extendTheme, theme } from "@chakra-ui/react"
import { poppins } from "./font"


const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'zirve',
}


const fonts = {
  body: poppins.style.fontFamily,
  heading: poppins.style.fontFamily,
}

const components = {
  Heading: {
    baseStyle: (props: StyleFunctionProps) => {
      const colorScheme = props.colorScheme

      return {
        fontFamily: 'heading',
        bgGradient: `linear(to-b, ${colorScheme}.300, ${colorScheme}.500)`,
        bgClip: 'text',
        fontWeight: 700,
      }
    },
    defaultProps: {
      colorScheme: 'primary',
    },
  },
  Button: {
    baseStyle: () => {
      return {
        fontWeight: 500,
      }
    },
    variants: {
      solid: (props: StyleFunctionProps) => {
        const colorScheme = props.colorScheme

        return {
          ...theme.components.Button.variants?.solid(props),
          color: 'white',
          bgGradient: `linear(to-b, ${colorScheme}.300, ${colorScheme}.500)`,
          _hover: {
            bgGradient: `linear(to-b, ${colorScheme}.500, ${colorScheme}.400)`,
          },
          _active: {
            bgGradient: `linear(to-b, ${colorScheme}.400, ${colorScheme}.600)`,
          },
        }
      },
      outline: (props: StyleFunctionProps) => {
        const colorScheme = props.colorScheme

        return {
          ...theme.components.Button.variants?.outline(props),
          borderColor: `${colorScheme}.500`,
          color: `${colorScheme}.500`,
          borderWidth: 1.5,
          _hover: {
            bg: 'blackAlpha.50',
          },
        }
      },
      link: (props: StyleFunctionProps) => {
        const colorScheme = props.colorScheme

        return {
          ...theme.components.Button.variants?.link(props),
          bgGradient: `linear(to-b, ${colorScheme}.400, ${colorScheme}.500)`,
          bgClip: 'text',
        }
      },
    },
    defaultProps: {
      colorScheme: 'primary',
    },
  },
  Tag: {
    variants: {
      outline: () => ({
        boxShadow: '0 0 0 1px primary.500',
      }),
    },
  },
  Badge: {
    solid: (props: StyleFunctionProps) => {
      const colorScheme = props.colorScheme

      return {
        ...theme.components.Button.variants?.solid(props),
        color: 'white',
        bgGradient: `linear(to-b, ${colorScheme}.400, ${colorScheme}.500)`,
      }
    },
    baseStyle: {
      textTransform: 'capitalize',
      fontWeight: 400,
    },
    defaultProps: {
      colorScheme: 'gray',
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecor: 'none',
      },
      textDecor: 'none',
    },
  },
}


const styles = {
  global: {
    'html, body, #__next': {
      h: 'full',
      fontFamily: 'body',
    },
    body: {
      color: 'black',
      bg: 'gray.50',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    iframe: {
      border: 'none',
      width: '100%',
      height: '450px',
    },
    a: {
      bgGradient: 'linear(to-b, primary.400, primary.500)',
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      bgClip: 'text',
      _hover: {
        textDecoration: 'none',
      },
    },
    '.grecaptcha-badge': {
      display: 'none',
    },
  },
}

const baseColor = {
  50: 'hsv(234, 17%, 44%)',
  100: 'hsv(234, 17%, 39%)',
  200: 'hsv(234, 17%, 35%)',
  300: 'hsv(234, 17%, 31%)',
  400: 'hsv(234, 17%, 27%)',
  500: 'hsv(234, 17%, 23%)',
  600: 'hsv(234, 17%, 19%)',
  700: 'hsv(234, 17%, 15%)',
  800: 'hsv(234, 17%, 11%)',
  900: 'hsv(234, 17%, 6%)',
}


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
    outline: 'none',
  },
})
