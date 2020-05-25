import { RichText } from 'prismic-reactjs';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import Link from '../../link';
import { FooterSection, Wrapper, Nav } from './styles';

const Footer = ({ footer_links, footer_icon, footer_text }) => {
  return (
    <FooterSection>
      <Container>
        <Wrapper>
          {footer_icon && <Image data={footer_icon} />}
          {!!footer_links?.length && (
            <Nav>
              <ul>
                {footer_links.map(el => (
                  <li key={el.link.id}>
                    <Link link={el.link}>{RichText.asText(el.link_label)}</Link>
                  </li>
                ))}
              </ul>
            </Nav>
          )}
        </Wrapper>
        {footer_text && (
          <p>
            {new Date().getFullYear()}. {RichText.asText(footer_text)}
          </p>
        )}
      </Container>
    </FooterSection>
  );
};

export default Footer;
