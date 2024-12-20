import{j as s}from"./jsx-runtime-CS_Wz6c_.js";import{r as x,e as O}from"./index-Dy2Ak0OH.js";import{$ as B}from"./mergeProps-VNdaC4-V.js";import{u as be}from"./index-DtZmXFag.js";import{p as $,$ as ge}from"./useProgressBar-DkaTyEsR.js";import{u as fe}from"./provider-context-DmA892L5.js";import{m as xe,f as he}from"./utils-Dl_53iLP.js";import{u as ve}from"./dom-DrLNPp_C.js";import{a as ye}from"./numbers-Ck-UmubQ.js";import{c as Le}from"./clsx-IIdnr2mY.js";import{o as Pe}from"./functions-CkCEVJeD.js";import{d as E}from"./assertion-BI5aukJI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SSRProvider-CmMeNDTG.js";import"./tv-DvaQJQTB.js";import"./filterDOMProps-CeZl_uWj.js";import"./number-nHrFdSb-.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./useNumberFormatter-B2oms8O6.js";import"./context-DL1kNI1P.js";import"./NumberFormatter-DNR9MAW-.js";function Se(r){const o=fe(),[c,t]=xe(r,$.variantKeys),{ref:e,as:d,id:w,className:u,classNames:a,label:b,valueLabel:g,value:i=0,minValue:f=0,maxValue:I=100,showValueLabel:le=!1,formatOptions:ce={style:"percent"},...A}=c,de=d||"div",T=ve(e),C=Le(a==null?void 0:a.base,u),[,ie]=be({rerender:!0,delay:100}),p=r.isIndeterminate,D=r.disableAnimation??(o==null?void 0:o.disableAnimation)??!1,{progressBarProps:k,labelProps:M}=ge({id:w,label:b,value:i,minValue:f,maxValue:I,valueLabel:g,formatOptions:ce,isIndeterminate:p,"aria-labelledby":r["aria-labelledby"],"aria-label":r["aria-label"]}),m=x.useMemo(()=>$({...t,disableAnimation:D}),[Pe(t),D]),R=D?!0:ie,pe=x.useMemo(()=>p||!R?void 0:ye((i-f)/(I-f)*100),[R,p,i,f,I]),me=x.useCallback((W={})=>({ref:T,"data-indeterminate":E(p),"data-disabled":E(r.isDisabled),className:m.base({class:C}),...B(k,A,W)}),[T,m,p,r.isDisabled,C,k,A]),ue=x.useCallback((W={})=>({className:m.label({class:a==null?void 0:a.label}),...B(M,W)}),[m,a,M]);return{Component:de,domRef:T,slots:m,classNames:a,label:b,percentage:pe,showValueLabel:le,getProgressBarProps:me,getLabelProps:ue}}const j=he((r,o)=>{const{Component:c,slots:t,classNames:e,label:d,percentage:w,showValueLabel:u,getProgressBarProps:a,getLabelProps:b}=Se({...r,ref:o}),g=a(),i=d||u;return s.jsxs(c,{...g,children:[i?s.jsxs("div",{className:t.labelWrapper({class:e==null?void 0:e.labelWrapper}),children:[d&&s.jsx("span",{...b(),children:d}),u&&s.jsx("span",{className:t.value({class:e==null?void 0:e.value}),children:g["aria-valuetext"]})]}):null,s.jsx("div",{className:t.track({class:e==null?void 0:e.track}),children:s.jsx("div",{className:t.indicator({class:e==null?void 0:e.indicator}),style:{transform:`translateX(-${100-(w||0)}%)`}})})]})});j.displayName="NextUI.Progress";const qe={title:"Components/Progress",component:j,argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},isDisabled:{control:{type:"boolean"}}}},n={...$.defaultVariants,value:55},l=r=>s.jsx("div",{className:"max-w-[400px]",children:s.jsx(j,{...r})}),Ve=r=>{const[o,c]=O.useState(0);return O.useEffect(()=>{const t=setInterval(()=>{c(e=>e>=100?0:e+10)},500);return()=>clearInterval(t)},[]),s.jsx("div",{className:"max-w-[400px]",children:s.jsx(j,{...r,value:o})})},h={render:l,args:{...n,"aria-label":"Loading..."}},v={render:l,args:{...n,label:"Loading..."}},y={render:Ve,args:{...n,label:"Downloading...",color:"success",showValueLabel:!0}},L={render:l,args:{...n,label:"Loading...",showValueLabel:!0,formatOptions:{style:"currency",currency:"ARS"}}},P={render:l,args:{...n,size:"xs",radius:"none",isIndeterminate:!0}},S={render:l,args:{...n,isStriped:!0}},V={render:l,args:{...n,classNames:{indicator:"bg-[#14708A] rounded-[4px]",track:"bg-red-500 rounded-[4px]"}}};var z,N,_;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    "aria-label": "Loading..."
  }
}`,...(_=(N=h.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var F,K,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Loading..."
  }
}`,...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,q,G;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: IntervalTemplate,
  args: {
    ...defaultProps,
    label: "Downloading...",
    color: "success",
    showValueLabel: true
  }
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,Q;L.parameters={...L.parameters,docs:{...(H=L.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Loading...",
    showValueLabel: true,
    formatOptions: {
      style: "currency",
      currency: "ARS"
    }
  }
}`,...(Q=(J=L.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    size: "xs",
    radius: "none",
    isIndeterminate: true
  }
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isStriped: true
  }
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,oe,ne;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    classNames: {
      indicator: "bg-[#14708A] rounded-[4px]",
      track: "bg-red-500 rounded-[4px]"
    }
  }
}`,...(ne=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Ge=["Default","WithLabel","WithValueLabel","WithValueFormatting","Indeterminate","Striped","CustomSlots"];export{V as CustomSlots,h as Default,P as Indeterminate,S as Striped,v as WithLabel,L as WithValueFormatting,y as WithValueLabel,Ge as __namedExportsOrder,qe as default};
