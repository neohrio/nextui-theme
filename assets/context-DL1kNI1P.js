import{r as o,e as l}from"./index-Dy2Ak0OH.js";import{$ as b}from"./SSRProvider-CmMeNDTG.js";const p=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),g=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function i(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n=typeof t.getTextInfo=="function"?t.getTextInfo():t.textInfo;if(n)return n.direction==="rtl";if(t.script)return p.has(t.script)}let a=e.split("-")[0];return g.has(a)}const x=Symbol.for("react-aria.i18n.locale");function d(){let e=typeof window<"u"&&window[x]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:i(e)?"rtl":"ltr"}}let f=d(),r=new Set;function c(){f=d();for(let e of r)e(f)}function u(){let e=b(),[a,t]=o.useState(f);return o.useEffect(()=>(r.size===0&&window.addEventListener("languagechange",c),r.add(t),()=>{r.delete(t),r.size===0&&window.removeEventListener("languagechange",c)}),[]),e?{locale:"en-US",direction:"ltr"}:a}const $=l.createContext(null);function L(e){let{locale:a,children:t}=e,n=u(),s=l.useMemo(()=>a?{locale:a,direction:i(a)?"rtl":"ltr"}:n,[n,a]);return l.createElement($.Provider,{value:s},t)}function S(){let e=u();return o.useContext($)||e}export{L as $,S as a};
