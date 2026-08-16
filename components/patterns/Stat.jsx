import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function Stat({value="00",suffix="X",description="Short statement about the stat",onDark=false,hue="purple",className,...props}){
  return (<div className={cx("ist",onDark&&"ist--on-dark",onDark&&"ist--"+hue,className)} {...props}>
    <div className="ist__value-row">
      <span className="ist__value">{value}</span>
      <span className="ist__suffix">{suffix}</span>
    </div>
    <p className="ist__description">{description}</p>
  </div>);
}
