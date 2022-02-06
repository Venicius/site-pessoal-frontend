import { ChakraProvider } from "@chakra-ui/react"
import theme from "../utils/theme"

const customTheme = {
  ...theme,
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider >
  )
}

export default MyApp