# 文档

`react-secure-state` 主要目的是严格控制 store 数据的读写权限，开发者可以显示声明申请字段的读写权限，若字段不在申请的权限内，则不允许修改

## 创建 Store

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

## 初始化 store

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

## 使用 store

`./Child.tsx`

```tsx | pure
import { useStoreValues } from './store';

export function Child1() {
  // 申请字段 `name` 的读写权限
  // 注意: `setFieldValue` 只能更新字段 `name`，没有权限更新其他字段
  const { values, setFieldValue } = useStoreValues(['name']);

  console.log(data);
  // data = { name }

  const handleClick = () => {
    // 没有权限更新其他字段
    setFieldValue('name', 'James');
  };

  return (
    <div>
      {data.name}
      <button onClick={handleClick}>更新name</button>
    </div>
  );
}

export function Child2() {
  // 申请字段 `height` 的读写权限
  // 注意: `setFieldValue` 只能更新字段 `height`，没有权限更新其他字段
  const { values, setFieldValue } = useStoreValues(['height']);

  console.log(data);
  // data = { height }

  const handleClick = () => {
    // 没有权限更新其他字段
    setFieldValue('height', 110);
  };

  return (
    <div>
      {data.height}
      <button onClick={handleClick}>更新height</button>
    </div>
  );
}
```
