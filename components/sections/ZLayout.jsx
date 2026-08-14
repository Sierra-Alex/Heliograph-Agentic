import React from "react";
import { CoreTypeLockup } from "../patterns/CoreTypeLockup.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function ZLayout({color="purple",imagePosition="right",pageBackground="light",viewport="desktop-plus",tagText="Label",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",children,className}){
  const isDark=pageBackground==="dark";
  return (<section className={cx("zl","zl--"+color,"zl--bg-"+pageBackground,"zl--img-"+imagePosition,"zl--"+viewport,className)}>
    <div className="zl__card">
      <div className="zl__content">
        <CoreTypeLockup heading="H3" alignment="left" tag tagText={tagText} tagColor={color} button includeSecondary onDark={isDark} headline={headline} subhead={subhead} desktopSize={viewport} className="zl__type"/>
      </div>
      <div className="zl__image">{children}</div>
    </div>
  </section>);
}
