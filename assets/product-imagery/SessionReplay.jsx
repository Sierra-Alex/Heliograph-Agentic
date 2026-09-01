import { useRef, useLayoutEffect, useEffect } from "react"

const KF = `@keyframes sr-enterUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes sr-fadeIn{from{opacity:0}to{opacity:1}}@keyframes sr-vidFill{0%{width:3%}92%,100%{width:100%}}@keyframes sr-vidHead{0%{left:3%}92%,100%{left:100%}}@keyframes sr-kfLit1{0%,26%{background:#D9D9D9}27%,100%{background:#72BEF4}}@keyframes sr-kfLit2{0%,50%{background:#D9D9D9}51%,100%{background:#72BEF4}}@keyframes sr-kfLit3{0%,73%{background:#D9D9D9}74%,100%{background:#72BEF4}}@keyframes sr-pbHide{0%,99.99%{opacity:1}100%{opacity:0}}@keyframes sr-pbShow{0%,99.99%{opacity:0}100%{opacity:1}}@keyframes sr-cardPop{from{opacity:0;transform:translateY(8px) scale(.94)}to{opacity:1;transform:none}}@keyframes sr-sparkflip{0%,30%{transform:rotate(0deg)}62%,100%{transform:rotate(360deg)}}@keyframes sr-sparkshimmer{0%{background-position:200% 50%}100%{background-position:0% 50%}}`

const FONT = "'Apercu Pro','Helvetica Neue',Helvetica,Arial,sans-serif"

