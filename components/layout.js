import Head from 'next/head';
import Alert from './alert';
import Meta from './meta';

export default function Layout({
  preview,
  metadata,
  social,
  children,
}) {
  return (
    <>
      <Head>
        <script
          async
          defer
          src="//static.cdn.prismic.io/prismic.js?repo=juanlaria&new=true"
        />
      </Head>
      <Meta
        metadata={metadata}
        social={social}
      />
      <Alert preview={preview} />
      {/* <Header /> */}
      <main id="main">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
