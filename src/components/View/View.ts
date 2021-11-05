import { CSSObject, jsx } from '@emotion/react'
import { CSSProperties, FC, HTMLProps } from 'react'

interface ExternalStyleProps extends CSSProperties {
  sm?: CSSObject
  md?: CSSObject
  lg?: CSSObject
  xl?: CSSObject
  xxl?: CSSObject
  xxxl?: CSSObject
}

export type Style = CSSObject
export type DOMAttributes = Omit<
  HTMLProps<HTMLElement>,
  'content' | 'color' | 'translate' | 'width' | 'height'
>

export interface ViewProps extends ExternalStyleProps, DOMAttributes {
  as: string
}

export const View: FC<ViewProps> = () => {
  return jsx('div', {
    style: {
      display: 'flex',
    },
  })
}
