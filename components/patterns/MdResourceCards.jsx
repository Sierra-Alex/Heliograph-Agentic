import React from "react";
import { CoreTypeLockups } from "./CoreTypeLockups.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DARK=new Set(["purple","pool","mint","lava","mustard","grass"]);
export function MdResourceCards({pageBackground="light",tagText="Text",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon. Buffalo jowl brisket meatloaf pancetta boudin, corned beef leberkas rump drumstick shoulder.",primaryLabel="Click Me",secondaryLabel="Click Me",children,className,...props}){
  const isDark=DARK.has(pageBackground);
  return (<div className={cx("mrc","mrc--"+pageBackground,className)} {...props}>
    <div className="mrc__image">{children||<div className="mrc__image-placeholder"/>}</div>
    <div className="mrc__content">
      <CoreTypeLockups heading="H4" tag tagText={tagText} button includeSecondary headline={headline} subhead={subhead} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} onDark={isDark} hue={isDark?pageBackground:undefined}/>
    </div>
  </div>);
}
