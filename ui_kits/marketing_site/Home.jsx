const {LgHero,ZLayout,MdProductCardLockup,LogoCarousel}=window.HeliographMixpanelDesignSystem_8500f4;
function HomePage(){
  return (<>
    <LgHero color="purple" gradientStyle="sliced" includeNav={false}
      headline="Product analytics everyone on the team can use"
      subhead="Ask a question, get an answer in seconds. Mixpanel turns raw events into the reports, funnels and cohorts your team actually acts on."/>
    <LogoCarousel headline="Trusted by 29,000+ paying customers" stackSizing="lg"/>
    <MdProductCardLockup color="purple" pageBackground="light"
      headline="One platform, every question"
      subhead="Reports, boards and alerts built on the same event stream."
      cards={[
        {headline:"Reports",subhead:"Funnels, retention, flows and impact analysis — no SQL, no waiting on the data team."},
        {headline:"Boards",subhead:"Assemble the reports that matter into a live board your whole team can read."},
        {headline:"Session Replay",subhead:"Jump from a drop-off in a funnel straight into the session that caused it."}]}/>
    <ZLayout color="pool" imagePosition="right" pageBackground="standard" tagText="Warehouse"
      headline="Your warehouse, your source of truth"
      subhead="Sync modelled tables straight from Snowflake, BigQuery or Databricks and analyse them alongside product events."/>
    <ZLayout color="mint" imagePosition="left" pageBackground="light" tagText="AI"
      headline="Answers in plain language"
      subhead="Ask Mixpanel Agent a question and get a chart, a cohort and the query behind it."/>
  </>);
}
window.HomePage=HomePage;