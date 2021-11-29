import { CSSProperties } from 'react'

type Margin = CSSProperties['margin']
type Padding = CSSProperties['padding']
type Position = CSSProperties['position']
type Background = CSSProperties['background']
type Border = CSSProperties['border']
type BorderRadius = CSSProperties['borderRadius']
type BackgroundSize = CSSProperties['backgroundSize']
type BackgroundPosition = CSSProperties['backgroundPosition']
type BackgroundRepeat = CSSProperties['backgroundRepeat']
type BackgroundImage = CSSProperties['backgroundImage']
type BackgroundColor = CSSProperties['backgroundColor']

interface ViewNormalStyle {
  position?: Position
  margin?: Margin | [Margin] | [Margin, Margin] | [Margin, Margin, Margin, Margin]
  marginTop?: Margin
  marginRight?: Margin
  marginBottom?: Margin
  marginLeft?: Margin
  padding?: Padding | [Padding] | [Padding, Padding] | [Padding, Padding, Padding, Padding]
  paddingTop?: Padding
  paddingRight?: Padding
  paddingBottom?: Padding
  paddingLeft?: Padding
  backgroundImageUrl?: BackgroundImage
  background?:
    | Background
    | {
        image?: BackgroundImage
        size?: BackgroundSize
        position?: BackgroundPosition
        repeat?: BackgroundRepeat
        color?: BackgroundColor
      }
  border?:
    | Border
    | {
        color: string
        width: number
        style: CSSProperties['borderStyle']
        radius: BorderRadius
      }
  borderRadius?: BorderRadius
}

export interface ViewStyleProps extends ViewNormalStyle {
  // conditional styles
  hoverStyle?: ViewNormalStyle
  focusStyle?: ViewNormalStyle
  activeStyle?: ViewNormalStyle
  disabledStyle?: ViewNormalStyle

  lastChildStyle?: ViewNormalStyle
  firstChildStyle?: ViewNormalStyle

  // group style props
  group?: boolean | string
  groupHoverStyle?: ViewNormalStyle
  groupActiveStyle?: ViewNormalStyle
  groupDisabledStyle?: ViewNormalStyle
}

export interface ViewProps extends ViewStyleProps {
  /**
   * @description if isMounted is true, the component will be mounted
   * @default true
   * @example <View isMounted={true} />
   */
  isMounted?: boolean

  /**
   * @description if isVisible is true, the component will be visible.
   * @default false
   * @example <View isHidden={false} />
   */
  isHidden?: boolean

  /**
   * @description the id of the component
   */
  id?: string
  as?: string

  externalProps?: ViewStyleProps
  xxxl?: ViewStyleProps
  xxl?: ViewStyleProps
  xl?: ViewStyleProps
  lg?: ViewStyleProps
  md?: ViewStyleProps
  sm?: ViewStyleProps
  xs?: ViewStyleProps
}
