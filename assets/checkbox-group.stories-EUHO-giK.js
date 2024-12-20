import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as D}from"./index-Dy2Ak0OH.js";import{c as fe,C as r}from"./checkbox-Dsg87IPg.js";import{C as i}from"./checkbox-group-CCh6vnXv.js";import{F as xe}from"./form-B92f7kXN.js";import{b as be}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useToggleState-CXdksZc3.js";import"./useControlledState-B6nO32B9.js";import"./index-BZiajwfa.js";import"./useHover-bWO3Z0KF.js";import"./useFocusRing-BgM-8Y4a.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./SSRProvider-CmMeNDTG.js";import"./mergeProps-VNdaC4-V.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./tv-DvaQJQTB.js";import"./useFormValidation-HuKicY76.js";import"./usePress-BDQnv3aP.js";import"./openLink-BoTcy9x3.js";import"./useToggle-BOPzleDZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D4-J_9f3.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useKeyboard-A8_doyNT.js";import"./provider-context-DmA892L5.js";import"./classes-D2PKZTJC.js";import"./refs-DLrq_aXV.js";import"./assertion-BI5aukJI.js";import"./console-B9aq-5md.js";import"./text-CWQU1A9l.js";import"./clsx-IIdnr2mY.js";import"./utils-Dl_53iLP.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./dom-DrLNPp_C.js";import"./filter-dom-props-BPLFryJX.js";import"./variants-D625xmxh.js";const mr={title:"Components/CheckboxGroup",component:i,argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},lineThrough:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}}},t={...fe.defaultVariants},o=s=>e.jsxs(i,{...s,children:[e.jsx(r,{value:"buenos-aires",children:"Buenos Aires"}),e.jsx(r,{value:"sydney",children:"Sydney"}),e.jsx(r,{value:"san-francisco",children:"San Francisco"}),e.jsx(r,{value:"london",children:"London"}),e.jsx(r,{value:"tokyo",children:"Tokyo"})]}),ye=s=>{const[a,n]=D.useState(!0);return e.jsx(e.Fragment,{children:e.jsxs(i,{...s,isRequired:!0,description:"Select the cities you want to visit",isInvalid:a,label:"Select cities",onValueChange:l=>{n(l.length<1)},children:[e.jsx(r,{value:"buenos-aires",children:"Buenos Aires"}),e.jsx(r,{value:"sydney",children:"Sydney"}),e.jsx(r,{value:"san-francisco",children:"San Francisco"}),e.jsx(r,{value:"london",children:"London"}),e.jsx(r,{value:"tokyo",children:"Tokyo"})]})})},k=s=>e.jsxs("form",{className:"flex flex-col items-start gap-2",onSubmit:a=>{const l=new FormData(a.currentTarget).getAll("favorite-cities");alert(`Submitted values: ${l.join(", ")}`),a.preventDefault()},children:[e.jsxs(i,{...s,label:"Select cities",name:"favorite-cities",children:[e.jsx(r,{value:"buenos-aires",children:"Buenos Aires"}),e.jsx(r,{value:"sydney",children:"Sydney"}),e.jsx(r,{value:"san-francisco",children:"San Francisco"}),e.jsx(r,{value:"london",children:"London"}),e.jsx(r,{value:"tokyo",children:"Tokyo"})]}),e.jsx("button",{className:be({color:"primary"}),type:"submit",children:"Submit"})]}),je=s=>{const[a,n]=D.useState(["buenos-aires"]);return D.useEffect(()=>{console.log("Checkbox ",a)},[a]),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(i,{...s,label:"Select cities",value:a,onValueChange:n,children:[e.jsx(r,{value:"buenos-aires",children:"Buenos Aires"}),e.jsx(r,{value:"sydney",children:"Sydney"}),e.jsx(r,{value:"san-francisco",children:"San Francisco"}),e.jsx(r,{value:"london",children:"London"}),e.jsx(r,{value:"tokyo",children:"Tokyo"})]}),e.jsxs("p",{className:"text-default-500",children:["Selected: ",a.join(", ")]})]})},Te=s=>{const[a,n]=D.useState({}),l=async Se=>{Se.preventDefault(),n({terms:"Please select a valid animal."})};return e.jsxs(xe,{className:"flex flex-col items-start gap-2",validationErrors:a,onSubmit:l,children:[e.jsxs(i,{...s,label:"Agree to the following",name:"terms",validationBehavior:"native",children:[e.jsx(r,{value:"terms",children:"Terms and conditions"}),e.jsx(r,{value:"cookies",children:"Cookies"}),e.jsx(r,{value:"privacy",children:"Privacy policy"})]}),e.jsx("button",{className:be({color:"primary"}),type:"submit",children:"Submit"})]})},c={render:o,args:{...t}},d={render:o,args:{label:"Select cities"}},u={render:o,args:{...t,label:"Select cities",defaultValue:["buenos-aires","london"]}},m={render:je,args:{...t}},p={render:o,args:{label:"Select cities",orientation:"horizontal"}},g={render:o,args:{label:"Select cities",isDisabled:!0}},h={render:o,args:{label:"Select cities",lineThrough:!0}},v={render:o,args:{...t,description:"Select the cities you want to visit"}},b={render:ye,args:{...t}},S={render:o,args:{...t,isInvalid:!0,errorMessage:"The selected cities cannot be visited at the same time"}},f={render:k,args:{...t,isRequired:!0,errorMessage:s=>{if(s.validationDetails.valueMissing)return"At least one option must be selected"}}},x={render:k,args:{...t,description:"Please select at least 2 options",validate:s=>s.length<2?"You must select at least 2 options":null}},y={render:Te,args:{...t}},j={render:o,args:{label:"Select cities",disableAnimation:!0}},T={render:k,args:{...t,isRequired:!0}};var C,I,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var F,V,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities"
  }
}`,...(A=(V=d.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var W,E,M;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Select cities",
    defaultValue: ["buenos-aires", "london"]
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,L,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var w,B,N;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    orientation: "horizontal"
  }
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var z,G,_;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    isDisabled: true
  }
}`,...(_=(G=g.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var H,Y,O;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    lineThrough: true
  }
}`,...(O=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var $,J,K;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    description: "Select the cities you want to visit"
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: InvalidTemplate,
  args: {
    ...defaultProps
  }
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,re;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: "The selected cities cannot be visited at the same time"
  }
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,ae,te;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true,
    errorMessage: (value: ValidationResult) => {
      if (value.validationDetails.valueMissing) {
        return "At least one option must be selected";
      }
    }
  }
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    description: "Please select at least 2 options",
    validate: (value: string[]) => {
      if (value.length < 2) {
        return "You must select at least 2 options";
      }
      return null;
    }
  }
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: ServerValidationTemplate,
  args: {
    ...defaultProps
  }
}`,...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    disableAnimation: true
  }
}`,...(pe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,ve;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true
  }
}`,...(ve=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const pr=["Default","WithLabel","DefaultValue","Controlled","Horizontal","IsDisabled","LineThrough","WithDescription","IsInvalid","WithErrorMessage","WithErrorMessageFunction","WithValidation","WithServerValidation","DisableAnimation","IsRequired"];export{m as Controlled,c as Default,u as DefaultValue,j as DisableAnimation,p as Horizontal,g as IsDisabled,b as IsInvalid,T as IsRequired,h as LineThrough,v as WithDescription,S as WithErrorMessage,f as WithErrorMessageFunction,d as WithLabel,y as WithServerValidation,x as WithValidation,pr as __namedExportsOrder,mr as default};
