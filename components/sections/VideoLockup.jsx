import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { PlayHead } from "../core/PlayHead.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function VideoLockup({color="purple",pageBackground="light",includeHeadline=false,tagText="Text",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",primaryLabel="Click Me",secondaryLabel,desktopSize="desktop-plus",children,className,...props}){
  const isDark=pageBackground==="dark";
  return (<section className={cx("vl","vl--"+color,"vl--bg-"+pageBackground,"vl--"+desktopSize,className)} {...props}>
    {includeHeadline&&<CoreTypeLockups heading="H3" alignment="center" tag tagText={tagText} button includeSecondary={!!secondaryLabel} desktopSize={desktopSize} onDark={isDark} hue={color} headline={headline} subhead={subhead} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel}/>}
    <div className="vl__frame">
      {children||<div className="vl__placeholder"/>}
      <div className="vl__play"><PlayHead/></div>
    </div>
  </section>);
}
