"use strict";(self.webpackChunkreact_secure_state=self.webpackChunkreact_secure_state||[]).push([[904],{60810:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(67294),o={}},11171:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(67294),o={}},87799:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"react-secure-state",paraId:0,tocIndex:0},{value:" \u5B89\u5168\u53EF\u9760\u7684\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF0C\u652F\u6301\u7CBE\u7EC6\u5316\u6743\u9650\u63A7\u5236\uFF0C\u6781\u81F4\u7684\u6E32\u67D3\u6027\u80FD",paraId:0,tocIndex:0},{value:"\u529F\u80FD\u7279\u6027:",paraId:1,tocIndex:0},{value:"\u{1F48E} Store: Store \u72B6\u6001\u7BA1\u7406",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F \u5B89\u5168: \u5B57\u6BB5\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236",paraId:2,tocIndex:0},{value:"\u{1F6E1}\uFE0F \u6781\u81F4\u7684\u6027\u80FD: \u652F\u6301\u70B9\u5230\u70B9\u7684render\u6027\u80FD",paraId:2,tocIndex:0},{value:"\u{1F4DD} \u7C7B\u578B\u63D0\u793A: \u5F3A\u5927\u7684\u7C7B\u578B\u63D0\u793A",paraId:2,tocIndex:0},{value:"\u{1F680} \u8F7B\u91CF\u7EA7: \u96F6\u5916\u90E8\u4F9D\u8D56",paraId:2,tocIndex:0},{value:"./store.tsx",paraId:3,tocIndex:1},{value:`import { createStore } from 'react-secure-state';

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
`,paraId:8,tocIndex:3}]},51446:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]}}]);
