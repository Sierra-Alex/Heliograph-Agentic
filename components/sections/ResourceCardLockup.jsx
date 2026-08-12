import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const CARD_COLOR={light:"gray",default:"white",muted:"white",purple:"purple",pool:"pool",mint:"mint",lava:"lava",mustard:"mustard",grass:"grass"};
export function ResourceCardLockup({resources="3-sm",withHeadline=true,pageBackground="light",headline="Headline goes here",subhead,tagText="Resources",className,...props}){
  const NS=window.HeliographMixpanelDesignSystem_8500f4||{};
  const {HorizontalCoreType,ResourceCard,SmResourceCard}=NS;
  const color=CARD_COLOR[pageBackground]||"gray";
  const [lg,sm]=(()=>{
    switch(resources){
      case "1-lg": return [1,0];
      case "1-lg/2-sm": return [1,2];
      case "1-lg/3-sm": return [1,3];
      case "2-sm": return [0,2];
      case "4-sm": return [0,4];
      case "6-sm": return [0,6];
      default: return [0,3];
    }
  })();
  return (<section className={cx("rcl","rcl--"+pageBackground,className)} {...props}>
    {withHeadline&&HorizontalCoreType&&<HorizontalCoreType heading="H2" tag tagText={tagText} button headline={headline} subhead={subhead} className="rcl__headline"/>}
    <div className={cx("rcl__row",sm>3&&"rcl__row--wrap")}>
      {lg>0&&ResourceCard&&<ResourceCard color={color} className="rcl__lg"/>}
      {Array.from({length:sm}).map((_,i)=>SmResourceCard?<SmResourceCard key={i} color={color} className="rcl__sm"/>:null)}
    </div>
  </section>);
}
