import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function ButtonLockup({size="lg",includeSecondary=true,onDark=false,primaryLabel="Get Started",secondaryLabel="Learn More",className,children,...props}){
  const {Button}=window.HeliographMixpanelDesignSystem_8500f4||{};
  return (<div className={cx("blk","blk--"+size,className)} {...props}>
    {children||(<>
      {Button&&<Button size={size} variant="primary" onDark={onDark}>{primaryLabel}</Button>}
      {includeSecondary&&Button&&<Button size={size} variant="secondary" onDark={onDark}>{secondaryLabel}</Button>}
    </>)}
  </div>);
}
