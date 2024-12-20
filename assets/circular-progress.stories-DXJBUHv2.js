import{j as s}from"./jsx-runtime-CS_Wz6c_.js";import{r as d,e as E}from"./index-Dy2Ak0OH.js";import{$ as R}from"./mergeProps-VNdaC4-V.js";import{u as fe}from"./index-DtZmXFag.js";import{c as S,$ as be}from"./useProgressBar-DkaTyEsR.js";import{u as ge}from"./provider-context-DmA892L5.js";import{m as he,f as xe}from"./utils-Dl_53iLP.js";import{u as ve}from"./dom-DrLNPp_C.js";import{c as Ce}from"./clsx-IIdnr2mY.js";import{o as Pe}from"./functions-CkCEVJeD.js";import{a as ke}from"./numbers-Ck-UmubQ.js";import{d as F}from"./assertion-BI5aukJI.js";import{C as ye}from"./card-qaMiipHS.js";import{C as Le}from"./card-body-mfvbW819.js";import{C as we}from"./card-footer-BfMOmcKD.js";import{C as je}from"./chip-BM6qSHdk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SSRProvider-CmMeNDTG.js";import"./tv-DvaQJQTB.js";import"./filterDOMProps-CeZl_uWj.js";import"./number-nHrFdSb-.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./useNumberFormatter-B2oms8O6.js";import"./context-DL1kNI1P.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-Dva0CCVE.js";import"./iframe-BglCFgpW.js";import"../sb-preview/runtime.js";import"./index-CbqanOKQ.js";import"./filter-props-Dg3FrsQW.js";import"./platform-BknMeRIZ.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusWithin-Dv5DP61h.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./classes-D2PKZTJC.js";import"./filter-dom-props-BPLFryJX.js";import"./variants-D625xmxh.js";import"./close-filled-CY0RPngm.js";function Ve(r){const i=ge(),[u,l]=he(r,S.variantKeys),{ref:t,as:g,id:w,className:j,classNames:e,label:h,valueLabel:V,value:c=void 0,minValue:m=0,maxValue:W=100,strokeWidth:te,showValueLabel:ae=!1,formatOptions:oe={style:"percent"},...z}=u,ne=g||"div",D=ve(t),T=Ce(e==null?void 0:e.base,j),[,ie]=fe({rerender:!0,delay:100}),p=(r.isIndeterminate??!0)&&c===void 0,$=r.disableAnimation??(i==null?void 0:i.disableAnimation)??!1,{progressBarProps:M,labelProps:B}=be({id:w,label:h,value:c,minValue:m,maxValue:W,valueLabel:V,formatOptions:oe,isIndeterminate:p,"aria-labelledby":r["aria-labelledby"],"aria-label":r["aria-label"]}),a=d.useMemo(()=>S({...l,disableAnimation:$,isIndeterminate:p}),[Pe(l),$,p]),O=$?!0:ie,x=16,I=te||(r.size==="sm"?2:3),f=16-I,n=2*f*Math.PI,le=d.useMemo(()=>O?p?.25:c?ke((c-m)/(W-m),1):0:0,[O,c,m,W,p]),A=n-le*n,ce=d.useCallback((o={})=>({ref:D,"data-indeterminate":F(p),"data-disabled":F(r.isDisabled),className:a.base({class:T}),...R(M,z,o)}),[D,a,p,r.isDisabled,T,M,z]),me=d.useCallback((o={})=>({className:a.label({class:e==null?void 0:e.label}),...R(B,o)}),[a,e,B]),pe=d.useCallback((o={})=>({viewBox:"0 0 32 32",fill:"none",strokeWidth:I,className:a.svg({class:e==null?void 0:e.svg}),...o}),[I,a,e]),de=d.useCallback((o={})=>({cx:x,cy:x,r:f,role:"presentation",strokeDasharray:`${n} ${n}`,strokeDashoffset:A,transform:"rotate(-90 16 16)",strokeLinecap:"round",className:a.indicator({class:e==null?void 0:e.indicator}),...o}),[a,e,A,n,f]),ue=d.useCallback((o={})=>({cx:x,cy:x,r:f,role:"presentation",strokeDasharray:`${n} ${n}`,strokeDashoffset:0,transform:"rotate(-90 16 16)",strokeLinecap:"round",className:a.track({class:e==null?void 0:e.track}),...o}),[a,e,n,f]);return{Component:ne,domRef:D,slots:a,classNames:e,label:h,showValueLabel:ae,getProgressBarProps:ce,getLabelProps:me,getSvgProps:pe,getIndicatorProps:de,getTrackProps:ue}}const L=xe((r,i)=>{const{Component:u,slots:l,classNames:t,label:g,showValueLabel:w,getProgressBarProps:j,getLabelProps:e,getSvgProps:h,getIndicatorProps:V,getTrackProps:c}=Ve({ref:i,...r}),m=j();return s.jsxs(u,{...m,children:[s.jsxs("div",{className:l.svgWrapper({class:t==null?void 0:t.svgWrapper}),children:[s.jsxs("svg",{...h(),children:[s.jsx("circle",{...c()}),s.jsx("circle",{...V()})]}),w&&s.jsx("span",{className:l.value({class:t==null?void 0:t.value}),children:m["aria-valuetext"]})]}),g&&s.jsx("span",{...e(),children:g})]})});L.displayName="NextUI.CircularProgress";const Pr={title:"Components/CircularProgress",component:L,argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},isDisabled:{control:{type:"boolean"}}}},b={...S.defaultVariants},We=r=>{const[i,u]=E.useState(0);return E.useEffect(()=>{const l=setInterval(()=>{u(t=>t>=100?0:t+10)},500);return()=>clearInterval(l)},[]),s.jsx(L,{...r,value:i})},De=r=>s.jsxs(ye,{className:"w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500",children:[s.jsx(Le,{className:"justify-center items-center pb-0",children:s.jsx(L,{...r,classNames:{svg:"w-36 h-36 drop-shadow-md",indicator:"stroke-white",track:"stroke-white/10",value:"text-3xl font-semibold text-white"},strokeWidth:4})}),s.jsx(we,{className:"justify-center items-center pt-0",children:s.jsx(je,{classNames:{base:"border-1 border-white/30",content:"text-white/80 text-sm font-semibold"},variant:"bordered",children:"2800 Data points"})})]}),v={args:{...b,"aria-label":"Loading..."}},C={args:{...b,label:"Loading..."}},P={render:We,args:{...b,size:"lg",value:70,color:"secondary",showValueLabel:!0}},k={args:{...b,label:"Loading...",size:"xl",value:70,color:"warning",showValueLabel:!0,formatOptions:{style:"unit",unit:"kilometer"}}},y={render:De,args:{...b,size:"xl",strokeWidth:4,value:70,showValueLabel:!0}};var N,_,K;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    "aria-label": "Loading..."
  }
}`,...(K=(_=v.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var U,q,G;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: "Loading..."
  }
}`,...(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,Q;P.parameters={...P.parameters,docs:{...(H=P.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: IntervalTemplate,
  args: {
    ...defaultProps,
    size: "lg",
    value: 70,
    color: "secondary",
    showValueLabel: true
  }
}`,...(Q=(J=P.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: "Loading...",
    size: "xl",
    value: 70,
    color: "warning",
    showValueLabel: true,
    formatOptions: {
      style: "unit",
      unit: "kilometer"
    }
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: CustomClassnamesTemplate,
  args: {
    ...defaultProps,
    size: "xl",
    strokeWidth: 4,
    value: 70,
    showValueLabel: true
  }
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const kr=["Default","WithLabel","WithValueLabel","WithValueFormatting","CustomClassnames"];export{y as CustomClassnames,v as Default,C as WithLabel,k as WithValueFormatting,P as WithValueLabel,kr as __namedExportsOrder,Pr as default};
