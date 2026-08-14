import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const DEFAULT_STEPS=[{headline:"Headline goes here",subhead:"Bacon ipsum dolor amet flank brisket prosciutto."},{headline:"Headline goes here"},{headline:"Headline goes here"},{headline:"Headline goes here"}];
export function MdProductCarousel({color="purple",pageBackground="light",includeHeadline=true,headline="Headline goes here",imagePlacement="right",steps=DEFAULT_STEPS,active=0,progress=0,onSelect,className,children,...props}){
  const NS=window.HeliographMixpanelDesignSystem_8500f4||{};
  const {HorizontalHeadline,CarouselStep}=NS;
  const [current,setCurrent]=React.useState(active);
  const pick=i=>{setCurrent(i);if(onSelect)onSelect(i)};
  return (<section className={cx("mpc","mpc--"+pageBackground,className)} {...props}>
    <div className="mpc__panel">
      {includeHeadline&&HorizontalHeadline&&<HorizontalHeadline headline={headline} className="mpc__headline"/>}
      <div className={cx("mpc__row",imagePlacement==="left"&&"mpc__row--image-left")}>
        <div className="mpc__steps">
          <div className="mpc__steps-inner">
            {steps.map((s,i)=>CarouselStep?<CarouselStep key={i} headline={s.headline} subhead={s.subhead} active={current===i} progress={current===i?progress:0} onClick={()=>pick(i)}/>:null)}
          </div>
        </div>
        <div className={cx("mpc__image","mpc__image--"+color)}>{children}</div>
      </div>
    </div>
  </section>);
}
