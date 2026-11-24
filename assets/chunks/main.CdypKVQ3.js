var No=Object.defineProperty;var wn=t=>{throw TypeError(t)};var Bo=(t,e,i)=>e in t?No(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var q=(t,e,i)=>Bo(t,typeof e!="symbol"?e+"":e,i),Di=(t,e,i)=>e.has(t)||wn("Cannot "+i);var y=(t,e,i)=>(Di(t,e,"read from private field"),i?i.call(t):e.get(t)),V=(t,e,i)=>e.has(t)?wn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),W=(t,e,i,n)=>(Di(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),O=(t,e,i)=>(Di(t,e,"access private method"),i);import{x as m,E as Jt,a as Ct,i as Fi}from"./lit-element.CIht5NN8.js";import{n as B}from"./when.BR7zwNJC.js";import{c as ko}from"./repeat.9Pq2frlr.js";import{l as ji}from"./live.BZd1J1mE.js";import{e as Ki,a as Uo}from"./addCommonStyleSheet.BIZSB8qW.js";import{f as Se,e as xe,s as qi,r as Fo,c as jo,d as Xe,a as qo,b as Zo,g as zo,h as Xo}from"./geoZarrRangeHelpers.QYOL8klf.js";import{o as Yo}from"./unsafe-html.RlppLW26.js";import{o as ke}from"./map.DiiNQ3pp.js";import{X as Wo}from"./XYZ.CH00JRBK.js";import{c as Le,g as Go}from"./commonjsHelpers.BosuxZz1.js";import{_ as On}from"./index.BUIxO2d3.js";import{al as Ie}from"./intersectsextent.CzUWy5MP.js";import{g as Jo}from"./getElement.COiK8z0h.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./util.Dhne-uB2.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var _=t=>t!==void 0,Pn=(t,e,i)=>e in t?t[e]:t[e]=i;const Ee={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class Ko{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,"application/xml")}getAllTextContent(e,i){return $i(e,i).join("")}}function $i(t,e){return Nn(t,e,[]).join("")}function Nn(t,e,i){if(t.nodeType===Ee.CDATA_SECTION||t.nodeType===Ee.TEXT)e?i.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(t.nodeValue);else{var n;for(n=t.firstChild;n;n=n.nextSibling)Nn(n,e,i)}return i}function Qo(t,e,i,n){for(var o=tr(e);o;o=er(o)){var r=o.namespaceURI||null,a=t[r];if(_(a)){var s=a[o.localName];_(s)&&s.call(n,o,i)}}}function tr(t){let e=t.firstElementChild||t.firstChild;for(;e&&e.nodeType!==Ee.ELEMENT;)e=e.nextSibling;return e}function er(t){let e=t.nextElementSibling||t.nextSibling;for(;e&&e.nodeType!==Ee.ELEMENT;)e=e.nextSibling;return e}function it(t,e,i){return ir(t,e,i)}function ir(t,e,i){var n=_(i)?i:{},o,r;for(o=0,r=t.length;o<r;++o)n[t[o]]=e;return n}function Bn(t,e){return function(i,n){var o=t.call(_(e)?e:this,i,n);if(_(o)){var r=n[n.length-1];r.push(o)}}}function G(t,e,i,n,o){return n.push(t),Qo(e,i,n,o),n.pop()}function v(t,e,i){return function(n,o){let r=t.call(_(i)?i:this,n,o);if(_(r)){var a=o[o.length-1],s=_(e)?e:n.localName;a[s]=r}}}function pt(t,e,i){return function(n,o){var r=t.call(_(i)?i:this,n,o);if(_(r)){var a=o[o.length-1],s=_(e)?e:n.localName,l=Pn(a,s,[]);l.push(r)}}}const nr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function or(t){return t.replace(nr,"")}function Kt(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return _(e[1])||!1}function ne(t){return Mt($i(t,!1))}function Mt(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function _i(t){return Ye($i(t,!1))}function Ye(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function L(t){return or($i(t,!1))}const rr="http://www.w3.org/1999/xlink";function Qi(t){return t.getAttributeNS(rr,"href")}function ar(t,e){return G({},Lr,t,e)}function kn(t){return[Mt(t.getAttribute("minx")),Mt(t.getAttribute("miny")),Mt(t.getAttribute("maxx")),Mt(t.getAttribute("maxy"))]}function sr(t,e){const i=kn(t),n=[Mt(t.getAttribute("resx")),Mt(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:i,res:n}}function lr(t,e){const i=kn(t);if(!(!_(i[0])||!_(i[1])||!_(i[2])||!_(i[3])))return i}function cr(t,e){const i=parseFloat(t.getAttribute("min")),n=parseFloat(t.getAttribute("max"));return{min:i,max:n}}function ur(t,e){const i=G({},Ir,t,e);if(!_(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!_(n)||!_(o)||!_(r)||!_(a)))return[n,o,r,a]}function dr(t,e){return G({},Dr,t,e)}function hr(t,e){return G({},_r,t,e)}function fr(t,e){return G({},Vr,t,e)}function pr(t,e){return G({},Tr,t,e)}function gr(t,e){return G({},Rr,t,e)}function mr(t,e){return G([],Mr,t,e)}function yr(t,e){const i=Kt(t.getAttribute("queryable"));return G({queryable:_(i)?i:!1},jn,t,e)}function br(t,e){var i=e[e.length-1];const n=G({},jn,t,e);if(!_(n))return;let o=Kt(t.getAttribute("queryable"));_(o)||(o=i.queryable),n.queryable=_(o)?o:!1;let r=Ye(t.getAttribute("cascaded"));_(r)||(r=i.cascaded),n.cascaded=r;let a=Kt(t.getAttribute("opaque"));_(a)||(a=i.opaque),n.opaque=_(a)?a:!1;let s=Kt(t.getAttribute("noSubsets"));_(s)||(s=i.noSubsets),n.noSubsets=_(s)?s:!1;let l=Mt(t.getAttribute("fixedWidth"));_(l)||(l=i.fixedWidth),n.fixedWidth=l;let c=Mt(t.getAttribute("fixedHeight"));_(c)||(c=i.fixedHeight),n.fixedHeight=c;const d=["Style","CRS","AuthorityURL"];for(let p=0,g=d.length;p<g;p++){const f=d[p],b=i[f];if(_(b)){let x=Pn(n,f,[]);x=x.concat(b),n[f]=x}}const u=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,g=u.length;p<g;p++){const f=u[p],b=n[f];if(!_(b)){const x=i[f];n[f]=x}}return n}function vr(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Kt(t.getAttribute("multipleValues")),nearestValue:Kt(t.getAttribute("nearestValue")),current:Kt(t.getAttribute("current")),values:L(t)}}function It(t,e){return G({},kr,t,e)}function wr(t,e){return G({},Hr,t,e)}function Sr(t,e){return G({},Pr,t,e)}function xr(t,e){return G({},Nr,t,e)}function Vi(t,e){return G({},Or,t,e)}function Un(t,e){var i=It(t,e);if(_(i)){const n=[Ye(t.getAttribute("width")),Ye(t.getAttribute("height"))];return i.size=n,i}}function Er(t,e){var i=It(t,e);if(_(i))return i.name=t.getAttribute("name"),i}function $r(t,e){var i=It(t,e);if(_(i))return i.type=t.getAttribute("type"),i}function Ar(t,e){return G({},Br,t,e)}function Fn(t,e){return G([],Ur,t,e)}const nt=[null,"http://www.opengis.net/wms"],Cr=it(nt,{Service:v(hr),Capability:v(dr)}),Dr=it(nt,{Request:v(wr),Exception:v(mr),Layer:v(yr)}),_r=it(nt,{Name:v(L),Title:v(L),Abstract:v(L),KeywordList:v(Fn),OnlineResource:v(Qi),ContactInformation:v(fr),Fees:v(L),AccessConstraints:v(L),LayerLimit:v(_i),MaxWidth:v(_i),MaxHeight:v(_i)}),Vr=it(nt,{ContactPersonPrimary:v(pr),ContactPosition:v(L),ContactAddress:v(gr),ContactVoiceTelephone:v(L),ContactFacsimileTelephone:v(L),ContactElectronicMailAddress:v(L)}),Tr=it(nt,{ContactPerson:v(L),ContactOrganization:v(L)}),Rr=it(nt,{AddressType:v(L),Address:v(L),City:v(L),StateOrProvince:v(L),PostCode:v(L),Country:v(L)}),Mr=it(nt,{Format:Bn(L)}),jn=it(nt,{Name:v(L),Title:v(L),Abstract:v(L),KeywordList:v(Fn),CRS:pt(L),SRS:pt(L),EX_GeographicBoundingBox:v(ur),LatLonBoundingBox:v(lr),BoundingBox:pt(sr),Dimension:pt(vr),Attribution:v(ar),AuthorityURL:pt(Er),Identifier:pt(L),MetadataURL:pt($r),DataURL:pt(It),FeatureListURL:pt(It),Style:pt(Ar),MinScaleDenominator:v(ne),MaxScaleDenominator:v(ne),ScaleHint:v(cr),Layer:pt(br)}),Lr=it(nt,{Title:v(L),OnlineResource:v(Qi),LogoURL:v(Un)}),Ir=it(nt,{westBoundLongitude:v(ne),eastBoundLongitude:v(ne),southBoundLatitude:v(ne),northBoundLatitude:v(ne)}),Hr=it(nt,{GetCapabilities:v(Vi),GetMap:v(Vi),GetFeatureInfo:v(Vi)}),Or=it(nt,{Format:pt(L),DCPType:pt(Sr)}),Pr=it(nt,{HTTP:v(xr)}),Nr=it(nt,{Get:v(It),Post:v(It)}),Br=it(nt,{Name:v(L),Title:v(L),Abstract:v(L),LegendURL:pt(Un),StyleSheetURL:v(It),StyleURL:v(It)}),kr=it(nt,{Format:v(L),OnlineResource:v(Qi)}),Ur=it(nt,{Keyword:Bn(L)});class Fr{constructor(e,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new Ko(i),this._data=e}data(e){return this._data=e,this}toJSON(e){return e=e||this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let i=e.firstChild;i;i=i.nextSibling)if(i.nodeType==Ee.ELEMENT)return this.readFromNode(i);return null}readFromNode(e){return this.version=e.getAttribute("version"),G({version:this.version},Cr,e,[])||null}}async function jr(t){let e=new URL(t),i=e.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=e.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Fr(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function tn(t){const e=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return e.test(t)?"TileWMS":i.test(t)?"XYZ":!1}function qr(t){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),n=tn(t);return!!(t&&i&&n)}function qn(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Zr(t){try{return JSON.parse(qn(t)),!!t}catch{return!1}}function Ti(t,e){const i=new URL(t).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):Array.isArray(s)?(i.delete(a),s.forEach(l=>{i.append(a,l)})):i.set(a,s)});const n=t.split("?")[0],o=i.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Sn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,n)}return i}function Vt(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Sn(Object(i),!0).forEach(function(n){zr(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Sn(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Ue(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ue=function(e){return typeof e}:Ue=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ue(t)}function zr(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ht(){return Ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Ht.apply(this,arguments)}function Xr(t,e){if(t==null)return{};var i={},n=Object.keys(t),o,r;for(r=0;r<n.length;r++)o=n[r],!(e.indexOf(o)>=0)&&(i[o]=t[o]);return i}function Yr(t,e){if(t==null)return{};var i=Xr(t,e),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var Wr="1.15.6";function Lt(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Ot=Lt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),De=Lt(/Edge/i),xn=Lt(/firefox/i),ge=Lt(/safari/i)&&!Lt(/chrome/i)&&!Lt(/android/i),en=Lt(/iP(ad|od|hone)/i),Zn=Lt(/chrome/i)&&Lt(/android/i),zn={capture:!1,passive:!1};function R(t,e,i){t.addEventListener(e,i,!Ot&&zn)}function T(t,e,i){t.removeEventListener(e,i,!Ot&&zn)}function We(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function Xn(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function At(t,e,i,n){if(t){i=i||document;do{if(e!=null&&(e[0]===">"?t.parentNode===i&&We(t,e):We(t,e))||n&&t===i)return t;if(t===i)break}while(t=Xn(t))}return null}var En=/\s+/g;function yt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(En," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(En," ")}}function E(t,e,i){var n=t&&t.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),e===void 0?i:i[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=i+(typeof i=="string"?"":"px")}}function re(t,e){var i="";if(typeof t=="string")i=t;else do{var n=E(t,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Yn(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function _t(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,i,n,o){if(!(!t.getBoundingClientRect&&t!==window)){var r,a,s,l,c,d,u;if(t!==window&&t.parentNode&&t!==_t()?(r=t.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,c=r.right,d=r.height,u=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Ot))do if(o&&o.getBoundingClientRect&&(E(o,"transform")!=="none"||i&&E(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(E(o,"border-top-width")),s-=p.left+parseInt(E(o,"border-left-width")),l=a+r.height,c=s+r.width;break}while(o=o.parentNode);if(n&&t!==window){var g=re(o||t),f=g&&g.a,b=g&&g.d;g&&(a/=b,s/=f,u/=f,d/=b,l=a+d,c=s+u)}return{top:a,left:s,bottom:l,right:c,width:u,height:d}}}function $n(t,e,i){for(var n=qt(t,!0),o=X(t)[e];n;){var r=X(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===_t())break;n=qt(n,!1)}return!1}function le(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==$.ghost&&(n||a[r]!==$.dragged)&&At(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function nn(t,e){for(var i=t.lastElementChild;i&&(i===$.ghost||E(i,"display")==="none"||e&&!We(i,e));)i=i.previousElementSibling;return i||null}function xt(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==$.clone&&(!e||We(t,e))&&i++;return i}function An(t){var e=0,i=0,n=_t();if(t)do{var o=re(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function Gr(t,e){for(var i in t)if(t.hasOwnProperty(i)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i)}return-1}function qt(t,e){if(!t||!t.getBoundingClientRect)return _t();var i=t,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=E(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return _t();if(n||e)return i;n=!0}}while(i=i.parentNode);return _t()}function Jr(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function Ri(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var me;function Wn(t,e){return function(){if(!me){var i=arguments,n=this;i.length===1?t.call(n,i[0]):t.apply(n,i),me=setTimeout(function(){me=void 0},e)}}}function Kr(){clearTimeout(me),me=void 0}function Gn(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function Jn(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function Kn(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(!(!At(o,e.draggable,t,!1)||o.animated||o===i)){var c=X(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,c.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,c.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var gt="Sortable"+new Date().getTime();function Qr(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(E(o,"display")==="none"||o===$.ghost)){t.push({target:o,rect:X(o)});var r=Vt({},t[t.length-1].rect);if(o.thisAnimationDuration){var a=re(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){t.push(n)},removeAnimationState:function(n){t.splice(Gr(t,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var r=!1,a=0;t.forEach(function(s){var l=0,c=s.target,d=c.fromRect,u=X(c),p=c.prevFromRect,g=c.prevToRect,f=s.rect,b=re(c,!0);b&&(u.top-=b.f,u.left-=b.e),c.toRect=u,c.thisAnimationDuration&&Ri(p,u)&&!Ri(d,u)&&(f.top-u.top)/(f.left-u.left)===(d.top-u.top)/(d.left-u.left)&&(l=ea(f,p,g,o.options)),Ri(u,d)||(c.prevFromRect=d,c.prevToRect=u,l||(l=o.options.animation),o.animate(c,f,u,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),r?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),t=[]},animate:function(n,o,r,a){if(a){E(n,"transition",""),E(n,"transform","");var s=re(this.el),l=s&&s.a,c=s&&s.d,d=(o.left-r.left)/(l||1),u=(o.top-r.top)/(c||1);n.animatingX=!!d,n.animatingY=!!u,E(n,"transform","translate3d("+d+"px,"+u+"px,0)"),this.forRepaintDummy=ta(n),E(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),E(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){E(n,"transition",""),E(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function ta(t){return t.offsetWidth}function ea(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}var Qt=[],Mi={initializeByDefault:!0},_e={mount:function(e){for(var i in Mi)Mi.hasOwnProperty(i)&&!(i in e)&&(e[i]=Mi[i]);Qt.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Qt.push(e)},pluginEvent:function(e,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=e+"Global";Qt.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](Vt({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][e]&&i[a.pluginName][e](Vt({sortable:i},n)))})},initializePlugins:function(e,i,n,o){Qt.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var c=new s(e,i,e.options);c.sortable=e,c.options=e.options,e[l]=c,Ht(n,c.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,i){var n={};return Qt.forEach(function(o){typeof o.eventProperties=="function"&&Ht(n,o.eventProperties.call(i[o.pluginName],e))}),n},modifyOption:function(e,i,n){var o;return Qt.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(e[r.pluginName],n))}),o}};function ia(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,u=t.newDraggableIndex,p=t.originalEvent,g=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[gt],!!e){var b,x=e.options,w="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Ot&&!De?b=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(b=document.createEvent("Event"),b.initEvent(n,!0,!0)),b.to=a||i,b.from=s||i,b.item=o||i,b.clone=r,b.oldIndex=l,b.newIndex=c,b.oldDraggableIndex=d,b.newDraggableIndex=u,b.originalEvent=p,b.pullMode=g?g.lastPutMode:void 0;var A=Vt(Vt({},f),_e.getEventProperties(n,e));for(var S in A)b[S]=A[S];i&&i.dispatchEvent(b),x[w]&&x[w].call(e,b)}}var na=["evt"],ft=function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=Yr(n,na);_e.pluginEvent.bind($)(e,i,Vt({dragEl:h,parentEl:Z,ghostEl:C,rootEl:N,nextEl:Yt,lastDownEl:Fe,cloneEl:U,cloneHidden:Ft,dragStarted:he,putSortable:tt,activeSortable:$.active,originalEvent:o,oldIndex:oe,oldDraggableIndex:ye,newIndex:bt,newDraggableIndex:Ut,hideGhostForTarget:io,unhideGhostForTarget:no,cloneNowHidden:function(){Ft=!0},cloneNowShown:function(){Ft=!1},dispatchSortableEvent:function(s){dt({sortable:i,name:s,originalEvent:o})}},r))};function dt(t){ia(Vt({putSortable:tt,cloneEl:U,targetEl:h,rootEl:N,oldIndex:oe,oldDraggableIndex:ye,newIndex:bt,newDraggableIndex:Ut},t))}var h,Z,C,N,Yt,Fe,U,Ft,oe,bt,ye,Ut,He,tt,ee=!1,Ge=!1,Je=[],zt,$t,Li,Ii,Cn,Dn,he,te,be,ve=!1,Oe=!1,je,st,Hi=[],Zi=!1,Ke=[],Ai=typeof document<"u",Pe=en,_n=De||Ot?"cssFloat":"float",oa=Ai&&!Zn&&!en&&"draggable"in document.createElement("div"),Qn=function(){if(Ai){if(Ot)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),to=function(e,i){var n=E(e),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=le(e,0,i),a=le(e,1,i),s=r&&E(r),l=a&&E(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+X(r).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var u=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===u)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=o&&n[_n]==="none"||a&&n[_n]==="none"&&c+d>o)?"vertical":"horizontal"},ra=function(e,i,n){var o=n?e.left:e.top,r=n?e.right:e.bottom,a=n?e.width:e.height,s=n?i.left:i.top,l=n?i.right:i.bottom,c=n?i.width:i.height;return o===s||r===l||o+a/2===s+c/2},aa=function(e,i){var n;return Je.some(function(o){var r=o[gt].options.emptyInsertThreshold;if(!(!r||nn(o))){var a=X(o),s=e>=a.left-r&&e<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},eo=function(e){function i(r,a){return function(s,l,c,d){var u=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||u))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,c,d),a)(s,l,c,d);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=e.group;(!o||Ue(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,e.group=n},io=function(){!Qn&&C&&E(C,"display","none")},no=function(){!Qn&&C&&E(C,"display","")};Ai&&!Zn&&document.addEventListener("click",function(t){if(Ge)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ge=!1,!1},!0);var Xt=function(e){if(h){e=e.touches?e.touches[0]:e;var i=aa(e.clientX,e.clientY);if(i){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[gt]._onDragOver(n)}}},sa=function(e){h&&h.parentNode[gt]._isOutsideThisEl(e.target)};function $(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Ht({},e),t[gt]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return to(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:$.supportPointer!==!1&&"PointerEvent"in window&&(!ge||en),emptyInsertThreshold:5};_e.initializePlugins(this,t,i);for(var n in i)!(n in e)&&(e[n]=i[n]);eo(e);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=e.forceFallback?!1:oa,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?R(t,"pointerdown",this._onTapStart):(R(t,"mousedown",this._onTapStart),R(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(R(t,"dragover",this),R(t,"dragenter",this)),Je.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Ht(this,Qr())}$.prototype={constructor:$,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(te=null)},_getDirection:function(e,i){return typeof this.options.direction=="function"?this.options.direction.call(this,e,i,h):this.options.direction},_onTapStart:function(e){if(e.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,d=o.filter;if(ga(n),!h&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||o.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&ge&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=At(l,o.draggable,n,!1),!(l&&l.animated)&&Fe!==l)){if(oe=xt(l),ye=xt(l,o.draggable),typeof d=="function"){if(d.call(this,e,l,this)){dt({sortable:i,rootEl:c,name:"filter",targetEl:l,toEl:n,fromEl:n}),ft("filter",i,{evt:e}),r&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(u){if(u=At(c,u.trim(),n,!1),u)return dt({sortable:i,rootEl:u,name:"filter",targetEl:l,fromEl:n,toEl:n}),ft("filter",i,{evt:e}),!0}),d)){r&&e.preventDefault();return}o.handle&&!At(c,o.handle,n,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!h&&n.parentNode===r){var c=X(n);if(N=r,h=n,Z=h.parentNode,Yt=h.nextSibling,Fe=n,He=a.group,$.dragged=h,zt={target:h,clientX:(i||e).clientX,clientY:(i||e).clientY},Cn=zt.clientX-c.left,Dn=zt.clientY-c.top,this._lastX=(i||e).clientX,this._lastY=(i||e).clientY,h.style["will-change"]="all",l=function(){if(ft("delayEnded",o,{evt:e}),$.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!xn&&o.nativeDraggable&&(h.draggable=!0),o._triggerDragStart(e,i),dt({sortable:o,name:"choose",originalEvent:e}),yt(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){Yn(h,d.trim(),Oi)}),R(s,"dragover",Xt),R(s,"mousemove",Xt),R(s,"touchmove",Xt),a.supportPointer?(R(s,"pointerup",o._onDrop),!this.nativeDraggable&&R(s,"pointercancel",o._onDrop)):(R(s,"mouseup",o._onDrop),R(s,"touchend",o._onDrop),R(s,"touchcancel",o._onDrop)),xn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),ft("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(De||Ot))){if($.eventCanceled){this._onDrop();return}a.supportPointer?(R(s,"pointerup",o._disableDelayedDrag),R(s,"pointercancel",o._disableDelayedDrag)):(R(s,"mouseup",o._disableDelayedDrag),R(s,"touchend",o._disableDelayedDrag),R(s,"touchcancel",o._disableDelayedDrag)),R(s,"mousemove",o._delayedDragTouchMoveHandler),R(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&R(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var i=e.touches?e.touches[0]:e;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&Oi(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;T(e,"mouseup",this._disableDelayedDrag),T(e,"touchend",this._disableDelayedDrag),T(e,"touchcancel",this._disableDelayedDrag),T(e,"pointerup",this._disableDelayedDrag),T(e,"pointercancel",this._disableDelayedDrag),T(e,"mousemove",this._delayedDragTouchMoveHandler),T(e,"touchmove",this._delayedDragTouchMoveHandler),T(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,i){i=i||e.pointerType=="touch"&&e,!this.nativeDraggable||i?this.options.supportPointer?R(document,"pointermove",this._onTouchMove):i?R(document,"touchmove",this._onTouchMove):R(document,"mousemove",this._onTouchMove):(R(h,"dragend",this),R(N,"dragstart",this._onDragStart));try{document.selection?qe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,i){if(ee=!1,N&&h){ft("dragStarted",this,{evt:i}),this.nativeDraggable&&R(document,"dragover",sa);var n=this.options;!e&&yt(h,n.dragClass,!1),yt(h,n.ghostClass,!0),$.active=this,e&&this._appendGhost(),dt({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if($t){this._lastX=$t.clientX,this._lastY=$t.clientY,io();for(var e=document.elementFromPoint($t.clientX,$t.clientY),i=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint($t.clientX,$t.clientY),e!==i);)i=e;if(h.parentNode[gt]._isOutsideThisEl(e),i)do{if(i[gt]){var n=void 0;if(n=i[gt]._onDragOver({clientX:$t.clientX,clientY:$t.clientY,target:e,rootEl:i}),n&&!this.options.dragoverBubble)break}e=i}while(i=Xn(i));no()}},_onTouchMove:function(e){if(zt){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=e.touches?e.touches[0]:e,a=C&&re(C,!0),s=C&&a&&a.a,l=C&&a&&a.d,c=Pe&&st&&An(st),d=(r.clientX-zt.clientX+o.x)/(s||1)+(c?c[0]-Hi[0]:0)/(s||1),u=(r.clientY-zt.clientY+o.y)/(l||1)+(c?c[1]-Hi[1]:0)/(l||1);if(!$.active&&!ee){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(C){a?(a.e+=d-(Li||0),a.f+=u-(Ii||0)):a={a:1,b:0,c:0,d:1,e:d,f:u};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");E(C,"webkitTransform",p),E(C,"mozTransform",p),E(C,"msTransform",p),E(C,"transform",p),Li=d,Ii=u,$t=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!C){var e=this.options.fallbackOnBody?document.body:N,i=X(h,!0,Pe,!0,e),n=this.options;if(Pe){for(st=e;E(st,"position")==="static"&&E(st,"transform")==="none"&&st!==document;)st=st.parentNode;st!==document.body&&st!==document.documentElement?(st===document&&(st=_t()),i.top+=st.scrollTop,i.left+=st.scrollLeft):st=_t(),Hi=An(st)}C=h.cloneNode(!0),yt(C,n.ghostClass,!1),yt(C,n.fallbackClass,!0),yt(C,n.dragClass,!0),E(C,"transition",""),E(C,"transform",""),E(C,"box-sizing","border-box"),E(C,"margin",0),E(C,"top",i.top),E(C,"left",i.left),E(C,"width",i.width),E(C,"height",i.height),E(C,"opacity","0.8"),E(C,"position",Pe?"absolute":"fixed"),E(C,"zIndex","100000"),E(C,"pointerEvents","none"),$.ghost=C,e.appendChild(C),E(C,"transform-origin",Cn/parseInt(C.style.width)*100+"% "+Dn/parseInt(C.style.height)*100+"%")}},_onDragStart:function(e,i){var n=this,o=e.dataTransfer,r=n.options;if(ft("dragStart",this,{evt:e}),$.eventCanceled){this._onDrop();return}ft("setupClone",this),$.eventCanceled||(U=Jn(h),U.removeAttribute("id"),U.draggable=!1,U.style["will-change"]="",this._hideClone(),yt(U,this.options.chosenClass,!1),$.clone=U),n.cloneId=qe(function(){ft("clone",n),!$.eventCanceled&&(n.options.removeCloneOnHide||N.insertBefore(U,h),n._hideClone(),dt({sortable:n,name:"clone"}))}),!i&&yt(h,r.dragClass,!0),i?(Ge=!0,n._loopId=setInterval(n._emulateDragOver,50)):(T(document,"mouseup",n._onDrop),T(document,"touchend",n._onDrop),T(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,h)),R(document,"drop",n),E(h,"transform","translateZ(0)")),ee=!0,n._dragStartId=qe(n._dragStarted.bind(n,i,e)),R(document,"selectstart",n),he=!0,window.getSelection().removeAllRanges(),ge&&E(document.body,"user-select","none")},_onDragOver:function(e){var i=this.el,n=e.target,o,r,a,s=this.options,l=s.group,c=$.active,d=He===l,u=s.sort,p=tt||c,g,f=this,b=!1;if(Zi)return;function x(Pt,Ve){ft(Pt,f,Vt({evt:e,isOwner:d,axis:g?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:u,fromSortable:p,target:n,completed:A,onMove:function(ue,Te){return Ne(N,i,h,o,ue,X(ue),e,Te)},changed:S},Ve))}function w(){x("dragOverAnimationCapture"),f.captureAnimationState(),f!==p&&p.captureAnimationState()}function A(Pt){return x("dragOverCompleted",{insertion:Pt}),Pt&&(d?c._hideClone():c._showClone(f),f!==p&&(yt(h,tt?tt.options.ghostClass:c.options.ghostClass,!1),yt(h,s.ghostClass,!0)),tt!==f&&f!==$.active?tt=f:f===$.active&&tt&&(tt=null),p===f&&(f._ignoreWhileAnimating=n),f.animateAll(function(){x("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===h&&!h.animated||n===i&&!n.animated)&&(te=null),!s.dragoverBubble&&!e.rootEl&&n!==document&&(h.parentNode[gt]._isOutsideThisEl(e.target),!Pt&&Xt(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function S(){bt=xt(h),Ut=xt(h,s.draggable),dt({sortable:f,name:"change",toEl:i,newIndex:bt,newDraggableIndex:Ut,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=At(n,s.draggable,i,!0),x("dragOver"),$.eventCanceled)return b;if(h.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||f._ignoreWhileAnimating===n)return A(!1);if(Ge=!1,c&&!s.disabled&&(d?u||(a=Z!==N):tt===this||(this.lastPutMode=He.checkPull(this,c,h,e))&&l.checkPut(this,c,h,e))){if(g=this._getDirection(e,n)==="vertical",o=X(h),x("dragOverValid"),$.eventCanceled)return b;if(a)return Z=N,w(),this._hideClone(),x("revert"),$.eventCanceled||(Yt?N.insertBefore(h,Yt):N.appendChild(h)),A(!0);var M=nn(i,s.draggable);if(!M||da(e,g,this)&&!M.animated){if(M===h)return A(!1);if(M&&i===e.target&&(n=M),n&&(r=X(n)),Ne(N,i,h,o,n,r,e,!!n)!==!1)return w(),M&&M.nextSibling?i.insertBefore(h,M.nextSibling):i.appendChild(h),Z=i,S(),A(!0)}else if(M&&ua(e,g,this)){var H=le(i,0,s,!0);if(H===h)return A(!1);if(n=H,r=X(n),Ne(N,i,h,o,n,r,e,!1)!==!1)return w(),i.insertBefore(h,H),Z=i,S(),A(!0)}else if(n.parentNode===i){r=X(n);var D=0,k,J=h.parentNode!==i,j=!ra(h.animated&&h.toRect||o,n.animated&&n.toRect||r,g),Et=g?"top":"left",ot=$n(n,"top","top")||$n(h,"top","top"),I=ot?ot.scrollTop:void 0;te!==n&&(k=r[Et],ve=!1,Oe=!j&&s.invertSwap||J),D=ha(e,n,r,g,j?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,Oe,te===n);var Y;if(D!==0){var K=xt(h);do K-=D,Y=Z.children[K];while(Y&&(E(Y,"display")==="none"||Y===C))}if(D===0||Y===n)return A(!1);te=n,be=D;var Dt=n.nextElementSibling,ht=!1;ht=D===1;var Zt=Ne(N,i,h,o,n,r,e,ht);if(Zt!==!1)return(Zt===1||Zt===-1)&&(ht=Zt===1),Zi=!0,setTimeout(ca,30),w(),ht&&!Dt?i.appendChild(h):n.parentNode.insertBefore(h,ht?Dt:n),ot&&Gn(ot,0,I-ot.scrollTop),Z=h.parentNode,k!==void 0&&!Oe&&(je=Math.abs(k-X(n)[Et])),S(),A(!0)}if(i.contains(h))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){T(document,"mousemove",this._onTouchMove),T(document,"touchmove",this._onTouchMove),T(document,"pointermove",this._onTouchMove),T(document,"dragover",Xt),T(document,"mousemove",Xt),T(document,"touchmove",Xt)},_offUpEvents:function(){var e=this.el.ownerDocument;T(e,"mouseup",this._onDrop),T(e,"touchend",this._onDrop),T(e,"pointerup",this._onDrop),T(e,"pointercancel",this._onDrop),T(e,"touchcancel",this._onDrop),T(document,"selectstart",this)},_onDrop:function(e){var i=this.el,n=this.options;if(bt=xt(h),Ut=xt(h,n.draggable),ft("drop",this,{evt:e}),Z=h&&h.parentNode,bt=xt(h),Ut=xt(h,n.draggable),$.eventCanceled){this._nulling();return}ee=!1,Oe=!1,ve=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),zi(this.cloneId),zi(this._dragStartId),this.nativeDraggable&&(T(document,"drop",this),T(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ge&&E(document.body,"user-select",""),E(h,"transform",""),e&&(he&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),C&&C.parentNode&&C.parentNode.removeChild(C),(N===Z||tt&&tt.lastPutMode!=="clone")&&U&&U.parentNode&&U.parentNode.removeChild(U),h&&(this.nativeDraggable&&T(h,"dragend",this),Oi(h),h.style["will-change"]="",he&&!ee&&yt(h,tt?tt.options.ghostClass:this.options.ghostClass,!1),yt(h,this.options.chosenClass,!1),dt({sortable:this,name:"unchoose",toEl:Z,newIndex:null,newDraggableIndex:null,originalEvent:e}),N!==Z?(bt>=0&&(dt({rootEl:Z,name:"add",toEl:Z,fromEl:N,originalEvent:e}),dt({sortable:this,name:"remove",toEl:Z,originalEvent:e}),dt({rootEl:Z,name:"sort",toEl:Z,fromEl:N,originalEvent:e}),dt({sortable:this,name:"sort",toEl:Z,originalEvent:e})),tt&&tt.save()):bt!==oe&&bt>=0&&(dt({sortable:this,name:"update",toEl:Z,originalEvent:e}),dt({sortable:this,name:"sort",toEl:Z,originalEvent:e})),$.active&&((bt==null||bt===-1)&&(bt=oe,Ut=ye),dt({sortable:this,name:"end",toEl:Z,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){ft("nulling",this),N=h=Z=C=Yt=U=Fe=Ft=zt=$t=he=bt=Ut=oe=ye=te=be=tt=He=$.dragged=$.ghost=$.clone=$.active=null,Ke.forEach(function(e){e.checked=!0}),Ke.length=Li=Ii=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":h&&(this._onDragOver(e),la(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],At(i,a.draggable,this.el,!1)&&e.push(i.getAttribute(a.dataIdAttr)||pa(i));return e},sort:function(e,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];At(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,i){return At(e,i||this.options.draggable,this.el,!1)},option:function(e,i){var n=this.options;if(i===void 0)return n[e];var o=_e.modifyOption(this,e,i);typeof o<"u"?n[e]=o:n[e]=i,e==="group"&&eo(n)},destroy:function(){ft("destroy",this);var e=this.el;e[gt]=null,T(e,"mousedown",this._onTapStart),T(e,"touchstart",this._onTapStart),T(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(T(e,"dragover",this),T(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Je.splice(Je.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Ft){if(ft("hideClone",this),$.eventCanceled)return;E(U,"display","none"),this.options.removeCloneOnHide&&U.parentNode&&U.parentNode.removeChild(U),Ft=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Ft){if(ft("showClone",this),$.eventCanceled)return;h.parentNode==N&&!this.options.group.revertClone?N.insertBefore(U,h):Yt?N.insertBefore(U,Yt):N.appendChild(U),this.options.group.revertClone&&this.animate(h,U),E(U,"display",""),Ft=!1}}};function la(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Ne(t,e,i,n,o,r,a,s){var l,c=t[gt],d=c.options.onMove,u;return window.CustomEvent&&!Ot&&!De?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||X(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),d&&(u=d.call(c,l,a)),u}function Oi(t){t.draggable=!1}function ca(){Zi=!1}function ua(t,e,i){var n=X(le(i.el,0,i.options,!0)),o=Kn(i.el,i.options,C),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}function da(t,e,i){var n=X(nn(i.el,i.options.draggable)),o=Kn(i.el,i.options,C),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}function ha(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,u=n?i.bottom:i.right,p=!1;if(!a){if(s&&je<c*o){if(!ve&&(be===1?l>d+c*r/2:l<u-c*r/2)&&(ve=!0),ve)p=!0;else if(be===1?l<d+je:l>u-je)return-be}else if(l>d+c*(1-o)/2&&l<u-c*(1-o)/2)return fa(e)}return p=p||a,p&&(l<d+c*r/2||l>u-c*r/2)?l>d+c/2?1:-1:0}function fa(t){return xt(h)<xt(t)?1:-1}function pa(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function ga(t){Ke.length=0;for(var e=t.getElementsByTagName("input"),i=e.length;i--;){var n=e[i];n.checked&&Ke.push(n)}}function qe(t){return setTimeout(t,0)}function zi(t){return clearTimeout(t)}Ai&&R(document,"touchmove",function(t){($.active||ee)&&t.cancelable&&t.preventDefault()});$.utils={on:R,off:T,css:E,find:Yn,is:function(e,i){return!!At(e,i,e,!1)},extend:Jr,throttle:Wn,closest:At,toggleClass:yt,clone:Jn,index:xt,nextTick:qe,cancelNextTick:zi,detectDirection:to,getChild:le,expando:gt};$.get=function(t){return t[gt]};$.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&($.utils=Vt(Vt({},$.utils),n.utils)),_e.mount(n)})};$.create=function(t,e){return new $(t,e)};$.version=Wr;var z=[],fe,Xi,Yi=!1,Pi,Ni,Qe,pe;function ma(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?R(document,"dragover",this._handleAutoScroll):this.options.supportPointer?R(document,"pointermove",this._handleFallbackAutoScroll):n.touches?R(document,"touchmove",this._handleFallbackAutoScroll):R(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?T(document,"dragover",this._handleAutoScroll):(T(document,"pointermove",this._handleFallbackAutoScroll),T(document,"touchmove",this._handleFallbackAutoScroll),T(document,"mousemove",this._handleFallbackAutoScroll)),Vn(),Ze(),Kr()},nulling:function(){Qe=Xi=fe=Yi=pe=Pi=Ni=null,z.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(Qe=i,n||this.options.forceAutoScrollFallback||De||Ot||ge){Bi(i,this.options,s,n);var l=qt(s,!0);Yi&&(!pe||r!==Pi||a!==Ni)&&(pe&&Vn(),pe=setInterval(function(){var c=qt(document.elementFromPoint(r,a),!0);c!==l&&(l=c,Ze()),Bi(i,o.options,c,n)},10),Pi=r,Ni=a)}else{if(!this.options.bubbleScroll||qt(s,!0)===_t()){Ze();return}Bi(i,this.options,qt(s,!1),!1)}}},Ht(t,{pluginName:"scroll",initializeByDefault:!0})}function Ze(){z.forEach(function(t){clearInterval(t.pid)}),z=[]}function Vn(){clearInterval(pe)}var Bi=Wn(function(t,e,i,n){if(e.scroll){var o=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=_t(),c=!1,d;Xi!==i&&(Xi=i,Ze(),fe=e.scroll,d=e.scrollFn,fe===!0&&(fe=qt(i,!0)));var u=0,p=fe;do{var g=p,f=X(g),b=f.top,x=f.bottom,w=f.left,A=f.right,S=f.width,M=f.height,H=void 0,D=void 0,k=g.scrollWidth,J=g.scrollHeight,j=E(g),Et=g.scrollLeft,ot=g.scrollTop;g===l?(H=S<k&&(j.overflowX==="auto"||j.overflowX==="scroll"||j.overflowX==="visible"),D=M<J&&(j.overflowY==="auto"||j.overflowY==="scroll"||j.overflowY==="visible")):(H=S<k&&(j.overflowX==="auto"||j.overflowX==="scroll"),D=M<J&&(j.overflowY==="auto"||j.overflowY==="scroll"));var I=H&&(Math.abs(A-o)<=a&&Et+S<k)-(Math.abs(w-o)<=a&&!!Et),Y=D&&(Math.abs(x-r)<=a&&ot+M<J)-(Math.abs(b-r)<=a&&!!ot);if(!z[u])for(var K=0;K<=u;K++)z[K]||(z[K]={});(z[u].vx!=I||z[u].vy!=Y||z[u].el!==g)&&(z[u].el=g,z[u].vx=I,z[u].vy=Y,clearInterval(z[u].pid),(I!=0||Y!=0)&&(c=!0,z[u].pid=setInterval((function(){n&&this.layer===0&&$.active._onTouchMove(Qe);var Dt=z[this.layer].vy?z[this.layer].vy*s:0,ht=z[this.layer].vx?z[this.layer].vx*s:0;typeof d=="function"&&d.call($.dragged.parentNode[gt],ht,Dt,t,Qe,z[this.layer].el)!=="continue"||Gn(z[this.layer].el,ht,Dt)}).bind({layer:u}),24))),u++}while(e.bubbleScroll&&p!==l&&(p=qt(p,!1)));Yi=c}},30),oo=function(e){var i=e.originalEvent,n=e.putSortable,o=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(i){var c=n||r;s();var d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,u=document.elementFromPoint(d.clientX,d.clientY);l(),c&&!c.el.contains(u)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function on(){}on.prototype={startIndex:null,dragStart:function(e){var i=e.oldDraggableIndex;this.startIndex=i},onSpill:function(e){var i=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=le(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:oo};Ht(on,{pluginName:"revertOnSpill"});function rn(){}rn.prototype={onSpill:function(e){var i=e.dragEl,n=e.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:oo};Ht(rn,{pluginName:"removeOnSpill"});$.mount(new ma);$.mount(rn,on);const ya=t=>{const e=t.item;let i=Array.prototype.slice.call(e.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},ba=(t,e,i,n,o,r)=>{const s=t.item.parentNode;for(const x of i)s.appendChild(x);if(t.oldIndex==t.newIndex)return;const l=n.getArray(),c=t.item.querySelector("eox-layercontrol-layer").layer.get(o),d=l.find(x=>x.get(o)===c),u=r.dataset.layer,p=l.find(x=>x.get(o)==u);let g,f;for(g=0;g<l.length;g++)if(l[g]==d){n.removeAt(g);break}for(f=0;f<l.length;f++)if(l[f]===p){g>f?n.insertAt(f,d):n.insertAt(f+1,d);break}const b=Se(e,"eox-layercontrol")||e;xe(b,"sort:layer",{layer:c,oldIndex:t.oldIndex,newIndex:t.newIndex}),e.requestUpdate()};function va(t,e,i,n){let o=[],r=null;t._sortable=$.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=ya(a)},onMove:a=>{r=a.related},onEnd:a=>ba(a,n,o,e,i,r)})}function wa(t,e,i,n){const o=t.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(e)||(a.set(e,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function an(t,e,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(c=>c.get(a)===s)];const l=r.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>o(c.getLayers().getArray(),a,s)),n};return o(t,e,i),n}function Sa(t,e,i){if(!t||!e)return!1;if(!ro(t,i))return!0;const n=t.get("minZoom"),o=t.get("maxZoom"),r=e.getView().getZoom();return r>n&&r<o}function ro(t,e){const i=t.get("minZoom"),n=t.get("maxZoom");return!!(e&&(i!==-1/0||n!==1/0))}function Tn(t,e){var o,r,a;return!t||!e?void 0:t.getLayers?"group":((a=(o=e.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(t.getSource?(r=t.getSource())==null?void 0:r.ol_uid:void 0))?"draw":t.declutter_!==void 0||t.get("type")==="Vector"?"vector":"raster"}const xa=(t,e,i)=>{var l,c;let n=e;const o=i.layer.getSource(),r=((c=(l=i.layerConfig.schema)==null?void 0:l.options)==null?void 0:c.removeProperties)??[],a={...t};r.forEach(d=>delete a[d]),o.updateParams?o.updateParams(a):o.getTileUrlFunction&&o.getTileUrlFunction()&&(n||(n=o.getTileUrlFunction()),o instanceof Wo&&(o._updatedUrl=Ti(o.getUrls()[0],t)),o.setTileUrlFunction((...d)=>{const u=new URL(n(...d));return r.forEach(p=>u.searchParams.delete(p)),Ti(u.href,t)}),o.setKey(new Date().toISOString()));const s=document.querySelector("eox-map");if(s){const d=s.globe;if(d){const u=d.planet.layers.filter(p=>p.name==i.layer.get("id"))[0];u&&u.setUrl(Ti(u.url,t)),window.eoxMapGlobe.refresh()}}return n};async function Ea(t,e,i){var s,l,c,d,u,p,g,f;const n="updateStyleVariables"in e,o="setStyle"in e,r=n?e.style_:i.style,a=sn(t);if(r){const b=r.variables||{};r.variables={...b,...a}}if(n){const b=(t==null?void 0:t.variable)??(t==null?void 0:t.band);if(b!==void 0){const A=e.get("_lastVariable");if(b!==A){const S=await Va(e,String(b)),M=(S==null?void 0:S.targetMin)??ei(e,String(b)).targetMin,H=(S==null?void 0:S.targetMax)??ei(e,String(b)).targetMax;((i==null?void 0:i.autofill)===!0||((s=i==null?void 0:i.schema)==null?void 0:s.autofill)===!0||((l=r==null?void 0:r.variables)==null?void 0:l.min)!==void 0||((c=r==null?void 0:r.variables)==null?void 0:c.max)!==void 0||((u=(d=i==null?void 0:i.schema)==null?void 0:d.properties)==null?void 0:u.min)!==void 0||((g=(p=i==null?void 0:i.schema)==null?void 0:p.properties)==null?void 0:g.max)!==void 0)&&(qi(t,(f=i==null?void 0:i.schema)==null?void 0:f.properties,M,H),a.min=M,a.max=H,r!=null&&r.variables&&(r.variables.min=M,r.variables.max=H))}}const x=e.get("_geozarrDimensions"),w=e.getSource?e.getSource():null;if(w&&typeof w.updateDimensions=="function"&&x){const A={};for(const S of Object.keys(x))t[S]!==void 0&&(A[S]=Fo(x[S],t[S]));Object.keys(A).length>0&&w.updateDimensions(A)}e.updateStyleVariables(a)}else if(o&&r){const b=$a(r);e.setStyle(b)}}const sn=t=>{const e={};for(const i in t)if(typeof t[i]=="object"&&t[i]!==null){const n=sn(t[i]);for(const o in n)e[o]=n==null?void 0:n[o]}else e[i]=t==null?void 0:t[i];return e};function $a(t){let e=t;if("variables"in t){let i=JSON.stringify(t);const{variables:n}=t;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,String(n[o])):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);e=JSON.parse(i)}return e}const Aa=(t,e,i)=>{if(!t)return;const n=sn(e);let o,r;return Array.isArray(t)?r=structuredClone(t):r=[structuredClone(t)],o=r.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in n&&n[s]==l}),o.length||(o=null),o==null?void 0:o.map(a=>{var s;if(delete a.boundTo,a.rangeProperty&&i){const l=n[a.rangeProperty];l&&i[l]?(a.range=i[l],delete a.rangeProperty):l&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:(s=Object.keys(a))==null?void 0:s.reduce((l,c)=>{if(c==="domainProperties"){const d=a[c].map(u=>n[u]);l.domain=d,a.tickFormat===void 0&&d.length===2&&typeof d[0]=="number"&&typeof d[1]=="number"&&Number.isFinite(d[0])&&Number.isFinite(d[1])&&(l.tickFormat=jo([d[0],d[1]]))}else l[c]=a[c];return l},{})}).filter(Boolean)};function ki(t,e){var s,l,c,d,u,p,g,f,b;if(!e)return null;let i={},n="updateStyleVariables"in t?t.styleVariables_||((s=t.style_)==null?void 0:s.variables)||((c=(l=t.get)==null?void 0:l.call(t,"style"))==null?void 0:c.variables):(d=e.style)==null?void 0:d.variables;if((e.type==="style"||e.style)&&n)i={...n};else if((p=(u=t.getSource())==null?void 0:u.getParams)!=null&&p.call(u))i=t.getSource().getParams();else if((f=(g=t.getSource())==null?void 0:g.getTileUrlFunction)!=null&&f.call(g))try{const x=t.getSource().getTileUrlFunction()([0,0,0]);if(x){const w=new URL(x);i={};for(const[A,S]of w.searchParams.entries()){const M=w.searchParams.getAll(A);i[A]=M.length>1?M:S}}}catch(x){console.error("Error parsing start values from tile URL",x)}else return null;const o=e;i.min===void 0&&o.min!==void 0&&(i.min=o.min),i.max===void 0&&o.max!==void 0&&(i.max=o.max),i.bands===void 0&&o.bands!==void 0&&(i.bands=o.bands),i.band===void 0&&o.band!==void 0&&(i.band=o.band),i.variable===void 0&&(i.variable=o.variable??o.band??(Array.isArray(o.bands)&&o.bands.length>0?o.bands[0]:void 0)??((b=t.get)==null?void 0:b.call(t,"_lastVariable")));const r=ti(e.schema),a=ao(Object.keys(r).length?r:e.schema,i,e.schema,t);return Object.keys(a).length?a:null}function ti(t,e=t,i=new Set){if(!t||typeof t!="object")return{};const n={};typeof t.$ref=="string"&&!i.has(t.$ref)&&(i.add(t.$ref),Object.assign(n,ti(Ca(t.$ref,e),e,i)));for(const o of["anyOf","oneOf","allOf"])if(Array.isArray(t[o]))for(const r of t[o])Object.assign(n,ti(r,e,i));return Object.assign(n,t.properties)}function ao(t,e,i=t,n=null){var r,a,s,l,c,d,u,p,g,f,b,x;let o={};for(const w in t){const A=(r=t[w])==null?void 0:r.type;if(A&&A!=="object"&&e[w]!==void 0){const S=["number","integer"].includes(A)?Number(e[w]):e[w];o[w]=Number.isNaN(S)?e[w]:S}else if(w==="variable"&&A&&A!=="object"&&n){const S=n.getSource?n.getSource():null,M=((a=n.get)==null?void 0:a.call(n,"_lastVariable"))||(typeof(S==null?void 0:S.getBands)=="function"?S.getBands():null)||(S==null?void 0:S.bands_)||((c=(l=(s=n.get)==null?void 0:s.call(n,"_jsonDefinition"))==null?void 0:l.source)==null?void 0:c.bands)||((u=(d=n.get)==null?void 0:d.call(n,"source"))==null?void 0:u.bands),H=Array.isArray(M)&&M.length>0?M[0]:typeof M=="string"?M:void 0;H&&(!Array.isArray((p=t[w])==null?void 0:p.enum)||t[w].enum.includes(H))?o[w]=H:((g=t[w])==null?void 0:g.default)!==void 0?o[w]=t[w].default:Array.isArray((f=t[w])==null?void 0:f.enum)&&t[w].enum.length>0&&(o[w]=t[w].enum[0])}else if(A&&A!=="object"&&((b=t[w])==null?void 0:b.default)!==void 0)o[w]=t[w].default;else if(A&&A!=="object"&&Array.isArray((x=t[w])==null?void 0:x.enum)&&t[w].enum.length>0)o[w]=t[w].enum[0];else{const S=ao(ti(t[w],i),e,i,n);Object.keys(S).length>0&&(o[w]=S)}}return o}function Ca(t,e){if(t.startsWith("#/"))return t.slice(2).split("/").reduce((i,n)=>i==null?void 0:i[n.replace(/~1/g,"/").replace(/~0/g,"~")],e)}const so=(t,e)=>t==null?void 0:t.filter(i=>["remove","sort"].filter(n=>e!=null&&e.get("layerControlDisable")?n!=="sort":!0).includes(i)),lo=(t,e)=>t==null?void 0:t.filter(i=>{var o;let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=e.get("description")),i==="config"&&(n=e.get("layerConfig")),i==="datetime"&&(n=(o=e.get("layerDatetime"))==null?void 0:o.controlValues),i==="legend"&&(n=e.get("layerLegend")),n}),Da=(t,e,i)=>m`
  <button
    slot="${t}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${i?t:m`<i class="small primary-text">${e}</i>`}
  </button>
`,co=(t,e)=>m`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:i}=t;i==null||i.set("layerControlOptional",!0),i==null||i.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:i,bubbles:!0}))}}
  >
    ${t.unstyled?"x":m`<i class="small red-text">${e}</i>`}
  </button>
