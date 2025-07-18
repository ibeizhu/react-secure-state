"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[904],{31557:function(t,n,e){e.r(n),e.d(n,{demos:function(){return d}});var a=e(67294),d={}},60810:function(t,n,e){e.r(n),e.d(n,{demos:function(){return d}});var a=e(67294),d={}},11171:function(t,n,e){e.r(n),e.d(n,{demos:function(){return d}});var a=e(67294),d={}},58840:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"createStore",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u751F\u6210 React \u4E0A\u4E0B\u6587 (Context) \u7BA1\u7406\u6307\u5B9A\u5BF9\u8C61\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u7528\u4E8E\u5728\u5E94\u7528\u5185\u90E8\u8FDB\u884C\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7\u5B83\u53EF\u4EE5\u83B7\u5F97 ",paraId:1,tocIndex:1},{value:"StoreProvider",paraId:1,tocIndex:1},{value:" \u7EC4\u4EF6\u548C ",paraId:1,tocIndex:1},{value:"useStoreValues",paraId:1,tocIndex:1},{value:" Hook\u3002",paraId:1,tocIndex:1},{value:`function createStore<T extends Record<string, any>>(): {
  StoreProvider: React.FC<StoreProviderProps<T>>;
  useStoreValues: <K extends FieldPath<T>>(
    fields: K[],
  ) => UseStoreValuesReturn<T, K>;
};
`,paraId:2,tocIndex:2},{value:"StoreProvider \u63D0\u4F9B\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5C42\uFF0C\u5C06\u6570\u636E\u5B58\u50A8\u4E8E\u5185\u5B58\u4E2D\uFF0C\u4F9B\u540E\u7EED\u901A\u8FC7 useStoreValues \u8FDB\u884C\u8BFB\u53D6\u53CA\u66F4\u65B0\u3002",paraId:3,tocIndex:3},{value:`interface StoreProviderProps<T> {
  initialValue: T;
  children: React.ReactNode;
}
`,paraId:4,tocIndex:4},{value:"initialValue: T",paraId:5,tocIndex:4},{value:": \u521D\u59CB\u5316 Store \u7684\u503C\uFF0C\u5FC5\u987B\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002",paraId:5,tocIndex:4},{value:"children: React.ReactNode",paraId:5,tocIndex:4},{value:" \u9700\u8981\u5305\u88F9\u7684\u5B50\u7EC4\u4EF6\u3002",paraId:5,tocIndex:4},{value:`<StoreProvider initialValue={yourInitialData}>
  {/* your components */}
</StoreProvider>
`,paraId:6,tocIndex:5},{value:"\u7528\u4E8E\u7533\u8BF7 Store \u7684\u6570\u636E\uFF0C",paraId:7,tocIndex:6},{value:"useStoreValues",paraId:7,tocIndex:6},{value:" \u4E25\u683C\u63A7\u5236\u5B57\u6BB5\u7684\u6743\u9650",paraId:7,tocIndex:6},{value:`function useStoreValues<K extends FieldPath<T>>(
  fields: K[],
): {
  values: Pick<T, K>;
  setFieldValue: (path: K, value: any) => void;
  setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void;
};
`,paraId:8,tocIndex:7},{value:"\u53C2\u6570",paraId:9,tocIndex:7},{value:"fields: K[]",paraId:10,tocIndex:7},{value:"\u9700\u8981\u8BA2\u9605\u548C\u64CD\u4F5C\u7684\u5B57\u6BB5\u540D\u6570\u7EC4\uFF0C\u4EC5\u8FD9\u4E9B\u5B57\u6BB5\u4F1A\u88AB\u4FA6\u542C\u548C\u66B4\u9732\u3002",paraId:11,tocIndex:7},{value:"\u8FD4\u56DE\u5BF9\u8C61",paraId:12,tocIndex:7},{value:"values: Pick<T, K>",paraId:13,tocIndex:7},{value:"\u5F53\u524D\u8BA2\u9605\u5B57\u6BB5\u5BF9\u5E94\u7684\u503C\u5BF9\u8C61\u3002\u4F8B\u5982\uFF1A{ fieldA: valueA, fieldB: valueB }\u3002",paraId:14,tocIndex:7},{value:"setFieldValue: (path: K, value: any) => void",paraId:13,tocIndex:7},{value:"\u66F4\u65B0\u6307\u5B9A\u5B57\u6BB5\u7684\u503C\uFF0C\u4EC5\u5141\u8BB8\u66F4\u65B0\u5728 fields \u6CE8\u518C\u8FC7\u7684\u5B57\u6BB5\uFF0C\u5426\u5219\u4F1A\u629B\u9519\u3002",paraId:15,tocIndex:7},{value:"useStoreValues",paraId:15,tocIndex:7},{value:" \u4E25\u683C\u63A7\u5236\u6570\u636E\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u672A\u7533\u8BF7\u7684\u5B57\u6BB5\u4E0D\u5141\u8BB8\u88AB\u4FEE\u6539",paraId:15,tocIndex:7},{value:"setFieldsValue: (fieldsValue: Partial<Record<FieldPath<T>, any>>) => void",paraId:13,tocIndex:7},{value:"\u6279\u91CF\u66F4\u65B0\u591A\u4E2A\u5B57\u6BB5\u503C\uFF0C\u4EC5\u5141\u8BB8\u66F4\u65B0\u5728 fields \u6CE8\u518C\u8FC7\u7684\u5B57\u6BB5\uFF0C\u5426\u5219\u4F1A\u629B\u9519\u3002",paraId:16,tocIndex:7},{value:"useStoreValues",paraId:16,tocIndex:7},{value:" \u4E25\u683C\u63A7\u5236\u6570\u636E\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u672A\u7533\u8BF7\u7684\u5B57\u6BB5\u4E0D\u5141\u8BB8\u88AB\u4FEE\u6539",paraId:16,tocIndex:7},{value:`const { values, setFieldValue, setFieldsValue } = useStoreValues([
  'fieldA',
  'fieldB',
]);

useEffect(() => {
  // \u53D6\u503C
  console.log(values.fieldA);
}, [values]);

// \u8BBE\u7F6E\u5355\u4E2A\u5B57\u6BB5
setFieldValue('fieldA', 'newValueA');

// \u6279\u91CF\u8BBE\u7F6E
setFieldsValue({ fieldA: 123, fieldB: 'abc' });
`,paraId:17,tocIndex:8},{value:`// \u5B9A\u4E49\u7C7B\u578B
type MyStore = {
  count: number;
  user: string;
};

// \u521B\u5EFA store
const { StoreProvider, useStoreValues } = createStore<MyStore>();

// \u5E94\u7528\u9876\u5C42
<StoreProvider initialValue={{ count: 0, user: '' }}>
  <MyComponent />
</StoreProvider>;

// \u7EC4\u4EF6\u5185
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
`,paraId:18,tocIndex:9}]},87799:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" \u5B89\u5168\u53EF\u9760\u7684\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF0C\u652F\u6301\u7CBE\u7EC6\u5316\u6743\u9650\u63A7\u5236\uFF0C\u6781\u81F4\u7684\u6E32\u67D3\u6027\u80FD",paraId:0,tocIndex:0},{value:"\u529F\u80FD\u7279\u6027:",paraId:1,tocIndex:0},{value:"\u{1F48E} Store: Store \u72B6\u6001\u7BA1\u7406",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F \u5B89\u5168: \u5B57\u6BB5\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F \u6781\u81F4\u7684\u6027\u80FD: \u652F\u6301\u70B9\u5230\u70B9\u7684 render \u6027\u80FD",paraId:2,tocIndex:0},{value:"\u{1F4DD} \u7C7B\u578B\u63D0\u793A: \u5F3A\u5927\u7684\u7C7B\u578B\u63D0\u793A",paraId:2,tocIndex:0},{value:"\u{1F680} \u8F7B\u91CF\u7EA7: \u96F6\u5916\u90E8\u4F9D\u8D56",paraId:2,tocIndex:0},{value:"./store.tsx",paraId:3,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
  // \u7533\u8BF7\u5B57\u6BB5 \`name\` \u7684\u8BFB\u5199\u6743\u9650
  // \u6CE8\u610F: \`setFieldValue\` \u53EA\u80FD\u66F4\u65B0\u5B57\u6BB5 \`name\`\uFF0C\u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
  const { values, setFieldValue } = useStoreValues(['name']);

  console.log(data);
  // data = { name }

  const handleClick = () => {
    // \u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
    setFieldValue('name', 'James');
  };

  return (
    <div>
      {data.name}
      <button onClick={handleClick}>\u66F4\u65B0name</button>
    </div>
  );
}

export function Child2() {
  // \u7533\u8BF7\u5B57\u6BB5 \`height\` \u7684\u8BFB\u5199\u6743\u9650
  // \u6CE8\u610F: \`setFieldValue\` \u53EA\u80FD\u66F4\u65B0\u5B57\u6BB5 \`height\`\uFF0C\u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
  const { values, setFieldValue } = useStoreValues(['height']);

  console.log(data);
  // data = { height }

  const handleClick = () => {
    // \u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
    setFieldValue('height', 110);
  };

  return (
    <div>
      {data.height}
      <button onClick={handleClick}>\u66F4\u65B0height</button>
    </div>
  );
}
`,paraId:8,tocIndex:3}]},51446:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[]}}]);
