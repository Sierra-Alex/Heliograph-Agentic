import React from "react";
import { SmResourceCard } from "../patterns/SmResourceCard.jsx";
import { HorizontalCoreType } from "../patterns/HorizontalCoreType.jsx";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function SmContentCardLockup({color="purple",pageBackground="light",cards=3,includeHeadline=true,headlineType="centered",buttonInHeadline="primary",largeImage=false,icon="diamond",headline="Headline goes here",subhead,tagText="Resources",items=[],desktopSize="desktop-plus",className,...props}){
  const Lockup=headlineType==="centered"?CoreTypeLockups:HorizontalCoreType;
  const isDark=pageBackground==="dark";
  const cardColor=isDark?color:pageBackground==="light"?"gray":"white";
  return (<section className={cx("ccl","ccl--"+color,"ccl--bg-"+pageBackground,headlineType==="centered"&&"ccl--centered","ccl--"+desktopSize,className)} {...props}>
    {includeHeadline&&<Lockup heading="H3" alignment={headlineType==="centered"?"center":"left"} tag tagText={tagText} button={buttonInHeadline!=="none"} includeSecondary={buttonInHeadline==="both"} onDark={isDark} hue={color} desktopSize={desktopSize} headline={headline} subhead={subhead} className="ccl__headline"/>}
    <div className="ccl__cards">
      {Array.from({length:cards}).map((_,i)=>{const it=items[i]||{};return <SmResourceCard key={i} color={cardColor} bigImage={largeImage} icon={icon} headline={it.headline} subhead={it.subhead} className="ccl__card"/>})}
    </div>
  </section>);
}
