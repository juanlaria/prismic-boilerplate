import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

const { PUBLIC_NAME, PRISMIC_REPOSITORY_NAME, NODE_ENV } = process.env;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const lang = props?.__NEXT_DATA__?.props?.pageProps?.doc?.lang;
    this.lang = lang;
  }

  render() {
    return (
      <html lang={this.lang} dir="ltr">
        <meta name="application-name" content={PUBLIC_NAME} />
        <meta name="theme-color" content="#FFFFFF" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/180x180.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />

          <link
            rel="preconnect"
            href={`https://${PRISMIC_REPOSITORY_NAME}.prismic.io`}
            crossOrigin="true"
          />
          <link
            rel="dns-prefetch"
            href={`https://${PRISMIC_REPOSITORY_NAME}.prismic.io`}
          />
          <link
            rel="preconnect"
            href="https://static.cdn.prismic.io"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://static.cdn.prismic.io" />
        </Head>
        <body style={NODE_ENV === 'development' ? { display: 'block' } : {}}>
          <Main />
          <NextScript />

          {/* Script for Prismic preview */}
          <script
            async
            defer
            src={`//static.cdn.prismic.io/prismic.js?repo=${PRISMIC_REPOSITORY_NAME}&new=true`}
          />
        </body>
      </html>
    );
  }
}
