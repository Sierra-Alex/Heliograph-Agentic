import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
function PlayIcon(){return(<span className="ph__icon"><svg className="ph__triangle" width="12.12" height="10.5" viewBox="0 0 12.1244 10.5" fill="none" aria-hidden="true"><path d="M6.06218 0L12.1244 10.5H0L6.06218 0Z" fill="currentColor"/></svg></span>);}
export function PlayHead({onDark=false,className,disabled,...props}){
  return (<button className={cx("ph",onDark&&"ph--on-dark",className)} disabled={disabled} {...props}><PlayIcon/></button>);
}
