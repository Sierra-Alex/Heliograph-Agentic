import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function NavLink({href="#",active=false,caret=false,onDark=false,className,children,...props}){
  return (<a href={href} className={cx("navlink",active&&"navlink--active",onDark&&"navlink--on-dark",className)} {...props}>
    <span className="navlink__label">{children}</span>
    {caret&&(<svg className="navlink__caret" width="5" height="2.5" viewBox="0 0 5 2.5" aria-hidden="true"><path d="M0 0 2.5 2.5 5 0" fill="none" stroke="currentColor" strokeWidth="0.85"/></svg>)}
  </a>);
}
