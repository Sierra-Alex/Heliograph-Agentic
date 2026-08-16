import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { MdProductCards } from "../patterns/MdProductCards.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const BG_TO_CARD_BG={light:"gray",standard:"white",muted:"white",dark:"dark"};
export function MdProductCardLockup({color="purple",cardCount=3,cards,pageBackground="light",desktopSize="desktop-plus",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",className}){
  const cardBg=BG_TO_CARD_BG[pageBackground];
  const items=cards||Array.from({length:cardCount},()=>({}));
  return (<section className={cx("mpcl","mpcl--"+color,"mpcl--bg-"+pageBackground,"mpcl--"+desktopSize,className)}>
    <div className="mpcl__inner">
      <CoreTypeLockups heading="H3" alignment="left" button includeSecondary headline={headline} subhead={subhead} className="mpcl__type"/>
      <div className="mpcl__cards">{items.map((c,i)=>(<MdProductCards key={i} color={c.color||color} background={cardBg} leftAligned headline={c.headline} subhead={c.subhead}/>))}</div>
    </div>
  </section>);
}