`,uo=(t,e,i)=>m`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${t.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${i?"═":m`<i class="small primary-text">${e}</i>`}
  </button>
`;function we(){return{dots:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const ho=t=>{var i;const e=["layerControlHide","layerControlOptional"];return(i=t==null?void 0:t.getArray())==null?void 0:i.filter(n=>e.every(o=>!n.get(o)))};function _a(t,e){var o,r;const i=(o=t.get("layerDatetime"))==null?void 0:o.sliceMap;if(!i||!(e in i))return;const n=(r=t.getSource)==null?void 0:r.call(t);typeof(n==null?void 0:n.updateDimensions)=="function"&&n.updateDimensions({time:i[e]})}function fo(t,e,i=!1){if(t.stopPropagation(),!i){const n=Object.assign(new CustomEvent("datetime:updated",{detail:t.detail,bubbles:!0,composed:!0}),{isUser:t.isUser===!0});e.dispatchEvent(n);return}Xe(e,"datetime:updated",{detail:t.detail,bubbles:!0,composed:!0,activity:t.isUser===!0,action:"datetime:updated"})}function ei(t,e,i){const n=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,o=n==null?void 0:n[e],{min:r,max:a}=qo(o==null?void 0:o.valid_range,o==null?void 0:o.visualization_range);return{targetMin:r,targetMax:a}}async function Va(t,e){var x,w,A,S,M,H,D,k,J,j,Et,ot,I,Y,K,Dt,ht,Zt,Pt,Ve,Ci,ue,Te,ln,cn,un,dn,hn,fn,pn,gn,mn,yn,bn;if(!t||!e)return;const i=t.getSource?t.getSource():null,n=t.get("_geozarrSourceUrl")||((w=(x=t.get("_jsonDefinition"))==null?void 0:x.source)==null?void 0:w.url)||((A=t.get("source"))==null?void 0:A.url)||t.get("_geozarrRootUrl");let o=i;if(i){if(typeof i.setBands=="function")i.setBands([e]);else if(n&&i.constructor){const ct=i.constructor,P=((S=i.getProjection)==null?void 0:S.call(i))||t.get("_mapProjection")||((H=(M=t.get("_jsonDefinition"))==null?void 0:M.source)==null?void 0:H.projection),Nt=new ct({url:n,bands:[e],crossOrigin:"anonymous",...P?{projection:P}:{}});t.setSource(Nt),o=Nt}}if(typeof(o==null?void 0:o.ready)=="function")try{await o.ready()}catch{}t.set("_lastVariable",e);const r=t.get("bands")||(Array.isArray((k=(D=t.get("_jsonDefinition"))==null?void 0:D.source)==null?void 0:k.bands)?(j=(J=t.get("_jsonDefinition"))==null?void 0:J.source)==null?void 0:j.bands:null),a=Array.isArray(r)&&r.length>1?r:[e];t.get("bands")!==void 0&&t.set("bands",a),t.get("band")!==void 0&&t.set("band",e);const s=t.get("layerConfig"),{targetMin:l,targetMax:c}=ei(t,e),d=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,u=d==null?void 0:d[e],p=(u==null?void 0:u.valid_range)??(u==null?void 0:u.visualization_range);let g=s;if(s){const ct=(s==null?void 0:s.autofill)===!0||((Et=s==null?void 0:s.schema)==null?void 0:Et.autofill)===!0;let P;(ot=s.schema)!=null&&ot.properties&&(P={...s.schema.properties},P.variable&&(P.variable={...P.variable,default:e}),P.band&&(P.band={...P.band,default:e}),P.bands&&(P.bands={...P.bands,default:P.bands.type==="array"?a:a[0]}),P.redMax||P.greenMax||P.blueMax||Zo(P,l,c,p,ct,!0)),g={...s,bands:a,band:e,...ct||s.min!==void 0?{min:l}:{},...ct||s.max!==void 0?{max:c}:{},schema:P?{...s.schema,properties:P}:s.schema},t.set("layerConfig",g)}if(((s==null?void 0:s.autofill)===!0||((I=s==null?void 0:s.schema)==null?void 0:I.autofill)===!0||((Y=t.styleVariables_)==null?void 0:Y.min)!==void 0||((K=t.styleVariables_)==null?void 0:K.max)!==void 0||((ht=(Dt=t.style_)==null?void 0:Dt.variables)==null?void 0:ht.min)!==void 0||((Pt=(Zt=t.style_)==null?void 0:Zt.variables)==null?void 0:Pt.max)!==void 0||((ue=(Ci=(Ve=t.get)==null?void 0:Ve.call(t,"style"))==null?void 0:Ci.variables)==null?void 0:ue.min)!==void 0||((cn=(ln=(Te=t.get)==null?void 0:Te.call(t,"style"))==null?void 0:ln.variables)==null?void 0:cn.max)!==void 0||((dn=(un=s==null?void 0:s.schema)==null?void 0:un.properties)==null?void 0:dn.min)!==void 0||((fn=(hn=s==null?void 0:s.schema)==null?void 0:hn.properties)==null?void 0:fn.max)!==void 0)&&zo(t,{min:l,max:c}),o&&typeof o.getDimensions=="function")try{const ct=await o.getDimensions();if(ct){const P={},Nt=t.get("_geozarrDimensions")||{};for(const[rt,at]of Object.entries(ct)){if(rt==="time"||!at||at.size<=0)continue;let Bt=Array.isArray((pn=Nt[rt])==null?void 0:pn.coordinates)&&Nt[rt].coordinates.length===at.size?Nt[rt].coordinates:[];Bt.length===0&&typeof o.getValue=="function"&&(Bt=await Promise.all([...Array(at.size).keys()].map(async Rt=>{try{const kt=await o.getValue(rt,Rt);return typeof kt=="bigint"?Number(kt):kt}catch{return Rt}})));const Tt={...at,coordinates:Bt};P[rt]=Tt;const ut=t.get("layerConfig")||g,Re=(ut==null?void 0:ut.autofill)===!0||((gn=ut==null?void 0:ut.schema)==null?void 0:gn.autofill)===!0;if((mn=ut==null?void 0:ut.schema)!=null&&mn.properties&&(ut.schema.properties[rt]!==void 0||Re)){const Rt={...ut.schema.properties};Rt[rt]=Xo(rt,Tt),g={...ut,schema:{...ut.schema,properties:Rt}},t.set("layerConfig",g)}typeof o.updateDimensions=="function"&&o.updateDimensions({[rt]:0})}const mt=t.get("layerConfig")||g;if(((mt==null?void 0:mt.autofill)===!0||((yn=mt==null?void 0:mt.schema)==null?void 0:yn.autofill)===!0)&&((bn=mt==null?void 0:mt.schema)!=null&&bn.properties)){const rt=Object.keys(Nt).filter(at=>!(at in P)&&at in mt.schema.properties);if(rt.length>0){const at={...mt.schema.properties};for(const Bt of rt)delete at[Bt];g={...mt,schema:{...mt.schema,properties:at}},t.set("layerConfig",g)}}if(t.set("_geozarrDimensions",P),ct!=null&&ct.time&&ct.time.size>0){const rt=ct.time,{units:at}=rt.attributes||{};let Bt=0,Tt=1e3;if(at&&typeof at=="string"&&at.includes(" since ")){const Q=at.split(" since ");let St=Q[1].trim();!St.includes("T")&&!St.includes("Z")&&(St=St.replace(" ","T")+"Z"),Bt=Date.parse(St)||0;const de=Q[0].toLowerCase();de.includes("day")?Tt=86400*1e3:de.includes("nanosecond")?Tt=1e-6:de.includes("microsecond")?Tt=.001:de.includes("millisecond")?Tt=1:de.includes("second")&&(Tt=1e3)}const ut=Q=>typeof Q=="string"?new Date(Q):new Date(Bt+Number(Q)*Tt),Re=await Promise.all([...Array(rt.size).keys()].map(async Q=>{const St=typeof o.getValue=="function"?await o.getValue("time",Q):Q;return{index:Q,date:ut(St)}}));Re.sort((Q,St)=>Q.date.getTime()-St.date.getTime());const Rt={},kt=Re.map(Q=>{const St=Q.date.toISOString();return Rt[St]=Q.index,St}),Me=t.get("layerDatetime")||{},vn=Me.currentStep&&kt.includes(Me.currentStep)?Me.currentStep:kt[0];t.set("layerDatetime",{showUTC:!0,slider:!0,navigation:!0,...Me,controlValues:kt,sliceMap:Rt,currentStep:vn});const Oo=kt.map(Q=>({date:Q}));t.set("timeControlValues",Oo);const Po=Rt[vn]??0;typeof o.updateDimensions=="function"&&o.updateDimensions({time:Po})}}}catch(ct){console.warn("Could not refresh GeoZarr dimensions for new band:",ct)}return{targetMin:l,targetMax:c}}var po="Expected a function",Rn=NaN,Ta="[object Symbol]",Ra=/^\s+|\s+$/g,Ma=/^[-+]0x[0-9a-f]+$/i,La=/^0b[01]+$/i,Ia=/^0o[0-7]+$/i,Ha=parseInt,Oa=typeof Le=="object"&&Le&&Le.Object===Object&&Le,Pa=typeof self=="object"&&self&&self.Object===Object&&self,Na=Oa||Pa||Function("return this")(),Ba=Object.prototype,ka=Ba.toString,Ua=Math.max,Fa=Math.min,Ui=function(){return Na.Date.now()};function ja(t,e,i){var n,o,r,a,s,l,c=0,d=!1,u=!1,p=!0;if(typeof t!="function")throw new TypeError(po);e=Mn(e)||0,ii(i)&&(d=!!i.leading,u="maxWait"in i,r=u?Ua(Mn(i.maxWait)||0,e):r,p="trailing"in i?!!i.trailing:p);function g(D){var k=n,J=o;return n=o=void 0,c=D,a=t.apply(J,k),a}function f(D){return c=D,s=setTimeout(w,e),d?g(D):a}function b(D){var k=D-l,J=D-c,j=e-k;return u?Fa(j,r-J):j}function x(D){var k=D-l,J=D-c;return l===void 0||k>=e||k<0||u&&J>=r}function w(){var D=Ui();if(x(D))return A(D);s=setTimeout(w,b(D))}function A(D){return s=void 0,p&&n?g(D):(n=o=void 0,a)}function S(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function M(){return s===void 0?a:A(Ui())}function H(){var D=Ui(),k=x(D);if(n=arguments,o=this,l=D,k){if(s===void 0)return f(l);if(u)return s=setTimeout(w,e),g(l)}return s===void 0&&(s=setTimeout(w,e)),a}return H.cancel=S,H.flush=M,H}function qa(t,e,i){var n=!0,o=!0;if(typeof t!="function")throw new TypeError(po);return ii(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),ja(t,e,{leading:n,maxWait:e,trailing:o})}function ii(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Za(t){return!!t&&typeof t=="object"}function za(t){return typeof t=="symbol"||Za(t)&&ka.call(t)==Ta}function Mn(t){if(typeof t=="number")return t;if(za(t))return Rn;if(ii(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ii(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Ra,"");var i=La.test(t);return i||Ia.test(t)?Ha(t.slice(2),i?2:8):Ma.test(t)?Rn:+t}var Xa=qa;const Ln=Go(Xa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=t=>t??Jt;var vt,ni,oi;class go extends Ct{constructor(){super();V(this,vt,[]);V(this,ni,Fi`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);V(this,oi,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return y(this,vt)?y(this,vt).length>1?y(this,vt):y(this,vt)[0]:null}set layerLegend(i){var n;i?Array.isArray(i)?W(this,vt,i.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):W(this,vt,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...i}]):W(this,vt,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var i;W(this,vt,(i=y(this,vt))==null?void 0:i.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),m`
      <style>
        ${y(this,ni)}
        ${!this.unstyled&&y(this,oi)}
      </style>
      ${B(this.layerLegend,()=>m`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${y(this,vt).map((i,n,o)=>m`
                <color-legend
                  id="${i.id}"
                  width=${i.width??325}
                  scaleType="${Be(i.scaleType)}"
                  markType="${Be(i.markType)}"
                  titleText="${Be(i.title)}"
                  .range=${i.range}
                  .domain=${i.domain}
                  tickFormat="${Be(i.tickFormat)}"
                  .ticks=${i.ticks??5}
                  .tickValues=${i.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${n!==o.length-1?m`<div class="separator"></div>`:Jt}
              `)}
          </div>
        `)}
    `}}vt=new WeakMap,ni=new WeakMap,oi=new WeakMap,q(go,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",go);var F,lt,ae,Wt,$e,Wi,ri,ai;class mo extends Ct{constructor(){super();V(this,$e);V(this,F,{});V(this,lt,null);V(this,ae);V(this,Wt,i=>{var o,r,a,s,l,c,d,u,p;const n=i;if(n.key==="source"&&W(this,ae,void 0),n.key==="layerConfig"){this.layerConfig=this.layer.get("layerConfig");const g=ki(this.layer,this.layerConfig)||{},f=(r=(o=this.layerConfig)==null?void 0:o.schema)==null?void 0:r.properties,b=((a=this.layerConfig)==null?void 0:a.autofill)===!0||((l=(s=this.layerConfig)==null?void 0:s.schema)==null?void 0:l.autofill)===!0;((c=this.layerConfig)==null?void 0:c.min)!==void 0&&((d=this.layerConfig)==null?void 0:d.max)!==void 0&&qi(y(this,F),f,this.layerConfig.min,this.layerConfig.max,b);const x=this.layer.get("_lastVariable")||((u=this.layerConfig)==null?void 0:u.band)||(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0);if(x&&(b||(f==null?void 0:f.variable)!==void 0||(f==null?void 0:f.band)!==void 0)&&((f==null?void 0:f.band)!==void 0?y(this,F).band=x:y(this,F).variable=x),W(this,lt,{...y(this,F),...g}),f&&!b){const w=new Set(Object.keys(f));for(const A of Object.keys(y(this,lt)))w.has(A)||delete y(this,lt)[A]}W(this,F,{...y(this,lt)}),this.requestUpdate()}});V(this,ri,Fi`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);V(this,ai,Fi`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Ln(O(this,$e,Wi),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){var i;super.connectedCallback(),(i=this.layer)!=null&&i.on&&this.layer.on("propertychange",y(this,Wt))}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.layer)!=null&&i.un&&this.layer.un("propertychange",y(this,Wt))}updated(i){var n,o,r;if(i.has("layer")){const a=i.get("layer");a!=null&&a.un&&a.un("propertychange",y(this,Wt)),(n=this.layer)!=null&&n.on&&this.layer.on("propertychange",y(this,Wt))}if(i.has("layerConfig")){const a=((o=this.layerConfig)==null?void 0:o.type)==="style"||(r=this.layerConfig)!=null&&r.style?100:1e3;this.throttleDataChange=Ln(O(this,$e,Wi),a)}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l,c,d,u,p;const n={...ki(this.layer,this.layerConfig)||{},...y(this,F)},o=(c=(l=this.layerConfig)==null?void 0:l.schema)==null?void 0:c.properties,r=((d=this.layerConfig)==null?void 0:d.autofill)===!0||((p=(u=this.layerConfig)==null?void 0:u.schema)==null?void 0:p.autofill)===!0;if(o&&!r){const g=new Set(Object.keys(o));for(const f of Object.keys(n))g.has(f)||delete n[f]}const a=Object.keys(n).length?n:null;JSON.stringify(a)!==JSON.stringify(y(this,lt))&&W(this,lt,a),W(this,F,{...y(this,lt)}),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const s={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return m`
      <style>
        ${y(this,ri)}
        ${!this.unstyled&&y(this,ai)}
      </style>
      ${B(this.layerConfig,()=>m`
          ${B(this.layerConfig.legend,()=>m`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Aa(this.layerConfig.legend,y(this,lt),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${y(this,lt)}
            .options=${s}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${g=>{this.throttleDataChange(g)}}
            @eox:activity=${g=>{g.stopPropagation()}}
          ></eox-jsonform>
        `)}
    `}}F=new WeakMap,lt=new WeakMap,ae=new WeakMap,Wt=new WeakMap,$e=new WeakSet,Wi=async function(i){var s,l,c,d,u,p,g,f,b,x,w,A,S,M,H,D,k,J,j,Et;const n=!!(i!=null&&i.isUser),o=((s=y(this,F))==null?void 0:s.variable)??((l=y(this,F))==null?void 0:l.band)??((d=(c=this.layer)==null?void 0:c.get)==null?void 0:d.call(c,"_lastVariable"))??((u=this.layerConfig)==null?void 0:u.band)??(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0),r=((g=i.detail)==null?void 0:g.variable)??((f=i.detail)==null?void 0:f.band),a=r!==void 0&&o!==void 0&&String(r)!==String(o);if(a){const{targetMin:ot,targetMax:I}=ei(this.layer,String(r),this.layerConfig),Y=(x=(b=this.layerConfig)==null?void 0:b.schema)==null?void 0:x.properties;qi(i.detail,Y,ot,I)}if(W(this,F,{...i.detail}),((w=this.layerConfig)==null?void 0:w.type)==="style"||(A=this.layerConfig)!=null&&A.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?await Ea(y(this,F),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):W(this,ae,xa(y(this,F),y(this,ae),this)),a){this.layerConfig=((M=(S=this.layer)==null?void 0:S.get)==null?void 0:M.call(S,"layerConfig"))||this.layerConfig;const ot=ki(this.layer,this.layerConfig)||{},I=(D=(H=this.layerConfig)==null?void 0:H.schema)==null?void 0:D.properties,Y=((k=this.layerConfig)==null?void 0:k.autofill)===!0||((j=(J=this.layerConfig)==null?void 0:J.schema)==null?void 0:j.autofill)===!0;if(W(this,lt,{...y(this,F),...ot,...r&&(Y||(I==null?void 0:I.variable)!==void 0||(I==null?void 0:I.band)!==void 0)?(I==null?void 0:I.band)!==void 0?{band:r}:{variable:r}:{},...y(this,F).min!==void 0&&(Y||(I==null?void 0:I.min)!==void 0)?{min:y(this,F).min}:{},...y(this,F).max!==void 0&&(Y||(I==null?void 0:I.max)!==void 0)?{max:y(this,F).max}:{}}),I&&!Y){const Dt=new Set(Object.keys(I));for(const ht of Object.keys(y(this,lt)))Dt.has(ht)||delete y(this,lt)[ht]}W(this,F,{...y(this,lt)});const K=(Et=this.renderRoot)==null?void 0:Et.querySelector("eox-jsonform");K!=null&&K.editor&&!K.editor.destroyed&&K.editor.ready&&K.editor.setValue(y(this,F))}this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:y(this,F),layer:this.layer,isUser:n}})),this.requestUpdate()},ri=new WeakMap,ai=new WeakMap,q(mo,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",mo);var Ae,si,bo,li,ci;class yo extends Ct{constructor(){super();V(this,si);V(this,Ae,On(_a,300));V(this,li,"");V(this,ci,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){y(this,Ae).flush(),super.disconnectedCallback()}render(){var i;return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),m`
      <style>
        ${y(this,li)}
        ${!this.unstyled&&y(this,ci)}
      </style>
      ${B((i=this.layerDatetime)==null?void 0:i.controlValues,()=>m`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(n=>({date:n}))}]}
            @select=${O(this,si,bo)}
            @eox:activity=${n=>n.stopPropagation()}
            .showUTC=${this.layerDatetime.showUTC||!1}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??"0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}}Ae=new WeakMap,si=new WeakSet,bo=function(i){var l;i.stopPropagation();const n=new Date(i.detail.date[0]),o=(l=this.layerDatetime.controlValues)==null?void 0:l.some(c=>typeof c=="string"&&c.includes("T"));let r;o?r=n.toISOString():r=(d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`)(n);const a=this.layerDatetime.currentStep;if(r===a||o&&typeof a=="string"&&Math.floor(n.getTime()/1e3)===Math.floor(Date.parse(a)/1e3))return;const s=Object.assign(new CustomEvent("datetime:updated",{bubbles:!0,composed:!0,detail:{datetime:r,layer:this.layer}}),{isUser:i.isUser===!0});this.dispatchEvent(s),y(this,Ae).call(this,this.layer,r),this.layerDatetime.currentStep=r,this.requestUpdate()},li=new WeakMap,ci=new WeakMap,q(yo,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",yo);var Ce,ui,di;class vo extends Ct{constructor(){super();V(this,Ce,i=>(this.selectedTab===i||this.toolsAsList)&&"highlighted");V(this,ui,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);V(this,di,`
    ${Ki}
    figure {
      padding: var(--padding-vertical) var(--padding);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface-variant);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.tabs,n=this.actions,o=n.length+i.length>1;return m`
      <style>
        ${y(this,ui)}
        ${!this.unstyled&&y(this,di)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${B(o,()=>m`
            <nav>
              ${B(!this.toolsAsList,()=>m`
                  <div>
                    <!-- Labels for tabs -->
                    ${ke(i,(r,a)=>m`
                        <label
                          class=${y(this,Ce).call(this,a)}
                          @click=${s=>{this.selectedTab=a;const l=Se(this,"eox-layercontrol")||this;xe(l,"select:tool",{tool:r},s)}}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ke(n,r=>m`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${ke(i,(r,a)=>m`
              ${B(this.toolsAsList,()=>m`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${y(this,Ce).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${B(this.toolsAsList&&a<i.length-1,()=>m`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}Ce=new WeakMap,ui=new WeakMap,di=new WeakMap,q(vo,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",vo);var hi,So,se,fi,pi;class wo extends Ct{constructor(){super();V(this,hi);q(this,"_removeButton",i=>co(this,i));q(this,"_sortButton",i=>uo(this,i,this.unstyled));q(this,"_button",(i,n)=>Da(i,n,this.unstyled));q(this,"_getDefaultTools",i=>{var n,o;return m`
      <div slot="info-content">
        ${Yo(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${ji((n=this.layer)==null?void 0:n.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
            @change=${r=>{var s,l;const a=Se(this,"eox-layercontrol")||this;xe(a,"change:opacity",{layer:((s=this.layer)==null?void 0:s.get("id"))||((l=this.layer)==null?void 0:l.get("name")),opacity:parseFloat(r.target.value)},r)}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${B(this.layer.get("layerConfig"),()=>m`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${O(this,hi,So)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${B(this.layer.get("layerDatetime"),()=>m`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>fo(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${B(this.layer.get("layerLegend"),()=>m`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(i.remove)}</div>
      <div slot="sort-icon">${this._sortButton(i.sort)}</div>
    `});V(this,se,!1);V(this,fi,"");V(this,pi,`
    ${this.embedded?"":Ki}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var n,o,r;const i=this.parentElement||((n=this.getRootNode())==null?void 0:n.host);this.embedded=(i==null?void 0:i.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((o=this.layer)!=null&&o.getVisible()):this.embedded===!1?!0:!!((r=this.layer)!=null&&r.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){var i,n;(n=(i=this.layer)==null?void 0:i.on)==null||n.call(i,"propertychange",o=>{const r=o;(r.key==="layerConfig"||r.key==="layerDatetime"||r.key==="timeControlValues")&&this.requestUpdate()})}updated(i){var n;this.toolsAutoExpand&&(i.has("toolsAutoExpand")||i.has("layer"))&&(this.open=!!((n=this.layer)!=null&&n.getVisible()))}render(){const i=so(this.tools,this.layer),n=lo(this.tools,this.layer),o=i==null?void 0:i.length,r=n==null?void 0:n.length;return m`
      <style>
        ${y(this,fi)}
        ${!this.unstyled&&y(this,pi)}
      </style>
      ${B(o+r>0,()=>m`
          ${B(!(o===1&&r===0),()=>m`
              <details
                class="tools"
                .open=${ji(this.open)}
                @toggle=${a=>{var s,l;if(this.open=a.target.open,y(this,se)){W(this,se,!1);const c=Se(this,"eox-layercontrol")||this;xe(c,"toggle:tools",{layer:((s=this.layer)==null?void 0:s.get("id"))||((l=this.layer)==null?void 0:l.get("name")),open:this.open},a)}}}
              >
                <summary
                  @click=${()=>{W(this,se,!0)}}
                ></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${i}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ke(n,a=>this._button(a,we()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(we())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}hi=new WeakSet,So=function(i){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:i.detail.jsonformValue,layer:i.detail.layer,isUser:i.detail.isUser}}))},se=new WeakMap,fi=new WeakMap,pi=new WeakMap,q(wo,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",wo);const Ya=t=>{var a,s,l,c;const e=()=>{const d=Sa(t.layer,t.map,t.showLayerZoomState);let u=!1;!d&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,u=!0):d&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,u=!0),u&&(t.requestUpdate(),Xe(t,"change:resolution",{bubbles:!0,composed:!1,activity:!1}))};let i;const n=()=>{i&&Ie(i),i=void 0,t.map&&ro(t.layer,t.showLayerZoomState)&&(i=t.map.getView().on("change:resolution",e)),t.map&&e()};n();const o=(s=(a=t.map)==null?void 0:a.on)==null?void 0:s.call(a,"change:view",n),r=(c=(l=t.layer)==null?void 0:l.on)==null?void 0:c.call(l,"propertychange",d=>{const u=d;(u.key==="layerDatetime"||u.key==="layerConfig"||u.key==="timeControlValues")&&t.requestUpdate()});return()=>{i&&Ie(i),o&&Ie(o),r&&Ie(r)}},Wa=(t,e)=>{const i=e.layer;if(i.setVisible(t.target.checked),e.toolsAutoExpand){const n=e.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=t.target.checked)}t.target.checked&&i.get("layerControlExclusive")&&e.closest(`${e.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;if(o.layer!==i&&((r=o.layer)!=null&&r.get("layerControlExclusive"))){if(o.layer.setVisible(!1),o.toolsAutoExpand){const a=o.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}o.requestUpdate()}}),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),e.requestUpdate()};var wt,ie,Gt,Gi,Eo,gi,mi;class xo extends Ct{constructor(){super();V(this,wt);q(this,"currLayerVisibilityBasedOnZoom",!0);V(this,Gt);V(this,gi,"");V(this,mi,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&O(this,wt,Gi).call(this)}disconnectedCallback(){var i;(i=y(this,Gt))==null||i.call(this),W(this,Gt,void 0),super.disconnectedCallback()}updated(i){this.isConnected&&(i.has("layer")||i.has("map")||i.has("showLayerZoomState"))&&O(this,wt,Gi).call(this)}render(){var d,u;const i=this.layer.getVisible(),n=i?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=O(this,wt,ie).call(this,"layerControlDisable")?"disabled":"",a=O(this,wt,ie).call(this,"layerControlExclusive")?"radio":"checkbox",s=((d=so(this.tools,this.layer))==null?void 0:d.length)>0,l=((u=lo(this.tools,this.layer))==null?void 0:u.length)>0,c=document.querySelector("eox-layercontrol-layer-tools");return c&&Object.assign(c,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),m`
      <style>
        ${y(this,gi)}
        ${!this.unstyled&&y(this,mi)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${B(this.layer,()=>m`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${n} ${o} responsive tiny-space"
          >
            ${B(!this.unstyled,()=>{if(O(this,wt,ie).call(this,"color"))return m`
                  <i class="small" style="color: ${O(this,wt,ie).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return m` <i class="small"> </i> `;case"draw":return m`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return m`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return m`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return m` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${O(this,wt,ie).call(this,this.titleProperty)}</span
              >
            </div>

            ${B(l&&!this.toolsAutoExpand,()=>m`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const p=this.renderRoot.querySelector("eox-layercontrol-layer-tools");p.open=!p.open}}
                >
                  <i class="small">
                    ${we()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${B(!l&&s,()=>this.tools[0]==="remove"?co(this,we()[this.tools[0]]):uo(this,we()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${ji(i)}
                @click=${O(this,wt,Eo)}
                disabled=${r||Jt}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<span class="tooltip top" style="pointer-events: none">${i?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${B(l&&!c,()=>m`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}wt=new WeakSet,ie=function(i){var n;return(n=this.layer)==null?void 0:n.get(i)},Gt=new WeakMap,Gi=function(){var i;(i=y(this,Gt))==null||i.call(this),W(this,Gt,Ya(this))},Eo=function(i){Wa(i,this)},gi=new WeakMap,mi=new WeakMap,q(xo,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",xo);var yi,bi;class $o extends Ct{constructor(){super();V(this,yi,"");V(this,bi,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const i=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=ho(this.group.getLayers()))==null?void 0:r.length;return m`
      <style>
        ${y(this,yi)}
        ${!this.unstyled&&y(this,bi)}
      </style>
      ${B(this.group,()=>m`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${i||Jt}
            data-children-length=${n}
          >
            <summary class="square">
              ${B(n>0,()=>m`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .toolsAutoExpand=${this.toolsAutoExpand}
                .colormapRegistry=${this.colormapRegistry}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .colormapRegistry=${this.colormapRegistry}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}yi=new WeakMap,bi=new WeakMap,q($o,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",$o);const Ga=t=>{const{layers:e,idProperty:i,titleProperty:n,renderRoot:o}=t,r=On(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(e&&(e.hasListener("change:length")&&(e==null||e.un("change:length",a)),e.on("change:length",a),e)){const s=o.querySelector("ul");wa(e,i,n,t),va(s,e,i,t)}};var vi,wi;class Ao extends Ct{constructor(){super();V(this,vi,"");V(this,wi,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){Ga(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.layers?ho(this.layers).reverse():[];return m`
      <style>
        ${y(this,vi)}
        ${!this.unstyled&&y(this,wi)}
      </style>
      <ul class="list no-space">
        ${B(this.layers,()=>m`
            ${ko(i,n=>n,n=>m`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${Tn(n,this.map)}"
                  class="square"
                >
                  ${n.getLayers?m`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${n}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:m`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${n}
                            .layerType=${Tn(n,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}vi=new WeakMap,wi=new WeakMap,q(Ao,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Ao);const Ja=t=>{const e=t.querySelector("select[name=optional]"),i=e?e.value:null,n=an(t.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(t.idProperty)||o.ol_uid)===i);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:n})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),t.requestUpdate()};var Si,Do;class Co extends Ct{constructor(){super();V(this,Si);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=an(this.layers.getArray(),"layerControlOptional",!0);return m`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${i.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return m` <option value="${o}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${O(this,Si,Do)}">Add</button>
      </nav>
    `}}Si=new WeakSet,Do=function(){Ja(this)},q(Co,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Co);const Ka=(t,e)=>{e.jsonInput=t.target.value,e.requestUpdate()},In=t=>{const e=JSON.parse(`{"data":${qn(t.jsonInput)}}`);Array.isArray(e.data)?e.data.forEach(n=>{t.eoxMap.addOrUpdateLayer(n)}):t.eoxMap.addOrUpdateLayer(e.data),t.jsonInput=null;const i=Se(t,"eox-layercontrol")||t;xe(i,"add:layer",{layers:e.data}),t.requestUpdate()},Qa=(t,e)=>{e.urlInput=t.target.value,e.requestUpdate()};async function ts(t){const e=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!e)return!1;if(tn(e)==="XYZ")return{Name:e};try{const i=await jr(e);t.wmsCapabilities=i}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const es=(t,e)=>{const{Name:i}=t,n=tn(e.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:e.urlInput,params:{LAYERS:i}}};e.jsonInput=JSON.stringify(o)},is=(t,e)=>{e.open=t||null,e.urlInput=null,e.jsonInput=null,e.wmsCapabilities=null,e.requestUpdate()};var et,Vo,To,Ji,Ro,Mo,ze,xi;class _o extends Ct{constructor(){super();V(this,et);q(this,"urlInput",null);q(this,"jsonInput",null);q(this,"open",null);q(this,"searchLoad",!1);q(this,"wmsCapabilities",null);V(this,xi,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i={add:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},n=this.open?"open":"close",o=this.open==="url",r=this.open==="json",a=!qr(this.urlInput)||this.searchLoad?!0:Jt;return m`
      <style>
        ${y(this,xi)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${n}"
          >
            <a
              @click=${()=>O(this,et,ze).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>O(this,et,ze).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>O(this,et,ze).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":m`<i class="small primary-text">${i.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${n}" style="padding: 15px 0">
          ${o?m`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${O(this,et,Vo)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${O(this,et,To)}
                  >
                    ${this.unstyled?"Search":m`<i class="small">${i.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?m`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return m`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>O(this,et,Ji).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:Jt}
              `:m`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${O(this,et,Mo)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Zr(this.jsonInput)?Jt:!0}
                  @click=${O(this,et,Ro)}
                >
                  ${this.unstyled?"Add JSON":m`<i class="small">${i.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}et=new WeakSet,Vo=function(i){Qa(i,this)},To=async function(){const i=await ts(this);i&&O(this,et,Ji).call(this,i)},Ji=function(i){es(i,this),In(this)},Ro=function(){In(this)},Mo=function(i){Ka(i,this)},ze=function(i){is(i,this)},xi=new WeakMap,q(_o,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",_o);const ns=(t,e)=>{if(e.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=e.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}},Hn=t=>{const e=Jo(t.for);return e&&e.map!==t.map&&(t.map=e.map),e};Uo();var jt,ce,Io,Ho,Ei;class Lo extends Ct{constructor(){super();V(this,ce);V(this,jt);V(this,Ei,`
    ${Ki}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
    summary > * {
      pointer-events: all !important;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=Hn(this)}updated(i){i.has("for")&&(this.eoxMap=Hn(this))}get eoxMap(){return y(this,jt)}set eoxMap(i){const n=y(this,jt);W(this,jt,i),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const i=(o=this.map)==null?void 0:o.getLayers().getArray(),n=i&&((r=an(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return m`
      <style>
        ${!this.unstyled&&y(this,Ei)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${B(this.addExternalLayers&&((a=y(this,jt))==null?void 0:a.addOrUpdateLayer),()=>m`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${y(this,jt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${B(this.map,()=>m`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${O(this,ce,Io)}
            @datetime:updated=${s=>fo(s,this,s.isUser===!0)}
            @layerConfig:change=${O(this,ce,Ho)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${B(n,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}jt=new WeakMap,ce=new WeakSet,Io=function(i){ns(i,this);const n=!!(i.detail&&!("activity"in i.detail&&i.detail.activity===!1));Xe(this,"layerchange",{detail:i.detail,activity:n,action:"layerchange"})},Ho=function(i){var n;Xe(this,"layerConfig:change",{detail:i.detail,activity:((n=i.detail)==null?void 0:n.isUser)!==!1,action:"layerConfig:change"})},Ei=new WeakMap,q(Lo,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",Lo);export{Lo as EOxLayerControl,$a as updateVectorLayerStyle};
