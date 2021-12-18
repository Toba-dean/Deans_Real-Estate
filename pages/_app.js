import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import Router from 'next/router'
import Head from 'next/head'
import Nprogress from 'nprogress'

import Layout from '../component/layout.component'


function MyApp({ Component, pageProps }) {
  Nprogress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    Nprogress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    Nprogress.done();
  });

  return(
    <>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp;
