import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function RoundMinusButton({size="lg",onDark=false,className,disabled,...props}){
  return (<button className={cx("rmb","rmb--"+size,onDark&&"rmb--on-dark",className)} disabled={disabled} {...props}>
    {size==="lg"
      ? <svg width="7.97" height="1.62" viewBox="0 0 7.97 1.62" fill="none" aria-hidden="true"><path d="M0 1.62V0H3.06826H4.92045H7.97V1.62H4.92045H3.06826H0Z" fill="currentColor"/></svg>
      : <svg width="5.978" height="1.215" viewBox="0 0 5.9775 1.215" fill="none" aria-hidden="true"><path d="M0 1.215V0H2.3012H3.69033H5.9775V1.215H3.69033H2.3012H0Z" fill="currentColor"/></svg>}
  </button>);
}
