import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function HorizontalHeadline({size="h2",onDark=false,headline="Headline goes here",buttonLabel="Learn More",includeButton=true,className,...props}){
  return (<div className={cx("hh","hh--"+size,onDark&&"hh--on-dark",className)} {...props}>
    <h2 className="hh__headline">{headline}</h2>
    {includeButton&&<Button size="lg" variant="primary" onDark={onDark} className="hh__button">{buttonLabel}</Button>}
  </div>);
}
