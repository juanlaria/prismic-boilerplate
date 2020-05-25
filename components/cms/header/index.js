import { RichText } from 'prismic-reactjs';
import { Container } from '../../../shared/styles';
import Link from '../../link';
import Image from '../../image';
import { HeaderSection, Wrapper, Nav } from './styles';

const Header = ({ header_links, site_logo }) => {
  return (
    <HeaderSection>
      <Container>
        <Wrapper>
          {site_logo && <Image data={site_logo} />}
          {!!header_links?.length && (
            <Nav>
              <ul>
                {header_links.map(el => (
                  <li key={el.link.id}>
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

export default Header;
