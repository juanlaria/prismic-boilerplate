import { RichText } from 'prismic-reactjs';
import FooterSection from './styles';
import Link from '../../link';

const Footer = ({ data }) => {
  if (data) {
    const { footer_links, footer_icon, footer_text } = data;
    return (
      <FooterSection>
        {!!footer_links.length && (
          <ul>
            {footer_links.map(el => (
              <li>
                <Link link={el.link}>
                  <a>{RichText.asText(el.link_label)}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <hr />
        {footer_text && <RichText render={footer_text} />}
      </FooterSection>
    );
  }
  return false;
};

export default Footer;
