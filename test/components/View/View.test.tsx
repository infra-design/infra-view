import { render } from '@testing-library/react'
import { View } from '../../../src'

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

test('<View isMounted={true} />', () => {
  const view = render(<View isMounted={true} />)

  expect(view.container).toMatchSnapshot()
})

test('<View isMounted={false} />', () => {
  const view = render(<View isMounted={false} />)

  expect(view.container).toMatchSnapshot()
})

test('<View isHidden={true} />', () => {
  const view = render(<View isHidden={true} />)

  expect(view.container).toMatchSnapshot()
})

test('<View isHidden={false} />', () => {
  const view = render(<View />)

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

test(`<View marginTop={10} />`, () => {
  const view = render(<View marginTop={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View marginRight={10} />`, () => {
  const view = render(<View marginRight={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View marginBottom={10} />`, () => {
  const view = render(<View marginBottom={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View marginLeft={10} />`, () => {
  const view = render(<View marginLeft={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View margin={[10]} />`, () => {
  const view = render(<View margin={[10]} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View margin={[10, 10]} />`, () => {
  const view = render(<View margin={[10, 10]} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View margin={[10, 10, 10, 10]} />`, () => {
  const view = render(<View margin={[10, 10, 10, 10]} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View padding={10} />`, () => {
  const view = render(<View padding={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View paddingTop={10} />`, () => {
  const view = render(<View paddingTop={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View paddingRight={10} />`, () => {
  const view = render(<View paddingRight={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View paddingBottom={10} />`, () => {
  const view = render(<View paddingBottom={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View paddingLeft={10} />`, () => {
  const view = render(<View paddingLeft={10} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View padding={[10]} />`, () => {
  const view = render(<View padding={[10]} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View padding={[10, 10]} />`, () => {
  const view = render(<View padding={[10, 10]} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View padding={[10, 10, 10, 10]} />`, () => {
  const view = render(<View padding={[10, 10, 10, 10]} />)

  expect(view.container).toMatchSnapshot()
})

test(`<View backgroundImageUrl='https://foo/bar.jpg' />`, () => {
  const view = render(<View backgroundImageUrl='https://foo/bar.jpg' />)

  expect(view.container).toMatchSnapshot()
})
