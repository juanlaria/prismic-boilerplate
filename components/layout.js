import Head from 'next/head';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Meta from './meta';
import Header from './cms/header';
import Footer from './cms/footer';

const { PRISMIC_REPOSITORY_NAME } = process.env;

const Layout = ({
  preview,
  offline,
  metadata,
  social,
  header,
  footer,
  children,
}) => {
  const showAlert = preview || offline;
  return (
    <>
      <Head>
        {/* Script for Prismic preview */}
        <script
          async
          defer
          src={`//static.cdn.prismic.io/prismic.js?repo=${PRISMIC_REPOSITORY_NAME}&new=true`}
        />
      </Head>
      <Meta metadata={metadata} social={social} />
      {showAlert && <Alert preview={preview} offline={offline} />}
      {header && <Header {...header.data} />}
      <main id="main">{children}</main>
      {footer && <Footer {...footer.data} />}
    </>
  );
};

Layout.propTypes = {
  preview: PropTypes.bool,
  offline: PropTypes.bool,
  metadata: PropTypes.shape({}),
  social: PropTypes.arrayOf(PropTypes.shape({})),
  header: PropTypes.shape({}),
  footer: PropTypes.shape({}),
  children: PropTypes.arrayOf(PropTypes.node.isRequired),
};

Layout.defaultProps = {
  preview: false,
  offline: false,
  metadata: null,
  social: null,
  header: null,
  footer: null,
};

export default Layout;
