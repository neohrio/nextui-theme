import{j as r}from"./jsx-runtime-CS_Wz6c_.js";import{e as Ne}from"./index-Dy2Ak0OH.js";import{m as o,i as M,k as A,j as ke,n as Fe}from"./useDateFormatter-C-Agq8ec.js";import{T as s}from"./time-input-CvSuanAO.js";import{C as Re}from"./clock-circle-linear-CupG3Rcr.js";import{d as He}from"./date-input-field-Iv3zN5h-.js";import{b as Oe}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./usePress-BDQnv3aP.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./SSRProvider-CmMeNDTG.js";import"./mergeProps-VNdaC4-V.js";import"./openLink-BoTcy9x3.js";import"./context-DL1kNI1P.js";import"./useControlledState-B6nO32B9.js";import"./provider-context-DmA892L5.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./tv-DvaQJQTB.js";import"./utils-Dl_53iLP.js";import"./dom-DrLNPp_C.js";import"./clsx-IIdnr2mY.js";import"./functions-CkCEVJeD.js";import"./assertion-BI5aukJI.js";import"./getScrollParent-BrXadzMd.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DK3vkfEa.js";import"./focusSafely-Ch4YQihX.js";import"./filterDOMProps-CeZl_uWj.js";import"./useDescription-C_123zXK.js";import"./useFormReset-D4-J_9f3.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./useFormValidation-HuKicY76.js";import"./useEvent-C6x0jYue.js";import"./scrollIntoView-DWX27Gz-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFilter-B0P_PSWl.js";import"./useCollator-D24U6gvG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";const Wr={title:"Components/TimeInput",component:s,argTypes:{variant:{control:{type:"select"},options:["flat","faded","bordered","underlined"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},labelPlacement:{control:{type:"select"},options:["inside","outside","outside-left"]},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}}},a={label:"Event Time",...He.defaultVariants},n=e=>r.jsx(s,{...e}),We=e=>r.jsxs("form",{className:"flex flex-col gap-2",onSubmit:t=>{t.preventDefault(),alert(`Submitted: ${t.target.time.value}`)},children:[r.jsx(s,{...e,name:"time"}),r.jsx("button",{className:Oe({className:"max-w-fit"}),type:"submit",children:"Submit"})]}),qe=e=>r.jsxs("div",{className:"w-full max-w-xl flex flex-col items-end gap-4",children:[r.jsx(s,{...e,description:"inside"}),r.jsx(s,{...e,description:"outside",labelPlacement:"outside"}),r.jsx(s,{...e,description:"outside-left",labelPlacement:"outside-left"})]}),Ge=e=>{let[t,l]=Ne.useState(A("2024-04-08T18:45:22Z")),_e=ke({dateStyle:"short",timeStyle:"long"});return r.jsxs("div",{className:"w-full flex flex-row gap-2",children:[r.jsxs("div",{className:"w-full flex flex-col gap-y-2",children:[r.jsx(s,{...e,label:"Time (controlled)",value:t,onChange:l}),r.jsx("p",{className:"text-default-500 text-sm",children:t instanceof Fe?(t==null?void 0:t.toDate)&&_e.format(t.toDate())||t&&t.toString()||"--":""})]}),r.jsx(s,{...e,defaultValue:new o(11,45),label:"Time (uncontrolled)"})]})},ze=e=>r.jsxs("div",{className:"w-full max-w-xl flex flex-col items-end gap-4",children:[r.jsx(s,{...e,defaultValue:M("2022-11-07T00:45[America/Los_Angeles]"),labelPlacement:"outside"}),r.jsx(s,{...e,defaultValue:A("2021-11-07T07:45:00Z"),labelPlacement:"outside"})]}),Be=e=>{let[t,l]=Ne.useState(A("2021-04-07T18:45:22Z"));return r.jsxs("div",{className:"w-full max-w-xl flex flex-col items-start gap-4",children:[r.jsx(s,{...e,granularity:"hour",label:"Hour",value:t,onChange:l}),r.jsx(s,{...e,granularity:"minute",label:"Minute",value:t,onChange:l}),r.jsx(s,{...e,granularity:"second",label:"Second",value:t,onChange:l})]})},i={render:n,args:{...a}},m={render:We,args:{...a,isRequired:!0}},d={render:n,args:{...a,isDisabled:!0,defaultValue:new o(11,45)}},c={render:n,args:{...a,isReadOnly:!0,defaultValue:new o(11,45)}},u={render:n,args:{...a,label:null,"aria-label":"Event Time"}},p={render:n,args:{...a,description:"Please enter your meeting time"}},f={render:n,args:{...a,isInvalid:!0,errorMessage:"Please enter a valid time"}},g={render:n,args:{...a,isInvalid:!0,errorMessage:e=>{if(e.isInvalid)return"Please enter a valid date"}}},x={render:qe,args:{...a}},T={render:n,args:{...a,labelPlacement:"outside",startContent:r.jsx(Re,{className:"text-xl text-default-400 pointer-events-none flex-shrink-0"})}},b={render:n,args:{...a,labelPlacement:"outside",endContent:r.jsx(Re,{className:"text-xl text-default-400 pointer-events-none flex-shrink-0"})}},P={render:Ge,args:{...a,variant:"bordered"}},v={render:ze,args:{...a,label:"Event time",defaultValue:M("2022-11-07T00:45[America/Los_Angeles]")}},h={render:Be,args:{...a}},V={render:n,args:{...a,minValue:new o(9),defaultValue:new o(8)}},y={render:n,args:{...a,maxValue:new o(17),defaultValue:new o(18)}},S={render:n,args:{...a,label:"Meeting time",placeholderValue:new o(9)}},C={render:n,args:{...a,label:"Meeting time",hideTimeZone:!0,defaultValue:M("2022-11-07T10:45[America/Los_Angeles]")}},w={render:n,args:{...a,label:"Meeting time",hourCycle:24,defaultValue:M("2022-11-07T00:45[America/Los_Angeles]"),granularity:"minute"}},j={render:We,args:{...a,validate:e=>{if(!e)return"Please enter a time";if(e.hour<9)return"Please select a time at 9 A.M. or later"},label:"Time (9 A.M. or later)"}};var D,L,$;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...($=(L=i.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var Z,E,I;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var N,R,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: true,
    defaultValue: new Time(11, 45)
  }
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,k,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isReadOnly: true,
    defaultValue: new Time(11, 45)
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,O,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: null,
    "aria-label": "Event Time"
  }
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var G,z,B;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    description: "Please enter your meeting time"
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: "Please enter a valid time"
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: (value: ValidationResult) => {
      if (value.isInvalid) {
        return "Please enter a valid date";
      }
    }
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: LabelPlacementTemplate,
  args: {
    ...defaultProps
  }
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    labelPlacement: "outside",
    startContent: <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
  }
}`,...(se=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    labelPlacement: "outside",
    endContent: <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
  }
}`,...(ie=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var me,de,ce;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps,
    variant: "bordered"
  }
}`,...(ce=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,fe;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: TimeZonesTemplate,
  args: {
    ...defaultProps,
    label: "Event time",
    defaultValue: parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")
  }
}`,...(fe=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,xe,Te;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: GranularityTemplate,
  args: {
    ...defaultProps
  }
}`,...(Te=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var be,Pe,ve;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    minValue: new Time(9),
    defaultValue: new Time(8)
  }
}`,...(ve=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:ve.source}}};var he,Ve,ye;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    maxValue: new Time(17),
    defaultValue: new Time(18)
  }
}`,...(ye=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:ye.source}}};var Se,Ce,we;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Meeting time",
    placeholderValue: new Time(9)
  }
}`,...(we=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var je,Me,Ae;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Meeting time",
    hideTimeZone: true,
    defaultValue: parseZonedDateTime("2022-11-07T10:45[America/Los_Angeles]")
  }
}`,...(Ae=(Me=C.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var De,Le,$e;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Meeting time",
    hourCycle: 24,
    defaultValue: parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]"),
    granularity: "minute"
  }
}`,...($e=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Ze,Ee,Ie;j.parameters={...j.parameters,docs:{...(Ze=j.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    validate: value => {
      if (!value) {
        return "Please enter a time";
      }
      if (value.hour < 9) {
        return "Please select a time at 9 A.M. or later";
      }
    },
    label: "Time (9 A.M. or later)"
  }
}`,...(Ie=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};const _r=["Default","Required","Disabled","ReadOnly","WithoutLabel","WithDescription","WithErrorMessage","WithErrorMessageFunction","LabelPlacement","StartContent","EndContent","Controlled","TimeZones","Granularity","MinTimeValue","MaxTimeValue","PlaceholderValue","HideTimeZone","HourCycle","WithValidation"];export{P as Controlled,i as Default,d as Disabled,b as EndContent,h as Granularity,C as HideTimeZone,w as HourCycle,x as LabelPlacement,y as MaxTimeValue,V as MinTimeValue,S as PlaceholderValue,c as ReadOnly,m as Required,T as StartContent,v as TimeZones,p as WithDescription,f as WithErrorMessage,g as WithErrorMessageFunction,j as WithValidation,u as WithoutLabel,_r as __namedExportsOrder,Wr as default};
