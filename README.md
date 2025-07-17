# react-secure-state

[![NPM version](https://img.shields.io/npm/v/react-secure-state.svg?style=flat)](https://npmjs.org/package/react-secure-state)
[![NPM downloads](http://img.shields.io/npm/dm/react-secure-state.svg?style=flat)](https://npmjs.org/package/react-secure-state)

A secure and reliable state management tool with fine-grained permission control and ultimate rendering performance.

Features:
-  💎 Store: State Management Framework
- 🛡️ Secure: Field-level Access Control
-  🚀 Extreme Performance: Support point-to-point rendering for store data updates
- 📝 Typed: Powerful Type Inference
-  🚀 Lightweight: Zero Dependencies

[中文文档](https://ibeizhu.github.io/react-secure-state)

[English Document](https://ibeizhu.github.io/react-secure-state/en-US)

## Installation

```
npm i react-secure-state -S
```


## Usage

`react-secure-state` is designed to strictly control store data read and write permissions. Developers can explicitly declare and request read or write access to specific fields. If a field is not included in the declared permissions, modifications will not be permitted.

### createStore

`./store.tsx`

```tsx | pure
import { createStore } from 'react-secure-state';

export interface StoreType {
  name: string;
  height: number;
}

const { StoreProvider, useStoreValues } = createStore<StoreType>();

export { StoreProvider, useStoreValues };
```

### initialize store

`./App.tsx`

```tsx | pure
import { StoreProvider } from './store';
import { Child1, Child2 } from './Child';

function App() {
  const data = {
    name: 'Bob',
    height: 180,
  };
  return (
    <StoreProvider initialValue={data}>
      <Child1 />
      <Child2 />
    </StoreProvider>
  );
}
```

### use store value

`./Child.tsx`

```tsx | pure
import { useStoreValues } from './store';

export function Child1() {
  // apply field `name` read & write permission
  // note: `setFieldValue` can only update field `name`, has no permission to update other fields
  const { values, setFieldValue } = useStoreValues(['name']);

  console.log(data);
  // data = { name }

  const handleClick = () => {
    // has no permission to update other fields
    setFieldValue('name', 'James');
  };

  return (
    <div>
      {data.name}
      <button onClick={handleClick}>update name</button>
    </div>
  );
}

export function Child2() {
  // apply field `height` read & write permission
  // note: `setFieldValue` can only update field `height`, has no permission to update other fields
  const { values, setFieldValue } = useStoreValues(['height']);

  console.log(data);
  // data = { height }

  const handleClick = () => {
    // has no permission to update other fields
    setFieldValue('height', 110);
  };

  return (
    <div>
      {data.height}
      <button onClick={handleClick}>update height</button>
    </div>
  );
}
```


## LICENSE

MIT
