import{j as e}from"./jsx-runtime-CS_Wz6c_.js";import{e as f}from"./index-Dy2Ak0OH.js";import{$ as r,a as t,c as N,f as Re,d as Be,g as Le,e as _,h as I}from"./useDateFormatter-C-Agq8ec.js";import{a as M,$ as Ze}from"./context-DL1kNI1P.js";import{B as k}from"./button-BlWVJild.js";import{B as _e}from"./button-group-Uv-w_ZYf.js";import{R as Ie,a as Fe}from"./radio-group-_HJbljwI.js";import{R as c}from"./range-calendar-DmvUIs1z.js";import{c as Ue}from"./calendar-base-Z5cw75tP.js";import{c as Ae}from"./cn-ByFajI3K.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./usePress-BDQnv3aP.js";import"./useFocusWithin-Dv5DP61h.js";import"./platform-BknMeRIZ.js";import"./SSRProvider-CmMeNDTG.js";import"./mergeProps-VNdaC4-V.js";import"./openLink-BoTcy9x3.js";import"./index-Dva0CCVE.js";import"./iframe-BglCFgpW.js";import"../sb-preview/runtime.js";import"./numbers-Ck-UmubQ.js";import"./index-CbqanOKQ.js";import"./filter-props-Dg3FrsQW.js";import"./functions-CkCEVJeD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./provider-context-DmA892L5.js";import"./dom-DrLNPp_C.js";import"./button-DeIVZFNz.js";import"./tv-DvaQJQTB.js";import"./classes-D2PKZTJC.js";import"./variants-D625xmxh.js";import"./filter-dom-props-BPLFryJX.js";import"./assertion-BI5aukJI.js";import"./utils-Dl_53iLP.js";import"./spinner-VIEFZZR0.js";import"./clsx-IIdnr2mY.js";import"./useFormReset-D4-J_9f3.js";import"./useFormValidation-HuKicY76.js";import"./base-form-BElK45Vm.js";import"./mergeRefs-BpO9bzld.js";import"./useControlledState-B6nO32B9.js";import"./FocusScope-DK3vkfEa.js";import"./useField-B3aMER4u.js";import"./useLabel-CCOMniNI.js";import"./useLabels-BZfwwVju.js";import"./text-CWQU1A9l.js";import"./useEvent-C6x0jYue.js";import"./createCalendar-BFX-LVTT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useUpdateEffect-DnsQPkjw.js";import"./getScrollParent-BrXadzMd.js";import"./isScrollable-BSEN4xi5.js";import"./VisuallyHidden-BWrRmN2P.js";import"./useDescription-C_123zXK.js";import"./scrollIntoView-DWX27Gz-.js";import"./index-X92CTFGl.js";import"./features-animation-C9bPcVbr.js";import"./GlobalConfig-BfVCAYU5.js";import"./WillChangeMotionValue-B6OkRreS.js";import"./index-BZYHINdx.js";const lr={title:"Components/RangeCalendar",component:c,parameters:{layout:"centered"},argTypes:{visibleMonths:{control:{type:"number",min:1,max:3}},color:{control:{type:"select"},options:["foreground","primary","secondary","success","warning","danger"]},weekdayStyle:{control:{type:"select"},options:["narrow","short","long"]}}},o={...Ue.defaultVariants,visibleMonths:1},i=s=>e.jsx(c,{...s}),Oe=s=>{const a={start:r(t()),end:r(t()).add({weeks:1})};let[n,l]=f.useState(a);return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("p",{className:"text-small text-default-600",children:"Date (uncontrolled)"}),e.jsx(c,{"aria-label":"Date range (uncontrolled)",defaultValue:a,...s})]}),e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("p",{className:"text-small text-default-600",children:"Date (controlled)"}),e.jsx(c,{"aria-label":"Date range (controlled)",value:n,onChange:l,...s,color:"secondary"})]})]})},We=s=>{let a=r(t()),n=[[a,a.add({days:5})],[a.add({days:14}),a.add({days:16})],[a.add({days:23}),a.add({days:24})]],l=d=>n.some(m=>d.compare(m[0])>=0&&d.compare(m[1])<=0);return e.jsx(c,{"aria-label":"Stay dates",isDateUnavailable:l,minValue:a,...s})},Ye=s=>{let{locale:a}=M();return e.jsx(c,{allowsNonContiguousRanges:!0,"aria-label":"Time off request",isDateUnavailable:n=>N(n,a),...s})},ze=s=>{let a=new Re(2024,3,1),[n,l]=f.useState(a);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(c,{focusedValue:n,onFocusChange:l,...s}),e.jsx(k,{className:"max-w-fit",color:"primary",variant:"flat",onPress:()=>l(a),children:"Reset focused date"})]})},Ee=s=>{let[a,n]=f.useState({start:r(t()),end:r(t()).add({weeks:1})}),{locale:l}=M(),d=N(a.start,l)||N(a.end,l);return e.jsx(c,{...s,"aria-label":"Stay dates",errorMessage:d?"Stay dates cannot fall on weekends":void 0,isInvalid:d,value:a,onChange:n})},Ge=s=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(Ze,{locale:"zh-CN-u-ca-chinese",children:e.jsx(c,{"aria-label":"Appointment date",...s})})}),qe=s=>{let[a,n]=f.useState({start:r(t()),end:r(t()).add({weeks:1,days:3})}),[l,d]=f.useState(r(t())),{locale:m}=M(),u=r(t()),R=u.add({months:1}),B={start:Be(u.add({weeks:1}),m),end:Le(u.add({weeks:1}),m)},L={start:_(u),end:I(u)},Z={start:_(R),end:I(R)};const p=ke=>{const{children:Ne,...Me}=ke;return e.jsx(Fe,{...Me,classNames:{base:Ae("flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between","cursor-pointer rounded-full border-2 border-default-200/60","data-[selected=true]:border-primary"),label:"text-tiny text-default-500",labelWrapper:"px-1 m-0",wrapper:"hidden"},children:Ne})};return e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(c,{bottomContent:e.jsxs(Ie,{"aria-label":"Date precision",classNames:{base:"w-full pb-2",wrapper:"-my-2.5 py-2.5 px-3 gap-1 flex-nowrap max-w-[280px] overflow-x-scroll"},defaultValue:"exact_dates",orientation:"horizontal",children:[e.jsx(p,{value:"exact_dates",children:"Exact dates"}),e.jsx(p,{value:"1_day",children:"1 day"}),e.jsx(p,{value:"2_days",children:"2 days"}),e.jsx(p,{value:"3_days",children:"3 days"}),e.jsx(p,{value:"7_days",children:"7 days"}),e.jsx(p,{value:"14_days",children:"14 days"})]}),classNames:{content:"w-full"},focusedValue:l,nextButtonProps:{variant:"bordered"},prevButtonProps:{variant:"bordered"},topContent:e.jsxs(_e,{fullWidth:!0,className:"px-3 max-w-full pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60",radius:"full",size:"sm",variant:"bordered",children:[e.jsx(k,{onPress:()=>{n(B),d(B.end)},children:"Next week"}),e.jsx(k,{onPress:()=>{n(L),d(L.start)},children:"This month"}),e.jsx(k,{onPress:()=>{n(Z),d(Z.start)},children:"Next month"})]}),value:a,onChange:n,onFocusChange:d,...s})})},g={render:i,args:{...o}},x={render:i,args:{...o,isDisabled:!0}},b={render:i,args:{...o,value:{start:r(t()),end:r(t()).add({weeks:1})},isReadOnly:!0}},h={render:Oe,args:{...o}},y={render:i,args:{...o,defaultValue:{start:r(t()),end:r(t()).add({weeks:1})},minValue:r(t())}},v={render:i,args:{...o,defaultValue:{start:r(t()).subtract({weeks:1}),end:r(t())},maxValue:r(t())}},T={render:We,args:{...o,defaultValue:{start:r(t()),end:r(t()).add({weeks:1})}}},w={render:Ye,args:{...o}},j={render:ze,args:{...o}},P={render:Ee,args:{...o}},$={render:i,args:{...o,showMonthAndYearPickers:!0}},C={render:Ge,args:{...o}},V={render:i,args:{...o,visibleMonths:3}},D={render:i,args:{...o,visibleMonths:3,pageBehavior:"single"}},S={render:qe,args:{...o}};var F,U,A;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(A=(U=g.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var O,W,Y;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: true
  }
}`,...(Y=(W=x.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var z,E,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    value: {
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({
        weeks: 1
      })
    },
    isReadOnly: true
  }
}`,...(G=(E=b.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var q,H,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    defaultValue: {
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({
        weeks: 1
      })
    },
    minValue: today(getLocalTimeZone())
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    defaultValue: {
      start: today(getLocalTimeZone()).subtract({
        weeks: 1
      }),
      end: today(getLocalTimeZone())
    },
    maxValue: today(getLocalTimeZone())
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: UnavailableDatesTemplate,
  args: {
    ...defaultProps,
    defaultValue: {
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({
        weeks: 1
      })
    }
  }
}`,...(oe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,de;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: NonContiguousRangesTemplate,
  args: {
    ...defaultProps
  }
}`,...(de=(le=w.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ie,pe;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: ControlledFocusedValueTemplate,
  args: {
    ...defaultProps
  }
}`,...(pe=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var me,ue,fe;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: InvalidDatesTemplate,
  args: {
    ...defaultProps
  }
}`,...(fe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var ge,xe,be;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    showMonthAndYearPickers: true
  }
}`,...(be=(xe=$.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var he,ye,ve;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: InternationalCalendarsTemplate,
  args: {
    ...defaultProps
  }
}`,...(ve=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Te,we,je;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    visibleMonths: 3
  }
}`,...(je=(we=V.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var Pe,$e,Ce;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    visibleMonths: 3,
    pageBehavior: "single"
  }
}`,...(Ce=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ve,De,Se;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: PresetsTemplate,
  args: {
    ...defaultProps
  }
}`,...(Se=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};const dr=["Default","Disabled","ReadOnly","Controlled","MinDateValue","MaxDateValue","UnavailableDates","NonContiguousRanges","ControlledFocusedValue","InvalidDates","WithMonthAndYearPickers","InternationalCalendars","VisibleMonths","PageBehavior","Presets"];export{h as Controlled,j as ControlledFocusedValue,g as Default,x as Disabled,C as InternationalCalendars,P as InvalidDates,v as MaxDateValue,y as MinDateValue,w as NonContiguousRanges,D as PageBehavior,S as Presets,b as ReadOnly,T as UnavailableDates,V as VisibleMonths,$ as WithMonthAndYearPickers,dr as __namedExportsOrder,lr as default};
