import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const LOGOS={yelp:{width:200,height:74.961,parts:[{src:"assets/customer-logos/yelp-mark.svg",left:143.364,top:0,width:56.636,height:69.624},{src:"assets/customer-logos/yelp-wordmark.svg",left:0,top:14.889,width:134.26,height:60.072}]}};
export function CustomerLogo({customer="yelp",color="color",height=27,src,alt,className,...props}){
  const logo=LOGOS[customer];
  if(src||!logo)return <img className={cx("clogo","clogo--"+color,className)} src={src} alt={alt||customer} style={{height}} {...props}/>;
  const scale=height/logo.height;
  return (<span className={cx("clogo","clogo--"+color,className)} style={{width:logo.width*scale,height}} role="img" aria-label={alt||customer} {...props}>
    {logo.parts.map(p=><img key={p.src} src={p.src} alt="" style={{left:p.left*scale,top:p.top*scale,width:p.width*scale,height:p.height*scale}}/>)}
  </span>);
}
