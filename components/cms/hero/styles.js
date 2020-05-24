import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const HeroSection = styled('section')`
  @media (max-width: ${screenSMmax}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media (min-width: ${screenMDmin}) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  background-color: white;

  h1 {
    font-size: var(--headingFontSize);

    @media (min-width: ${screenMDmin}) {
      max-width: 50%;
    }
  }

  picture {
    display: block;

    @media (max-width: ${screenSMmax}) {
      margin-top: 2rem;
    }

    @media (min-width: ${screenMDmin}) {
      max-width: 50%;
      margin-left: 2rem;
    }
  }
`;

export const Wrapper = styled('div')`
  @media (min-width: ${screenMDmin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
