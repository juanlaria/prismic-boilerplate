import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

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
      <html lang={this.lang}>
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
