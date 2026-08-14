import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function FullWidthHeadline({color="purple",darkTheme=true,children="Accessible data, across your organization.",className,...props}){
  return (<section className={cx("fwh","fwh--"+color,darkTheme&&"fwh--dark",className)} {...props}>
    <p className="fwh__headline">{children}</p>
  </section>);
}
