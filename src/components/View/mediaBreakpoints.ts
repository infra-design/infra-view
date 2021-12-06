export type MediaBreakpointsKey = keyof typeof mediaBreakpoints

export const mediaBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1400,
  xxl: 1600,
  xxxl: 1800,
}

export const mediaBreakpointsKeys = Object.keys(mediaBreakpoints) as MediaBreakpointsKey[]
