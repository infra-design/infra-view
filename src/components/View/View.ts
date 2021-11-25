import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

type Margin = CSSProperties['margin']

export interface ViewProps {
  isMounted?: boolean
  isHidden?: boolean
  id?: string
  as?: string
  position?: CSSProperties['position']
  margin?: Margin | [Margin] | [Margin, Margin] | [Margin, Margin, Margin, Margin]
  backgroundImageUrl?: string
}

export const View: FC<ViewProps> = (props) => {
  const {
    as = 'div',
    id,
    position,
    margin,
    backgroundImageUrl,
    children,
    isMounted = true,
    isHidden = false,
  } = props

  if (!isMounted) {
    return null
  }

  const css: CSSProperties = {
    position,
  }

  if (isHidden) {
    css.display = 'none'
  }

  if (margin) {
    if (Array.isArray(margin)) {
      css.margin = margin.map((m) => `${m}px`).join(' ')
    } else {
      css.margin = margin
    }
  }

  if (backgroundImageUrl) {
    css.backgroundImage = `url("${backgroundImageUrl}")`
  }

  return jsx(
    as,
    {
      id,
      css,
    },
    children,
  )
}
