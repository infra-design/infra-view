import { render } from '@testing-library/react'
import React from 'react'
import { View } from '../src'

test('<View />', async () => {
  const view = render(<View />)

  expect(view.container).toMatchSnapshot()
})

test(`<View as='button' />`, () => {
  const view = render(<View as='button' />)

  expect(view.container).toMatchSnapshot()
})

test(`<View position='absolute' />`, () => {
  const view = render(<View position='absolute' />)

  expect(view.container).toMatchSnapshot()
})

test(`<View margin={10} />`, () => {
  const view = render(<View margin={10} />)

  expect(view.container).toMatchSnapshot()
})
