# API

## createStore

`createStore` is a factory function for generating a React context for managing data of a specified object type, used for global state management within an application.

It provides a `StoreProvider` component and a `useStoreValues` Hook.

### Type Definition

```tsx | pure
function createStore<T extends Record<string, any>>(): {
  StoreProvider: React.FC<StoreProviderProps<T>>;
  useStoreValues: <K extends FieldPath<T>>(
    fields: K[],
  ) => UseStoreValuesReturn<T, K>;
};
```

## StoreProvider

`StoreProvider` provides a context layer, where data is stored in memory and can be accessed and updated later via useStoreValues.

### Type Definition

```tsx | pure
interface StoreProviderProps<T> {
  initialValue: T;
  children: React.ReactNode;
}
```

- `initialValue: T`: The initial value of the Store, must be an object.
- `children: React.ReactNode`: React.ReactNode: The child components to be wrapped.

### Usage

```tsx | pure
<StoreProvider initialValue={yourInitialData}>
  {/* your components */}
</StoreProvider>
```

## useStoreValues

Used to access data from Store. `useStoreValues` strictly controls permission at the field level.

### Type Definition

```tsx | pure
function useStoreValues<K extends FieldPath<T>>(
  fields: K[],
): {
  values: Pick<T, K>;
  setFieldValue: (path: K, value: any) => void;
  setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void;
};
```

Parameters

- `fields: K[]`
  - An array of the field names to subscribe and operate. Only these fields will be monitored and exposed.

Return object

- `values: Pick<T, K>`
  - The object with the values of the currently subscribed fields. For example: { fieldA: valueA, fieldB: valueB }.
- `setFieldValue: (path: K, value: any) => void`
  - Update the value of a specific field. Only fields registered in fields can be updated, otherwise an error will be thrown.
  - `useStoreValues` strictly controls data read/write permissions; unrequested fields cannot be modified.
- `setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void`
  - Batch update values of multiple fields. Only fields registered in fields can be updated, otherwise an error will be thrown.
  - `useStoreValues` strictly controls data read/write permissions; unrequested fields cannot be modified.

### Usage

```tsx | pure
const { values, setFieldValue, setFieldsValue } = useStoreValues([
  'fieldA',
  'fieldB',
]);

useEffect(() => {
  // Access value
  console.log(values.fieldA);
}, [values]);

// Set a single field
setFieldValue('fieldA', 'newValueA');

// Batch set
setFieldsValue({ fieldA: 123, fieldB: 'abc' });
```

## Typical Usage

```tsx | pure
// Define type
type MyStore = {
  count: number;
  user: string;
};

// Create store
const { StoreProvider, useStoreValues } = createStore<MyStore>();

// At app root
<StoreProvider initialValue={{ count: 0, user: '' }}>
  <MyComponent />
</StoreProvider>;

// In a component
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
