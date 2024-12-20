import{_ as T}from"./usePress-BDQnv3aP.js";import{a as Ee}from"./context-DL1kNI1P.js";import{r as ae}from"./index-Dy2Ak0OH.js";function H(e,t){return e-t*Math.floor(e/t)}const oe=1721426;function A(e,t,r,n){t=j(e,t);let a=t-1,o=-2;return r<=2?o=0:Y(t)&&(o=-1),oe-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*r-362)/12+o+n)}function Y(e){return e%4===0&&(e%100!==0||e%400===0)}function j(e,t){return e==="BC"?1-t:t}function Se(e){let t="AD";return e<=0&&(t="BC",e=1-e),[t,e]}const Ce={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class v{fromJulianDay(t){let r=t,n=r-oe,a=Math.floor(n/146097),o=H(n,146097),c=Math.floor(o/36524),i=H(o,36524),f=Math.floor(i/1461),u=H(i,1461),w=Math.floor(u/365),D=a*400+c*100+f*4+w+(c!==4&&w!==4?1:0),[x,M]=Se(D),y=r-A(x,M,1,1),Z=2;r<A(x,M,3,1)?Z=0:Y(M)&&(Z=1);let ee=Math.floor(((y+Z)*12+373)/367),Ie=r-A(x,M,ee,1)+1;return new I(x,M,ee,Ie)}toJulianDay(t){return A(t.era,t.year,t.month,t.day)}getDaysInMonth(t){return Ce[Y(t.year)?"leapyear":"standard"][t.month-1]}getMonthsInYear(t){return 12}getDaysInYear(t){return Y(t.year)?366:365}getYearsInEra(t){return 9999}getEras(){return["BC","AD"]}isInverseEra(t){return t.era==="BC"}balanceDate(t){t.year<=0&&(t.era=t.era==="BC"?"AD":"BC",t.year=1-t.year)}constructor(){this.identifier="gregory"}}const Ae={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function Re(e,t){return t=l(t,e.calendar),e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function ht(e,t){return t=l(t,e.calendar),e=B(e),t=B(t),e.era===t.era&&e.year===t.year&&e.month===t.month}function dt(e,t){return e.calendar.identifier===t.calendar.identifier&&e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function $t(e,t){return Re(e,Be(t))}function ce(e,t){let r=e.calendar.toJulianDay(e),n=Math.ceil(r+1-ke(t))%7;return n<0&&(n+=7),n}function Ye(e){return d(Date.now(),e)}function Be(e){return He(Ye(e))}function ie(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function fe(e,t){return te(e)-te(t)}function te(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}let P=null;function W(){return P==null&&(P=new Intl.DateTimeFormat().resolvedOptions().timeZone),P}function B(e){return e.subtract({days:e.day-1})}function yt(e){return e.add({days:e.calendar.getDaysInMonth(e)-e.day})}function mt(e){return B(e.subtract({months:e.month-1}))}function bt(e){return e.calendar.getMinimumMonthInYear?e.calendar.getMinimumMonthInYear(e):1}function Mt(e){return e.calendar.getMinimumDayInMonth?e.calendar.getMinimumDayInMonth(e):1}function Oe(e,t){let r=ce(e,t);return e.subtract({days:r})}function pt(e,t){return Oe(e,t).add({days:6})}const re=new Map;function se(e){if(Intl.Locale){let r=re.get(e);return r||(r=new Intl.Locale(e).maximize().region,r&&re.set(e,r)),r}let t=e.split("-")[1];return t==="u"?void 0:t}function ke(e){let t=se(e);return t&&Ae[t]||0}function gt(e,t){let r=e.calendar.getDaysInMonth(e);return Math.ceil((ce(B(e),t)+r)/7)}function wt(e,t){return e&&t?e.compare(t)<=0?e:t:e||t}function Dt(e,t){return e&&t?e.compare(t)>=0?e:t:e||t}const Te={AF:[4,5],AE:[5,6],BH:[5,6],DZ:[5,6],EG:[5,6],IL:[5,6],IQ:[5,6],IR:[5,5],JO:[5,6],KW:[5,6],LY:[5,6],OM:[5,6],QA:[5,6],SA:[5,6],SD:[5,6],SY:[5,6],YE:[5,6]};function xt(e,t){let r=e.calendar.toJulianDay(e),n=Math.ceil(r+1)%7;n<0&&(n+=7);let a=se(t),[o,c]=Te[a]||[6,0];return n===o||n===c}function m(e){e=l(e,new v);let t=j(e.era,e.year);return le(t,e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function le(e,t,r,n,a,o,c){let i=new Date;return i.setUTCHours(n,a,o,c),i.setUTCFullYear(e,t-1,r),i.getTime()}function S(e,t){if(t==="UTC")return 0;if(e>0&&t===W())return new Date(e).getTimezoneOffset()*-6e4;let{year:r,month:n,day:a,hour:o,minute:c,second:i}=ue(e,t);return le(r,n,a,o,c,i,0)-Math.floor(e/1e3)*1e3}const ne=new Map;function ue(e,t){let r=ne.get(t);r||(r=new Intl.DateTimeFormat("en-US",{timeZone:t,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),ne.set(t,r));let n=r.formatToParts(new Date(e)),a={};for(let o of n)o.type!=="literal"&&(a[o.type]=o.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const O=864e5;function Ue(e,t){let r=m(e),n=r-S(r-O,t),a=r-S(r+O,t);return he(e,t,n,a)}function he(e,t,r,n){return(r===n?[r]:[r,n]).filter(o=>Ze(e,t,o))}function Ze(e,t,r){let n=ue(r,t);return e.year===n.year&&e.month===n.month&&e.day===n.day&&e.hour===n.hour&&e.minute===n.minute&&e.second===n.second}function h(e,t,r="compatible"){let n=b(e);if(t==="UTC")return m(n);if(t===W()&&r==="compatible"){n=l(n,new v);let f=new Date,u=j(n.era,n.year);return f.setFullYear(u,n.month-1,n.day),f.setHours(n.hour,n.minute,n.second,n.millisecond),f.getTime()}let a=m(n),o=S(a-O,t),c=S(a+O,t),i=he(n,t,a-o,a-c);if(i.length===1)return i[0];if(i.length>1)switch(r){case"compatible":case"earlier":return i[0];case"later":return i[i.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(r){case"earlier":return Math.min(a-o,a-c);case"compatible":case"later":return Math.max(a-o,a-c);case"reject":throw new RangeError("No such absolute time found")}}function de(e,t,r="compatible"){return new Date(h(e,t,r))}function d(e,t){let r=S(e,t),n=new Date(e+r),a=n.getUTCFullYear(),o=n.getUTCMonth()+1,c=n.getUTCDate(),i=n.getUTCHours(),f=n.getUTCMinutes(),u=n.getUTCSeconds(),w=n.getUTCMilliseconds();return new g(a<1?"BC":"AD",a<1?-a+1:a,o,c,t,r,i,f,u,w)}function He(e){return new I(e.calendar,e.era,e.year,e.month,e.day)}function b(e,t){let r=0,n=0,a=0,o=0;if("timeZone"in e)({hour:r,minute:n,second:a,millisecond:o}=e);else if("hour"in e&&!t)return e;return t&&({hour:r,minute:n,second:a,millisecond:o}=t),new k(e.calendar,e.era,e.year,e.month,e.day,r,n,a,o)}function vt(e){return new _(e.hour,e.minute,e.second,e.millisecond)}function l(e,t){if(e.calendar.identifier===t.identifier)return e;let r=t.fromJulianDay(e.calendar.toJulianDay(e)),n=e.copy();return n.calendar=t,n.era=r.era,n.year=r.year,n.month=r.month,n.day=r.day,p(n),n}function Pe(e,t,r){if(e instanceof g)return e.timeZone===t?e:$e(e,t);let n=h(e,t,r);return d(n,t)}function Fe(e){let t=m(e)-e.offset;return new Date(t)}function $e(e,t){let r=m(e)-e.offset;return l(d(r,t),e.calendar)}const E=36e5;function U(e,t){let r=e.copy(),n="hour"in r?Me(r,t):0;J(r,t.years||0),r.calendar.balanceYearMonth&&r.calendar.balanceYearMonth(r,e),r.month+=t.months||0,K(r),ye(r),r.day+=(t.weeks||0)*7,r.day+=t.days||0,r.day+=n,Le(r),r.calendar.balanceDate&&r.calendar.balanceDate(r),r.year<1&&(r.year=1,r.month=1,r.day=1);let a=r.calendar.getYearsInEra(r);if(r.year>a){var o,c;let f=(o=(c=r.calendar).isInverseEra)===null||o===void 0?void 0:o.call(c,r);r.year=a,r.month=f?1:r.calendar.getMonthsInYear(r),r.day=f?1:r.calendar.getDaysInMonth(r)}r.month<1&&(r.month=1,r.day=1);let i=r.calendar.getMonthsInYear(r);return r.month>i&&(r.month=i,r.day=r.calendar.getDaysInMonth(r)),r.day=Math.max(1,Math.min(r.calendar.getDaysInMonth(r),r.day)),r}function J(e,t){var r,n;!((r=(n=e.calendar).isInverseEra)===null||r===void 0)&&r.call(n,e)&&(t=-t),e.year+=t}function K(e){for(;e.month<1;)J(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,J(e,1)}function Le(e){for(;e.day<1;)e.month--,K(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,K(e)}function ye(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function p(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),ye(e)}function G(e){let t={};for(let r in e)typeof e[r]=="number"&&(t[r]=-e[r]);return t}function me(e,t){return U(e,G(t))}function V(e,t){let r=e.copy();return t.era!=null&&(r.era=t.era),t.year!=null&&(r.year=t.year),t.month!=null&&(r.month=t.month),t.day!=null&&(r.day=t.day),p(r),r}function C(e,t){let r=e.copy();return t.hour!=null&&(r.hour=t.hour),t.minute!=null&&(r.minute=t.minute),t.second!=null&&(r.second=t.second),t.millisecond!=null&&(r.millisecond=t.millisecond),be(r),r}function Ne(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=R(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=R(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=R(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=R(e.hour,24),t}function be(e){e.millisecond=Math.max(0,Math.min(e.millisecond,1e3)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function R(e,t){let r=e%t;return r<0&&(r+=t),r}function Me(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,Ne(e)}function pe(e,t){let r=e.copy();return Me(r,t),r}function Je(e,t){return pe(e,G(t))}function q(e,t,r,n){let a=e.copy();switch(t){case"era":{let i=e.calendar.getEras(),f=i.indexOf(e.era);if(f<0)throw new Error("Invalid era: "+e.era);f=$(f,r,0,i.length-1,n==null?void 0:n.round),a.era=i[f],p(a);break}case"year":var o,c;!((o=(c=a.calendar).isInverseEra)===null||o===void 0)&&o.call(c,a)&&(r=-r),a.year=$(e.year,r,-1/0,9999,n==null?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,e);break;case"month":a.month=$(e.month,r,1,e.calendar.getMonthsInYear(e),n==null?void 0:n.round);break;case"day":a.day=$(e.day,r,1,e.calendar.getDaysInMonth(e),n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(a),p(a),a}function Q(e,t,r,n){let a=e.copy();switch(t){case"hour":{let o=e.hour,c=0,i=23;if((n==null?void 0:n.hourCycle)===12){let f=o>=12;c=f?12:0,i=f?23:11}a.hour=$(o,r,c,i,n==null?void 0:n.round);break}case"minute":a.minute=$(e.minute,r,0,59,n==null?void 0:n.round);break;case"second":a.second=$(e.second,r,0,59,n==null?void 0:n.round);break;case"millisecond":a.millisecond=$(e.millisecond,r,0,999,n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+t)}return a}function $(e,t,r,n,a=!1){if(a){e+=Math.sign(t),e<r&&(e=n);let o=Math.abs(t);t>0?e=Math.ceil(e/o)*o:e=Math.floor(e/o)*o,e>n&&(e=r)}else e+=t,e<r?e=n-(r-e-1):e>n&&(e=r+(e-n-1));return e}function ge(e,t){let r;if(t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0){let a=U(b(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days});r=h(a,e.timeZone)}else r=m(e)-e.offset;r+=t.milliseconds||0,r+=(t.seconds||0)*1e3,r+=(t.minutes||0)*6e4,r+=(t.hours||0)*36e5;let n=d(r,e.timeZone);return l(n,e.calendar)}function Ke(e,t){return ge(e,G(t))}function je(e,t,r,n){switch(t){case"hour":{let a=0,o=23;if((n==null?void 0:n.hourCycle)===12){let y=e.hour>=12;a=y?12:0,o=y?23:11}let c=b(e),i=l(C(c,{hour:a}),new v),f=[h(i,e.timeZone,"earlier"),h(i,e.timeZone,"later")].filter(y=>d(y,e.timeZone).day===i.day)[0],u=l(C(c,{hour:o}),new v),w=[h(u,e.timeZone,"earlier"),h(u,e.timeZone,"later")].filter(y=>d(y,e.timeZone).day===u.day).pop(),D=m(e)-e.offset,x=Math.floor(D/E),M=D%E;return D=$(x,r,Math.floor(f/E),Math.floor(w/E),n==null?void 0:n.round)*E+M,l(d(D,e.timeZone),e.calendar)}case"minute":case"second":case"millisecond":return Q(e,t,r,n);case"era":case"year":case"month":case"day":{let a=q(b(e),t,r,n),o=h(a,e.timeZone);return l(d(o,e.timeZone),e.calendar)}default:throw new Error("Unsupported field "+t)}}function We(e,t,r){let n=b(e),a=C(V(n,t),t);if(a.compare(n)===0)return e;let o=h(a,e.timeZone,r);return l(d(o,e.timeZone),e.calendar)}const Ge=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,Ve=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/,qe=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;function It(e){let t=e.match(Ge);if(!t)throw new Error("Invalid ISO 8601 date string: "+e);let r=new I(s(t[1],0,9999),s(t[2],1,12),1);return r.day=s(t[3],0,r.calendar.getDaysInMonth(r)),r}function Et(e,t){let r=e.match(Ve);if(!r)throw new Error("Invalid ISO 8601 date time string: "+e);let n=s(r[1],-9999,9999),a=n<1?"BC":"AD",o=new g(a,n<1?-n+1:n,s(r[2],1,12),1,r[10],0,r[4]?s(r[4],0,23):0,r[5]?s(r[5],0,59):0,r[6]?s(r[6],0,59):0,r[7]?s(r[7],0,1/0)*1e3:0);o.day=s(r[3],0,o.calendar.getDaysInMonth(o));let c=b(o),i;if(r[8]){var f;if(o.offset=s(r[8],-23,23)*36e5+s((f=r[9])!==null&&f!==void 0?f:"0",0,59)*6e4,i=m(o)-o.offset,!Ue(c,o.timeZone).includes(i))throw new Error(`Offset ${xe(o.offset)} is invalid for ${z(o)} in ${o.timeZone}`)}else i=h(b(c),o.timeZone,t);return d(i,o.timeZone)}function Qe(e,t){let r=e.match(qe);if(!r)throw new Error("Invalid ISO 8601 date time string: "+e);let n=s(r[1],-9999,9999),a=n<1?"BC":"AD",o=new g(a,n<1?-n+1:n,s(r[2],1,12),1,t,0,r[4]?s(r[4],0,23):0,r[5]?s(r[5],0,59):0,r[6]?s(r[6],0,59):0,r[7]?s(r[7],0,1/0)*1e3:0);o.day=s(r[3],0,o.calendar.getDaysInMonth(o));var c;return r[8]&&(o.offset=s(r[8],-23,23)*36e5+s((c=r[9])!==null&&c!==void 0?c:"0",0,59)*6e4),$e(o,t)}function St(e){return Qe(e,W())}function s(e,t,r){let n=Number(e);if(n<t||n>r)throw new RangeError(`Value out of range: ${t} <= ${n} <= ${r}`);return n}function we(e){return`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`}function De(e){let t=l(e,new v),r;return t.era==="BC"?r=t.year===1?"0000":"-"+String(Math.abs(1-t.year)).padStart(6,"00"):r=String(t.year).padStart(4,"0"),`${r}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`}function z(e){return`${De(e)}T${we(e)}`}function xe(e){let t=Math.sign(e)<0?"-":"+";e=Math.abs(e);let r=Math.floor(e/36e5),n=e%36e5/6e4;return`${t}${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ze(e){return`${z(e)}${xe(e.offset)}[${e.timeZone}]`}function X(e){let t=typeof e[0]=="object"?e.shift():new v,r;if(typeof e[0]=="string")r=e.shift();else{let c=t.getEras();r=c[c.length-1]}let n=e.shift(),a=e.shift(),o=e.shift();return[t,r,n,a,o]}var Xe=new WeakMap;class I{copy(){return this.era?new I(this.calendar,this.era,this.year,this.month,this.day):new I(this.calendar,this.year,this.month,this.day)}add(t){return U(this,t)}subtract(t){return me(this,t)}set(t){return V(this,t)}cycle(t,r,n){return q(this,t,r,n)}toDate(t){return de(this,t)}toString(){return De(this)}compare(t){return ie(this,t)}constructor(...t){T(this,Xe,{writable:!0,value:void 0});let[r,n,a,o,c]=X(t);this.calendar=r,this.era=n,this.year=a,this.month=o,this.day=c,p(this)}}var _e=new WeakMap;class _{copy(){return new _(this.hour,this.minute,this.second,this.millisecond)}add(t){return pe(this,t)}subtract(t){return Je(this,t)}set(t){return C(this,t)}cycle(t,r,n){return Q(this,t,r,n)}toString(){return we(this)}compare(t){return fe(this,t)}constructor(t=0,r=0,n=0,a=0){T(this,_e,{writable:!0,value:void 0}),this.hour=t,this.minute=r,this.second=n,this.millisecond=a,be(this)}}var et=new WeakMap;class k{copy(){return this.era?new k(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new k(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(t){return U(this,t)}subtract(t){return me(this,t)}set(t){return V(C(this,t),t)}cycle(t,r,n){switch(t){case"era":case"year":case"month":case"day":return q(this,t,r,n);default:return Q(this,t,r,n)}}toDate(t,r){return de(this,t,r)}toString(){return z(this)}compare(t){let r=ie(this,t);return r===0?fe(this,b(t)):r}constructor(...t){T(this,et,{writable:!0,value:void 0});let[r,n,a,o,c]=X(t);this.calendar=r,this.era=n,this.year=a,this.month=o,this.day=c,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,p(this)}}var tt=new WeakMap;class g{copy(){return this.era?new g(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new g(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(t){return ge(this,t)}subtract(t){return Ke(this,t)}set(t,r){return We(this,t,r)}cycle(t,r,n){return je(this,t,r,n)}toDate(){return Fe(this)}toString(){return ze(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(t){return this.toDate().getTime()-Pe(t,this.timeZone).toDate().getTime()}constructor(...t){T(this,tt,{writable:!0,value:void 0});let[r,n,a,o,c]=X(t),i=t.shift(),f=t.shift();this.calendar=r,this.era=n,this.year=a,this.month=o,this.day=c,this.timeZone=i,this.offset=f,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,p(this)}}let F=new Map;class rt{format(t){return this.formatter.format(t)}formatToParts(t){return this.formatter.formatToParts(t)}formatRange(t,r){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(t,r);if(r<t)throw new RangeError("End date must be >= start date");return`${this.formatter.format(t)} – ${this.formatter.format(r)}`}formatRangeToParts(t,r){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(t,r);if(r<t)throw new RangeError("End date must be >= start date");let n=this.formatter.formatToParts(t),a=this.formatter.formatToParts(r);return[...n.map(o=>({...o,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(o=>({...o,source:"endRange"}))]}resolvedOptions(){let t=this.formatter.resolvedOptions();return ot()&&(this.resolvedHourCycle||(this.resolvedHourCycle=ct(t.locale,this.options)),t.hourCycle=this.resolvedHourCycle,t.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),t.calendar==="ethiopic-amete-alem"&&(t.calendar="ethioaa"),t}constructor(t,r={}){this.formatter=ve(t,r),this.options=r}}const nt={true:{ja:"h11"},false:{}};function ve(e,t={}){if(typeof t.hour12=="boolean"&&at()){t={...t};let a=nt[String(t.hour12)][e.split("-")[0]],o=t.hour12?"h12":"h23";t.hourCycle=a??o,delete t.hour12}let r=e+(t?Object.entries(t).sort((a,o)=>a[0]<o[0]?-1:1).join():"");if(F.has(r))return F.get(r);let n=new Intl.DateTimeFormat(e,t);return F.set(r,n),n}let L=null;function at(){return L==null&&(L=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),L}let N=null;function ot(){return N==null&&(N=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),N}function ct(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),e+=(e.includes("-u-")?"":"-u")+"-nu-latn";let r=ve(e,{...t,timeZone:void 0}),n=parseInt(r.formatToParts(new Date(2020,2,3,0)).find(o=>o.type==="hour").value,10),a=parseInt(r.formatToParts(new Date(2020,2,3,23)).find(o=>o.type==="hour").value,10);if(n===0&&a===23)return"h23";if(n===24&&a===23)return"h24";if(n===0&&a===11)return"h11";if(n===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}function it(e,t){let r=ae.useRef(null);return e&&r.current&&t(e,r.current)&&(e=r.current),r.current=e,e}function Ct(e){e=it(e??{},ft);let{locale:t}=Ee();return ae.useMemo(()=>new rt(t,e),[t,e])}function ft(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let a of r)if(t[a]!==e[a])return!1;return!0}export{Be as $,H as A,A as B,Y as C,Re as D,it as E,$t as F,mt as G,ce as H,ht as I,gt as J,Mt as K,bt as L,W as a,It as b,xt as c,Oe as d,B as e,I as f,pt as g,yt as h,Et as i,Ct as j,St as k,Ye as l,_ as m,g as n,rt as o,Pe as p,vt as q,v as r,b as s,He as t,Dt as u,wt as v,dt as w,l as x,j as y,Se as z};
