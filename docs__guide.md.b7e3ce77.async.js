"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[937],{30763:function(a,s,n){n.r(s);var d=n(72269),l=n(93359),c=n(61788),h=n(19977),x=n(25809),_=n(90978),m=n(96057),j=n(83213),i=n(53683),u=n(80936),r=n(67294),t=n(87799),e=n(85893);function o(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(u.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u6587\u6863",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6587\u6863",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6587\u6863"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:t.texts[0].value}),t.texts[1].value]}),(0,e.jsxs)("h2",{id:"\u521B\u5EFA-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521B\u5EFA-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u521B\u5EFA Store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[2].value})}),(0,e.jsx)(_.Z,{lang:"tsx",children:t.texts[3].value}),(0,e.jsxs)("h2",{id:"\u521D\u59CB\u5316-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521D\u59CB\u5316-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u521D\u59CB\u5316 store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[4].value})}),(0,e.jsx)(_.Z,{lang:"tsx",children:t.texts[5].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[6].value})}),(0,e.jsx)(_.Z,{lang:"tsx",children:t.texts[7].value})]})})})})}s.default=o},87799:function(a,s,n){n.r(s),n.d(s,{texts:function(){return d}});const d=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" \u4E3B\u8981\u76EE\u7684\u662F\u4E25\u683C\u63A7\u5236 store \u6570\u636E\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u663E\u793A\u58F0\u660E\u7533\u8BF7\u5B57\u6BB5\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u82E5\u5B57\u6BB5\u4E0D\u5728\u7533\u8BF7\u7684\u6743\u9650\u5185\uFF0C\u5219\u4E0D\u5141\u8BB8\u4FEE\u6539",paraId:0,tocIndex:0},{value:"./store.tsx",paraId:1,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
`,paraId:6,tocIndex:3}]}}]);
