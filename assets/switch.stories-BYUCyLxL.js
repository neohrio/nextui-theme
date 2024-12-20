import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as b}from"./index-Dy2Ak0OH.js";import{$ as Z}from"./VisuallyHidden-BWrRmN2P.js";import{u as ee}from"./index.esm-ChlDZzrW.js";import{S as o,t as se,u as re}from"./switch-Cj4gk7KZ.js";import{S as j,M as N}from"./moon-filled-HjQOvm7v.js";import{c as te}from"./clsx-IIdnr2mY.js";import{b as ae}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./index-BZiajwfa.js";import"./useHover-bWO3Z0KF.js";import"./useToggle-BOPzleDZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D4-J_9f3.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./useToggleState-CXdksZc3.js";import"./useControlledState-B6nO32B9.js";import"./provider-context-DmA892L5.js";import"./utils-Dl_53iLP.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./refs-DLrq_aXV.js";import"./assertion-BI5aukJI.js";import"./functions-CkCEVJeD.js";import"./variants-D625xmxh.js";const Me={title:"Components/Switch",component:o,argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},isDisabled:{control:{type:"boolean"}},disableAnimation:{control:{type:"boolean"}}}},t={...se.defaultVariants},oe=s=>{const[r,a]=b.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(o,{...s,classNames:{startContent:"text-white"},endContent:e.jsx(N,{}),isSelected:r,startContent:e.jsx(j,{}),onValueChange:a}),e.jsxs("p",{className:"text-default-500",children:["Selected: ",r?"true":"false"]})]})},ne=s=>{const[r,a]=b.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(o,{...s,isSelected:r,onValueChange:a}),e.jsxs("p",{className:"text-default-500",children:["Selected: ",r?"true":"false"]})]})},le=s=>{const[r,a]=b.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(o,{classNames:{base:te("inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",{"border-primary":r})},isSelected:r,size:"lg",onValueChange:a,...s,children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-base",children:"Enable early access"}),e.jsx("p",{className:"text-xs text-default-400",children:"Get access to new features before they are released."})]})}),e.jsxs("p",{className:"text-default-500",children:["Selected: ",r?"true":"false"]})]})},ce=s=>{const{Component:r,slots:a,isSelected:n,getBaseProps:S,getInputProps:l,getWrapperProps:Y}=re(s);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(r,{...S(),children:[e.jsx(Z,{children:e.jsx("input",{...l()})}),e.jsx("div",{...Y(),className:a.wrapper({class:["w-8 h-8","flex items-center justify-center","rounded-lg bg-default-100 hover:bg-default-200"]}),children:n?e.jsx(j,{}):e.jsx(N,{})})]}),e.jsxs("p",{className:"text-default-500 select-none",children:["Lights: ",n?"on":"off"]})]})},ie=s=>{const{register:r,formState:{errors:a},handleSubmit:n}=ee({defaultValues:{defaultTrue:!0,defaultFalse:!1,requiredField:!1}}),S=l=>{console.log(l),alert("Submitted value: "+JSON.stringify(l))};return e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:n(S),children:[e.jsx(o,{...s,...r("defaultTrue"),children:"By default this switch is true"}),e.jsx(o,{...s,...r("defaultFalse"),children:"By default this switch is false"}),e.jsx(o,{...s,...r("requiredField",{required:!0}),children:"This switch is required"}),a.requiredField&&e.jsx("span",{className:"text-danger",children:"This switch is required"}),e.jsx("button",{className:ae({class:"w-fit"}),type:"submit",children:"Submit"})]})},c={args:{...t}},i={args:{...t,isReadOnly:!0,defaultSelected:!0}},m={args:{...t,children:"Bluetooth"}},d={args:{...t,disableAnimation:!0}},p={args:{...t,size:"xl",thumbIcon:s=>s.isSelected?e.jsx(j,{className:s.className}):e.jsx(N,{className:s.className})}},u={render:oe,args:{...t,size:"xl"}},f={render:ie,args:{...t}},h={render:ne,args:{...t}},x={render:le,args:{...t}},g={render:ce,args:{...t}};var C,W,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var w,I,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isReadOnly: true,
    defaultSelected: true
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var P,F,v;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    children: "Bluetooth"
  }
}`,...(v=(F=m.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var R,k,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disableAnimation: true
  }
}`,...(H=(k=d.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var q,z,O;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: "xl",
    thumbIcon: (props: SwitchThumbIconProps) => props.isSelected ? <SunFilledIcon className={props.className} /> : <MoonFilledIcon className={props.className} />
  }
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var A,B,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: WithIconsTemplate,
  args: {
    ...defaultProps,
    size: "xl"
  }
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var V,$,E;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: WithReactHookFormTemplate,
  args: {
    ...defaultProps
  }
}`,...(E=($=f.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var L,M,_;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(_=(M=h.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: CustomWithClassNamesTemplate,
  args: {
    ...defaultProps
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: CustomWithHooksTemplate,
  args: {
    ...defaultProps
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const _e=["Default","IsReadOnly","WithLabel","DisableAnimation","WithThumbIcon","WithIcons","WithReactHookForm","Controlled","CustomWithClassNames","CustomWithHooks"];export{h as Controlled,x as CustomWithClassNames,g as CustomWithHooks,c as Default,d as DisableAnimation,i as IsReadOnly,u as WithIcons,m as WithLabel,f as WithReactHookForm,p as WithThumbIcon,_e as __namedExportsOrder,Me as default};
