import { keyframes, css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import {
  screenSMmin,
  screenMDmin,
  screenLGmin,
  screenXLmin,
} from './breakpoints';

export const globalStyles = (
  <Global
    styles={css`
      :root {
        --headingFontSize: 2.5rem;
        --subheadingFontSize: 2rem;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        margin: 0;
        background: papayawhip;
        height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 20px;
      }

      #__next {
        display: flex;
        flex-direction: column;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7 {
        margin: 0;
      }

      p {
        margin: 0;
      }

      ul {
        margin: 0;
      }

      a {
        color: inherit;
      }

      /* Make images easier to work with */
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      button {
        padding: 0;
        border: 0;
        background: none;
      }

      /* Remove _all_ animations and transitions for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-play-state: paused !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      }
    `}
  />
);

/* Visually hidden class */
export const containerStyles = css`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  /* Small devices (phones, 480px and up) */
  @media (min-width: ${screenSMmin}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: ${screenMDmin}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Large devices (desktops, 1024px and up) */
  @media (min-width: ${screenLGmin}) {
    max-width: 990px;
  }

  /* Extra large devices (large desktops, 1440px and up) */
  @media (min-width: ${screenXLmin}) {
    max-width: 1200px;
  }
`;

/* Visually hidden class */
export const cloakStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;

  &:focus,
  &:focus-within {
    background-color: red;
    color: white;
    clip: initial;
    height: auto;
    width: auto;
    display: inline-block;
  }
`;

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

export const Container = styled('div')`
  ${containerStyles};
`;

export const Cloak = styled('div')`
  ${cloakStyles};
`;

export const Basic = styled('div')`
  ${basicStyles};
`;

export const Combined = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;
export const Animated = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`;
