import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as ve}from"./index-Dy2Ak0OH.js";import{T as n}from"./textarea-DjDzUxZm.js";import{F as Ne}from"./form-B92f7kXN.js";import{i as ye}from"./use-input-c32X4TX1.js";import{P as Se,S as Ce}from"./plus-BydWFKTp.js";import{b as be}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./utils-Dl_53iLP.js";import"./assertion-BI5aukJI.js";import"./close-filled-CY0RPngm.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./tv-DvaQJQTB.js";import"./provider-context-DmA892L5.js";import"./index-BZiajwfa.js";import"./useFocusRing-BgM-8Y4a.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./useHover-bWO3Z0KF.js";import"./usePress-BDQnv3aP.js";import"./openLink-BoTcy9x3.js";import"./useControlledState-B6nO32B9.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D4-J_9f3.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-HuKicY76.js";import"./classes-D2PKZTJC.js";import"./dom-DrLNPp_C.js";import"./text-CWQU1A9l.js";import"./filter-dom-props-BPLFryJX.js";import"./clsx-IIdnr2mY.js";import"./functions-CkCEVJeD.js";import"./variants-D625xmxh.js";const hr={title:"Components/Textarea",component:n,argTypes:{variant:{control:{type:"select"},options:["flat","faded","bordered","underlined"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},labelPlacement:{control:{type:"select"},options:["inside","outside","outside-left"]},disableAutosize:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}},decorators:[r=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx(r,{})})]},s={...ye.defaultVariants,disableAutosize:!1,label:"Description",placeholder:"Enter your description"},t=r=>e.jsx("div",{className:"w-full max-w-[440px]",children:e.jsx(n,{...r})}),je=r=>{const[a,N]=ve.useState("");return e.jsxs("div",{className:"w-full  flex-col gap-2 max-w-[440px]",children:[e.jsx(n,{...r,value:a,onValueChange:N}),e.jsxs("p",{className:"text-default-500 text-small",children:["Textarea value: ",a]})]})},Me=r=>e.jsxs("div",{className:"w-full max-w-xl flex flex-row gap-4",children:[e.jsx(n,{...r,description:"Default minRows is 3"}),e.jsx(n,{...r,description:"minRows is 5",minRows:5}),e.jsx(n,{...r,description:"minRows is 10",minRows:10})]}),Te=r=>e.jsxs("div",{className:"w-full max-w-xl flex flex-row gap-4",children:[e.jsx(n,{...r,description:"Default maxRows is 8"}),e.jsx(n,{...r,description:"maxRows is 5",maxRows:5}),e.jsx(n,{...r,description:"maxRows is 3",maxRows:3})]}),y=r=>e.jsxs("form",{className:"w-full max-w-xl flex flex-row items-end gap-4",onSubmit:a=>{alert(`Submitted value: ${a.target.textarea.value}`),a.preventDefault()},children:[e.jsx("div",{className:"w-full max-w-[440px]",children:e.jsx(n,{name:"textarea",...r})}),e.jsx("button",{className:be({color:"primary"}),type:"submit",children:"Submit"})]}),i={render:t,args:{...s}},l={render:t,args:{...s,minRows:1,label:null,classNames:{input:"py-1"},"aria-label":"Description",placeholder:"Enter your description",variant:"bordered",radius:"full"}},o={render:y,args:{...s,isRequired:!0}},c={render:t,args:{...s,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",variant:"faded",isDisabled:!0}},m={render:t,args:{...s,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",variant:"bordered",isReadOnly:!0}},u={render:t,args:{...s,startContent:e.jsx(Se,{className:"text-xl"})}},d={render:t,args:{...s,minRows:1,label:null,endContent:e.jsx("div",{className:"p-1",children:e.jsx(Ce,{className:"text-xl"})}),classNames:{input:"py-1"},"aria-label":"Description",placeholder:"Enter your description",variant:"bordered",radius:"full"}},Pe=r=>{const[a,N]=ve.useState({}),we=Re=>{Re.preventDefault(),N({comment:"Please provide a valid comment."})};return e.jsxs(Ne,{className:"flex flex-col items-start gap-2",validationErrors:a,onSubmit:we,children:[e.jsx(n,{...r,label:"Comment",name:"comment"}),e.jsx("button",{className:be({color:"primary"}),type:"submit",children:"Submit"})]})},p={render:je,args:{...s}},g={render:Me,args:{...s}},x={render:Te,args:{...s,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec"}},f={render:t,args:{...s,IsInvalid:!0,errorMessage:"Please enter a valid description"}},h={render:y,args:{...s,isRequired:!0,minLength:"10",maxLength:"",label:"Comment",placeholder:"Enter your comment (10-100 characters)",errorMessage:r=>{if(r.validationDetails.tooLong)return"Comment is too short. Min 10 characters.";if(r.validationDetails.tooShort)return"Comment is too long. Max 100 characters.";if(r.validationDetails.valueMissing)return"Comment is required"}}},v={render:y,args:{...s,validate:r=>{if(r.length<10)return"Comment is too short. Min 10 characters.";if(r.length>100)return"Comment is too long. Max 100 characters."},isRequired:!0,label:"Comment",placeholder:"Enter your comment (10-100 characters)"}},b={render:Pe,args:{...s}},w={render:t,args:{...s,isInvalid:!0,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",errorMessage:"Please enter a valid description"}},R={render:t,args:{...s,placeholder:"Enter your description",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",onClear:()=>console.log("textarea cleared")}};var S,C,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var M,T,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    minRows: 1,
    label: null,
    classNames: {
      input: "py-1"
    },
    "aria-label": "Description",
    placeholder: "Enter your description",
    variant: "bordered",
    radius: "full"
  }
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var q,D,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var V,L,F;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    variant: "faded",
    isDisabled: true
  }
}`,...(F=(L=c.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var I,W,O;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    variant: "bordered",
    isReadOnly: true
  }
}`,...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var z,_,A;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    startContent: <PlusFilledIcon className="text-xl" />
  }
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var B,$,k;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    minRows: 1,
    label: null,
    endContent: <div className="p-1">
        <SendFilledIcon className="text-xl" />
      </div>,
    classNames: {
      input: "py-1"
    },
    "aria-label": "Description",
    placeholder: "Enter your description",
    variant: "bordered",
    radius: "full"
  }
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: MinRowsTemplate,
  args: {
    ...defaultProps
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: MaxRowsTemplate,
  args: {
    ...defaultProps,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec"
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    IsInvalid: true,
    errorMessage: "Please enter a valid description"
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,te,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true,
    minLength: "10",
    maxLength: "",
    label: "Comment",
    placeholder: "Enter your comment (10-100 characters)",
    errorMessage: (value: ValidationResult) => {
      if (value.validationDetails.tooLong) {
        return "Comment is too short. Min 10 characters.";
      }
      if (value.validationDetails.tooShort) {
        return "Comment is too long. Max 100 characters.";
      }
      if (value.validationDetails.valueMissing) {
        return "Comment is required";
      }
    }
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ie,le,oe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    validate: value => {
      if (value.length < 10) {
        return "Comment is too short. Min 10 characters.";
      }
      if (value.length > 100) {
        return "Comment is too long. Max 100 characters.";
      }
    },
    isRequired: true,
    label: "Comment",
    placeholder: "Enter your comment (10-100 characters)"
  }
}`,...(oe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,me,ue;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: ServerValidationTemplate,
  args: {
    ...defaultProps
  }
}`,...(ue=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,pe,ge;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    errorMessage: "Please enter a valid description"
  }
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var xe,fe,he;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    placeholder: "Enter your description",
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // eslint-disable-next-line no-console
    onClear: () => console.log("textarea cleared")
  }
}`,...(he=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const vr=["Default","FullRounded","Required","Disabled","ReadOnly","WithStartContent","WithEndContent","Controlled","MinRows","MaxRows","WithErrorMessage","WithErrorMessageFunction","WithValidation","WithServerValidation","IsInvalid","Clearable"];export{R as Clearable,p as Controlled,i as Default,c as Disabled,l as FullRounded,w as IsInvalid,x as MaxRows,g as MinRows,m as ReadOnly,o as Required,d as WithEndContent,f as WithErrorMessage,h as WithErrorMessageFunction,b as WithServerValidation,u as WithStartContent,v as WithValidation,vr as __namedExportsOrder,hr as default};
