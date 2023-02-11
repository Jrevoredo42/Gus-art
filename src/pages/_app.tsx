import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lemonada/700.css';
export default function App({ Component, pageProps }: AppProps) {

const theme = extendTheme({
  fonts: {
      heading:'Lobster',
      body:'Merienda',
    },
  styles: {
    global: {
      body: {
        bg: 'blue.800',
        color: 'white',
        fontWeight: 'bold',
      },
    },
  },
})


  return (
      <ChakraProvider  theme={theme}>
     <Component {...pageProps} />
  </ChakraProvider>
  )
 
}
