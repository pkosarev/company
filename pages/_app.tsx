import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
            <Head>
                <title>Компания</title>
                <meta name="viewport" content="width=device-width; initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
}

export default MyApp;