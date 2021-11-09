import { FC } from 'react'
import { ViewProps } from '..'
import { jsx } from '../../internal'

export const Fixed: FC<ViewProps> = (props) => {
  return jsx('div', {
    ...props,
    position: 'fixed',
  })
}
