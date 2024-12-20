import{j as t}from"./jsx-runtime-CS_Wz6c_.js";import{e as d}from"./index-Dy2Ak0OH.js";import{L as n}from"./index-DSzU8rDo.js";import{S as c,s as u}from"./scroll-shadow-9GdmPEy3.js";import{b as p}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-CkCEVJeD.js";import"./utils-Dl_53iLP.js";import"./tv-DvaQJQTB.js";import"./dom-DrLNPp_C.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";const T={title:"Components/ScrollShadow",component:c,argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},offset:{control:{type:"number"}},visibility:{control:{type:"select"},options:["auto","top","bottom","both","left","right"]},children:{table:{disable:!0}}},decorators:[o=>t.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:t.jsx(o,{})})]},r={...u.defaultVariants,visible:"auto",className:"w-[300px] h-[400px]",children:t.jsx(n,{count:10})},a=o=>t.jsx(c,{...o}),j=({children:o,...m})=>{const[l,i]=d.useState("top"),[s,x]=d.useState("vertical"),h={vertical:["top","bottom","both"],horizontal:["left","right","both"]},f=["vertical","horizontal"];return t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(c,{...m,className:s==="horizontal"?"max-w-[300px] max-h-[400px]":m.className,orientation:s,visible:l,children:s==="horizontal"?t.jsx("div",{className:"w-[800px]",children:o}):o}),t.jsxs("p",{className:"text-default-500",children:["Orientation: ",s]}),t.jsxs("p",{className:"text-default-500",children:["Visible state: ",l]}),t.jsx("div",{className:"flex mt-2 gap-2",children:f.map(e=>t.jsx("button",{className:p({color:s===e?"primary":"default"}),onClick:()=>{i(e==="horizontal"?"left":"top"),x(e)},children:e},e))}),t.jsx("div",{className:"flex mt-2 gap-2",children:h[s].map(e=>t.jsx("button",{className:p({color:l===e?"primary":"default"}),onClick:()=>i(e),children:e},e))})]})},V={render:a,args:{...r}},_={render:j,args:{...r}},k={render:a,args:{...r,hideScrollBar:!0}},D={render:a,args:{...r,size:100}},E={render:a,args:{...r,orientation:"horizontal",className:"max-w-[400px] max-h-[500px]",children:t.jsxs("div",{className:"w-[800px]",children:[t.jsx(n,{count:10}),","]})}},L={render:a,args:{...r,offset:100,orientation:"horizontal",className:"max-w-[400px] max-h-[500px]",children:t.jsxs("div",{className:"w-[800px]",children:[t.jsx(n,{count:10}),","]})}},P=["Default","Controlled","HideScrollBar","CustomShadowSize","HorizontalOrientation","ShadowOffset"];export{_ as Controlled,D as CustomShadowSize,V as Default,k as HideScrollBar,E as HorizontalOrientation,L as ShadowOffset,P as __namedExportsOrder,T as default};
