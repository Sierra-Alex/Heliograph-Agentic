import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgResourceCallout({pageColor="purple",imagePosition="left",tagText="Resource",headline="Headline goes here",subhead,ctaLabel="Learn More",className,children,...props}){
  const NS=window.HeliographMixpanelDesignSystem_8500f4||{};
  const {CoreTypeLockup}=NS;
  const dark=!["white","default","muted"].includes(pageColor);
  return (<section className={cx("lrc","lrc--"+pageColor,imagePosition==="right"&&"lrc--image-right",className)} {...props}>
    <div className="lrc__frame"><div className="lrc__image">{children}</div></div>
    {CoreTypeLockup&&<CoreTypeLockup heading="H3" tag tagText={tagText} button headline={headline} subhead={subhead} primaryLabel={ctaLabel} onDark={dark} className="lrc__lockup"/>}
  </section>);
}
