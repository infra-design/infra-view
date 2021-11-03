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

```jsx
import { View } from 'infra-view'

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
```

https://github.com/infra-design/view

### Layout

We recommend to use `Layout` components to create your layout without direct use of `View` component.

#### Flex

```jsx
import { Flex } from 'infra-view'

export default () => {
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

export default () => {
  return (
    <Grid
      columns={1}
      gap={20}
      md={{ columns: 2, gap: 30 }}
      lg={{ columns: 3, gap: 40 }}>
      <div>1</div>
    </Grid>
  )
}
```

#### Center

```jsx
import { Center } from 'infra-view'

export default () => {
  return (
    <Center width={20} height={20}>
      <div>UI</div>
    </Center>
  )
}
```
