import{j as i}from"./jsx-runtime-CS_Wz6c_.js";import{r as p}from"./index-Dy2Ak0OH.js";import{m as f,f as u}from"./utils-Dl_53iLP.js";import{t as g}from"./tv-DvaQJQTB.js";import{c as o}from"./variants-D625xmxh.js";import{o as x}from"./functions-CkCEVJeD.js";const m=g({base:["px-2","py-1","h-fit","font-mono","font-normal","inline-block","whitespace-nowrap"],variants:{color:{default:o.flat.default,primary:o.flat.primary,secondary:o.flat.secondary,success:o.flat.success,warning:o.flat.warning,danger:o.flat.danger},size:{sm:"text-small",md:"text-medium",lg:"text-large"},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"}},defaultVariants:{color:"default",size:"sm",radius:"sm"}});function C(s){const[e,r]=f(s,m.variantKeys),{as:a,children:t,className:n,...d}=e,l=a||"code",c=p.useMemo(()=>m({...r,className:n}),[x(r),n]);return{Component:l,children:t,getCodeProps:()=>({className:c,...d})}}const y=u((s,e)=>{const{Component:r,children:a,getCodeProps:t}=C({...s});return i.jsx(r,{ref:e,...t(),children:a})});y.displayName="NextUI.Code";export{y as C,m as c};
