import Head from 'next/head';
import PropTypes from 'prop-types';

const { PUBLIC_NAME } = process.env;

const GeneralCard = ({ canonical, title, description, image }) => {
  return (
    <Head>
      {canonical && <meta name="og:url" content={canonical} />}
      {title && <meta name="og:title" content={title} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image.url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={PUBLIC_NAME} />
    </Head>
  );
};

GeneralCard.propTypes = {
  canonical: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({}),
};

GeneralCard.defaultProps = {
  canonical: null,
  title: null,
  description: null,
  image: null,
};

export default GeneralCard;
