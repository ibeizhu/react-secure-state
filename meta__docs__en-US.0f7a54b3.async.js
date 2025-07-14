"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[430],{23129:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(67294),o={}},82908:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(67294),o={}},854:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" is designed to strictly control store data read and write permissions. Developers can explicitly declare and request read or write access to specific fields. If a field is not included in the declared permissions, modifications will not be permitted.",paraId:0,tocIndex:0},{value:"./store.tsx",paraId:1,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

export interface StoreType {
  name: string;
  height: number;
}

const { StoreProvider, useStoreData } = createStore<StoreType>();

export { StoreProvider, useStoreData };
`,paraId:2,tocIndex:1},{value:"./App.tsx",paraId:3,tocIndex:2},{value:`import { StoreProvider } from './store';
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
`,paraId:4,tocIndex:2},{value:"./Child.tsx",paraId:5,tocIndex:3},{value:`import { useStoreData } from './store';

export function Child1() {
  // apply field \`name\` read & write permission
  // note: \`updateData\` can only update field \`name\`, has no permission to update other fields
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
  // apply field \`height\` read & write permission
  // note: \`updateData\` can only update field \`height\`, has no permission to update other fields
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
`,paraId:6,tocIndex:3}]},93698:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]}}]);
