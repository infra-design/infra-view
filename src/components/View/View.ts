import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

export interface ViewProps {
  id?: string
  as?: string
  position?: CSSProperties['position']
  margin?: CSSProperties['margin']
  backgroundImageUrl?: string
}

export const View: FC<ViewProps> = (props) => {
  const { as = 'div', id, position, margin, backgroundImageUrl, children } = props

  const css: CSSProperties = {
    position,
  }

  if (margin) {
    css.margin = margin
  }

  if (backgroundImageUrl) {
    css.backgroundImage = `url("${backgroundImageUrl}")`
  }

  return jsx(
    as,
    {
      id,
      css,
    },
    children,
  )
}
