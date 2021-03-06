import { CSSProperties } from 'react'

type Margin = CSSProperties['margin']
type Padding = CSSProperties['padding']
type Position = CSSProperties['position']
type Width = CSSProperties['width']
type Height = CSSProperties['height']
type Left = CSSProperties['left']
type Top = CSSProperties['top']
type Right = CSSProperties['right']
type Bottom = CSSProperties['bottom']
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
  width?: Width
  height?: Height
  left?: Left
  top?: Top
  right?: Right
  bottom?: Bottom

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
  /**
   * @example
   *   <View backgroundImageUrl="https://foo.com/bar.jpg" />
   */
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
  /**
   * @example
   *   <View borderRadius={10} />
   */
  borderRadius?: BorderRadius
}

export interface ViewStyleProps extends ViewNormalStyle {
  hoverStyle?: ViewNormalStyle
  focusStyle?: ViewNormalStyle
  activeStyle?: ViewNormalStyle
  disabledStyle?: ViewNormalStyle

  lastChildStyle?: ViewNormalStyle
  firstChildStyle?: ViewNormalStyle

  group?: boolean | string
  groupHoverStyle?: ViewNormalStyle
  groupActiveStyle?: ViewNormalStyle
  groupDisabledStyle?: ViewNormalStyle
}

export interface ViewProps extends ViewStyleProps {
  /**
   * @description set a group name for the child view hover or other style
   */
  group?: boolean | string

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

  /**
   * @description the target name of the component
   */
  as?: string

  /**
   * @description
   *   `externalProps` is a way to pass props to the component.
   *   It is useful when you want to pass props to the component that is not defined in the component.
   */
  externalProps?: ViewStyleProps
  xxxl?: ViewStyleProps
  xxl?: ViewStyleProps
  xl?: ViewStyleProps
  lg?: ViewStyleProps
  md?: ViewStyleProps
  sm?: ViewStyleProps
  xs?: ViewStyleProps
}
