export { jsx } from '@emotion/react'

export function px(value: string | number | undefined | null) {
  return value === undefined || value === null || value === '' ? value : `${value}px`
}
