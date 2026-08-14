import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function RoundPlusButton({size="lg",onDark=false,className,disabled,...props}){
  return (<button className={cx("rpb","rpb--"+size,onDark&&"rpb--on-dark",className)} disabled={disabled} {...props}>
    {size==="lg"
      ? <svg width="7.97" height="7.974" viewBox="0 0 7.97 7.974" fill="none" aria-hidden="true"><path d="M0 4.824V3.204H3.06826V0H4.92045V3.204H7.97V4.824H4.92045V7.974H3.06826V4.824H0Z" fill="currentColor"/></svg>
      : <svg width="5.978" height="5.981" viewBox="0 0 5.9775 5.9805" fill="none" aria-hidden="true"><path d="M0 3.618V2.403H2.3012V0H3.69033V2.403H5.9775V3.618H3.69033V5.9805H2.3012V3.618H0Z" fill="currentColor"/></svg>}
  </button>);
}
