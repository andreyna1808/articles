import React from 'react'
import { Header } from '../components/header'
import '../styles/global.scss'
import { SessionProvider as NextProvider } from "next-auth/react";


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <NextProvider session={session}>
      <Header/>
      <Component {...pageProps} />
    </NextProvider>
    )
}

export default MyApp
