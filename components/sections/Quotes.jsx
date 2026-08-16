import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DEFAULT_QUOTES=[{quote:"“Mixpanel helps us enable our customers for success.”",name:"Janna Sheng",role:"Product Manager"}];
export function Quotes({color="purple",quotes=DEFAULT_QUOTES,active=0,logoCount=3,onSelect,desktopSize="desktop-plus",className,children,...props}){
  const [current,setCurrent]=React.useState(active);
  const q=quotes[current]||quotes[0];
  const pick=i=>{setCurrent(i);if(onSelect)onSelect(i)};
  return (<section className={cx("qc","qc--"+color,"qc--"+desktopSize,className)} {...props}>
    <div className="qc__row">
      <div className="qc__quote">
        <div className="qc__type">
          <blockquote className="qc__text">{q.quote}</blockquote>
          <div className="qc__attribution">
            <span className="qc__name">{q.name}</span>
            {q.role&&<><span className="qc__dash"></span><span className="qc__role">{q.role}</span></>}
          </div>
        </div>
        <div className="qc__logos">
          {Array.from({length:logoCount}).map((_,i)=>(<button type="button" key={i} className={cx("qc__logo",current===i&&"qc__logo--active")} onClick={()=>pick(i)} aria-label={"Quote "+(i+1)}></button>))}
        </div>
      </div>
      {children&&<div className="qc__media">{children}</div>}
    </div>
  </section>);
}
