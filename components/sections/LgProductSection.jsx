import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { HorizontalCoreType } from "../patterns/HorizontalCoreType.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgProductSection({headline="Headline goes here",subhead,headlineLayout="centered",color="light",onDark=false,hue="purple",heading="H2",subTextBlocks=0,blocks=[],tagText="Product",primaryLabel="Get Started",secondaryLabel="Learn More",desktopSize="desktop-plus",className,children,...props}){
  const Lockup=headlineLayout==="horizontal"?HorizontalCoreType:CoreTypeLockups;
  const count=subTextBlocks||blocks.length;
  return (<section className={cx("lps",onDark?"lps--"+hue:"lps--"+color,headlineLayout==="horizontal"&&"lps--horizontal","lps--"+desktopSize,className)} {...props}>
    <div className="lps__inner">
      <Lockup heading={heading} tag tagText={tagText} hue={hue} button includeSecondary primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} onDark={onDark} headline={headline} subhead={subhead} alignment={headlineLayout==="centered"?"center":undefined} desktopSize={desktopSize} className="lps__lockup"/>
      <div className={cx("lps__panel","lps__panel--"+hue)}>{children}</div>
      {count>0&&<div className="lps__blocks">
        {Array.from({length:count}).map((_,i)=>(<div className="lps__block" key={i}>
          <h3 className="lps__block-headline">{(blocks[i]&&blocks[i].headline)||"Headline goes here"}</h3>
          {blocks[i]&&blocks[i].subhead&&<p className="lps__block-subhead">{blocks[i].subhead}</p>}
        </div>))}
      </div>}
    </div>
  </section>);
}
