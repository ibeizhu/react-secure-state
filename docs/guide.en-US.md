# Documentation

`react-secure-state` is designed to strictly control store data read and write permissions. Developers can explicitly declare and request read or write access to specific fields. If a field is not included in the declared permissions, modifications will not be permitted.

## createStore

`./store.tsx`

```tsx | pure
import { createStore } from 'react-secure-state';

export interface StoreType {
  name: string;
  height: number;
}

const { StoreProvider, useStoreData } = createStore<StoreType>();

export { StoreProvider, useStoreData };
```

## initialize store

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

## use store value

`./Child.tsx`

```tsx | pure
import { useStoreData } from './store';

export function Child1() {
  // apply field `name` read & write permission
  // note: `updateData` can only update field `name`, has no permission to update other fields
  const [data, updateData] = useStoreData(['name']);

  console.log(data);
  // data = { name }

  const handleClick = () => {
    // has no permission to update other fields
    updateData('name', 'James');
  };

  return (
    <div>
      {data.name}
      <input type="button" onClick={handleClick}>
        update name
      </input>
    </div>
  );
}

export function Child2() {
  // apply field `height` read & write permission
  // note: `updateData` can only update field `height`, has no permission to update other fields
  const [data, updateData] = useStoreData(['height']);

  console.log(data);
  // data = { height }

  const handleClick = () => {
    // has no permission to update other fields
    updateData('height', 110);
  };

  return (
    <div>
      {data.height}
      <input type="button" onClick={handleClick}>
        update height
      </input>
    </div>
  );
}
```
