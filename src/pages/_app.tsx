import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lemonada/700.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

 
const theme = extendTheme({
  fonts: {
      heading:'Lobster',
      body:'Merienda',
    },
  styles: {
    
    global: {
      body: {
        bg: 'yellowBrand',
        color: 'white',
        fontWeight: 'bold',
      },
    },
  },
  colors: {
    redBrand: '#BC3B00',
    yellowBrand: '#F3B506',
    greenBrand: '#00AC13',
    blueBrand: '#3347FF',
    whiteIceBrand: '#F1EDEA'
  }

})

  return (
        <SessionProvider session={session}>
           <ChakraProvider  theme={theme}>
     <Component {...pageProps} />
  </ChakraProvider>
        </SessionProvider>
     
  )
 
}
