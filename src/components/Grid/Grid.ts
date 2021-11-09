import { jsx } from '@emotion/react'
import { FC } from 'react'
import { ViewProps } from '..'

export const Grid: FC<ViewProps> = (props) => {
  return jsx('div', {
    display: 'grid',
    ...props,
  })
}
