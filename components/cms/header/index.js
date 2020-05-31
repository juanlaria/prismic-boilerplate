import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import Link from '../../link';
import Image from '../../image';
import { HeaderSection, Wrapper, Nav } from './styles';

const Header = ({ header_links, site_logo }) => {
  return (
    <HeaderSection>
      <Container>
        <Wrapper>
          {site_logo && <Image data={site_logo} loading="eager" />}
          {!!header_links?.length && (
            <Nav>
              <ul>
                {header_links.map((el, index) => (
                  <li key={`${el.link.id}-${index}`}>
                    <Link link={el.link}>{RichText.asText(el.link_label)}</Link>
                  </li>
                ))}
              </ul>
            </Nav>
          )}
        </Wrapper>
      </Container>
    </HeaderSection>
  );
};

Header.propTypes = {
  header_links: PropTypes.arrayOf(PropTypes.shape({})),
  site_logo: PropTypes.shape({}),
};

Header.defaultProps = {
  header_links: null,
  site_logo: null,
};

export default Header;
