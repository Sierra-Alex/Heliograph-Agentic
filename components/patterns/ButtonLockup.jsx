import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function ButtonLockup({size="lg",includeSecondary=true,onDark=false,primaryLabel="Get Started",secondaryLabel="Learn More",className,children,...props}){
  return (<div className={cx("blk","blk--"+size,className)} {...props}>
    {children||(<>
      {<Button size={size} variant="primary" onDark={onDark}>{primaryLabel}</Button>}
      {includeSecondary&&<Button size={size} variant="secondary" onDark={onDark}>{secondaryLabel}</Button>}
    </>)}
  </div>);
}
