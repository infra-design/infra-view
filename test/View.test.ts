import { render } from '@testing-library/react'
import { createElement } from 'react'
import { View } from '../src'

test('View component', async () => {
  render(createElement(View))

  expect(true).toBe(true)
})
