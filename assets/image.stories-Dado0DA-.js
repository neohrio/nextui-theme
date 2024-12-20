import{j as c}from"./jsx-runtime-CS_Wz6c_.js";import{e as p}from"./index-Dy2Ak0OH.js";import{I as A,i as G}from"./image-DhdOd0Du.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BO-m7dRh.js";import"./index-BZiajwfa.js";import"./provider-context-DmA892L5.js";import"./utils-Dl_53iLP.js";import"./tv-DvaQJQTB.js";import"./dom-DrLNPp_C.js";import"./functions-CkCEVJeD.js";import"./clsx-IIdnr2mY.js";import"./assertion-BI5aukJI.js";const X={title:"Components/Image",component:A,argTypes:{radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},shadow:{control:{type:"select"},options:["none","sm","md","lg"]},isBlurred:{control:{type:"boolean"}},isZoomed:{control:{type:"boolean"}},disableAnimation:{control:{type:"boolean"}},showSkeleton:{control:{disable:!0}}},decorators:[s=>c.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:c.jsx(s,{})})]},e={...G.defaultVariants,src:"./images/local-image-1.jpeg",alt:"NextUI hero image",disableSkeleton:!0},D=s=>{const[E,H]=p.useState(!0);return p.useEffect(()=>{const M=s.disableSkeleton?500:2500,F=setTimeout(()=>{H(!1)},M);return()=>{clearTimeout(F)}},[]),c.jsx(A,{...s,isLoading:E})},a={args:{width:300,...e}},r={args:{...e,width:300,isBlurred:!0,src:"/images/local-image-small.jpg"}},o={args:{...e,width:300,isZoomed:!0,radius:"lg",src:"https://nextui.org/images/card-example-2.jpeg"}},t={args:{...e,width:300,isZoomed:!0,radius:"lg",shadow:"md",src:"/images/local-image-small.jpg"}},n={args:{...e,width:300,radius:"lg",src:"https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"}},i={render:D,args:{...e,width:300,radius:"lg",src:"https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",fallbackSrc:"/images/placeholder_300x450.png"}},l={render:D,args:{...e,width:300,height:450,radius:"lg",src:"https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1494790108377-be9c29b29330",disableSkeleton:!1}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    width: 300,
    ...defaultProps
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    width: 300,
    isBlurred: true,
    src: "/images/local-image-small.jpg"
    // src:
    //   "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,x,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    width: 300,
    isZoomed: true,
    radius: "lg",
    src: "https://nextui.org/images/card-example-2.jpeg"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,S,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    width: 300,
    isZoomed: true,
    radius: "lg",
    shadow: "md",
    src: "/images/local-image-small.jpg"
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,P,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    width: 300,
    radius: "lg",
    src: "https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
  }
}`,...(q=(P=n.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var B,L,Z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: LoadingTemplate,
  args: {
    ...defaultProps,
    width: 300,
    radius: "lg",
    src: "https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    fallbackSrc: "/images/placeholder_300x450.png"
  }
}`,...(Z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var T,I,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: LoadingTemplate,
  args: {
    ...defaultProps,
    width: 300,
    height: 450,
    radius: "lg",
    src: "https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    disableSkeleton: false
  }
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const $=["Default","Blurred","Zoomed","Shadow","AnimatedLoad","Fallback","Skeleton"];export{n as AnimatedLoad,r as Blurred,a as Default,i as Fallback,t as Shadow,l as Skeleton,o as Zoomed,$ as __namedExportsOrder,X as default};
