import { RichText } from 'prismic-reactjs';
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

export default Hero;
