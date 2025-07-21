"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[937],{30763:function(d,s,n){n.r(s);var _=n(72269),o=n(93359),c=n(61788),h=n(19977),x=n(25809),a=n(90978),m=n(96057),v=n(83213),r=n(53683),l=n(80936),i=n(67294),t=n(87799),e=n(85893);function u(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u793A\u4F8B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u793A\u4F8B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u793A\u4F8B"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:t.texts[0].value}),t.texts[1].value]}),(0,e.jsx)("p",{children:t.texts[2].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:t.texts[3].value}),(0,e.jsx)("li",{children:t.texts[4].value}),(0,e.jsx)("li",{children:t.texts[5].value}),(0,e.jsx)("li",{children:t.texts[6].value}),(0,e.jsx)("li",{children:t.texts[7].value})]}),(0,e.jsxs)("h2",{id:"\u521B\u5EFA-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521B\u5EFA-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u521B\u5EFA Store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[8].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:t.texts[9].value}),(0,e.jsxs)("h2",{id:"\u521D\u59CB\u5316-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521D\u59CB\u5316-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u521D\u59CB\u5316 store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[10].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:t.texts[11].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528-store",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-store",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 store"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:t.texts[12].value})}),(0,e.jsx)(a.Z,{lang:"tsx",children:t.texts[13].value})]})})})})}s.default=u},87799:function(d,s,n){n.r(s),n.d(s,{texts:function(){return _}});const _=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" \u5B89\u5168\u53EF\u9760\u7684\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF0C\u652F\u6301\u7CBE\u7EC6\u5316\u6743\u9650\u63A7\u5236\uFF0C\u6781\u81F4\u7684\u6E32\u67D3\u6027\u80FD",paraId:0,tocIndex:0},{value:"\u529F\u80FD\u7279\u6027:",paraId:1,tocIndex:0},{value:"\u{1F48E} Store: Store \u72B6\u6001\u7BA1\u7406",paraId:2,tocIndex:0},{value:"\u{1F512} \u5B89\u5168: \u5B57\u6BB5\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236",paraId:2,tocIndex:0},{value:"\u26A1\uFE0F \u6781\u81F4\u7684\u6027\u80FD: \u652F\u6301\u70B9\u5230\u70B9\u7684 render \u6027\u80FD",paraId:2,tocIndex:0},{value:"\u{1F9E9} \u7C7B\u578B\u63D0\u793A: \u5F3A\u5927\u7684\u7C7B\u578B\u63D0\u793A",paraId:2,tocIndex:0},{value:"\u{1F680} \u8F7B\u91CF\u7EA7: \u96F6\u5916\u90E8\u4F9D\u8D56",paraId:2,tocIndex:0},{value:"./store.tsx",paraId:3,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
`,paraId:8,tocIndex:3}]}}]);
