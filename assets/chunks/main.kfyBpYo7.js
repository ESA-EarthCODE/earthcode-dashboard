var qo=Object.defineProperty;var Cn=t=>{throw TypeError(t)};var Zo=(t,i,e)=>i in t?qo(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var z=(t,i,e)=>Zo(t,typeof i!="symbol"?i+"":i,e),Li=(t,i,e)=>i.has(t)||Cn("Cannot "+e);var b=(t,i,e)=>(Li(t,i,"read from private field"),e?e.call(t):i.get(t)),V=(t,i,e)=>i.has(t)?Cn("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),X=(t,i,e,n)=>(Li(t,i,"write to private field"),n?n.call(t,e):i.set(t,e),e),B=(t,i,e)=>(Li(t,i,"access private method"),e);import{x as m,E as ie,a as Tt,i as zi}from"./lit-element.CIht5NN8.js";import{n as j}from"./when.BR7zwNJC.js";import{c as zo}from"./repeat.9Pq2frlr.js";import{l as Xi}from"./live.BZd1J1mE.js";import{e as nn,a as Xo}from"./addCommonStyleSheet.BIZSB8qW.js";import{f as De,e as _e,s as Yi,r as Yo,c as Wo,d as Qe,a as Go,b as Jo,g as Ko,h as Qo}from"./geoZarrRangeHelpers.DUeKc3rf.js";import{o as tr}from"./unsafe-html.RlppLW26.js";import{o as ze}from"./map.DiiNQ3pp.js";import{X as er}from"./XYZ.CXWPO8fT.js";import{c as ke,g as ir}from"./commonjsHelpers.BosuxZz1.js";import{_ as jn}from"./index.BUIxO2d3.js";import{u as Ne}from"./intersectsextent.Dm-8eJWm.js";import{g as nr}from"./getElement.COiK8z0h.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./util.Dhne-uB2.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var _=t=>t!==void 0,qn=(t,i,e)=>i in t?t[i]:t[i]=e;const Ve={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class or{constructor(i){this._parser=new i}toDocument(i){return this._parser.parseFromString(i,"application/xml")}getAllTextContent(i,e){return Ti(i,e).join("")}}function Ti(t,i){return Zn(t,i,[]).join("")}function Zn(t,i,e){if(t.nodeType===Ve.CDATA_SECTION||t.nodeType===Ve.TEXT)i?e.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):e.push(t.nodeValue);else{var n;for(n=t.firstChild;n;n=n.nextSibling)Zn(n,i,e)}return e}function rr(t,i,e,n){for(var o=ar(i);o;o=sr(o)){var r=o.namespaceURI||null,a=t[r];if(_(a)){var s=a[o.localName];_(s)&&s.call(n,o,e)}}}function ar(t){let i=t.firstElementChild||t.firstChild;for(;i&&i.nodeType!==Ve.ELEMENT;)i=i.nextSibling;return i}function sr(t){let i=t.nextElementSibling||t.nextSibling;for(;i&&i.nodeType!==Ve.ELEMENT;)i=i.nextSibling;return i}function nt(t,i,e){return lr(t,i,e)}function lr(t,i,e){var n=_(e)?e:{},o,r;for(o=0,r=t.length;o<r;++o)n[t[o]]=i;return n}function zn(t,i){return function(e,n){var o=t.call(_(i)?i:this,e,n);if(_(o)){var r=n[n.length-1];r.push(o)}}}function K(t,i,e,n,o){return n.push(t),rr(i,e,n,o),n.pop()}function v(t,i,e){return function(n,o){let r=t.call(_(e)?e:this,n,o);if(_(r)){var a=o[o.length-1],s=_(i)?i:n.localName;a[s]=r}}}function pt(t,i,e){return function(n,o){var r=t.call(_(e)?e:this,n,o);if(_(r)){var a=o[o.length-1],s=_(i)?i:n.localName,l=qn(a,s,[]);l.push(r)}}}const cr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function ur(t){return t.replace(cr,"")}function ne(t){const i=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(i)return _(i[1])||!1}function ce(t){return It(Ti(t,!1))}function It(t){const i=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(i)return parseFloat(i[1])}function Oi(t){return ti(Ti(t,!1))}function ti(t){const i=/^\s*(\d+)\s*$/.exec(t);if(i)return parseInt(i[1],10)}function L(t){return ur(Ti(t,!1))}const dr="http://www.w3.org/1999/xlink";function on(t){return t.getAttributeNS(dr,"href")}function hr(t,i){return K({},Nr,t,i)}function Xn(t){return[It(t.getAttribute("minx")),It(t.getAttribute("miny")),It(t.getAttribute("maxx")),It(t.getAttribute("maxy"))]}function fr(t,i){const e=Xn(t),n=[It(t.getAttribute("resx")),It(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:e,res:n}}function pr(t,i){const e=Xn(t);if(!(!_(e[0])||!_(e[1])||!_(e[2])||!_(e[3])))return e}function gr(t,i){const e=parseFloat(t.getAttribute("min")),n=parseFloat(t.getAttribute("max"));return{min:e,max:n}}function mr(t,i){const e=K({},Br,t,i);if(!_(e))return;const n=e.westBoundLongitude,o=e.southBoundLatitude,r=e.eastBoundLongitude,a=e.northBoundLatitude;if(!(!_(n)||!_(o)||!_(r)||!_(a)))return[n,o,r,a]}function yr(t,i){return K({},Lr,t,i)}function br(t,i){return K({},Or,t,i)}function vr(t,i){return K({},Ir,t,i)}function wr(t,i){return K({},Hr,t,i)}function Sr(t,i){return K({},Pr,t,i)}function xr(t,i){return K([],kr,t,i)}function Er(t,i){const e=ne(t.getAttribute("queryable"));return K({queryable:_(e)?e:!1},Gn,t,i)}function $r(t,i){var e=i[i.length-1];const n=K({},Gn,t,i);if(!_(n))return;let o=ne(t.getAttribute("queryable"));_(o)||(o=e.queryable),n.queryable=_(o)?o:!1;let r=ti(t.getAttribute("cascaded"));_(r)||(r=e.cascaded),n.cascaded=r;let a=ne(t.getAttribute("opaque"));_(a)||(a=e.opaque),n.opaque=_(a)?a:!1;let s=ne(t.getAttribute("noSubsets"));_(s)||(s=e.noSubsets),n.noSubsets=_(s)?s:!1;let l=It(t.getAttribute("fixedWidth"));_(l)||(l=e.fixedWidth),n.fixedWidth=l;let c=It(t.getAttribute("fixedHeight"));_(c)||(c=e.fixedHeight),n.fixedHeight=c;const d=["Style","CRS","AuthorityURL"];for(let p=0,g=d.length;p<g;p++){const f=d[p],y=e[f];if(_(y)){let S=qn(n,f,[]);S=S.concat(y),n[f]=S}}const u=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,g=u.length;p<g;p++){const f=u[p],y=n[f];if(!_(y)){const S=e[f];n[f]=S}}return n}function Ar(t,i){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:ne(t.getAttribute("multipleValues")),nearestValue:ne(t.getAttribute("nearestValue")),current:ne(t.getAttribute("current")),values:L(t)}}function Pt(t,i){return K({},zr,t,i)}function Cr(t,i){return K({},Ur,t,i)}function Dr(t,i){return K({},jr,t,i)}function _r(t,i){return K({},qr,t,i)}function Ii(t,i){return K({},Fr,t,i)}function Yn(t,i){var e=Pt(t,i);if(_(e)){const n=[ti(t.getAttribute("width")),ti(t.getAttribute("height"))];return e.size=n,e}}function Vr(t,i){var e=Pt(t,i);if(_(e))return e.name=t.getAttribute("name"),e}function Tr(t,i){var e=Pt(t,i);if(_(e))return e.type=t.getAttribute("type"),e}function Rr(t,i){return K({},Zr,t,i)}function Wn(t,i){return K([],Xr,t,i)}const ot=[null,"http://www.opengis.net/wms"],Mr=nt(ot,{Service:v(br),Capability:v(yr)}),Lr=nt(ot,{Request:v(Cr),Exception:v(xr),Layer:v(Er)}),Or=nt(ot,{Name:v(L),Title:v(L),Abstract:v(L),KeywordList:v(Wn),OnlineResource:v(on),ContactInformation:v(vr),Fees:v(L),AccessConstraints:v(L),LayerLimit:v(Oi),MaxWidth:v(Oi),MaxHeight:v(Oi)}),Ir=nt(ot,{ContactPersonPrimary:v(wr),ContactPosition:v(L),ContactAddress:v(Sr),ContactVoiceTelephone:v(L),ContactFacsimileTelephone:v(L),ContactElectronicMailAddress:v(L)}),Hr=nt(ot,{ContactPerson:v(L),ContactOrganization:v(L)}),Pr=nt(ot,{AddressType:v(L),Address:v(L),City:v(L),StateOrProvince:v(L),PostCode:v(L),Country:v(L)}),kr=nt(ot,{Format:zn(L)}),Gn=nt(ot,{Name:v(L),Title:v(L),Abstract:v(L),KeywordList:v(Wn),CRS:pt(L),SRS:pt(L),EX_GeographicBoundingBox:v(mr),LatLonBoundingBox:v(pr),BoundingBox:pt(fr),Dimension:pt(Ar),Attribution:v(hr),AuthorityURL:pt(Vr),Identifier:pt(L),MetadataURL:pt(Tr),DataURL:pt(Pt),FeatureListURL:pt(Pt),Style:pt(Rr),MinScaleDenominator:v(ce),MaxScaleDenominator:v(ce),ScaleHint:v(gr),Layer:pt($r)}),Nr=nt(ot,{Title:v(L),OnlineResource:v(on),LogoURL:v(Yn)}),Br=nt(ot,{westBoundLongitude:v(ce),eastBoundLongitude:v(ce),southBoundLatitude:v(ce),northBoundLatitude:v(ce)}),Ur=nt(ot,{GetCapabilities:v(Ii),GetMap:v(Ii),GetFeatureInfo:v(Ii)}),Fr=nt(ot,{Format:pt(L),DCPType:pt(Dr)}),jr=nt(ot,{HTTP:v(_r)}),qr=nt(ot,{Get:v(Pt),Post:v(Pt)}),Zr=nt(ot,{Name:v(L),Title:v(L),Abstract:v(L),LegendURL:pt(Yn),StyleSheetURL:v(Pt),StyleURL:v(Pt)}),zr=nt(ot,{Format:v(L),OnlineResource:v(on)}),Xr=nt(ot,{Keyword:zn(L)});class Yr{constructor(i,e){!e&&typeof window<"u"&&(e=window.DOMParser),this.version=void 0,this._parser=new or(e),this._data=i}data(i){return this._data=i,this}toJSON(i){return i=i||this._data,this.parse(i)}parse(i){return this.readFromDocument(this._parser.toDocument(i))}readFromDocument(i){for(let e=i.firstChild;e;e=e.nextSibling)if(e.nodeType==Ve.ELEMENT)return this.readFromNode(e);return null}readFromNode(i){return this.version=i.getAttribute("version"),K({version:this.version},Mr,i,[])||null}}async function Wr(t){let i=new URL(t),e=i.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let n=i.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Yr(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function rn(t){const i=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return i.test(t)?"TileWMS":e.test(t)?"XYZ":!1}function Gr(t){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),n=rn(t);return!!(t&&e&&n)}function Jn(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Jr(t){try{return JSON.parse(Jn(t)),!!t}catch{return!1}}function Dn(t,i){const e=new URL(t).searchParams;Object.entries(i).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{e.set(l,s[l])}):Array.isArray(s)?(e.delete(a),s.forEach(l=>{e.append(a,l)})):e.set(a,s)});const n=t.split("?")[0],o=e.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function _n(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,n)}return e}function Lt(t){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?_n(Object(e),!0).forEach(function(n){Kr(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_n(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Xe(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xe=function(i){return typeof i}:Xe=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Xe(t)}function Kr(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function kt(){return kt=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},kt.apply(this,arguments)}function Qr(t,i){if(t==null)return{};var e={},n=Object.keys(t),o,r;for(r=0;r<n.length;r++)o=n[r],!(i.indexOf(o)>=0)&&(e[o]=t[o]);return e}function ta(t,i){if(t==null)return{};var e=Qr(t,i),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var ea="1.15.6";function Ht(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Nt=Ht(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Le=Ht(/Edge/i),Vn=Ht(/firefox/i),Se=Ht(/safari/i)&&!Ht(/chrome/i)&&!Ht(/android/i),an=Ht(/iP(ad|od|hone)/i),Kn=Ht(/chrome/i)&&Ht(/android/i),Qn={capture:!1,passive:!1};function R(t,i,e){t.addEventListener(i,e,!Nt&&Qn)}function T(t,i,e){t.removeEventListener(i,e,!Nt&&Qn)}function ei(t,i){if(i){if(i[0]===">"&&(i=i.substring(1)),t)try{if(t.matches)return t.matches(i);if(t.msMatchesSelector)return t.msMatchesSelector(i);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(i)}catch{return!1}return!1}}function to(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Vt(t,i,e,n){if(t){e=e||document;do{if(i!=null&&(i[0]===">"?t.parentNode===e&&ei(t,i):ei(t,i))||n&&t===e)return t;if(t===e)break}while(t=to(t))}return null}var Tn=/\s+/g;function bt(t,i,e){if(t&&i)if(t.classList)t.classList[e?"add":"remove"](i);else{var n=(" "+t.className+" ").replace(Tn," ").replace(" "+i+" "," ");t.className=(n+(e?" "+i:"")).replace(Tn," ")}}function x(t,i,e){var n=t&&t.style;if(n){if(e===void 0)return document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(e=t.currentStyle),i===void 0?e:e[i];!(i in n)&&i.indexOf("webkit")===-1&&(i="-webkit-"+i),n[i]=e+(typeof e=="string"?"":"px")}}function de(t,i){var e="";if(typeof t=="string")e=t;else do{var n=x(t,"transform");n&&n!=="none"&&(e=n+" "+e)}while(!i&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(e)}function eo(t,i,e){if(t){var n=t.getElementsByTagName(i),o=0,r=n.length;if(e)for(;o<r;o++)e(n[o],o);return n}return[]}function Mt(){var t=document.scrollingElement;return t||document.documentElement}function G(t,i,e,n,o){if(!(!t.getBoundingClientRect&&t!==window)){var r,a,s,l,c,d,u;if(t!==window&&t.parentNode&&t!==Mt()?(r=t.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,c=r.right,d=r.height,u=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(i||e)&&t!==window&&(o=o||t.parentNode,!Nt))do if(o&&o.getBoundingClientRect&&(x(o,"transform")!=="none"||e&&x(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(x(o,"border-top-width")),s-=p.left+parseInt(x(o,"border-left-width")),l=a+r.height,c=s+r.width;break}while(o=o.parentNode);if(n&&t!==window){var g=de(o||t),f=g&&g.a,y=g&&g.d;g&&(a/=y,s/=f,u/=f,d/=y,l=a+d,c=s+u)}return{top:a,left:s,bottom:l,right:c,width:u,height:d}}}function Rn(t,i,e){for(var n=Xt(t,!0),o=G(t)[i];n;){var r=G(n)[e],a=void 0;if(a=o>=r,!a)return n;if(n===Mt())break;n=Xt(n,!1)}return!1}function pe(t,i,e,n){for(var o=0,r=0,a=t.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==E.ghost&&(n||a[r]!==E.dragged)&&Vt(a[r],e.draggable,t,!1)){if(o===i)return a[r];o++}r++}return null}function sn(t,i){for(var e=t.lastElementChild;e&&(e===E.ghost||x(e,"display")==="none"||i&&!ei(e,i));)e=e.previousElementSibling;return e||null}function $t(t,i){var e=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==E.clone&&(!i||ei(t,i))&&e++;return e}function Mn(t){var i=0,e=0,n=Mt();if(t)do{var o=de(t),r=o.a,a=o.d;i+=t.scrollLeft*r,e+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[i,e]}function ia(t,i){for(var e in t)if(t.hasOwnProperty(e)){for(var n in i)if(i.hasOwnProperty(n)&&i[n]===t[e][n])return Number(e)}return-1}function Xt(t,i){if(!t||!t.getBoundingClientRect)return Mt();var e=t,n=!1;do if(e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight){var o=x(e);if(e.clientWidth<e.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||e.clientHeight<e.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!e.getBoundingClientRect||e===document.body)return Mt();if(n||i)return e;n=!0}}while(e=e.parentNode);return Mt()}function na(t,i){if(t&&i)for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function Hi(t,i){return Math.round(t.top)===Math.round(i.top)&&Math.round(t.left)===Math.round(i.left)&&Math.round(t.height)===Math.round(i.height)&&Math.round(t.width)===Math.round(i.width)}var xe;function io(t,i){return function(){if(!xe){var e=arguments,n=this;e.length===1?t.call(n,e[0]):t.apply(n,e),xe=setTimeout(function(){xe=void 0},i)}}}function oa(){clearTimeout(xe),xe=void 0}function no(t,i,e){t.scrollLeft+=i,t.scrollTop+=e}function oo(t){var i=window.Polymer,e=window.jQuery||window.Zepto;return i&&i.dom?i.dom(t).cloneNode(!0):e?e(t).clone(!0)[0]:t.cloneNode(!0)}function ro(t,i,e){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(!(!Vt(o,i.draggable,t,!1)||o.animated||o===e)){var c=G(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,c.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,c.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var gt="Sortable"+new Date().getTime();function ra(){var t=[],i;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(x(o,"display")==="none"||o===E.ghost)){t.push({target:o,rect:G(o)});var r=Lt({},t[t.length-1].rect);if(o.thisAnimationDuration){var a=de(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){t.push(n)},removeAnimationState:function(n){t.splice(ia(t,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(i),typeof n=="function"&&n();return}var r=!1,a=0;t.forEach(function(s){var l=0,c=s.target,d=c.fromRect,u=G(c),p=c.prevFromRect,g=c.prevToRect,f=s.rect,y=de(c,!0);y&&(u.top-=y.f,u.left-=y.e),c.toRect=u,c.thisAnimationDuration&&Hi(p,u)&&!Hi(d,u)&&(f.top-u.top)/(f.left-u.left)===(d.top-u.top)/(d.left-u.left)&&(l=sa(f,p,g,o.options)),Hi(u,d)||(c.prevFromRect=d,c.prevToRect=u,l||(l=o.options.animation),o.animate(c,f,u,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(i),r?i=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),t=[]},animate:function(n,o,r,a){if(a){x(n,"transition",""),x(n,"transform","");var s=de(this.el),l=s&&s.a,c=s&&s.d,d=(o.left-r.left)/(l||1),u=(o.top-r.top)/(c||1);n.animatingX=!!d,n.animatingY=!!u,x(n,"transform","translate3d("+d+"px,"+u+"px,0)"),this.forRepaintDummy=aa(n),x(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),x(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){x(n,"transition",""),x(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function aa(t){return t.offsetWidth}function sa(t,i,e,n){return Math.sqrt(Math.pow(i.top-t.top,2)+Math.pow(i.left-t.left,2))/Math.sqrt(Math.pow(i.top-e.top,2)+Math.pow(i.left-e.left,2))*n.animation}var re=[],Pi={initializeByDefault:!0},Oe={mount:function(i){for(var e in Pi)Pi.hasOwnProperty(e)&&!(e in i)&&(i[e]=Pi[e]);re.forEach(function(n){if(n.pluginName===i.pluginName)throw"Sortable: Cannot mount plugin ".concat(i.pluginName," more than once")}),re.push(i)},pluginEvent:function(i,e,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=i+"Global";re.forEach(function(a){e[a.pluginName]&&(e[a.pluginName][r]&&e[a.pluginName][r](Lt({sortable:e},n)),e.options[a.pluginName]&&e[a.pluginName][i]&&e[a.pluginName][i](Lt({sortable:e},n)))})},initializePlugins:function(i,e,n,o){re.forEach(function(s){var l=s.pluginName;if(!(!i.options[l]&&!s.initializeByDefault)){var c=new s(i,e,i.options);c.sortable=i,c.options=i.options,i[l]=c,kt(n,c.defaults)}});for(var r in i.options)if(i.options.hasOwnProperty(r)){var a=this.modifyOption(i,r,i.options[r]);typeof a<"u"&&(i.options[r]=a)}},getEventProperties:function(i,e){var n={};return re.forEach(function(o){typeof o.eventProperties=="function"&&kt(n,o.eventProperties.call(e[o.pluginName],i))}),n},modifyOption:function(i,e,n){var o;return re.forEach(function(r){i[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[e]=="function"&&(o=r.optionListeners[e].call(i[r.pluginName],n))}),o}};function la(t){var i=t.sortable,e=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,u=t.newDraggableIndex,p=t.originalEvent,g=t.putSortable,f=t.extraEventProperties;if(i=i||e&&e[gt],!!i){var y,S=i.options,w="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Nt&&!Le?y=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(y=document.createEvent("Event"),y.initEvent(n,!0,!0)),y.to=a||e,y.from=s||e,y.item=o||e,y.clone=r,y.oldIndex=l,y.newIndex=c,y.oldDraggableIndex=d,y.newDraggableIndex=u,y.originalEvent=p,y.pullMode=g?g.lastPutMode:void 0;var A=Lt(Lt({},f),Oe.getEventProperties(n,i));for(var $ in A)y[$]=A[$];e&&e.dispatchEvent(y),S[w]&&S[w].call(i,y)}}var ca=["evt"],ft=function(i,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=ta(n,ca);Oe.pluginEvent.bind(E)(i,e,Lt({dragEl:h,parentEl:Y,ghostEl:C,rootEl:F,nextEl:Qt,lastDownEl:Ye,cloneEl:q,cloneHidden:Zt,dragStarted:be,putSortable:tt,activeSortable:E.active,originalEvent:o,oldIndex:ue,oldDraggableIndex:Ee,newIndex:vt,newDraggableIndex:qt,hideGhostForTarget:co,unhideGhostForTarget:uo,cloneNowHidden:function(){Zt=!0},cloneNowShown:function(){Zt=!1},dispatchSortableEvent:function(s){ct({sortable:e,name:s,originalEvent:o})}},r))};function ct(t){la(Lt({putSortable:tt,cloneEl:q,targetEl:h,rootEl:F,oldIndex:ue,oldDraggableIndex:Ee,newIndex:vt,newDraggableIndex:qt},t))}var h,Y,C,F,Qt,Ye,q,Zt,ue,vt,Ee,qt,Be,tt,se=!1,ii=!1,ni=[],Jt,_t,ki,Ni,Ln,On,be,ae,$e,Ae=!1,Ue=!1,We,at,Bi=[],Wi=!1,oi=[],Ri=typeof document<"u",Fe=an,In=Le||Nt?"cssFloat":"float",ua=Ri&&!Kn&&!an&&"draggable"in document.createElement("div"),ao=function(){if(Ri){if(Nt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),so=function(i,e){var n=x(i),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=pe(i,0,e),a=pe(i,1,e),s=r&&x(r),l=a&&x(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+G(r).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+G(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var u=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===u)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=o&&n[In]==="none"||a&&n[In]==="none"&&c+d>o)?"vertical":"horizontal"},da=function(i,e,n){var o=n?i.left:i.top,r=n?i.right:i.bottom,a=n?i.width:i.height,s=n?e.left:e.top,l=n?e.right:e.bottom,c=n?e.width:e.height;return o===s||r===l||o+a/2===s+c/2},ha=function(i,e){var n;return ni.some(function(o){var r=o[gt].options.emptyInsertThreshold;if(!(!r||sn(o))){var a=G(o),s=i>=a.left-r&&i<=a.right+r,l=e>=a.top-r&&e<=a.bottom+r;if(s&&l)return n=o}}),n},lo=function(i){function e(r,a){return function(s,l,c,d){var u=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||u))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return e(r(s,l,c,d),a)(s,l,c,d);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=i.group;(!o||Xe(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,i.group=n},co=function(){!ao&&C&&x(C,"display","none")},uo=function(){!ao&&C&&x(C,"display","")};Ri&&!Kn&&document.addEventListener("click",function(t){if(ii)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ii=!1,!1},!0);var Kt=function(i){if(h){i=i.touches?i.touches[0]:i;var e=ha(i.clientX,i.clientY);if(e){var n={};for(var o in i)i.hasOwnProperty(o)&&(n[o]=i[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[gt]._onDragOver(n)}}},fa=function(i){h&&h.parentNode[gt]._isOutsideThisEl(i.target)};function E(t,i){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=i=kt({},i),t[gt]=this;var e={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return so(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:E.supportPointer!==!1&&"PointerEvent"in window&&(!Se||an),emptyInsertThreshold:5};Oe.initializePlugins(this,t,e);for(var n in e)!(n in i)&&(i[n]=e[n]);lo(i);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=i.forceFallback?!1:ua,this.nativeDraggable&&(this.options.touchStartThreshold=1),i.supportPointer?R(t,"pointerdown",this._onTapStart):(R(t,"mousedown",this._onTapStart),R(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(R(t,"dragover",this),R(t,"dragenter",this)),ni.push(this.el),i.store&&i.store.get&&this.sort(i.store.get(this)||[]),kt(this,ra())}E.prototype={constructor:E,_isOutsideThisEl:function(i){!this.el.contains(i)&&i!==this.el&&(ae=null)},_getDirection:function(i,e){return typeof this.options.direction=="function"?this.options.direction.call(this,i,e,h):this.options.direction},_onTapStart:function(i){if(i.cancelable){var e=this,n=this.el,o=this.options,r=o.preventOnFilter,a=i.type,s=i.touches&&i.touches[0]||i.pointerType&&i.pointerType==="touch"&&i,l=(s||i).target,c=i.target.shadowRoot&&(i.path&&i.path[0]||i.composedPath&&i.composedPath()[0])||l,d=o.filter;if(Sa(n),!h&&!(/mousedown|pointerdown/.test(a)&&i.button!==0||o.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Se&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=Vt(l,o.draggable,n,!1),!(l&&l.animated)&&Ye!==l)){if(ue=$t(l),Ee=$t(l,o.draggable),typeof d=="function"){if(d.call(this,i,l,this)){ct({sortable:e,rootEl:c,name:"filter",targetEl:l,toEl:n,fromEl:n}),ft("filter",e,{evt:i}),r&&i.preventDefault();return}}else if(d&&(d=d.split(",").some(function(u){if(u=Vt(c,u.trim(),n,!1),u)return ct({sortable:e,rootEl:u,name:"filter",targetEl:l,fromEl:n,toEl:n}),ft("filter",e,{evt:i}),!0}),d)){r&&i.preventDefault();return}o.handle&&!Vt(c,o.handle,n,!1)||this._prepareDragStart(i,s,l)}}},_prepareDragStart:function(i,e,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!h&&n.parentNode===r){var c=G(n);if(F=r,h=n,Y=h.parentNode,Qt=h.nextSibling,Ye=n,Be=a.group,E.dragged=h,Jt={target:h,clientX:(e||i).clientX,clientY:(e||i).clientY},Ln=Jt.clientX-c.left,On=Jt.clientY-c.top,this._lastX=(e||i).clientX,this._lastY=(e||i).clientY,h.style["will-change"]="all",l=function(){if(ft("delayEnded",o,{evt:i}),E.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!Vn&&o.nativeDraggable&&(h.draggable=!0),o._triggerDragStart(i,e),ct({sortable:o,name:"choose",originalEvent:i}),bt(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){eo(h,d.trim(),Ui)}),R(s,"dragover",Kt),R(s,"mousemove",Kt),R(s,"touchmove",Kt),a.supportPointer?(R(s,"pointerup",o._onDrop),!this.nativeDraggable&&R(s,"pointercancel",o._onDrop)):(R(s,"mouseup",o._onDrop),R(s,"touchend",o._onDrop),R(s,"touchcancel",o._onDrop)),Vn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),ft("delayStart",this,{evt:i}),a.delay&&(!a.delayOnTouchOnly||e)&&(!this.nativeDraggable||!(Le||Nt))){if(E.eventCanceled){this._onDrop();return}a.supportPointer?(R(s,"pointerup",o._disableDelayedDrag),R(s,"pointercancel",o._disableDelayedDrag)):(R(s,"mouseup",o._disableDelayedDrag),R(s,"touchend",o._disableDelayedDrag),R(s,"touchcancel",o._disableDelayedDrag)),R(s,"mousemove",o._delayedDragTouchMoveHandler),R(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&R(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(i){var e=i.touches?i.touches[0]:i;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&Ui(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var i=this.el.ownerDocument;T(i,"mouseup",this._disableDelayedDrag),T(i,"touchend",this._disableDelayedDrag),T(i,"touchcancel",this._disableDelayedDrag),T(i,"pointerup",this._disableDelayedDrag),T(i,"pointercancel",this._disableDelayedDrag),T(i,"mousemove",this._delayedDragTouchMoveHandler),T(i,"touchmove",this._delayedDragTouchMoveHandler),T(i,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(i,e){e=e||i.pointerType=="touch"&&i,!this.nativeDraggable||e?this.options.supportPointer?R(document,"pointermove",this._onTouchMove):e?R(document,"touchmove",this._onTouchMove):R(document,"mousemove",this._onTouchMove):(R(h,"dragend",this),R(F,"dragstart",this._onDragStart));try{document.selection?Ge(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(i,e){if(se=!1,F&&h){ft("dragStarted",this,{evt:e}),this.nativeDraggable&&R(document,"dragover",fa);var n=this.options;!i&&bt(h,n.dragClass,!1),bt(h,n.ghostClass,!0),E.active=this,i&&this._appendGhost(),ct({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(_t){this._lastX=_t.clientX,this._lastY=_t.clientY,co();for(var i=document.elementFromPoint(_t.clientX,_t.clientY),e=i;i&&i.shadowRoot&&(i=i.shadowRoot.elementFromPoint(_t.clientX,_t.clientY),i!==e);)e=i;if(h.parentNode[gt]._isOutsideThisEl(i),e)do{if(e[gt]){var n=void 0;if(n=e[gt]._onDragOver({clientX:_t.clientX,clientY:_t.clientY,target:i,rootEl:e}),n&&!this.options.dragoverBubble)break}i=e}while(e=to(e));uo()}},_onTouchMove:function(i){if(Jt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,r=i.touches?i.touches[0]:i,a=C&&de(C,!0),s=C&&a&&a.a,l=C&&a&&a.d,c=Fe&&at&&Mn(at),d=(r.clientX-Jt.clientX+o.x)/(s||1)+(c?c[0]-Bi[0]:0)/(s||1),u=(r.clientY-Jt.clientY+o.y)/(l||1)+(c?c[1]-Bi[1]:0)/(l||1);if(!E.active&&!se){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(i,!0)}if(C){a?(a.e+=d-(ki||0),a.f+=u-(Ni||0)):a={a:1,b:0,c:0,d:1,e:d,f:u};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");x(C,"webkitTransform",p),x(C,"mozTransform",p),x(C,"msTransform",p),x(C,"transform",p),ki=d,Ni=u,_t=r}i.cancelable&&i.preventDefault()}},_appendGhost:function(){if(!C){var i=this.options.fallbackOnBody?document.body:F,e=G(h,!0,Fe,!0,i),n=this.options;if(Fe){for(at=i;x(at,"position")==="static"&&x(at,"transform")==="none"&&at!==document;)at=at.parentNode;at!==document.body&&at!==document.documentElement?(at===document&&(at=Mt()),e.top+=at.scrollTop,e.left+=at.scrollLeft):at=Mt(),Bi=Mn(at)}C=h.cloneNode(!0),bt(C,n.ghostClass,!1),bt(C,n.fallbackClass,!0),bt(C,n.dragClass,!0),x(C,"transition",""),x(C,"transform",""),x(C,"box-sizing","border-box"),x(C,"margin",0),x(C,"top",e.top),x(C,"left",e.left),x(C,"width",e.width),x(C,"height",e.height),x(C,"opacity","0.8"),x(C,"position",Fe?"absolute":"fixed"),x(C,"zIndex","100000"),x(C,"pointerEvents","none"),E.ghost=C,i.appendChild(C),x(C,"transform-origin",Ln/parseInt(C.style.width)*100+"% "+On/parseInt(C.style.height)*100+"%")}},_onDragStart:function(i,e){var n=this,o=i.dataTransfer,r=n.options;if(ft("dragStart",this,{evt:i}),E.eventCanceled){this._onDrop();return}ft("setupClone",this),E.eventCanceled||(q=oo(h),q.removeAttribute("id"),q.draggable=!1,q.style["will-change"]="",this._hideClone(),bt(q,this.options.chosenClass,!1),E.clone=q),n.cloneId=Ge(function(){ft("clone",n),!E.eventCanceled&&(n.options.removeCloneOnHide||F.insertBefore(q,h),n._hideClone(),ct({sortable:n,name:"clone"}))}),!e&&bt(h,r.dragClass,!0),e?(ii=!0,n._loopId=setInterval(n._emulateDragOver,50)):(T(document,"mouseup",n._onDrop),T(document,"touchend",n._onDrop),T(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,h)),R(document,"drop",n),x(h,"transform","translateZ(0)")),se=!0,n._dragStartId=Ge(n._dragStarted.bind(n,e,i)),R(document,"selectstart",n),be=!0,window.getSelection().removeAllRanges(),Se&&x(document.body,"user-select","none")},_onDragOver:function(i){var e=this.el,n=i.target,o,r,a,s=this.options,l=s.group,c=E.active,d=Be===l,u=s.sort,p=tt||c,g,f=this,y=!1;if(Wi)return;function S(O,ht){ft(O,f,Lt({evt:i,isOwner:d,axis:g?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:u,fromSortable:p,target:n,completed:A,onMove:function(Ot,Bt){return je(F,e,h,o,Ot,G(Ot),i,Bt)},changed:$},ht))}function w(){S("dragOverAnimationCapture"),f.captureAnimationState(),f!==p&&p.captureAnimationState()}function A(O){return S("dragOverCompleted",{insertion:O}),O&&(d?c._hideClone():c._showClone(f),f!==p&&(bt(h,tt?tt.options.ghostClass:c.options.ghostClass,!1),bt(h,s.ghostClass,!0)),tt!==f&&f!==E.active?tt=f:f===E.active&&tt&&(tt=null),p===f&&(f._ignoreWhileAnimating=n),f.animateAll(function(){S("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===h&&!h.animated||n===e&&!n.animated)&&(ae=null),!s.dragoverBubble&&!i.rootEl&&n!==document&&(h.parentNode[gt]._isOutsideThisEl(i.target),!O&&Kt(i)),!s.dragoverBubble&&i.stopPropagation&&i.stopPropagation(),y=!0}function $(){vt=$t(h),qt=$t(h,s.draggable),ct({sortable:f,name:"change",toEl:e,newIndex:vt,newDraggableIndex:qt,originalEvent:i})}if(i.preventDefault!==void 0&&i.cancelable&&i.preventDefault(),n=Vt(n,s.draggable,e,!0),S("dragOver"),E.eventCanceled)return y;if(h.contains(i.target)||n.animated&&n.animatingX&&n.animatingY||f._ignoreWhileAnimating===n)return A(!1);if(ii=!1,c&&!s.disabled&&(d?u||(a=Y!==F):tt===this||(this.lastPutMode=Be.checkPull(this,c,h,i))&&l.checkPut(this,c,h,i))){if(g=this._getDirection(i,n)==="vertical",o=G(h),S("dragOverValid"),E.eventCanceled)return y;if(a)return Y=F,w(),this._hideClone(),S("revert"),E.eventCanceled||(Qt?F.insertBefore(h,Qt):F.appendChild(h)),A(!0);var M=sn(e,s.draggable);if(!M||ya(i,g,this)&&!M.animated){if(M===h)return A(!1);if(M&&e===i.target&&(n=M),n&&(r=G(n)),je(F,e,h,o,n,r,i,!!n)!==!1)return w(),M&&M.nextSibling?e.insertBefore(h,M.nextSibling):e.appendChild(h),Y=e,$(),A(!0)}else if(M&&ma(i,g,this)){var P=pe(e,0,s,!0);if(P===h)return A(!1);if(n=P,r=G(n),je(F,e,h,o,n,r,i,!1)!==!1)return w(),e.insertBefore(h,P),Y=e,$(),A(!0)}else if(n.parentNode===e){r=G(n);var D=0,k,Q=h.parentNode!==e,U=!da(h.animated&&h.toRect||o,n.animated&&n.toRect||r,g),At=g?"top":"left",ut=Rn(n,"top","top")||Rn(h,"top","top"),Ct=ut?ut.scrollTop:void 0;ae!==n&&(k=r[At],Ae=!1,Ue=!U&&s.invertSwap||Q),D=ba(i,n,r,g,U?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,Ue,ae===n);var st;if(D!==0){var mt=$t(h);do mt-=D,st=Y.children[mt];while(st&&(x(st,"display")==="none"||st===C))}if(D===0||st===n)return A(!1);ae=n,$e=D;var Dt=n.nextElementSibling,dt=!1;dt=D===1;var xt=je(F,e,h,o,n,r,i,dt);if(xt!==!1)return(xt===1||xt===-1)&&(dt=xt===1),Wi=!0,setTimeout(ga,30),w(),dt&&!Dt?e.appendChild(h):n.parentNode.insertBefore(h,dt?Dt:n),ut&&no(ut,0,Ct-ut.scrollTop),Y=h.parentNode,k!==void 0&&!Ue&&(We=Math.abs(k-G(n)[At])),$(),A(!0)}if(e.contains(h))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){T(document,"mousemove",this._onTouchMove),T(document,"touchmove",this._onTouchMove),T(document,"pointermove",this._onTouchMove),T(document,"dragover",Kt),T(document,"mousemove",Kt),T(document,"touchmove",Kt)},_offUpEvents:function(){var i=this.el.ownerDocument;T(i,"mouseup",this._onDrop),T(i,"touchend",this._onDrop),T(i,"pointerup",this._onDrop),T(i,"pointercancel",this._onDrop),T(i,"touchcancel",this._onDrop),T(document,"selectstart",this)},_onDrop:function(i){var e=this.el,n=this.options;if(vt=$t(h),qt=$t(h,n.draggable),ft("drop",this,{evt:i}),Y=h&&h.parentNode,vt=$t(h),qt=$t(h,n.draggable),E.eventCanceled){this._nulling();return}se=!1,Ue=!1,Ae=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Gi(this.cloneId),Gi(this._dragStartId),this.nativeDraggable&&(T(document,"drop",this),T(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Se&&x(document.body,"user-select",""),x(h,"transform",""),i&&(be&&(i.cancelable&&i.preventDefault(),!n.dropBubble&&i.stopPropagation()),C&&C.parentNode&&C.parentNode.removeChild(C),(F===Y||tt&&tt.lastPutMode!=="clone")&&q&&q.parentNode&&q.parentNode.removeChild(q),h&&(this.nativeDraggable&&T(h,"dragend",this),Ui(h),h.style["will-change"]="",be&&!se&&bt(h,tt?tt.options.ghostClass:this.options.ghostClass,!1),bt(h,this.options.chosenClass,!1),ct({sortable:this,name:"unchoose",toEl:Y,newIndex:null,newDraggableIndex:null,originalEvent:i}),F!==Y?(vt>=0&&(ct({rootEl:Y,name:"add",toEl:Y,fromEl:F,originalEvent:i}),ct({sortable:this,name:"remove",toEl:Y,originalEvent:i}),ct({rootEl:Y,name:"sort",toEl:Y,fromEl:F,originalEvent:i}),ct({sortable:this,name:"sort",toEl:Y,originalEvent:i})),tt&&tt.save()):vt!==ue&&vt>=0&&(ct({sortable:this,name:"update",toEl:Y,originalEvent:i}),ct({sortable:this,name:"sort",toEl:Y,originalEvent:i})),E.active&&((vt==null||vt===-1)&&(vt=ue,qt=Ee),ct({sortable:this,name:"end",toEl:Y,originalEvent:i}),this.save()))),this._nulling()},_nulling:function(){ft("nulling",this),F=h=Y=C=Qt=q=Ye=Zt=Jt=_t=be=vt=qt=ue=Ee=ae=$e=tt=Be=E.dragged=E.ghost=E.clone=E.active=null,oi.forEach(function(i){i.checked=!0}),oi.length=ki=Ni=0},handleEvent:function(i){switch(i.type){case"drop":case"dragend":this._onDrop(i);break;case"dragenter":case"dragover":h&&(this._onDragOver(i),pa(i));break;case"selectstart":i.preventDefault();break}},toArray:function(){for(var i=[],e,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)e=n[o],Vt(e,a.draggable,this.el,!1)&&i.push(e.getAttribute(a.dataIdAttr)||wa(e));return i},sort:function(i,e){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];Vt(s,this.options.draggable,o,!1)&&(n[r]=s)},this),e&&this.captureAnimationState(),i.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),e&&this.animateAll()},save:function(){var i=this.options.store;i&&i.set&&i.set(this)},closest:function(i,e){return Vt(i,e||this.options.draggable,this.el,!1)},option:function(i,e){var n=this.options;if(e===void 0)return n[i];var o=Oe.modifyOption(this,i,e);typeof o<"u"?n[i]=o:n[i]=e,i==="group"&&lo(n)},destroy:function(){ft("destroy",this);var i=this.el;i[gt]=null,T(i,"mousedown",this._onTapStart),T(i,"touchstart",this._onTapStart),T(i,"pointerdown",this._onTapStart),this.nativeDraggable&&(T(i,"dragover",this),T(i,"dragenter",this)),Array.prototype.forEach.call(i.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ni.splice(ni.indexOf(this.el),1),this.el=i=null},_hideClone:function(){if(!Zt){if(ft("hideClone",this),E.eventCanceled)return;x(q,"display","none"),this.options.removeCloneOnHide&&q.parentNode&&q.parentNode.removeChild(q),Zt=!0}},_showClone:function(i){if(i.lastPutMode!=="clone"){this._hideClone();return}if(Zt){if(ft("showClone",this),E.eventCanceled)return;h.parentNode==F&&!this.options.group.revertClone?F.insertBefore(q,h):Qt?F.insertBefore(q,Qt):F.appendChild(q),this.options.group.revertClone&&this.animate(h,q),x(q,"display",""),Zt=!1}}};function pa(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function je(t,i,e,n,o,r,a,s){var l,c=t[gt],d=c.options.onMove,u;return window.CustomEvent&&!Nt&&!Le?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=i,l.from=t,l.dragged=e,l.draggedRect=n,l.related=o||i,l.relatedRect=r||G(i),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),d&&(u=d.call(c,l,a)),u}function Ui(t){t.draggable=!1}function ga(){Wi=!1}function ma(t,i,e){var n=G(pe(e.el,0,e.options,!0)),o=ro(e.el,e.options,C),r=10;return i?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}function ya(t,i,e){var n=G(sn(e.el,e.options.draggable)),o=ro(e.el,e.options,C),r=10;return i?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}function ba(t,i,e,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?e.height:e.width,d=n?e.top:e.left,u=n?e.bottom:e.right,p=!1;if(!a){if(s&&We<c*o){if(!Ae&&($e===1?l>d+c*r/2:l<u-c*r/2)&&(Ae=!0),Ae)p=!0;else if($e===1?l<d+We:l>u-We)return-$e}else if(l>d+c*(1-o)/2&&l<u-c*(1-o)/2)return va(i)}return p=p||a,p&&(l<d+c*r/2||l>u-c*r/2)?l>d+c/2?1:-1:0}function va(t){return $t(h)<$t(t)?1:-1}function wa(t){for(var i=t.tagName+t.className+t.src+t.href+t.textContent,e=i.length,n=0;e--;)n+=i.charCodeAt(e);return n.toString(36)}function Sa(t){oi.length=0;for(var i=t.getElementsByTagName("input"),e=i.length;e--;){var n=i[e];n.checked&&oi.push(n)}}function Ge(t){return setTimeout(t,0)}function Gi(t){return clearTimeout(t)}Ri&&R(document,"touchmove",function(t){(E.active||se)&&t.cancelable&&t.preventDefault()});E.utils={on:R,off:T,css:x,find:eo,is:function(i,e){return!!Vt(i,e,i,!1)},extend:na,throttle:io,closest:Vt,toggleClass:bt,clone:oo,index:$t,nextTick:Ge,cancelNextTick:Gi,detectDirection:so,getChild:pe,expando:gt};E.get=function(t){return t[gt]};E.mount=function(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];i[0].constructor===Array&&(i=i[0]),i.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(E.utils=Lt(Lt({},E.utils),n.utils)),Oe.mount(n)})};E.create=function(t,i){return new E(t,i)};E.version=ea;var W=[],ve,Ji,Ki=!1,Fi,ji,ri,we;function xa(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this))}return t.prototype={dragStarted:function(e){var n=e.originalEvent;this.sortable.nativeDraggable?R(document,"dragover",this._handleAutoScroll):this.options.supportPointer?R(document,"pointermove",this._handleFallbackAutoScroll):n.touches?R(document,"touchmove",this._handleFallbackAutoScroll):R(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var n=e.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?T(document,"dragover",this._handleAutoScroll):(T(document,"pointermove",this._handleFallbackAutoScroll),T(document,"touchmove",this._handleFallbackAutoScroll),T(document,"mousemove",this._handleFallbackAutoScroll)),Hn(),Je(),oa()},nulling:function(){ri=Ji=ve=Ki=we=Fi=ji=null,W.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,n){var o=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=document.elementFromPoint(r,a);if(ri=e,n||this.options.forceAutoScrollFallback||Le||Nt||Se){qi(e,this.options,s,n);var l=Xt(s,!0);Ki&&(!we||r!==Fi||a!==ji)&&(we&&Hn(),we=setInterval(function(){var c=Xt(document.elementFromPoint(r,a),!0);c!==l&&(l=c,Je()),qi(e,o.options,c,n)},10),Fi=r,ji=a)}else{if(!this.options.bubbleScroll||Xt(s,!0)===Mt()){Je();return}qi(e,this.options,Xt(s,!1),!1)}}},kt(t,{pluginName:"scroll",initializeByDefault:!0})}function Je(){W.forEach(function(t){clearInterval(t.pid)}),W=[]}function Hn(){clearInterval(we)}var qi=io(function(t,i,e,n){if(i.scroll){var o=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,a=i.scrollSensitivity,s=i.scrollSpeed,l=Mt(),c=!1,d;Ji!==e&&(Ji=e,Je(),ve=i.scroll,d=i.scrollFn,ve===!0&&(ve=Xt(e,!0)));var u=0,p=ve;do{var g=p,f=G(g),y=f.top,S=f.bottom,w=f.left,A=f.right,$=f.width,M=f.height,P=void 0,D=void 0,k=g.scrollWidth,Q=g.scrollHeight,U=x(g),At=g.scrollLeft,ut=g.scrollTop;g===l?(P=$<k&&(U.overflowX==="auto"||U.overflowX==="scroll"||U.overflowX==="visible"),D=M<Q&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflowY==="visible")):(P=$<k&&(U.overflowX==="auto"||U.overflowX==="scroll"),D=M<Q&&(U.overflowY==="auto"||U.overflowY==="scroll"));var Ct=P&&(Math.abs(A-o)<=a&&At+$<k)-(Math.abs(w-o)<=a&&!!At),st=D&&(Math.abs(S-r)<=a&&ut+M<Q)-(Math.abs(y-r)<=a&&!!ut);if(!W[u])for(var mt=0;mt<=u;mt++)W[mt]||(W[mt]={});(W[u].vx!=Ct||W[u].vy!=st||W[u].el!==g)&&(W[u].el=g,W[u].vx=Ct,W[u].vy=st,clearInterval(W[u].pid),(Ct!=0||st!=0)&&(c=!0,W[u].pid=setInterval((function(){n&&this.layer===0&&E.active._onTouchMove(ri);var Dt=W[this.layer].vy?W[this.layer].vy*s:0,dt=W[this.layer].vx?W[this.layer].vx*s:0;typeof d=="function"&&d.call(E.dragged.parentNode[gt],dt,Dt,t,ri,W[this.layer].el)!=="continue"||no(W[this.layer].el,dt,Dt)}).bind({layer:u}),24))),u++}while(i.bubbleScroll&&p!==l&&(p=Xt(p,!1)));Ki=c}},30),ho=function(i){var e=i.originalEvent,n=i.putSortable,o=i.dragEl,r=i.activeSortable,a=i.dispatchSortableEvent,s=i.hideGhostForTarget,l=i.unhideGhostForTarget;if(e){var c=n||r;s();var d=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(d.clientX,d.clientY);l(),c&&!c.el.contains(u)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function ln(){}ln.prototype={startIndex:null,dragStart:function(i){var e=i.oldDraggableIndex;this.startIndex=e},onSpill:function(i){var e=i.dragEl,n=i.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=pe(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:ho};kt(ln,{pluginName:"revertOnSpill"});function cn(){}cn.prototype={onSpill:function(i){var e=i.dragEl,n=i.putSortable,o=n||this.sortable;o.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),o.animateAll()},drop:ho};kt(cn,{pluginName:"removeOnSpill"});E.mount(new xa);E.mount(cn,ln);const Ea=t=>{const i=t.item;let e=Array.prototype.slice.call(i.parentNode.childNodes);return e=e.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),e},$a=(t,i,e,n,o,r)=>{const s=t.item.parentNode;for(const S of e)s.appendChild(S);if(t.oldIndex==t.newIndex)return;const l=n.getArray(),c=t.item.querySelector("eox-layercontrol-layer").layer.get(o),d=l.find(S=>S.get(o)===c),u=r.dataset.layer,p=l.find(S=>S.get(o)==u);let g,f;for(g=0;g<l.length;g++)if(l[g]==d){n.removeAt(g);break}for(f=0;f<l.length;f++)if(l[f]===p){g>f?n.insertAt(f,d):n.insertAt(f+1,d);break}const y=De(i,"eox-layercontrol")||i;_e(y,"sort:layer",{layer:c,oldIndex:t.oldIndex,newIndex:t.newIndex}),i.requestUpdate()};function Aa(t,i,e,n){let o=[],r=null;t._sortable=E.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=Ea(a)},onMove:a=>{r=a.related},onEnd:a=>$a(a,n,o,i,e,r)})}function Ca(t,i,e,n){const o=t.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(i)||(a.set(i,s),r=!0),a.get(e)||(a.set(e,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function un(t,i,e){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(c=>c.get(a)===s)];const l=r.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>o(c.getLayers().getArray(),a,s)),n};return o(t,i,e),n}function Da(t,i,e){if(!t||!i)return!1;if(!fo(t,e))return!0;const n=t.get("minZoom"),o=t.get("maxZoom"),r=i.getView().getZoom();return r>n&&r<o}function fo(t,i){const e=t.get("minZoom"),n=t.get("maxZoom");return!!(i&&(e!==-1/0||n!==1/0))}function Pn(t,i){var o,r,a;return!t||!i?void 0:t.getLayers?"group":((a=(o=i.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(t.getSource?(r=t.getSource())==null?void 0:r.ol_uid:void 0))?"draw":t.declutter_!==void 0||t.get("type")==="Vector"?"vector":"raster"}const _a=(t,i,e)=>{var s,l;let n=i;const o=e.layer.getSource(),r=((l=(s=e.layerConfig.schema)==null?void 0:s.options)==null?void 0:l.removeProperties)??[],a={...t};return r.forEach(c=>delete a[c]),o.updateParams?o.updateParams(a):o.getTileUrlFunction&&o.getTileUrlFunction()&&(n||(n=o.getTileUrlFunction()),o instanceof er&&(o._updatedUrl=Dn(o.getUrls()[0],t)),o.setTileUrlFunction((...c)=>{const d=new URL(n(...c));return r.forEach(u=>d.searchParams.delete(u)),Dn(d.href,t)}),o.setKey(new Date().toISOString())),n};async function Va(t,i,e){var s,l,c,d,u,p,g,f;const n="updateStyleVariables"in i,o="setStyle"in i,r=n?i.style_:e.style,a=Mi(t);if(r){const y=r.variables||{};r.variables={...y,...a}}if(n){const y=(t==null?void 0:t.variable)??(t==null?void 0:t.band);if(y!==void 0){const A=i.get("_lastVariable");if(y!==A){const $=await Ia(i,String(y)),M=($==null?void 0:$.targetMin)??si(i,String(y)).targetMin,P=($==null?void 0:$.targetMax)??si(i,String(y)).targetMax;((e==null?void 0:e.autofill)===!0||((s=e==null?void 0:e.schema)==null?void 0:s.autofill)===!0||((l=r==null?void 0:r.variables)==null?void 0:l.min)!==void 0||((c=r==null?void 0:r.variables)==null?void 0:c.max)!==void 0||((u=(d=e==null?void 0:e.schema)==null?void 0:d.properties)==null?void 0:u.min)!==void 0||((g=(p=e==null?void 0:e.schema)==null?void 0:p.properties)==null?void 0:g.max)!==void 0)&&(Yi(t,(f=e==null?void 0:e.schema)==null?void 0:f.properties,M,P),a.min=M,a.max=P,r!=null&&r.variables&&(r.variables.min=M,r.variables.max=P))}}const S=i.get("_geozarrDimensions"),w=i.getSource?i.getSource():null;if(w&&typeof w.updateDimensions=="function"&&S){const A={};for(const $ of Object.keys(S))t[$]!==void 0&&(A[$]=Yo(S[$],t[$]));Object.keys(A).length>0&&w.updateDimensions(A)}i.updateStyleVariables(a)}else if(o&&r){const y=Ta(r);i.setStyle(y)}}const Mi=t=>{const i={};for(const e in t)if(typeof t[e]=="object"&&t[e]!==null){const n=Mi(t[e]);for(const o in n)i[o]=n==null?void 0:n[o]}else i[e]=t==null?void 0:t[e];return i};function Ta(t){let i=t;if("variables"in t){let e=JSON.stringify(t);const{variables:n}=t;for(const o in n)typeof n[o]=="number"?e=e.replaceAll(`["var","${o}"]`,String(n[o])):e=e.replaceAll(`["var","${o}"]`,`"${n[o]}"`);i=JSON.parse(e)}return i}const Ra=(t,i,e)=>{if(!t)return;const n=Mi(i);let o,r;return Array.isArray(t)?r=structuredClone(t):r=[structuredClone(t)],o=r.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in n&&n[s]==l}),o.length||(o=null),o==null?void 0:o.map(a=>{var s;if(delete a.boundTo,a.rangeProperty&&e){const l=n[a.rangeProperty];l&&e[l]?(a.range=e[l],delete a.rangeProperty):l&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:(s=Object.keys(a))==null?void 0:s.reduce((l,c)=>{if(c==="domainProperties"){const d=a[c].map(u=>n[u]);l.domain=d,a.tickFormat===void 0&&d.length===2&&typeof d[0]=="number"&&typeof d[1]=="number"&&Number.isFinite(d[0])&&Number.isFinite(d[1])&&(l.tickFormat=Wo([d[0],d[1]]))}else l[c]=a[c];return l},{})}).filter(Boolean)};function qe(t,i){var s,l,c,d,u,p,g,f,y;if(!i)return null;let e={},n="updateStyleVariables"in t?t.styleVariables_||((s=t.style_)==null?void 0:s.variables)||((c=(l=t.get)==null?void 0:l.call(t,"style"))==null?void 0:c.variables):(d=i.style)==null?void 0:d.variables;if((i.type==="style"||i.style)&&n)e={...n};else if((p=(u=t.getSource())==null?void 0:u.getParams)!=null&&p.call(u))e=t.getSource().getParams();else if((f=(g=t.getSource())==null?void 0:g.getTileUrlFunction)!=null&&f.call(g))try{const S=t.getSource().getTileUrlFunction()([0,0,0]);if(S){const w=new URL(S);e={};for(const[A,$]of w.searchParams.entries()){const M=w.searchParams.getAll(A);e[A]=M.length>1?M:$}}}catch(S){console.error("Error parsing start values from tile URL",S)}else return null;const o=i;e.min===void 0&&o.min!==void 0&&(e.min=o.min),e.max===void 0&&o.max!==void 0&&(e.max=o.max),e.bands===void 0&&o.bands!==void 0&&(e.bands=o.bands),e.band===void 0&&o.band!==void 0&&(e.band=o.band),e.variable===void 0&&(e.variable=o.variable??o.band??(Array.isArray(o.bands)&&o.bands.length>0?o.bands[0]:void 0)??((y=t.get)==null?void 0:y.call(t,"_lastVariable")));const r=ai(i.schema),a=po(Object.keys(r).length?r:i.schema,e,i.schema,t);return Object.keys(a).length?a:null}function ai(t,i=t,e=new Set){if(!t||typeof t!="object")return{};const n={};typeof t.$ref=="string"&&!e.has(t.$ref)&&(e.add(t.$ref),Object.assign(n,ai(Ma(t.$ref,i),i,e)));for(const o of["anyOf","oneOf","allOf"])if(Array.isArray(t[o]))for(const r of t[o])Object.assign(n,ai(r,i,e));return Object.assign(n,t.properties)}function po(t,i,e=t,n=null){var r,a,s,l,c,d,u,p,g,f,y,S;let o={};for(const w in t){const A=(r=t[w])==null?void 0:r.type;if(A&&A!=="object"&&i[w]!==void 0){const $=["number","integer"].includes(A)?Number(i[w]):i[w];o[w]=Number.isNaN($)?i[w]:$}else if(w==="variable"&&A&&A!=="object"&&n){const $=n.getSource?n.getSource():null,M=((a=n.get)==null?void 0:a.call(n,"_lastVariable"))||(typeof($==null?void 0:$.getBands)=="function"?$.getBands():null)||($==null?void 0:$.bands_)||((c=(l=(s=n.get)==null?void 0:s.call(n,"_jsonDefinition"))==null?void 0:l.source)==null?void 0:c.bands)||((u=(d=n.get)==null?void 0:d.call(n,"source"))==null?void 0:u.bands),P=Array.isArray(M)&&M.length>0?M[0]:typeof M=="string"?M:void 0;P&&(!Array.isArray((p=t[w])==null?void 0:p.enum)||t[w].enum.includes(P))?o[w]=P:((g=t[w])==null?void 0:g.default)!==void 0?o[w]=t[w].default:Array.isArray((f=t[w])==null?void 0:f.enum)&&t[w].enum.length>0&&(o[w]=t[w].enum[0])}else if(A&&A!=="object"&&((y=t[w])==null?void 0:y.default)!==void 0)o[w]=t[w].default;else if(A&&A!=="object"&&Array.isArray((S=t[w])==null?void 0:S.enum)&&t[w].enum.length>0)o[w]=t[w].enum[0];else{const $=po(ai(t[w],e),i,e,n);Object.keys($).length>0&&(o[w]=$)}}return o}function Ma(t,i){if(t.startsWith("#/"))return t.slice(2).split("/").reduce((e,n)=>e==null?void 0:e[n.replace(/~1/g,"/").replace(/~0/g,"~")],i)}const go=(t,i)=>t==null?void 0:t.filter(e=>["remove","sort"].filter(n=>i!=null&&i.get("layerControlDisable")?n!=="sort":!0).includes(e)),mo=(t,i)=>t==null?void 0:t.filter(e=>{var o;let n=!0;return["remove","sort"].includes(e)&&(n=!1),e==="info"&&(n=i.get("description")),e==="config"&&(n=i.get("layerConfig")),e==="datetime"&&(n=(o=i.get("layerDatetime"))==null?void 0:o.controlValues),e==="legend"&&(n=i.get("layerLegend")),n}),La=(t,i,e)=>m`
  <button
    slot="${t}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${e?t:m`<i class="small primary-text">${i}</i>`}
  </button>
`,yo=(t,i)=>m`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:e}=t;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${t.unstyled?"x":m`<i class="small red-text">${i}</i>`}
  </button>
`,bo=(t,i,e)=>m`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${t.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${e?"═":m`<i class="small primary-text">${i}</i>`}
  </button>
`;function Ce(){return{dots:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
    </svg>`}}const vo=t=>{var e;const i=["layerControlHide","layerControlOptional"];return(e=t==null?void 0:t.getArray())==null?void 0:e.filter(n=>i.every(o=>!n.get(o)))};function Oa(t,i){var o,r;const e=(o=t.get("layerDatetime"))==null?void 0:o.sliceMap;if(!e||!(i in e))return;const n=(r=t.getSource)==null?void 0:r.call(t);typeof(n==null?void 0:n.updateDimensions)=="function"&&n.updateDimensions({time:e[i]})}function wo(t,i,e=!1){if(t.stopPropagation(),!e){const n=Object.assign(new CustomEvent("datetime:updated",{detail:t.detail,bubbles:!0,composed:!0}),{isUser:t.isUser===!0});i.dispatchEvent(n);return}Qe(i,"datetime:updated",{detail:t.detail,bubbles:!0,composed:!0,activity:t.isUser===!0,action:"datetime:updated"})}function si(t,i,e){const n=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,o=n==null?void 0:n[i],{min:r,max:a}=Go(o==null?void 0:o.valid_range,o==null?void 0:o.visualization_range);return{targetMin:r,targetMax:a}}async function Ia(t,i){var S,w,A,$,M,P,D,k,Q,U,At,ut,Ct,st,mt,Dt,dt,xt,O,ht,yt,Ot,Bt,Ie,He,dn,hn,fn,pn,gn,mn,yn,bn,vn,wn,Sn,xn,En,$n;if(!t||!i)return;const e=t.getSource?t.getSource():null,n=t.get("_geozarrSourceUrl")||((w=(S=t.get("_jsonDefinition"))==null?void 0:S.source)==null?void 0:w.url)||((A=t.get("source"))==null?void 0:A.url)||t.get("_geozarrRootUrl");let o=e;if(e){if(typeof e.setBands=="function")e.setBands([i]);else if(n&&e.constructor){const I=e.constructor,Yt=(($=e.getProjection)==null?void 0:$.call(e))||t.get("_mapProjection")||((P=(M=t.get("_jsonDefinition"))==null?void 0:M.source)==null?void 0:P.projection),Ut=e.dimensions_&&Object.keys(e.dimensions_).length>0?e.dimensions_:(k=(D=t.get("_jsonDefinition"))==null?void 0:D.source)==null?void 0:k.dimensions,rt=(U=(Q=t.get("_geozarrVariables"))==null?void 0:Q[i])==null?void 0:U.dimensions;let Wt;Ut&&(Array.isArray(rt)?(Wt=Object.fromEntries(Object.entries(Ut).filter(([N])=>rt.includes(N))),Object.keys(Wt).length===0&&(Wt=void 0)):Wt={...Ut});const Z=new I({url:n,bands:[i],crossOrigin:"anonymous",...Yt?{projection:Yt}:{},...Wt?{dimensions:Wt}:{}});t.setSource(Z),o=Z}}if(typeof(o==null?void 0:o.ready)=="function")try{await o.ready()}catch{}t.set("_lastVariable",i);const r=t.get("bands")||(Array.isArray((ut=(At=t.get("_jsonDefinition"))==null?void 0:At.source)==null?void 0:ut.bands)?(st=(Ct=t.get("_jsonDefinition"))==null?void 0:Ct.source)==null?void 0:st.bands:null),a=Array.isArray(r)&&r.length>1?r:[i];t.get("bands")!==void 0&&t.set("bands",a),t.get("band")!==void 0&&t.set("band",i);const s=t.get("layerConfig"),{targetMin:l,targetMax:c}=si(t,i),d=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,u=d==null?void 0:d[i],p=(u==null?void 0:u.valid_range)??(u==null?void 0:u.visualization_range),g=(s==null?void 0:s.autofill)===!0||((mt=s==null?void 0:s.schema)==null?void 0:mt.autofill)===!0,f=g||((Dt=t.styleVariables_)==null?void 0:Dt.min)!==void 0||((dt=t.styleVariables_)==null?void 0:dt.max)!==void 0||((O=(xt=t.style_)==null?void 0:xt.variables)==null?void 0:O.min)!==void 0||((yt=(ht=t.style_)==null?void 0:ht.variables)==null?void 0:yt.max)!==void 0||((Ie=(Bt=(Ot=t.get)==null?void 0:Ot.call(t,"style"))==null?void 0:Bt.variables)==null?void 0:Ie.min)!==void 0||((hn=(dn=(He=t.get)==null?void 0:He.call(t,"style"))==null?void 0:dn.variables)==null?void 0:hn.max)!==void 0||((pn=(fn=s==null?void 0:s.schema)==null?void 0:fn.properties)==null?void 0:pn.min)!==void 0||((mn=(gn=s==null?void 0:s.schema)==null?void 0:gn.properties)==null?void 0:mn.max)!==void 0;Jo(t,{variable:i,...f?{min:l,max:c}:{}});let y=s;if(s){let I;(yn=s.schema)!=null&&yn.properties&&(I={...s.schema.properties},I.variable&&(I.variable={...I.variable,default:i}),I.band&&(I.band={...I.band,default:i}),I.bands&&(I.bands={...I.bands,default:I.bands.type==="array"?a:a[0]}),I.redMax||I.greenMax||I.blueMax||Ko(I,l,c,p,g,!0)),y={...s,bands:a,band:i,...g||s.min!==void 0?{min:l}:{},...g||s.max!==void 0?{max:c}:{},schema:I?{...s.schema,properties:I}:s.schema},t.set("layerConfig",y)}if(o&&typeof o.getDimensions=="function")try{const I=await o.getDimensions();if(I){const Yt={},Ut=t.get("_geozarrDimensions")||{};for(const[Z,N]of Object.entries(I)){if(Z==="time"||!N||N.size<=0)continue;let Ft=Array.isArray((bn=Ut[Z])==null?void 0:bn.coordinates)&&Ut[Z].coordinates.length===N.size?Ut[Z].coordinates:[];Ft.length===0&&typeof o.getValue=="function"&&(Ft=await Promise.all([...Array(N.size).keys()].map(async jt=>{try{const Rt=await o.getValue(Z,jt);return typeof Rt=="bigint"?Number(Rt):Rt}catch{return jt}})));const Gt={...N,coordinates:Ft};Yt[Z]=Gt;const J=t.get("layerConfig")||y,me=(J==null?void 0:J.autofill)===!0||((vn=J==null?void 0:J.schema)==null?void 0:vn.autofill)===!0;if((wn=J==null?void 0:J.schema)!=null&&wn.properties&&(J.schema.properties[Z]!==void 0||me)){const jt={...J.schema.properties};jt[Z]=Qo(Z,Gt),y={...J,schema:{...J.schema,properties:jt}},t.set("layerConfig",y)}typeof o.updateDimensions=="function"&&((Sn=o.dimensions_)==null?void 0:Sn[Z])!==0&&o.updateDimensions({[Z]:0})}const rt=t.get("layerConfig")||y;if(((rt==null?void 0:rt.autofill)===!0||((xn=rt==null?void 0:rt.schema)==null?void 0:xn.autofill)===!0)&&((En=rt==null?void 0:rt.schema)!=null&&En.properties)){const Z=Object.keys(Ut).filter(N=>!(N in Yt)&&N in rt.schema.properties);if(Z.length>0){const N={...rt.schema.properties};for(const Ft of Z)delete N[Ft];y={...rt,schema:{...rt.schema,properties:N}},t.set("layerConfig",y)}}if(t.set("_geozarrDimensions",Yt),I!=null&&I.time&&I.time.size>0){const Z=I.time,N=t.get("layerDatetime")||{},Ft=Array.isArray(N.controlValues)&&N.controlValues.length===Z.size&&N.sliceMap&&Object.keys(N.sliceMap).length===Z.size;let Gt=N.sliceMap,J=N.controlValues;if(!Ft){const{units:Rt}=Z.attributes||{};let Pe=0,oe=1e3;if(Rt&&typeof Rt=="string"&&Rt.includes(" since ")){const lt=Rt.split(" since ");let Et=lt[1].trim();!Et.includes("T")&&!Et.includes("Z")&&(Et=Et.replace(" ","T")+"Z"),Pe=Date.parse(Et)||0;const ye=lt[0].toLowerCase();ye.includes("day")?oe=86400*1e3:ye.includes("nanosecond")?oe=1e-6:ye.includes("microsecond")?oe=.001:ye.includes("millisecond")?oe=1:ye.includes("second")&&(oe=1e3)}const jo=lt=>typeof lt=="string"?new Date(lt):new Date(Pe+Number(lt)*oe),An=await Promise.all([...Array(Z.size).keys()].map(async lt=>{const Et=typeof o.getValue=="function"?await o.getValue("time",lt):lt;return{index:lt,date:jo(Et)}}));An.sort((lt,Et)=>lt.date.getTime()-Et.date.getTime()),Gt={},J=An.map(lt=>{const Et=lt.date.toISOString();return Gt[Et]=lt.index,Et})}const me=N.currentStep&&J.includes(N.currentStep)?N.currentStep:J[0];if(!Ft||N.currentStep!==me){t.set("layerDatetime",{showUTC:!0,slider:!0,navigation:!0,...N,controlValues:J,sliceMap:Gt,currentStep:me});const Rt=J.map(Pe=>({date:Pe}));t.set("timeControlValues",Rt)}const jt=Gt[me]??0;typeof o.updateDimensions=="function"&&(($n=o.dimensions_)==null?void 0:$n.time)!==jt&&o.updateDimensions({time:jt})}}}catch(I){console.warn("Could not refresh GeoZarr dimensions for new band:",I)}return{targetMin:l,targetMax:c}}var So="Expected a function",kn=NaN,Ha="[object Symbol]",Pa=/^\s+|\s+$/g,ka=/^[-+]0x[0-9a-f]+$/i,Na=/^0b[01]+$/i,Ba=/^0o[0-7]+$/i,Ua=parseInt,Fa=typeof ke=="object"&&ke&&ke.Object===Object&&ke,ja=typeof self=="object"&&self&&self.Object===Object&&self,qa=Fa||ja||Function("return this")(),Za=Object.prototype,za=Za.toString,Xa=Math.max,Ya=Math.min,Zi=function(){return qa.Date.now()};function Wa(t,i,e){var n,o,r,a,s,l,c=0,d=!1,u=!1,p=!0;if(typeof t!="function")throw new TypeError(So);i=Nn(i)||0,li(e)&&(d=!!e.leading,u="maxWait"in e,r=u?Xa(Nn(e.maxWait)||0,i):r,p="trailing"in e?!!e.trailing:p);function g(D){var k=n,Q=o;return n=o=void 0,c=D,a=t.apply(Q,k),a}function f(D){return c=D,s=setTimeout(w,i),d?g(D):a}function y(D){var k=D-l,Q=D-c,U=i-k;return u?Ya(U,r-Q):U}function S(D){var k=D-l,Q=D-c;return l===void 0||k>=i||k<0||u&&Q>=r}function w(){var D=Zi();if(S(D))return A(D);s=setTimeout(w,y(D))}function A(D){return s=void 0,p&&n?g(D):(n=o=void 0,a)}function $(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function M(){return s===void 0?a:A(Zi())}function P(){var D=Zi(),k=S(D);if(n=arguments,o=this,l=D,k){if(s===void 0)return f(l);if(u)return s=setTimeout(w,i),g(l)}return s===void 0&&(s=setTimeout(w,i)),a}return P.cancel=$,P.flush=M,P}function Ga(t,i,e){var n=!0,o=!0;if(typeof t!="function")throw new TypeError(So);return li(e)&&(n="leading"in e?!!e.leading:n,o="trailing"in e?!!e.trailing:o),Wa(t,i,{leading:n,maxWait:i,trailing:o})}function li(t){var i=typeof t;return!!t&&(i=="object"||i=="function")}function Ja(t){return!!t&&typeof t=="object"}function Ka(t){return typeof t=="symbol"||Ja(t)&&za.call(t)==Ha}function Nn(t){if(typeof t=="number")return t;if(Ka(t))return kn;if(li(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=li(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=t.replace(Pa,"");var e=Na.test(t);return e||Ba.test(t)?Ua(t.slice(2),e?2:8):ka.test(t)?kn:+t}var Qa=Ga;const Bn=ir(Qa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=t=>t??ie;var wt,ci,ui;class xo extends Tt{constructor(){super();V(this,wt,[]);V(this,ci,zi`
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
  `);V(this,ui,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return b(this,wt)?b(this,wt).length>1?b(this,wt):b(this,wt)[0]:null}set layerLegend(e){var n;e?Array.isArray(e)?X(this,wt,e.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):X(this,wt,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...e}]):X(this,wt,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;X(this,wt,(e=b(this,wt))==null?void 0:e.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),m`
      <style>
        ${b(this,ci)}
        ${!this.unstyled&&b(this,ui)}
      </style>
      ${j(this.layerLegend,()=>m`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${b(this,wt).map((e,n,o)=>m`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${Ze(e.scaleType)}"
                  markType="${Ze(e.markType)}"
                  titleText="${Ze(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${Ze(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${n!==o.length-1?m`<div class="separator"></div>`:ie}
              `)}
          </div>
        `)}
    `}}wt=new WeakMap,ci=new WeakMap,ui=new WeakMap,z(xo,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",xo);var H,et,he,te,Te,Qi,di,hi;class Eo extends Tt{constructor(){super();V(this,Te);V(this,H,{});V(this,et,null);V(this,he);V(this,te,e=>{var o,r,a,s,l,c,d,u,p;const n=e;if(n.key==="source"&&X(this,he,void 0),n.key==="layerConfig"){this.layerConfig=this.layer.get("layerConfig");const g=qe(this.layer,this.layerConfig)||{},f=(r=(o=this.layerConfig)==null?void 0:o.schema)==null?void 0:r.properties,y=((a=this.layerConfig)==null?void 0:a.autofill)===!0||((l=(s=this.layerConfig)==null?void 0:s.schema)==null?void 0:l.autofill)===!0;((c=this.layerConfig)==null?void 0:c.min)!==void 0&&((d=this.layerConfig)==null?void 0:d.max)!==void 0&&Yi(b(this,H),f,this.layerConfig.min,this.layerConfig.max,y);const S=this.layer.get("_lastVariable")||((u=this.layerConfig)==null?void 0:u.band)||(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0);if(S&&(y||(f==null?void 0:f.variable)!==void 0||(f==null?void 0:f.band)!==void 0)&&((f==null?void 0:f.band)!==void 0?b(this,H).band=S:b(this,H).variable=S),X(this,et,{...b(this,H),...g}),f&&!y){const w=new Set(Object.keys(f));for(const A of Object.keys(b(this,et)))w.has(A)||delete b(this,et)[A]}X(this,H,{...b(this,et)}),this.requestUpdate()}});V(this,di,zi`
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
  `);V(this,hi,zi`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Bn(B(this,Te,Qi),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){var e;super.connectedCallback(),(e=this.layer)!=null&&e.on&&this.layer.on("propertychange",b(this,te))}disconnectedCallback(){var e,n,o;super.disconnectedCallback(),(n=(e=this.throttleDataChange)==null?void 0:e.cancel)==null||n.call(e),(o=this.layer)!=null&&o.un&&this.layer.un("propertychange",b(this,te))}willUpdate(e){var n,o,r,a,s;if(e.has("layer")&&e.get("layer")!==void 0&&(X(this,H,{}),X(this,et,null)),e.has("layerConfig")&&this.layer){const l=qe(this.layer,this.layerConfig)||{},c=(o=(n=this.layerConfig)==null?void 0:n.schema)==null?void 0:o.properties,d=((r=this.layerConfig)==null?void 0:r.autofill)===!0||((s=(a=this.layerConfig)==null?void 0:a.schema)==null?void 0:s.autofill)===!0,u={...b(this,H),...l};if(c&&!d){const p=new Set(Object.keys(c));for(const g of Object.keys(u))p.has(g)||delete u[g]}X(this,H,u)}}updated(e){var n,o,r,a,s;if(e.has("layer")){const l=e.get("layer");l!=null&&l.un&&l.un("propertychange",b(this,te)),(n=this.layer)!=null&&n.on&&this.layer.on("propertychange",b(this,te))}if(e.has("layerConfig")){(r=(o=this.throttleDataChange)==null?void 0:o.cancel)==null||r.call(o);const l=((a=this.layerConfig)==null?void 0:a.type)==="style"||(s=this.layerConfig)!=null&&s.style?100:1e3;this.throttleDataChange=Bn(B(this,Te,Qi),l)}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l,c,d,u,p;const n={...qe(this.layer,this.layerConfig)||{},...b(this,H)},o=(c=(l=this.layerConfig)==null?void 0:l.schema)==null?void 0:c.properties,r=((d=this.layerConfig)==null?void 0:d.autofill)===!0||((p=(u=this.layerConfig)==null?void 0:u.schema)==null?void 0:p.autofill)===!0;if(o&&!r){const g=new Set(Object.keys(o));for(const f of Object.keys(n))g.has(f)||delete n[f]}const a=Object.keys(n).length?n:null;JSON.stringify(a)!==JSON.stringify(b(this,et))&&X(this,et,a),X(this,H,{...b(this,et)}),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const s={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return m`
      <style>
        ${b(this,di)}
        ${!this.unstyled&&b(this,hi)}
      </style>
      ${j(this.layerConfig,()=>m`
          ${j(this.layerConfig.legend,()=>m`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Ra(this.layerConfig.legend,b(this,et),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${b(this,et)}
            .options=${s}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${g=>{this.throttleDataChange(g)}}
            @eox:activity=${g=>{g.stopPropagation()}}
          ></eox-jsonform>
        `)}
    `}}H=new WeakMap,et=new WeakMap,he=new WeakMap,te=new WeakMap,Te=new WeakSet,Qi=async function(e){var s,l,c,d,u,p,g,f,y,S,w,A,$,M,P,D,k,Q,U,At,ut,Ct,st,mt,Dt,dt;const n=!!(e!=null&&e.isUser),o=((s=b(this,H))==null?void 0:s.variable)??((l=b(this,H))==null?void 0:l.band)??((d=(c=this.layer)==null?void 0:c.get)==null?void 0:d.call(c,"_lastVariable"))??((u=this.layerConfig)==null?void 0:u.band)??(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0),r=((g=e.detail)==null?void 0:g.variable)??((f=e.detail)==null?void 0:f.band),a=r!==void 0&&o!==void 0&&String(r)!==String(o);if(a){const{targetMin:xt,targetMax:O}=si(this.layer,String(r),this.layerConfig),ht=(S=(y=this.layerConfig)==null?void 0:y.schema)==null?void 0:S.properties;Yi(e.detail,ht,xt,O)}if(X(this,H,{...e.detail}),((w=this.layerConfig)==null?void 0:w.type)==="style"||(A=this.layerConfig)!=null&&A.style)if("setStyle"in this.layer||"updateStyleVariables"in this.layer){const O=this.layer.styleVariables_||(($=this.layer.style_)==null?void 0:$.variables)||((D=(P=(M=this.layer).get)==null?void 0:P.call(M,"style"))==null?void 0:D.variables),ht=Mi(b(this,H)),yt=(Q=(k=this.layer)==null?void 0:k.get)==null?void 0:Q.call(k,"_geozarrDimensions"),Ot=yt&&Object.keys(yt).length>0;!n&&!a&&!Ot&&"updateStyleVariables"in this.layer&&!!O&&Object.keys(ht).length>0&&Object.entries(ht).every(([Ie,He])=>O[Ie]===He)||await Va(b(this,H),this.layer,this.layerConfig)}else console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`);else X(this,he,_a(b(this,H),b(this,he),this));if(a){this.layerConfig=((At=(U=this.layer)==null?void 0:U.get)==null?void 0:At.call(U,"layerConfig"))||this.layerConfig;const xt=qe(this.layer,this.layerConfig)||{},O=(Ct=(ut=this.layerConfig)==null?void 0:ut.schema)==null?void 0:Ct.properties,ht=((st=this.layerConfig)==null?void 0:st.autofill)===!0||((Dt=(mt=this.layerConfig)==null?void 0:mt.schema)==null?void 0:Dt.autofill)===!0;if(X(this,et,{...b(this,H),...xt,...r&&(ht||(O==null?void 0:O.variable)!==void 0||(O==null?void 0:O.band)!==void 0)?(O==null?void 0:O.band)!==void 0?{band:r}:{variable:r}:{},...b(this,H).min!==void 0&&(ht||(O==null?void 0:O.min)!==void 0)?{min:b(this,H).min}:{},...b(this,H).max!==void 0&&(ht||(O==null?void 0:O.max)!==void 0)?{max:b(this,H).max}:{}}),O&&!ht){const Ot=new Set(Object.keys(O));for(const Bt of Object.keys(b(this,et)))Ot.has(Bt)||delete b(this,et)[Bt]}X(this,H,{...b(this,et)});const yt=(dt=this.renderRoot)==null?void 0:dt.querySelector("eox-jsonform");yt!=null&&yt.editor&&!yt.editor.destroyed&&yt.editor.ready&&yt.editor.setValue(b(this,H))}this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:b(this,H),layer:this.layer,isUser:n}})),this.requestUpdate()},di=new WeakMap,hi=new WeakMap,z(Eo,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Eo);var Re,fi,Ao,pi,gi;class $o extends Tt{constructor(){super();V(this,fi);V(this,Re,jn(Oa,300));V(this,pi,"");V(this,gi,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){b(this,Re).flush(),super.disconnectedCallback()}render(){var e;return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),m`
      <style>
        ${b(this,pi)}
        ${!this.unstyled&&b(this,gi)}
      </style>
      ${j((e=this.layerDatetime)==null?void 0:e.controlValues,()=>m`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(n=>({date:n}))}]}
            @select=${B(this,fi,Ao)}
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
    `}}Re=new WeakMap,fi=new WeakSet,Ao=function(e){var l;e.stopPropagation();const n=new Date(e.detail.date[0]),o=(l=this.layerDatetime.controlValues)==null?void 0:l.some(c=>typeof c=="string"&&c.includes("T"));let r;o?r=n.toISOString():r=(d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`)(n);const a=this.layerDatetime.currentStep;if(r===a||o&&typeof a=="string"&&Math.floor(n.getTime()/1e3)===Math.floor(Date.parse(a)/1e3))return;const s=Object.assign(new CustomEvent("datetime:updated",{bubbles:!0,composed:!0,detail:{datetime:r,layer:this.layer}}),{isUser:e.isUser===!0});this.dispatchEvent(s),b(this,Re).call(this,this.layer,r),this.layerDatetime.currentStep=r,this.requestUpdate()},pi=new WeakMap,gi=new WeakMap,z($o,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",$o);var Me,mi,yi;class Co extends Tt{constructor(){super();V(this,Me,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");V(this,mi,`
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
  `);V(this,yi,`
    ${nn}
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,n=this.actions,o=n.length+e.length>1;return m`
      <style>
        ${b(this,mi)}
        ${!this.unstyled&&b(this,yi)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${j(o,()=>m`
            <nav>
              ${j(!this.toolsAsList,()=>m`
                  <div>
                    <!-- Labels for tabs -->
                    ${ze(e,(r,a)=>m`
                        <label
                          class=${b(this,Me).call(this,a)}
                          @click=${s=>{this.selectedTab=a;const l=De(this,"eox-layercontrol")||this;_e(l,"select:tool",{tool:r},s)}}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ze(n,r=>m`
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
          ${ze(e,(r,a)=>m`
              ${j(this.toolsAsList,()=>m`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${b(this,Me).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${j(this.toolsAsList&&a<e.length-1,()=>m`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}Me=new WeakMap,mi=new WeakMap,yi=new WeakMap,z(Co,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Co);var bi,_o,fe,vi,wi;class Do extends Tt{constructor(){super();V(this,bi);z(this,"_removeButton",e=>yo(this,e));z(this,"_sortButton",e=>bo(this,e,this.unstyled));z(this,"_button",(e,n)=>La(e,n,this.unstyled));z(this,"_getDefaultTools",e=>{var n,o;return m`
      <div slot="info-content">
        ${tr(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Xi((n=this.layer)==null?void 0:n.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
            @change=${r=>{var s,l;const a=De(this,"eox-layercontrol")||this;_e(a,"change:opacity",{layer:((s=this.layer)==null?void 0:s.get("id"))||((l=this.layer)==null?void 0:l.get("name")),opacity:parseFloat(r.target.value)},r)}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${j(this.layer.get("layerConfig"),()=>m`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${B(this,bi,_o)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${j(this.layer.get("layerDatetime"),()=>m`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>wo(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${j(this.layer.get("layerLegend"),()=>m`
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
      <div slot="remove-icon">${this._removeButton(e.remove)}</div>
      <div slot="sort-icon">${this._sortButton(e.sort)}</div>
    `});V(this,fe,!1);V(this,vi,"");V(this,wi,`
    ${this.embedded?"":nn}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var n,o,r;const e=this.parentElement||((n=this.getRootNode())==null?void 0:n.host);this.embedded=(e==null?void 0:e.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((o=this.layer)!=null&&o.getVisible()):this.embedded===!1?!0:!!((r=this.layer)!=null&&r.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){var e,n;(n=(e=this.layer)==null?void 0:e.on)==null||n.call(e,"propertychange",o=>{const r=o;(r.key==="layerConfig"||r.key==="layerDatetime"||r.key==="timeControlValues")&&this.requestUpdate()})}updated(e){var n;this.toolsAutoExpand&&(e.has("toolsAutoExpand")||e.has("layer"))&&(this.open=!!((n=this.layer)!=null&&n.getVisible()))}render(){const e=go(this.tools,this.layer),n=mo(this.tools,this.layer),o=e==null?void 0:e.length,r=n==null?void 0:n.length;return m`
      <style>
        ${b(this,vi)}
        ${!this.unstyled&&b(this,wi)}
      </style>
      ${j(o+r>0,()=>m`
          ${j(!(o===1&&r===0),()=>m`
              <details
                class="tools"
                .open=${Xi(this.open)}
                @toggle=${a=>{var s,l;if(this.open=a.target.open,b(this,fe)){X(this,fe,!1);const c=De(this,"eox-layercontrol")||this;_e(c,"toggle:tools",{layer:((s=this.layer)==null?void 0:s.get("id"))||((l=this.layer)==null?void 0:l.get("name")),open:this.open},a)}}}
              >
                <summary
                  @click=${()=>{X(this,fe,!0)}}
                ></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ze(n,a=>this._button(a,Ce()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(Ce())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}bi=new WeakSet,_o=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail.jsonformValue,layer:e.detail.layer,isUser:e.detail.isUser}}))},fe=new WeakMap,vi=new WeakMap,wi=new WeakMap,z(Do,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Do);const ts=t=>{var a,s,l,c;const i=()=>{const d=Da(t.layer,t.map,t.showLayerZoomState);let u=!1;!d&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,u=!0):d&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,u=!0),u&&(t.requestUpdate(),Qe(t,"change:resolution",{bubbles:!0,composed:!1,activity:!1}))};let e;const n=()=>{e&&Ne(e),e=void 0,t.map&&fo(t.layer,t.showLayerZoomState)&&(e=t.map.getView().on("change:resolution",i)),t.map&&i()};n();const o=(s=(a=t.map)==null?void 0:a.on)==null?void 0:s.call(a,"change:view",n),r=(c=(l=t.layer)==null?void 0:l.on)==null?void 0:c.call(l,"propertychange",d=>{const u=d;(u.key==="layerDatetime"||u.key==="layerConfig"||u.key==="timeControlValues")&&t.requestUpdate()});return()=>{e&&Ne(e),o&&Ne(o),r&&Ne(r)}},es=(t,i)=>{const e=i.layer;if(e.setVisible(t.target.checked),i.toolsAutoExpand){const n=i.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=t.target.checked)}t.target.checked&&e.get("layerControlExclusive")&&i.closest(`${i.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;if(o.layer!==e&&((r=o.layer)!=null&&r.get("layerControlExclusive"))){if(o.layer.setVisible(!1),o.toolsAutoExpand){const a=o.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}o.requestUpdate()}}),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),i.requestUpdate()};var St,le,ee,tn,To,Si,xi;class Vo extends Tt{constructor(){super();V(this,St);z(this,"currLayerVisibilityBasedOnZoom",!0);V(this,ee);V(this,Si,"");V(this,xi,`
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&B(this,St,tn).call(this)}disconnectedCallback(){var e;(e=b(this,ee))==null||e.call(this),X(this,ee,void 0),super.disconnectedCallback()}updated(e){this.isConnected&&(e.has("layer")||e.has("map")||e.has("showLayerZoomState"))&&B(this,St,tn).call(this)}render(){var d,u;const e=this.layer.getVisible(),n=e?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=B(this,St,le).call(this,"layerControlDisable")?"disabled":"",a=B(this,St,le).call(this,"layerControlExclusive")?"radio":"checkbox",s=((d=go(this.tools,this.layer))==null?void 0:d.length)>0,l=((u=mo(this.tools,this.layer))==null?void 0:u.length)>0,c=document.querySelector("eox-layercontrol-layer-tools");return c&&Object.assign(c,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),m`
      <style>
        ${b(this,Si)}
        ${!this.unstyled&&b(this,xi)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${j(this.layer,()=>m`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${n} ${o} responsive tiny-space"
          >
            ${j(!this.unstyled,()=>{if(B(this,St,le).call(this,"color"))return m`
                  <i class="small" style="color: ${B(this,St,le).call(this,"color")}">
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
                >${B(this,St,le).call(this,this.titleProperty)}</span
              >
            </div>

            ${j(l&&!this.toolsAutoExpand,()=>m`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const p=this.renderRoot.querySelector("eox-layercontrol-layer-tools");p.open=!p.open}}
                >
                  <i class="small">
                    ${Ce()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${j(!l&&s,()=>this.tools[0]==="remove"?yo(this,Ce()[this.tools[0]]):bo(this,Ce()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Xi(e)}
                @click=${B(this,St,To)}
                disabled=${r||ie}
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
              <!--<span class="tooltip top" style="pointer-events: none">${e?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${j(l&&!c,()=>m`
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
    `}}St=new WeakSet,le=function(e){var n;return(n=this.layer)==null?void 0:n.get(e)},ee=new WeakMap,tn=function(){var e;(e=b(this,ee))==null||e.call(this),X(this,ee,ts(this))},To=function(e){es(e,this)},Si=new WeakMap,xi=new WeakMap,z(Vo,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",Vo);var Ei,$i;class Ro extends Tt{constructor(){super();V(this,Ei,"");V(this,$i,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const e=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=vo(this.group.getLayers()))==null?void 0:r.length;return m`
      <style>
        ${b(this,Ei)}
        ${!this.unstyled&&b(this,$i)}
      </style>
      ${j(this.group,()=>m`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||ie}
            data-children-length=${n}
          >
            <summary class="square">
              ${j(n>0,()=>m`
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
    `}}Ei=new WeakMap,$i=new WeakMap,z(Ro,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Ro);const is=t=>{const{layers:i,idProperty:e,titleProperty:n,renderRoot:o}=t,r=jn(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(i&&(i.hasListener("change:length")&&(i==null||i.un("change:length",a)),i.on("change:length",a),i)){const s=o.querySelector("ul");Ca(i,e,n,t),Aa(s,i,e,t)}};var Ai,Ci;class Mo extends Tt{constructor(){super();V(this,Ai,"");V(this,Ci,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){is(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?vo(this.layers).reverse():[];return m`
      <style>
        ${b(this,Ai)}
        ${!this.unstyled&&b(this,Ci)}
      </style>
      <ul class="list no-space">
        ${j(this.layers,()=>m`
            ${zo(e,n=>n,n=>m`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${Pn(n,this.map)}"
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
                            .layerType=${Pn(n,this.map)}
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
    `}}Ai=new WeakMap,Ci=new WeakMap,z(Mo,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Mo);const ns=t=>{const i=t.querySelector("select[name=optional]"),e=i?i.value:null,n=un(t.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(t.idProperty)||o.ol_uid)===e);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:n})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),t.requestUpdate()};var Di,Oo;class Lo extends Tt{constructor(){super();V(this,Di);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=un(this.layers.getArray(),"layerControlOptional",!0);return m`
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
            ${e.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return m` <option value="${o}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${B(this,Di,Oo)}">Add</button>
      </nav>
    `}}Di=new WeakSet,Oo=function(){ns(this)},z(Lo,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Lo);const os=(t,i)=>{i.jsonInput=t.target.value,i.requestUpdate()},Un=t=>{const i=JSON.parse(`{"data":${Jn(t.jsonInput)}}`);Array.isArray(i.data)?i.data.forEach(n=>{t.eoxMap.addOrUpdateLayer(n)}):t.eoxMap.addOrUpdateLayer(i.data),t.jsonInput=null;const e=De(t,"eox-layercontrol")||t;_e(e,"add:layer",{layers:i.data}),t.requestUpdate()},rs=(t,i)=>{i.urlInput=t.target.value,i.requestUpdate()};async function as(t){const i=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!i)return!1;if(rn(i)==="XYZ")return{Name:i};try{const e=await Wr(i);t.wmsCapabilities=e}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const ss=(t,i)=>{const{Name:e}=t,n=rn(i.urlInput)||"XYZ",o={type:"Tile",properties:{id:e,title:e},source:{type:n,url:i.urlInput,params:{LAYERS:e}}};i.jsonInput=JSON.stringify(o)},ls=(t,i)=>{i.open=t||null,i.urlInput=null,i.jsonInput=null,i.wmsCapabilities=null,i.requestUpdate()};var it,Ho,Po,en,ko,No,Ke,_i;class Io extends Tt{constructor(){super();V(this,it);z(this,"urlInput",null);z(this,"jsonInput",null);z(this,"open",null);z(this,"searchLoad",!1);z(this,"wmsCapabilities",null);V(this,_i,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e={add:m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      </svg>`},n=this.open?"open":"close",o=this.open==="url",r=this.open==="json",a=!Gr(this.urlInput)||this.searchLoad?!0:ie;return m`
      <style>
        ${b(this,_i)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${n}"
          >
            <a
              @click=${()=>B(this,it,Ke).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>B(this,it,Ke).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>B(this,it,Ke).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":m`<i class="small primary-text">${e.add}</i>`}
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
                      @input=${B(this,it,Ho)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${B(this,it,Po)}
                  >
                    ${this.unstyled?"Search":m`<i class="small">${e.search}</i>`}
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
                                @click=${()=>B(this,it,en).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:ie}
              `:m`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${B(this,it,No)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Jr(this.jsonInput)?ie:!0}
                  @click=${B(this,it,ko)}
                >
                  ${this.unstyled?"Add JSON":m`<i class="small">${e.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}it=new WeakSet,Ho=function(e){rs(e,this)},Po=async function(){const e=await as(this);e&&B(this,it,en).call(this,e)},en=function(e){ss(e,this),Un(this)},ko=function(){Un(this)},No=function(e){os(e,this)},Ke=function(e){ls(e,this)},_i=new WeakMap,z(Io,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Io);const cs=(t,i)=>{if(i.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=i.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},Fn=t=>{const i=nr(t.for);return i&&i.map!==t.map&&(t.map=i.map),i};Xo();var zt,ge,Uo,Fo,Vi;class Bo extends Tt{constructor(){super();V(this,ge);V(this,zt);V(this,Vi,`
    ${nn}
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
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=Fn(this)}updated(e){e.has("for")&&(this.eoxMap=Fn(this))}get eoxMap(){return b(this,zt)}set eoxMap(e){const n=b(this,zt);X(this,zt,e),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const e=(o=this.map)==null?void 0:o.getLayers().getArray(),n=e&&((r=un(e,"layerControlOptional",!0))==null?void 0:r.length)>0;return m`
      <style>
        ${!this.unstyled&&b(this,Vi)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${j(this.addExternalLayers&&((a=b(this,zt))==null?void 0:a.addOrUpdateLayer),()=>m`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${b(this,zt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${j(this.map,()=>m`
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
            @changed=${B(this,ge,Uo)}
            @datetime:updated=${s=>wo(s,this,s.isUser===!0)}
            @layerConfig:change=${B(this,ge,Fo)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${j(n,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}zt=new WeakMap,ge=new WeakSet,Uo=function(e){cs(e,this);const n=!!(e.detail&&!("activity"in e.detail&&e.detail.activity===!1));Qe(this,"layerchange",{detail:e.detail,activity:n,action:"layerchange"})},Fo=function(e){var n;Qe(this,"layerConfig:change",{detail:e.detail,activity:((n=e.detail)==null?void 0:n.isUser)!==!1,action:"layerConfig:change"})},Vi=new WeakMap,z(Bo,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",Bo);export{Bo as EOxLayerControl,Ta as updateVectorLayerStyle};
