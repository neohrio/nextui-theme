import{r as s}from"./index-Dy2Ak0OH.js";function u(c={}){const{strict:a=!0,errorMessage:i="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:x}=c,t=s.createContext(void 0);t.displayName=x;function r(){var n;const o=s.useContext(t);if(!o&&a){const e=new Error(i);throw e.name="ContextError",(n=Error.captureStackTrace)==null||n.call(Error,e,r),e}return o}return[t.Provider,r,t]}const[d,m]=u({name:"ProviderContext",strict:!1});export{d as P,u as c,m as u};