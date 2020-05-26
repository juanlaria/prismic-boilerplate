import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../shared/breakpoints';

export const AlertSection = styled('section')`
  background-color: black;
  color: white;
  font-size: 0.8rem;
  line-height: 1.5;

  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 15rem;
  
  @media (max-width: ${screenSMmax}) {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  @media (min-width: ${screenMDmin}) {
    padding: 1rem;
    margin: 1rem;
  }
`;
