import React from "react";
import { Button } from "../core/Button.jsx";
import { CircleCheck } from "../core/CircleCheck.jsx";
import { TextInput } from "../forms/TextInput.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function AddedContent({content="logos",onDark=false,hue="purple",logoCount=4,headline="Trusted by",quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",quoteName="Full Name",quoteTitle="Job Title",items=["Bullet point 01","Bullet point 02","Bullet point 03"],value="00",suffix="X",description="Short statement about the stat",submitLabel="Click Me",className,...props}){
  return (<div className={cx("ac","ac--"+content,onDark&&"ac--on-dark",onDark&&"ac--"+hue,className)} {...props}>
    {content==="logos"&&(<div className="ac__logos">
      <span className="ac__logos-label">{headline}</span>
      <div className="ac__logos-row">
        <div className="ac__logos-track">
          {Array.from({length:logoCount}).map((_,i)=><div key={i} className="ac__logo-placeholder"/>)}
          {Array.from({length:logoCount}).map((_,i)=><div key={"d"+i} className="ac__logo-placeholder"/>)}
        </div>
      </div>
    </div>)}
    {content==="quote"&&(<div className="ac__quote">
      <div className="ac__quote-avatar"/>
      <div className="ac__quote-body">
        <p className="ac__quote-text">{quote}</p>
        <div className="ac__quote-attribution">
          <span className="ac__quote-name">{quoteName}</span>
          <span className="ac__quote-sep">-</span>
          <span className="ac__quote-title">{quoteTitle}</span>
        </div>
      </div>
    </div>)}
    {content==="form"&&(<div className="ac__form">
      <label className="ac__form-label">Email<span className="ac__form-required">*</span></label>
      <TextInput placeholder="Placeholder..."/>
      <Button variant="primary" size="lg" onDark={onDark}>{submitLabel}</Button>
    </div>)}
    {content==="stats"&&(<div className="ac__stat">
      <div className="ac__stat-row">
        <span className="ac__stat-value">{value}</span>
        <span className="ac__stat-suffix">{suffix}</span>
      </div>
      <p className="ac__stat-desc">{description}</p>
    </div>)}
    {content==="bullets"&&(<div className="ac__bullets">
      {items.map((item,i)=>(<div key={i} className="ac__bullet">
        <CircleCheck baseColor={onDark?"light":"dark"} size={16}/>
        <span className="ac__bullet-text">{item}</span>
      </div>))}
    </div>)}
  </div>);
}
