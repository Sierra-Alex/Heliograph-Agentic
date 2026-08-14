const {SmHero,HorizontalCoreType,SmResourceCard,ResourceCard}=window.HeliographMixpanelDesignSystem_8500f4;
const POSTS=[
 {tag:"Guide",headline:"The retention playbook",subhead:"Six retention curves and what each one says about your product."},
 {tag:"Blog",headline:"Events, properties, people",subhead:"A short primer on modelling your product as an event stream."},
 {tag:"Webinar",headline:"From dashboard to decision",subhead:"How three teams turned a weekly report into a shipping ritual."}];
function ResourcesPage(){
  return (<>
    <SmHero color="mustard" includeNav={false} tagText="Resources"
      headline="Learn analytics the way your team works"
      subhead="Guides, docs, courses and customer stories from teams shipping every week."/>
    <section style={{padding:"var(--stack-section-lg) var(--layout-grid-desktop-plus-margin)",background:"var(--surface-default)",display:"flex",flexDirection:"column",gap:"var(--generic-spacing-lg)"}}>
      <HorizontalCoreType heading="H3" button includeSecondary={false} primaryLabel="Browse All"
        headline="Latest from the blog" subhead="Written by the people building and using Mixpanel."/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--generic-spacing-sm)"}}>
        {POSTS.map(p=><SmResourceCard key={p.headline} color="white" tagText={p.tag} headline={p.headline} subhead={p.subhead} primaryLabel="Read" secondaryLabel="Share"/>)}
      </div>
      <ResourceCard color="lava" imagePosition="left" alignment="left" largeImage={false}
        tagText="Customer Story" headline="How a streaming team cut churn by 18%"
        subhead="Weekly cohort reviews, one board, and a funnel everyone understood." ctaLabel="Read the Story"/>
    </section>
  </>);
}
window.ResourcesPage=ResourcesPage;