import React from "react";
import { Tag } from "../core/Tag.jsx";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const TABLET_HEADING={H1:"H2",H2:"H3",H3:"H3",H4:"H4",H5:"H5",H6:"H6"};
const PHONE_HEADING={H1:"H3",H2:"H4",H3:"H4",H4:"H5",H5:"H5",H6:"H6"};
const HEADING_TAG_MAP={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6"};
export function CoreTypeLockups({heading="H1",alignment="left",tag=false,tagText="Label",hue="purple",button=false,includeSecondary=true,onDark=false,headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",primaryLabel="Get Started",secondaryLabel="Learn More",desktopSize="desktop-plus",className}){
  const HeadingTag=HEADING_TAG_MAP[heading];
  const visual=desktopSize==="tablet"?TABLET_HEADING[heading]:desktopSize==="phone"?PHONE_HEADING[heading]:heading;
  const buttonSize=(visual==="H5"||visual==="H6")?"sm":"lg";
  return (<div className={cx("ctl","ctl--"+visual.toLowerCase(),"ctl--"+alignment,onDark&&"ctl--on-dark",onDark&&"ctl--"+hue,className)}>
    <div className="ctl__text">
      {tag&&<Tag color={hue} size="lg" onDark={onDark}>{tagText}</Tag>}
      <HeadingTag className="ctl__headline">{headline}</HeadingTag>
      <p className="ctl__subhead">{subhead}</p>
    </div>
    {button&&<div className="ctl__actions">
      <Button variant="primary" size={buttonSize} onDark={onDark}>{primaryLabel}</Button>
      {includeSecondary&&<Button variant="secondary" size={buttonSize} onDark={onDark}>{secondaryLabel}</Button>}
    </div>}
  </div>);
}
