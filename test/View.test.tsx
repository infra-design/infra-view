import { render } from '@testing-library/react'
import React from 'react'
import { View } from '../src'

test('<View />', async () => {
  const view = render(<View />)

  expect(view.container).toMatchInlineSnapshot(`
    <div>
      <div
        class="emotion-0"
      />
    </div>
  `)
})

test(`<View as='button' />`, () => {
  const view = render(<View as='button' />)

  expect(view.container).toMatchInlineSnapshot(`
    <div>
      <button
        class="emotion-0"
      />
    </div>
  `)
})

test(`<View position='absolute' />`, () => {
  const view = render(<View position='absolute'></View>)

  expect(view.container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: absolute;
    }

    <div>
      <div
        class="emotion-0"
      />
    </div>
  `)
})
