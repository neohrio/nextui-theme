import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as pe}from"./index-Dy2Ak0OH.js";import{B as r}from"./button-Cmz5JDDW.js";import{T as o}from"./tooltip-CVJMxho2.js";import{p as me}from"./utils-BPavffEa.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C7lViFB7.js";import"./iframe-DMAjldn4.js";import"../sb-preview/runtime.js";import"./numbers-Ck-UmubQ.js";import"./index-CbqanOKQ.js";import"./filter-props-Dg3FrsQW.js";import"./functions-CkCEVJeD.js";import"./mergeProps-VNdaC4-V.js";import"./SSRProvider-CmMeNDTG.js";import"./filterDOMProps-CeZl_uWj.js";import"./platform-BknMeRIZ.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusWithin-Dv5DP61h.js";import"./openLink-BoTcy9x3.js";import"./usePress-BDQnv3aP.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./provider-context-DmA892L5.js";import"./dom-DrLNPp_C.js";import"./button-DeIVZFNz.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";import"./filter-dom-props-BPLFryJX.js";import"./assertion-BI5aukJI.js";import"./utils-Dl_53iLP.js";import"./spinner-VIEFZZR0.js";import"./clsx-IIdnr2mY.js";import"./useModal-DGSPTD8W.js";import"./index-C2kXbMnG.js";import"./useOverlayTriggerState-BqHBeDRf.js";import"./FocusScope-DK3vkfEa.js";import"./useControlledState-B6nO32B9.js";import"./index-BZiajwfa.js";import"./refs-DLrq_aXV.js";import"./transition-utils-BEWNTMUv.js";import"./number-nHrFdSb-.js";import"./context-DL1kNI1P.js";const mt={title:"Components/Tooltip",component:o,argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow"]},size:{control:{type:"select"},options:["sm","md","lg"]},color:{control:{type:"select"},options:["default","foreground","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},showArrow:{control:{type:"boolean"}},placement:{control:{type:"select"},options:["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"]},delay:{control:{type:"number"}},offset:{control:{type:"number"}},defaultOpen:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},disableAnimation:{control:{type:"boolean"}},children:{control:{disable:!0}}},decorators:[t=>e.jsx("div",{className:"flex items-center justify-center w-screen h-screen",children:e.jsx(t,{})})]},n={...me.defaultVariants,placement:"top",delay:0,offset:7,defaultOpen:!1,isDisabled:!1,content:"I am a tooltip",children:e.jsx(r,{children:"Hover me"})},ue=t=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...t,content:"Tooltip 1",delay:1e3,children:e.jsx(r,{color:"success",variant:"faded",children:"Delay Open (1000ms)"})}),e.jsx(o,{...t,closeDelay:2e3,content:"Tooltip 2",children:e.jsx(r,{color:"success",variant:"faded",children:"Delay Close (2000ms)"})})]}),fe=t=>{const[s,v]=pe.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(o,{...t,onOpenChange:O=>v(O),children:e.jsx(r,{children:"Hover me"})}),e.jsxs("p",{className:"text-sm",children:["isOpen: ",s?"true":"false"]})]})},he=t=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...t,content:"Tooltip 1",children:e.jsx(r,{color:"secondary",variant:"faded",children:"Default offset (7)"})}),e.jsx(o,{...t,content:"Tooltip 2",offset:15,children:e.jsx(r,{color:"secondary",variant:"faded",children:"15 offset"})}),e.jsx(o,{...t,content:"Tooltip 3",offset:-7,children:e.jsx(r,{color:"secondary",variant:"faded",children:"-7 offset"})})]}),xe=t=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...t,content:"Tooltip 1",delay:1e3,children:e.jsx(r,{children:"Hover me (delay 1000ms)"})}),e.jsx(o,{...t,content:"Tooltip 2",children:e.jsx(r,{children:"Then hover me"})})]}),ge=t=>e.jsxs("div",{className:"inline-grid grid-cols-3 gap-4",children:[e.jsx(o,{...t,content:"Top Start",placement:"top-start",children:e.jsx(r,{color:"primary",variant:"flat",children:"Top Start"})}),e.jsx(o,{...t,content:"Top",children:e.jsx(r,{color:"primary",variant:"flat",children:"Top"})}),e.jsx(o,{...t,content:"Top End",placement:"top-end",children:e.jsx(r,{color:"primary",variant:"flat",children:"Top End"})}),e.jsx(o,{...t,content:"Bottom Start",placement:"bottom-start",children:e.jsx(r,{color:"primary",variant:"flat",children:"Bottom Start"})}),e.jsx(o,{...t,content:"Bottom",placement:"bottom",children:e.jsx(r,{color:"primary",variant:"flat",children:"Bottom"})}),e.jsx(o,{...t,content:"Bottom End",placement:"bottom-end",children:e.jsx(r,{color:"primary",variant:"flat",children:"Bottom End"})}),e.jsx(o,{...t,content:"Right Start",placement:"right-start",children:e.jsx(r,{color:"primary",variant:"flat",children:"Right Start"})}),e.jsx(o,{...t,content:"Right",placement:"right",children:e.jsx(r,{color:"primary",variant:"flat",children:"Right"})}),e.jsx(o,{...t,content:"Right End",placement:"right-end",children:e.jsx(r,{color:"primary",variant:"flat",children:"Right End"})}),e.jsx(o,{...t,content:"Left Start",placement:"left-start",children:e.jsx(r,{color:"primary",variant:"flat",children:"Left Start"})}),e.jsx(o,{...t,content:"Left",placement:"left",children:e.jsx(r,{color:"primary",variant:"flat",children:"Left"})}),e.jsx(o,{...t,content:"Left End",placement:"left-end",children:e.jsx(r,{color:"primary",variant:"flat",children:"Left End"})})]}),je=t=>{const[s,v]=pe.useState(!1),O=()=>{console.log("handleOpen"),v(de=>!de)};return e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(o,{...t,content:"Tooltip 1",isOpen:s,children:e.jsx(r,{onPress:O,children:s?"Close":"Open"})})})},a={args:{...n}},i={args:{...n,disableAnimation:!0}},c={args:{...n,showArrow:!0}},l={render:fe,args:{...n}},p={render:ge,args:{...n,color:"primary"}},d={render:he,args:{...n,color:"secondary"}},m={render:ue,args:{...n}},u={args:{...n,shouldCloseOnInteractOutside:!1,content:e.jsxs("div",{className:"px-1 py-2",children:[e.jsx("div",{className:"text-sm font-bold",children:"Custom Content"}),e.jsx("div",{className:"text-xs",children:"This is a custom tooltip content"})]})}},f={args:{...n,motionProps:{variants:{exit:{opacity:0,transition:{opacity:{duration:.1,easings:"easeInOut"}}},enter:{opacity:1,transition:{opacity:{easings:"easeOut",duration:.15}}}}}}},h={render:xe,args:{...n}},x={render:je,args:{...n}},g={args:{...n,defaultOpen:!0}},j={args:{...n,isOpen:!0,showArrow:!0,content:e.jsxs("div",{className:"px-1 py-2",children:[e.jsx("div",{className:"text-sm font-bold",children:"Custom Content"}),e.jsx("div",{className:"text-xs",children:"This is a custom tooltip content"})]})}},y={args:{...n,isDisabled:!0}};var T,b,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,P,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disableAnimation: true
  }
}`,...(D=(P=i.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var N,w,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showArrow: true
  }
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,B,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: OpenChangeTemplate,
  args: {
    ...defaultProps
  }
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var R,L,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: PlacementsTemplate,
  args: {
    ...defaultProps,
    color: "primary"
  }
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,H,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: OffsetTemplate,
  args: {
    ...defaultProps,
    color: "secondary"
  }
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var z,V,k;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: DelayTemplate,
  args: {
    ...defaultProps
  }
}`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var q,F,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    shouldCloseOnInteractOutside: false,
    content: <div className="px-1 py-2">
        <div className="text-sm font-bold">Custom Content</div>
        <div className="text-xs">This is a custom tooltip content</div>
      </div>
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    motionProps: {
      variants: {
        exit: {
          opacity: 0,
          transition: {
            opacity: {
              duration: 0.1,
              easings: "easeInOut"
            }
          }
        },
        enter: {
          opacity: 1,
          transition: {
            opacity: {
              easings: "easeOut",
              duration: 0.15
            }
          }
        }
      }
    }
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: MultipleTemplate,
  args: {
    ...defaultProps
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,oe;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    defaultOpen: true
  }
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,ae;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isOpen: true,
    showArrow: true,
    content: <div className="px-1 py-2">
        <div className="text-sm font-bold">Custom Content</div>
        <div className="text-xs">This is a custom tooltip content</div>
      </div>
  }
}`,...(ae=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,ce,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isDisabled: true
  }
}`,...(le=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const ut=["Default","DisableAnimation","WithArrow","OpenChange","Placements","WithOffset","withDelay","CustomContent","CustomMotion","Multiple","Controlled","DefaultOpen","AlwaysOpen","Disabled"];export{j as AlwaysOpen,x as Controlled,u as CustomContent,f as CustomMotion,a as Default,g as DefaultOpen,i as DisableAnimation,y as Disabled,h as Multiple,l as OpenChange,p as Placements,c as WithArrow,d as WithOffset,ut as __namedExportsOrder,mt as default,m as withDelay};
