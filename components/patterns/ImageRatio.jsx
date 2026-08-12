import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function ImageRatio({ratio="1:1",className,children,...props}){
  return (<div className={cx("imr","imr--"+ratio.replace(":","-"),className)} {...props}>{children}</div>);
}
