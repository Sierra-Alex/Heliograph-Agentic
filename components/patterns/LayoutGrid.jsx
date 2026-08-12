import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LayoutGrid({breakpoint="desktop-plus",overlay=false,className,children,...props}){
  return (<div className={cx("lg","lg--"+breakpoint,overlay&&"lg--overlay",className)} {...props}>
    {overlay?Array.from({length:breakpoint==="phone"?2:breakpoint==="tablet"?6:12}).map((_,i)=><span className="lg__col" key={i}/>):children}
  </div>);
}
