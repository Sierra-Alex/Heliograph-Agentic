import React from "react";
import { CircleCheck } from "../core/CircleCheck.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function BulletList({items=["Bullet point 01","Bullet point 02","Bullet point 03"],centerAligned=false,onDark=false,rule=true,className,...props}){
  return (<div className={cx("blist",centerAligned&&"blist--center",onDark&&"blist--on-dark",className)} {...props}>
    {rule&&<div className="blist__rule"></div>}
    <ul className="blist__items">
      {items.map((t,i)=>(<li className="blist__item" key={i}>
        {<CircleCheck baseColor={onDark?"dark":"light"}/>}
        <span className="blist__text">{t}</span>
      </li>))}
    </ul>
  </div>);
}
