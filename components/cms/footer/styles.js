import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const FooterSection = styled('footer')`
  background-color: white;
  margin-top: auto;
`;

export const Wrapper = styled('div')`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;

  @media (min-width: ${screenMDmin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Nav = styled('nav')`
  picture + & {
    @media (max-width: ${screenSMmax}) {
      margin-top: 1rem;
    }
  }
  ul {
    list-style: none;

    @media (max-width: ${screenSMmax}) {
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
