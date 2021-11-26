import { px } from '.'

test('internal function px', async () => {
  expect(px(null)).toBe(null)
  expect(px(undefined)).toBe(undefined)
  expect(px('')).toBe('')
  expect(px('1')).toBe('1px')
  expect(px(1)).toBe('1px')
  expect(px(1.1)).toBe('1.1px')
})
