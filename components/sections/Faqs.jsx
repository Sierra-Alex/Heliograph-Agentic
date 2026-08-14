import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DEFAULTS=[{question:"Add question in here...",answer:"Add answer in here..."}];
export function Faqs({title="FAQs",items=DEFAULTS,pageColor="white",onDark=false,defaultOpen=0,className,...props}){
  const [open,setOpen]=React.useState(defaultOpen);
  const {FaqItem}=window.HeliographMixpanelDesignSystem_8500f4||{};
  return (<section className={cx("faqs","faqs--"+pageColor,onDark&&"faqs--on-dark",className)} {...props}>
    <div className="faqs__card">
      <h2 className="faqs__title">{title}</h2>
      <div className="faqs__list">
        {items.map((it,i)=>FaqItem?<FaqItem key={i} question={it.question} answer={it.answer} open={open===i} onDark={onDark} onToggle={()=>setOpen(open===i?-1:i)}/>:null)}
      </div>
    </div>
  </section>);
}
