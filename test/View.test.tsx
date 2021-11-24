import { render } from '@testing-library/react'
import React from 'react'
import { View } from '../src'

test('<View />', async () => {
  const view = render(<View />)

  expect(view.container).toMatchSnapshot()
})

test('<View><View></View></View>', async () => {
  const view = render(
    <View>
      <View></View>
    </View>,
  )

  expect(view.container).toMatchSnapshot()
})

test(`<View as='button'>Button</View>`, () => {
  const view = render(<View as='button'>Button</View>)

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

test(`<View backgroundImageUrl='https://foo/bar.jpg' />`, () => {
  const view = render(<View backgroundImageUrl='https://foo/bar.jpg' />)

  expect(view.container).toMatchSnapshot()
})
