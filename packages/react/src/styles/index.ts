import {
  colors,
  fontSizes,
  radii,
  fontWeights,
  fonts,
  lineHeights,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    radii,
    fontWeights,
    fonts,
    lineHeights,
    space,
  },
})
