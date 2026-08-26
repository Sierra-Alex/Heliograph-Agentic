import React from "react";
import { CoreTypeLockups } from "../patterns/CoreTypeLockups.jsx";
const cx=(...a)=>a.filter(Boolean).join(" ");
const FOOTER_NAV=[
[{header:"PLATFORM",links:[{text:"Product Analytics"},{text:"Web Analytics"},{text:"Mobile Analytics"},{text:"Experiments"},{text:"Metric Trends"},{text:"Session Replay"},{text:"Security & Privacy"},{text:"Pricing",pill:true}]},
 {header:"AI",links:[{text:"Product Analytics"},{text:"Mixpanel Agent"},{text:"Mixpanel Headless"},{text:"Mixpanel MCP"},{text:"AI Data Governance"}]},
 {header:"DATA",links:[{text:"Warehouse Connectors"},{text:"Integrations"}]}],
[{header:"TEAMS",links:[{text:"Product Teams"},{text:"Data Analyst Teams"},{text:"Marketing Teams"},{text:"Engineering Teams"}]},
 {header:"INDUSTRIES",links:[{text:"Finance"},{text:"Media & Entertainment"},{text:"B2B SaaS"},{text:"Ecommerce"},{text:"Healthcare"},{text:"AI"}]},
 {header:"BUSINESS SIZE",links:[{text:"Enterprise"},{text:"Small & Midsize"},{text:"Startup Program"}]}],
[{header:"RESOURCES",links:[{text:"Docs & Guides"},{text:"Mixpanel University"},{text:"Contact Support"},{text:"What's New"},{text:"Troubleshooting FAQs"},{text:"Blog"},{text:"Events & Webinars"},{text:"Community"},{text:"Customer Stories"}]},
 {header:"COMPANY",links:[{text:"About Us"},{text:"Become a Partner"},{text:"Partner Directory"},{text:"Careers"},{text:"Contact Sales"},{text:"AI Info Page"}]}],
[{header:"TEMPLATES",links:[{text:"About Us"},{text:"Company KPIs"},{text:"Feature Launch"},{text:"Lifecycle Cohort Analysis"},{text:"Ecommerce"},{text:"Marketing KPIs"},{text:"Web Analytics"},{text:"AI Company KPIs"}]},
 {header:"COMPARE US",links:[{text:"Amplitude"},{text:"Heap"},{text:"Pendo"},{text:"Google Analytics"},{text:"Fullstory"},{text:"Adobe Analytics"},{text:"Statsig"}]}]];
const LEGAL_LINKS=["Privacy Program","Legal","Security","Your Privacy Rights"];
function FooterArrow(){return(<svg className="footer__link-arrow" width="5.103" height="7.777" viewBox="0 0 5.103 7.777" fill="none" aria-hidden="true"><path d="M5.10275 3.89767L0.922637 7.77651L0 6.87271L2.52313 4.61319L3.39722 3.88867L2.52313 3.16333L0 0.922636L0.922637 0L5.10275 3.89767Z" fill="currentColor"/></svg>);}
function FooterLinkItem({text,pill}){
  const a=(<a href="#" className={cx("footer__link",pill&&"footer__link--pill")}><span className="footer__link-text">{text}</span><FooterArrow/></a>);
  return pill?<div className="footer__link-pill-wrap">{a}</div>:a;
}
export function Footer({color="purple",includeCta=true,fullNav=true,desktopSize="desktop-plus",ctaHeadline="Headline goes here",ctaSubhead="Bacon ipsum dolor amet flank brisket prosciutto, pork swine ham strip steak boudin bacon.",logoSrc="assets/mixpanel-logo.svg",className}){
  return (<div className={cx("footer","footer--"+color,"footer--"+desktopSize,!fullNav&&"footer--compact",className)}>
    {includeCta&&<div className="footer__cta">
      <CoreTypeLockups heading="H2" alignment="center" button tag={false} includeSecondary desktopSize={desktopSize} headline={ctaHeadline} subhead={ctaSubhead}/>
    </div>}
    <div className="footer__card">
      {fullNav&&<div className="footer__nav">{FOOTER_NAV.map((col,ci)=>(
        <div key={ci} className="footer__column">{col.map(g=>(
          <div key={g.header} className="footer__group">
            <div className="footer__group-header">{g.header}</div>
            <div className="footer__group-list">{g.links.map(l=><FooterLinkItem key={l.text} {...l}/>)}</div>
          </div>))}
        </div>))}
      </div>}
      <div className="footer__legal">
        <div className="footer__legal-left">
          <img src={logoSrc} alt="Mixpanel" className="footer__logo"/>
          <p className="footer__copyright">&copy;2026 Mixpanel. All rights reserved</p>
        </div>
        <div className="footer__legal-links">{LEGAL_LINKS.map((l,i)=>(
          <span key={l} className="footer__legal-item">{i>0&&<span className="footer__legal-dot"/>}<a href="#" className="footer__legal-link">{l}</a></span>))}
        </div>
      </div>
    </div>
  </div>);
}
