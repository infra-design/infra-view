import { jsx } from '@emotion/react'
import { FC } from 'react'
import { ViewProps } from '.'

export const Fixed: FC<ViewProps> = (props) => {
  return jsx('div', {
    ...props,
    position: 'fixed',
  })
}
