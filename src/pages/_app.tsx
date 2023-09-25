import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "styled-components";
import { Layout } from "@/layout/layout";
import "../styles/reset.scss";
import "../styles/global.scss";

export const theme = {
  colors: {
    primary: {
      900: '#111D3B',
      800: '#003164',
      700: '#004A97',
      600: '#0469D2',
      500: '#007BFB',
      400: '#3395FC',
      300: '#66B0FD',
      200: '#99CAFD',
      100: '#CCE5FE',
      0: '#EBF4FF',
    },
    base: {
      900: '#282D3C',
      800: '#414961',
      700: '#515B73',
      600: '#788095',
      500: '#8C94A8',
      400: '#BCC3D2',
      300: '#E2E7F3',
      200: '#ECF0F8',
      100: '#F4F6FB',
      0: '#FFFFFF',
    },
    accept: {
      garden: '#5CC867',
    },
    error: {
      fire: '#ED584E',
    },
    option: {
      dance: '#FD770D',
      ice: '#70D0F4',
      lime: '#B6D20D',
      flower: '#4F08E8',
      berrie: '#E75CA3',
      lima: '#75B91F',
      acai: '#92278F',
      sun: '#F8CC4D',
      drow: '#2C73B4',
      steel: '#ADACAC',
      crayola: '#BCC8E5',
    },
  },
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MantineProvider>
    </>
  );
}


const colors = {
  primary: {
    900: '#122B3D',
    800: '#015A9A',
    700: '#006BB9',
    600: '#1B6BEA',
    500: '#277AFF',
    400: '#BCE7FA',
    300: '#C7E8FF',
    200: '#DBF0FF',
    100: '#F2F5FA',
    0: '#FFFFFF',
  },
  base: {
    900: '#122B3D',
    800: '#33455A',
    700: '#5C6D7A',
    600: '#8A939A',
    500: '#ABB5BC',
    400: '#ABB5BC',
    300: '#D2D7DA',
    200: '#E0E7EF',
    100: '#F2F5FA',
    0: '#FFFFFF',
  },
};
