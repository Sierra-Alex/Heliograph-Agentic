import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { Stat } from "../patterns/Stat.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function StatLockup({color="light",numberOfStats=2,addHeadline=false,tagText="Text",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",primaryLabel="Click Me",secondaryLabel="Click Me",value="00",suffix="X",description="Short statement about the stat",stats,desktopSize="desktop-plus",className,...props}){
  const count=Number(numberOfStats)||2;
  const items=stats||Array.from({length:count},()=>({value,suffix,description}));
  return (<section className={cx("stl","stl--"+color,"stl--"+desktopSize,className)} {...props}>
    {addHeadline&&<CoreTypeLockups heading="H3" alignment="center" tag tagText={tagText} button includeSecondary desktopSize={desktopSize} headline={headline} subhead={subhead} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel}/>}
    <div className="stl__row">
      {items.map((s,i)=><Stat key={i} value={s.value} suffix={s.suffix} description={s.description}/>)}
    </div>
  </section>);
}
