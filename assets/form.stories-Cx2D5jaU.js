import{j as i}from"./jsx-runtime-CS_Wz6c_.js";import{r as j}from"./index-Dy2Ak0OH.js";import{B as D}from"./button-Cmz5JDDW.js";import{F as B}from"./form-B92f7kXN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C7lViFB7.js";import"./iframe-DMAjldn4.js";import"../sb-preview/runtime.js";import"./numbers-Ck-UmubQ.js";import"./index-CbqanOKQ.js";import"./filter-props-Dg3FrsQW.js";import"./functions-CkCEVJeD.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./filterDOMProps-CeZl_uWj.js";import"./platform-BknMeRIZ.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusWithin-Dv5DP61h.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./provider-context-DmA892L5.js";import"./dom-DrLNPp_C.js";import"./button-DeIVZFNz.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";import"./filter-dom-props-BPLFryJX.js";import"./assertion-BI5aukJI.js";import"./utils-Dl_53iLP.js";import"./spinner-VIEFZZR0.js";import"./clsx-IIdnr2mY.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";const dr={title:"Components/Form",component:B,argTypes:{isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}}},n={},a=s=>i.jsx(B,{...s,className:"flex flex-col gap-2 w-4/5",children:i.jsx(D,{color:"primary",type:"submit",children:"Submit"})}),r={render:a,args:{...n}},e={render:a,args:{...n,validationBehavior:"native"}},o={render:a,args:{...n,validationBehavior:"aria"}},t=()=>{const[s,T]=j.useState({}),V=async m=>{m.preventDefault();let p={};for(let l of m.target.elements)p[l.name]=`Invalid value for "${l.name}".`;T(p)};return i.jsx(a,{validationErrors:s,onSubmit:V})};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,f,S;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    validationBehavior: "native"
  }
}`,...(S=(f=e.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var g,E,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    validationBehavior: "aria"
  }
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var b,h,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [serverErrors, setServerErrors] = useState({});
  const onSubmit = async e => {
    e.preventDefault();
    let errors = {};
    for (let el of e.target.elements) {
      errors[el.name] = \`Invalid value for "\${el.name}".\`;
    }
    setServerErrors(errors);
  };
  return <Template validationErrors={serverErrors} onSubmit={onSubmit} />;
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const ur=["Default","NativeValidation","AriaValidation","ServerValidation"];export{o as AriaValidation,r as Default,e as NativeValidation,t as ServerValidation,ur as __namedExportsOrder,dr as default};
