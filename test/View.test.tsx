import { render } from '@testing-library/react'
import { View } from '../src'

test('render default View component', async () => {
  render(<View></View>)

  expect(true).toBe(true)
})
