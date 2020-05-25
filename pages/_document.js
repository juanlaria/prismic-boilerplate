import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

const { PUBLIC_NAME } = process.env;

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
      <html lang={this.lang} dir='ltr'>
        <meta name="application-name" content={PUBLIC_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={PUBLIC_NAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/180x180.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link
            href="https://gitcdn.xyz/repo/octoshrimpy/blokkfont/master/blokkfont.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
