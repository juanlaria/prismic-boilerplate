import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const HeaderSection = styled('header')`
  position: sticky;
  top: 0;
  background-color: white;
`;

export const Wrapper = styled('div')`
  @media (min-width: ${screenMDmin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Nav = styled('nav')`
  ul {
    list-style: none;

    @media (max-width: ${screenSMmax}) {
      display: none;
      padding-left: 0;
    }

    @media (min-width: ${screenMDmin}) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  li {
    & + li {
      @media (max-width: ${screenSMmax}) {
        margin-top: 0.5rem;
      }
      @media (min-width: ${screenMDmin}) {
        margin-left: 1rem;
      }
    }
  }
`;
