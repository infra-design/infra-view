import { jsx } from '@emotion/react'
import { FC } from 'react'

export interface ViewProps {
  as: string
}

export const View: FC<ViewProps> = () => {
  return jsx('div')
}
