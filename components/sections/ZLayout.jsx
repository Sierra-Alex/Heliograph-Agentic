import React from "react";
import { CoreTypeLockup } from "../patterns/CoreTypeLockup.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function ZLayout({color="purple",imagePosition="right",pageBackground="light",tagText="Label",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",children,className}){
  const isDark=pageBackground==="dark";
  return (<section className={cx("zl","zl--"+color,"zl--bg-"+pageBackground,imagePosition==="left"&&"zl--img-left",className)}>
    <div className="zl__container">
      <div className="zl__content">
        <div className="zl__content-inner">
          <CoreTypeLockup heading="H3" alignment="left" hue={color} tag tagText={tagText} button includeSecondary onDark={isDark} headline={headline} subhead={subhead} className="zl__lockup"/>
        </div>
      </div>
      <div className="zl__image">{children}</div>
    </div>
  </section>);
}
