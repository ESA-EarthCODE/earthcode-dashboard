import{_ as A,aG as D,X as F,b1 as K,b2 as z,$ as U,W as q,K as G,bZ as M,aK as j,b_ as W,b7 as X,a3 as Z,a4 as $,bl as H,N as Q,O as Y}from"./eo-dash.G9jtfgl4.js";import{m as ee,g as te,u as oe}from"./async-lFefjGhd.BDl_81uw.js";import{u as ae,i as P,h as se}from"./handling-BpaHNGs0.B9eofnCX.js";import re from"./EodashChart-CQFymUWc.CMKhZCOO.js";import ne,{t as ie,n as le}from"./ProcessList-DssjFt3a.CyrcBbQW.js";import"./main.BCyX2C9t.js";import"./main.R1E7mjVa.js";import"./main.hXooDggX.js";import{ao as ce,m as N,o as w,a as R,g as de,C as pe,j as L,b as _,c as I,w as B,I as T,r as C,f as J,p as ue,P as V,q as me}from"./framework.B1yo9hPv.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.BTt916MD.js";import"./lit-element.CIht5NN8.js";import"./addCommonStyleSheet.BIZSB8qW.js";import"./GeoTIFF.bXgaZHSS.js";import"./intersectsextent.D09QTUoH.js";import"./util.Dhne-uB2.js";import"./XYZ.C-Kl0Lrg.js";import"./GeoJSON.olWmauGM.js";import"./getElement.COiK8z0h.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./tooltip-DBjY-jYD.CtBWr6OS.js";import"./VTooltip-Cn7LfsfM.D9rlgIqE.js";import"./forwardRefs-DrtFAEmY.CdyeJ5gk.js";import"./transition-9tAAZCZh.CvPj4h-w.js";import"./d3-scale.DUc71PoW.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./when.BR7zwNJC.js";import"./WKT.Dwq2hrlS.js";import"./browser.BlDi_8gE.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.DCVKSTf4.js";var fe=({selectedStac:r,jsonformSchema:a,jsonformEl:c,isProcessed:n,processResults:i,loading:m,isPolling:p,mapElement:o})=>{ue(async()=>{var l;await P({enableCompare:((l=o.value)==null?void 0:l.id)==="compare",selectedStac:r,jsonformSchema:a,isProcessed:n,processResults:i,loading:m,isPolling:p,mapElement:o.value})}),X(async l=>{var h,g,y,k;const u=((h=o.value)==null?void 0:h.id)==="compare",v=u?"compareLayers:updated":"layers:updated";if((u?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(l)){const f=await ae({jsonformSchema:a.value,newLayers:u?Z():$(),enableCompare:u,mapElement:o.value});if(f){const S=Object.values(f.properties??{}).some(e=>{var t,d;return(d=(t=e==null?void 0:e.options)==null?void 0:t.drawtools)==null?void 0:d.layerId})&&!((y=(g=o.value)==null?void 0:g.selectInteractions)!=null&&y.SelectLayerClickInteraction),O=S||JSON.stringify(f)!==JSON.stringify(a.value),x=(k=c.value)==null?void 0:k.value;O&&x&&typeof x=="object"&&(f.default=JSON.parse(JSON.stringify(x))),S&&(a.value=null,await V()),a.value=f}}l===v&&await P({enableCompare:u,selectedStac:r,jsonformSchema:a,isProcessed:n,processResults:i,loading:m,isPolling:p,mapElement:o.value})})};function ve(r,a,c,n){const i=H(()=>n(),200);N(c,p=>{var o;r.value=((o=p==null?void 0:p.options)==null?void 0:o.execute)||!1});const m=N([r,a],async([p,o],[l,u])=>{var v,h;u&&u.removeEventListener("change",i),p&&o&&(o.removeEventListener("change",i),o.addEventListener("change",i),(v=o.editor)!=null&&v.ready?i():(await V(),(h=o.editor)!=null&&h.ready&&i()))},{immediate:!0});me(()=>{a.value&&a.value.removeEventListener("change",i),m()})}var he="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{scrollbar-gutter:stable;flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-content>.eodash-chart-wrapper:not(.fit-x-layout){flex:1 1 0;height:auto;min-height:180px}.eodash-process-content>.eodash-chart-wrapper.fit-x-layout{flex:none;height:auto!important}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",ye={ref:"container",class:"eodash-process-container"},ge={class:"eodash-process-content"},xe=[".schema"],be={key:0,class:"eodash-process-actions"},et=A({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const a=C(!1),c=C(null),n=ce("jsonformEl");N(n,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const s=document.createElement("style");s.id=t,s.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,e.shadowRoot.appendChild(s)}const d=()=>{var E;const s=(E=e==null?void 0:e.shadowRoot)==null?void 0:E.querySelector("eox-drawtools");if(s&&s.shadowRoot&&!s.shadowRoot.getElementById("eodash-drawtools-indent-style")){const b=document.createElement("style");return b.id="eodash-drawtools-indent-style",b.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,s.shadowRoot.appendChild(b),!0}return!1};if(!d()){const s=new MutationObserver(()=>{d()&&s.disconnect()});s.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const i=J(()=>{var e;return(e=v.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=C(!1),p=C(!1),o=C(!1),l=C([]),u=J(()=>!p.value&&!!c.value&&!!n.value),{selectedStac:v,selectedCompareStac:h}=D(F()),g=r.enableCompare?h:v,y=r.enableCompare?K:z,k=r.enableCompare?U:q,f=r.enableCompare?ie:le,S=J(()=>{var e;return k.value+((e=y.value)==null?void 0:e.id)+JSON.stringify(c.value)});fe({selectedStac:g,mapElement:y,jsonformSchema:c,jsonformEl:n,isProcessed:a,processResults:l,loading:m,isPolling:o});const O=()=>{l.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=g.value)==null?void 0:d.id)+"_process_results.json",ee(t,e)})},x=async()=>{var t;if(te(c.value).some(d=>{var E,b;const s=(b=(E=n.value)==null?void 0:E.value)==null?void 0:b[d];return!s||Array.isArray(s)&&!s.length})){a.value=!1;const d=r.enableCompare?Q:Y;d.value=null;return}const e=(t=n.value)==null?void 0:t.editor.validate();if(e!=null&&e.length){console.warn("[eodash] Form validation failed",e);return}l.value=[],await se({jobs:f,selectedStac:g,jsonformEl:n,jsonformSchema:c,loading:m,isPolling:o,processResults:l,mapElement:y.value}),a.value=!0,i.value&&oe(f,k.value)};return ve(p,n,c,x),(e,t)=>(w(),R("div",ye,[de("div",ge,[pe(ne,{"map-element":L(y),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),c.value?(w(),R("eox-jsonform",{key:S.value,ref_key:"jsonformEl",ref:n,".schema":c.value},null,40,xe)):_("v-if",!0),L(G)?_("v-if",!0):(w(),I(re,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||l.value.length&&a.value&&!i.value?(w(),R("div",be,[u.value?(w(),I(j,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[L(M)],density:"comfortable",size:"small",onClick:x},{default:B(()=>[...t[0]||(t[0]=[T(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):_("v-if",!0),l.value.length&&a.value&&!i.value?(w(),I(j,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[L(W)],size:"small",density:"comfortable",onClick:O},{default:B(()=>[...t[1]||(t[1]=[T(" Download ",-1)])]),_:1},8,["append-icon"])):_("v-if",!0)])):_("v-if",!0)],512))}},[["styles",[he]]]);export{et as default};
