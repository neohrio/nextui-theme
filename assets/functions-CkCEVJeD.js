import{e as i}from"./index-Dy2Ak0OH.js";const s=t=>t?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():"";function u(...t){return function(e){t.some(o=>(o==null||o(e),e==null?void 0:e.defaultPrevented))}}function l(t){return`${t}-${Math.floor(Math.random()*1e6)}`}function f(t){for(const r in t)r.startsWith("on")&&delete t[r];return t}function d(t){if(!t||typeof t!="object")return"";try{return JSON.stringify(t)}catch{return""}}function m(t,r=0){let e;return function(...o){const n=()=>{e=void 0,t.apply(this,o)};e!==void 0&&clearTimeout(e),e=setTimeout(n,r)}}const a=()=>i.version.split(".")[0]==="19",p=t=>a()?t:t?"":void 0;export{u as a,p as b,s as c,m as d,l as g,d as o,f as r};