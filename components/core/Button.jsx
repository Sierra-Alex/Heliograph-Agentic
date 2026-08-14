import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
function LgArrow(){return(<span className="btn__arrow--lg"><svg className="btn__arrow-line--lg" width="9.04" height="1.848" viewBox="0 0 9.04 1.848" fill="none" aria-hidden="true"><path d="M9.04 1.848H0V0H9.04V1.848Z" fill="currentColor"/></svg><svg className="btn__arrow-head--lg" width="6.504" height="9.912" viewBox="0 0 6.504 9.912" fill="none" aria-hidden="true"><path d="M6.504 4.968L1.176 9.912L0 8.76L3.216 5.88L4.176 4.957L3.216 4.032L0 1.176L1.176 0L6.504 4.968Z" fill="currentColor"/></svg></span>);}
function SmArrow(){return(<span className="btn__arrow--sm"><svg className="btn__arrow-line--sm" width="7" height="1" viewBox="0 0 7 1" fill="none" aria-hidden="true"><path d="M7 1H0V0H7V1Z" fill="currentColor"/></svg><svg className="btn__arrow-head--sm" width="4.878" height="9.434" viewBox="0 0 4.878 9.434" fill="none" aria-hidden="true"><path d="M4.878 4.726L0.882 8.434L0 7.57L2.412 5.41L3.132 4.71775L2.412 4.024L0 1.882L0.882 1L4.878 4.726Z" fill="currentColor"/></svg></span>);}
export function Button({variant="primary",size="lg",onDark=false,children,className,disabled,...props}){
  return (<button className={cx("btn","btn--"+variant,"btn--"+size,onDark&&"btn--on-dark",className)} disabled={disabled} {...props}>{children}{size==="lg"?<LgArrow/>:<SmArrow/>}</button>);
}
