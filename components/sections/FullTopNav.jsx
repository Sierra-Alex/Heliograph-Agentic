import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const NAV_LINKS=[{label:"Platform",dropdown:true},{label:"Solutions",dropdown:true},{label:"Resources",dropdown:true},{label:"Pricing",dropdown:false}];
export function FullTopNav({desktopSize="desktop-plus",links=NAV_LINKS,logoSrc="assets/logos/main-logo-gray-10.svg",caretSrc="assets/icons/caret-down.svg",burgerSrc="assets/icons/burger-menu.svg",onNavigate,className}){
  const isDesktop=desktopSize==="desktop-plus"||desktopSize==="desktop";
  const isTablet=desktopSize==="tablet", isPhone=desktopSize==="phone";
  return (<nav className={cx("tn","tn--"+desktopSize,className)}>
    <div className="tn__left">
      <img className="tn__logo" src={logoSrc} alt="Mixpanel"/>
      {isDesktop&&<div className="tn__links">{links.map(l=>(
        <button key={l.label} className="tn__link" onClick={()=>onNavigate&&onNavigate(l.label)}>{l.label}
          {l.dropdown&&<span className="tn__caret"><img src={caretSrc} alt=""/></span>}
        </button>))}
      </div>}
    </div>
    <div className="tn__right">
      {isDesktop&&<><button className="tn__login">Login</button>
        <div className="tn__actions"><Button variant="primary" size="sm">Get Started</Button><Button variant="secondary" size="sm">Get Demo</Button></div></>}
      {isTablet&&<><button className="tn__login">Login</button>
        <div className="tn__actions"><Button variant="primary" size="sm">Get Started</Button><Button variant="secondary" size="sm">Get Demo</Button></div>
        <button className="tn__burger"><img src={burgerSrc} alt="Menu"/></button></>}
      {isPhone&&<><Button variant="primary" size="sm">Get Started</Button>
        <button className="tn__burger"><img src={burgerSrc} alt="Menu"/></button></>}
    </div>
  </nav>);
}
