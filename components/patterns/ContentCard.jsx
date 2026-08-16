import React from "react";
import { ImageRatio } from "./ImageRatio.jsx";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function ContentCard({bigImage=true,includeButton=true,headline="Headline goes here",subhead,ctaLabel="Learn More",className,children,...props}){
  return (<article className={cx("cc",bigImage&&"cc--big-image",className)} {...props}>
    <div className="cc__inner">
      {<ImageRatio ratio={bigImage?"1:2":"1:1"} className="cc__image">{children}</ImageRatio>}
      <div className="cc__body">
        <div className="cc__type">
          <h3 className="cc__headline">{headline}</h3>
          {subhead&&<p className="cc__subhead">{subhead}</p>}
        </div>
        {includeButton&&<Button variant="tertiary" size="sm">{ctaLabel}</Button>}
      </div>
    </div>
  </article>);
}
