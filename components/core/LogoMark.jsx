import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LogoMark({variant="full",color="color",height,className,...props}){
  const src=variant==="mark"?"assets/logos/main-logo-gray-10.svg":"assets/logos/main-logo-absolute-white.svg";
  return (<img className={cx("logomark","logomark--"+color,"logomark--"+variant,className)} src={src} alt="Mixpanel" style={height?{height}:undefined} {...props}/>);
}
