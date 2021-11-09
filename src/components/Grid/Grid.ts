import { FC } from 'react'
import { ViewProps } from '..'
import { jsx } from '../../internal'

export const Grid: FC<ViewProps> = (props) => {
  return jsx('div', {
    display: 'grid',
    ...props,
  })
}
