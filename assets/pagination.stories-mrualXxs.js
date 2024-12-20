import{j as t}from"./jsx-runtime-CS_Wz6c_.js";import{e as h}from"./index-Dy2Ak0OH.js";import{P as m,p as g,u as b,a as n}from"./pagination-1kwyERoz.js";import{b as p}from"./button-DeIVZFNz.js";import{C as c}from"./chevron-VmGfIlts.js";import{c as i}from"./cn-ByFajI3K.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./context-DL1kNI1P.js";import"./SSRProvider-CmMeNDTG.js";import"./numbers-Ck-UmubQ.js";import"./index-X92CTFGl.js";import"./provider-context-DmA892L5.js";import"./utils-Dl_53iLP.js";import"./dom-DrLNPp_C.js";import"./tv-DvaQJQTB.js";import"./variants-D625xmxh.js";import"./classes-D2PKZTJC.js";import"./functions-CkCEVJeD.js";import"./clsx-IIdnr2mY.js";import"./assertion-BI5aukJI.js";import"./mergeProps-VNdaC4-V.js";import"./openLink-BoTcy9x3.js";import"./platform-BknMeRIZ.js";import"./useHover-bWO3Z0KF.js";import"./usePress-BDQnv3aP.js";import"./useFocusWithin-Dv5DP61h.js";import"./useFocusRing-BgM-8Y4a.js";import"./filter-dom-props-BPLFryJX.js";import"./ellipsis-DWld56c6.js";const J={title:"Components/Pagination",component:m,argTypes:{page:{control:{type:"number"}},siblings:{control:{type:"number"}},boundaries:{control:{type:"number"}},variant:{control:{type:"select"},options:["flat","bordered","light","faded"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},showShadow:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}}}},e={...g.defaultVariants,total:10,siblings:1,boundaries:1,initialPage:1},K={args:{...e}},M={args:{...e,showControls:!0}},Q={args:{...e,showControls:!0,loop:!0}},U={args:{...e,initialPage:3}},Y={args:{...e,showControls:!0,isCompact:!0}},Z=()=>{const[r,a]=h.useState(1);return t.jsxs("div",{className:"flex flex-col gap-5",children:[t.jsxs("p",{children:["Page: ",r]}),t.jsx(m,{...e,showShadow:!0,color:"secondary",page:r,onChange:a}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{className:p({color:"secondary",size:"sm",variant:"flat"}),onClick:()=>a(o=>o>1?o-1:o),children:"Previous"}),t.jsx("button",{className:p({color:"secondary",size:"sm",variant:"flat"}),onClick:()=>a(o=>o<e.total?o+1:o),children:"Next"})]})]})},tt=()=>{const r=({ref:a,value:o,isActive:u,onNext:d,onPrevious:s,setPage:f,className:l})=>o===n.NEXT?t.jsx("button",{className:i(l,"bg-default-200"),onClick:d,children:t.jsx(c,{className:"rotate-180"})}):o===n.PREV?t.jsx("button",{className:i(l,"bg-default-200"),onClick:s,children:t.jsx(c,{})}):o===n.DOTS?t.jsx("button",{className:l,children:"..."}):t.jsx("button",{ref:a,className:i(l,u&&"bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold"),onClick:()=>f(o),children:o});return t.jsx(m,{...e,disableCursorAnimation:!0,showControls:!0,className:"gap-2",radius:"full",renderItem:r,variant:"light"})},ot={args:{...e,showShadow:!0,classNames:{base:"gap-0 rounded border-2 border-default",item:"w-8 h-8 text-sm rounded-none bg-transparent",cursor:"bg-gradient-to-b shadow-lg shadow-default from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold"}}},st=()=>{const{activePage:r,range:a,setPage:o,onNext:u,onPrevious:d}=b({...e,total:6,showControls:!0,siblings:10,boundaries:10});return t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsxs("p",{children:["Active page: ",r]}),t.jsx("ul",{className:"flex gap-2 items-center",children:a.map(s=>s===n.NEXT?t.jsx("li",{"aria-label":"next page",className:"w-4 h-4",children:t.jsx("button",{className:"w-full h-full bg-default-200 rounded-full",onClick:u,children:t.jsx(c,{className:"rotate-180"})})},s):s===n.PREV?t.jsx("li",{"aria-label":"previous page",className:"w-4 h-4",children:t.jsx("button",{className:"w-full h-full bg-default-200 rounded-full",onClick:d,children:t.jsx(c,{})})},s):s===n.DOTS?t.jsx("li",{className:"w-4 h-4",children:"..."},s):t.jsx("li",{"aria-label":`page ${s}`,className:"w-4 h-4",children:t.jsx("button",{className:i("w-full h-full bg-default-300  rounded-full",r===s&&"bg-secondary"),onClick:()=>o(s)})},s))})]})},et=["Default","WithControls","PaginationLoop","InitialPage","IsCompact","Controlled","CustomItems","CustomWithClassNames","CustomWithHooks"];export{Z as Controlled,tt as CustomItems,ot as CustomWithClassNames,st as CustomWithHooks,K as Default,U as InitialPage,Y as IsCompact,Q as PaginationLoop,M as WithControls,et as __namedExportsOrder,J as default};