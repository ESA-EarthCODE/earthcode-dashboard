import{_ as V,aG as A,U,aN as F,aO as z,Y as K,T as q,L as G,bZ as M,aK as P,b_ as Y,aU as Z,a1 as H,a2 as Q,bm as W,O as X,P as $}from"./eo-dash.D1ISDXAr.js";import{g as ee,u as te,m as oe}from"./async-lFefjGhd.B2zi61gN.js";import{i as j,u as ae,h as se}from"./handling-BpaHNGs0.C1JHf98d.js";import re from"./EodashChart-CQFymUWc.1-FWcyqC.js";import ne,{t as ie,n as le}from"./ProcessList-DssjFt3a.DZTqo99V.js";import"./main.BMSb0Lmm.js";import"./main.BtPnwPN1.js";import"./main.hXooDggX.js";import{an as ce,m as N,a as R,o as w,g as de,b as _,D as pe,c as I,j as S,r as C,f as J,w as B,I as T,p as ue,P as D,q as me}from"./framework.CfSEjcxR.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.rsjhRacA.js";import"./lit-element.CIht5NN8.js";import"./addCommonStyleSheet.BIZSB8qW.js";import"./GeoTIFF.DhHKktEL.js";import"./intersectsextent.BJmqhwwu.js";import"./util.Dhne-uB2.js";import"./XYZ.Cin0k4ZG.js";import"./GeoJSON.DkENlUbV.js";import"./getElement.COiK8z0h.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./tooltip-DBjY-jYD.Du6sryJi.js";import"./VTooltip-Cn7LfsfM.DctNpAq5.js";import"./forwardRefs-DrtFAEmY.DZo7amer.js";import"./transition-9tAAZCZh.CTuwPG84.js";import"./d3-scale.C3gmEjMU.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./when.BR7zwNJC.js";import"./WKT.BJgj_Pko.js";import"./browser.BlDi_8gE.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.DCVKSTf4.js";var fe=({selectedStac:r,jsonformSchema:a,jsonformEl:c,isProcessed:n,processResults:i,loading:m,isPolling:p,mapElement:o})=>{ue(async()=>{var l;await j({enableCompare:((l=o.value)==null?void 0:l.id)==="compare",selectedStac:r,jsonformSchema:a,isProcessed:n,processResults:i,loading:m,isPolling:p,mapElement:o.value})}),Z(async l=>{var h,g,y,k;const u=((h=o.value)==null?void 0:h.id)==="compare",v=u?"compareLayers:updated":"layers:updated";if((u?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(l)){const f=await ae({jsonformSchema:a.value,newLayers:u?H():Q(),enableCompare:u,mapElement:o.value});if(f){const L=Object.values(f.properties??{}).some(e=>{var t,d;return(d=(t=e==null?void 0:e.options)==null?void 0:t.drawtools)==null?void 0:d.layerId})&&!((y=(g=o.value)==null?void 0:g.selectInteractions)!=null&&y.SelectLayerClickInteraction),O=L||JSON.stringify(f)!==JSON.stringify(a.value),x=(k=c.value)==null?void 0:k.value;O&&x&&typeof x=="object"&&(f.default=JSON.parse(JSON.stringify(x))),L&&(a.value=null,await D()),a.value=f}}l===v&&await j({enableCompare:u,selectedStac:r,jsonformSchema:a,isProcessed:n,processResults:i,loading:m,isPolling:p,mapElement:o.value})})};function ve(r,a,c,n){const i=W(()=>n(),200);N(c,p=>{var o;r.value=((o=p==null?void 0:p.options)==null?void 0:o.execute)||!1});const m=N([r,a],async([p,o],[l,u])=>{var v,h;u&&u.removeEventListener("change",i),p&&o&&(o.removeEventListener("change",i),o.addEventListener("change",i),(v=o.editor)!=null&&v.ready?i():(await D(),(h=o.editor)!=null&&h.ready&&i()))},{immediate:!0});me(()=>{a.value&&a.value.removeEventListener("change",i),m()})}var he="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{scrollbar-gutter:stable;flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-content>.eodash-chart-wrapper:not(.fit-x-layout){flex:1 1 0;height:auto;min-height:180px}.eodash-process-content>.eodash-chart-wrapper.fit-x-layout{flex:none;height:auto!important}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",ye={ref:"container",class:"eodash-process-container"},ge={class:"eodash-process-content"},xe=[".schema"],be={key:0,class:"eodash-process-actions"},et=V({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const a=C(!1),c=C(null),n=ce("jsonformEl");N(n,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const s=document.createElement("style");s.id=t,s.textContent=`
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
          `,s.shadowRoot.appendChild(b),!0}return!1};if(!d()){const s=new MutationObserver(()=>{d()&&s.disconnect()});s.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const i=J(()=>{var e;return(e=v.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=C(!1),p=C(!1),o=C(!1),l=C([]),u=J(()=>!p.value&&!!c.value&&!!n.value),{selectedStac:v,selectedCompareStac:h}=A(U()),g=r.enableCompare?h:v,y=r.enableCompare?F:z,k=r.enableCompare?K:q,f=r.enableCompare?ie:le,L=J(()=>{var e;return k.value+((e=y.value)==null?void 0:e.id)+JSON.stringify(c.value)});fe({selectedStac:g,mapElement:y,jsonformSchema:c,jsonformEl:n,isProcessed:a,processResults:l,loading:m,isPolling:o});const O=()=>{l.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=g.value)==null?void 0:d.id)+"_process_results.json",oe(t,e)})},x=async()=>{var t;if(ee(c.value).some(d=>{var E,b;const s=(b=(E=n.value)==null?void 0:E.value)==null?void 0:b[d];return!s||Array.isArray(s)&&!s.length})){a.value=!1;const d=r.enableCompare?X:$;d.value=null;return}const e=(t=n.value)==null?void 0:t.editor.validate();if(e!=null&&e.length){console.warn("[eodash] Form validation failed",e);return}l.value=[],await se({jobs:f,selectedStac:g,jsonformEl:n,jsonformSchema:c,loading:m,isPolling:o,processResults:l,mapElement:y.value}),a.value=!0,i.value&&te(f,k.value)};return ve(p,n,c,x),(e,t)=>(w(),R("div",ye,[de("div",ge,[pe(ne,{"map-element":S(y),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),c.value?(w(),R("eox-jsonform",{key:L.value,ref_key:"jsonformEl",ref:n,".schema":c.value},null,40,xe)):_("v-if",!0),S(G)?_("v-if",!0):(w(),I(re,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||l.value.length&&a.value&&!i.value?(w(),R("div",be,[u.value?(w(),I(P,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[S(M)],density:"comfortable",size:"small",onClick:x},{default:B(()=>[...t[0]||(t[0]=[T(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):_("v-if",!0),l.value.length&&a.value&&!i.value?(w(),I(P,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(Y)],size:"small",density:"comfortable",onClick:O},{default:B(()=>[...t[1]||(t[1]=[T(" Download ",-1)])]),_:1},8,["append-icon"])):_("v-if",!0)])):_("v-if",!0)],512))}},[["styles",[he]]]);export{et as default};
