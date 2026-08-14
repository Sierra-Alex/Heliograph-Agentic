import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgProductSection({headline="Headline goes here",subhead,headlineLayout="centered",surfaceColor="light",color="purple",subTextBlocks=0,blocks=[],tagText="Product",className,children,...props}){
  const NS=window.HeliographMixpanelDesignSystem_8500f4||{};
  const {CoreTypeLockup,HorizontalCoreType}=NS;
  const Lockup=headlineLayout==="horizontal"?HorizontalCoreType:CoreTypeLockup;
  const count=subTextBlocks||blocks.length;
  return (<section className={cx("lps","lps--"+surfaceColor,className)} {...props}>
    <div className="lps__inner">
      {Lockup&&<Lockup heading="H2" tag tagText={tagText} button headline={headline} subhead={subhead} alignment={headlineLayout==="centered"?"center":undefined} className="lps__lockup"/>}
      <div className={cx("lps__panel","lps__panel--"+color)}>{children}</div>
      {count>0&&<div className="lps__blocks">
        {Array.from({length:count}).map((_,i)=>(<div className="lps__block" key={i}>
          <h3 className="lps__block-headline">{(blocks[i]&&blocks[i].headline)||"Headline goes here"}</h3>
          {blocks[i]&&blocks[i].subhead&&<p className="lps__block-subhead">{blocks[i].subhead}</p>}
        </div>))}
      </div>}
    </div>
  </section>);
}
