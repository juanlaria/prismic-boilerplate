import { Link as PrismicLink } from 'prismic-reactjs';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { hrefResolver, linkResolver } from '../prismic-configuration';

const Link = ({ link, children }) => {
  let result = '';
  const url = PrismicLink.url(link, linkResolver);

  if (link.link_type === 'Document') {
    result = (
      <NextLink as={linkResolver(link)} href={hrefResolver(link)}>
        <a>{children}</a>
      </NextLink>
    );
  } else {
    const target = link.target ? { target: link.target, rel: 'noopener' } : {};
    result = (
      <a href={url} {...target}>
        {children}
      </a>
    );
  }
  return result;
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.shape({}).isRequired,
};

export default Link;
