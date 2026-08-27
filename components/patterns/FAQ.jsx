import React from "react";
import { RoundMinusButton } from "../core/RoundMinusButton.jsx";
import { RoundPlusButton } from "../core/RoundPlusButton.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function FAQ({question="Add question in here...",answer,open:controlledOpen,onDark=false,onToggle,className,...props}){
  const [internalOpen,setInternalOpen]=React.useState(false);
  const isControlled=controlledOpen!==undefined;
  const open=isControlled?controlledOpen:internalOpen;
  const handleToggle=()=>{if(onToggle)onToggle();else setInternalOpen(prev=>!prev)};
  const Ctrl=open?RoundMinusButton:RoundPlusButton;
  return (<div className={cx("faq-item",open&&"faq-item--open",onDark&&"faq-item--on-dark",className)} {...props}>
    <div className="faq-item__row" role="button" tabIndex={0} aria-expanded={open} onClick={handleToggle} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();handleToggle()}}}>
      <span className="faq-item__question">{question}</span>
      {<Ctrl size="lg" onDark={onDark} tabIndex={-1}/>}
    </div>
    <div className="faq-item__body">
      <div className="faq-item__body-inner">
        <div className="faq-item__rule"></div>
        <p className="faq-item__answer">{answer}</p>
      </div>
    </div>
  </div>);
}
