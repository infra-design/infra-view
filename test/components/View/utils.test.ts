import { filterStyleProps } from '../../../src/components/View/utils'

test('filterStyleProps', async () => {
  const target = {
    backgroundColor: '#fff',
    foo: 'bar',
  }
  const result = filterStyleProps(target)

  expect(result).toEqual({
    backgroundColor: '#fff',
  })
})
