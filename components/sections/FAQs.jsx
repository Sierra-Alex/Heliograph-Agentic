import React from "react";
import { FAQ } from "../patterns/FAQ.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DEFAULTS=[{question:"Add question in here...",answer:"Add answer in here..."}];
export function FAQs({title="FAQs",items=DEFAULTS,pageColor="white",onDark=false,defaultOpen=0,desktopSize="desktop-plus",className,...props}){
  const [open,setOpen]=React.useState(defaultOpen);
  return (<section className={cx("faqs","faqs--"+pageColor,onDark&&"faqs--on-dark","faqs--"+desktopSize,className)} {...props}>
    <div className="faqs__card">
      <h2 className="faqs__title">{title}</h2>
      <div className="faqs__list">
        {items.map((it,i)=><FAQ key={i} question={it.question} answer={it.answer} open={open===i} onDark={onDark} onToggle={()=>setOpen(open===i?-1:i)}/>)}
      </div>
    </div>
  </section>);
}
