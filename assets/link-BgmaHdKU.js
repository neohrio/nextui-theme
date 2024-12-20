import{j as n}from"./jsx-runtime-CS_Wz6c_.js";import{$ as j}from"./mergeProps-VNdaC4-V.js";import{$ as M}from"./filterDOMProps-CeZl_uWj.js";import{b as N,c as E,d as y}from"./openLink-BoTcy9x3.js";import{d as R,e as F}from"./platform-BknMeRIZ.js";import{$ as H}from"./useFocusable-aXrZ_JBU.js";import{b as S}from"./usePress-BDQnv3aP.js";import{w as V}from"./console-B9aq-5md.js";import{a as B}from"./useFocusRing-BgM-8Y4a.js";import{r as g}from"./index-Dy2Ak0OH.js";import{u as K}from"./provider-context-DmA892L5.js";import{m as O,f as U}from"./utils-Dl_53iLP.js";import{l as w,a as W}from"./link-B1ki4Tbv.js";import{u as _}from"./dom-DrLNPp_C.js";import{o as q}from"./functions-CkCEVJeD.js";import{d as v}from"./assertion-BI5aukJI.js";const z=e=>n.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[n.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),n.jsx("path",{d:"M15 3h6v6"}),n.jsx("path",{d:"M10 14L21 3"})]});function G(e,a){let{elementType:i="a",onPress:o,onPressStart:f,onPressEnd:c,onClick:r,isDisabled:l,...x}=e,u={};i!=="a"&&(u={role:"link",tabIndex:l?void 0:0});let b=R()||F();r&&typeof r=="function"&&V("onClick is deprecated, please use onPress instead. See: https://github.com/nextui-org/nextui/issues/4292","useLink");const p=s=>{b&&(r==null||r(s)),o==null||o(s)};let{focusableProps:k}=H(e,a),{pressProps:d,isPressed:P}=S({onPress:p,onPressStart:f,onPressEnd:c,isDisabled:l,ref:a}),L=M(x,{labelable:!0,isLink:i==="a"}),t=j(k,d),$=N(),h=E(e);return{isPressed:P,linkProps:j(L,h,{...t,...u,"aria-disabled":l||void 0,"aria-current":e["aria-current"],onClick:s=>{var m;(m=d.onClick)==null||m.call(d,s),!b&&r&&r(s),!$.isNative&&s.currentTarget instanceof HTMLAnchorElement&&s.currentTarget.href&&!s.isDefaultPrevented()&&y(s.currentTarget,s)&&e.href&&(s.preventDefault(),$.open(s.currentTarget,s,e.href,e.routerOptions))}})}}function J(e){const a=K(),[i,o]=O(e,w.variantKeys),{ref:f,as:c,children:r,anchorIcon:l,isExternal:x=!1,showAnchorIcon:u=!1,autoFocus:b=!1,className:p,onPress:k,onPressStart:d,onPressEnd:P,onClick:L,...t}=i,$=c||"a",h=_(f),s=(e==null?void 0:e.disableAnimation)??(a==null?void 0:a.disableAnimation)??!1,{linkProps:m}=G({...t,onPress:k,onPressStart:d,onPressEnd:P,onClick:L,isDisabled:e.isDisabled,elementType:`${c}`},h),{isFocused:A,isFocusVisible:C,focusProps:D}=B({autoFocus:b});x&&(t.rel=t.rel??"noopener noreferrer",t.target=t.target??"_blank");const T=g.useMemo(()=>w({...o,disableAnimation:s,className:p}),[q(o),s,p]),I=g.useCallback(()=>({ref:h,className:T,"data-focus":v(A),"data-disabled":v(e.isDisabled),"data-focus-visible":v(C),...j(D,m,t)}),[T,A,C,D,m,t]);return{Component:$,children:r,anchorIcon:l,showAnchorIcon:u,getLinkProps:I}}const Q=U((e,a)=>{const{Component:i,children:o,showAnchorIcon:f,anchorIcon:c=n.jsx(z,{className:W}),getLinkProps:r}=J({ref:a,...e});return n.jsx(i,{...r(),children:n.jsxs(n.Fragment,{children:[o,f&&c]})})});Q.displayName="NextUI.Link";export{Q as L};