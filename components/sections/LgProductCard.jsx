import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgProductCard({color="light",onDark=false,hue="purple",imagePosition="right",tagText="Text",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon. Buffalo jowl brisket meatloaf pancetta boudin, corned beef leberkas rump drumstick shoulder.",primaryLabel="Click Me",secondaryLabel="Click Me",desktopSize="desktop-plus",className,children,...props}){
  return (<section className={cx("lpc","lpc--"+hue,onDark?"lpc--on-dark":"lpc--"+color,imagePosition==="left"&&"lpc--image-left","lpc--"+desktopSize,className)} {...props}>
    <div className="lpc__card">
      <div className="lpc__content">
        <CoreTypeLockups heading="H3" tag tagText={tagText} button headline={headline} subhead={subhead} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} onDark={onDark} hue={hue} className="lpc__lockup"/>
      </div>
      <div className="lpc__image">{children}</div>
    </div>
  </section>);
}
