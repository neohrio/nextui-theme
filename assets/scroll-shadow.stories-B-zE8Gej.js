import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as S}from"./index-Dy2Ak0OH.js";import{L as u}from"./index-DSzU8rDo.js";import{S as h,s as A}from"./scroll-shadow-9GdmPEy3.js";import{b as g}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-CkCEVJeD.js";import"./utils-Dl_53iLP.js";import"./tv-DvaQJQTB.js";import"./dom-DrLNPp_C.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";const ee={title:"Components/ScrollShadow",component:h,argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},offset:{control:{type:"number"}},visibility:{control:{type:"select"},options:["auto","top","bottom","both","left","right"]},children:{table:{disable:!0}}},decorators:[a=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx(a,{})})]},s={...A.defaultVariants,visible:"auto",className:"w-[300px] h-[400px]",children:e.jsx(u,{count:10})},t=a=>e.jsx(h,{...a}),F=({children:a,...f})=>{const[d,x]=S.useState("top"),[o,E]=S.useState("vertical"),R={vertical:["top","bottom","both"],horizontal:["left","right","both"]},q=["vertical","horizontal"];return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(h,{...f,className:o==="horizontal"?"max-w-[300px] max-h-[400px]":f.className,orientation:o,visible:d,children:o==="horizontal"?e.jsx("div",{className:"w-[800px]",children:a}):a}),e.jsxs("p",{className:"text-default-500",children:["Orientation: ",o]}),e.jsxs("p",{className:"text-default-500",children:["Visible state: ",d]}),e.jsx("div",{className:"flex mt-2 gap-2",children:q.map(r=>e.jsx("button",{className:g({color:o===r?"primary":"default"}),onClick:()=>{x(r==="horizontal"?"left":"top"),E(r)},children:r},r))}),e.jsx("div",{className:"flex mt-2 gap-2",children:R[o].map(r=>e.jsx("button",{className:g({color:d===r?"primary":"default"}),onClick:()=>x(r),children:r},r))})]})},n={render:t,args:{...s}},l={render:F,args:{...s}},i={render:t,args:{...s,hideScrollBar:!0}},c={render:t,args:{...s,size:100}},m={render:t,args:{...s,orientation:"horizontal",className:"max-w-[400px] max-h-[500px]",children:e.jsxs("div",{className:"w-[800px]",children:[e.jsx(u,{count:10}),","]})}},p={render:t,args:{...s,offset:100,orientation:"horizontal",className:"max-w-[400px] max-h-[500px]",children:e.jsxs("div",{className:"w-[800px]",children:[e.jsx(u,{count:10}),","]})}};var j,w,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,b,z;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(z=(b=l.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var C,T,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    hideScrollBar: true
  }
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var O,P,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    size: 100
  }
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var H,L,V;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    orientation: "horizontal",
    className: "max-w-[400px] max-h-[500px]",
    children: <div className="w-[800px]">
        <Lorem count={10} />,
      </div>
  }
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,k,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    offset: 100,
    orientation: "horizontal",
    className: "max-w-[400px] max-h-[500px]",
    children: <div className="w-[800px]">
        <Lorem count={10} />,
      </div>
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const re=["Default","Controlled","HideScrollBar","CustomShadowSize","HorizontalOrientation","ShadowOffset"];export{l as Controlled,c as CustomShadowSize,n as Default,i as HideScrollBar,m as HorizontalOrientation,p as ShadowOffset,re as __namedExportsOrder,ee as default};
