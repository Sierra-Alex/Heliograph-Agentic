import { useRef, useLayoutEffect } from "react"

const KF = `@keyframes an-fadeIn{from{opacity:0}to{opacity:1}}@keyframes an-cardPop{from{opacity:0;transform:translateY(8px) scale(.94)}to{opacity:1;transform:none}}@keyframes an-sparkflip{0%,30%{transform:rotate(0deg)}62%,100%{transform:rotate(360deg)}}@keyframes an-sparkshimmer{0%{background-position:200% 50%}100%{background-position:0% 50%}}@keyframes an-dotPulse{0%{transform:scale(1);opacity:.45}70%,100%{transform:scale(2.6);opacity:0}}@keyframes an-dotIn{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}`

const FONT = "'Apercu Pro','Helvetica Neue',Helvetica,Arial,sans-serif"

// area chart line, viewBox 902×515 (higher y = lower value) — steady climb, brief dip, recovery
const LINE = "M 0 230 L 112.043 195 L 224.087 170 L 336.13 150 L 452.285 243 L 566.384 180 L 677.399 165 L 790.471 160 L 902 155"
const YL = "position:absolute;right:8px;transform:translateY(-50%);font-size:11px;line-height:1;color:#9A9AA0;"
const GRID = "stroke=\"#F2F2F2\" stroke-width=\"1\""

