import React from "react";
import { FAQ } from "../patterns/FAQ.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DEFAULTS=[{question:"What is Mixpanel?",answer:"Mixpanel is a product analytics platform that helps teams understand how people use their products so they can build better experiences and drive growth."},{question:"How does Mixpanel work?",answer:"Mixpanel collects event data from your product and lets you analyze user behavior through interactive reports, funnels, and retention charts."},{question:"What integrations does Mixpanel support?",answer:"Mixpanel integrates with warehouses, CDPs, and hundreds of tools through native connectors and a flexible API."},{question:"Is there a free plan available?",answer:"Yes, Mixpanel offers a generous free plan that includes core analytics features for teams getting started with product analytics."},{question:"How do I get started?",answer:"Sign up for a free account, install the SDK in your product, and start tracking events in minutes."}];
export function FAQs({title="FAQs",items=DEFAULTS,color="purple",pageBackground="light",defaultOpen=-1,desktopSize="desktop-plus",className,...props}){
  const [open,setOpen]=React.useState(defaultOpen);
  const isDark=pageBackground==="dark";
  return (<section className={cx("faqs","faqs--"+color,"faqs--bg-"+pageBackground,"faqs--"+desktopSize,className)} {...props}>
    <div className="faqs__card">
      <h2 className="faqs__title">{title}</h2>
      <div className="faqs__list">
        {items.map((it,i)=><FAQ key={i} question={it.question} answer={it.answer} open={open===i} onDark={isDark} onToggle={()=>setOpen(open===i?-1:i)}/>)}
      </div>
    </div>
  </section>);
}
