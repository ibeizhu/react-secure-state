"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[964],{75877:function(d,s,t){t.r(s);var a=t(72269),u=t(93359),c=t(61788),h=t(19977),m=t(25809),i=t(90978),x=t(96057),j=t(83213),_=t(53683),o=t(80936),r=t(67294),n=t(854),e=t(85893);function l(){return(0,e.jsx)(_.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"documentation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#documentation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Documentation"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n.texts[0].value}),n.texts[1].value]}),(0,e.jsxs)("h2",{id:"createstore",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#createstore",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"createStore"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[2].value})}),(0,e.jsx)(i.Z,{lang:"tsx",children:n.texts[3].value}),(0,e.jsxs)("h2",{id:"initialize-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#initialize-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"initialize store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[4].value})}),(0,e.jsx)(i.Z,{lang:"tsx",children:n.texts[5].value}),(0,e.jsxs)("h2",{id:"use-store-value",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#use-store-value",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"use store value"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[6].value})}),(0,e.jsx)(i.Z,{lang:"tsx",children:n.texts[7].value})]})})})})}s.default=l},854:function(d,s,t){t.r(s),t.d(s,{texts:function(){return a}});const a=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" is designed to strictly control store data read and write permissions. Developers can explicitly declare and request read or write access to specific fields. If a field is not included in the declared permissions, modifications will not be permitted.",paraId:0,tocIndex:0},{value:"./store.tsx",paraId:1,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

export interface StoreType {
  name: string;
  height: number;
}

const { StoreProvider, useStoreValues } = createStore<StoreType>();

export { StoreProvider, useStoreValues };
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
`,paraId:4,tocIndex:2},{value:"./Child.tsx",paraId:5,tocIndex:3},{value:`import { useStoreValues } from './store';

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
`,paraId:6,tocIndex:3}]}}]);
