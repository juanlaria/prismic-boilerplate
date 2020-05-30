import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import { HeroSection, Wrapper } from './styles';

const Hero = ({ primary }) => {
  const { hero_background_image, hero_title } = primary;
  if (primary) {
    return (
      <HeroSection>
        <Container>
          <Wrapper>
            {hero_title && <RichText render={hero_title} />}
            {hero_background_image && <Image data={hero_background_image} />}
          </Wrapper>
        </Container>
      </HeroSection>
    );
  }
  return false;
};

Hero.propTypes = {
  primary: PropTypes.shape({
    hero_background_image: PropTypes.shape({}).isRequired,
    hero_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Hero;
