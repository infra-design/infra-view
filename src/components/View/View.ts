import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

export interface ViewProps {
  id?: string
  as?: string
  position?: CSSProperties['position']
  margin?: CSSProperties['margin']
}

export const View: FC<ViewProps> = (props) => {
  const { as = 'div', id, position, margin, children } = props

  const css = {
    position,
    margin,
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
