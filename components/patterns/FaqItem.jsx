import React from "react";
import { RoundMinusButton } from "../core/RoundMinusButton.jsx";
import { RoundPlusButton } from "../core/RoundPlusButton.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function FaqItem({question="Add question in here...",answer,open=false,onDark=false,onToggle,className,...props}){
  const Ctrl=open?RoundMinusButton:RoundPlusButton;
  return (<div className={cx("faq-item",open&&"faq-item--open",onDark&&"faq-item--on-dark",className)} {...props}>
    <div className="faq-item__row">
      <span className="faq-item__question">{question}</span>
      {<Ctrl size="lg" onDark={onDark} aria-expanded={open} onClick={onToggle}/>}
    </div>
    {open&&(<>
      <div className="faq-item__rule"></div>
      <p className="faq-item__answer">{answer}</p>
    </>)}
  </div>);
}
