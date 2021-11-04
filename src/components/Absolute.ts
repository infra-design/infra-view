import { jsx } from '@emotion/react'
import { FC } from 'react'
import { View, ViewProps } from '.'

export const Absolute: FC<ViewProps> = (props) => {
  return jsx(View, {
    position: 'absolute',
    ...props,
  })
}
