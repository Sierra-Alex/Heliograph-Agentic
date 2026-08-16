import React from "react";
import { HorizontalCoreType } from "../patterns/HorizontalCoreType.jsx";
import { ResourceCard } from "../patterns/ResourceCard.jsx";
import { SmResourceCard } from "../patterns/SmResourceCard.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const CARD_COLOR={light:"gray",default:"white",muted:"white",purple:"purple",pool:"pool",mint:"mint",lava:"lava",mustard:"mustard",grass:"grass"};
export function ResourceCardLockup({resources="3-sm",withHeadline=true,pageBackground="light",headline="Headline goes here",subhead,tagText="Resources",className,...props}){
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
    {withHeadline&&<HorizontalCoreType heading="H2" tag tagText={tagText} button headline={headline} subhead={subhead} className="rcl__headline"/>}
    <div className={cx("rcl__row",sm>3&&"rcl__row--wrap")}>
      {lg>0&&<ResourceCard color={color} className="rcl__lg"/>}
      {Array.from({length:sm}).map((_,i)=><SmResourceCard key={i} color={color} className="rcl__sm"/>)}
    </div>
  </section>);
}
