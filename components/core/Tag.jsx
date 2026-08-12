import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function Tag({color="purple",size="lg",onDark=false,className,children,...props}){
  return (<span className={cx("tag","tag--"+size,"tag--"+color,onDark&&"tag--on-dark",className)} {...props}>{children}</span>);
}
