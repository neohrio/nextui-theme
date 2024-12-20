import{j as a}from"./jsx-runtime-CS_Wz6c_.js";import{r as $,e as ue}from"./index-Dy2Ak0OH.js";import{o as ze,t as Xe,s as Ne,i as ie,b as E,$ as q,a as W,j as La,k as re,c as ir,d as ur,g as cr,e as mr,h as pr}from"./useDateFormatter-C-Agq8ec.js";import{a as Ke,$ as fr}from"./context-DL1kNI1P.js";import{B as de}from"./button-Cdc36Unr.js";import{B as br}from"./button-group-BLqOoEhY.js";import{R as gr,a as vr}from"./radio-group-_HJbljwI.js";import{T as et}from"./time-input-CvSuanAO.js";import{e as hr,l as xr,f as Pr,g as yr,h as $r,m as Cr,j as fe,k as Je,$ as Dr,a as Tr,n as Vr,d as Aa,D as jr}from"./date-input-field-Iv3zN5h-.js";import{F as Sr}from"./free-solo-popover-Bn0YscPq.js";import{R as Mr}from"./range-calendar-BPDgxqNE.js";import{$ as Ir}from"./createCalendar-BFX-LVTT.js";import{d as tt,$ as Ge}from"./mergeProps-VNdaC4-V.js";import{u as Rr}from"./dom-DrLNPp_C.js";import{f as wr}from"./filter-dom-props-BPLFryJX.js";import{d as at,c as rt,b as nt,$ as Br,u as _r,a as Wr}from"./base-form-BElK45Vm.js";import{$ as Fr}from"./useOverlayTriggerState-BqHBeDRf.js";import{$ as Zr}from"./useControlledState-B6nO32B9.js";import{b as Or}from"./FocusScope-DK3vkfEa.js";import{$ as kr}from"./filterDOMProps-CeZl_uWj.js";import{$ as Er}from"./useDescription-C_123zXK.js";import{$ as Lr}from"./useField-B3aMER4u.js";import{c as Ar}from"./useFocusWithin-Dv5DP61h.js";import{$ as Ur}from"./getScrollParent-BrXadzMd.js";import{u as Gr,a as qr}from"./use-date-picker-base-CY4ef0ia.js";import{u as Kr}from"./provider-context-DmA892L5.js";import{a as Yr}from"./use-popover-aAg9eS8g.js";import{o as ot}from"./functions-CkCEVJeD.js";import{c as k}from"./clsx-IIdnr2mY.js";import{c as Qe}from"./cn-ByFajI3K.js";import{d as z}from"./assertion-BI5aukJI.js";import{f as Hr}from"./utils-Dl_53iLP.js";import{A as zr}from"./index-CbqanOKQ.js";import{C as Jr}from"./calendar-bold-Cqva11Eg.js";import{F as Qr}from"./form-B92f7kXN.js";import{b as Ua}from"./button-DeIVZFNz.js";import{M as qe,S as lt}from"./moon-NjPEiHhI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./usePress-BDQnv3aP.js";import"./platform-BknMeRIZ.js";import"./openLink-BoTcy9x3.js";import"./SSRProvider-CmMeNDTG.js";import"./index-C5qmyjg7.js";import"./iframe-BOY4_CVu.js";import"../sb-preview/runtime.js";import"./numbers-Ck-UmubQ.js";import"./useFocusable-aXrZ_JBU.js";import"./focusSafely-Ch4YQihX.js";import"./useFocusRing-BgM-8Y4a.js";import"./useKeyboard-A8_doyNT.js";import"./console-B9aq-5md.js";import"./useHover-bWO3Z0KF.js";import"./spinner-VIEFZZR0.js";import"./tv-DvaQJQTB.js";import"./useFormReset-D4-J_9f3.js";import"./useFormValidation-HuKicY76.js";import"./classes-D2PKZTJC.js";import"./text-CWQU1A9l.js";import"./useLabels-BZfwwVju.js";import"./useEvent-C6x0jYue.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFilter-B0P_PSWl.js";import"./useCollator-D24U6gvG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useDialog-zbzkMgjp.js";import"./VisuallyHidden-BWrRmN2P.js";import"./index-C2kXbMnG.js";import"./utils-BPavffEa.js";import"./variants-D625xmxh.js";import"./number-nHrFdSb-.js";import"./transition-utils-BEWNTMUv.js";import"./calendar-base-UzSsfGYo.js";import"./useUpdateEffect-DnsQPkjw.js";import"./index-X92CTFGl.js";import"./features-animation-C9bPcVbr.js";import"./GlobalConfig-BfVCAYU5.js";import"./WillChangeMotionValue-B6OkRreS.js";import"./index-BZYHINdx.js";import"./filter-props-Dg3FrsQW.js";import"./mergeRefs-BpO9bzld.js";import"./useLabel-CCOMniNI.js";import"./index-BZiajwfa.js";function Xr(e){return e&&e.__esModule?e.default:e}function Nr(e,r,l){var u,f,D;let m=Ur(Xr(yr),"@react-aria/datepicker"),{isInvalid:h,validationErrors:t,validationDetails:i}=r.displayValidation,{labelProps:T,fieldProps:b,descriptionProps:S,errorMessageProps:M}=Lr({...e,labelElementType:"span",isInvalid:h,errorMessage:e.errorMessage||t}),w=b["aria-labelledby"]||b.id,{locale:F}=Ke(),g=r.formatValue(F,{month:"long"}),Z=g?m.format("selectedRangeDescription",{startDate:g.start,endDate:g.end}):"",d=Er(Z),J={"aria-label":m.format("startDate"),"aria-labelledby":w},L={"aria-label":m.format("endDate"),"aria-labelledby":w},B=tt(),G=tt(),K=hr(r,l),V=[d["aria-describedby"],b["aria-describedby"]].filter(Boolean).join(" ")||void 0,C=$.useMemo(()=>Or(l,{accept:s=>s.id!==B}),[l,B]),I={[xr]:C,[Pr]:"presentation","aria-describedby":V,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,granularity:e.granularity,shouldForceLeadingZeros:e.shouldForceLeadingZeros,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior},P=kr(e),{focusWithinProps:X}=Ar({...e,isDisabled:r.isOpen,onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),O=$.useRef(at),Y=$.useRef(at);var v,o;return{groupProps:Ge(P,K,b,d,X,{role:"group","aria-disabled":e.isDisabled||null,"aria-describedby":V,onKeyDown(s){r.isOpen||e.onKeyDown&&e.onKeyDown(s)},onKeyUp(s){r.isOpen||e.onKeyUp&&e.onKeyUp(s)}}),labelProps:{...T,onClick:()=>{C.focusFirst()}},buttonProps:{...d,id:B,"aria-haspopup":"dialog","aria-label":m.format("calendar"),"aria-labelledby":`${B} ${w}`,"aria-describedby":V,"aria-expanded":r.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>r.setOpen(!0)},dialogProps:{id:G,"aria-labelledby":`${B} ${w}`},startFieldProps:{...J,...I,value:(v=(u=r.value)===null||u===void 0?void 0:u.start)!==null&&v!==void 0?v:null,onChange:s=>r.setDateTime("start",s),autoFocus:e.autoFocus,name:e.startName,[rt]:{realtimeValidation:r.realtimeValidation,displayValidation:r.displayValidation,updateValidation(s){O.current=s,r.updateValidation(nt(s,Y.current))},resetValidation:r.resetValidation,commitValidation:r.commitValidation}},endFieldProps:{...L,...I,value:(o=(f=r.value)===null||f===void 0?void 0:f.end)!==null&&o!==void 0?o:null,onChange:s=>r.setDateTime("end",s),name:e.endName,[rt]:{realtimeValidation:r.realtimeValidation,displayValidation:r.displayValidation,updateValidation(s){Y.current=s,r.updateValidation(nt(O.current,s))},resetValidation:r.resetValidation,commitValidation:r.commitValidation}},descriptionProps:S,errorMessageProps:M,calendarProps:{autoFocus:!0,value:!((D=r.dateRange)===null||D===void 0)&&D.start&&r.dateRange.end?r.dateRange:null,onChange:r.setDateRange,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,allowsNonContiguousRanges:e.allowsNonContiguousRanges,defaultFocusedValue:r.dateRange?void 0:e.placeholderValue,isInvalid:r.isInvalid,errorMessage:typeof e.errorMessage=="function"?e.errorMessage(r.displayValidation):e.errorMessage||r.displayValidation.validationErrors.join(" ")},isInvalid:h,validationErrors:t,validationDetails:i}}function en(e){var r,l;let u=Fr(e),[f,D]=Zr(e.value,e.defaultValue||null,e.onChange),[m,h]=$.useState(()=>f||{start:null,end:null});f==null&&m.start&&m.end&&(m={start:null,end:null},h(m));let t=f||m,i=o=>{h(o||{start:null,end:null}),te(o)?D(o):D(null)},T=(t==null?void 0:t.start)||(t==null?void 0:t.end)||e.placeholderValue||null,[b,S]=$r(T,e.granularity),M=b==="hour"||b==="minute"||b==="second";var w;let F=(w=e.shouldCloseOnSelect)!==null&&w!==void 0?w:!0,[g,Z]=$.useState(null),[d,J]=$.useState(null);t&&te(t)&&(g=t,"hour"in t.start&&(d=t));let L=(o,s)=>{i({start:"timeZone"in s.start?s.start.set(Xe(o.start)):Ne(o.start,s.start),end:"timeZone"in s.end?s.end.set(Xe(o.end)):Ne(o.end,s.end)}),Z(null),J(null),O.commitValidation()},B=o=>{let s=typeof F=="function"?F():F;M?te(o)&&(d!=null&&d.start)&&(d!=null&&d.end)?L(o,{start:(d==null?void 0:d.start)||fe(e.placeholderValue),end:(d==null?void 0:d.end)||fe(e.placeholderValue)}):Z(o):te(o)?(i(o),O.commitValidation()):Z(o),s&&u.setOpen(!1)},G=o=>{te(g)&&te(o)?L(g,o):J(o)},K=(t==null||(r=t.start)===null||r===void 0?void 0:r.calendar.identifier)==="gregory"&&t.start.era==="BC"||(t==null||(l=t.end)===null||l===void 0?void 0:l.calendar.identifier)==="gregory"&&t.end.era==="BC",V=$.useMemo(()=>({granularity:b,timeZone:S,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:K}),[b,e.hourCycle,e.shouldForceLeadingZeros,S,e.hideTimeZone,K]),{minValue:C,maxValue:I,isDateUnavailable:P}=e,X=$.useMemo(()=>Cr(t,C,I,P,V),[t,C,I,P,V]),O=Br({...e,value:f,name:$.useMemo(()=>[e.startName,e.endName].filter(o=>o!=null),[e.startName,e.endName]),builtinValidation:X}),Y=O.displayValidation.isInvalid,v=e.validationState||(Y?"invalid":null);return{...O,value:t,setValue:i,dateRange:g,timeRange:d,granularity:b,hasTime:M,setDate(o,s){var x,y;B(o==="start"?{start:s,end:(x=g==null?void 0:g.end)!==null&&x!==void 0?x:null}:{start:(y=g==null?void 0:g.start)!==null&&y!==void 0?y:null,end:s})},setTime(o,s){var x,y;G(o==="start"?{start:s,end:(x=d==null?void 0:d.end)!==null&&x!==void 0?x:null}:{start:(y=d==null?void 0:d.start)!==null&&y!==void 0?y:null,end:s})},setDateTime(o,s){var x,y;i(o==="start"?{start:s,end:(x=t==null?void 0:t.end)!==null&&x!==void 0?x:null}:{start:(y=t==null?void 0:t.start)!==null&&y!==void 0?y:null,end:s})},setDateRange:B,setTimeRange:G,...u,setOpen(o){!o&&!(t!=null&&t.start&&(t!=null&&t.end))&&te(g)&&M&&L(g,{start:(d==null?void 0:d.start)||fe(e.placeholderValue),end:(d==null?void 0:d.end)||fe(e.placeholderValue)}),u.setOpen(o)},validationState:v,isInvalid:Y,formatValue(o,s){if(!t||!t.start||!t.end)return null;let x="timeZone"in t.start?t.start.timeZone:void 0,y=e.granularity||(t.start&&"minute"in t.start?"minute":"day"),ae="timeZone"in t.end?t.end.timeZone:void 0,ce=e.granularity||(t.end&&"minute"in t.end?"minute":"day"),Ye=Je(s,{granularity:y,timeZone:x,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,showEra:t.start.calendar.identifier==="gregory"&&t.start.era==="BC"||t.end.calendar.identifier==="gregory"&&t.end.era==="BC"}),me=t.start.toDate(x||"UTC"),pe=t.end.toDate(ae||"UTC"),ne=new ze(o,Ye),oe;if(x===ae&&y===ce&&t.start.compare(t.end)!==0){try{let H=ne.formatRangeToParts(me,pe),le=-1;for(let R=0;R<H.length;R++){let ee=H[R];if(ee.source==="shared"&&ee.type==="literal")le=R;else if(ee.source==="endRange")break}let N="",_="";for(let R=0;R<H.length;R++)R<le?N+=H[R].value:R>le&&(_+=H[R].value);return{start:N,end:_}}catch{}oe=ne}else{let H=Je(s,{granularity:ce,timeZone:ae,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle});oe=new ze(o,H)}return{start:ne.format(me),end:oe.format(pe)}},getDateFormatter(o,s){let x={...V,...s},y=Je({},x);return new ze(o,y)}}}function te(e){return(e==null?void 0:e.start)!=null&&e.end!=null}const st=$.forwardRef(function(r,l){const{as:u,slots:f,createCalendar:D,classNames:m,...h}=r,t=u||"div",i=Rr(l),{locale:T}=Ke();let b=Dr({...h,locale:T,createCalendar:!D||typeof D!="function"?Ir:D});const S=$.useRef(null),{fieldProps:M,inputProps:w,isInvalid:F}=Tr({...h,inputRef:S},b,i),g=r.isInvalid||F;return b.isInvalid=g,a.jsxs(t,{...Ge(M,wr(h)),ref:i,children:[b.segments.map((Z,d)=>a.jsx(Vr,{classNames:m,segment:Z,slots:f,state:b},d)),a.jsx("input",{...w,ref:S})]})});function tn({as:e,isInvalid:r,description:l,startContent:u,endContent:f,selectorIcon:D,errorMessage:m,className:h,classNames:t,...i}){const T=Kr(),{validationBehavior:b}=_r(Wr)||{},S=i.validationBehavior??b??(T==null?void 0:T.validationBehavior)??"native",{domRef:M,slotsProps:w,createCalendar:F,stringFormatter:g,timeMinValue:Z,timeMaxValue:d,isCalendarHeaderExpanded:J,disableAnimation:L,CalendarTopContent:B,CalendarBottomContent:G,timeInputProps:K,popoverProps:V,calendarProps:C,variantProps:I,userTimeInputProps:P,hasMultipleMonths:X,selectorButtonProps:O,selectorIconProps:Y}=Gr({...i,validationBehavior:S});let v=en({...i,validationBehavior:S,shouldCloseOnSelect:()=>!v.hasTime});const o=$.useRef(null);let{groupProps:s,labelProps:x,startFieldProps:y,endFieldProps:ae,buttonProps:ce,dialogProps:Ye,calendarProps:me,validationDetails:pe,validationErrors:ne,descriptionProps:oe,errorMessageProps:H,isInvalid:le}=Nr({...i,validationBehavior:S},v,M);const N=r||le,_=$.useMemo(()=>qr({...I,className:h}),[ot(I),h]),R=v.granularity==="hour"||v.granularity==="minute"||v.granularity==="second"?v.granularity:null,ee=!!R,He=$.useMemo(()=>(!i.labelPlacement||i.labelPlacement==="inside")&&!i.label?"outside":i.labelPlacement??"inside",[i.labelPlacement,i.label]),qa=He==="outside"||He==="outside-left",Ka=()=>{var n,U,Q;return ee?{...K,label:g.format("startTime"),value:((n=v.timeRange)==null?void 0:n.start)||null,onChange:se=>v.setTime("start",se),granularity:R,minValue:Z,maxValue:d,classNames:{base:_.timeInput({class:k(t==null?void 0:t.timeInput,(U=P==null?void 0:P.classNames)==null?void 0:U.base)}),label:_.timeInputLabel({class:k(t==null?void 0:t.timeInputLabel,(Q=P==null?void 0:P.classNames)==null?void 0:Q.label)})}}:{}},Ya=()=>{var n,U,Q;return ee?{...K,label:g.format("endTime"),value:((n=v.timeRange)==null?void 0:n.end)||null,onChange:se=>v.setTime("end",se),granularity:R,minValue:Z,maxValue:d,classNames:{base:_.timeInput({class:k(t==null?void 0:t.timeInput,(U=P==null?void 0:P.classNames)==null?void 0:U.base)}),label:_.timeInputLabel({class:k(t==null?void 0:t.timeInputLabel,(Q=P==null?void 0:P.classNames)==null?void 0:Q.label)})}}:{}},Ha=(n={})=>{var U,Q;return{state:v,dialogProps:Ye,...n,...V,triggerRef:o,classNames:{content:_.popoverContent({class:k(t==null?void 0:t.popoverContent,(Q=(U=w.popoverProps)==null?void 0:U.classNames)==null?void 0:Q.content,n.className)}),shouldCloseOnInteractOutside:V!=null&&V.shouldCloseOnInteractOutside?V.shouldCloseOnInteractOutside:se=>Yr(se,o,v)}}},za=()=>{var n,U;return{...me,...C,classNames:{...C.classNames,base:_.calendar({class:Qe((n=C==null?void 0:C.classNames)==null?void 0:n.base,t==null?void 0:t.calendar)}),content:_.calendarContent({class:Qe((U=C==null?void 0:C.classNames)==null?void 0:U.content,t==null?void 0:t.calendarContent)})}}},Ja=()=>({...ce,...O,onPress:v.toggle,className:_.selectorButton({class:t==null?void 0:t.selectorButton})}),Qa=()=>({"data-slot":"separator",className:_.separator({class:t==null?void 0:t.separator})}),Xa=()=>({...Y,className:_.selectorIcon({class:t==null?void 0:t.selectorIcon})}),Na=k(t==null?void 0:t.base,h),A=$.useMemo(()=>Aa({...I,labelPlacement:He,className:h}),[ot(I),h]),er=(n={})=>({...y,isInvalid:N,"data-slot":"start-input",slots:A,createCalendar:F,...Ge(I,y,{fullWidth:!0,disableAnimation:L}),"data-open":z(v.isOpen),classNames:t,style:{...n.style,maxWidth:"fit-content"},className:A.input({class:k(t==null?void 0:t.input,n==null?void 0:n.className)})}),tr=(n={})=>({...ae,isInvalid:N,"data-slot":"end-input",slots:A,createCalendar:F,...Ge(I,ae,{fullWidth:!0,disableAnimation:L}),"data-open":z(v.isOpen),classNames:t,className:A.input({class:k(t==null?void 0:t.input,n==null?void 0:n.className)})}),ar=n=>({...n,...x,"data-slot":"label",className:A.label({class:k(t==null?void 0:t.label,n==null?void 0:n.className)})}),rr=(n={})=>({ref:M,...n,...s,"data-slot":"input-wrapper",className:A.inputWrapper({class:t==null?void 0:t.inputWrapper}),onClick:x.onClick}),nr=n=>({...n,ref:o,"data-slot":"inner-wrapper",className:A.innerWrapper({class:t==null?void 0:t.innerWrapper})}),or=n=>({...n,"data-slot":"helper-wrapper",className:A.helperWrapper({class:k(t==null?void 0:t.helperWrapper,n==null?void 0:n.className)})}),lr=(n={})=>({...n,...H,"data-slot":"error-message",className:A.errorMessage({class:k(t==null?void 0:t.errorMessage,n==null?void 0:n.className)})}),sr=(n={})=>({...n,...oe,"data-slot":"description",className:A.description({class:k(t==null?void 0:t.description,n==null?void 0:n.className)})}),dr=()=>({as:e,label:i.label,description:l,endContent:f,errorMessage:m,isInvalid:N,validationDetails:pe,validationErrors:ne,shouldLabelBeOutside:qa,"data-slot":"base","data-required":z(i.isRequired),"data-disabled":z(i.isDisabled),"data-readonly":z(i.isReadOnly),"data-invalid":z(N),"data-has-start-content":z(!!u),"data-has-multiple-months":z(X),"data-has-end-content":z(!!f),descriptionProps:sr(),errorMessageProps:lr(),groupProps:rr(),helperWrapperProps:or(),labelProps:ar(),wrapperProps:nr(),className:A.base({class:Na})});return{state:v,label:i.label,slots:_,classNames:t,startContent:u,endContent:f,selectorIcon:D,showTimeField:ee,isCalendarHeaderExpanded:J,disableAnimation:L,CalendarTopContent:B,CalendarBottomContent:G,getStartDateInputProps:er,getEndDateInputProps:tr,getStartTimeInputProps:Ka,getEndTimeInputProps:Ya,getPopoverProps:Ha,getSelectorButtonProps:Ja,getCalendarProps:za,getSeparatorProps:Qa,getSelectorIconProps:Xa,getDateInputGroupProps:dr}}const p=Hr(function(r,l){const{selectorButtonPlacement:u="end",...f}=r,{state:D,slots:m,startContent:h,endContent:t,selectorIcon:i,showTimeField:T,classNames:b,disableAnimation:S,isCalendarHeaderExpanded:M,getDateInputGroupProps:w,getStartDateInputProps:F,getEndDateInputProps:g,getPopoverProps:Z,getSeparatorProps:d,getStartTimeInputProps:J,getEndTimeInputProps:L,getSelectorButtonProps:B,getSelectorIconProps:G,getCalendarProps:K,CalendarTopContent:V,CalendarBottomContent:C}=tn({...f,ref:l}),I=$.isValidElement(i)?$.cloneElement(i,G()):a.jsx(Jr,{...G()}),P=$.useMemo(()=>M?null:T?a.jsxs("div",{className:m==null?void 0:m.bottomContent({class:b==null?void 0:b.bottomContent}),children:[a.jsxs("div",{className:m==null?void 0:m.timeInputWrapper({class:b==null?void 0:b.timeInputWrapper}),children:[a.jsx(et,{...J()}),a.jsx(et,{...L()})]}),C]}):C,[D,T,C,M]),X=$.useMemo(()=>M?null:V,[T,V,M]),O=D.isOpen?a.jsx(Sr,{...Z(),offset:20,children:a.jsx(Mr,{...K(),bottomContent:P,topContent:X})}):null,Y={...w(),endContent:u==="end"?a.jsx(de,{...B(),children:t||I}):t,startContent:u==="start"?a.jsx(de,{...B(),children:h||I}):h};return a.jsxs(a.Fragment,{children:[a.jsxs(jr,{...Y,children:[a.jsx(st,{...F()}),a.jsx("span",{...d(),"aria-hidden":"true",role:"separator",children:"-"}),a.jsx(st,{...g()})]}),S?O:a.jsx(zr,{children:O})]})}),qo={title:"Components/DateRangePicker",component:p,argTypes:{variant:{control:{type:"select"},options:["flat","faded","bordered","underlined"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},size:{control:{type:"select"},options:["sm","md","lg"]},labelPlacement:{control:{type:"select"},options:["inside","outside","outside-left"]},isDisabled:{control:{type:"boolean"}},validationBehavior:{control:{type:"select"},options:["aria","native"]}},decorators:[e=>a.jsx("div",{className:"flex items-center justify-start",children:a.jsx(e,{})})]},c={label:"Stay duration",...Aa.defaultVariants},j=e=>a.jsx(p,{...e}),Ga=e=>a.jsxs("form",{className:"flex flex-col gap-2 w-full",onSubmit:r=>{r.preventDefault();const l=r.target;alert(`Submitted: start -> ${l["start-date"].value} end -> ${l["end-date"].value}`)},children:[a.jsx(p,{...e,endName:"end-date",startName:"start-date"}),a.jsx("button",{className:Ua({className:"max-w-fit"}),type:"submit",children:"Submit"})]}),an=e=>a.jsxs("div",{className:"w-full max-w-xl flex flex-col items-start gap-4",children:[a.jsx(p,{...e,description:"inside"}),a.jsx(p,{...e,description:"outside",labelPlacement:"outside"}),a.jsx(p,{...e,description:"outside-left",labelPlacement:"outside-left"})]}),rn=e=>{const[r,l]=ue.useState({start:E("2024-04-01"),end:E("2024-04-08")});let u=La({dateStyle:"long"});return a.jsxs("div",{className:"flex flex-row gap-2",children:[a.jsxs("div",{className:"w-full flex flex-col gap-y-2",children:[a.jsx(p,{...e,label:"Date range (controlled)",value:r,onChange:l}),a.jsxs("p",{className:"text-default-500 text-sm",children:["Selected date:"," ",r?u.formatRange(r.start.toDate(W()),r.end.toDate(W())):"--"]})]}),a.jsx(p,{...e,defaultValue:{start:E("2024-04-01"),end:E("2024-04-08")},label:"Date range (uncontrolled)"})]})},nn=e=>a.jsxs("div",{className:"w-full max-w-xl flex flex-col items-start gap-4",children:[a.jsx(p,{...e,className:"max-w-xs",defaultValue:{start:ie("2024-04-01T00:45[America/Los_Angeles]"),end:ie("2024-04-14T11:15[America/Los_Angeles]")},labelPlacement:"outside"}),a.jsx(p,{"aria-label":"Event date",className:"max-w-xs",defaultValue:{start:re("2024-04-01T07:45:00Z"),end:re("2024-04-14T19:15:00Z")},labelPlacement:"outside"})]}),on=e=>{let[r,l]=ue.useState({start:re("2024-04-01T18:45:22Z"),end:re("2024-04-08T19:15:22Z")});return a.jsxs("div",{className:"w-full max-w-xl flex flex-col items-start gap-4",children:[a.jsx(p,{...e,fullWidth:!0,granularity:"second",label:"Date and time range",value:r,onChange:l}),a.jsx(p,{...e,fullWidth:!0,granularity:"day",label:"Date range",value:r,onChange:l})]})},ln=e=>{let[r,l]=ue.useState({start:re("2021-04-01T18:45:22Z"),end:re("2021-04-14T19:15:22Z")});return a.jsx("div",{className:"flex flex-col gap-4",children:a.jsx(fr,{locale:"hi-IN-u-ca-indian",children:a.jsx(p,{...e,label:"Appointment date",value:r,onChange:l})})})},sn=e=>{let r=q(W()),l=[[r,r.add({days:5})],[r.add({days:14}),r.add({days:16})],[r.add({days:23}),r.add({days:24})]];return a.jsx(p,{"aria-label":"Appointment date",isDateUnavailable:u=>l.some(f=>u.compare(f[0])>=0&&u.compare(f[1])<=0),minValue:q(W()),validate:u=>l.some(f=>u&&u.end.compare(f[0])>=0&&u.start.compare(f[1])<=0)?"Selected date range may not include unavailable dates.":null,...e})},dn=e=>{let{locale:r}=Ke();return a.jsx(p,{...e,allowsNonContiguousRanges:!0,isDateUnavailable:l=>ir(l,r),label:"Time off request",minValue:q(W()),visibleMonths:2})},un=e=>{let r={start:q(W()),end:q(W()).add({days:7})};const[l,u]=ue.useState(r);let{locale:f}=Ke(),D=La({dateStyle:"full"}),m=q(W()),h={start:ur(m.add({weeks:1}),f),end:cr(m.add({weeks:1}),f)},t={start:mr(m.add({months:1})),end:pr(m.add({months:1}))};const i=T=>{const{children:b,...S}=T;return a.jsx(vr,{...S,classNames:{base:Qe("flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between","cursor-pointer rounded-full border-2 border-default-200/60","data-[selected=true]:border-primary"),label:"text-tiny text-default-500",labelWrapper:"px-1 m-0",wrapper:"hidden"},children:b})};return a.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-sm",children:[a.jsx(p,{CalendarBottomContent:a.jsxs(gr,{"aria-label":"Date precision",classNames:{base:"w-full pb-2",wrapper:"-my-2.5 py-2.5 px-3 gap-1 flex-nowrap max-w-[w-[calc(var(--visible-months)_*_var(--calendar-width))]] overflow-scroll"},defaultValue:"exact_dates",orientation:"horizontal",children:[a.jsx(i,{value:"exact_dates",children:"Exact dates"}),a.jsx(i,{value:"1_day",children:"1 day"}),a.jsx(i,{value:"2_days",children:"2 days"}),a.jsx(i,{value:"3_days",children:"3 days"}),a.jsx(i,{value:"7_days",children:"7 days"}),a.jsx(i,{value:"14_days",children:"14 days"})]}),CalendarTopContent:a.jsxs(br,{fullWidth:!0,className:"px-3 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60",radius:"full",size:"sm",variant:"bordered",children:[a.jsx(de,{onPress:()=>u({start:m,end:m.add({days:7})}),children:"This week"}),a.jsx(de,{onPress:()=>u(h),children:"Next week"}),a.jsx(de,{onPress:()=>u(t),children:"Next month"})]}),calendarProps:{focusedValue:l==null?void 0:l.start,onFocusChange:T=>u({...l,start:T}),nextButtonProps:{variant:"bordered"},prevButtonProps:{variant:"bordered"}},value:l,onChange:u,...e,label:"Event date"}),a.jsxs("p",{className:"text-default-500 text-sm",children:["Selected date:"," ",l?D.formatRange(l.start.toDate(W()),l.end.toDate(W())):"--"]})]})},cn=e=>{const[r,l]=ue.useState({}),u=f=>{f.preventDefault(),l({startDate:"Please select a valid start date.",endDate:"Please select a valid end date."})};return a.jsxs(Qr,{className:"flex flex-col items-start gap-2",validationErrors:r,onSubmit:u,children:[a.jsx(p,{...e,endName:"endDate",label:"Date range",startName:"startDate"}),a.jsx("button",{className:Ua({color:"primary"}),type:"submit",children:"Submit"})]})},mn=e=>a.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-sm",children:[a.jsx(p,{...e,endContent:a.jsx(qe,{}),label:"With end content"}),a.jsx(p,{...e,label:"With start content",startContent:a.jsx(lt,{})}),a.jsx(p,{...e,endContent:a.jsx(qe,{}),label:"With start and end content",startContent:a.jsx(lt,{})})]}),pn=e=>a.jsxs("div",{className:"w-full max-w-xl flex flex-col items-start gap-4",children:[a.jsx(p,{...e,label:"start inside",labelPlacement:"inside",selectorButtonPlacement:"start"}),a.jsx(p,{...e,label:"start outside",labelPlacement:"outside",selectorButtonPlacement:"start"}),a.jsx(p,{...e,label:"start outside-left",labelPlacement:"outside-left",selectorButtonPlacement:"start"}),a.jsx(p,{...e,label:"start inside with start content",labelPlacement:"inside",selectorButtonPlacement:"start",startContent:a.jsx(qe,{})}),a.jsx(p,{...e,label:"end inside",labelPlacement:"inside",selectorButtonPlacement:"end"}),a.jsx(p,{...e,label:"end outside",labelPlacement:"outside",selectorButtonPlacement:"end"}),a.jsx(p,{...e,label:"end outside-left",labelPlacement:"outside-left",selectorButtonPlacement:"end"}),a.jsx(p,{...e,endContent:a.jsx(qe,{}),label:"end inside with end content",labelPlacement:"inside",selectorButtonPlacement:"end"})]}),be={render:j,args:{...c}},ge={render:j,args:{...c,showMonthAndYearPickers:!0}},ve={render:j,args:{...c,visibleMonths:2}},he={render:an,args:{...c}},xe={render:j,args:{...c,label:"Event duration",hideTimeZone:!0,visibleMonths:2,defaultValue:{start:ie("2024-04-01T00:45[America/Los_Angeles]"),end:ie("2024-04-08T11:15[America/Los_Angeles]")}}},Pe={render:rn,args:{...c}},ye={render:Ga,args:{...c,isRequired:!0}},$e={render:j,args:{...c,isDisabled:!0,defaultValue:{start:E("2024-04-01"),end:E("2024-04-08")}}},Ce={render:j,args:{...c,isReadOnly:!0,defaultValue:{start:E("2024-04-01"),end:E("2024-04-08")}}},De={render:j,args:{...c,label:null,"aria-label":"Stay duration"}},Te={render:j,args:{...c,description:"Please enter your stay duration"}},Ve={render:j,args:{...c,selectorIcon:a.jsx("svg",{height:"1em",viewBox:"0 0 24 24",width:"1em",children:a.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[a.jsx("path",{d:"M8 2v4m8-4v4"}),a.jsx("rect",{height:"18",rx:"2",width:"18",x:"3",y:"4"}),a.jsx("path",{d:"M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"})]})})}},je={render:j,args:{...c,isInvalid:!0,errorMessage:"Please enter a valid date range"}},Se={render:j,args:{...c,isInvalid:!0,errorMessage:e=>{if(e.isInvalid)return"Please enter a valid date range"}}},Me={render:j,args:{...c,variant:"bordered",isInvalid:!0,defaultValue:{start:E("2024-04-01"),end:E("2024-04-08")},errorMessage:"Please enter a valid date"}},Ie={render:nn,args:{...c,label:"Event date",defaultValue:ie("2022-11-07T00:45[America/Los_Angeles]")}},Re={render:on,args:{...c,visibleMonths:2}},we={render:ln,args:{...c,hideTimeZone:!0}},Be={render:j,args:{...c,minValue:q(W()),defaultValue:{start:q(W()).subtract({days:1}),end:E("2024-04-08")}}},_e={render:j,args:{...c,maxValue:q(W()),defaultValue:{start:E("2024-04-01"),end:q(W()).add({days:1})}}},We={render:sn,args:{...c}},Fe={render:j,args:{...c,visibleMonths:2,pageBehavior:"single"}},Ze={render:dn,args:{...c}},Oe={render:un,args:{...c,visibleMonths:2}},ke={render:Ga,args:{...c,validate:e=>{if(!e||!e.start||!e.end)return"Please enter a valid date range";const{start:r,end:l}=e;if(r.year<2024||l.year<2024)return"Both start and end dates must be in the year 2024 or later"},label:"Date Range (Year 2024 or later)"}},Ee={render:cn,args:{...c}},Le={render:mn,args:{...c}},Ae={render:pn,args:{...c}},Ue={render:j,args:{...c,variant:"bordered",className:"max-w-xs",calendarProps:{classNames:{base:"bg-background",headerWrapper:"pt-4 bg-background",prevButton:"border-1 border-default-200 rounded-small",nextButton:"border-1 border-default-200 rounded-small",gridHeader:"bg-background shadow-none border-b-1 border-default-100",cellButton:["data-[today=true]:bg-default-100 data-[selected=true]:bg-transparent rounded-small","data-[range-start=true]:before:rounded-l-small","data-[selection-start=true]:before:rounded-l-small","data-[range-end=true]:before:rounded-r-small","data-[selection-end=true]:before:rounded-r-small","data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-small","data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-small"]}}}};var dt,it,ut;be.parameters={...be.parameters,docs:{...(dt=be.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps
  }
}`,...(ut=(it=be.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};var ct,mt,pt;ge.parameters={...ge.parameters,docs:{...(ct=ge.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    showMonthAndYearPickers: true
  }
}`,...(pt=(mt=ge.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ft,bt,gt;ve.parameters={...ve.parameters,docs:{...(ft=ve.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    visibleMonths: 2
  }
}`,...(gt=(bt=ve.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var vt,ht,xt;he.parameters={...he.parameters,docs:{...(vt=he.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: LabelPlacementTemplate,
  args: {
    ...defaultProps
  }
}`,...(xt=(ht=he.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var Pt,yt,$t;xe.parameters={...xe.parameters,docs:{...(Pt=xe.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: "Event duration",
    hideTimeZone: true,
    visibleMonths: 2,
    defaultValue: {
      start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
      end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]")
    }
  }
}`,...($t=(yt=xe.parameters)==null?void 0:yt.docs)==null?void 0:$t.source}}};var Ct,Dt,Tt;Pe.parameters={...Pe.parameters,docs:{...(Ct=Pe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    ...defaultProps
  }
}`,...(Tt=(Dt=Pe.parameters)==null?void 0:Dt.docs)==null?void 0:Tt.source}}};var Vt,jt,St;ye.parameters={...ye.parameters,docs:{...(Vt=ye.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true
  }
}`,...(St=(jt=ye.parameters)==null?void 0:jt.docs)==null?void 0:St.source}}};var Mt,It,Rt;$e.parameters={...$e.parameters,docs:{...(Mt=$e.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: true,
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08")
    }
  }
}`,...(Rt=(It=$e.parameters)==null?void 0:It.docs)==null?void 0:Rt.source}}};var wt,Bt,_t;Ce.parameters={...Ce.parameters,docs:{...(wt=Ce.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isReadOnly: true,
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08")
    }
  }
}`,...(_t=(Bt=Ce.parameters)==null?void 0:Bt.docs)==null?void 0:_t.source}}};var Wt,Ft,Zt;De.parameters={...De.parameters,docs:{...(Wt=De.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    label: null,
    "aria-label": "Stay duration"
  }
}`,...(Zt=(Ft=De.parameters)==null?void 0:Ft.docs)==null?void 0:Zt.source}}};var Ot,kt,Et;Te.parameters={...Te.parameters,docs:{...(Ot=Te.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    description: "Please enter your stay duration"
  }
}`,...(Et=(kt=Te.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var Lt,At,Ut;Ve.parameters={...Ve.parameters,docs:{...(Lt=Ve.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    selectorIcon: <svg height="1em" viewBox="0 0 24 24" width="1em">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M8 2v4m8-4v4" />
          <rect height="18" rx="2" width="18" x="3" y="4" />
          <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </g>
      </svg>
  }
}`,...(Ut=(At=Ve.parameters)==null?void 0:At.docs)==null?void 0:Ut.source}}};var Gt,qt,Kt;je.parameters={...je.parameters,docs:{...(Gt=je.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: "Please enter a valid date range"
  }
}`,...(Kt=(qt=je.parameters)==null?void 0:qt.docs)==null?void 0:Kt.source}}};var Yt,Ht,zt;Se.parameters={...Se.parameters,docs:{...(Yt=Se.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: (value: ValidationResult) => {
      if (value.isInvalid) {
        return "Please enter a valid date range";
      }
    }
  }
}`,...(zt=(Ht=Se.parameters)==null?void 0:Ht.docs)==null?void 0:zt.source}}};var Jt,Qt,Xt;Me.parameters={...Me.parameters,docs:{...(Jt=Me.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    variant: "bordered",
    isInvalid: true,
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08")
    },
    errorMessage: "Please enter a valid date"
  }
}`,...(Xt=(Qt=Me.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Nt,ea,ta;Ie.parameters={...Ie.parameters,docs:{...(Nt=Ie.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: TimeZonesTemplate,
  args: {
    ...defaultProps,
    label: "Event date",
    defaultValue: parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")
  }
}`,...(ta=(ea=Ie.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,ra,na;Re.parameters={...Re.parameters,docs:{...(aa=Re.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: GranularityTemplate,
  args: {
    ...defaultProps,
    visibleMonths: 2
  }
}`,...(na=(ra=Re.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};var oa,la,sa;we.parameters={...we.parameters,docs:{...(oa=we.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: InternationalCalendarsTemplate,
  args: {
    ...defaultProps,
    hideTimeZone: true
  }
}`,...(sa=(la=we.parameters)==null?void 0:la.docs)==null?void 0:sa.source}}};var da,ia,ua;Be.parameters={...Be.parameters,docs:{...(da=Be.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    minValue: today(getLocalTimeZone()),
    defaultValue: {
      start: today(getLocalTimeZone()).subtract({
        days: 1
      }),
      end: parseDate("2024-04-08")
    }
  }
}`,...(ua=(ia=Be.parameters)==null?void 0:ia.docs)==null?void 0:ua.source}}};var ca,ma,pa;_e.parameters={..._e.parameters,docs:{...(ca=_e.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    maxValue: today(getLocalTimeZone()),
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: today(getLocalTimeZone()).add({
        days: 1
      })
    }
  }
}`,...(pa=(ma=_e.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var fa,ba,ga;We.parameters={...We.parameters,docs:{...(fa=We.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: UnavailableDatesTemplate,
  args: {
    ...defaultProps
  }
}`,...(ga=(ba=We.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var va,ha,xa;Fe.parameters={...Fe.parameters,docs:{...(va=Fe.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    visibleMonths: 2,
    pageBehavior: "single"
  }
}`,...(xa=(ha=Fe.parameters)==null?void 0:ha.docs)==null?void 0:xa.source}}};var Pa,ya,$a;Ze.parameters={...Ze.parameters,docs:{...(Pa=Ze.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  render: NonContiguousRangesTemplate,
  args: {
    ...defaultProps
  }
}`,...($a=(ya=Ze.parameters)==null?void 0:ya.docs)==null?void 0:$a.source}}};var Ca,Da,Ta;Oe.parameters={...Oe.parameters,docs:{...(Ca=Oe.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: PresetsTemplate,
  args: {
    ...defaultProps,
    visibleMonths: 2
  }
}`,...(Ta=(Da=Oe.parameters)==null?void 0:Da.docs)==null?void 0:Ta.source}}};var Va,ja,Sa;ke.parameters={...ke.parameters,docs:{...(Va=ke.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  render: FormTemplate,
  args: {
    ...defaultProps,
    validate: (value: RangeValue<MappedDateValue<DateValue>>) => {
      if (!value || !value.start || !value.end) {
        return "Please enter a valid date range";
      }
      const {
        start,
        end
      } = value;
      if (start.year < 2024 || end.year < 2024) {
        return "Both start and end dates must be in the year 2024 or later";
      }
    },
    label: "Date Range (Year 2024 or later)"
  }
}`,...(Sa=(ja=ke.parameters)==null?void 0:ja.docs)==null?void 0:Sa.source}}};var Ma,Ia,Ra;Ee.parameters={...Ee.parameters,docs:{...(Ma=Ee.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  render: ServerValidationTemplate,
  args: {
    ...defaultProps
  }
}`,...(Ra=(Ia=Ee.parameters)==null?void 0:Ia.docs)==null?void 0:Ra.source}}};var wa,Ba,_a;Le.parameters={...Le.parameters,docs:{...(wa=Le.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  render: StartAndEndContentTemplate,
  args: {
    ...defaultProps
  }
}`,...(_a=(Ba=Le.parameters)==null?void 0:Ba.docs)==null?void 0:_a.source}}};var Wa,Fa,Za;Ae.parameters={...Ae.parameters,docs:{...(Wa=Ae.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  render: selectorButtonPlacementTemplate,
  args: {
    ...defaultProps
  }
}`,...(Za=(Fa=Ae.parameters)==null?void 0:Fa.docs)==null?void 0:Za.source}}};var Oa,ka,Ea;Ue.parameters={...Ue.parameters,docs:{...(Oa=Ue.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultProps,
    variant: "bordered",
    className: "max-w-xs",
    calendarProps: {
      classNames: {
        base: "bg-background",
        headerWrapper: "pt-4 bg-background",
        prevButton: "border-1 border-default-200 rounded-small",
        nextButton: "border-1 border-default-200 rounded-small",
        gridHeader: "bg-background shadow-none border-b-1 border-default-100",
        cellButton: ["data-[today=true]:bg-default-100 data-[selected=true]:bg-transparent rounded-small",
        // start (pseudo)
        "data-[range-start=true]:before:rounded-l-small", "data-[selection-start=true]:before:rounded-l-small",
        // end (pseudo)
        "data-[range-end=true]:before:rounded-r-small", "data-[selection-end=true]:before:rounded-r-small",
        // start (selected)
        "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-small",
        // end (selected)
        "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-small"]
      }
    }
  }
}`,...(Ea=(ka=Ue.parameters)==null?void 0:ka.docs)==null?void 0:Ea.source}}};const Ko=["Default","WithMonthAndYearPickers","VisibleMonths","LabelPlacement","WithTimeField","Controlled","Required","Disabled","ReadOnly","WithoutLabel","WithDescription","SelectorIcon","WithErrorMessage","WithErrorMessageFunction","IsInvalid","TimeZones","Granularity","InternationalCalendars","MinDateValue","MaxDateValue","UnavailableDates","PageBehavior","NonContiguous","Presets","WithValidation","WithServerValidation","WithStartAndEndContent","selectorButtonPlacement","CustomStyles"];export{Pe as Controlled,Ue as CustomStyles,be as Default,$e as Disabled,Re as Granularity,we as InternationalCalendars,Me as IsInvalid,he as LabelPlacement,_e as MaxDateValue,Be as MinDateValue,Ze as NonContiguous,Fe as PageBehavior,Oe as Presets,Ce as ReadOnly,ye as Required,Ve as SelectorIcon,Ie as TimeZones,We as UnavailableDates,ve as VisibleMonths,Te as WithDescription,je as WithErrorMessage,Se as WithErrorMessageFunction,ge as WithMonthAndYearPickers,Ee as WithServerValidation,Le as WithStartAndEndContent,xe as WithTimeField,ke as WithValidation,De as WithoutLabel,Ko as __namedExportsOrder,qo as default,Ae as selectorButtonPlacement};
