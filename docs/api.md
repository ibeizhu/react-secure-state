# API

## createStore

`createStore` 是一个工厂函数，用于生成 React 上下文 (Context) 管理指定对象类型的数据，用于在应用内部进行全局状态管理。

通过它可以获得 `StoreProvider` 组件和 `useStoreValues` Hook。

### 类型定义

```tsx | pure
function createStore<T extends Record<string, any>>(): {
  StoreProvider: React.FC<StoreProviderProps<T>>;
  useStoreValues: <K extends FieldPath<T>>(
    fields: K[],
  ) => UseStoreValuesReturn<T, K>;
};
```

## StoreProvider

StoreProvider 提供一个上下文层，将数据存储于内存中，供后续通过 useStoreValues 进行读取及更新。

### 类型定义

```tsx | pure
interface StoreProviderProps<T> {
  initialValue: T;
  children: React.ReactNode;
}
```

- `initialValue: T`: 初始化 Store 的值，必须是一个对象。
- `children: React.ReactNode` 需要包裹的子组件。

### 用法

```tsx | pure
<StoreProvider initialValue={yourInitialData}>
  {/* your components */}
</StoreProvider>
```

## useStoreValues

用于申请 Store 的数据，`useStoreValues` 严格控制字段的权限

### 类型定义

```tsx | pure
function useStoreValues<K extends FieldPath<T>>(
  fields: K[],
): {
  values: Pick<T, K>;
  setFieldValue: (path: K, value: any) => void;
  setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void;
};
```

参数

- `fields: K[]`
  - 需要订阅和操作的字段名数组，仅这些字段会被侦听和暴露。

返回对象

- `values: Pick<T, K>`
  - 当前订阅字段对应的值对象。例如：{ fieldA: valueA, fieldB: valueB }。
- `setFieldValue: (path: K, value: any) => void`
  - 更新指定字段的值，仅允许更新在 fields 注册过的字段，否则会抛错。
  - `useStoreValues` 严格控制数据的读写权限，未申请的字段不允许被修改
- `setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void`
  - 批量更新多个字段值，仅允许更新在 fields 注册过的字段，否则会抛错。
  - `useStoreValues` 严格控制数据的读写权限，未申请的字段不允许被修改

### 用法

```tsx | pure
const { values, setFieldValue, setFieldsValue } = useStoreValues([
  'fieldA',
  'fieldB',
]);

useEffect(() => {
  // 取值
  console.log(values.fieldA);
}, [values]);

// 设置单个字段
setFieldValue('fieldA', 'newValueA');

// 批量设置
setFieldsValue({ fieldA: 123, fieldB: 'abc' });
```

## 典型用法

```tsx | pure
// 定义类型
type MyStore = {
  count: number;
  user: string;
};

// 创建 store
const { StoreProvider, useStoreValues } = createStore<MyStore>();

// 应用顶层
<StoreProvider initialValue={{ count: 0, user: '' }}>
  <MyComponent />
</StoreProvider>;

// 组件内
function MyComponent() {
  const { values, setFieldValue, setFieldsValue } = useStoreValues([
    'count',
    'user',
  ]);

  return (
    <div>
      <span>{values.count}</span>
      <button onClick={() => setFieldValue('count', values.count + 1)}>
        +
      </button>
    </div>
  );
}
```
