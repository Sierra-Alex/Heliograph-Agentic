import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function CarouselStep({headline="Headline goes here",subhead,active=false,progress=0,onDark=false,includeButton=false,buttonLabel="Learn More",className,onClick,...props}){
  return (<div className={cx("cstep",active&&"cstep--active",onDark&&"cstep--on-dark",className)} onClick={onClick} {...props}>
    <div className="cstep__type">
      <div className="cstep__head"><span className="cstep__headline">{headline}</span></div>
      {active&&subhead&&<p className="cstep__subhead">{subhead}</p>}
      {active&&includeButton&&Button&&<Button variant="tertiary" size="sm">{buttonLabel}</Button>}
    </div>
    <div className="cstep__rule"><span className="cstep__progress" style={{transform:"scaleX("+(active?progress:0)+")"}}></span></div>
  </div>);
}
