# infra-view

Create your UI in a simple way.

## Installation

```
npm install infra-view
```

```
yarn add infra-view
```

```
pnpm add infra-view
```

## Components

### Base

#### View

Try to use full spellings instead of abbreviations, which will reduce the mental burden when developing. And we provide intelligent completions, so the time spent using abbreviations and full spellings is not too different.

```jsx
import { View } from 'infra-view'

export const App =() => {
  return (
    <View
      display='block'
      margin={100}
      width={20}
      height={20}
      background='black'
      hover={{
        background='red'
      }}
      md={{
        margin: 200,
        width: 30,
        height: 30,
      }}
      lg={{
        margin: 300,
        width: 30,
        height: 30,
      }}>
      UI
    </View>
  )
}
```

##### Hidden

```jsx
import { View } from 'infra-view'

export const App = () => {
  return <View>UI</View>
}
```

##### Responsive

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <>
      <View marginTop={{ sx: 1, md: 2, lg: 3, xl: 4 }}></View>
      <View
        marginTop={1}
        paddingTop={1}
        md={{ marginTop: 2, paddingTop: 2 }}
        lg={{ marginTop: 3, paddingTop: 3 }}></View>
    </>
  )
}
```

##### Selector

```jsx
import { Button } from 'infra-view'

export const App = (props) => {
  return (
    <Button
      color='gray'
      background='red'
      hover={{ background: 'blue' }}
      active={{ background: 'yellow' }}
      focus={{ borderColor: 'green' }}>
      {props.children}
    </Button>
  )
}
```

##### As

Easy switch between components. Defaults to `div`.

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <View as='div'>
      <View as='button'>Button</View>
    </View>
  )
}
```

##### Alias

```js
import { P, Span } from 'infra-view'

export const App = () => {
  return (
    <P>
      Same as use <Span>View</Span> as p.
    </P>
  )
}
```

#### Combo

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <>
      <View
        text={{
          family: 'sans-serif',
          size: 16,
          align: 'left',
          color: 'red',
        }}>
        Text
      </View>
      <View
        background={{
          color: 'gray',
          image: 'http://www.demo.com/demo.jpg',
          repeat: 'no-repeat',
          position: 'center',
          size: 'cover',
        }}>
        Background
      </View>
      <View
        border={{
          color: 'red',
          width: 1,
          style: 'solid',
        }}>
        Border
      </View>
    </>
  )
}
```

### Layout

We recommend to use `Layout` components to create your layout without direct use of `View` component.

#### Flex

```jsx
import { Flex } from 'infra-view'

export const App = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      flexDirection='row'
      md={{
        flexDirection: 'column',
      }}>
      <div>1</div>
      <div>2</div>
    </Flex>
  )
}
```

#### Grid

```jsx
import { Grid } from 'infra-view'

export const App = () => {
  return (
    <Grid columns={1} gap={20} md={{ columns: 2, gap: 30 }} lg={{ columns: 3, gap: 40 }}>
      <div>1</div>
    </Grid>
  )
}
```

#### Center

```jsx
import { Center } from 'infra-view'

export const App = () => {
  return (
    <Center width={20} height={20}>
      <div>UI</div>
    </Center>
  )
}
```

#### Absolute

```jsx
import { Absolute } from 'infra-view'

export const App = () => {
  return (
    <Absolute top={10} left={10}>
      <div>UI</div>
    </Absolute>
  )
}
```
