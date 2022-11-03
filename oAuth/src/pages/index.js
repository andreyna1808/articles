import Head from 'next/head'
import { Fragment } from 'react'
import { useSession } from "next-auth/react"

import styles from './home.module.scss'
import { useRouter } from 'next/router';

export default function Home({ product }) {
  const { data: session } = useSession();
  const router = useRouter()

  if (session) {
    router.replace('/callback')
  }

  return (
    <Fragment>
      <Head>
        <title> oAuth</title>
      </Head>

      <main className={styles.contentcontainer}>
        <section className={styles.hero}>
          <span>Hey dev</span>
          <h1> 你好!! </h1>
          <p> Aperte em "Sign in Github" que você irá acompanhar o processo. Espero que o artigo tenha te ajudado de alguma forma<br />
          </p>
        </section>
        <div>
          <h1>🙈 Testing oAuth</h1>
          <h1> -  By Andreyna - </h1>
        </div>
      </main>
    </Fragment>

  )
}