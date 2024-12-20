import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as ue}from"./index-Dy2Ak0OH.js";import{B as o}from"./button-Cdc36Unr.js";import{I as i}from"./input-Dh_pBMVz.js";import{P as t,a,b as p}from"./popover-content-CFWXs5fc.js";import{C as fe}from"./card-BmUmX0bp.js";import{C as je}from"./card-header-DOMyRI6_.js";import{C as ge}from"./card-footer-BP0ZcJK-.js";import{p as be}from"./utils-BPavffEa.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C5qmyjg7.js";import"./iframe-BOY4_CVu.js";import"../sb-preview/runtime.js";import"./numbers-Ck-UmubQ.js";import"./index-CbqanOKQ.js";import"./filter-props-Dg3FrsQW.js";import"./functions-CkCEVJeD.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./filterDOMProps-CeZl_uWj.js";import"./platform-BknMeRIZ.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusWithin-Dv5DP61h.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./provider-context-DmA892L5.js";import"./dom-DrLNPp_C.js";import"./button-DeIVZFNz.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";import"./filter-dom-props-BPLFryJX.js";import"./assertion-BI5aukJI.js";import"./utils-Dl_53iLP.js";import"./spinner-VIEFZZR0.js";import"./clsx-IIdnr2mY.js";import"./use-input-c32X4TX1.js";import"./index-BZiajwfa.js";import"./useControlledState-B6nO32B9.js";import"./useFormReset-D4-J_9f3.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./useFormValidation-HuKicY76.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./text-CWQU1A9l.js";import"./close-filled-CY0RPngm.js";import"./useDialog-zbzkMgjp.js";import"./getScrollParent-BrXadzMd.js";import"./context-DL1kNI1P.js";import"./isScrollable-BSEN4xi5.js";import"./VisuallyHidden-BWrRmN2P.js";import"./FocusScope-DK3vkfEa.js";import"./index-C2kXbMnG.js";import"./use-popover-aAg9eS8g.js";import"./useOverlayTriggerState-BqHBeDRf.js";import"./children-CPUywOiX.js";import"./transition-utils-BEWNTMUv.js";import"./number-nHrFdSb-.js";const Er={title:"Components/Popover",component:t,argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow"]},size:{control:{type:"select"},options:["sm","md","lg"]},color:{control:{type:"select"},options:["default","foreground","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},placement:{control:{type:"select"},options:["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"]},backdrop:{control:{type:"select"},options:["transparent","blur","opaque"]},offset:{control:{type:"number"}},isOpen:{control:{type:"boolean"}},defaultOpen:{control:{type:"boolean"}},showArrow:{control:{type:"boolean"}},shouldCloseOnScroll:{control:{type:"boolean"}},disableAnimation:{control:{type:"boolean"}},children:{control:{disable:!0}},shouldBlockScroll:{control:{type:"boolean"}}},decorators:[r=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx(r,{})})]},l={...be.defaultVariants,placement:"top",offset:7,defaultOpen:!1},n=e.jsx(p,{children:e.jsxs("div",{className:"px-1 py-2",children:[e.jsx("div",{className:"text-sm font-bold",children:"Popover Content"}),e.jsx("div",{className:"text-xs",children:"This is a content of the popover"})]})}),c=r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsx(o,{children:"Open Popover"})}),n]}),ve=r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsx(o,{children:"Open Popover"})}),e.jsx(p,{children:s=>e.jsxs("div",{className:"px-1 py-2",children:[e.jsx("h3",{className:"text-sm font-bold",...s,children:"Popover Content"}),e.jsx("div",{className:"text-xs",children:"This is a content of the popover"})]})})]}),we=r=>{const[s,y]=ue.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(t,{...r,style:{zIndex:10},onOpenChange:d=>y(d),children:[e.jsx(a,{children:e.jsx(o,{children:"Open Popover"})}),e.jsx(p,{children:e.jsxs("div",{className:"px-1 py-2",children:[e.jsx("div",{className:"text-sm font-bold",children:"Popover Content"}),e.jsx("div",{className:"text-xs",children:"This is a content of the popover"})]})})]}),e.jsxs("p",{className:"text-sm",children:["isOpen: ",s?"true":"false"]})]})},Ne=r=>{const s=r.color;return e.jsxs("div",{className:"inline-grid grid-cols-3 gap-4",children:[e.jsxs(t,{...r,placement:"top-start",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Top Start"})}),n]}),e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Top"})}),n]}),e.jsxs(t,{...r,placement:"top-end",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Top End"})}),n]}),e.jsxs(t,{...r,placement:"bottom-start",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Bottom Start"})}),n]}),e.jsxs(t,{...r,placement:"bottom",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Bottom"})}),n]}),e.jsxs(t,{...r,placement:"bottom-end",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Bottom End"})}),n]}),e.jsxs(t,{...r,placement:"right-start",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Right Start"})}),n]}),e.jsxs(t,{...r,placement:"right",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Right"})}),n]}),e.jsxs(t,{...r,placement:"right-end",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Right End"})}),n]}),e.jsxs(t,{...r,placement:"left-start",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Left Start"})}),n]}),e.jsxs(t,{...r,placement:"left",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Left"})}),n]}),e.jsxs(t,{...r,placement:"left-end",children:[e.jsx(a,{children:e.jsx(o,{color:s,variant:"flat",children:"Left End"})}),n]})]})},Pe=r=>e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsx(o,{color:"warning",variant:"faded",children:"Default offset (7)"})}),n]}),e.jsxs(t,{...r,offset:15,children:[e.jsx(a,{children:e.jsx(o,{color:"warning",variant:"faded",children:"15 offset"})}),n]}),e.jsxs(t,{...r,offset:-7,children:[e.jsx(a,{children:e.jsx(o,{color:"warning",variant:"faded",children:"-7 offset"})}),n]})]}),Se=r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsx(o,{color:"primary",children:"Open Popover"})}),e.jsx(p,{children:s=>e.jsxs("div",{className:"px-1 py-2 w-full",children:[e.jsx("p",{className:"text-sm font-bold text-foreground",...s,children:"Dimensions"}),e.jsxs("div",{className:"mt-2 flex flex-col gap-2 w-full",children:[e.jsx(i,{autoFocus:!0,defaultValue:"100%",label:"Width",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"300px",label:"Max. width",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"24px",label:"Height",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"30px",label:"Max. height",size:"sm",variant:"bordered"})]})]})})]}),Te=r=>{const s=["opaque","blur","transparent"],y=e.jsx(p,{className:"w-[240px]",children:d=>e.jsxs("div",{className:"px-1 py-2 w-full",children:[e.jsx("p",{className:"text-small font-bold text-foreground",...d,children:"Dimensions"}),e.jsxs("div",{className:"mt-2 flex flex-col gap-2 w-full",children:[e.jsx(i,{defaultValue:"100%",label:"Width",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"300px",label:"Max. width",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"24px",label:"Height",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"30px",label:"Max. height",size:"sm",variant:"bordered"})]})]})});return e.jsx("div",{className:"flex flex-wrap gap-4",children:s.map(d=>e.jsxs(t,{showArrow:!0,offset:10,placement:"bottom",...r,backdrop:d,children:[e.jsx(a,{children:e.jsx(o,{className:"capitalize",color:"warning",variant:"flat",children:d})}),y]},d))})},ye=r=>e.jsxs(fe,{isFooterBlurred:!0,className:"w-[420px] h-[400px] col-span-12 sm:col-span-7",children:[e.jsxs(je,{className:"absolute z-10 top-1 flex-col items-start",children:[e.jsx("p",{className:"text-xs text-white/60 uppercase font-bold",children:"Your day your way"}),e.jsx("h4",{className:"text-white/90 font-medium text-2xl",children:"Your checklist for better sleep"})]}),e.jsx("img",{alt:"Relaxing app background",className:"w-full h-full object-cover",src:"https://nextui.org/images/card-example-5.jpeg"}),e.jsxs(ge,{className:"absolute bg-black/40 bottom-0 z-10 border-t border-default-600 dark:border-default-100",children:[e.jsxs("div",{className:"flex flex-grow gap-2 items-center",children:[e.jsx("img",{alt:"Breathing app icon",className:"rounded-full w-10 h-11 bg-black",src:"https://nextui.org/images/breathing-app-icon.jpeg"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-xs text-white/60",children:"Breathing App"}),e.jsx("p",{className:"text-xs text-white/60",children:"Get a good night's sleep."})]})]}),e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsx(o,{color:"primary",radius:"full",children:"Open Popover"})}),e.jsx(p,{children:s=>e.jsxs("div",{className:"px-1 py-2 w-full",children:[e.jsx("p",{className:"text-sm font-bold text-foreground",...s,children:"Dimensions"}),e.jsxs("div",{className:"mt-2 flex flex-col gap-2 w-full",children:[e.jsx(i,{defaultValue:"100%",label:"Width",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"300px",label:"Max. width",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"24px",label:"Height",size:"sm",variant:"bordered"}),e.jsx(i,{defaultValue:"30px",label:"Max. height",size:"sm",variant:"bordered"})]})]})})]})]})]}),m={render:c,args:{...l}},x={render:c,args:{...l,disableAnimation:!0}},h={render:c,args:{...l,showArrow:!0,isDismissable:!1}},u={render:c,args:{...l,triggerScaleOnOpen:!1}},f={render:c,args:{...l,showArrow:!0}},j={render:we,args:{...l}},g={render:Ne,args:{...l,color:"secondary"}},b={render:Pe,args:{...l,color:"warning"}},v={render:ve,args:{...l}},w={render:Se,args:{...l,showArrow:!0,offset:10,placement:"top",className:"w-[280px] bg-content1"}},N={render:Te,args:{...l,showArrow:!0,offset:10,placement:"bottom"}},P={render:ye,args:{...l,showArrow:!0,offset:10,placement:"left",backdrop:"blur"}},S={render:c,args:{...l,placement:"bottom",motionProps:{variants:{enter:{opacity:1,duration:.2},exit:{opacity:0,duration:.1}}}}},T={render:r=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(c,{...r,label:"shouldBlockScroll: false",shouldBlockScroll:!1}),e.jsx(c,{...r,label:"shouldBlockScroll: true",shouldBlockScroll:!0})]}),args:{...l}};var B,k,O;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(O=(k=m.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var W,A,C;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    disableAnimation: true
  }
}`,...(C=(A=x.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var z,V,D;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    showArrow: true,
    isDismissable: false
  }
}`,...(D=(V=h.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var M,F,E;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    triggerScaleOnOpen: false
  }
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var R,H,I;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    showArrow: true
  }
}`,...(I=(H=f.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,_,q;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: OpenChangeTemplate,
  args: {
    ...defaultProps
  }
}`,...(q=(_=j.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var Y,G,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: PlacementsTemplate,
  args: {
    ...defaultProps,
    color: "secondary"
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: OffsetTemplate,
  args: {
    ...defaultProps,
    color: "warning"
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: WithTitlePropsTemplate,
  args: {
    ...defaultProps
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: WithFormTemplate,
  args: {
    ...defaultProps,
    showArrow: true,
    offset: 10,
    placement: "top",
    className: "w-[280px] bg-content1"
  }
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ae;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: BackdropsTemplate,
  args: {
    ...defaultProps,
    showArrow: true,
    offset: 10,
    placement: "bottom"
  }
}`,...(ae=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,le,ie;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: WithBackdropTemplate,
  args: {
    ...defaultProps,
    showArrow: true,
    offset: 10,
    placement: "left",
    backdrop: "blur"
  }
}`,...(ie=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    placement: "bottom",
    motionProps: {
      variants: {
        enter: {
          opacity: 1,
          duration: 0.2
        },
        exit: {
          opacity: 0,
          duration: 0.1
        }
      }
    }
  }
}`,...(pe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,xe,he;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-8">
        <Template {...args} label="shouldBlockScroll: false" shouldBlockScroll={false} />
        <Template {...args} label="shouldBlockScroll: true" shouldBlockScroll={true} />
      </div>;
  },
  args: {
    ...defaultProps
  }
}`,...(he=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const Rr=["Default","DisableAnimation","NonDismissable","WithoutScaleTrigger","WithArrow","OpenChange","Placements","WithOffset","WithTitleProps","WithForm","Backdrops","WithBackdrop","CustomMotion","WithShouldBlockScroll"];export{N as Backdrops,S as CustomMotion,m as Default,x as DisableAnimation,h as NonDismissable,j as OpenChange,g as Placements,f as WithArrow,P as WithBackdrop,w as WithForm,b as WithOffset,T as WithShouldBlockScroll,v as WithTitleProps,u as WithoutScaleTrigger,Rr as __namedExportsOrder,Er as default};
