# 示例

`react-secure-state` 安全可靠的的状态管理工具，支持精细化权限控制，极致的渲染性能

功能特性:

- 💎 Store: Store 状态管理
- 🛡️ 安全: 字段级别的权限控制
- 🛡️ 极致的性能: 支持点到点的 render 性能
- 📝 类型提示: 强大的类型提示
- 🚀 轻量级: 零外部依赖

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
