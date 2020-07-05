import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const BannerSection = styled('section')`
  @media (max-width: ${screenSMmax}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: ${screenMDmin}) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  background-color: #f0f0f0;

  h2 {
    font-size: var(--subheadingFontSize);
    margin-bottom: 1rem;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    h2 + & {
      margin-top: 1rem;
    }
  }

  picture {
    display: block;

    @media (min-width: ${screenMDmin}) {
      max-width: 50%;
    }
  }
`;

export const TextSection = styled('div')`
  @media (max-width: ${screenSMmax}) {
    margin-top: 2rem;
  }

  @media (min-width: ${screenMDmin}) {
    max-width: 50%;
    margin-left: 2rem;
  }
`;

export const Wrapper = styled('div')`
  @media (min-width: ${screenMDmin}) {
    display: flex;
    align-items: center;
  }
`;
