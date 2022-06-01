import { Html, Head, Main, NextScript } from 'next/document';

// NOTE: Custom Document https://nextjs.org/docs/advanced-features/custom-document
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
