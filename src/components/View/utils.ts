import { cssProperties } from './cssProperties'
import { mediaBreakpointsKeys } from './mediaBreakpoints'

export const cleanObject = (obj: Record<string, any>) => {
  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      delete obj[key]
    }
  }
  return obj
}

export const filterProps = (props: Record<string, any>, keys: string[]) => {
  const filteredProps: Record<string, any> = {}
  for (const key in props) {
    if (keys.includes(key)) {
      filteredProps[key] = props[key]
    }
  }
  return filteredProps
}

export const clearProps = (props: Record<string, any>, keys: string[]) => {
  const filteredProps: Record<string, any> = {}
  for (const key in props) {
    if (!keys.includes(key)) {
      filteredProps[key] = props[key]
    }
  }
  return filteredProps
}

export const filterStyleProps = (props: Record<string, any>) => {
  return cleanObject(filterProps(props, cssProperties))
}

export const clearStyleProps = (props: Record<string, any>) => {
  return clearProps(props, [...cssProperties, ...mediaBreakpointsKeys])
}
