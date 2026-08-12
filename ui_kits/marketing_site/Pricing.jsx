const {SmHero,Tag,Button,Toggle,Checkbox,TextInput,Radio}=window.HeliographMixpanelDesignSystem_8500f4;
const PLANS=[
 {name:"Free",price:"$0",note:"Up to 1M monthly events",features:["Unlimited seats","Core reports","30-day support"],cta:"Get Started",variant:"secondary"},
 {name:"Growth",price:"$28",note:"per month, billed annually",features:["Everything in Free","Session Replay","Warehouse connectors","Data pipelines"],cta:"Start Free Trial",variant:"primary"},
 {name:"Enterprise",price:"Custom",note:"Volume pricing and SSO",features:["Everything in Growth","SSO & SCIM","Dedicated support","Custom retention"],cta:"Contact Sales",variant:"secondary"}];
function PlanCard({p,featured}){
  return (<div style={{display:"flex",flexDirection:"column",gap:"var(--generic-spacing-x-sm)",padding:"var(--generic-spacing-md)",borderRadius:"var(--border-radius-sm-outer)",border:"1px solid var(--cards-on-light-border)",background:"var(--cards-on-light-fill-on-gray)",boxShadow:featured?"var(--shadow-glow-on-light-purple)":"none"}}>
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      <h4 style={{font:"var(--headline-h5)",margin:0}}>{p.name}</h4>
      {featured&&<Tag color="purple" size="sm">Most Popular</Tag>}
    </div>
    <div style={{display:"flex",alignItems:"baseline",gap:8}}>
      <span style={{font:"var(--headline-h2)",letterSpacing:"var(--letter-spacing-negative-2)"}}>{p.price}</span>
      <span style={{font:"var(--body-b5)",color:"var(--text-on-light-body)"}}>{p.note}</span>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      {p.features.map(x=><div key={x} style={{display:"flex",alignItems:"center",gap:8,font:"var(--body-b4)",color:"var(--text-on-light-body)"}}>
        <img src="../../assets/icons/chevron-right.svg" alt="" style={{width:10,height:10,opacity:.6}}/>{x}</div>)}
    </div>
    <div><Button variant={p.variant} size="lg">{p.cta}</Button></div>
  </div>);
}
function PricingPage(){
  const [annual,setAnnual]=React.useState(true);
  return (<>
    <SmHero color="pool" includeNav={false} tagText="Pricing"
      headline="Start free. Pay for what you send."
      subhead="Every plan includes unlimited seats and the full report library."/>
    <section style={{padding:"var(--stack-section-lg) var(--layout-grid-desktop-plus-margin)",background:"var(--surface-default)",display:"flex",flexDirection:"column",gap:"var(--generic-spacing-lg)"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,font:"var(--body-b4-medium)"}}>
        <span>Monthly</span><Toggle checked={annual} onChange={e=>setAnnual(e.target.checked)}/><span>Annual — save 20%</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--generic-spacing-sm)"}}>
        {PLANS.map((p,i)=><PlanCard key={p.name} p={{...p,price:p.name==="Growth"?(annual?"$28":"$36"):p.price}} featured={i===1}/>)}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--generic-spacing-x-sm)",padding:"var(--generic-spacing-md)",borderRadius:"var(--border-radius-sm-outer)",border:"1px solid var(--cards-on-light-border)",background:"var(--surface-light)",maxWidth:560}}>
        <h5 style={{font:"var(--headline-h5)",margin:0}}>Talk to sales</h5>
        <TextInput placeholder="Work email"/>
        <div style={{display:"flex",gap:16,font:"var(--body-b4)",color:"var(--text-on-light-body)"}}>
          <label style={{display:"flex",gap:8,alignItems:"center"}}><Radio name="size" defaultChecked/> Under 100 seats</label>
          <label style={{display:"flex",gap:8,alignItems:"center"}}><Radio name="size"/> 100+ seats</label>
        </div>
        <label style={{display:"flex",gap:8,alignItems:"center",font:"var(--body-b5)",color:"var(--text-on-light-body)"}}><Checkbox/> Send me product updates</label>
        <div><Button size="lg">Request A Demo</Button></div>
      </div>
    </section>
  </>);
}
window.PricingPage=PricingPage;