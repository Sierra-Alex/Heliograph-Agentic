const {SmHero,ZLayout,ProductCard,HorizontalCoreType}=window.HeliographMixpanelDesignSystem_8500f4;
function ProductPage(){
  return (<>
    <SmHero color="mint" includeNav={false} tagText="Session Replay"
      headline="Watch what the numbers can't tell you"
      subhead="Replay real sessions tied to the events, cohorts and funnels you already track."/>
    <section style={{padding:"var(--stack-section-lg) var(--layout-grid-desktop-plus-margin)",background:"var(--surface-default)",display:"flex",flexDirection:"column",gap:"var(--generic-spacing-lg)"}}>
      <HorizontalCoreType heading="H3" button includeSecondary={false} primaryLabel="See Pricing"
        headline="Built for the whole product team"
        subhead="Every plan includes replays, funnels and unlimited seats."/>
      <ProductCard color="mint" background="white" headline="Replay, in context"
        subhead="Open a replay from any point in a funnel and see exactly where the drop-off happened."
        primaryLabel="Get Started" secondaryLabel="Read Docs"/>
      <ProductCard color="pool" background="white" headline="Privacy by default"
        subhead="Mask sensitive fields, honour consent, and keep replay data inside your retention policy."
        primaryLabel="Get Started" secondaryLabel="Security Overview"/>
    </section>
    <ZLayout color="mint" imagePosition="right" pageBackground="dark" tagText="Integrations"
      headline="Instrument once, analyse everywhere"
      subhead="SDKs for web, iOS, Android and server, plus warehouse connectors and a public API."/>
  </>);
}
window.ProductPage=ProductPage;