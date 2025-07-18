"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[430],{96399:function(t,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),o={}},23129:function(t,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),o={}},82908:function(t,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),o={}},51205:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"createStore",paraId:0,tocIndex:1},{value:" is a factory function for generating a React context for managing data of a specified object type, used for global state management within an application.",paraId:0,tocIndex:1},{value:"It provides a ",paraId:1,tocIndex:1},{value:"StoreProvider",paraId:1,tocIndex:1},{value:" component and a ",paraId:1,tocIndex:1},{value:"useStoreValues",paraId:1,tocIndex:1},{value:" Hook.",paraId:1,tocIndex:1},{value:`function createStore<T extends Record<string, any>>(): {
  StoreProvider: React.FC<StoreProviderProps<T>>;
  useStoreValues: <K extends FieldPath<T>>(
    fields: K[],
  ) => UseStoreValuesReturn<T, K>;
};
`,paraId:2,tocIndex:2},{value:"StoreProvider",paraId:3,tocIndex:3},{value:" provides a context layer, where data is stored in memory and can be accessed and updated later via useStoreValues.",paraId:3,tocIndex:3},{value:`interface StoreProviderProps<T> {
  initialValue: T;
  children: React.ReactNode;
}
`,paraId:4,tocIndex:4},{value:"initialValue: T",paraId:5,tocIndex:4},{value:": The initial value of the Store, must be an object.",paraId:5,tocIndex:4},{value:"children: React.ReactNode",paraId:5,tocIndex:4},{value:": React.ReactNode: The child components to be wrapped.",paraId:5,tocIndex:4},{value:`<StoreProvider initialValue={yourInitialData}>
  {/* your components */}
</StoreProvider>
`,paraId:6,tocIndex:5},{value:"Used to access data from Store. ",paraId:7,tocIndex:6},{value:"useStoreValues",paraId:7,tocIndex:6},{value:" strictly controls permission at the field level.",paraId:7,tocIndex:6},{value:`function useStoreValues<K extends FieldPath<T>>(
  fields: K[],
): {
  values: Pick<T, K>;
  setFieldValue: (path: K, value: any) => void;
  setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void;
};
`,paraId:8,tocIndex:7},{value:"Parameters",paraId:9,tocIndex:7},{value:"fields: K[]",paraId:10,tocIndex:7},{value:"An array of the field names to subscribe and operate. Only these fields will be monitored and exposed.",paraId:11,tocIndex:7},{value:"Return object",paraId:12,tocIndex:7},{value:"values: Pick<T, K>",paraId:13,tocIndex:7},{value:"The object with the values of the currently subscribed fields. For example: { fieldA: valueA, fieldB: valueB }.",paraId:14,tocIndex:7},{value:"setFieldValue: (path: K, value: any) => void",paraId:13,tocIndex:7},{value:"Update the value of a specific field. Only fields registered in fields can be updated, otherwise an error will be thrown.",paraId:15,tocIndex:7},{value:"useStoreValues",paraId:15,tocIndex:7},{value:" strictly controls data read/write permissions; unrequested fields cannot be modified.",paraId:15,tocIndex:7},{value:"setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void",paraId:13,tocIndex:7},{value:"Batch update values of multiple fields. Only fields registered in fields can be updated, otherwise an error will be thrown.",paraId:16,tocIndex:7},{value:"useStoreValues",paraId:16,tocIndex:7},{value:" strictly controls data read/write permissions; unrequested fields cannot be modified.",paraId:16,tocIndex:7},{value:`const { values, setFieldValue, setFieldsValue } = useStoreValues([
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
`,paraId:17,tocIndex:8},{value:`// Define type
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
`,paraId:18,tocIndex:9}]},854:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" is a secure and reliable state management tool with fine-grained permission control and ultimate rendering performance.",paraId:0,tocIndex:0},{value:"Features:",paraId:1,tocIndex:0},{value:"\u{1F48E} Store: State Management Framework",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F Secure: Field-level Access Control",paraId:2,tocIndex:0},{value:"\u{1F680} Extreme Performance: Support point-to-point rendering for store data updates",paraId:2,tocIndex:0},{value:"\u{1F4DD} Typed: Powerful Type Inference",paraId:2,tocIndex:0},{value:"\u{1F680} Lightweight: Zero Dependencies",paraId:2,tocIndex:0},{value:"./store.tsx",paraId:3,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

export interface StoreType {
  name: string;
  height: number;
}

const { StoreProvider, useStoreValues } = createStore<StoreType>();

export { StoreProvider, useStoreValues };
`,paraId:4,tocIndex:1},{value:"./App.tsx",paraId:5,tocIndex:2},{value:`import { StoreProvider } from './store';
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
`,paraId:6,tocIndex:2},{value:"./Child.tsx",paraId:7,tocIndex:3},{value:`import { useStoreValues } from './store';

export function Child1() {
  // apply field \`name\` read & write permission
  // note: \`setFieldValue\` can only update field \`name\`, has no permission to update other fields
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
  // apply field \`height\` read & write permission
  // note: \`setFieldValue\` can only update field \`height\`, has no permission to update other fields
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
`,paraId:8,tocIndex:3}]},93698:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[]}}]);
