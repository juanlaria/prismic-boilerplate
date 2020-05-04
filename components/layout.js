import Head from 'next/head';
import Alert from './alert';

export default function Layout({ preview, children }) {
  return (
    <>
      <Head>
        <script
          async
          defer
          src="//static.cdn.prismic.io/prismic.js?repo=juanlaria&new=true"
        />
      </Head>
      <Alert preview={preview} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
