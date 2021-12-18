import Head from "next/head";
import { Box } from "@chakra-ui/react";

import NavBar from "./navbar.component";
import Footer from "./footer.component";

const Layout = ({ children }) => {
  return(
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth={1280} m='auto'>
        <header>
          <NavBar />
        </header>
        <main>
          { children }
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  )
}

export default Layout;