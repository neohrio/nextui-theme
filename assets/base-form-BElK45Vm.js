import{j as S}from"./jsx-runtime-CS_Wz6c_.js";import{r as l}from"./index-Dy2Ak0OH.js";import{$ as P}from"./mergeProps-VNdaC4-V.js";import{$ as B}from"./mergeRefs-BpO9bzld.js";import{t as U}from"./tv-DvaQJQTB.js";const _=U({base:"flex flex-col gap-2 items-start"});function q(e){const a=l.useRef(null);return l.useMemo(()=>({get current(){return a.current},set current(t){a.current=t,typeof e=="function"?e(t):e&&(e.current=t)}}),[e])}const C=Symbol("default");function N(e,a){let t=l.useContext(e);if(a===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let r=new Intl.ListFormat().format(Object.keys(t.slots).map(i=>`"${i}"`));if(!a&&!t.slots[C])throw new Error(`A slot prop is required. Valid slot names are ${r}.`);let n=a||C;if(!t.slots[n])throw new Error(`Invalid slot "${a}". Valid slot names are ${r}.`);return t.slots[n]}return t}function Q(e,a,t){let r=N(t,e.slot)||{},{ref:n,...i}=r,d=q(l.useMemo(()=>B(a,n),[a,n])),o=P(i,e);return"style"in i&&i.style&&"style"in e&&e.style&&(typeof i.style=="function"||typeof e.style=="function"?o.style=u=>{let f=typeof i.style=="function"?i.style(u):i.style,c={...u.defaultStyle,...f},m=typeof e.style=="function"?e.style({...u,defaultStyle:c}):e.style;return{...c,...m}}:o.style={...i.style,...e.style}),[o,d]}const h={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},F={...h,customError:!0,valid:!1},v={isInvalid:!1,validationDetails:h,validationErrors:[]},w=l.createContext({}),D="__formValidationState"+Date.now();function Z(e){if(e[D]){let{realtimeValidation:a,displayValidation:t,updateValidation:r,resetValidation:n,commitValidation:i}=e[D];return{realtimeValidation:a,displayValidation:t,updateValidation:r,resetValidation:n,commitValidation:i}}return k(e)}function k(e){let{isInvalid:a,validationState:t,name:r,value:n,builtinValidation:i,validate:d,validationBehavior:o="aria"}=e;t&&(a||(a=t==="invalid"));let u=a!==void 0?{isInvalid:a,validationErrors:[],validationDetails:F}:null,f=l.useMemo(()=>{if(!d||n==null)return null;let s=K(d,n);return j(s)},[d,n]);i!=null&&i.validationDetails.valid&&(i=void 0);let c=l.useContext(w),m=l.useMemo(()=>r?Array.isArray(r)?r.flatMap(s=>I(c[s])):I(c[r]):[],[c,r]),[L,T]=l.useState(c),[g,y]=l.useState(!1);c!==L&&(T(c),y(!1));let b=l.useMemo(()=>j(g?[]:m),[g,m]),M=l.useRef(v),[V,x]=l.useState(v),$=l.useRef(v),O=()=>{if(!R)return;E(!1);let s=f||i||M.current;p(s,$.current)||($.current=s,x(s))},[R,E]=l.useState(!1);return l.useEffect(O),{realtimeValidation:u||b||f||i||v,displayValidation:o==="native"?u||b||V:u||b||f||i||V,updateValidation(s){o==="aria"&&!p(V,s)?x(s):M.current=s},resetValidation(){let s=v;p(s,$.current)||($.current=s,x(s)),o==="native"&&E(!1),y(!0)},commitValidation(){o==="native"&&E(!0),y(!0)}}}function I(e){return e?Array.isArray(e)?e:[e]:[]}function K(e,a){if(typeof e=="function"){let t=e(a);if(t&&typeof t!="boolean")return I(t)}return[]}function j(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:F}:null}function p(e,a){return e===a?!0:!!e&&!!a&&e.isInvalid===a.isInvalid&&e.validationErrors.length===a.validationErrors.length&&e.validationErrors.every((t,r)=>t===a.validationErrors[r])&&Object.entries(e.validationDetails).every(([t,r])=>a.validationDetails[t]===r)}function ee(...e){let a=new Set,t=!1,r={...h};for(let d of e){var n,i;for(let o of d.validationErrors)a.add(o);t||(t=d.isInvalid);for(let o in r)(n=r)[i=o]||(n[i]=d.validationDetails[o])}return r.valid=!t,{isInvalid:t,validationErrors:[...a],validationDetails:r}}const A=l.createContext(null),te=l.forwardRef(function(a,t){[a,t]=Q(a,t,A);let{validationErrors:r,validationBehavior:n="native",children:i,className:d,...o}=a;const u=l.useMemo(()=>_({className:d}),[d]);return S.jsx("form",{noValidate:n!=="native",...o,ref:t,className:u,children:S.jsx(A.Provider,{value:{...a,validationBehavior:n},children:S.jsx(w.Provider,{value:r??{},children:i})})})});export{Z as $,te as F,A as a,ee as b,D as c,v as d,h as e,N as u};