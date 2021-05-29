import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import Head from 'next/head';

// markup
const Home = () => {
  return (
    <>
      <Head>
        <title>David Rajec</title>
        <meta name="description" content="David Rajec's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <About />
      </Layout>
    </>
  )
}

export default Home
