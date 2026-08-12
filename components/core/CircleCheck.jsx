import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function CircleCheck({baseColor="dark",size=16,className,...props}){
  return (<svg className={cx("ccheck","ccheck--"+baseColor,className)} width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
    <circle cx="8" cy="8" r="8" className="ccheck__disc"/>
    <path d="M4.36 8L6.79 10.36L11.64 5.65" className="ccheck__tick" fill="none" strokeWidth="1.434" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>);
}
