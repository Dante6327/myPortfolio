import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from 'styled-components';

const sizes: { [key: string]: number } = {
  desktop: 1024,
  tablet: 768,
  mobile: 320,
};

type BackQuoteArgs = string[];

interface Media {
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet?: (...args: BackQuoteArgs) => CSSProp | undefined;
  mobile?: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  desktop: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  mobile: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`
        @media screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => css`
        @media screen and (max-width: ${sizes.desktop -
          1}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) => css`
        @media screen and (max-width: ${sizes.tablet -
          1}px) and (min-width: ${sizes.mobile}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  white: '#ffffff',
  black: '#000000',
};

const fontSizes = {
  xsmall: '0.5rem',
  small: '0.8rem',
  medium: '1rem',
  large: '2rem',
  xlarge: '4rem',
  xxlarge: '8rem',
};

const theme = {
  colors,
  fontSizes,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
