import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{A as E}from"./avatar-Bt8qBNc1.js";import{C as O,c as I}from"./chip-BM6qSHdk.js";import{C as D}from"./check-C46fs8df.js";import"./index-Dy2Ak0OH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./useFocusRing-BgM-8Y4a.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./index-BO-m7dRh.js";import"./index-BZiajwfa.js";import"./useHover-bWO3Z0KF.js";import"./provider-context-DmA892L5.js";import"./text-CWQU1A9l.js";import"./dom-DrLNPp_C.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";import"./assertion-BI5aukJI.js";import"./filter-dom-props-BPLFryJX.js";import"./clsx-IIdnr2mY.js";import"./utils-Dl_53iLP.js";import"./usePress-BDQnv3aP.js";import"./openLink-BoTcy9x3.js";import"./functions-CkCEVJeD.js";import"./close-filled-CY0RPngm.js";const pr={title:"Components/Chip",component:O,argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow","dot"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},isDisabled:{control:{type:"boolean"}}}},r={...I.defaultVariants,children:"Chip"},o={args:{...r}},a={args:{...r,startContent:e.jsx("span",{"aria-label":"celebration",className:"ml-1",role:"img",children:"🎉"})}},s={args:{...r,endContent:e.jsx("span",{"aria-label":"rocket",className:"mr-1",role:"img",children:"🚀"})}},t={args:{...r,onClose:()=>console.log("Close")}},n={args:{...r,endContent:e.jsx(D,{}),onClose:()=>console.log("Close")}},l={args:{...r,variant:"flat",color:"secondary",avatar:e.jsx(E,{name:"JW",src:"https://i.pravatar.cc/300?u=a042581f4e29026709d"})}},T=k=>e.jsx("div",{className:"w-20 border-danger-500 border-2",children:e.jsx(O,{...k})}),c={render:T,args:{...r,children:"Hello World!"}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    startContent: <span aria-label="celebration" className="ml-1" role="img">
        🎉
      </span>
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,f,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    endContent: <span aria-label="rocket" className="mr-1" role="img">
        🚀
      </span>
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,b,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    // eslint-disable-next-line
    onClose: () => console.log("Close")
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,S,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    endContent: <CheckIcon />,
    // eslint-disable-next-line
    onClose: () => console.log("Close")
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,w,H;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    avatar: <Avatar name="JW" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
  }
}`,...(H=(w=l.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var W,A,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: HiddenOverflowTemplate,
  args: {
    ...defaultProps,
    children: "Hello World!"
  }
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const mr=["Default","StartContent","EndContent","Closeable","CustomCloseIcon","WithAvatar","HiddenOverflow"];export{t as Closeable,n as CustomCloseIcon,o as Default,s as EndContent,c as HiddenOverflow,a as StartContent,l as WithAvatar,mr as __namedExportsOrder,pr as default};
