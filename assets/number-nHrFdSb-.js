function c(n,t=-1/0,a=1/0){return Math.min(Math.max(n,t),a)}function i(n,t){let a=n,e=t.toString(),o=e.indexOf("."),r=o>=0?e.length-o:0;if(r>0){let f=Math.pow(10,r);a=Math.round(a*f)/f}return a}function l(n,t,a,e){t=Number(t),a=Number(a);let o=(n-(isNaN(t)?0:t))%e,r=i(Math.abs(o)*2>=e?n+Math.sign(o)*(e-Math.abs(o)):n-o,e);return isNaN(t)?!isNaN(a)&&r>a&&(r=Math.floor(i(a/e,e))*e):r<t?r=t:!isNaN(a)&&r>a&&(r=t+Math.floor(i((a-t)/e,e))*e),r=i(r,e),r}export{c as $,l as a};
