import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'
import { px } from '../../internal'
import { ViewProps } from './ViewProps'

const { isArray } = Array

const defaultValues = {
  as: 'div',
  isMounted: true,
  isHidden: false,
} as const

export const View: FC<ViewProps> = (props) => {
  const properties = Object.assign({}, defaultValues, props)

  // Object.keys(properties).filter((key) => !cssProperties.includes(key))

  const {
    as,
    id,
    position,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundImageUrl,
    children,
    isMounted,
    isHidden,
  } = properties

  if (!isMounted) {
    return null
  }

  const css: CSSProperties = {
    position,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }

  if (isHidden) {
    css.display = 'none'
  }

  if (margin) {
    if (isArray(margin)) {
      css.margin = margin.map(px).join(' ')
    } else {
      css.margin = margin
    }
  }

  if (padding) {
    if (isArray(padding)) {
      css.padding = padding.map(px).join(' ')
    } else {
      css.padding = padding
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
