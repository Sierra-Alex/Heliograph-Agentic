import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LogoCarousel({includeHeadline=true,headline="Trusted by 29,000+ paying customers",onDark=false,size="full",stackSizing="lg",logoCount=11,className}){
  const logos=Array.from({length:logoCount},(_,i)=><div key={i} className="lc__logo"/>);
  const dupes=Array.from({length:logoCount},(_,i)=><div key={"d"+i} className="lc__logo"/>);
  return (<div className={cx("lc","lc--"+stackSizing,onDark?"lc--dark":"lc--light",size==="tight"&&"lc--tight",className)}>
    {includeHeadline&&<p className="lc__headline">{headline}</p>}
    <div className="lc__row"><div className="lc__track">{logos}{dupes}</div></div>
  </div>);
}
