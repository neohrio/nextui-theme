import{j as d}from"./jsx-runtime-CS_Wz6c_.js";import{$ as B}from"./mergeProps-VNdaC4-V.js";import{r as a}from"./index-Dy2Ak0OH.js";import{u as te}from"./use-input-c32X4TX1.js";import{f as re}from"./utils-Dl_53iLP.js";import{d as $}from"./assertion-BI5aukJI.js";import{C as ne}from"./close-filled-CY0RPngm.js";function T(){return T=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},T.apply(null,arguments)}function ie(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.includes(r))continue;t[r]=n[r]}return t}var oe=a.useLayoutEffect,ae=function(e){var t=a.useRef(e);return oe(function(){t.current=e}),t},k=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},se=function(e,t){var r=a.useRef();return a.useCallback(function(i){e.current=i,r.current&&k(r.current,null),r.current=t,t&&k(t,i)},[t])},A={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},de=function(e){Object.keys(A).forEach(function(t){e.style.setProperty(t,A[t],"important")})},N=de,o=null,O=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function ue(n,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),o||(o=document.createElement("textarea"),o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"),N(o)),o.parentNode===null&&document.body.appendChild(o);var i=n.paddingSize,u=n.borderSize,s=n.sizingStyle,v=s.boxSizing;Object.keys(s).forEach(function(h){var b=h;o.style[b]=s[b]}),N(o),o.value=e;var l=O(o,n);o.value=e,l=O(o,n),o.value="x";var p=o.scrollHeight-i,c=p*t;v==="border-box"&&(c=c+i+u),l=Math.max(c,l);var f=p*r;return v==="border-box"&&(f=f+i+u),l=Math.min(f,l),[l,p]}var _=function(){},le=function(e,t){return e.reduce(function(r,i){return r[i]=t[i],r},{})},ce=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],fe=!!document.documentElement.currentStyle,pe=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=le(ce,t),i=r.boxSizing;if(i==="")return null;fe&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var u=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),s=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:u,borderSize:s}},he=pe;function G(n,e,t){var r=ae(t);a.useLayoutEffect(function(){var i=function(s){return r.current(s)};if(n)return n.addEventListener(e,i),function(){return n.removeEventListener(e,i)}},[])}var ge=function(e){G(window,"resize",e)},ve=function(e){G(document.fonts,"loadingdone",e)},be=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],xe=function(e,t){var r=e.cacheMeasurements,i=e.maxRows,u=e.minRows,s=e.onChange,v=s===void 0?_:s,l=e.onHeightChange,p=l===void 0?_:l,c=ie(e,be),f=c.value!==void 0,h=a.useRef(null),b=se(h,t),C=a.useRef(0),y=a.useRef(),x=function(){var g=h.current,z=r&&y.current?y.current:he(g);if(z){y.current=z;var m=ue(z,g.value||g.placeholder||"x",u,i),S=m[0],w=m[1];C.current!==S&&(C.current=S,g.style.setProperty("height",S+"px","important"),p(S,{rowHeight:w}))}},H=function(g){f||x(),v(g)};return a.useLayoutEffect(x),ge(x),ve(x),a.createElement("textarea",T({},c,{onChange:H,ref:b}))},me=a.forwardRef(xe);const Se=re(({style:n,minRows:e=3,maxRows:t=8,cacheMeasurements:r=!1,disableAutosize:i=!1,onHeightChange:u,...s},v)=>{const{Component:l,label:p,description:c,startContent:f,endContent:h,hasHelper:b,shouldLabelBeOutside:C,shouldLabelBeInside:y,isInvalid:x,errorMessage:H,getBaseProps:R,getLabelProps:g,getInputProps:z,getInnerWrapperProps:m,getInputWrapperProps:S,getHelperWrapperProps:w,getDescriptionProps:U,getErrorMessageProps:Y,isClearable:I,getClearButtonProps:W}=te({...s,ref:v,isMultiline:!0}),[D,X]=a.useState(e>1),[Z,q]=a.useState(!1),P=p?d.jsx("label",{...g(),children:p}):null,L=z(),J=(E,j)=>{if(e===1&&X(E>=j.rowHeight*2),t>e){const ee=E>=t*j.rowHeight;q(ee)}u==null||u(E,j)},F=i?d.jsx("textarea",{...L,style:B(L.style,n??{})}):d.jsx(me,{...L,cacheMeasurements:r,"data-hide-scroll":$(!Z),maxRows:t,minRows:e,style:B(L.style,n??{}),onHeightChange:J}),K=a.useMemo(()=>I?d.jsx("button",{...W(),children:d.jsx(ne,{})}):null,[I,W]),Q=a.useMemo(()=>f||h?d.jsxs("div",{...m(),children:[f,F,h]}):d.jsx("div",{...m(),children:F}),[f,L,h,m]),M=x&&H,V=M||c;return d.jsxs(l,{...R(),children:[C?P:null,d.jsxs("div",{...S(),"data-has-multiple-rows":$(D),children:[y?P:null,Q,K]}),b&&V?d.jsx("div",{...w(),children:M?d.jsx("div",{...Y(),children:H}):d.jsx("div",{...U(),children:c})}):null]})});Se.displayName="NextUI.Textarea";export{Se as T};