const MARKUP = `<div style="position:relative;width:488px;height:488px;overflow:visible;border-radius:16px;background:rgba(250,250,250,0.5);box-shadow:inset 0 0 0 0.5px rgba(255,255,255,0.2),0 0 0 0.5px rgba(255,255,255,0.2),inset -2px -2px 4px 0 rgba(0,0,0,0.05),inset 2px 2px 2px 0 #FFFFFF,0 8px 40px 0 rgba(0,0,0,0.1);box-sizing:border-box;padding:4px;display:flex;flex-direction:column;align-items:flex-start;font-family:${FONT};"><div style="position:relative;height:480px;align-self:stretch;flex-shrink:0;overflow:visible;border-radius:12px;background:#FFFFFF;display:flex;flex-direction:column;box-sizing:border-box;"><div style="position:absolute;top:108px;left:-26px;z-index:30;width:220px;border-radius:8px;background:rgba(255,255,255,0.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 0 10px 0 rgba(0,0,0,0.1);display:flex;gap:8px;padding:10px 12px 10px 8px;box-sizing:border-box;transform-origin:top center;animation:sr-cardPop .5s cubic-bezier(.34,1.4,.5,1) 1.5s both;"><div style="display:flex;flex-direction:column;gap:6px;align-items:flex-start;flex:1 1 auto;"><div style="display:flex;gap:6px;align-items:center;"><span style="display:block;width:16px;height:16px;flex:0 0 auto;perspective:240px;"><span style="display:block;width:16px;height:16px;transform-style:preserve-3d;animation:sr-sparkflip 2.6s ease-in-out infinite;"><svg width="16" height="16" viewBox="0 0 18 18" fill="none" style="display:block;"><defs><linearGradient id="srSpark" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="0" spreadMethod="repeat"><stop offset="0" stop-color="#C956FF"></stop><stop offset="0.5" stop-color="#FF834E"></stop><stop offset="1" stop-color="#C956FF"></stop><animate attributeName="x1" values="0;1" dur="2.2s" repeatCount="indefinite"></animate><animate attributeName="x2" values="1;2" dur="2.2s" repeatCount="indefinite"></animate></linearGradient></defs><path d="M 9.992 0 C 10.262 0.007 10.476 0.228 10.494 0.498 C 10.74 4.234 13.727 7.221 17.463 7.466 C 17.738 7.485 17.962 7.706 17.962 7.982 L 17.962 10.09 L 17.948 10.09 C 17.897 10.311 17.699 10.478 17.463 10.493 C 13.727 10.739 10.74 13.726 10.494 17.462 C 10.477 17.717 10.285 17.925 10.038 17.955 L 10.038 17.961 L 7.983 17.961 C 7.707 17.961 7.486 17.737 7.467 17.462 C 7.222 13.726 4.235 10.739 0.499 10.493 C 0.263 10.478 0.065 10.311 0.014 10.09 L 0 10.09 L 0 7.982 C 0 7.706 0.224 7.485 0.499 7.466 C 4.235 7.221 7.222 4.234 7.467 0.498 C 7.485 0.228 7.7 0.007 7.969 0 L 9.992 0 Z M 8.981 1.353 C 8.952 1.353 8.928 1.374 8.925 1.403 C 8.48 5.348 5.349 8.476 1.404 8.922 C 1.376 8.926 1.354 8.95 1.354 8.979 C 1.354 9.008 1.376 9.032 1.404 9.036 C 5.349 9.482 8.478 12.612 8.924 16.557 C 8.928 16.585 8.952 16.607 8.98 16.607 C 9.009 16.607 9.033 16.585 9.036 16.557 C 9.482 12.612 12.612 9.483 16.557 9.037 C 16.586 9.033 16.608 9.009 16.608 8.979 C 16.608 8.95 16.586 8.926 16.557 8.922 C 12.612 8.476 9.482 5.347 9.036 1.403 C 9.033 1.374 9.009 1.353 8.981 1.353 Z" fill="url(#srSpark)" fill-rule="evenodd"></path></svg></span></span><span style="font-size:12px;font-weight:500;line-height:1;letter-spacing:-0.1px;background:linear-gradient(90deg,#C956FF,#FF834E,#C956FF);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:sr-sparkshimmer 2.2s linear infinite;">Mixpanel AI</span></div><span style="font-size:11px;font-weight:400;line-height:1.4;color:#626266;">Visitors rage-click the plan toggle, then drop off before completing signup.</span><div style="display:flex;gap:4px;align-items:center;"><span style="height:24px;border-radius:4px;background:#F6F6F6;display:flex;align-items:center;justify-content:center;padding:0 7px;box-sizing:border-box;"><span style="font-size:12px;font-weight:500;line-height:1;color:#2A2A2F;">38.6%</span></span><span style="font-size:12px;font-weight:400;line-height:1.4;color:#626266;white-space:nowrap;">signup drop-off</span></div><div style="display:flex;gap:4px;align-items:center;"><span style="height:24px;border-radius:4px;background:#FBEBE7;display:flex;align-items:center;justify-content:center;padding:0 7px;box-sizing:border-box;"><span style="font-size:12px;font-weight:500;line-height:1;color:#E34F2F;">24</span></span><span style="font-size:12px;font-weight:400;line-height:1.4;color:#626266;white-space:nowrap;">rage clicks</span></div></div></div><div style="flex:0 0 auto;display:flex;gap:10px;align-items:center;padding:12px 14px 8px;box-sizing:border-box;animation:sr-enterUp .4s ease-out .07s both;"><div style="flex:1 1 auto;height:26px;border-radius:5px;background:#F6F6F6;display:flex;gap:5px;align-items:center;padding:0 8px;box-sizing:border-box;min-width:0;"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="flex:0 0 auto;"><rect x="4.5" y="1.5" width="6" height="7.5" rx="1" stroke="#8F8F91"></rect><rect x="2.5" y="4" width="6" height="7.5" rx="1" stroke="#8F8F91" fill="#F6F6F6"></rect></svg><span style="font-size:11px;line-height:1;color:#8F8F91;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">https://northbeam.com/signup/</span></div><span style="flex:0 0 auto;height:26px;border-radius:5px;box-shadow:inset 0 0 0 1px #E9E9E9;display:flex;gap:4px;align-items:center;justify-content:center;padding:0 9px;box-sizing:border-box;"><svg width="15" height="14" viewBox="0 0 23 22" fill="none" style="color:#626266;"><path d="M8.7851 3.70215C9.97079 3.70215 11.039 4.2014 11.7919 5.00391C12.4467 5.70165 13.5172 5.82311 14.3124 5.49805C14.604 5.37888 14.9233 5.31254 15.2597 5.3125C16.6462 5.31271 17.7704 6.43734 17.7704 7.82422C17.7704 9.21114 16.6462 10.3357 15.2597 10.3359C14.9235 10.3359 14.6038 10.2697 14.3124 10.1504C13.517 9.825 12.4457 9.94644 11.791 10.6445C11.0381 11.447 9.97065 11.9473 8.7851 11.9473C6.50833 11.947 4.66302 10.1009 4.66302 7.82422C4.66308 5.54759 6.50836 3.70243 8.7851 3.70215Z" stroke="currentColor" stroke-width="1.40348"></path><circle cx="15.2967" cy="15.8243" r="2.47397" stroke="currentColor" stroke-width="1.40348"></circle><circle cx="6.10536" cy="15.8243" r="1.44271" stroke="currentColor" stroke-width="1.40348"></circle></svg><span style="font-size:11px;font-weight:500;line-height:1;color:#2A2A2F;">Heatmap</span></span></div><div style="flex:1 1 auto;padding:2px 16px 0;box-sizing:border-box;display:flex;min-height:0;"><div style="flex:1 1 auto;border-radius:10px;background:#F0F9FE;padding:12px;box-sizing:border-box;display:flex;min-width:0;animation:sr-fadeIn .8s ease-out .3s both;"><div style="flex:1 1 auto;position:relative;border-radius:8px;background:#FFFFFF;box-shadow:inset 0 0 0 1px #EDEDED;overflow:hidden;display:flex;flex-direction:column;min-width:0;"><div style="height:42px;flex:0 0 auto;border-bottom:1px solid #F0F0F0;display:flex;align-items:center;gap:12px;padding:0 18px;box-sizing:border-box;"><span style="width:19px;height:19px;border-radius:5px;background:#D9D9DE;flex:0 0 auto;"></span><span style="width:50px;height:8px;border-radius:4px;background:#E6E6E9;"></span><span style="flex:1 1 auto;"></span><span style="width:30px;height:8px;border-radius:4px;background:#ECECEE;"></span><span style="width:30px;height:8px;border-radius:4px;background:#ECECEE;"></span><span style="width:54px;height:22px;border-radius:6px;background:#D9D9DE;flex:0 0 auto;"></span></div><div style="flex:0 0 auto;display:flex;gap:22px;padding:28px 18px;box-sizing:border-box;"><div style="flex:1 1 0;display:flex;flex-direction:column;gap:10px;justify-content:center;"><span style="width:82%;height:14px;border-radius:5px;background:#DCDCE0;"></span><span style="width:56%;height:14px;border-radius:5px;background:#DCDCE0;"></span><span style="width:100%;height:7px;border-radius:4px;background:#ECECEE;margin-top:6px;"></span><span style="width:90%;height:7px;border-radius:4px;background:#ECECEE;"></span><span style="width:66%;height:7px;border-radius:4px;background:#ECECEE;"></span><span style="width:84px;height:26px;border-radius:6px;background:#D9D9DE;margin-top:6px;"></span></div><div style="flex:1 1 0;border-radius:8px;background:#EEEEF0;min-height:118px;"></div></div><div style="flex:1 1 auto;display:flex;gap:14px;padding:0 18px 24px;box-sizing:border-box;min-height:0;"><div style="flex:1 1 0;display:flex;flex-direction:column;gap:8px;"><div style="flex:1 1 auto;border-radius:6px;background:#EEEEF0;min-height:46px;"></div><span style="width:64%;height:7px;border-radius:4px;background:#E6E6E9;"></span><span style="width:88%;height:6px;border-radius:4px;background:#ECECEE;"></span></div><div style="flex:1 1 0;display:flex;flex-direction:column;gap:8px;"><div style="flex:1 1 auto;border-radius:6px;background:#EEEEF0;min-height:46px;"></div><span style="width:64%;height:7px;border-radius:4px;background:#E6E6E9;"></span><span style="width:88%;height:6px;border-radius:4px;background:#ECECEE;"></span></div><div style="flex:1 1 0;display:flex;flex-direction:column;gap:8px;"><div style="flex:1 1 auto;border-radius:6px;background:#EEEEF0;min-height:46px;"></div><span style="width:64%;height:7px;border-radius:4px;background:#E6E6E9;"></span><span style="width:88%;height:6px;border-radius:4px;background:#ECECEE;"></span></div></div><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><canvas data-sr-canvas style="position:absolute;inset:0;width:100%;height:100%;"></canvas><div data-sr-cursor style="position:absolute;left:0;top:0;width:38px;height:38px;opacity:0;will-change:transform,opacity;"><svg width="38" height="38" viewBox="0 0 54 54" fill="none"><circle opacity="0.3" cx="18.7528" cy="18.7528" r="18.7528" fill="#4F44E0"></circle><circle cx="18.7551" cy="18.7517" r="3.41378" fill="#FF0000"></circle><path d="M19.0593 19.0606L19.3133 18.3445C19.0372 18.2465 18.7293 18.3161 18.5221 18.5233C18.3148 18.7305 18.2453 19.0384 18.3432 19.3146L19.0593 19.0606ZM44.7029 28.1573L45.2401 28.6946C45.4245 28.5102 45.5015 28.2442 45.444 27.9898C45.3865 27.7355 45.2026 27.5284 44.9569 27.4412L44.7029 28.1573ZM28.156 44.7041L27.44 44.9582C27.5272 45.2039 27.7342 45.3878 27.9886 45.4452C28.2429 45.5027 28.5089 45.4258 28.6933 45.2414L28.156 44.7041ZM34.5913 38.2689L35.1285 37.7317C34.8318 37.435 34.3507 37.435 34.054 37.7317L34.5913 38.2689ZM43.5482 47.2259L43.011 47.7631C43.1535 47.9056 43.3467 47.9857 43.5482 47.9857C43.7497 47.9857 43.943 47.9056 44.0855 47.7631L43.5482 47.2259ZM47.2193 43.5548L47.7566 44.092C48.0533 43.7953 48.0533 43.3142 47.7566 43.0175L47.2193 43.5548ZM38.2624 34.5978L37.7251 34.0606C37.4284 34.3573 37.4284 34.8384 37.7251 35.1351L38.2624 34.5978ZM18.8053 19.7766L44.4489 28.8734L44.9569 27.4412L19.3133 18.3445L18.8053 19.7766ZM28.8721 44.4501L19.7754 18.8066L18.3432 19.3146L27.44 44.9582L28.8721 44.4501ZM34.054 37.7317L27.6188 44.1669L28.6933 45.2414L35.1285 38.8062L34.054 37.7317ZM44.0855 46.6886L35.1285 37.7317L34.054 38.8062L43.011 47.7631L44.0855 46.6886ZM46.6821 43.0175L43.011 46.6886L44.0855 47.7631L47.7566 44.092L46.6821 43.0175ZM37.7251 35.1351L46.6821 44.092L47.7566 43.0175L38.7996 34.0606L37.7251 35.1351ZM44.1656 27.6201L37.7251 34.0606L38.7996 35.1351L45.2401 28.6946L44.1656 27.6201Z" fill="black"></path></svg></div></div></div></div></div><div style="height:52px;flex:0 0 auto;display:flex;gap:12px;align-items:center;padding:0 20px;box-sizing:border-box;animation:sr-enterUp .4s ease-out .9s both;"><span style="width:28px;height:28px;flex:0 0 auto;position:relative;"><span style="position:absolute;inset:0;border-radius:50%;background:#72BEF4;"><span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:2.3px;animation:sr-pbHide 7s linear forwards;"><span style="width:2.3px;height:9px;background:#FFFFFF;border-radius:1px;"></span><span style="width:2.3px;height:9px;background:#FFFFFF;border-radius:1px;"></span></span><span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;animation:sr-pbShow 7s linear forwards;"><span style="width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #FFFFFF;margin-left:2px;"></span></span></span></span><div style="flex:1 1 auto;position:relative;height:12px;"><div style="position:absolute;left:2px;right:8px;top:0;height:12px;"><span style="position:absolute;left:0;right:0;top:5.3px;height:1.4px;background:#E9E9E9;"></span><span style="position:absolute;left:0;top:3px;width:3%;height:6px;border-radius:28px;background:#72BEF4;animation:sr-vidFill 7s linear forwards;"></span><span style="position:absolute;left:27%;top:1.5px;width:9px;height:9px;border-radius:50%;background:#D9D9D9;box-shadow:0 0 0 2px #FFFFFF;transform:translateX(-50%);animation:sr-kfLit1 7s linear forwards;"></span><span style="position:absolute;left:51%;top:1.5px;width:9px;height:9px;border-radius:50%;background:#D9D9D9;box-shadow:0 0 0 2px #FFFFFF;transform:translateX(-50%);animation:sr-kfLit2 7s linear forwards;"></span><span style="position:absolute;left:74%;top:1.5px;width:9px;height:9px;border-radius:50%;background:#D9D9D9;box-shadow:0 0 0 2px #FFFFFF;transform:translateX(-50%);animation:sr-kfLit3 7s linear forwards;"></span><span style="position:absolute;left:3%;top:1px;width:10px;height:10px;border-radius:50%;background:#72BEF4;box-shadow:0 0 0 2px #FFFFFF;transform:translateX(-50%);animation:sr-vidHead 7s linear forwards;"></span></div></div></div></div></div>`

