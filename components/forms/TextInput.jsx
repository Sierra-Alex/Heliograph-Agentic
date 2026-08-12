import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function TextInput({error=false,valid=false,disabled=false,className,...props}){
  return (<div className={cx("text-input",valid&&"text-input--valid",error&&"text-input--error",disabled&&"text-input--disabled",className)}>
    <input type="text" className="text-input__field" disabled={disabled} {...props}/>
    {valid&&<svg className="text-input__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="var(--interactive-component-text-input-fill-success)" strokeWidth="2" strokeLinecap="round"/></svg>}
  </div>);
}
