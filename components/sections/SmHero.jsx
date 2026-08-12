import React from "react";
import { TopNav } from "./TopNav.jsx";
import { CoreTypeLockup } from "../patterns/CoreTypeLockup.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const SLICE_COUNT=11;
export function SmHero({color="purple",gradientStyle="simple",desktopSize="desktop-plus",tagText="Label",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",includeNav=true,children,className}){
  const stacked=desktopSize==="tablet"||desktopSize==="phone";
  return (<div className={cx("sh","sh--"+color,"sh--"+gradientStyle,"sh--"+desktopSize,className)}>
    {includeNav&&<TopNav desktopSize={desktopSize}/>}
    <div className="sh__banner">
      {gradientStyle==="sliced"&&<div className="sh__slices">{Array.from({length:SLICE_COUNT},(_,i)=>(
        <div key={i} className="sh__slice" style={{right:i*128+Math.floor(i/2),top:i*59.1,width:(i%2===0?128:129)+1}}/>))}</div>}
      <div className="sh__content">
        <CoreTypeLockup heading="H1" alignment={stacked?"center":"left"} tag tagText={tagText} button includeSecondary headline={headline} subhead={subhead} desktopSize={desktopSize}/>
      </div>
      <div className="sh__image">{children||<div className="sh__image-placeholder"/>}</div>
    </div>
  </div>);
}
