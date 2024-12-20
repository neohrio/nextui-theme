import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as U}from"./index-Dy2Ak0OH.js";import{P as N,p as Y,u as Z,a as s}from"./pagination-1kwyERoz.js";import{b as w}from"./button-DeIVZFNz.js";import{C as P}from"./chevron-VmGfIlts.js";import{c as h}from"./cn-ByFajI3K.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./context-DL1kNI1P.js";import"./SSRProvider-CmMeNDTG.js";import"./numbers-Ck-UmubQ.js";import"./index-X92CTFGl.js";import"./provider-context-DmA892L5.js";import"./utils-Dl_53iLP.js";import"./dom-DrLNPp_C.js";import"./tv-DvaQJQTB.js";import"./variants-D625xmxh.js";import"./classes-D2PKZTJC.js";import"./functions-CkCEVJeD.js";import"./clsx-IIdnr2mY.js";import"./assertion-BI5aukJI.js";import"./mergeProps-VNdaC4-V.js";import"./openLink-BoTcy9x3.js";import"./platform-BknMeRIZ.js";import"./useHover-bWO3Z0KF.js";import"./usePress-BDQnv3aP.js";import"./useFocusWithin-Dv5DP61h.js";import"./useFocusRing-BgM-8Y4a.js";import"./filter-dom-props-BPLFryJX.js";import"./ellipsis-DWld56c6.js";const Te={title:"Components/Pagination",component:N,argTypes:{page:{control:{type:"number"}},siblings:{control:{type:"number"}},boundaries:{control:{type:"number"}},variant:{control:{type:"select"},options:["flat","bordered","light","faded"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},showShadow:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}}}},n={...Y.defaultVariants,total:10,siblings:1,boundaries:1,initialPage:1},i={args:{...n}},u={args:{...n,showControls:!0}},c={args:{...n,showControls:!0,loop:!0}},d={args:{...n,initialPage:3}},m={args:{...n,showControls:!0,isCompact:!0}},p=()=>{const[r,o]=U.useState(1);return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("p",{children:["Page: ",r]}),e.jsx(N,{...n,showShadow:!0,color:"secondary",page:r,onChange:o}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:w({color:"secondary",size:"sm",variant:"flat"}),onClick:()=>o(a=>a>1?a-1:a),children:"Previous"}),e.jsx("button",{className:w({color:"secondary",size:"sm",variant:"flat"}),onClick:()=>o(a=>a<n.total?a+1:a),children:"Next"})]})]})},g=()=>{const r=({ref:o,value:a,isActive:C,onNext:x,onPrevious:t,setPage:Q,className:l})=>a===s.NEXT?e.jsx("button",{className:h(l,"bg-default-200"),onClick:x,children:e.jsx(P,{className:"rotate-180"})}):a===s.PREV?e.jsx("button",{className:h(l,"bg-default-200"),onClick:t,children:e.jsx(P,{})}):a===s.DOTS?e.jsx("button",{className:l,children:"..."}):e.jsx("button",{ref:o,className:h(l,C&&"bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold"),onClick:()=>Q(a),children:a});return e.jsx(N,{...n,disableCursorAnimation:!0,showControls:!0,className:"gap-2",radius:"full",renderItem:r,variant:"light"})},f={args:{...n,showShadow:!0,classNames:{base:"gap-0 rounded border-2 border-default",item:"w-8 h-8 text-sm rounded-none bg-transparent",cursor:"bg-gradient-to-b shadow-lg shadow-default from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold"}}},b=()=>{const{activePage:r,range:o,setPage:a,onNext:C,onPrevious:x}=Z({...n,total:6,showControls:!0,siblings:10,boundaries:10});return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{children:["Active page: ",r]}),e.jsx("ul",{className:"flex gap-2 items-center",children:o.map(t=>t===s.NEXT?e.jsx("li",{"aria-label":"next page",className:"w-4 h-4",children:e.jsx("button",{className:"w-full h-full bg-default-200 rounded-full",onClick:C,children:e.jsx(P,{className:"rotate-180"})})},t):t===s.PREV?e.jsx("li",{"aria-label":"previous page",className:"w-4 h-4",children:e.jsx("button",{className:"w-full h-full bg-default-200 rounded-full",onClick:x,children:e.jsx(P,{})})},t):t===s.DOTS?e.jsx("li",{className:"w-4 h-4",children:"..."},t):e.jsx("li",{"aria-label":`page ${t}`,className:"w-4 h-4",children:e.jsx("button",{className:h("w-full h-full bg-default-300  rounded-full",r===t&&"bg-secondary"),onClick:()=>a(t)})},t))})]})};var v,y,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,I,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showControls: true
  }
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,E,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showControls: true,
    loop: true
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var R,A,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    initialPage: 3
  }
}`,...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var z,O,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showControls: true,
    isCompact: true
  }
}`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var X,_,H;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return <div className="flex flex-col gap-5">
      <p>Page: {currentPage}</p>
      <Pagination {...defaultProps} showShadow color="secondary" page={currentPage} onChange={setCurrentPage} />
      <div className="flex gap-2">
        <button className={button({
        color: "secondary",
        size: "sm",
        variant: "flat"
      })} onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)}>
          Previous
        </button>
        <button className={button({
        color: "secondary",
        size: "sm",
        variant: "flat"
      })} onClick={() => setCurrentPage(prev => prev < defaultProps.total ? prev + 1 : prev)}>
          Next
        </button>
      </div>
    </div>;
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var L,$,q;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const renderItem = ({
    ref,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return <button className={cn(className, "bg-default-200")} onClick={onNext}>
          <ChevronIcon className="rotate-180" />
        </button>;
    }
    if (value === PaginationItemType.PREV) {
      return <button className={cn(className, "bg-default-200")} onClick={onPrevious}>
          <ChevronIcon />
        </button>;
    }
    if (value === PaginationItemType.DOTS) {
      return <button className={className}>...</button>;
    }
    return <button ref={ref} className={cn(className, isActive && "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold")} onClick={() => setPage(value)}>
        {value}
      </button>;
  };
  return <Pagination {...defaultProps} disableCursorAnimation showControls className="gap-2" radius="full" renderItem={renderItem} variant="light" />;
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var B,F,G;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showShadow: true,
    classNames: {
      base: "gap-0 rounded border-2 border-default",
      item: "w-8 h-8 text-sm rounded-none bg-transparent",
      cursor: "bg-gradient-to-b shadow-lg shadow-default from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold"
    }
  }
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,M;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const {
    activePage,
    range,
    setPage,
    onNext,
    onPrevious
  } = usePagination({
    ...defaultProps,
    total: 6,
    showControls: true,
    siblings: 10,
    boundaries: 10
  });
  return <div className="flex flex-col gap-2">
      <p>Active page: {activePage}</p>
      <ul className="flex gap-2 items-center">
        {range.map(page => {
        if (page === PaginationItemType.NEXT) {
          return <li key={page} aria-label="next page" className="w-4 h-4">
                <button className="w-full h-full bg-default-200 rounded-full" onClick={onNext}>
                  <ChevronIcon className="rotate-180" />
                </button>
              </li>;
        }
        if (page === PaginationItemType.PREV) {
          return <li key={page} aria-label="previous page" className="w-4 h-4">
                <button className="w-full h-full bg-default-200 rounded-full" onClick={onPrevious}>
                  <ChevronIcon />
                </button>
              </li>;
        }
        if (page === PaginationItemType.DOTS) {
          return <li key={page} className="w-4 h-4">
                ...
              </li>;
        }
        return <li key={page} aria-label={\`page \${page}\`} className="w-4 h-4">
              <button className={cn("w-full h-full bg-default-300  rounded-full", activePage === page && "bg-secondary")} onClick={() => setPage(page)} />
            </li>;
      })}
      </ul>
    </div>;
}`,...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const Ee=["Default","WithControls","PaginationLoop","InitialPage","IsCompact","Controlled","CustomItems","CustomWithClassNames","CustomWithHooks"];export{p as Controlled,g as CustomItems,f as CustomWithClassNames,b as CustomWithHooks,i as Default,d as InitialPage,m as IsCompact,c as PaginationLoop,u as WithControls,Ee as __namedExportsOrder,Te as default};
