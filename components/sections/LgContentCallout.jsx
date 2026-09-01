import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
import { BulletList } from "../patterns/BulletList.jsx";
import { AddedContent } from "../patterns/AddedContent.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LgContentCallout({color="purple",pageBackground="light",imagePosition="right",content="bullets",tagText="Resource",headline="Headline goes here",subhead,ctaLabel="Learn More",secondaryLabel,items=["Bullet point 01","Bullet point 02","Bullet point 03"],desktopSize="desktop-plus",className,children,...props}){
  const isDark=pageBackground==="dark";
  return (<section className={cx("lrc","lrc--"+color,"lrc--bg-"+pageBackground,imagePosition==="left"&&"lrc--image-left","lrc--"+desktopSize,className)} {...props}>
    <div className="lrc__content">
      <CoreTypeLockups heading="H3" tag tagText={tagText} button headline={headline} subhead={subhead} primaryLabel={ctaLabel} includeSecondary={!!secondaryLabel} secondaryLabel={secondaryLabel} onDark={isDark} hue={color} desktopSize={desktopSize}/>
      {content==="bullets"?<BulletList items={items} onDark={isDark}/>:<AddedContent content={content} onDark={isDark} hue={color} items={items}/>}
    </div>
    <div className="lrc__image">{children}</div>
  </section>);
}
