import{c as f}from"./mergeProps-VNdaC4-V.js";import{r as l}from"./index-Dy2Ak0OH.js";let $=0;const r=new Map;function m(t){let[o,d]=l.useState();return f(()=>{if(!t)return;let e=r.get(t);if(e)d(e.element.id);else{let n=`react-aria-description-${$++}`;d(n);let a=document.createElement("div");a.id=n,a.style.display="none",a.textContent=t,document.body.appendChild(a),e={refCount:0,element:a},r.set(t,e)}return e.refCount++,()=>{e&&--e.refCount===0&&(e.element.remove(),r.delete(t))}},[t]),{"aria-describedby":t?o:void 0}}export{m as $};