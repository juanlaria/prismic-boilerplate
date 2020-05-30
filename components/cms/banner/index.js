import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import Link from '../../link';
import { BannerSection, Wrapper, TextSection } from './styles';

const Banner = ({
  primary: {
    banner_title,
    banner_description,
    banner_image,
    banner_button_label,
    banner_button_link,
  },
}) => {
  return (
    <BannerSection>
      <Container>
        <Wrapper>
          {banner_image && <Image data={banner_image} />}
          <TextSection>
            {banner_title && <RichText render={banner_title} />}
            {banner_description && <RichText render={banner_description} />}
            {banner_button_label && banner_button_link && (
              <Link link={banner_button_link}>
                {RichText.asText(banner_button_label)}
              </Link>
            )}
          </TextSection>
        </Wrapper>
      </Container>
    </BannerSection>
  );
};

Banner.propTypes = {
  primary: PropTypes.shape({
    banner_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    banner_description: PropTypes.arrayOf(PropTypes.shape({})),
    banner_image: PropTypes.shape({}).isRequired,
    banner_button_label: PropTypes.arrayOf(PropTypes.shape({})),
    banner_button_link: PropTypes.shape({}),
  }).isRequired,
};

export default Banner;