const MARKUP = `<div style="position:relative;width:488px;height:488px;overflow:visible;border-radius:16px;background:rgba(250,250,250,0.5);box-shadow:inset 0 0 0 0.5px rgba(255,255,255,0.2),0 0 0 0.5px rgba(255,255,255,0.2),inset -2px -2px 4px 0 rgba(0,0,0,0.05),inset 2px 2px 2px 0 #FFFFFF,0 8px 40px 0 rgba(0,0,0,0.1);box-sizing:border-box;padding:4px;display:flex;flex-direction:column;align-items:flex-start;font-family:${FONT};"><div style="position:relative;height:480px;align-self:stretch;flex-shrink:0;overflow:visible;border-radius:12px;background:#FFFFFF;display:flex;flex-direction:column;box-sizing:border-box;">
<div style="position:absolute;top:18px;left:-26px;z-index:30;width:262px;border-radius:8px;background:rgba(255,255,255,0.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 0 10px 0 rgba(0,0,0,0.1);display:flex;gap:8px;padding:10px 12px 10px 8px;box-sizing:border-box;transform-origin:top center;animation:an-cardPop .5s cubic-bezier(.34,1.4,.5,1) 1.5s both;"><div style="display:flex;flex-direction:column;gap:6px;align-items:flex-start;flex:1 1 auto;min-width:0;"><div style="display:flex;gap:6px;align-items:center;"><span style="display:block;width:16px;height:16px;flex:0 0 auto;perspective:240px;"><span style="display:block;width:16px;height:16px;transform-style:preserve-3d;animation:an-sparkflip 2.6s ease-in-out infinite;"><svg width="16" height="16" viewBox="0 0 18 18" fill="none" style="display:block;"><defs><linearGradient id="anSpark" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="0" spreadMethod="repeat"><stop offset="0" stop-color="#C956FF"></stop><stop offset="0.5" stop-color="#FF834E"></stop><stop offset="1" stop-color="#C956FF"></stop><animate attributeName="x1" values="0;1" dur="2.2s" repeatCount="indefinite"></animate><animate attributeName="x2" values="1;2" dur="2.2s" repeatCount="indefinite"></animate></linearGradient></defs><path d="M 9.992 0 C 10.262 0.007 10.476 0.228 10.494 0.498 C 10.74 4.234 13.727 7.221 17.463 7.466 C 17.738 7.485 17.962 7.706 17.962 7.982 L 17.962 10.09 L 17.948 10.09 C 17.897 10.311 17.699 10.478 17.463 10.493 C 13.727 10.739 10.74 13.726 10.494 17.462 C 10.477 17.717 10.285 17.925 10.038 17.955 L 10.038 17.961 L 7.983 17.961 C 7.707 17.961 7.486 17.737 7.467 17.462 C 7.222 13.726 4.235 10.739 0.499 10.493 C 0.263 10.478 0.065 10.311 0.014 10.09 L 0 10.09 L 0 7.982 C 0 7.706 0.224 7.485 0.499 7.466 C 4.235 7.221 7.222 4.234 7.467 0.498 C 7.485 0.228 7.7 0.007 7.969 0 L 9.992 0 Z M 8.981 1.353 C 8.952 1.353 8.928 1.374 8.925 1.403 C 8.48 5.348 5.349 8.476 1.404 8.922 C 1.376 8.926 1.354 8.95 1.354 8.979 C 1.354 9.008 1.376 9.032 1.404 9.036 C 5.349 9.482 8.478 12.612 8.924 16.557 C 8.928 16.585 8.952 16.607 8.98 16.607 C 9.009 16.607 9.033 16.585 9.036 16.557 C 9.482 12.612 12.612 9.483 16.557 9.037 C 16.586 9.033 16.608 9.009 16.608 8.979 C 16.608 8.95 16.586 8.926 16.557 8.922 C 12.612 8.476 9.482 5.347 9.036 1.403 C 9.033 1.374 9.009 1.353 8.981 1.353 Z" fill="url(#anSpark)" fill-rule="evenodd"></path></svg></span></span><span style="font-family:${FONT};font-size:12px;font-weight:500;line-height:1;letter-spacing:-0.1px;background:linear-gradient(90deg,#C956FF,#FF834E,#C956FF);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:an-sparkshimmer 2.2s linear infinite;">Mixpanel AI</span></div><span style="font-size:11px;font-weight:400;line-height:1.4;color:#626266;">Signups dipped 19% last week — a brief pullback against otherwise steady growth.</span><div style="display:flex;gap:6px;align-items:center;align-self:stretch;"><span style="width:8px;height:8px;border-radius:50%;background:#E34F2F;flex:0 0 auto;"></span><span style="font-size:12px;font-weight:400;line-height:1.4;color:#626266;flex:1 1 auto;">Weekly drop</span><span style="height:20px;border-radius:4px;background:#FBEBE7;display:flex;align-items:center;justify-content:center;padding:0 6px;box-sizing:border-box;"><span style="font-size:12px;font-weight:500;line-height:1;color:#E34F2F;">−19%</span></span></div></div></div>
<div style="flex:1 1 auto;display:flex;min-height:0;padding:22px 12px 12px 0;box-sizing:border-box;">
<div style="flex:0 0 auto;width:34px;position:relative;box-sizing:border-box;animation:an-fadeIn .5s ease-out .3s both;"><span style="${YL}top:0.19%;">40K</span><span style="${YL}top:25%;">30K</span><span style="${YL}top:50%;">20K</span><span style="${YL}top:75%;">10K</span><span style="${YL}top:99.8%;">0</span></div>
<div style="flex:1 1 auto;display:flex;flex-direction:column;min-width:0;"><div style="flex:1 1 auto;position:relative;min-height:0;">
<svg viewBox="0 0 902 515" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible;"><defs><linearGradient id="anArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7856FF" stop-opacity="0.4"></stop><stop offset="0.85" stop-color="#7856FF" stop-opacity="0"></stop></linearGradient><clipPath id="anReveal"><rect x="0" y="-20" width="0" height="560"><animate attributeName="width" values="0;902" dur="1.3s" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.3s" fill="freeze"></animate></rect></clipPath></defs><line x1="0" y1="1" x2="902" y2="1" ${GRID}></line><line x1="0" y1="128.75" x2="902" y2="128.75" ${GRID}></line><line x1="0" y1="257.5" x2="902" y2="257.5" ${GRID}></line><line x1="0" y1="386.25" x2="902" y2="386.25" ${GRID}></line><line x1="0" y1="514" x2="902" y2="514" stroke="#EAEAEA" stroke-width="1"></line><g clip-path="url(#anReveal)"><path d="${LINE} L 902 515 L 0 515 Z" fill="url(#anArea)"></path><path d="${LINE}" fill="none" stroke="#7856FF" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></g></svg>
<div style="position:absolute;left:50.14%;top:47.2%;width:0;height:0;"><span style="position:absolute;left:0;top:0;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;background:#7856FF;opacity:0;animation:an-dotPulse 2.2s ease-out 1.5s infinite;"></span><span style="position:absolute;left:0;top:0;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#7856FF;box-shadow:0 0 0 3px #FFFFFF;animation:an-dotIn .4s ease-out 1.3s both;"></span></div>
</div></div></div>
</div></div>`

export default function Analytics_Product_Spot() {
    const wrap = useRef<HTMLDivElement>(null)
    const inner = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        const w = wrap.current, b = inner.current; if (!w || !b) return
        const fit = () => {
            const cw = w.clientWidth; if (!cw) return
            const s = Math.min(1, cw / 488)
            b.style.transformOrigin = "top center"
            b.style.transform = s < 1 ? `scale(${s})` : "none"
            w.style.height = (488 * s) + "px"
        }
        fit(); requestAnimationFrame(fit)
        const ro = new ResizeObserver(fit); ro.observe(w)
        window.addEventListener("resize", fit)
        return () => { ro.disconnect(); window.removeEventListener("resize", fit) }
    }, [])
    return (
        <div ref={wrap} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <style>{KF}</style>
            <div ref={inner} style={{ width: 488, height: 488 }} dangerouslySetInnerHTML={{ __html: MARKUP }} />
        </div>
    )
}
