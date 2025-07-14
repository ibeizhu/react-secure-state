"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[430],{23129:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(67294),o={}},82908:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(67294),o={}},854:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" is a secure and reliable state management tool with fine-grained permission control and ultimate rendering performance.",paraId:0,tocIndex:0},{value:"Features:",paraId:1,tocIndex:0},{value:"\u{1F48E} Store: State Management Framework",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F Secure: Field-level Access Control",paraId:2,tocIndex:0},{value:"\u{1F680} Extreme Performance: Support point-to-point rendering for store data updates",paraId:2,tocIndex:0},{value:"\u{1F4DD} Typed: Powerful Type Inference",paraId:2,tocIndex:0},{value:"\u{1F680} Lightweight: Zero Dependencies",paraId:2,tocIndex:0},{value:"./store.tsx",paraId:3,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
`,paraId:8,tocIndex:3}]},93698:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]}}]);
