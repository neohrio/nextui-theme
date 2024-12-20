import{j as a}from"./jsx-runtime-CS_Wz6c_.js";import{c as s,p as b,r as y}from"./common-Vb02sPto.js";import"./index-Dy2Ak0OH.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f=({color:e})=>{const n=e?`#${b(e).slice(0,3).map(r=>r.toString(16).padStart(2,"0")).join("").toUpperCase()}`:"N/A";return a.jsx("div",{className:"flex flex-col items-center justify-center w-24 h-24 m-2 rounded-xl shadow-lg",style:{backgroundColor:e},children:a.jsx("span",{style:{color:y(e)},children:n})})},p=({color:e,className:n,textClassName:r})=>a.jsx("div",{className:`${n} flex flex-col items-center justify-center w-24 h-24 m-2 rounded-xl shadow-lg`,children:a.jsx("span",{className:`${r} text-sm`,children:e})}),w=({colors:e,isSemantic:n=!1})=>a.jsx("div",{className:"flex flex-row flex-wrap items-center justify-center w-full h-full p-2",children:e.map(({title:r,items:C})=>a.jsxs("div",{className:"flex flex-col items-start w-full h-full",children:[a.jsx("h2",{className:"text-xl font-bold text-foreground",children:r}),a.jsx("div",{className:"flex flex-row flex-wrap items-center justify-start w-full h-full p-4",children:C.map((l,m)=>n?a.jsx(p,{className:l.className,color:l.color,textClassName:l.textClassName},`${l.color}-${m}`):a.jsx(f,{color:l.color},`${l.color}-${m}`))})]},r))}),O={title:"Foundations/Colors",component:w,argTypes:{isSemantic:{control:!1}}},t=e=>e.map(n=>({color:n})),o={args:{colors:[{title:"App Colors",items:t([s.white,s.black])},{title:"Blue",items:t([...Object.values(s.blue)])},{title:"Purple",items:t([...Object.values(s.purple)])},{title:"Green",items:t([...Object.values(s.green)])},{title:"Red",items:t([...Object.values(s.red)])},{title:"Pink",items:t([...Object.values(s.pink)])},{title:"Yellow",items:t([...Object.values(s.yellow)])},{title:"Cyan",items:t([...Object.values(s.cyan)])}]}},c={args:{isSemantic:!0,colors:[{title:"Layout",items:[{color:"background",className:"bg-background",textClassName:"text-foreground"},{color:"foreground",className:"bg-foreground",textClassName:"text-background"},{color:"divider",className:"bg-divider",textClassName:"text-foreground"},{color:"focus",className:"bg-focus",textClassName:"text-primary-foreground"}]},{title:"Content",items:[{color:"content1",className:"bg-content1",textClassName:"text-content1-foreground"},{color:"content2",className:"bg-content2",textClassName:"text-content2-foreground"},{color:"content3",className:"bg-content3",textClassName:"text-content3-foreground"},{color:"content4",className:"bg-content4",textClassName:"text-content4-foreground"}]},{title:"Base",items:[{color:"default",className:"bg-default",textClassName:"text-default-foreground"},{color:"primary",className:"bg-primary",textClassName:"text-primary-foreground"},{color:"secondary",className:"bg-secondary",textClassName:"text-secondary-foreground"},{color:"success",className:"bg-success",textClassName:"text-success-foreground"},{color:"warning",className:"bg-warning",textClassName:"text-warning-foreground"},{color:"danger",className:"bg-danger",textClassName:"text-danger-foreground"}]},{title:"Default",items:[{color:"default-50",className:"bg-default-50",textClassName:"text-default-900"},{color:"default-100",className:"bg-default-100",textClassName:"text-default-900"},{color:"default-200",className:"bg-default-200",textClassName:"text-default-800"},{color:"default-300",className:"bg-default-300",textClassName:"text-default-800"},{color:"default-400",className:"bg-default-400",textClassName:"text-default-800"},{color:"default-500",className:"bg-default-500",textClassName:"text-default-foreground"},{color:"default-600",className:"bg-default-600",textClassName:"text-default-50"},{color:"default-700",className:"bg-default-700",textClassName:"text-default-100"},{color:"default-800",className:"bg-default-800",textClassName:"text-default-100"},{color:"default-900",className:"bg-default-900",textClassName:"text-default-100"}]},{title:"Primary",items:[{color:"primary-50",className:"bg-primary-50",textClassName:"text-primary-900"},{color:"primary-100",className:"bg-primary-100",textClassName:"text-primary-900"},{color:"primary-200",className:"bg-primary-200",textClassName:"text-primary-800"},{color:"primary-300",className:"bg-primary-300",textClassName:"text-primary-800"},{color:"primary-400",className:"bg-primary-400",textClassName:"text-primary-800"},{color:"primary-500",className:"bg-primary-500",textClassName:"text-primary-foreground"},{color:"primary-600",className:"bg-primary-600",textClassName:"text-primary-50"},{color:"primary-700",className:"bg-primary-700",textClassName:"text-primary-100"},{color:"primary-800",className:"bg-primary-800",textClassName:"text-primary-100"},{color:"primary-900",className:"bg-primary-900",textClassName:"text-primary-100"}]},{title:"Secondary",items:[{color:"secondary-50",className:"bg-secondary-50",textClassName:"text-secondary-900"},{color:"secondary-100",className:"bg-secondary-100",textClassName:"text-secondary-900"},{color:"secondary-200",className:"bg-secondary-200",textClassName:"text-secondary-800"},{color:"secondary-300",className:"bg-secondary-300",textClassName:"text-secondary-800"},{color:"secondary-400",className:"bg-secondary-400",textClassName:"text-secondary-800"},{color:"secondary-500",className:"bg-secondary-500",textClassName:"text-secondary-foreground"},{color:"secondary-600",className:"bg-secondary-600",textClassName:"text-secondary-50"},{color:"secondary-700",className:"bg-secondary-700",textClassName:"text-secondary-100"},{color:"secondary-800",className:"bg-secondary-800",textClassName:"text-secondary-100"},{color:"secondary-900",className:"bg-secondary-900",textClassName:"text-secondary-100"}]},{title:"Success",items:[{color:"success-50",className:"bg-success-50",textClassName:"text-success-900"},{color:"success-100",className:"bg-success-100",textClassName:"text-success-900"},{color:"success-200",className:"bg-success-200",textClassName:"text-success-800"},{color:"success-300",className:"bg-success-300",textClassName:"text-success-800"},{color:"success-400",className:"bg-success-400",textClassName:"text-success-800"},{color:"success-500",className:"bg-success-500",textClassName:"text-success-foreground"},{color:"success-600",className:"bg-success-600",textClassName:"text-success-50"},{color:"success-700",className:"bg-success-700",textClassName:"text-success-100"},{color:"success-800",className:"bg-success-800",textClassName:"text-success-100"},{color:"success-900",className:"bg-success-900",textClassName:"text-success-100"}]},{title:"Warning",items:[{color:"warning-50",className:"bg-warning-50",textClassName:"text-warning-900"},{color:"warning-100",className:"bg-warning-100",textClassName:"text-warning-900"},{color:"warning-200",className:"bg-warning-200",textClassName:"text-warning-800"},{color:"warning-300",className:"bg-warning-300",textClassName:"text-warning-800"},{color:"warning-400",className:"bg-warning-400",textClassName:"text-warning-800"},{color:"warning-500",className:"bg-warning-500",textClassName:"text-warning-foreground"},{color:"warning-600",className:"bg-warning-600",textClassName:"text-warning-50"},{color:"warning-700",className:"bg-warning-700",textClassName:"text-warning-100"},{color:"warning-800",className:"bg-warning-800",textClassName:"text-warning-100"},{color:"warning-900",className:"bg-warning-900",textClassName:"text-warning-100"}]},{title:"Danger",items:[{color:"danger-50",className:"bg-danger-50",textClassName:"text-danger-900"},{color:"danger-100",className:"bg-danger-100",textClassName:"text-danger-900"},{color:"danger-200",className:"bg-danger-200",textClassName:"text-danger-800"},{color:"danger-300",className:"bg-danger-300",textClassName:"text-danger-800"},{color:"danger-400",className:"bg-danger-400",textClassName:"text-danger-800"},{color:"danger-500",className:"bg-danger-500",textClassName:"text-danger-foreground"},{color:"danger-600",className:"bg-danger-600",textClassName:"text-danger-50"},{color:"danger-700",className:"bg-danger-700",textClassName:"text-danger-100"},{color:"danger-800",className:"bg-danger-800",textClassName:"text-danger-100"},{color:"danger-900",className:"bg-danger-900",textClassName:"text-danger-100"}]}]}};var g,x,N;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    colors: [{
      title: "App Colors",
      items: getCommonItems([commonColors.white, commonColors.black])
    }, {
      title: "Blue",
      items: getCommonItems([...Object.values(commonColors.blue)])
    }, {
      title: "Purple",
      items: getCommonItems([...Object.values(commonColors.purple)])
    }, {
      title: "Green",
      items: getCommonItems([...Object.values(commonColors.green)])
    }, {
      title: "Red",
      items: getCommonItems([...Object.values(commonColors.red)])
    }, {
      title: "Pink",
      items: getCommonItems([...Object.values(commonColors.pink)])
    }, {
      title: "Yellow",
      items: getCommonItems([...Object.values(commonColors.yellow)])
    }, {
      title: "Cyan",
      items: getCommonItems([...Object.values(commonColors.cyan)])
    }]
  }
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var d,i,u;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isSemantic: true,
    colors: [{
      title: "Layout",
      items: [{
        color: "background",
        className: "bg-background",
        textClassName: "text-foreground"
      }, {
        color: "foreground",
        className: "bg-foreground",
        textClassName: "text-background"
      }, {
        color: "divider",
        className: "bg-divider",
        textClassName: "text-foreground"
      }, {
        color: "focus",
        className: "bg-focus",
        textClassName: "text-primary-foreground"
      }]
    }, {
      title: "Content",
      items: [{
        color: "content1",
        className: "bg-content1",
        textClassName: "text-content1-foreground"
      }, {
        color: "content2",
        className: "bg-content2",
        textClassName: "text-content2-foreground"
      }, {
        color: "content3",
        className: "bg-content3",
        textClassName: "text-content3-foreground"
      }, {
        color: "content4",
        className: "bg-content4",
        textClassName: "text-content4-foreground"
      }]
    }, {
      title: "Base",
      items: [{
        color: "default",
        className: "bg-default",
        textClassName: "text-default-foreground"
      }, {
        color: "primary",
        className: "bg-primary",
        textClassName: "text-primary-foreground"
      }, {
        color: "secondary",
        className: "bg-secondary",
        textClassName: "text-secondary-foreground"
      }, {
        color: "success",
        className: "bg-success",
        textClassName: "text-success-foreground"
      }, {
        color: "warning",
        className: "bg-warning",
        textClassName: "text-warning-foreground"
      }, {
        color: "danger",
        className: "bg-danger",
        textClassName: "text-danger-foreground"
      }]
    }, {
      title: "Default",
      items: [{
        color: "default-50",
        className: "bg-default-50",
        textClassName: "text-default-900"
      }, {
        color: "default-100",
        className: "bg-default-100",
        textClassName: "text-default-900"
      }, {
        color: "default-200",
        className: "bg-default-200",
        textClassName: "text-default-800"
      }, {
        color: "default-300",
        className: "bg-default-300",
        textClassName: "text-default-800"
      }, {
        color: "default-400",
        className: "bg-default-400",
        textClassName: "text-default-800"
      }, {
        color: "default-500",
        className: "bg-default-500",
        textClassName: "text-default-foreground"
      }, {
        color: "default-600",
        className: "bg-default-600",
        textClassName: "text-default-50"
      }, {
        color: "default-700",
        className: "bg-default-700",
        textClassName: "text-default-100"
      }, {
        color: "default-800",
        className: "bg-default-800",
        textClassName: "text-default-100"
      }, {
        color: "default-900",
        className: "bg-default-900",
        textClassName: "text-default-100"
      }]
    }, {
      title: "Primary",
      items: [{
        color: "primary-50",
        className: "bg-primary-50",
        textClassName: "text-primary-900"
      }, {
        color: "primary-100",
        className: "bg-primary-100",
        textClassName: "text-primary-900"
      }, {
        color: "primary-200",
        className: "bg-primary-200",
        textClassName: "text-primary-800"
      }, {
        color: "primary-300",
        className: "bg-primary-300",
        textClassName: "text-primary-800"
      }, {
        color: "primary-400",
        className: "bg-primary-400",
        textClassName: "text-primary-800"
      }, {
        color: "primary-500",
        className: "bg-primary-500",
        textClassName: "text-primary-foreground"
      }, {
        color: "primary-600",
        className: "bg-primary-600",
        textClassName: "text-primary-50"
      }, {
        color: "primary-700",
        className: "bg-primary-700",
        textClassName: "text-primary-100"
      }, {
        color: "primary-800",
        className: "bg-primary-800",
        textClassName: "text-primary-100"
      }, {
        color: "primary-900",
        className: "bg-primary-900",
        textClassName: "text-primary-100"
      }]
    }, {
      title: "Secondary",
      items: [{
        color: "secondary-50",
        className: "bg-secondary-50",
        textClassName: "text-secondary-900"
      }, {
        color: "secondary-100",
        className: "bg-secondary-100",
        textClassName: "text-secondary-900"
      }, {
        color: "secondary-200",
        className: "bg-secondary-200",
        textClassName: "text-secondary-800"
      }, {
        color: "secondary-300",
        className: "bg-secondary-300",
        textClassName: "text-secondary-800"
      }, {
        color: "secondary-400",
        className: "bg-secondary-400",
        textClassName: "text-secondary-800"
      }, {
        color: "secondary-500",
        className: "bg-secondary-500",
        textClassName: "text-secondary-foreground"
      }, {
        color: "secondary-600",
        className: "bg-secondary-600",
        textClassName: "text-secondary-50"
      }, {
        color: "secondary-700",
        className: "bg-secondary-700",
        textClassName: "text-secondary-100"
      }, {
        color: "secondary-800",
        className: "bg-secondary-800",
        textClassName: "text-secondary-100"
      }, {
        color: "secondary-900",
        className: "bg-secondary-900",
        textClassName: "text-secondary-100"
      }]
    }, {
      title: "Success",
      items: [{
        color: "success-50",
        className: "bg-success-50",
        textClassName: "text-success-900"
      }, {
        color: "success-100",
        className: "bg-success-100",
        textClassName: "text-success-900"
      }, {
        color: "success-200",
        className: "bg-success-200",
        textClassName: "text-success-800"
      }, {
        color: "success-300",
        className: "bg-success-300",
        textClassName: "text-success-800"
      }, {
        color: "success-400",
        className: "bg-success-400",
        textClassName: "text-success-800"
      }, {
        color: "success-500",
        className: "bg-success-500",
        textClassName: "text-success-foreground"
      }, {
        color: "success-600",
        className: "bg-success-600",
        textClassName: "text-success-50"
      }, {
        color: "success-700",
        className: "bg-success-700",
        textClassName: "text-success-100"
      }, {
        color: "success-800",
        className: "bg-success-800",
        textClassName: "text-success-100"
      }, {
        color: "success-900",
        className: "bg-success-900",
        textClassName: "text-success-100"
      }]
    }, {
      title: "Warning",
      items: [{
        color: "warning-50",
        className: "bg-warning-50",
        textClassName: "text-warning-900"
      }, {
        color: "warning-100",
        className: "bg-warning-100",
        textClassName: "text-warning-900"
      }, {
        color: "warning-200",
        className: "bg-warning-200",
        textClassName: "text-warning-800"
      }, {
        color: "warning-300",
        className: "bg-warning-300",
        textClassName: "text-warning-800"
      }, {
        color: "warning-400",
        className: "bg-warning-400",
        textClassName: "text-warning-800"
      }, {
        color: "warning-500",
        className: "bg-warning-500",
        textClassName: "text-warning-foreground"
      }, {
        color: "warning-600",
        className: "bg-warning-600",
        textClassName: "text-warning-50"
      }, {
        color: "warning-700",
        className: "bg-warning-700",
        textClassName: "text-warning-100"
      }, {
        color: "warning-800",
        className: "bg-warning-800",
        textClassName: "text-warning-100"
      }, {
        color: "warning-900",
        className: "bg-warning-900",
        textClassName: "text-warning-100"
      }]
    }, {
      title: "Danger",
      items: [{
        color: "danger-50",
        className: "bg-danger-50",
        textClassName: "text-danger-900"
      }, {
        color: "danger-100",
        className: "bg-danger-100",
        textClassName: "text-danger-900"
      }, {
        color: "danger-200",
        className: "bg-danger-200",
        textClassName: "text-danger-800"
      }, {
        color: "danger-300",
        className: "bg-danger-300",
        textClassName: "text-danger-800"
      }, {
        color: "danger-400",
        className: "bg-danger-400",
        textClassName: "text-danger-800"
      }, {
        color: "danger-500",
        className: "bg-danger-500",
        textClassName: "text-danger-foreground"
      }, {
        color: "danger-600",
        className: "bg-danger-600",
        textClassName: "text-danger-50"
      }, {
        color: "danger-700",
        className: "bg-danger-700",
        textClassName: "text-danger-100"
      }, {
        color: "danger-800",
        className: "bg-danger-800",
        textClassName: "text-danger-100"
      }, {
        color: "danger-900",
        className: "bg-danger-900",
        textClassName: "text-danger-100"
      }]
    }]
  }
}`,...(u=(i=c.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const k=["CommonColors","SemanticColors"];export{o as CommonColors,c as SemanticColors,k as __namedExportsOrder,O as default};