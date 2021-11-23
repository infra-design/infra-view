import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

export interface ViewProps {
  as?: string
  position?: CSSProperties['position']
}

export const View: FC<ViewProps> = (props) => {
  const { as = 'div' } = props

  return jsx(as, {
    style: {
      display: 'flex',
    },
  })
}
