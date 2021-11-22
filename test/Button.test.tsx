import { render } from '@testing-library/react'
import React from 'react'

const Button = (props) => (
  <button
    css={{
      color: 'hotpink',
    }}
    {...props}
  />
)

test('Button renders correctly', () => {
  expect(render(<Button>This is hotpink.</Button>)).toMatchSnapshot()
})
