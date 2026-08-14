import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function HeroImage({type="image",color="purple",className,children,...props}){
  return (<div className={cx("hero-img","hero-img--"+type,"hero-img--"+color,className)} {...props}>
    <div className="hero-img__inner">{children}</div>
  </div>);
}
