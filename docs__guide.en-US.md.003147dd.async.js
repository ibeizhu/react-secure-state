"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[964],{75877:function(d,s,n){n.r(s);var i=n(72269),u=n(93359),c=n(61788),h=n(19977),x=n(25809),a=n(90978),m=n(96057),p=n(83213),r=n(53683),o=n(80936),l=n(67294),t=n(854),e=n(85893);function _(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"documentation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#documentation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Documentation"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:t.texts[0].value}),t.texts[1].value]}),(0,e.jsx)("p",{children:t.texts[2].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:t.texts[3].value}),(0,e.jsx)("li",{children:t.texts[4].value}),(0,e.jsx)("li",{children:t.texts[5].value}),(0,e.jsx)("li",{children:t.texts[6].value}),(0,e.jsx)("li",{children:t.texts[7].value})]}),(0,e.jsxs)("h2",{id:"createstore",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#createstore",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"createStore"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[8].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:t.texts[9].value}),(0,e.jsxs)("h2",{id:"initialize-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#initialize-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"initialize store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[10].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:t.texts[11].value}),(0,e.jsxs)("h2",{id:"use-store-value",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#use-store-value",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"use store value"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[12].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:t.texts[13].value})]})})})})}s.default=_},854:function(d,s,n){n.r(s),n.d(s,{texts:function(){return i}});const i=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" is a secure and reliable state management tool with fine-grained permission control and ultimate rendering performance.",paraId:0,tocIndex:0},{value:"Features:",paraId:1,tocIndex:0},{value:"\u{1F48E} Store: State Management Framework",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F Secure: Field-level Access Control",paraId:2,tocIndex:0},{value:"\u{1F680} Extreme Performance: Support point-to-point rendering for store data updates",paraId:2,tocIndex:0},{value:"\u{1F4DD} Typed: Powerful Type Inference",paraId:2,tocIndex:0},{value:"\u{1F680} Lightweight: Zero Dependencies",paraId:2,tocIndex:0},{value:"./store.tsx",paraId:3,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
`,paraId:8,tocIndex:3}]}}]);
