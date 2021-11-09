import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

export interface ViewProps {
  as: string
  position: CSSProperties['position']
}

export const View: FC<ViewProps> = () => {
  return jsx('div', {
    style: {
      display: 'flex',
    },
  })
}
