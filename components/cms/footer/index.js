import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
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
                {footer_links.map((el, index) => (
                  <li key={`${el.link.id}-${index}`}>
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

Footer.propTypes = {
  footer_links: PropTypes.arrayOf(PropTypes.shape({})),
  footer_icon: PropTypes.shape({}),
  footer_text: PropTypes.arrayOf(PropTypes.shape({})),
};

Footer.defaultProps = {
  footer_links: null,
  footer_icon: null,
  footer_text: null,
};

export default Footer;
