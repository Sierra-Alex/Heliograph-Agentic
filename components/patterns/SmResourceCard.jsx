import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DARK=new Set(["purple","pool","mint","lava","mustard","grass"]);
export function SmResourceCard({color="gray",bigImage=true,includeButton=true,headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",primaryLabel="Click Me",secondaryLabel="Click Me",children,className}){
  const isDark=DARK.has(color);
  return (<div className={cx("src","src--"+color,bigImage?"src--big-image":"src--icon",className)}>
    {bigImage&&<div className="src__image">{children||<div className="src__image-placeholder"/>}</div>}
    <div className="src__content">
      {!bigImage&&<div className="src__icon">{children||<div className="src__icon-placeholder"/>}</div>}
      <div className="src__lockup">
        <div className="src__text">
          <h6 className={cx("src__headline",isDark&&"src__headline--"+color)}>{headline}</h6>
          <p className={cx("src__subhead",isDark&&"src__subhead--dark")}>{subhead}</p>
        </div>
        {includeButton&&<div className="src__actions">
          <Button variant="primary" size="sm" onDark={isDark}>{primaryLabel}</Button>
          <Button variant="secondary" size="sm" onDark={isDark}>{secondaryLabel}</Button>
        </div>}
      </div>
    </div>
  </div>);
}
