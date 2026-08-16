import React from "react";
import { Tag } from "../core/Tag.jsx";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DARK=new Set(["purple","pool","mint","lava","mustard","grass"]);
export function LgResourceCards({color="gray",imagePosition="right",alignment="center",largeImage=true,tagText="Label",headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",ctaLabel="Get Started",children,className}){
  const isDark=DARK.has(color);
  const content=(<div className="rc__content"><div className="rc__lockup">
    <div className="rc__lockup-text">
      <Tag color={isDark?color:"purple"} size="lg" onDark={isDark}>{tagText}</Tag>
      <h4 className={cx("rc__headline",isDark&&"rc__headline--"+color)}>{headline}</h4>
      <p className={cx("rc__subhead",isDark&&"rc__subhead--dark")}>{subhead}</p>
    </div>
    <div className="rc__actions"><Button variant="primary" size="lg" onDark={isDark}>{ctaLabel}</Button></div>
  </div></div>);
  const image=(<div className={cx("rc__image",largeImage?"rc__image--square":"rc__image--wide")}>{children||<div className="rc__image-placeholder"/>}</div>);
  return (<div className={cx("rc","rc--"+color,"rc--img-"+imagePosition,"rc--align-"+alignment,className)}>
    {imagePosition==="left"?<>{image}{content}</>:<>{content}{image}</>}
  </div>);
}
