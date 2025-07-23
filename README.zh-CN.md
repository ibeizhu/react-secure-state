# react-secure-state

[![NPM version](https://img.shields.io/npm/v/react-secure-state.svg?style=flat)](https://npmjs.org/package/react-secure-state)
[![NPM downloads](http://img.shields.io/npm/dm/react-secure-state.svg?style=flat)](https://npmjs.org/package/react-secure-state)

安全可靠的的状态管理工具，支持精细化权限控制，极致的渲染性能

功能特性:
-  💎 Store: Store 状态管理
- 🛡️ 安全: 字段级别的权限控制
- 🛡️ 极致的性能: 支持点到点的render性能
- 📝 类型提示: 强大的类型提示
-  🚀 轻量级: 零外部依赖

[中文文档](https://ibeizhu.github.io/react-secure-state)

[English Document](https://ibeizhu.github.io/react-secure-state/en-US)

## Installation

```
npm i react-secure-state -S
```


## Usage

`react-secure-state` 主要目的是严格控制 store 数据的读写权限，开发者可以显示声明申请字段的读写权限，若字段不在申请的权限内，则不允许修改

### 创建Store

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

### 初始化store

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

### 使用store

`./Child.tsx`

```tsx | pure
import { useStoreValues } from './store';

export function Child1() {
  // 申请字段 `name` 的读写权限
  // 注意: `setFieldValue` 只能更新字段 `name`，没有权限更新其他字段
  const [values, { setFieldValue }] = useStoreValues(['name']);

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
  const [values, { setFieldValue }] = useStoreValues(['height']);

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

## LICENSE

MIT
