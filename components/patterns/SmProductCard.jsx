import React from "react";
import { ImageRatio } from "./ImageRatio.jsx";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function SmProductCard({cardBackground="gray",color="purple",leftAligned=true,headline="Headline goes here",subhead,ctaLabel="Learn More",includeButton=true,className,children,...props}){
  const dark=cardBackground==="dark";
  return (<article className={cx("spc","spc--"+cardBackground,"spc--"+color,!leftAligned&&"spc--image-left",className)} {...props}>
    <div className="spc__type">
      <div className="spc__head">
        <h3 className="spc__headline">{headline}</h3>
        {subhead&&<p className="spc__subhead">{subhead}</p>}
      </div>
      {includeButton&&<Button variant="tertiary" size="sm" onDark={dark}>{ctaLabel}</Button>}
    </div>
    {<ImageRatio ratio="1:1" className="spc__image">{children}</ImageRatio>}
  </article>);
}
