import{_ as D,K as H,L as l,M as V,N as j,O as q,P as F,Q as P,R as U}from"./eo-dash.C2wBsRqp.js";import{o as z}from"./handling-BpaHNGs0.BqFzZ2uv.js";import{T as J}from"./tooltip-DBjY-jYD.DhRlaIj4.js";import"./main.BMSb0Lmm.js";import{m as E,an as K,p as $,r as h,Y as Q,a as m,o as c,ai as X,b as M,g as S,f as i,j as u,z as _,N as I,ao as A,P as Y}from"./framework.CfSEjcxR.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.rsjhRacA.js";import"./lit-element.CIht5NN8.js";import"./addCommonStyleSheet.BIZSB8qW.js";import"./GeoTIFF.DhHKktEL.js";import"./intersectsextent.BJmqhwwu.js";import"./util.Dhne-uB2.js";import"./XYZ.Cin0k4ZG.js";import"./GeoJSON.DkENlUbV.js";import"./getElement.COiK8z0h.js";import"./async-lFefjGhd.DcAomEhA.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./VTooltip-Cn7LfsfM.B9HlpxAV.js";import"./forwardRefs-DrtFAEmY.6H0-5wWJ.js";import"./transition-9tAAZCZh.CzSGKmcz.js";import"./d3-scale.C3gmEjMU.js";var G=".bg-surface:not(:has(.eodash-process-container)):has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",Z=".eodash-chart-wrapper[data-v-13b57997]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex;position:relative}.eodash-chart-wrapper.fit-x-layout[data-v-13b57997]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized[data-v-13b57997]{background:#00000008;align-items:center;padding:16px 10%;overflow-y:auto}.chart-frame[data-v-13b57997]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}.chart-frame.fit-x-layout[data-v-13b57997]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized .chart-frame[data-v-13b57997]{background:#fff;border-radius:8px;width:100%;max-width:900px;box-shadow:0 4px 15px #0000001a}eox-chart[data-v-13b57997]{flex-grow:1;min-height:0}eox-chart.fit-x-layout[data-v-13b57997]{height:var(--fit-height)!important}.chart-toggle[data-v-13b57997]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",tt={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},et=["d"],at=[".spec",".dataValues",".opt"],zt=D({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(f){const d=i(()=>f.enableCompare?V.value:j.value),n=i(()=>f.enableCompare?q.value:F.value);function O(e){var t;return e?e.mark==="image"||((t=e.mark)==null?void 0:t.type)==="image"?!0:Array.isArray(e.layer)?e.layer.some(a=>{var r;return a.mark==="image"||((r=a.mark)==null?void 0:r.type)==="image"}):!1:!1}const B=i(()=>O(n.value)),o=i(()=>{var t;const e=n.value;return e?(e.autosize==="fit-x"||((t=e.autosize)==null?void 0:t.type)==="fit-x")&&B.value:!1}),W=i(()=>{const e=n.value;if(!e)return!1;let t=!1;const a=r=>{if(!(t||!r||typeof r!="object")){if("bind"in r&&typeof r.bind=="object"&&r.bind!==null&&"input"in r.bind){t=!0;return}Object.values(r).forEach(a)}};return a(e),t}),p=h(null);function R(e,t){let a=C(e);return a||t&&t.data&&Array.isArray(t.data.values)&&(a=C(t.data.values),a)?a:null}function C(e){if(!Array.isArray(e)||e.length===0)return null;const t=e[0];if(!t||typeof t!="object")return null;for(const a of Object.keys(t)){const r=t[a];if(typeof r=="string"&&(r.startsWith("http")||r.startsWith("/")))return r}return null}const v=h(1.414),g=h(400);E([d,n],([e,t])=>{const a=R(e,t);if(!a)return;const r=new Image;r.onload=()=>{r.naturalWidth>0&&r.naturalHeight>0&&(v.value=r.naturalHeight/r.naturalWidth)},r.src=a},{immediate:!0});const x=i(()=>Math.round(g.value*v.value));function y(){const e=k.value;if(e){const t=e.querySelector(".chart-frame"),a=Math.round((t?t.clientWidth:e.clientWidth)||400);Math.abs(g.value-a)>2&&(g.value=a)}}E([n,v],([e])=>{if(!e){p.value=null;return}const t=JSON.parse(JSON.stringify(e));t.width="container";const a=e;o.value?t.height=x.value:typeof a.height=="number"?t.height=a.height:t.height="container",Y(()=>{p.value=t,b.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const b=h(0),k=K("container");let s=null,w=null;$(()=>{const e=k.value;if(!e)return;y(),window.addEventListener("resize",y),w=window.setInterval(()=>{if(e){const a=e.querySelector("eox-chart");if(a&&a.shadowRoot&&!a.shadowRoot.querySelector("#eodash-chart-styles")){const r=document.createElement("style");r.id="eodash-chart-styles",r.innerHTML=`
            * {
              box-sizing: border-box !important;
            }
            #vis {
              min-height: 100px !important;
              flex: 1 1 auto !important;
            }
            :host, .vega-embed {
              display: flex !important;
              flex-direction: column !important;
              height: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .vega-bindings {
              flex: 0 0 auto !important;
              display: flex !important;
              flex-wrap: wrap;
              gap: 2px !important;
              background: rgba(255, 255, 255, 0.85);
              padding: 6px 12px !important;
              border-radius: 6px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              margin: 0 !important;
              margin-top: -10px !important;
              z-index: 10;
            }
            .vega-bindings:empty {
              display: none !important;
            }
            .vega-embed > canvas, .vega-embed > svg {
              height: 100% !important;
              max-width: 100% !important;
              object-fit: contain;
            }
            .vega-bind {
              display: flex;
              align-items: center;
              gap: 6px;
              margin-bottom: 0 !important;
            }
          `,a.shadowRoot.appendChild(r)}}},200);const t=H(e);t&&(s=new MutationObserver(async()=>{getComputedStyle(t).display!=="none"&&(b.value=Math.random())}),s.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}),Q(()=>{window.removeEventListener("resize",y),s==null||s.disconnect(),w&&window.clearInterval(w)});const L=i(()=>o.value?{"--fit-height":`${x.value}px`,height:`${x.value}px`,width:"100%"}:{height:"100%",width:"100%"}),N=i(()=>l.value?P:U);function T(){l.value=!l.value}return(e,t)=>(c(),m("div",{ref:"container",class:_(["eodash-chart-wrapper",{"fit-x-layout":o.value,maximized:u(l),"fit-x-maximized":o.value&&u(l)}])},[d.value&&n.value?X((c(),m("button",{key:0,class:"chart-toggle",onClick:T},[(c(),m("svg",tt,[S("path",{d:N.value},null,8,et)]))])),[[J,u(l)?"Minimize":"Maximize"]]):M("v-if",!0),S("div",{class:_(["chart-frame",{"fit-x-layout":o.value}]),style:I({paddingBottom:W.value?"25px":"0px"})},[d.value&&p.value?(c(),m("eox-chart",{key:b.value,".spec":A(p.value),".dataValues":A(d.value),style:I(L.value),class:_({"fit-x-layout":o.value}),".opt":f.vegaEmbedOptions,"onClick:item":t[0]||(t[0]=(...a)=>u(z)&&u(z)(...a))},null,46,at)):M("v-if",!0)],6)],2))}},[["styles",[G,Z]],["__scopeId","data-v-13b57997"]]);export{zt as default};
