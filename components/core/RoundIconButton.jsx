import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
function LgArrowIcon(){return(<span className="rib__arrow"><svg className="rib__arrow-line" width="9.04" height="1.848" viewBox="0 0 9.04 1.848" fill="none" aria-hidden="true"><path d="M9.04 1.848H0V0H9.04V1.848Z" fill="currentColor"/></svg><svg className="rib__arrow-head" width="6.504" height="9.912" viewBox="0 0 6.504 9.912" fill="none" aria-hidden="true"><path d="M6.504 4.968L1.176 9.912L0 8.76L3.216 5.88L4.176 4.957L3.216 4.032L0 1.176L1.176 0L6.504 4.968Z" fill="currentColor"/></svg></span>);}
function SmArrowIcon(){return(<span className="rib__arrow"><svg className="rib__arrow-line rib__arrow-line--sm" width="7" height="1" viewBox="0 0 7 1" fill="none" aria-hidden="true"><path d="M7 1H0V0H7V1Z" fill="currentColor"/></svg><svg className="rib__arrow-head" width="4.878" height="7.434" viewBox="0 0 4.878 7.434" fill="none" aria-hidden="true"><path d="M4.878 3.726L0.882 7.434L0 6.57L2.412 4.41L3.132 3.718L2.412 3.024L0 0.882L0.882 0L4.878 3.726Z" fill="currentColor"/></svg></span>);}
export function RoundIconButton({direction="left",size="lg",onDark=false,className,disabled,...props}){
  return (<button className={cx("rib","rib--"+direction,"rib--"+size,onDark&&"rib--on-dark",className)} disabled={disabled} {...props}>{size==="lg"?<LgArrowIcon/>:<SmArrowIcon/>}</button>);
}
