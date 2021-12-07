import { cleanObject, clearStyleProps, filterStyleProps } from '../../../src/components/View/utils'

test('cleanObject', () => {
  const target = {
    a: 1,
    b: null,
    c: undefined,
    d: '',
  }

  const result = cleanObject(target)

  expect(result).toEqual({
    a: 1,
  })
})

test('filterStyleProps', () => {
  const target = {
    backgroundColor: '#fff',
    foo: 'bar',
  }
  const result = filterStyleProps(target)

  expect(result).toEqual({
    backgroundColor: '#fff',
  })
})

test('clearStyleProps', () => {
  const target = {
    backgroundColor: '#fff',
    foo: 'bar',
  }
  const result = clearStyleProps(target)

  expect(result).toEqual({
    foo: 'bar',
  })
})
