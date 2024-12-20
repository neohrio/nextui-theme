import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as d,r as fe}from"./index-Dy2Ak0OH.js";import{u as xe}from"./index.esm-ChlDZzrW.js";import{C as m,c as Se}from"./checkbox-Dsg87IPg.js";import{F as be}from"./form-B92f7kXN.js";import{C as he}from"./close-C3ZMc2qG.js";import{b as T}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useToggleState-CXdksZc3.js";import"./useControlledState-B6nO32B9.js";import"./index-BZiajwfa.js";import"./useHover-bWO3Z0KF.js";import"./useFocusRing-BgM-8Y4a.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./SSRProvider-CmMeNDTG.js";import"./mergeProps-VNdaC4-V.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./tv-DvaQJQTB.js";import"./useFormValidation-HuKicY76.js";import"./usePress-BDQnv3aP.js";import"./openLink-BoTcy9x3.js";import"./useToggle-BOPzleDZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D4-J_9f3.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useKeyboard-A8_doyNT.js";import"./provider-context-DmA892L5.js";import"./classes-D2PKZTJC.js";import"./refs-DLrq_aXV.js";import"./assertion-BI5aukJI.js";import"./console-B9aq-5md.js";import"./text-CWQU1A9l.js";import"./clsx-IIdnr2mY.js";import"./utils-Dl_53iLP.js";import"./variants-D625xmxh.js";const mr={title:"Components/Checkbox",component:m,argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},lineThrough:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}}},t={...Se.defaultVariants,children:"Option"},Ce=o=>{const[r,a]=d.useState(!0);return d.useEffect(()=>{console.log("Checkbox ",r)},[r]),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(m,{isSelected:r,onValueChange:a,...o,children:"Subscribe (controlled)"}),e.jsxs("p",{className:"text-default-500",children:["Selected: ",r?"true":"false"]}),e.jsx("button",{onClick:()=>a(!r),children:"Toggle"})]})},je=o=>e.jsxs("form",{className:"flex flex-col items-start gap-2",onSubmit:r=>{r.preventDefault();const a=r.target.check;a.checked?alert(`Submitted value: ${a.value}`):alert("Checkbox is not checked")},children:[e.jsx(m,{name:"check",value:"checked",...o,children:"Check"}),e.jsx("button",{className:T({color:"primary"}),type:"submit",children:"Submit"})]}),ve=o=>{const r=["Apple","Banana","Orange","Mango"],[a,s]=d.useState([]),c=n=>a.some(l=>l===n),i=n=>{s([n])};return e.jsxs("div",{className:"text-white flex flex-col gap-2",children:[e.jsx("h2",{children:"List of Fruits"}),r.map((n,l)=>fe.createElement(m,{...o,key:l,className:"text-white",color:"primary",isSelected:c(n),onValueChange:()=>i(n)},n," ",c(n)?"/ state: true":"/ state: false"))]})},ke=o=>{const{register:r,formState:{errors:a},handleSubmit:s}=xe(),c=i=>{console.log(i),alert("Submitted value: "+i.example)};return e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:s(c),children:[e.jsx(m,{...o,...r("example",{required:!0})}),a.example&&e.jsx("span",{className:"text-danger",children:"This field is required"}),e.jsx("button",{className:T({class:"w-fit"}),type:"submit",children:"Submit"})]})},Ie=o=>{const[r,a]=d.useState(null),[s,c]=d.useState(void 0),i=n=>{n.preventDefault();const l=Object.fromEntries(new FormData(n.currentTarget));if(l.terms!=="true"){c({terms:"You must agree to the terms and conditions"});return}c(void 0),a(l)};return e.jsxs(be,{validationBehavior:"native",validationErrors:s,onSubmit:i,children:[e.jsx(m,{isRequired:!0,classNames:{label:"text-small"},isInvalid:!!(s!=null&&s.terms),name:"terms",validationBehavior:"aria",value:"true",onValueChange:()=>c(void 0),...o,children:"I agree to the terms and conditions"}),(s==null?void 0:s.terms)&&e.jsx("span",{className:"text-danger text-small",children:s.terms}),e.jsx("button",{className:T({class:"w-fit"}),type:"submit",children:"Submit"}),r&&e.jsxs("div",{className:"text-small text-default-500 mt-4",children:["Submitted data: ",e.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})},p={args:{...t}},u={args:{...t,isDisabled:!0}},g={args:{...t,defaultSelected:!0}},h={args:{...t,icon:e.jsx(he,{})}},f={render:ve,args:{...t}},x={render:ke,args:{...t}},S={args:{...t,icon:o=>e.jsx(he,{...o})}},b={args:{...t,isSelected:!0}},C={args:{...t,isIndeterminate:!0}},j={args:{...t,lineThrough:!0}},v={args:{...t,disableAnimation:!0}},k={render:Ce,args:{...t}},I={render:je,args:{...t,isRequired:!0}},y={render:Ie,args:{...t}};var F,N,P;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var D,R,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isDisabled: true
  }
}`,...(w=(R=u.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var E,W,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    defaultSelected: true
  }
}`,...(q=(W=g.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var A,O,V;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    icon: <CloseIcon />
  }
}`,...(V=(O=h.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var B,G,H;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: GroupTemplate,
  args: {
    ...defaultProps
  }
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,_,z;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: WithReactHookFormTemplate,
  args: {
    ...defaultProps
  }
}`,...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,M,Y;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    // eslint-disable-next-line react/display-name
    icon: (props: CheckboxIconProps) => <CloseIcon {...props} />
  }
}`,...(Y=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var $,K,Q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isSelected: true
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isIndeterminate: true
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    lineThrough: true
  }
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,oe,ae;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disableAnimation: true
  }
}`,...(ae=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,ce,ie;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(ie=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,me,de;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true
  }
}`,...(de=(me=I.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ue,ge;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: WithFormTemplate,
  args: {
    ...defaultProps
  }
}`,...(ge=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const dr=["Default","IsDisabled","DefaultSelected","CustomIconNode","Group","WithReactHookForm","CustomIconFunction","AlwaysSelected","IsIndeterminate","LineThrough","DisableAnimation","Controlled","Required","WithForm"];export{b as AlwaysSelected,k as Controlled,S as CustomIconFunction,h as CustomIconNode,p as Default,g as DefaultSelected,v as DisableAnimation,f as Group,u as IsDisabled,C as IsIndeterminate,j as LineThrough,I as Required,y as WithForm,x as WithReactHookForm,dr as __namedExportsOrder,mr as default};
