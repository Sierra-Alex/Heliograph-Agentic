import React from "react";
const cx=(...a)=>a.filter(Boolean).join(" ");
const FIELDS={
  "contact-sales":[["First name","Last name"],["Work email","Company"],["Company size"],["How can we help?"]],
  "get-demo":[["First name","Last name"],["Work email"],["Company size"]],
  newsletter:[["Work email"]]
};
const LABELS={"contact-sales":"Contact Sales","get-demo":"Get Demo",newsletter:"Subscribe"};
export function FormLockup({formType="contact-sales",submitLabel,className,children,...props}){
  const NS=window.HeliographMixpanelDesignSystem_8500f4||{};
  const {TextInput,Button}=NS;
  const rows=FIELDS[formType]||FIELDS["contact-sales"];
  return (<form className={cx("fl",className)} {...props}>
    <div className="fl__container">
      <div className="fl__form">
        <div className="fl__fields">
          {rows.map((row,i)=>(<div className="fl__row" key={i}>
            {row.map(label=>(<label className="fl__field" key={label}>
              <span className="fl__label">{label}</span>
              {TextInput&&<TextInput placeholder={label}/>}
            </label>))}
          </div>))}
          {children}
        </div>
        {Button&&<Button variant="primary" size="lg" type="submit">{submitLabel||LABELS[formType]}</Button>}
      </div>
    </div>
  </form>);
}
