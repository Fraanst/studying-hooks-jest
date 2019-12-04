import { createTheme, lightThemePrimitives as baseUiLightThemePrimitives } from 'baseui';
import { primitives as baseUiDarkThemePrimitives } from 'baseui/themes/dark-theme-primitives';
import darkThemeColors from 'baseui/themes/dark-theme-colors';
import { darken, lighten } from 'polished';

const PRIMARY_COLOR = '#72D621';

const commonPrimitives = {
  primary: PRIMARY_COLOR,
  primary50: lighten(20, PRIMARY_COLOR),
  primary100: lighten(15, PRIMARY_COLOR),
  primary200: lighten(10, PRIMARY_COLOR),
  primary300: lighten(5, PRIMARY_COLOR),
  primary500: darken(5, PRIMARY_COLOR),
  primary600: darken(10, PRIMARY_COLOR),
  primary700: darken(15, PRIMARY_COLOR),
  primaryFontFamily: 'Lato, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const darkThemePrimitives = {
  ...baseUiDarkThemePrimitives,
  ...commonPrimitives,
};
const darkThemeOverrides = {
  ...darkThemeColors,
};
const lightThemePrimitives = {
  ...baseUiLightThemePrimitives,
  ...commonPrimitives,
};

const lightTheme = createTheme(lightThemePrimitives);

const darkTheme = createTheme(darkThemePrimitives, darkThemeOverrides);

export { lightTheme, darkTheme };
