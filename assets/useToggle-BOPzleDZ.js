import{$ as r}from"./mergeProps-VNdaC4-V.js";import{$ as C}from"./filterDOMProps-CeZl_uWj.js";import{$ as I}from"./useFormReset-D4-J_9f3.js";import{$ as L}from"./useFocusable-aXrZ_JBU.js";import{b as c}from"./usePress-BDQnv3aP.js";function j(e,a,d){let{isDisabled:l=!1,isReadOnly:s=!1,value:o,name:b,children:f,"aria-label":p,"aria-labelledby":$,validationState:n="valid",isInvalid:t}=e,u=i=>{i.stopPropagation(),a.setSelected(i.target.checked)},m=f!=null,P=p!=null||$!=null;!m&&!P&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:v,isPressed:y}=c({isDisabled:l}),{pressProps:h,isPressed:g}=c({isDisabled:l||s,onPress(){a.toggle()}}),{focusableProps:x}=L(e,d),S=r(v,x),D=C(e,{labelable:!0});return I(d,a.isSelected,a.setSelected),{labelProps:r(h,{onClick:i=>i.preventDefault()}),inputProps:r(D,{"aria-invalid":t||n==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:u,disabled:l,...o==null?{}:{value:o},name:b,type:"checkbox",...S}),isSelected:a.isSelected,isPressed:y||g,isDisabled:l,isReadOnly:s,isInvalid:t||n==="invalid"}}export{j as $};
