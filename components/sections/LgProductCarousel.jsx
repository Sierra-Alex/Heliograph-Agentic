import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DEFAULT_ITEMS=[{headline:"Headline goes here"},{headline:"Headline goes here"},{headline:"Headline goes here"}];
export function LgProductCarousel({color="purple",backgroundColor="dark",headline="Accessible data, across your organization.",items=DEFAULT_ITEMS,active=0,onSelect,className,children,...props}){
  const NS=window.HeliographMixpanelDesignSystem_8500f4||{};
  const {FullWidthHeadline,ImageRatio}=NS;
  const dark=backgroundColor==="dark";
  const [current,setCurrent]=React.useState(active);
  const pick=i=>{setCurrent(i);if(onSelect)onSelect(i)};
  return (<section className={cx("lpc","lpc--"+backgroundColor,dark&&"lpc--"+color,className)} {...props}>
    {FullWidthHeadline&&<FullWidthHeadline color={color} darkTheme={dark} className="lpc__headline">{headline}</FullWidthHeadline>}
    <div className="lpc__body">
      {ImageRatio&&<ImageRatio ratio="1:2" className="lpc__image">{children}</ImageRatio>}
      <div className="lpc__tabs">
        {items.map((it,i)=>(<button type="button" key={i} className={cx("lpc__tab",current===i&&"lpc__tab--active")} onClick={()=>pick(i)}>
          <span className="lpc__tab-headline">{it.headline}</span>
          {it.subhead&&<span className="lpc__tab-subhead">{it.subhead}</span>}
        </button>))}
      </div>
    </div>
  </section>);
}
