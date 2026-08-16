import React from "react";
import { ContentCard } from "../patterns/ContentCard.jsx";
import { HorizontalCoreType } from "../patterns/HorizontalCoreType.jsx";
import { CoreTypeLockup } from "../patterns/CoreTypeLockup.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const ROWS={1:[1],2:[2],3:[3],4:[2,2],5:[3,2]};
export function ContentCardLockup({cards=3,includeHeadline=true,headlineType="left",buttonInHeadline="primary",largeImage=true,headline="Headline goes here",subhead,tagText="Resources",items=[],pageBackground="light",className,...props}){
  const Lockup=headlineType==="centered"?CoreTypeLockup:HorizontalCoreType;
  const rows=ROWS[cards]||ROWS[3];
  let n=-1;
  return (<section className={cx("ccl","ccl--"+pageBackground,className)} {...props}>
    {includeHeadline&&<Lockup heading="H2" tag tagText={tagText} button={buttonInHeadline!=="none"} includeSecondary={buttonInHeadline==="both"} headline={headline} subhead={subhead} className="ccl__headline"/>}
    <div className="ccl__rows">
      {rows.map((count,r)=>(<div className="ccl__row" key={r}>
        {Array.from({length:count}).map(()=>{n+=1;const it=items[n]||{};return <ContentCard key={n} bigImage={largeImage} headline={it.headline||"Headline goes here"} subhead={it.subhead} className="ccl__card"/>})}
      </div>))}
    </div>
  </section>);
}
