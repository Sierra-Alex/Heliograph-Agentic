import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { HorizontalCoreType } from "../patterns/HorizontalCoreType.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgProductSection({headline="Headline goes here",subhead,headlineLayout="centered",color="purple",pageBackground="light",subTextBlocks=0,blocks=[],tagText="Product",primaryLabel="Get Started",secondaryLabel="Learn More",desktopSize="desktop-plus",className,children,...props}){
  const Lockup=headlineLayout==="horizontal"?HorizontalCoreType:CoreTypeLockups;
  const isDark=pageBackground==="dark";
  const count=subTextBlocks||blocks.length;
  return (<section className={cx("lps","lps--"+color,"lps--bg-"+pageBackground,headlineLayout==="horizontal"&&"lps--horizontal","lps--"+desktopSize,className)} {...props}>
    <div className="lps__inner">
      <Lockup heading="H3" tag tagText={tagText} hue={color} button includeSecondary primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} onDark={isDark} headline={headline} subhead={subhead} alignment={headlineLayout==="centered"?"center":undefined} desktopSize={desktopSize} className="lps__lockup"/>
      <div className={cx("lps__panel","lps__panel--"+color)}>{children}</div>
      {count>0&&<div className="lps__blocks">
        {Array.from({length:count}).map((_,i)=>(<div className="lps__block" key={i}>
          <h6 className="lps__block-headline">{(blocks[i]&&blocks[i].headline)||"Headline goes here"}</h6>
          <p className="lps__block-subhead">{(blocks[i]&&blocks[i].subhead)||"Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon. Buffalo jowl brisket meatloaf pancetta boudin, corned beef leberkas rump drumstick shoulder."}</p>
        </div>))}
      </div>}
    </div>
  </section>);
}
