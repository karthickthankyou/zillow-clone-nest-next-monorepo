import Head from 'next/head'

import { add } from '@zillow-org/util'

export default function Home() {
  const c = add(4, 8)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Sum is {c}</main>
    </>
  )
}
