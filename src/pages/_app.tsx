import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Layout } from '@/layout/layout';
import '../styles/reset.scss';
import '../styles/global.scss';
import { theme } from '@/shared/constants';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Волна Мобайл</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link rel='icon' type='image/x-icon' href='public/assets/img/favicon.ico' />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
