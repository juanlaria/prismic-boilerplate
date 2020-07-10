/* eslint-disable import/no-cycle */
import { default as hero } from './hero';
import { default as banner_with_caption } from './banner';
import { default as header } from './header';
import { default as footer } from './footer';

export default {
  header,
  hero,
  banner_with_caption,
  footer,
};
