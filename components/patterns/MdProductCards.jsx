import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function MdProductCards({background="gray",color="purple",leftAligned=true,shadow=false,headline="Headline goes here",subhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",primaryLabel="Click Me",secondaryLabel="Click Me",className}){
  const isDark=background==="dark";
  return (<div className={cx("pc","pc--"+color,"pc--bg-"+background,leftAligned&&"pc--align-left",shadow&&"pc--shadow",className)}>
    <div className="pc__content"><div className="pc__lockup">
      <div className="pc__lockup-text">
        <h4 className={cx("pc__headline",isDark&&"pc__headline--"+color)}>{headline}</h4>
        <p className={cx("pc__subhead",isDark&&"pc__subhead--dark")}>{subhead}</p>
      </div>
      <div className="pc__actions">
        <Button variant="primary" size="lg" onDark={isDark}>{primaryLabel}</Button>
        <Button variant="secondary" size="lg" onDark={isDark}>{secondaryLabel}</Button>
      </div>
    </div></div>
    <div className="pc__image"/>
  </div>);
}
