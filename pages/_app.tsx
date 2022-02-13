import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
            <Head>
                <title>Компания</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
}

export default MyApp;