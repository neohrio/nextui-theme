class r{getItemRect(t){let e=this.ref.current;if(!e)return null;let l=t!=null?e.querySelector(`[data-key="${CSS.escape(t.toString())}"]`):null;if(!l)return null;let o=e.getBoundingClientRect(),i=l.getBoundingClientRect();return{x:i.left-o.left+e.scrollLeft,y:i.top-o.top+e.scrollTop,width:i.width,height:i.height}}getContentSize(){let t=this.ref.current;var e,l;return{width:(e=t==null?void 0:t.scrollWidth)!==null&&e!==void 0?e:0,height:(l=t==null?void 0:t.scrollHeight)!==null&&l!==void 0?l:0}}getVisibleRect(){let t=this.ref.current;var e,l,o,i;return{x:(e=t==null?void 0:t.scrollLeft)!==null&&e!==void 0?e:0,y:(l=t==null?void 0:t.scrollTop)!==null&&l!==void 0?l:0,width:(o=t==null?void 0:t.offsetWidth)!==null&&o!==void 0?o:0,height:(i=t==null?void 0:t.offsetHeight)!==null&&i!==void 0?i:0}}constructor(t){this.ref=t}}export{r as $};