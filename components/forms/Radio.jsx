import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function Radio({error=false,className,...props}){
  return (<label className={cx("radio",error&&"radio--error",className)}>
    <input type="radio" className="radio__input" {...props}/>
    <span className="radio__circle"><span className="radio__dot"/></span>
  </label>);
}
