import { cssProperties } from './cssProperties'
import { mediaBreakpointsKeys } from './mediaBreakpoints'

export const clearObject = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key]
    }
  }
  return obj
}

export const filterProps = (props: any, keys: string[]) => {
  const filteredProps: any = {}
  for (const key in props) {
    if (keys.includes(key)) {
      filteredProps[key] = props[key]
    }
  }
  return filteredProps
}

export const clearProps = (props: any, keys: string[]) => {
  const filteredProps: any = {}
  for (const key in props) {
    if (!keys.includes(key)) {
      filteredProps[key] = props[key]
    }
  }
  return filteredProps
}

export const filterStyleProps = (props: any) => {
  return clearObject(filterProps(props, cssProperties))
}

export const clearStyleProps = (props: any) => {
  return clearProps(props, [...cssProperties, ...mediaBreakpointsKeys])
}
