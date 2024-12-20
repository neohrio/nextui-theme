import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as y}from"./index-Dy2Ak0OH.js";import{$ as Oe}from"./VisuallyHidden-BWrRmN2P.js";import{R as l,r as Ie,a as o,u as Te,b as We}from"./radio-group-_HJbljwI.js";import{F as Ae}from"./form-B92f7kXN.js";import{b as A}from"./button-DeIVZFNz.js";import{c as W}from"./clsx-IIdnr2mY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./useFocusRing-BgM-8Y4a.js";import"./useHover-bWO3Z0KF.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D4-J_9f3.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-HuKicY76.js";import"./provider-context-DmA892L5.js";import"./assertion-BI5aukJI.js";import"./dom-DrLNPp_C.js";import"./console-B9aq-5md.js";import"./utils-Dl_53iLP.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./tv-DvaQJQTB.js";import"./useControlledState-B6nO32B9.js";import"./FocusScope-DK3vkfEa.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./context-DL1kNI1P.js";import"./classes-D2PKZTJC.js";import"./filter-dom-props-BPLFryJX.js";import"./text-CWQU1A9l.js";import"./variants-D625xmxh.js";const Cr={title:"Components/RadioGroup",component:l,onChange:{action:"changed"},argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}}},a={...Ie.defaultVariants,label:"Options"},i=r=>{const s=r.description?{a:{description:"Description for Option A"},b:{description:"Description for Option B"},c:{description:"Description for Option C"},d:{description:"Description for Option D"}}:{a:{},b:{},c:{},d:{}},t=e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"A",...s.a,children:"Option A"}),e.jsx(o,{value:"B",...s.b,children:"Option B"}),e.jsx(o,{value:"C",...s.c,children:"Option C"}),e.jsx(o,{value:"D",...s.d,children:"Option D"})]});return r.isRequired?e.jsxs("form",{className:"flex flex-col items-start gap-2",onSubmit:n=>{alert(`Submitted value: ${n.target.sample.value}`),n.preventDefault()},children:[e.jsx(l,{...r,name:"sample",children:t}),e.jsx("button",{className:A({color:"primary"}),type:"submit",children:"Submit"})]}):e.jsx(l,{...r,children:t})},Ve=r=>{const[s,t]=y.useState(!0),n=r.description?{a:{description:"Description for Option A"},b:{description:"Description for Option B"},c:{description:"Description for Option C"},d:{description:"Description for Option D"}}:{a:{},b:{},c:{},d:{}},p=e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"A",...n.a,children:"Option A (Invalid)"}),e.jsx(o,{value:"B",...n.b,children:"Option B (Valid)"}),e.jsx(o,{value:"C",...n.c,children:"Option C (Valid)"}),e.jsx(o,{value:"D",...n.d,children:"Option D (Invalid)"})]}),O=["C","B"];return r.isRequired?e.jsxs("form",{className:"flex flex-col items-start gap-2",onSubmit:d=>{d.preventDefault(),alert("Submitted!")},children:[e.jsx(l,{...r,isInvalid:s,onValueChange:d=>t(!O.includes(d)),children:p}),e.jsx("button",{className:A({color:"primary"}),type:"submit",children:"Submit"})]}):e.jsx(l,{...r,children:p})},qe=r=>{const[s,t]=y.useState("london");return y.useEffect(()=>{console.log("isSelected:",s)},[s]),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(l,{label:"Select city",value:s,onValueChange:t,...r,children:[e.jsx(o,{value:"buenos-aires",children:"Buenos Aires"}),e.jsx(o,{value:"sydney",children:"Sydney"}),e.jsx(o,{value:"london",children:"London"}),e.jsx(o,{value:"tokyo",children:"Tokyo"})]}),e.jsxs("p",{className:"text-default-500",children:["Selected: ",s]})]})},Ee=r=>{const[s,t]=y.useState({}),n=p=>{p.preventDefault(),t({option:"You must choose an option."})};return delete r.isInvalid,e.jsxs(Ae,{className:"flex flex-col items-start gap-2",validationErrors:s,onSubmit:n,children:[e.jsxs(l,{...r,label:"Choose one option",name:"option",children:[e.jsx(o,{value:"option1",children:"Option 1"}),e.jsx(o,{value:"option2",children:"Option 2"}),e.jsx(o,{value:"option3",children:"Option 3"})]}),e.jsx("button",{className:A({color:"primary"}),type:"submit",children:"Submit"})]})},c={render:i,args:{...a}},u={render:i,args:{...a,isDisabled:!0}},m={render:i,args:{...a,defaultValue:"C"}},g={render:i,args:{...a,isRequired:!0}},h={render:i,args:{...a,description:"Please select an option"}},f={render:Ve,args:{...a,isRequired:!0,description:"Please select an option"}},v={render:i,args:{...a,isRequired:!0,isInvalid:!0,errorMessage:"The selected option is invalid"}},x={render:i,args:{...a,isRequired:!0,errorMessage:r=>{if(r.validationDetails.valueMissing)return"Please select an option"}}},b={render:i,args:{...a,isRequired:!0,description:"Please select an option",validate:r=>{if(r==="A")return"Option A is not allowed"}}},j={render:Ee,args:{...a}},C={render:i,args:{...a,orientation:"horizontal"}},R={render:i,args:{...a,disableAnimation:!0}},P={render:qe,args:{...a}},I=r=>{const{children:s,...t}=r,{groupState:n}=Te(),p=n.selectedValue===t.value;return e.jsx(o,{...t,classNames:{base:W("inline-flex bg-content1 hover:bg-content2 items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",{"border-primary":p})},children:s})},S=()=>e.jsxs(l,{label:"Plans",children:[e.jsx(I,{description:"Up to 20 items",value:"free",children:"Free"}),e.jsx(I,{description:"Unlimited items. $10 per month.",value:"pro",children:"Pro"}),e.jsx(I,{description:"24/7 support. Contact us for pricing.",value:"enterprise",children:"Enterprise"})]}),T=r=>{const{Component:s,children:t,isSelected:n,description:p,getBaseProps:O,getWrapperProps:d,getInputProps:Pe,getLabelProps:Se,getLabelWrapperProps:De,getControlProps:ye}=We(r);return e.jsxs(s,{...O(),className:W("group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",{"border-primary":n}),children:[e.jsx(Oe,{children:e.jsx("input",{...Pe()})}),e.jsx("span",{...d(),children:e.jsx("span",{...ye()})}),e.jsxs("div",{...De(),children:[t&&e.jsx("span",{...Se(),children:t}),p&&e.jsx("span",{className:W("text-sm text-foreground opacity-70"),children:p})]})]})},D=()=>e.jsxs(l,{label:"Plans",children:[e.jsx(T,{description:"Up to 20 items",value:"free",children:"Free"}),e.jsx(T,{description:"Unlimited items. $10 per month.",value:"pro",children:"Pro"}),e.jsx(T,{description:"24/7 support. Contact us for pricing.",value:"enterprise",children:"Enterprise"})]});var V,q,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var N,w,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: true
  }
}`,...(B=(w=u.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,M,$;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    defaultValue: "C"
  }
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var U,G,k;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isRequired: true
  }
}`,...(k=(G=g.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var z,L,_;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    description: "Please select an option"
  }
}`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var H,Y,J;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: InvalidTemplate,
  args: {
    ...defaultProps,
    isRequired: true,
    description: "Please select an option"
  }
}`,...(J=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isRequired: true,
    isInvalid: true,
    errorMessage: "The selected option is invalid"
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isRequired: true,
    errorMessage: (value: ValidationResult) => {
      if (value.validationDetails.valueMissing) {
        return "Please select an option";
      }
    }
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,oe,te;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isRequired: true,
    description: "Please select an option",
    validate: (value: string) => {
      if (value === "A") {
        return "Option A is not allowed";
      }
    }
  }
}`,...(te=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,ae,ie;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: ServerValidationTemplate,
  args: {
    ...defaultProps
  }
}`,...(ie=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var pe,le,de;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    orientation: "horizontal"
  }
}`,...(de=(le=C.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,me;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    disableAnimation: true
  }
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,he,fe;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(fe=(he=P.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,xe,be;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <RadioGroup label="Plans">
      <CustomRadio description="Up to 20 items" value="free">
        Free
      </CustomRadio>
      <CustomRadio description="Unlimited items. $10 per month." value="pro">
        Pro
      </CustomRadio>
      <CustomRadio description="24/7 support. Contact us for pricing." value="enterprise">
        Enterprise
      </CustomRadio>
    </RadioGroup>;
}`,...(be=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var je,Ce,Re;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <RadioGroup label="Plans">
      <RadioCard description="Up to 20 items" value="free">
        Free
      </RadioCard>
      <RadioCard description="Unlimited items. $10 per month." value="pro">
        Pro
      </RadioCard>
      <RadioCard description="24/7 support. Contact us for pricing." value="enterprise">
        Enterprise
      </RadioCard>
    </RadioGroup>;
}`,...(Re=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};const Rr=["Default","IsDisabled","DefaultChecked","IsRequired","WithDescription","IsInvalid","WithErrorMessage","WithErrorMessageFunction","WithValidation","WithServerValidation","Row","DisableAnimation","Controlled","CustomWithClassNames","CustomWithHooks"];export{P as Controlled,S as CustomWithClassNames,D as CustomWithHooks,c as Default,m as DefaultChecked,R as DisableAnimation,u as IsDisabled,f as IsInvalid,g as IsRequired,C as Row,h as WithDescription,v as WithErrorMessage,x as WithErrorMessageFunction,j as WithServerValidation,b as WithValidation,Rr as __namedExportsOrder,Cr as default};
