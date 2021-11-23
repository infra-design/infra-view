import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

export interface ViewProps {
  id?: string
  as?: string
  position?: CSSProperties['position']
}

export const View: FC<ViewProps> = (props) => {
  const { as = 'div', id, position } = props

  const css = {
    position,
  }

  return jsx(as, {
    id,
    css,
  })
}
