import{$ as z}from"./focusSafely-Ch4YQihX.js";import{g as U,$ as m}from"./useFocusWithin-Dv5DP61h.js";import{c as g}from"./mergeProps-VNdaC4-V.js";import{r as N,e as L}from"./index-Dy2Ak0OH.js";function q(e){const t=U(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:r,visibility:o}=e.style,n=r!=="none"&&o!=="hidden"&&o!=="collapse";if(n){const{getComputedStyle:i}=e.ownerDocument.defaultView;let{display:c,visibility:a}=i(e);n=c!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function H(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function V(e,t){return e.nodeName!=="#comment"&&q(e)&&H(e,t)&&(!e.parentElement||V(e.parentElement,e))}const D=L.createContext(null),C="react-aria-focus-scope-restore";let f=null;function ne(e){let{children:t,contain:r,restoreFocus:o,autoFocus:n}=e,i=N.useRef(null),c=N.useRef(null),a=N.useRef([]),{parentNode:b}=N.useContext(D)||{},l=N.useMemo(()=>new k({scopeRef:a}),[a]);g(()=>{let v=b||p.root;if(p.getTreeNode(v.scopeRef)&&f&&!F(f,v.scopeRef)){let s=p.getTreeNode(f);s&&(v=s)}v.addChild(l),p.addNode(l)},[l,b]),g(()=>{let v=p.getTreeNode(a);v&&(v.contain=!!r)},[r]),g(()=>{var v;let s=(v=i.current)===null||v===void 0?void 0:v.nextSibling,$=[],y=R=>R.stopPropagation();for(;s&&s!==c.current;)$.push(s),s.addEventListener(C,y),s=s.nextSibling;return a.current=$,()=>{for(let R of $)R.removeEventListener(C,y)}},[t]),X(a,o,r),Y(a,r),Z(a,o,r),Q(a,n),N.useEffect(()=>{const v=m(a.current?a.current[0]:void 0).activeElement;let s=null;if(T(v,a.current)){for(let $ of p.traverse())$.scopeRef&&T(v,$.scopeRef.current)&&(s=$);s===p.getTreeNode(a)&&(f=s.scopeRef)}},[a]),g(()=>()=>{var v,s,$;let y=($=(s=p.getTreeNode(a))===null||s===void 0||(v=s.parent)===null||v===void 0?void 0:v.scopeRef)!==null&&$!==void 0?$:null;(a===f||F(a,f))&&(!y||p.getTreeNode(y))&&(f=y),p.removeTreeNode(a)},[a]);let u=N.useMemo(()=>W(a),[]),d=N.useMemo(()=>({focusManager:u,parentNode:l}),[l,u]);return L.createElement(D.Provider,{value:d},L.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:i}),t,L.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}function W(e){return{focusNext(t={}){let r=e.current,{from:o,tabbable:n,wrap:i,accept:c}=t,a=o||m(r[0]).activeElement,b=r[0].previousElementSibling,l=x(r),u=h(l,{tabbable:n,accept:c},r);u.currentNode=T(a,r)?a:b;let d=u.nextNode();return!d&&i&&(u.currentNode=b,d=u.nextNode()),d&&E(d,!0),d},focusPrevious(t={}){let r=e.current,{from:o,tabbable:n,wrap:i,accept:c}=t,a=o||m(r[0]).activeElement,b=r[r.length-1].nextElementSibling,l=x(r),u=h(l,{tabbable:n,accept:c},r);u.currentNode=T(a,r)?a:b;let d=u.previousNode();return!d&&i&&(u.currentNode=b,d=u.previousNode()),d&&E(d,!0),d},focusFirst(t={}){let r=e.current,{tabbable:o,accept:n}=t,i=x(r),c=h(i,{tabbable:o,accept:n},r);c.currentNode=r[0].previousElementSibling;let a=c.nextNode();return a&&E(a,!0),a},focusLast(t={}){let r=e.current,{tabbable:o,accept:n}=t,i=x(r),c=h(i,{tabbable:o,accept:n},r);c.currentNode=r[r.length-1].nextElementSibling;let a=c.previousNode();return a&&E(a,!0),a}}}const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],G=A.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const J=A.join(':not([hidden]):not([tabindex="-1"]),');function x(e){return e[0].parentElement}function S(e){let t=p.getTreeNode(f);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Y(e,t){let r=N.useRef(void 0),o=N.useRef(void 0);g(()=>{let n=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const i=m(n?n[0]:void 0);let c=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!S(e)||l.isComposing)return;let u=i.activeElement,d=e.current;if(!d||!T(u,d))return;let v=x(d),s=h(v,{tabbable:!0},d);if(!u)return;s.currentNode=u;let $=l.shiftKey?s.previousNode():s.nextNode();$||(s.currentNode=l.shiftKey?d[d.length-1].nextElementSibling:d[0].previousElementSibling,$=l.shiftKey?s.previousNode():s.nextNode()),l.preventDefault(),$&&E($,!0)},a=l=>{(!f||F(f,e))&&T(l.target,e.current)?(f=e,r.current=l.target):S(e)&&!w(l.target,e)?r.current?r.current.focus():f&&f.current&&M(f.current):S(e)&&(r.current=l.target)},b=l=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{if(i.activeElement&&S(e)&&!w(i.activeElement,e))if(f=e,i.body.contains(l.target)){var u;r.current=l.target,(u=r.current)===null||u===void 0||u.focus()}else f.current&&M(f.current)})};return i.addEventListener("keydown",c,!1),i.addEventListener("focusin",a,!1),n==null||n.forEach(l=>l.addEventListener("focusin",a,!1)),n==null||n.forEach(l=>l.addEventListener("focusout",b,!1)),()=>{i.removeEventListener("keydown",c,!1),i.removeEventListener("focusin",a,!1),n==null||n.forEach(l=>l.removeEventListener("focusin",a,!1)),n==null||n.forEach(l=>l.removeEventListener("focusout",b,!1))}},[e,t]),g(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function B(e){return w(e)}function T(e,t){return!e||!t?!1:t.some(r=>r.contains(e))}function w(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:r}of p.traverse(p.getTreeNode(t)))if(r&&T(e,r.current))return!0;return!1}function oe(e){return w(e,f)}function F(e,t){var r;let o=(r=p.getTreeNode(t))===null||r===void 0?void 0:r.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function E(e,t=!1){if(e!=null&&!t)try{z(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function j(e,t=!0){let r=e[0].previousElementSibling,o=x(e),n=h(o,{tabbable:t},e);n.currentNode=r;let i=n.nextNode();return t&&!i&&(o=x(e),n=h(o,{tabbable:!1},e),n.currentNode=r,i=n.nextNode()),i}function M(e,t=!0){E(j(e,t))}function Q(e,t){const r=L.useRef(t);N.useEffect(()=>{if(r.current){f=e;const o=m(e.current?e.current[0]:void 0);!T(o.activeElement,f.current)&&e.current&&M(e.current)}r.current=!1},[e])}function X(e,t,r){g(()=>{if(t||r)return;let o=e.current;const n=m(o?o[0]:void 0);let i=c=>{let a=c.target;T(a,e.current)?f=e:B(a)||(f=null)};return n.addEventListener("focusin",i,!1),o==null||o.forEach(c=>c.addEventListener("focusin",i,!1)),()=>{n.removeEventListener("focusin",i,!1),o==null||o.forEach(c=>c.removeEventListener("focusin",i,!1))}},[e,t,r])}function I(e){let t=p.getTreeNode(f);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function Z(e,t,r){const o=N.useRef(typeof document<"u"?m(e.current?e.current[0]:void 0).activeElement:null);g(()=>{let n=e.current;const i=m(n?n[0]:void 0);if(!t||r)return;let c=()=>{(!f||F(f,e))&&T(i.activeElement,e.current)&&(f=e)};return i.addEventListener("focusin",c,!1),n==null||n.forEach(a=>a.addEventListener("focusin",c,!1)),()=>{i.removeEventListener("focusin",c,!1),n==null||n.forEach(a=>a.removeEventListener("focusin",c,!1))}},[e,r]),g(()=>{const n=m(e.current?e.current[0]:void 0);if(!t)return;let i=c=>{if(c.key!=="Tab"||c.altKey||c.ctrlKey||c.metaKey||!S(e)||c.isComposing)return;let a=n.activeElement;if(!w(a,e)||!I(e))return;let b=p.getTreeNode(e);if(!b)return;let l=b.nodeToRestore,u=h(n.body,{tabbable:!0});u.currentNode=a;let d=c.shiftKey?u.previousNode():u.nextNode();if((!l||!n.body.contains(l)||l===n.body)&&(l=void 0,b.nodeToRestore=void 0),(!d||!w(d,e))&&l){u.currentNode=l;do d=c.shiftKey?u.previousNode():u.nextNode();while(w(d,e));c.preventDefault(),c.stopPropagation(),d?E(d,!0):B(l)?E(l,!0):a.blur()}};return r||n.addEventListener("keydown",i,!0),()=>{r||n.removeEventListener("keydown",i,!0)}},[e,t,r]),g(()=>{const n=m(e.current?e.current[0]:void 0);if(!t)return;let i=p.getTreeNode(e);if(i){var c;return i.nodeToRestore=(c=o.current)!==null&&c!==void 0?c:void 0,()=>{let a=p.getTreeNode(e);if(!a)return;let b=a.nodeToRestore;if(t&&b&&(n.activeElement&&w(n.activeElement,e)||n.activeElement===n.body&&I(e))){let l=p.clone();requestAnimationFrame(()=>{if(n.activeElement===n.body){let u=l.getTreeNode(e);for(;u;){if(u.nodeToRestore&&u.nodeToRestore.isConnected){P(u.nodeToRestore);return}u=u.parent}for(u=l.getTreeNode(e);u;){if(u.scopeRef&&u.scopeRef.current&&p.getTreeNode(u.scopeRef)){let d=j(u.scopeRef.current,!0);P(d);return}u=u.parent}}})}}}},[e,t])}function P(e){e.dispatchEvent(new CustomEvent(C,{bubbles:!0,cancelable:!0}))&&E(e)}function h(e,t,r){let o=t!=null&&t.tabbable?J:G,n=m(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){var c;return!(t==null||(c=t.from)===null||c===void 0)&&c.contains(i)?NodeFilter.FILTER_REJECT:i.matches(o)&&V(i)&&(!r||T(i,r))&&(!(t!=null&&t.accept)||t.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(n.currentNode=t.from),n}function ae(e,t={}){return{focusNext(r={}){let o=e.current;if(!o)return null;let{from:n,tabbable:i=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,b=n||m(o).activeElement,l=h(o,{tabbable:i,accept:a});o.contains(b)&&(l.currentNode=b);let u=l.nextNode();return!u&&c&&(l.currentNode=o,u=l.nextNode()),u&&E(u,!0),u},focusPrevious(r=t){let o=e.current;if(!o)return null;let{from:n,tabbable:i=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,b=n||m(o).activeElement,l=h(o,{tabbable:i,accept:a});if(o.contains(b))l.currentNode=b;else{let d=_(l);return d&&E(d,!0),d??null}let u=l.previousNode();if(!u&&c){l.currentNode=o;let d=_(l);if(!d)return null;u=d}return u&&E(u,!0),u??null},focusFirst(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:i=t.accept}=r,a=h(o,{tabbable:n,accept:i}).nextNode();return a&&E(a,!0),a},focusLast(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:i=t.accept}=r,c=h(o,{tabbable:n,accept:i}),a=_(c);return a&&E(a,!0),a??null}}}function _(e){let t,r;do r=e.lastChild(),r&&(t=r);while(r);return t}class K{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,r,o){let n=this.fastMap.get(r??null);if(!n)return;let i=new k({scopeRef:t});n.addChild(i),i.parent=n,this.fastMap.set(t,i),o&&(i.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let r=this.fastMap.get(t);if(!r)return;let o=r.parent;for(let i of this.traverse())i!==r&&r.nodeToRestore&&i.nodeToRestore&&r.scopeRef&&r.scopeRef.current&&T(i.nodeToRestore,r.scopeRef.current)&&(i.nodeToRestore=r.nodeToRestore);let n=r.children;o&&(o.removeChild(r),n.size>0&&n.forEach(i=>o&&o.addChild(i))),this.fastMap.delete(r.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let r of t.children)yield*this.traverse(r)}clone(){var t;let r=new K;var o;for(let n of this.traverse())r.addTreeNode(n.scopeRef,(o=(t=n.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,n.nodeToRestore);return r}constructor(){this.fastMap=new Map,this.root=new k({scopeRef:null}),this.fastMap.set(null,this.root)}}class k{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let p=new K;export{h as $,oe as a,ae as b,ne as c};
