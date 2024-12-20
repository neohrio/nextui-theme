import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as E}from"./index-Dy2Ak0OH.js";import{B as m}from"./button-Cdc36Unr.js";import{A as Re}from"./avatar-Bt8qBNc1.js";import{D as i,d as qe,a as c,b as d}from"./dropdown-menu-DftHdO0u.js";import{a as r}from"./menu-item-base-DuHCSS1a.js";import{M as L}from"./menu-section-base-Bk7emvc_.js";import{U as Ge}from"./user-Cxisgfvv.js";import{p as Je}from"./utils-BPavffEa.js";import{A as B,C as M,E as O,D as _}from"./edit-document-vdXEjkET.js";import{c as I}from"./clsx-IIdnr2mY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C5qmyjg7.js";import"./iframe-BOY4_CVu.js";import"../sb-preview/runtime.js";import"./numbers-Ck-UmubQ.js";import"./index-CbqanOKQ.js";import"./filter-props-Dg3FrsQW.js";import"./functions-CkCEVJeD.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./filterDOMProps-CeZl_uWj.js";import"./platform-BknMeRIZ.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusWithin-Dv5DP61h.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./provider-context-DmA892L5.js";import"./dom-DrLNPp_C.js";import"./button-DeIVZFNz.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";import"./filter-dom-props-BPLFryJX.js";import"./assertion-BI5aukJI.js";import"./utils-Dl_53iLP.js";import"./spinner-VIEFZZR0.js";import"./index-BO-m7dRh.js";import"./index-BZiajwfa.js";import"./text-CWQU1A9l.js";import"./popover-content-CFWXs5fc.js";import"./useDialog-zbzkMgjp.js";import"./getScrollParent-BrXadzMd.js";import"./context-DL1kNI1P.js";import"./isScrollable-BSEN4xi5.js";import"./useLabels-BZfwwVju.js";import"./VisuallyHidden-BWrRmN2P.js";import"./FocusScope-DK3vkfEa.js";import"./index-C2kXbMnG.js";import"./use-popover-aAg9eS8g.js";import"./useOverlayTriggerState-BqHBeDRf.js";import"./useControlledState-B6nO32B9.js";import"./mergeRefs-BpO9bzld.js";import"./children-CPUywOiX.js";import"./transition-utils-BEWNTMUv.js";import"./useMenuTriggerState-BDchrJPC.js";import"./useMenuTrigger-sCxY0L_2.js";import"./useSelectableItem-Abho0jbh.js";import"./useEvent-C6x0jYue.js";import"./scrollIntoView-DWX27Gz-.js";import"./useDescription-C_123zXK.js";import"./refs-DLrq_aXV.js";import"./index-CunruRV8.js";import"./SelectionManager-CXnfrpCS.js";import"./DOMLayoutDelegate-CSdX5_aL.js";import"./useCollator-D24U6gvG.js";import"./useTreeState-CxAVT1yY.js";import"./divider-DiQ-8az1.js";import"./Item-CkpyyYVy.js";import"./Section-CJejNSst.js";import"./number-nHrFdSb-.js";const Wt={title:"Components/Dropdown",component:i,argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},placement:{control:{type:"select"},options:["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"]},backdrop:{control:{type:"select"},options:["transparent","blur","opaque"]},offset:{control:{type:"number"}},defaultOpen:{control:{type:"boolean"}},showArrow:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},disableAnimation:{control:{type:"boolean"}},children:{control:{disable:!0}},shouldBlockScroll:{control:{type:"boolean"}}},decorators:[t=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx(t,{})})]},o={...Je.defaultVariants,...qe.defaultVariants,placement:"bottom",offset:7,isDisabled:!1,defaultOpen:!1},Qe=[{key:"new",label:"New file"},{key:"copy",label:"Copy link"},{key:"edit",label:"Edit file"},{key:"delete",label:"Delete file"}],p=({color:t,variant:s,label:n="Trigger",...l})=>e.jsxs(i,{...l,children:[e.jsx(c,{children:e.jsx(m,{children:n})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,children:[e.jsx(r,{onPress:()=>alert("New file"),children:"New file"},"new"),e.jsx(r,{children:"Copy link"},"copy"),e.jsx(r,{children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]})]}),Xe=({color:t,variant:s,...n})=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,children:[e.jsx(r,{children:"New file"},"new"),e.jsx(r,{children:"Copy link"},"copy"),e.jsx(r,{children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",closeOnSelect:!1,color:"danger",children:"Delete file"},"delete")]})]}),e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",closeOnSelect:!1,color:t,variant:s,children:[e.jsx(r,{children:"New file"},"new"),e.jsx(r,{children:"Copy link"},"copy"),e.jsx(r,{children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]})]})]}),Ye=({color:t,variant:s,...n})=>e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:"Trigger"})}),e.jsx(d,{"aria-label":"Actions",color:t,items:Qe,variant:s,onAction:alert,children:l=>e.jsx(r,{className:l.key==="delete"?"text-danger":"",color:l.key==="delete"?"danger":"default",children:l.label},l.key)})]}),Ze=({color:t,variant:s,...n})=>e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,onAction:alert,children:[e.jsx(r,{children:"New file"},"new"),e.jsx(r,{children:"Copy link"},"copy"),e.jsx(r,{showDivider:!0,children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]})]}),$e=({color:t,variant:s,...n})=>e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,disabledKeys:["edit","delete"],variant:s,onAction:alert,children:[e.jsx(r,{children:"New file"},"new"),e.jsx(r,{children:"Copy link"},"copy"),e.jsx(r,{children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]})]}),er=({color:t,variant:s,...n})=>{const[l,a]=E.useState(new Set(["text"])),K=E.useMemo(()=>Array.from(l).map(H=>H.toString().replace("_"," ")).join(", "),[l]);return e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:K})}),e.jsxs(d,{disallowEmptySelection:!0,"aria-label":"Actions",color:t,selectedKeys:l,selectionMode:"single",variant:s,onSelectionChange:a,children:[e.jsx(r,{children:"Text"},"text"),e.jsx(r,{children:"Number"},"number"),e.jsx(r,{children:"Date"},"date"),e.jsx(r,{children:"Single Date"},"single_date"),e.jsx(r,{children:"Iteration"},"iteration")]})]})},rr=({color:t,variant:s,...n})=>{const[l,a]=E.useState(new Set(["text"])),K=E.useMemo(()=>Array.from(l).map(H=>H.toString().replace("_"," ")).join(", "),[l]);return e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:K})}),e.jsxs(d,{disallowEmptySelection:!0,"aria-label":"Actions",closeOnSelect:!1,color:t,selectedKeys:l,selectionMode:"multiple",variant:s,onSelectionChange:a,children:[e.jsx(r,{children:"Text"},"text"),e.jsx(r,{children:"Number"},"number"),e.jsx(r,{children:"Date"},"date"),e.jsx(r,{children:"Single Date"},"single_date"),e.jsx(r,{children:"Iteration"},"iteration")]})]})},tr=({color:t,variant:s,...n})=>e.jsxs(i,{...n,children:[e.jsx(c,{children:e.jsx(m,{children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,onAction:alert,children:[e.jsx(r,{shortcut:"⌘N",children:"New file"},"new"),e.jsx(r,{shortcut:"⌘C",children:"Copy link"},"copy"),e.jsx(r,{shortcut:"⌘⇧E",children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",shortcut:"⌘⇧D",children:"Delete file"},"delete")]})]}),Ue=({color:t,variant:s,disableAnimation:n,...l})=>{const a="text-2xl text-secondary pointer-events-none flex-shrink-0";return e.jsxs(i,{...l,disableAnimation:n,children:[e.jsx(c,{children:e.jsx(m,{color:"secondary",disableAnimation:n,variant:"flat",children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,onAction:alert,children:[e.jsx(r,{shortcut:"⌘N",startContent:e.jsx(B,{className:a}),children:"New file"},"new"),e.jsx(r,{shortcut:"⌘C",startContent:e.jsx(M,{className:a}),children:"Copy link"},"copy"),e.jsx(r,{shortcut:"⌘⇧E",startContent:e.jsx(O,{className:a}),children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",shortcut:"⌘⇧D",startContent:e.jsx(_,{className:I(a,"!text-danger")}),children:"Delete file"},"delete")]})]})},sr=({color:t,variant:s,disableAnimation:n,...l})=>{const a="text-2xl text-default-500 pointer-events-none flex-shrink-0";return e.jsxs(i,{...l,disableAnimation:n,children:[e.jsx(c,{children:e.jsx(m,{color:"success",disableAnimation:n,variant:"faded",children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,onAction:alert,children:[e.jsx(r,{endContent:e.jsx(B,{className:a}),children:"New file"},"new"),e.jsx(r,{endContent:e.jsx(M,{className:a}),children:"Copy link"},"copy"),e.jsx(r,{endContent:e.jsx(O,{className:a}),children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",endContent:e.jsx(_,{className:I(a,"!text-danger")}),children:"Delete file"},"delete")]})]})},nr=({color:t,variant:s,disableAnimation:n,...l})=>{const a="text-2xl text-secondary pointer-events-none flex-shrink-0";return e.jsxs(i,{...l,disableAnimation:n,children:[e.jsx(c,{children:e.jsx(m,{color:"secondary",disableAnimation:n,variant:"flat",children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",color:t,variant:s,onAction:alert,children:[e.jsx(r,{description:"Create a new file",shortcut:"⌘N",startContent:e.jsx(B,{className:a}),children:"New file"},"new"),e.jsx(r,{description:"Copy the file link",shortcut:"⌘C",startContent:e.jsx(M,{className:a}),children:"Copy link"},"copy"),e.jsx(r,{description:"Allows you to edit the file",shortcut:"⌘⇧E",startContent:e.jsx(O,{className:a}),children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",description:"Permanently delete the file",shortcut:"⌘⇧D",startContent:e.jsx(_,{className:I(a,"!text-danger")}),children:"Delete file"},"delete")]})]})},ar=({color:t,variant:s,disableAnimation:n,...l})=>{const a="text-2xl text-secondary pointer-events-none flex-shrink-0";return e.jsxs(i,{...l,disableAnimation:n,children:[e.jsx(c,{children:e.jsx(m,{color:"secondary",disableAnimation:n,variant:"flat",children:"Trigger"})}),e.jsxs(d,{"aria-label":"Actions",closeOnSelect:!1,color:t,variant:s,onAction:alert,children:[e.jsxs(L,{title:"Actions",children:[e.jsx(r,{description:"Create a new file",shortcut:"⌘N",startContent:e.jsx(B,{className:a}),children:"New file"},"new"),e.jsx(r,{description:"Copy the file link",shortcut:"⌘C",startContent:e.jsx(M,{className:a}),children:"Copy link"},"copy"),e.jsx(r,{description:"Allows you to edit the file",shortcut:"⌘⇧E",startContent:e.jsx(O,{className:a}),children:"Edit file"},"edit")]}),e.jsx(L,{title:"Danger zone",children:e.jsx(r,{className:"text-danger",color:"danger",description:"Permanently delete the file",shortcut:"⌘⇧D",startContent:e.jsx(_,{className:I(a,"!text-danger")}),children:"Delete file"},"delete")})]})]})},lr=({variant:t,...s})=>e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsxs(i,{...s,placement:"bottom-end",children:[e.jsx(c,{children:e.jsx(Re,{isBordered:!0,as:"button",className:"transition-transform",color:"secondary",size:"md",src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"})}),e.jsxs(d,{"aria-label":"Profile Actions",color:"secondary",variant:t,children:[e.jsxs(r,{className:"h-14 gap-2",children:[e.jsx("p",{className:"font-semibold",children:"Signed in as"}),e.jsx("p",{className:"font-semibold",children:"zoey@example.com"})]},"profile"),e.jsx(r,{children:"My Settings"},"settings"),e.jsx(r,{children:"Team Settings"},"team_settings"),e.jsx(r,{children:"Analytics"},"analytics"),e.jsx(r,{children:"System"},"system"),e.jsx(r,{children:"Configurations"},"configurations"),e.jsx(r,{children:"Help & Feedback"},"help_and_feedback"),e.jsx(r,{color:"danger",children:"Log Out"},"logout")]})]}),e.jsxs(i,{...s,placement:"bottom-start",children:[e.jsx(c,{children:e.jsx(Ge,{as:"button",avatarProps:{isBordered:!0,color:"primary",size:"md",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"},className:"transition-transform",description:"@tonyreichert",name:"Tony Reichert"})}),e.jsxs(d,{"aria-label":"User Actions",color:"primary",variant:t,children:[e.jsxs(r,{className:"h-14 gap-2",children:[e.jsx("p",{className:"font-bold",children:"Signed in as"}),e.jsx("p",{className:"font-bold",children:"@tonyreichert"})]},"profile"),e.jsx(r,{children:"My Settings"},"settings"),e.jsx(r,{children:"Team Settings"},"team_settings"),e.jsx(r,{children:"Analytics"},"analytics"),e.jsx(r,{children:"System"},"system"),e.jsx(r,{children:"Configurations"},"configurations"),e.jsx(r,{children:"Help & Feedback"},"help_and_feedback"),e.jsx(r,{color:"danger",children:"Log Out"},"logout")]})]})]}),or=({variant:t,...s})=>e.jsxs(i,{...s,children:[e.jsx(c,{children:e.jsx("span",{className:"flex items-center gap-2",children:"Profile"})}),e.jsxs(d,{"aria-label":"Actions",variant:t,children:[e.jsx(r,{children:"New file"},"new"),e.jsx(r,{children:"Copy link"},"copy"),e.jsx(r,{children:"Edit file"},"edit"),e.jsx(r,{className:"text-danger",color:"danger",children:"Delete file"},"delete")]})]}),h={render:p,args:{...o}},x={render:Ye,args:{...o}},u={render:p,args:{...o,showArrow:!0}},g={render:Ze,args:{...o}},f={render:$e,args:{...o}},j={render:p,args:{...o,isDisabled:!0}},b={render:er,args:{...o}},y={render:rr,args:{...o}},S={render:tr,args:{...o}},N={render:Ue,args:{...o,variant:"flat",color:"secondary"}},T={render:sr,args:{...o,variant:"faded",color:"success"}},C={render:nr,args:{...o,variant:"flat",color:"secondary",className:"min-w-[240px]"}},w={render:ar,args:{...o,variant:"flat",color:"secondary",className:"min-w-[240px]"}},D={render:lr,args:{...o,variant:"flat",offset:14}},v={render:or,args:{...o,variant:"flat",offset:14}},k={render:Ue,args:{...o,showArrow:!0,variant:"flat",color:"secondary",disableAnimation:!0}},A={render:Xe,args:{...o}},W={args:{...o},render:t=>e.jsxs("div",{className:"relative h-screen w-screen",children:[e.jsxs("div",{className:"absolute top-0 left-0 p-8 flex gap-4",children:[e.jsx(p,{...t,label:"placement: top",placement:"top"}),e.jsx(p,{...t,label:"placement: bottom",placement:"bottom"})]}),e.jsxs("div",{className:"absolute bottom-0 left-0 p-8 flex gap-4",children:[e.jsx(p,{...t,label:"placement: bottom",placement:"bottom"}),e.jsx(p,{...t,label:"placement: top",placement:"top"})]}),e.jsxs("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 p-8 flex flex-col gap-4",children:[e.jsx(p,{...t,label:"placement: left",placement:"left"}),e.jsx(p,{...t,label:"placement: right",placement:"right"})]}),e.jsxs("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 p-8 flex flex-col gap-4",children:[e.jsx(p,{...t,label:"placement: right",placement:"right"}),e.jsx(p,{...t,label:"placement: left",placement:"left"})]})]})},P={render:t=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(p,{...t,label:"shouldBlockScroll: false",shouldBlockScroll:!1}),e.jsx(p,{...t,label:"shouldBlockScroll: true",shouldBlockScroll:!0})]}),args:{...o}};var F,z,V;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(V=(z=h.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var U,R,q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: DynamicTemplate,
  args: {
    ...defaultProps
  }
}`,...(q=(R=x.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var G,J,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    showArrow: true
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: DividerTemplate,
  args: {
    ...defaultProps
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DisabledKeysTemplate,
  args: {
    ...defaultProps
  }
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: true
  }
}`,...(ne=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,le,oe;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: SingleSelectionTemplate,
  args: {
    ...defaultProps
  }
}`,...(oe=(le=b.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,ce,de;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: MultipleSelectionTemplate,
  args: {
    ...defaultProps
  }
}`,...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,he;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: WithShortcutTemplate,
  args: {
    ...defaultProps
  }
}`,...(he=(me=S.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,ue,ge;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: WithStartContentTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary"
  }
}`,...(ge=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var fe,je,be;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: WithEndContentTemplate,
  args: {
    ...defaultProps,
    variant: "faded",
    color: "success"
  }
}`,...(be=(je=T.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var ye,Se,Ne;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: WithDescriptionTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    className: "min-w-[240px]"
  }
}`,...(Ne=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Te,Ce,we;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: WithSectionsTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    className: "min-w-[240px]"
  }
}`,...(we=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var De,ve,ke;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: CustomTriggerTemplate,
  args: {
    ...defaultProps,
    variant: "flat",
    offset: 14
  }
}`,...(ke=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Ae,We,Pe;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: CustomHTMLTrigger,
  args: {
    ...defaultProps,
    variant: "flat",
    offset: 14
  }
}`,...(Pe=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var Ee,Be,Me;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: WithStartContentTemplate,
  args: {
    ...defaultProps,
    showArrow: true,
    variant: "flat",
    color: "secondary",
    disableAnimation: true
  }
}`,...(Me=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var Oe,_e,Ie;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: ItemCloseOnSelectTemplate,
  args: {
    ...defaultProps
  }
}`,...(Ie=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Ke,He,Le;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  render: args => <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0 p-8 flex gap-4">
        <Template {...args} label="placement: top" placement="top" />
        <Template {...args} label="placement: bottom" placement="bottom" />
      </div>
      <div className="absolute bottom-0 left-0 p-8 flex gap-4">
        <Template {...args} label="placement: bottom" placement="bottom" />
        <Template {...args} label="placement: top" placement="top" />
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 p-8 flex flex-col gap-4">
        <Template {...args} label="placement: left" placement="left" />
        <Template {...args} label="placement: right" placement="right" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 p-8 flex flex-col gap-4">
        <Template {...args} label="placement: right" placement="right" />
        <Template {...args} label="placement: left" placement="left" />
      </div>
    </div>
}`,...(Le=(He=W.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var Fe,ze,Ve;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-8">
        <Template {...args} label="shouldBlockScroll: false" shouldBlockScroll={false} />
        <Template {...args} label="shouldBlockScroll: true" shouldBlockScroll={true} />
      </div>;
  },
  args: {
    ...defaultProps
  }
}`,...(Ve=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};const Pt=["Default","Dynamic","WithArrow","WithDivider","DisabledKeys","DisabledTrigger","SingleSelection","MultipleSelection","WithShortcut","WithStartContent","WithEndContent","WithDescription","WithSections","WithCustomTrigger","WithCustomHTMLTrigger","DisableAnimation","ItemCloseOnSelect","WithFallbackPlacements","WithShouldBlockScroll"];export{h as Default,k as DisableAnimation,f as DisabledKeys,j as DisabledTrigger,x as Dynamic,A as ItemCloseOnSelect,y as MultipleSelection,b as SingleSelection,u as WithArrow,v as WithCustomHTMLTrigger,D as WithCustomTrigger,C as WithDescription,g as WithDivider,T as WithEndContent,W as WithFallbackPlacements,w as WithSections,S as WithShortcut,P as WithShouldBlockScroll,N as WithStartContent,Pt as __namedExportsOrder,Wt as default};
