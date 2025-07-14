"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[937],{30763:function(d,s,t){t.r(s);var _=t(72269),c=t(93359),l=t(61788),h=t(19977),x=t(25809),a=t(90978),m=t(96057),D=t(83213),i=t(53683),r=t(80936),u=t(67294),n=t(87799),e=t(85893);function o(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u6587\u6863",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6587\u6863",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6587\u6863"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n.texts[0].value}),n.texts[1].value]}),(0,e.jsxs)("h2",{id:"\u521B\u5EFAstore",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521B\u5EFAstore",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u521B\u5EFAStore"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[2].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:n.texts[3].value}),(0,e.jsxs)("h2",{id:"\u521D\u59CB\u5316store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521D\u59CB\u5316store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u521D\u59CB\u5316store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[4].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:n.texts[5].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[6].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:n.texts[7].value})]})})})})}s.default=o},87799:function(d,s,t){t.r(s),t.d(s,{texts:function(){return _}});const _=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" \u4E3B\u8981\u76EE\u7684\u662F\u4E25\u683C\u63A7\u5236 store \u6570\u636E\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u663E\u793A\u58F0\u660E\u7533\u8BF7\u5B57\u6BB5\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u82E5\u5B57\u6BB5\u4E0D\u5728\u7533\u8BF7\u7684\u6743\u9650\u5185\uFF0C\u5219\u4E0D\u5141\u8BB8\u4FEE\u6539",paraId:0,tocIndex:0},{value:"./store.tsx",paraId:1,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
  // \u7533\u8BF7\u5B57\u6BB5 \`name\` \u7684\u8BFB\u5199\u6743\u9650
  // \u6CE8\u610F: \`updateData\` \u53EA\u80FD\u66F4\u65B0\u5B57\u6BB5 \`name\`\uFF0C\u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
  const [data, updateData] = useStoreData(['name']);

  console.log(data);
  // data = { name }

  const handleClick = () => {
    // \u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
    updateData('name', 'James');
  };

  return (
    <div>
      {data.name}
      <input type="button" onClick={handleClick}>
        \u66F4\u65B0name
      </input>
    </div>
  );
}

export function Child2() {
  // \u7533\u8BF7\u5B57\u6BB5 \`height\` \u7684\u8BFB\u5199\u6743\u9650
  // \u6CE8\u610F: \`updateData\` \u53EA\u80FD\u66F4\u65B0\u5B57\u6BB5 \`height\`\uFF0C\u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
  const [data, updateData] = useStoreData(['height']);

  console.log(data);
  // data = { height }

  const handleClick = () => {
    // \u6CA1\u6709\u6743\u9650\u66F4\u65B0\u5176\u4ED6\u5B57\u6BB5
    updateData('height', 110);
  };

  return (
    <div>
      {data.height}
      <input type="button" onClick={handleClick}>
        \u66F4\u65B0height
      </input>
    </div>
  );
}
`,paraId:6,tocIndex:3}]}}]);
