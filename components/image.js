import PropTypes from 'prop-types';

const Image = ({ data, loading }) => {
  const { dimensions, url, alt, bigger } = data;
  return (
    <picture>
      {bigger && <source srcSet={bigger.url} media="(min-width: 600px)" />}
      <img
        src={url}
        alt={alt || ''}
        width={dimensions ? dimensions.width : false}
        height={dimensions ? dimensions.height : false}
        loading={loading}
      />
    </picture>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    dimensions: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    url: PropTypes.string,
    alt: PropTypes.string,
    bigger: PropTypes.shape({}),
  }).isRequired,
  loading: PropTypes.string,
};

Image.defaultProps = {
  loading: 'auto',
};

export default Image;