// waypoints in a normalized 683x498 space (scaled to the mock size at draw time)
const WP: [number, number][] = [[150, 255], [598, 26], [470, 205], [150, 432], [415, 432], [598, 430]]

function pathPoint(u: number) {
    const P = WP, n = P.length - 1
    const s = Math.min(Math.floor(u * n), n - 1), t = u * n - s
    const p0 = P[Math.max(0, s - 1)], p1 = P[s], p2 = P[s + 1], p3 = P[Math.min(P.length - 1, s + 2)]
    const t2 = t * t, t3 = t2 * t
    const cr = (a: number, b: number, c: number, d: number) =>
        0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3)
    return { x: cr(p0[0], p1[0], p2[0], p3[0]), y: cr(p0[1], p1[1], p2[1], p3[1]) }
}

export default function Session_Replay_Spot() {
    const root = useRef<HTMLDivElement>(null)
    const wrap = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        const w = wrap.current, b = root.current; if (!w || !b) return
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

    useEffect(() => {
        const el = root.current
        if (!el) return
        const cv = el.querySelector<HTMLCanvasElement>("[data-sr-canvas]")
        const cur = el.querySelector<HTMLElement>("[data-sr-cursor]")
        if (!cv || !cur) return

        let raf = 0, alive = true, t0 = 0
        const trail: { x: number; y: number; t: number }[] = []
        const T = 7000, maxAge = 850

        const tick = (now: number) => {
            if (!alive) return
            raf = requestAnimationFrame(tick)
            const w = cv.clientWidth, h = cv.clientHeight
            if (!w || !h) return
            if (cv.width !== Math.round(w * 2) || cv.height !== Math.round(h * 2)) {
                cv.width = Math.round(w * 2)
                cv.height = Math.round(h * 2)
            }
            const ctx = cv.getContext("2d")!
            ctx.setTransform(2, 0, 0, 2, 0, 0)
            ctx.clearRect(0, 0, w, h)

            const SX = w / 683, SY = h / 498
            if (!t0) t0 = now
            const p = Math.min((now - t0) / T, 1)
            const moveP = Math.min(p / 0.86, 1)
            const eased = 0.5 - 0.5 * Math.cos(Math.PI * moveP)
            const pt = pathPoint(eased)
            const x = pt.x * SX, y = pt.y * SY

            trail.push({ x, y, t: now })
            while (trail.length && now - trail[0].t > maxAge) trail.shift()

            ctx.lineCap = "round"
            ctx.lineJoin = "round"
            for (let i = 1; i < trail.length; i++) {
                const a = trail[i - 1], b = trail[i]
                const age = (now - b.t) / maxAge
                const alpha = Math.max(0, 1 - age) * 0.9
                if (alpha <= 0) continue
                ctx.strokeStyle = "rgba(255,0,0," + alpha.toFixed(3) + ")"
                ctx.lineWidth = 2.6 * (1 - age * 0.55)
                ctx.beginPath()
                ctx.moveTo(a.x, a.y)
                ctx.lineTo(b.x, b.y)
                ctx.stroke()
            }

            let cop = 0.9
            if (p < 0.03) cop = (p / 0.03) * 0.9
            cur.style.transform = "translate(" + (x - 15).toFixed(1) + "px," + (y - 15).toFixed(1) + "px)"
            cur.style.opacity = cop.toFixed(3)
        }
        raf = requestAnimationFrame(tick)
        return () => {
            alive = false
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div ref={wrap} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <style>{KF}</style>
            <div ref={root} style={{ width: 488, height: 488 }} dangerouslySetInnerHTML={{ __html: MARKUP }} />
        </div>
    )
}
