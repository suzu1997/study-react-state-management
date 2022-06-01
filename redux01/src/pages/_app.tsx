import { useState } from 'react';

import { Provider } from 'react-redux';

import { store } from 'src/state';
import { Layout } from 'src/components/Layout';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
