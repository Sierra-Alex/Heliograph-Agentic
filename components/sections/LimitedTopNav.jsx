import React from "react";
import { Button } from "../core/Button.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function LimitedTopNav({desktopSize="login-primary-secondary",viewport="desktop-plus",logoSrc="assets/logos/main-logo-gray-10.svg",primaryLabel="Click Me",secondaryLabel="Click Me",className,...props}){
  const showLogin=desktopSize==="login-primary-secondary";
  const showSecondary=desktopSize==="login-primary-secondary"||desktopSize==="primary-secondary";
  const showPrimary=desktopSize!=="empty";
  return (<nav className={cx("ltn","ltn--"+viewport,className)} {...props}>
    <div className="ltn__left">
      <img className="ltn__logo" src={logoSrc} alt="Mixpanel"/>
    </div>
    {showPrimary&&<div className="ltn__right">
      {showLogin&&<button className="ltn__login">Login</button>}
      <div className="ltn__actions">
        <Button variant="primary" size="sm">{primaryLabel}</Button>
        {showSecondary&&<Button variant="secondary" size="sm">{secondaryLabel}</Button>}
      </div>
    </div>}
  </nav>);
}
