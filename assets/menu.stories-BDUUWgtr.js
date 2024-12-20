import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as Y}from"./index-Dy2Ak0OH.js";import{M as i,a as t}from"./menu-item-base-DuHCSS1a.js";import{M as w}from"./menu-section-base-Bk7emvc_.js";import{m as Z}from"./index-CunruRV8.js";import{A as g,C,E as S,D as y}from"./edit-document-vdXEjkET.js";import{c as N}from"./clsx-IIdnr2mY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTreeState-CxAVT1yY.js";import"./SelectionManager-CXnfrpCS.js";import"./useControlledState-B6nO32B9.js";import"./provider-context-DmA892L5.js";import"./dom-DrLNPp_C.js";import"./filter-dom-props-BPLFryJX.js";import"./divider-DiQ-8az1.js";import"./tv-DvaQJQTB.js";import"./utils-Dl_53iLP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./openLink-BoTcy9x3.js";import"./useHover-bWO3Z0KF.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-BDQnv3aP.js";import"./useSelectableItem-Abho0jbh.js";import"./index-C2kXbMnG.js";import"./FocusScope-DK3vkfEa.js";import"./focusSafely-Ch4YQihX.js";import"./useEvent-C6x0jYue.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./context-DL1kNI1P.js";import"./useDescription-C_123zXK.js";import"./console-B9aq-5md.js";import"./functions-CkCEVJeD.js";import"./assertion-BI5aukJI.js";import"./Item-CkpyyYVy.js";import"./Section-CJejNSst.js";import"./classes-D2PKZTJC.js";import"./DOMLayoutDelegate-CSdX5_aL.js";import"./useCollator-D24U6gvG.js";const Ze={title:"Components/Menu",component:i,argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]}},decorators:[s=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx("div",{className:"w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100",children:e.jsx(s,{})})})]},l={...Z.defaultVariants},$=({color:s,variant:n,...o})=>e.jsxs(i,{"aria-label":"Actions",color:s,variant:n,onAction:alert,...o,children:[e.jsx(t,{onPress:()=>alert("[onPress] New file"),children:"New file"},"new"),e.jsx(t,{children:"Copy link"},"copy"),e.jsx(t,{children:"Edit file"},"edit"),e.jsx(t,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]}),ee=({color:s,variant:n,...o})=>e.jsxs(i,{"aria-label":"Actions",color:s,disabledKeys:["edit","delete"],variant:n,onAction:alert,...o,children:[e.jsx(t,{children:"New file"},"new"),e.jsx(t,{children:"Copy link"},"copy"),e.jsx(t,{children:"Edit file"},"edit"),e.jsx(t,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]}),te=({color:s,variant:n,...o})=>{const[a,r]=Y.useState(new Set(["text"]));return e.jsxs(i,{disallowEmptySelection:!0,"aria-label":"Actions",color:s,selectedKeys:a,selectionMode:"single",variant:n,onSelectionChange:r,...o,children:[e.jsx(t,{children:"Text"},"text"),e.jsx(t,{children:"Number"},"number"),e.jsx(t,{children:"Date"},"date"),e.jsx(t,{children:"Single Date"},"single_date"),e.jsx(t,{children:"Iteration"},"iteration")]})},re=({color:s,variant:n,...o})=>{const[a,r]=Y.useState(new Set(["text"]));return e.jsxs(i,{disallowEmptySelection:!0,"aria-label":"Actions",closeOnSelect:!1,color:s,selectedKeys:a,selectionMode:"multiple",variant:n,onSelectionChange:r,...o,children:[e.jsx(t,{children:"Text"},"text"),e.jsx(t,{children:"Number"},"number"),e.jsx(t,{children:"Date"},"date"),e.jsx(t,{children:"Single Date"},"single_date"),e.jsx(t,{children:"Iteration"},"iteration")]})},se=({color:s,variant:n,...o})=>e.jsxs(i,{"aria-label":"Actions",color:s,variant:n,onAction:alert,...o,children:[e.jsx(t,{shortcut:"⌘N",children:"New file"},"new"),e.jsx(t,{shortcut:"⌘C",children:"Copy link"},"copy"),e.jsx(t,{shortcut:"⌘⇧E",children:"Edit file"},"edit"),e.jsx(t,{className:"text-danger",color:"danger",shortcut:"⌘⇧D",children:"Delete file"},"delete")]}),ne=({color:s,variant:n,disableAnimation:o,...a})=>{const r="text-2xl text-secondary pointer-events-none flex-shrink-0";return e.jsxs(i,{"aria-label":"Actions",color:s,disableAnimation:o,variant:n,onAction:alert,...a,children:[e.jsx(t,{shortcut:"⌘N",startContent:e.jsx(g,{className:r}),children:"New file"},"new"),e.jsx(t,{shortcut:"⌘C",startContent:e.jsx(C,{className:r}),children:"Copy link"},"copy"),e.jsx(t,{shortcut:"⌘⇧E",startContent:e.jsx(S,{className:r}),children:"Edit file"},"edit"),e.jsx(t,{className:"text-danger",color:"danger",shortcut:"⌘⇧D",startContent:e.jsx(y,{className:N(r,"!text-danger")}),children:"Delete file"},"delete")]})},oe=({color:s,variant:n,disableAnimation:o,...a})=>{const r="text-2xl text-default-500 pointer-events-none flex-shrink-0";return e.jsxs(i,{"aria-label":"Actions",color:s,disableAnimation:o,variant:n,onAction:alert,...a,children:[e.jsx(t,{endContent:e.jsx(g,{className:r}),children:"New file"},"new"),e.jsx(t,{endContent:e.jsx(C,{className:r}),children:"Copy link"},"copy"),e.jsx(t,{endContent:e.jsx(S,{className:r}),children:"Edit file"},"edit"),e.jsx(t,{className:"text-danger",color:"danger",endContent:e.jsx(y,{className:N(r,"!text-danger")}),children:"Delete file"},"delete")]})},ae=({color:s,variant:n,disableAnimation:o,...a})=>{const r="text-2xl text-secondary pointer-events-none flex-shrink-0";return e.jsxs(i,{"aria-label":"Actions",color:s,disableAnimation:o,variant:n,onAction:alert,...a,children:[e.jsx(t,{description:"Create a new file",shortcut:"⌘N",startContent:e.jsx(g,{className:r}),children:"New file"},"new"),e.jsx(t,{description:"Copy the file link",shortcut:"⌘C",startContent:e.jsx(C,{className:r}),children:"Copy link"},"copy"),e.jsx(t,{description:"Allows you to edit the file",shortcut:"⌘⇧E",startContent:e.jsx(S,{className:r}),children:"Edit file"},"edit"),e.jsx(t,{className:"text-danger",color:"danger",description:"Permanently delete the file",shortcut:"⌘⇧D",startContent:e.jsx(y,{className:N(r,"!text-danger")}),children:"Delete file"},"delete")]})},ie=({color:s,variant:n,disableAnimation:o,...a})=>{const r="text-2xl text-secondary pointer-events-none flex-shrink-0";return e.jsxs(i,{"aria-label":"Actions",closeOnSelect:!1,color:s,disableAnimation:o,variant:n,onAction:alert,...a,children:[e.jsxs(w,{title:"Actions",children:[e.jsx(t,{description:"Create a new file",shortcut:"⌘N",startContent:e.jsx(g,{className:r}),children:"New file"},"new"),e.jsx(t,{description:"Copy the file link",shortcut:"⌘C",startContent:e.jsx(C,{className:r}),children:"Copy link"},"copy"),e.jsx(t,{description:"Allows you to edit the file",shortcut:"⌘⇧E",startContent:e.jsx(S,{className:r}),children:"Edit file"},"edit")]}),e.jsx(w,{title:"Danger zone",children:e.jsx(t,{className:"text-danger",color:"danger",description:"Permanently delete the file",shortcut:"⌘⇧D",startContent:e.jsx(y,{className:N(r,"!text-danger")}),children:"Delete file"},"delete")})]})},c={render:$,args:{...l}},d={render:ee,args:{...l}},p={render:te,args:{...l}},m={render:re,args:{...l}},x={render:se,args:{...l}},h={render:ne,args:{...l,variant:"flat",color:"secondary"}},u={render:oe,args:{...l,variant:"faded",color:"success"}},f={render:ae,args:{...l,variant:"flat",color:"secondary",className:"min-w-[240px]"}},j={render:ie,args:{...l,variant:"flat",color:"secondary",className:"min-w-[240px]"}};var D,b,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var E,T,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: DisabledKeysTemplate,
  args: {
    ...defaultProps
  }
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var k,v,P;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: SingleSelectionTemplate,
  args: {
    ...defaultProps
  }
}`,...(P=(v=p.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var M,I,K;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: MultipleSelectionTemplate,
  args: {
    ...defaultProps
  }
}`,...(K=(I=m.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var B,_,O;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: WithShortcutTemplate,
  args: {
    ...defaultProps
  }
}`,...(O=(_=x.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var z,R,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: WithStartContentTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary"
  }
}`,...(V=(R=h.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,F,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: WithEndContentTemplate,
  args: {
    ...defaultProps,
    variant: "faded",
    color: "success"
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,L;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: WithDescriptionTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    className: "min-w-[240px]"
  }
}`,...(L=(J=f.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: WithSectionsTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    className: "min-w-[240px]"
  }
}`,...(X=(U=j.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const $e=["Default","DisabledKeys","SingleSelection","MultipleSelection","WithShortcut","WithStartContent","WithEndContent","WithDescription","WithSections"];export{c as Default,d as DisabledKeys,m as MultipleSelection,p as SingleSelection,f as WithDescription,u as WithEndContent,j as WithSections,x as WithShortcut,h as WithStartContent,$e as __namedExportsOrder,Ze as default};
