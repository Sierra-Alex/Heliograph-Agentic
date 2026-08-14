import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function Toggle({error=false,className,...props}){
  return (<label className={cx("toggle",error&&"toggle--error",className)}>
    <input type="checkbox" role="switch" className="toggle__input" {...props}/>
    <span className="toggle__track"><span className="toggle__thumb">
      <svg className="toggle__check" width="9.441" height="6.965" viewBox="0 0 9.44063 6.96478" fill="none" aria-hidden="true"><path d="M3.30129 6.96357C3.08847 6.97576 2.88074 6.89558 2.73129 6.74357L0.201292 4.17357C-0.0740665 3.87806 -0.0659415 3.41756 0.219671 3.13195C0.505283 2.84634 0.965783 2.83821 1.26129 3.11357L3.26129 5.11357L8.16129 0.22357C8.30058 0.0806222 8.49171 0 8.69129 0C8.89088 0 9.082 0.0806222 9.22129 0.22357C9.51375 0.516387 9.51375 0.990752 9.22129 1.28357L3.83129 6.74357C3.69345 6.88821 3.50104 6.96808 3.30129 6.96357V6.96357Z" fill="var(--interactive-component-toggle-fill-active-icon)"/></svg>
    </span></span>
  </label>);
}
