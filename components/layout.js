import Head from 'next/head';
import Alert from './alert';
import Meta from './meta';
import Header from './cms/header';
import Footer from './cms/footer';

export default function Layout({
  preview,
  metadata,
  social,
  header,
  footer,
  children,
}) {
  return (
    <>
      <Head>
        {/* Script for Prismic preview */}
        <script
          async
          defer
          src="//static.cdn.prismic.io/prismic.js?repo=juanlaria&new=true"
        />
      </Head>
      <Meta metadata={metadata} social={social} />
      <Alert preview={preview} />
      {header && <Header {...header.data} />}
      <main id="main">{children}</main>
      {footer && <Footer {...footer.data} />}
    </>
  );
}
