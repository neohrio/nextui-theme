import{j as w}from"./jsx-runtime-CS_Wz6c_.js";import{r}from"./index-Dy2Ak0OH.js";import{u as ae}from"./index-BZiajwfa.js";import{$ as re}from"./useHover-bWO3Z0KF.js";import{$ as E,e as ne}from"./mergeProps-VNdaC4-V.js";import{$ as se}from"./useToggle-BOPzleDZ.js";import{$ as oe}from"./useToggleState-CXdksZc3.js";import{a as de}from"./useFocusRing-BgM-8Y4a.js";import{u as ie}from"./provider-context-DmA892L5.js";import{m as le,f as ue}from"./utils-Dl_53iLP.js";import{t as ce}from"./tv-DvaQJQTB.js";import{g as pe,h as be}from"./classes-D2PKZTJC.js";import{m as me}from"./refs-DLrq_aXV.js";import{o as fe}from"./functions-CkCEVJeD.js";import{c as s}from"./clsx-IIdnr2mY.js";import{d as m}from"./assertion-BI5aukJI.js";const W=ce({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent select-none",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",...pe],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right","pointer-events-none"],hiddenInput:be,startContent:"z-0 absolute start-1.5 text-current",endContent:"z-0 absolute end-1.5 text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none ms-2"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ms-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ms-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ms-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]});function ge(o,i,h){let{labelProps:l,inputProps:u,isSelected:d,isPressed:n,isDisabled:f,isReadOnly:g}=se(o,i,h);return{labelProps:l,inputProps:{...u,role:"switch",checked:d},isSelected:d,isPressed:n,isDisabled:f,isReadOnly:g}}function he(o={}){const i=ie(),[h,l]=le(o,W.variantKeys),{ref:u,as:d,name:n,value:f="",isReadOnly:g=!1,autoFocus:y=!1,startContent:I,endContent:P,defaultSelected:$,isSelected:S,children:c,thumbIcon:v,className:D,classNames:e,onChange:H,onValueChange:z,...x}=h,K=d||"label",A=r.useRef(null),C=r.useRef(null),O=o.disableAnimation??(i==null?void 0:i.disableAnimation)??!1,R=r.useId(),k=r.useMemo(()=>{const t=x["aria-label"]||typeof c=="string"?c:void 0;return{name:n,value:f,children:c,autoFocus:y,defaultSelected:$,isSelected:S,isDisabled:!!o.isDisabled,isReadOnly:g,"aria-label":t,"aria-labelledby":x["aria-labelledby"]||R,onChange:z}},[f,n,R,c,y,g,S,$,o.isDisabled,x["aria-label"],x["aria-labelledby"],z]),F=oe(k);ae(()=>{if(!C.current)return;const t=!!C.current.checked;F.setSelected(t)},[C.current]);const{inputProps:p,isPressed:U,isReadOnly:T}=ge(k,F,C),{focusProps:q,isFocused:V,isFocusVisible:L}=de({autoFocus:p.autoFocus}),{hoverProps:G,isHovered:B}=re({isDisabled:p.disabled}),M=k.isDisabled||T?!1:U,b=p.checked,j=p.disabled,a=r.useMemo(()=>W({...l,disableAnimation:O}),[fe(l),O]),J=s(e==null?void 0:e.base,D),Q=t=>({...E(G,x,t),ref:A,className:a.base({class:s(J,t==null?void 0:t.className)}),"data-disabled":m(j),"data-selected":m(b),"data-readonly":m(T),"data-focus":m(V),"data-focus-visible":m(L),"data-hover":m(B),"data-pressed":m(M)}),X=r.useCallback((t={})=>({...t,"aria-hidden":!0,className:s(a.wrapper({class:s(e==null?void 0:e.wrapper,t==null?void 0:t.className)}))}),[a,e==null?void 0:e.wrapper]),Y=(t={})=>({...E(p,q,t),ref:me(C,u),id:p.id,className:a.hiddenInput({class:e==null?void 0:e.hiddenInput}),onChange:ne(H,p.onChange)}),Z=r.useCallback((t={})=>({...t,className:a.thumb({class:s(e==null?void 0:e.thumb,t==null?void 0:t.className)})}),[a,e==null?void 0:e.thumb]),_=r.useCallback((t={})=>({...t,id:R,className:a.label({class:s(e==null?void 0:e.label,t==null?void 0:t.className)})}),[a,e==null?void 0:e.label,j,b]),N=r.useCallback((t={includeStateProps:!1})=>E({width:"1em",height:"1em",className:a.thumbIcon({class:s(e==null?void 0:e.thumbIcon)})},t.includeStateProps?{isSelected:b}:{}),[a,e==null?void 0:e.thumbIcon,b]),ee=r.useCallback((t={})=>({width:"1em",height:"1em",...t,className:a.startContent({class:s(e==null?void 0:e.startContent,t==null?void 0:t.className)})}),[a,e==null?void 0:e.startContent,b]),te=r.useCallback((t={})=>({width:"1em",height:"1em",...t,className:a.endContent({class:s(e==null?void 0:e.endContent,t==null?void 0:t.className)})}),[a,e==null?void 0:e.endContent,b]);return{Component:K,slots:a,classNames:e,domRef:A,children:c,thumbIcon:v,startContent:I,endContent:P,isHovered:B,isSelected:b,isPressed:M,isFocused:V,isFocusVisible:L,isDisabled:j,getBaseProps:Q,getWrapperProps:X,getInputProps:Y,getLabelProps:_,getThumbProps:Z,getThumbIconProps:N,getStartContentProps:ee,getEndContentProps:te}}const xe=ue((o,i)=>{const{Component:h,children:l,startContent:u,endContent:d,thumbIcon:n,getBaseProps:f,getInputProps:g,getWrapperProps:y,getThumbProps:I,getThumbIconProps:P,getLabelProps:$,getStartContentProps:S,getEndContentProps:c}=he({...o,ref:i}),v=typeof n=="function"?n(P({includeStateProps:!0})):n&&r.cloneElement(n,P()),D=u&&r.cloneElement(u,S()),e=d&&r.cloneElement(d,c());return w.jsxs(h,{...f(),children:[w.jsx("input",{...g()}),w.jsxs("span",{...y(),children:[u&&D,w.jsx("span",{...I(),children:n&&v}),d&&e]}),l&&w.jsx("span",{...$(),children:l})]})});xe.displayName="NextUI.Switch";export{xe as S,W as t,he as u};
