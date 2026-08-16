import React from "react";
import { FullTopNav } from "./FullTopNav.jsx";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { LogoCarousel } from "../patterns/LogoCarousel.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const SLICE_COUNT=11;
const sliceTop=i=>{const mid=Math.floor(SLICE_COUNT/2);return (mid-Math.abs(mid-i))*64;};
export function LgHero({color="purple",gradientStyle="simple",desktopSize="desktop-plus",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",includeNav=true,children,className}){
  return (<div className={cx("lh","lh--"+color,"lh--"+gradientStyle,"lh--"+desktopSize,className)}>
    {includeNav&&<FullTopNav desktopSize={desktopSize}/>}
    <div className="lh__banner">
      {gradientStyle==="sliced"&&<div className="lh__slices">{Array.from({length:SLICE_COUNT},(_,i)=>(
        <div key={i} className="lh__slice" style={{right:i*128+Math.floor(i/2),top:sliceTop(i),width:(i%2===0?128:129)+1}}/>))}</div>}
      <div className="lh__ellipse"/>
      <div className="lh__lockup">
        <CoreTypeLockups heading="H1" alignment="center" tag={false} button includeSecondary headline={headline} subhead={subhead} desktopSize={desktopSize}/>
        <LogoCarousel includeHeadline={false} size="tight" stackSizing="sm"/>
      </div>
      <div className="lh__image">{children||<div className="lh__image-placeholder"/>}</div>
    </div>
  </div>);
}
