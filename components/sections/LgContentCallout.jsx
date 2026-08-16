import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgContentCallout({pageColor="purple",imagePosition="left",tagText="Resource",headline="Headline goes here",subhead,ctaLabel="Learn More",desktopSize="desktop-plus",className,children,...props}){
  const dark=!["white","default","muted"].includes(pageColor);
  return (<section className={cx("lrc","lrc--"+pageColor,imagePosition==="right"&&"lrc--image-right","lrc--"+desktopSize,className)} {...props}>
    <div className="lrc__frame"><div className="lrc__image">{children}</div></div>
    {<CoreTypeLockups heading="H3" tag tagText={tagText} button headline={headline} subhead={subhead} primaryLabel={ctaLabel} onDark={dark} className="lrc__lockup"/>}
  </section>);
}
