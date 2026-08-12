import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
export function TeamsIcon({size=16,onDark=false,className,...props}){
  return (<svg className={cx("teams-icon",onDark&&"teams-icon--on-dark",className)} width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
    <g className="teams-icon__side">
      <circle cx="2.571" cy="5.449" r="1.589"/>
      <path d="M2.571 7.673c0.327 0 0.642 0.065 0.932 0.185 -0.134 0.247 -0.248 0.509 -0.335 0.785l-0.27 0.857c-0.145 0.464 -0.134 0.93 -0.002 1.351h-2.211c-0.474 0 -0.804 -0.471 -0.644 -0.916l0.233 -0.648c0.349 -0.968 1.268 -1.614 2.297 -1.614Z"/>
      <circle cx="13.429" cy="5.449" r="1.589"/>
      <path d="M13.429 7.673c-0.327 0 -0.642 0.065 -0.932 0.185 0.134 0.247 0.248 0.509 0.335 0.785l0.27 0.857c0.145 0.464 0.134 0.93 0.002 1.351h2.211c0.474 0 0.804 -0.471 0.644 -0.916l-0.233 -0.648c-0.349 -0.968 -1.268 -1.614 -2.297 -1.614Z"/>
    </g>
    <g className="teams-icon__lead">
      <circle cx="8" cy="4.166" r="2.553"/>
      <path d="M4.112 8.354c0.561 -1.556 2.037 -2.594 3.692 -2.594 1.654 0 3.131 1.038 3.691 2.594l0.374 1.041c0.258 0.716 -0.272 1.471 -1.034 1.471h-6.063c-0.761 0 -1.292 -0.755 -1.034 -1.471l0.374 -1.041Z"/>
    </g>
  </svg>);
}
