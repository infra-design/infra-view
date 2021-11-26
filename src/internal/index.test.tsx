import { render } from '@testing-library/react'
import { jsx, px } from '.'

test('internal jsx', async () => {
  const view = render(jsx('div', { css: {} }))

  expect(view.container).toMatchInlineSnapshot(`
<div>
  <div
    class="emotion-0"
  />
</div>
`)
})

test('internal function px', async () => {
  expect(px(null)).toBe(null)
  expect(px(undefined)).toBe(undefined)
  expect(px('')).toBe('')
  expect(px('1')).toBe('1px')
  expect(px(1)).toBe('1px')
  expect(px(1.1)).toBe('1.1px')
})
