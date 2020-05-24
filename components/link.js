import { Link as PrismicLink } from 'prismic-reactjs';
import { Link as NextLink } from 'next/link';
import { hrefResolver, linkResolver } from '../prismic-configuration';

export default function Link({ link, children }) {
  let result = '';
  const url = PrismicLink.url(link, linkResolver);

  if (link.link_type === 'Document') {
    result = (
      <NextLink as={linkResolver(link)} href={hrefResolver(link)}>
        {children}
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
}
