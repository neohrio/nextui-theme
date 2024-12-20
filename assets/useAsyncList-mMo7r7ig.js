import{r as w}from"./index-Dy2Ak0OH.js";function S(t,e){let{cursor:m,getKey:o}=t;return{setSelectedKeys(i){e(l=>({...l,selectedKeys:i}))},setFilterText(i){e(l=>({...l,filterText:i}))},insert(i,...l){e(s=>$(s,i,...l))},insertBefore(i,...l){e(s=>{let r=s.items.findIndex(n=>(o==null?void 0:o(n))===i);if(r===-1)if(s.items.length===0)r=0;else return s;return $(s,r,...l)})},insertAfter(i,...l){e(s=>{let r=s.items.findIndex(n=>(o==null?void 0:o(n))===i);if(r===-1)if(s.items.length===0)r=0;else return s;return $(s,r+1,...l)})},prepend(...i){e(l=>$(l,0,...i))},append(...i){e(l=>$(l,l.items.length,...i))},remove(...i){e(l=>{let s=new Set(i),r=l.items.filter(f=>!s.has(o(f))),n="all";if(l.selectedKeys!=="all"){n=new Set(l.selectedKeys);for(let f of i)n.delete(f)}return m==null&&r.length===0&&(n=new Set),{...l,items:r,selectedKeys:n}})},removeSelectedItems(){e(i=>{if(i.selectedKeys==="all")return{...i,items:[],selectedKeys:new Set};let l=i.selectedKeys,s=i.items.filter(r=>!l.has(o(r)));return{...i,items:s,selectedKeys:new Set}})},move(i,l){e(s=>{let r=s.items.findIndex(d=>o(d)===i);if(r===-1)return s;let n=s.items.slice(),[f]=n.splice(r,1);return n.splice(l,0,f),{...s,items:n}})},moveBefore(i,l){e(s=>{let r=s.items.findIndex(d=>o(d)===i);if(r===-1)return s;let f=(Array.isArray(l)?l:[...l]).map(d=>s.items.findIndex(u=>o(u)===d)).sort((d,u)=>d-u);return C(s,f,r)})},moveAfter(i,l){e(s=>{let r=s.items.findIndex(d=>o(d)===i);if(r===-1)return s;let f=(Array.isArray(l)?l:[...l]).map(d=>s.items.findIndex(u=>o(u)===d)).sort((d,u)=>d-u);return C(s,f,r+1)})},update(i,l){e(s=>{let r=s.items.findIndex(n=>o(n)===i);return r===-1?s:{...s,items:[...s.items.slice(0,r),l,...s.items.slice(r+1)]}})}}}function $(t,e,...m){return{...t,items:[...t.items.slice(0,e),...m,...t.items.slice(e)]}}function C(t,e,m){m-=e.filter(l=>l<m).length;let o=e.map(l=>({from:l,to:m++}));for(let l=0;l<o.length;l++){let s=o[l].from;for(let r=l;r<o.length;r++)o[r].from>s&&o[r].from--}for(let l=0;l<o.length;l++){let s=o[l];for(let r=o.length-1;r>l;r--){let n=o[r];n.from<s.to?s.to++:n.from++}}let i=t.items.slice();for(let l of o){let[s]=i.splice(l.from,1);i.splice(l.to,0,s)}return{...t,items:i}}function T(t,e){let m;switch(t.state){case"idle":case"error":switch(e.type){case"loading":case"loadingMore":case"sorting":case"filtering":var o,i;return{...t,filterText:(o=e.filterText)!==null&&o!==void 0?o:t.filterText,state:e.type,items:e.type==="loading"?[]:t.items,sortDescriptor:(i=e.sortDescriptor)!==null&&i!==void 0?i:t.sortDescriptor,abortController:e.abortController};case"update":var l;return{...t,...(l=e.updater)===null||l===void 0?void 0:l.call(e,t)};case"success":case"error":return t;default:throw new Error(`Invalid action "${e.type}" in state "${t.state}"`)}case"loading":case"sorting":case"filtering":switch(e.type){case"success":if(e.abortController!==t.abortController)return t;var s;m=(s=e.selectedKeys)!==null&&s!==void 0?s:t.selectedKeys;var r,n,f;return{...t,filterText:(r=e.filterText)!==null&&r!==void 0?r:t.filterText,state:"idle",items:[...(n=e.items)!==null&&n!==void 0?n:[]],selectedKeys:m==="all"?"all":new Set(m),sortDescriptor:(f=e.sortDescriptor)!==null&&f!==void 0?f:t.sortDescriptor,abortController:void 0,cursor:e.cursor};case"error":return e.abortController!==t.abortController?t:{...t,state:"error",error:e.error,abortController:void 0};case"loading":case"loadingMore":case"sorting":case"filtering":var d;(d=t.abortController)===null||d===void 0||d.abort();var u;return{...t,filterText:(u=e.filterText)!==null&&u!==void 0?u:t.filterText,state:e.type,items:e.type==="loading"?[]:t.items,abortController:e.abortController};case"update":var g;return{...t,...(g=e.updater)===null||g===void 0?void 0:g.call(e,t)};default:throw new Error(`Invalid action "${e.type}" in state "${t.state}"`)}case"loadingMore":switch(e.type){case"success":var y;m=t.selectedKeys==="all"||e.selectedKeys==="all"?"all":new Set([...t.selectedKeys,...(y=e.selectedKeys)!==null&&y!==void 0?y:[]]);var c,p;return{...t,state:"idle",items:[...t.items,...(c=e.items)!==null&&c!==void 0?c:[]],selectedKeys:m,sortDescriptor:(p=e.sortDescriptor)!==null&&p!==void 0?p:t.sortDescriptor,abortController:void 0,cursor:e.cursor};case"error":return e.abortController!==t.abortController?t:{...t,state:"error",error:e.error};case"loading":case"sorting":case"filtering":var b;(b=t.abortController)===null||b===void 0||b.abort();var v;return{...t,filterText:(v=e.filterText)!==null&&v!==void 0?v:t.filterText,state:e.type,items:e.type==="loading"?[]:t.items,abortController:e.abortController};case"loadingMore":var K;return(K=e.abortController)===null||K===void 0||K.abort(),t;case"update":var x;return{...t,...(x=e.updater)===null||x===void 0?void 0:x.call(e,t)};default:throw new Error(`Invalid action "${e.type}" in state "${t.state}"`)}default:throw new Error(`Invalid state "${t.state}"`)}}function h(t){const{load:e,sort:m,initialSelectedKeys:o,initialSortDescriptor:i,getKey:l=u=>u.id||u.key,initialFilterText:s=""}=t;let[r,n]=w.useReducer(T,{state:"idle",error:void 0,items:[],selectedKeys:o==="all"?"all":new Set(o),sortDescriptor:i,filterText:s});const f=async(u,g)=>{let y=new AbortController;try{n({...u,abortController:y});var c;let v=(c=u.filterText)!==null&&c!==void 0?c:r.filterText;var p;let K=await g({items:r.items.slice(),selectedKeys:r.selectedKeys,sortDescriptor:(p=u.sortDescriptor)!==null&&p!==void 0?p:r.sortDescriptor,signal:y.signal,cursor:u.type==="loadingMore"?r.cursor:void 0,filterText:v});var b;let x=(b=K.filterText)!==null&&b!==void 0?b:v;n({type:"success",...K,abortController:y}),x&&x!==v&&!y.signal.aborted&&f({type:"filtering",filterText:x},e)}catch(v){n({type:"error",error:v,abortController:y})}};let d=w.useRef(!1);return w.useEffect(()=>{d.current||(f({type:"loading"},e),d.current=!0)},[]),{items:r.items,selectedKeys:r.selectedKeys,sortDescriptor:r.sortDescriptor,isLoading:r.state==="loading"||r.state==="loadingMore"||r.state==="sorting"||r.state==="filtering",loadingState:r.state,error:r.error,filterText:r.filterText,getItem(u){return r.items.find(g=>l(g)===u)},reload(){f({type:"loading"},e)},loadMore(){r.state==="loadingMore"||r.state==="filtering"||r.cursor==null||f({type:"loadingMore"},e)},sort(u){f({type:"sorting",sortDescriptor:u},m||e)},...S({...t,getKey:l,cursor:r.cursor},u=>{n({type:"update",updater:u})}),setFilterText(u){f({type:"filtering",filterText:u},e)}}}export{h as $};
