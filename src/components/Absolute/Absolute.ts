import { FC } from 'react'
import { View, ViewProps } from '..'
import { jsx } from '../../internal'

export const Absolute: FC<ViewProps> = (props) => {
  return jsx(View, {
    ...props,
    position: 'absolute',
  })
}
