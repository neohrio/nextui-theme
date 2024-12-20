import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as a}from"./index-Dy2Ak0OH.js";import{T as s}from"./textarea-DjDzUxZm.js";import{F as u}from"./form-B92f7kXN.js";import{i as p}from"./use-input-c32X4TX1.js";import{P as x,S as g}from"./plus-BydWFKTp.js";import{b as m}from"./button-DeIVZFNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./utils-Dl_53iLP.js";import"./assertion-BI5aukJI.js";import"./close-filled-CY0RPngm.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./tv-DvaQJQTB.js";import"./provider-context-DmA892L5.js";import"./index-BZiajwfa.js";import"./useFocusRing-BgM-8Y4a.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./useHover-bWO3Z0KF.js";import"./usePress-BDQnv3aP.js";import"./openLink-BoTcy9x3.js";import"./useControlledState-B6nO32B9.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D4-J_9f3.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-HuKicY76.js";import"./classes-D2PKZTJC.js";import"./dom-DrLNPp_C.js";import"./text-CWQU1A9l.js";import"./filter-dom-props-BPLFryJX.js";import"./clsx-IIdnr2mY.js";import"./functions-CkCEVJeD.js";import"./variants-D625xmxh.js";const oe={title:"Components/Textarea",component:s,argTypes:{variant:{control:{type:"select"},options:["flat","faded","bordered","underlined"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},labelPlacement:{control:{type:"select"},options:["inside","outside","outside-left"]},disableAutosize:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}},decorators:[t=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx(t,{})})]},i={...p.defaultVariants,disableAutosize:!1,label:"Description",placeholder:"Enter your description"},r=t=>e.jsx("div",{className:"w-full max-w-[440px]",children:e.jsx(s,{...t})}),f=t=>{const[n,l]=a.useState("");return e.jsxs("div",{className:"w-full  flex-col gap-2 max-w-[440px]",children:[e.jsx(s,{...t,value:n,onValueChange:l}),e.jsxs("p",{className:"text-default-500 text-small",children:["Textarea value: ",n]})]})},h=t=>e.jsxs("div",{className:"w-full max-w-xl flex flex-row gap-4",children:[e.jsx(s,{...t,description:"Default minRows is 3"}),e.jsx(s,{...t,description:"minRows is 5",minRows:5}),e.jsx(s,{...t,description:"minRows is 10",minRows:10})]}),v=t=>e.jsxs("div",{className:"w-full max-w-xl flex flex-row gap-4",children:[e.jsx(s,{...t,description:"Default maxRows is 8"}),e.jsx(s,{...t,description:"maxRows is 5",maxRows:5}),e.jsx(s,{...t,description:"maxRows is 3",maxRows:3})]}),o=t=>e.jsxs("form",{className:"w-full max-w-xl flex flex-row items-end gap-4",onSubmit:n=>{alert(`Submitted value: ${n.target.textarea.value}`),n.preventDefault()},children:[e.jsx("div",{className:"w-full max-w-[440px]",children:e.jsx(s,{name:"textarea",...t})}),e.jsx("button",{className:m({color:"primary"}),type:"submit",children:"Submit"})]}),ae={render:r,args:{...i}},me={render:r,args:{...i,minRows:1,label:null,classNames:{input:"py-1"},"aria-label":"Description",placeholder:"Enter your description",variant:"bordered",radius:"full"}},ce={render:o,args:{...i,isRequired:!0}},de={render:r,args:{...i,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",variant:"faded",isDisabled:!0}},ue={render:r,args:{...i,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",variant:"bordered",isReadOnly:!0}},pe={render:r,args:{...i,startContent:e.jsx(x,{className:"text-xl"})}},xe={render:r,args:{...i,minRows:1,label:null,endContent:e.jsx("div",{className:"p-1",children:e.jsx(g,{className:"text-xl"})}),classNames:{input:"py-1"},"aria-label":"Description",placeholder:"Enter your description",variant:"bordered",radius:"full"}},w=t=>{const[n,l]=a.useState({}),c=d=>{d.preventDefault(),l({comment:"Please provide a valid comment."})};return e.jsxs(u,{className:"flex flex-col items-start gap-2",validationErrors:n,onSubmit:c,children:[e.jsx(s,{...t,label:"Comment",name:"comment"}),e.jsx("button",{className:m({color:"primary"}),type:"submit",children:"Submit"})]})},ge={render:f,args:{...i}},fe={render:h,args:{...i}},he={render:v,args:{...i,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec"}},ve={render:r,args:{...i,IsInvalid:!0,errorMessage:"Please enter a valid description"}},we={render:o,args:{...i,isRequired:!0,minLength:"10",maxLength:"",label:"Comment",placeholder:"Enter your comment (10-100 characters)",errorMessage:t=>{if(t.validationDetails.tooLong)return"Comment is too short. Min 10 characters.";if(t.validationDetails.tooShort)return"Comment is too long. Max 100 characters.";if(t.validationDetails.valueMissing)return"Comment is required"}}},be={render:o,args:{...i,validate:t=>{if(t.length<10)return"Comment is too short. Min 10 characters.";if(t.length>100)return"Comment is too long. Max 100 characters."},isRequired:!0,label:"Comment",placeholder:"Enter your comment (10-100 characters)"}},Re={render:w,args:{...i}},je={render:r,args:{...i,isInvalid:!0,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",errorMessage:"Please enter a valid description"}},ye={render:r,args:{...i,placeholder:"Enter your description",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",onClear:()=>console.log("textarea cleared")}},Ne=["Default","FullRounded","Required","Disabled","ReadOnly","WithStartContent","WithEndContent","Controlled","MinRows","MaxRows","WithErrorMessage","WithErrorMessageFunction","WithValidation","WithServerValidation","IsInvalid","Clearable"];export{ye as Clearable,ge as Controlled,ae as Default,de as Disabled,me as FullRounded,je as IsInvalid,he as MaxRows,fe as MinRows,ue as ReadOnly,ce as Required,xe as WithEndContent,ve as WithErrorMessage,we as WithErrorMessageFunction,Re as WithServerValidation,pe as WithStartContent,be as WithValidation,Ne as __namedExportsOrder,oe as default};