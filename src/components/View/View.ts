import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'
import { px } from '../../internal'
import { filterStyleProps } from './utils'
import { ViewProps } from './ViewProps'

const { isArray } = Array

const defaultValues = {
  as: 'div',
  isMounted: true,
  isHidden: false,
} as const

export const View: FC<ViewProps> = (props) => {
  const properties = Object.assign({}, defaultValues, props)
  const normalStyleProperties = filterStyleProps(properties)

  const { as, id, children, isMounted, isHidden, group, backgroundImageUrl } = properties

  if (!isMounted) {
    return null
  }

  const css: CSSProperties = normalStyleProperties

  if (isHidden) {
    css.display = 'none'
  }

  if (css.margin) {
    if (isArray(css.margin)) {
      css.margin = css.margin.map(px).join(' ')
    } else {
      css.margin = css.margin
    }
  }

  if (css.padding) {
    if (isArray(css.padding)) {
      css.padding = css.padding.map(px).join(' ')
    } else {
      css.padding = css.padding
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
      className: group,
    },
    children,
  )
}
