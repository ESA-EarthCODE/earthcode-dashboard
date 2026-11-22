var Ho=Object.defineProperty;var yn=t=>{throw TypeError(t)};var Oo=(t,e,i)=>e in t?Ho(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var q=(t,e,i)=>Oo(t,typeof e!="symbol"?e+"":e,i),Ai=(t,e,i)=>e.has(t)||yn("Cannot "+i);var m=(t,e,i)=>(Ai(t,e,"read from private field"),i?i.call(t):e.get(t)),T=(t,e,i)=>e.has(t)?yn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),W=(t,e,i,n)=>(Ai(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),O=(t,e,i)=>(Ai(t,e,"access private method"),i);import{x as g,E as Xt,a as At,i as ki}from"./lit-element.CIht5NN8.js";import{n as N}from"./when.BR7zwNJC.js";import{c as Po}from"./repeat.9Pq2frlr.js";import{l as Ui}from"./live.BZd1J1mE.js";import{e as Gi,a as No}from"./addCommonStyleSheet.BIZSB8qW.js";import{f as ve,e as we,s as Fi,c as Bo,d as Ze,r as ko,a as Uo,b as Fo}from"./geoZarrRangeHelpers.rYH6Av-Z.js";import{o as jo}from"./unsafe-html.RlppLW26.js";import{o as Ne}from"./map.DiiNQ3pp.js";import{X as qo}from"./XYZ.B7i01ZfU.js";import{c as Me,g as Zo}from"./commonjsHelpers.BosuxZz1.js";import{_ as Ln}from"./index.BUIxO2d3.js";import{al as Re}from"./intersectsextent.DbsvBq8_.js";import{g as zo}from"./getElement.COiK8z0h.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./util.Dhne-uB2.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var D=t=>t!==void 0,In=(t,e,i)=>e in t?t[e]:t[e]=i;const Se={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class Xo{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,"application/xml")}getAllTextContent(e,i){return xi(e,i).join("")}}function xi(t,e){return Hn(t,e,[]).join("")}function Hn(t,e,i){if(t.nodeType===Se.CDATA_SECTION||t.nodeType===Se.TEXT)e?i.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(t.nodeValue);else{var n;for(n=t.firstChild;n;n=n.nextSibling)Hn(n,e,i)}return i}function Yo(t,e,i,n){for(var o=Wo(e);o;o=Go(o)){var r=o.namespaceURI||null,a=t[r];if(D(a)){var s=a[o.localName];D(s)&&s.call(n,o,i)}}}function Wo(t){let e=t.firstElementChild||t.firstChild;for(;e&&e.nodeType!==Se.ELEMENT;)e=e.nextSibling;return e}function Go(t){let e=t.nextElementSibling||t.nextSibling;for(;e&&e.nodeType!==Se.ELEMENT;)e=e.nextSibling;return e}function it(t,e,i){return Jo(t,e,i)}function Jo(t,e,i){var n=D(i)?i:{},o,r;for(o=0,r=t.length;o<r;++o)n[t[o]]=e;return n}function On(t,e){return function(i,n){var o=t.call(D(e)?e:this,i,n);if(D(o)){var r=n[n.length-1];r.push(o)}}}function G(t,e,i,n,o){return n.push(t),Yo(e,i,n,o),n.pop()}function v(t,e,i){return function(n,o){let r=t.call(D(i)?i:this,n,o);if(D(r)){var a=o[o.length-1],s=D(e)?e:n.localName;a[s]=r}}}function ft(t,e,i){return function(n,o){var r=t.call(D(i)?i:this,n,o);if(D(r)){var a=o[o.length-1],s=D(e)?e:n.localName,l=In(a,s,[]);l.push(r)}}}const Ko=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Qo(t){return t.replace(Ko,"")}function Yt(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return D(e[1])||!1}function Qt(t){return Tt(xi(t,!1))}function Tt(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function Ci(t){return ze(xi(t,!1))}function ze(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function L(t){return Qo(xi(t,!1))}const tr="http://www.w3.org/1999/xlink";function Ji(t){return t.getAttributeNS(tr,"href")}function er(t,e){return G({},Dr,t,e)}function Pn(t){return[Tt(t.getAttribute("minx")),Tt(t.getAttribute("miny")),Tt(t.getAttribute("maxx")),Tt(t.getAttribute("maxy"))]}function ir(t,e){const i=Pn(t),n=[Tt(t.getAttribute("resx")),Tt(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:i,res:n}}function nr(t,e){const i=Pn(t);if(!(!D(i[0])||!D(i[1])||!D(i[2])||!D(i[3])))return i}function or(t,e){const i=parseFloat(t.getAttribute("min")),n=parseFloat(t.getAttribute("max"));return{min:i,max:n}}function rr(t,e){const i=G({},Tr,t,e);if(!D(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!D(n)||!D(o)||!D(r)||!D(a)))return[n,o,r,a]}function ar(t,e){return G({},xr,t,e)}function sr(t,e){return G({},Er,t,e)}function lr(t,e){return G({},$r,t,e)}function cr(t,e){return G({},Ar,t,e)}function ur(t,e){return G({},Cr,t,e)}function dr(t,e){return G([],_r,t,e)}function hr(t,e){const i=Yt(t.getAttribute("queryable"));return G({queryable:D(i)?i:!1},kn,t,e)}function fr(t,e){var i=e[e.length-1];const n=G({},kn,t,e);if(!D(n))return;let o=Yt(t.getAttribute("queryable"));D(o)||(o=i.queryable),n.queryable=D(o)?o:!1;let r=ze(t.getAttribute("cascaded"));D(r)||(r=i.cascaded),n.cascaded=r;let a=Yt(t.getAttribute("opaque"));D(a)||(a=i.opaque),n.opaque=D(a)?a:!1;let s=Yt(t.getAttribute("noSubsets"));D(s)||(s=i.noSubsets),n.noSubsets=D(s)?s:!1;let l=Tt(t.getAttribute("fixedWidth"));D(l)||(l=i.fixedWidth),n.fixedWidth=l;let c=Tt(t.getAttribute("fixedHeight"));D(c)||(c=i.fixedHeight),n.fixedHeight=c;const d=["Style","CRS","AuthorityURL"];for(let p=0,y=d.length;p<y;p++){const f=d[p],b=i[f];if(D(b)){let $=In(n,f,[]);$=$.concat(b),n[f]=$}}const u=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,y=u.length;p<y;p++){const f=u[p],b=n[f];if(!D(b)){const $=i[f];n[f]=$}}return n}function pr(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Yt(t.getAttribute("multipleValues")),nearestValue:Yt(t.getAttribute("nearestValue")),current:Yt(t.getAttribute("current")),values:L(t)}}function Mt(t,e){return G({},Hr,t,e)}function gr(t,e){return G({},Vr,t,e)}function mr(t,e){return G({},Rr,t,e)}function yr(t,e){return G({},Lr,t,e)}function _i(t,e){return G({},Mr,t,e)}function Nn(t,e){var i=Mt(t,e);if(D(i)){const n=[ze(t.getAttribute("width")),ze(t.getAttribute("height"))];return i.size=n,i}}function br(t,e){var i=Mt(t,e);if(D(i))return i.name=t.getAttribute("name"),i}function vr(t,e){var i=Mt(t,e);if(D(i))return i.type=t.getAttribute("type"),i}function wr(t,e){return G({},Ir,t,e)}function Bn(t,e){return G([],Or,t,e)}const nt=[null,"http://www.opengis.net/wms"],Sr=it(nt,{Service:v(sr),Capability:v(ar)}),xr=it(nt,{Request:v(gr),Exception:v(dr),Layer:v(hr)}),Er=it(nt,{Name:v(L),Title:v(L),Abstract:v(L),KeywordList:v(Bn),OnlineResource:v(Ji),ContactInformation:v(lr),Fees:v(L),AccessConstraints:v(L),LayerLimit:v(Ci),MaxWidth:v(Ci),MaxHeight:v(Ci)}),$r=it(nt,{ContactPersonPrimary:v(cr),ContactPosition:v(L),ContactAddress:v(ur),ContactVoiceTelephone:v(L),ContactFacsimileTelephone:v(L),ContactElectronicMailAddress:v(L)}),Ar=it(nt,{ContactPerson:v(L),ContactOrganization:v(L)}),Cr=it(nt,{AddressType:v(L),Address:v(L),City:v(L),StateOrProvince:v(L),PostCode:v(L),Country:v(L)}),_r=it(nt,{Format:On(L)}),kn=it(nt,{Name:v(L),Title:v(L),Abstract:v(L),KeywordList:v(Bn),CRS:ft(L),SRS:ft(L),EX_GeographicBoundingBox:v(rr),LatLonBoundingBox:v(nr),BoundingBox:ft(ir),Dimension:ft(pr),Attribution:v(er),AuthorityURL:ft(br),Identifier:ft(L),MetadataURL:ft(vr),DataURL:ft(Mt),FeatureListURL:ft(Mt),Style:ft(wr),MinScaleDenominator:v(Qt),MaxScaleDenominator:v(Qt),ScaleHint:v(or),Layer:ft(fr)}),Dr=it(nt,{Title:v(L),OnlineResource:v(Ji),LogoURL:v(Nn)}),Tr=it(nt,{westBoundLongitude:v(Qt),eastBoundLongitude:v(Qt),southBoundLatitude:v(Qt),northBoundLatitude:v(Qt)}),Vr=it(nt,{GetCapabilities:v(_i),GetMap:v(_i),GetFeatureInfo:v(_i)}),Mr=it(nt,{Format:ft(L),DCPType:ft(mr)}),Rr=it(nt,{HTTP:v(yr)}),Lr=it(nt,{Get:v(Mt),Post:v(Mt)}),Ir=it(nt,{Name:v(L),Title:v(L),Abstract:v(L),LegendURL:ft(Nn),StyleSheetURL:v(Mt),StyleURL:v(Mt)}),Hr=it(nt,{Format:v(L),OnlineResource:v(Ji)}),Or=it(nt,{Keyword:On(L)});class Pr{constructor(e,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new Xo(i),this._data=e}data(e){return this._data=e,this}toJSON(e){return e=e||this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let i=e.firstChild;i;i=i.nextSibling)if(i.nodeType==Se.ELEMENT)return this.readFromNode(i);return null}readFromNode(e){return this.version=e.getAttribute("version"),G({version:this.version},Sr,e,[])||null}}async function Nr(t){let e=new URL(t),i=e.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=e.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Pr(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function Ki(t){const e=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return e.test(t)?"TileWMS":i.test(t)?"XYZ":!1}function Br(t){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),n=Ki(t);return!!(t&&i&&n)}function Un(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function kr(t){try{return JSON.parse(Un(t)),!!t}catch{return!1}}function Di(t,e){const i=new URL(t).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):Array.isArray(s)?(i.delete(a),s.forEach(l=>{i.append(a,l)})):i.set(a,s)});const n=t.split("?")[0],o=i.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function bn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,n)}return i}function Dt(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?bn(Object(i),!0).forEach(function(n){Ur(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):bn(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Be(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Be=function(e){return typeof e}:Be=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Be(t)}function Ur(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Rt(){return Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Rt.apply(this,arguments)}function Fr(t,e){if(t==null)return{};var i={},n=Object.keys(t),o,r;for(r=0;r<n.length;r++)o=n[r],!(e.indexOf(o)>=0)&&(i[o]=t[o]);return i}function jr(t,e){if(t==null)return{};var i=Fr(t,e),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var qr="1.15.6";function Vt(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Lt=Vt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ae=Vt(/Edge/i),vn=Vt(/firefox/i),fe=Vt(/safari/i)&&!Vt(/chrome/i)&&!Vt(/android/i),Qi=Vt(/iP(ad|od|hone)/i),Fn=Vt(/chrome/i)&&Vt(/android/i),jn={capture:!1,passive:!1};function M(t,e,i){t.addEventListener(e,i,!Lt&&jn)}function V(t,e,i){t.removeEventListener(e,i,!Lt&&jn)}function Xe(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function qn(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function $t(t,e,i,n){if(t){i=i||document;do{if(e!=null&&(e[0]===">"?t.parentNode===i&&Xe(t,e):Xe(t,e))||n&&t===i)return t;if(t===i)break}while(t=qn(t))}return null}var wn=/\s+/g;function gt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(wn," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(wn," ")}}function x(t,e,i){var n=t&&t.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),e===void 0?i:i[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=i+(typeof i=="string"?"":"px")}}function ee(t,e){var i="";if(typeof t=="string")i=t;else do{var n=x(t,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Zn(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function _t(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,i,n,o){if(!(!t.getBoundingClientRect&&t!==window)){var r,a,s,l,c,d,u;if(t!==window&&t.parentNode&&t!==_t()?(r=t.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,c=r.right,d=r.height,u=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Lt))do if(o&&o.getBoundingClientRect&&(x(o,"transform")!=="none"||i&&x(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(x(o,"border-top-width")),s-=p.left+parseInt(x(o,"border-left-width")),l=a+r.height,c=s+r.width;break}while(o=o.parentNode);if(n&&t!==window){var y=ee(o||t),f=y&&y.a,b=y&&y.d;y&&(a/=b,s/=f,u/=f,d/=b,l=a+d,c=s+u)}return{top:a,left:s,bottom:l,right:c,width:u,height:d}}}function Sn(t,e,i){for(var n=kt(t,!0),o=X(t)[e];n;){var r=X(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===_t())break;n=kt(n,!1)}return!1}function oe(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==E.ghost&&(n||a[r]!==E.dragged)&&$t(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function tn(t,e){for(var i=t.lastElementChild;i&&(i===E.ghost||x(i,"display")==="none"||e&&!Xe(i,e));)i=i.previousElementSibling;return i||null}function wt(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==E.clone&&(!e||Xe(t,e))&&i++;return i}function xn(t){var e=0,i=0,n=_t();if(t)do{var o=ee(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function Zr(t,e){for(var i in t)if(t.hasOwnProperty(i)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i)}return-1}function kt(t,e){if(!t||!t.getBoundingClientRect)return _t();var i=t,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=x(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return _t();if(n||e)return i;n=!0}}while(i=i.parentNode);return _t()}function zr(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function Ti(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var pe;function zn(t,e){return function(){if(!pe){var i=arguments,n=this;i.length===1?t.call(n,i[0]):t.apply(n,i),pe=setTimeout(function(){pe=void 0},e)}}}function Xr(){clearTimeout(pe),pe=void 0}function Xn(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function Yn(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function Wn(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(!(!$t(o,e.draggable,t,!1)||o.animated||o===i)){var c=X(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,c.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,c.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var pt="Sortable"+new Date().getTime();function Yr(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(x(o,"display")==="none"||o===E.ghost)){t.push({target:o,rect:X(o)});var r=Dt({},t[t.length-1].rect);if(o.thisAnimationDuration){var a=ee(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){t.push(n)},removeAnimationState:function(n){t.splice(Zr(t,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var r=!1,a=0;t.forEach(function(s){var l=0,c=s.target,d=c.fromRect,u=X(c),p=c.prevFromRect,y=c.prevToRect,f=s.rect,b=ee(c,!0);b&&(u.top-=b.f,u.left-=b.e),c.toRect=u,c.thisAnimationDuration&&Ti(p,u)&&!Ti(d,u)&&(f.top-u.top)/(f.left-u.left)===(d.top-u.top)/(d.left-u.left)&&(l=Gr(f,p,y,o.options)),Ti(u,d)||(c.prevFromRect=d,c.prevToRect=u,l||(l=o.options.animation),o.animate(c,f,u,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),r?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),t=[]},animate:function(n,o,r,a){if(a){x(n,"transition",""),x(n,"transform","");var s=ee(this.el),l=s&&s.a,c=s&&s.d,d=(o.left-r.left)/(l||1),u=(o.top-r.top)/(c||1);n.animatingX=!!d,n.animatingY=!!u,x(n,"transform","translate3d("+d+"px,"+u+"px,0)"),this.forRepaintDummy=Wr(n),x(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),x(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){x(n,"transition",""),x(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function Wr(t){return t.offsetWidth}function Gr(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}var Wt=[],Vi={initializeByDefault:!0},Ce={mount:function(e){for(var i in Vi)Vi.hasOwnProperty(i)&&!(i in e)&&(e[i]=Vi[i]);Wt.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Wt.push(e)},pluginEvent:function(e,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=e+"Global";Wt.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](Dt({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][e]&&i[a.pluginName][e](Dt({sortable:i},n)))})},initializePlugins:function(e,i,n,o){Wt.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var c=new s(e,i,e.options);c.sortable=e,c.options=e.options,e[l]=c,Rt(n,c.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,i){var n={};return Wt.forEach(function(o){typeof o.eventProperties=="function"&&Rt(n,o.eventProperties.call(i[o.pluginName],e))}),n},modifyOption:function(e,i,n){var o;return Wt.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(e[r.pluginName],n))}),o}};function Jr(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,u=t.newDraggableIndex,p=t.originalEvent,y=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[pt],!!e){var b,$=e.options,w="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Lt&&!Ae?b=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(b=document.createEvent("Event"),b.initEvent(n,!0,!0)),b.to=a||i,b.from=s||i,b.item=o||i,b.clone=r,b.oldIndex=l,b.newIndex=c,b.oldDraggableIndex=d,b.newDraggableIndex=u,b.originalEvent=p,b.pullMode=y?y.lastPutMode:void 0;var A=Dt(Dt({},f),Ce.getEventProperties(n,e));for(var S in A)b[S]=A[S];i&&i.dispatchEvent(b),$[w]&&$[w].call(e,b)}}var Kr=["evt"],ht=function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=jr(n,Kr);Ce.pluginEvent.bind(E)(e,i,Dt({dragEl:h,parentEl:Z,ghostEl:C,rootEl:P,nextEl:qt,lastDownEl:ke,cloneEl:U,cloneHidden:Nt,dragStarted:ue,putSortable:tt,activeSortable:E.active,originalEvent:o,oldIndex:te,oldDraggableIndex:ge,newIndex:mt,newDraggableIndex:Pt,hideGhostForTarget:Qn,unhideGhostForTarget:to,cloneNowHidden:function(){Nt=!0},cloneNowShown:function(){Nt=!1},dispatchSortableEvent:function(s){ut({sortable:i,name:s,originalEvent:o})}},r))};function ut(t){Jr(Dt({putSortable:tt,cloneEl:U,targetEl:h,rootEl:P,oldIndex:te,oldDraggableIndex:ge,newIndex:mt,newDraggableIndex:Pt},t))}var h,Z,C,P,qt,ke,U,Nt,te,mt,ge,Pt,Le,tt,Jt=!1,Ye=!1,We=[],Ft,Et,Mi,Ri,En,$n,ue,Gt,me,ye=!1,Ie=!1,Ue,at,Li=[],ji=!1,Ge=[],Ei=typeof document<"u",He=Qi,An=Ae||Lt?"cssFloat":"float",Qr=Ei&&!Fn&&!Qi&&"draggable"in document.createElement("div"),Gn=function(){if(Ei){if(Lt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),Jn=function(e,i){var n=x(e),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=oe(e,0,i),a=oe(e,1,i),s=r&&x(r),l=a&&x(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+X(r).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var u=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===u)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=o&&n[An]==="none"||a&&n[An]==="none"&&c+d>o)?"vertical":"horizontal"},ta=function(e,i,n){var o=n?e.left:e.top,r=n?e.right:e.bottom,a=n?e.width:e.height,s=n?i.left:i.top,l=n?i.right:i.bottom,c=n?i.width:i.height;return o===s||r===l||o+a/2===s+c/2},ea=function(e,i){var n;return We.some(function(o){var r=o[pt].options.emptyInsertThreshold;if(!(!r||tn(o))){var a=X(o),s=e>=a.left-r&&e<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},Kn=function(e){function i(r,a){return function(s,l,c,d){var u=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||u))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,c,d),a)(s,l,c,d);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=e.group;(!o||Be(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,e.group=n},Qn=function(){!Gn&&C&&x(C,"display","none")},to=function(){!Gn&&C&&x(C,"display","")};Ei&&!Fn&&document.addEventListener("click",function(t){if(Ye)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ye=!1,!1},!0);var jt=function(e){if(h){e=e.touches?e.touches[0]:e;var i=ea(e.clientX,e.clientY);if(i){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[pt]._onDragOver(n)}}},ia=function(e){h&&h.parentNode[pt]._isOutsideThisEl(e.target)};function E(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Rt({},e),t[pt]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Jn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:E.supportPointer!==!1&&"PointerEvent"in window&&(!fe||Qi),emptyInsertThreshold:5};Ce.initializePlugins(this,t,i);for(var n in i)!(n in e)&&(e[n]=i[n]);Kn(e);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=e.forceFallback?!1:Qr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?M(t,"pointerdown",this._onTapStart):(M(t,"mousedown",this._onTapStart),M(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(M(t,"dragover",this),M(t,"dragenter",this)),We.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Rt(this,Yr())}E.prototype={constructor:E,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Gt=null)},_getDirection:function(e,i){return typeof this.options.direction=="function"?this.options.direction.call(this,e,i,h):this.options.direction},_onTapStart:function(e){if(e.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,d=o.filter;if(ua(n),!h&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||o.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&fe&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=$t(l,o.draggable,n,!1),!(l&&l.animated)&&ke!==l)){if(te=wt(l),ge=wt(l,o.draggable),typeof d=="function"){if(d.call(this,e,l,this)){ut({sortable:i,rootEl:c,name:"filter",targetEl:l,toEl:n,fromEl:n}),ht("filter",i,{evt:e}),r&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(u){if(u=$t(c,u.trim(),n,!1),u)return ut({sortable:i,rootEl:u,name:"filter",targetEl:l,fromEl:n,toEl:n}),ht("filter",i,{evt:e}),!0}),d)){r&&e.preventDefault();return}o.handle&&!$t(c,o.handle,n,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!h&&n.parentNode===r){var c=X(n);if(P=r,h=n,Z=h.parentNode,qt=h.nextSibling,ke=n,Le=a.group,E.dragged=h,Ft={target:h,clientX:(i||e).clientX,clientY:(i||e).clientY},En=Ft.clientX-c.left,$n=Ft.clientY-c.top,this._lastX=(i||e).clientX,this._lastY=(i||e).clientY,h.style["will-change"]="all",l=function(){if(ht("delayEnded",o,{evt:e}),E.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!vn&&o.nativeDraggable&&(h.draggable=!0),o._triggerDragStart(e,i),ut({sortable:o,name:"choose",originalEvent:e}),gt(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){Zn(h,d.trim(),Ii)}),M(s,"dragover",jt),M(s,"mousemove",jt),M(s,"touchmove",jt),a.supportPointer?(M(s,"pointerup",o._onDrop),!this.nativeDraggable&&M(s,"pointercancel",o._onDrop)):(M(s,"mouseup",o._onDrop),M(s,"touchend",o._onDrop),M(s,"touchcancel",o._onDrop)),vn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),ht("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(Ae||Lt))){if(E.eventCanceled){this._onDrop();return}a.supportPointer?(M(s,"pointerup",o._disableDelayedDrag),M(s,"pointercancel",o._disableDelayedDrag)):(M(s,"mouseup",o._disableDelayedDrag),M(s,"touchend",o._disableDelayedDrag),M(s,"touchcancel",o._disableDelayedDrag)),M(s,"mousemove",o._delayedDragTouchMoveHandler),M(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&M(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var i=e.touches?e.touches[0]:e;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&Ii(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;V(e,"mouseup",this._disableDelayedDrag),V(e,"touchend",this._disableDelayedDrag),V(e,"touchcancel",this._disableDelayedDrag),V(e,"pointerup",this._disableDelayedDrag),V(e,"pointercancel",this._disableDelayedDrag),V(e,"mousemove",this._delayedDragTouchMoveHandler),V(e,"touchmove",this._delayedDragTouchMoveHandler),V(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,i){i=i||e.pointerType=="touch"&&e,!this.nativeDraggable||i?this.options.supportPointer?M(document,"pointermove",this._onTouchMove):i?M(document,"touchmove",this._onTouchMove):M(document,"mousemove",this._onTouchMove):(M(h,"dragend",this),M(P,"dragstart",this._onDragStart));try{document.selection?Fe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,i){if(Jt=!1,P&&h){ht("dragStarted",this,{evt:i}),this.nativeDraggable&&M(document,"dragover",ia);var n=this.options;!e&&gt(h,n.dragClass,!1),gt(h,n.ghostClass,!0),E.active=this,e&&this._appendGhost(),ut({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(Et){this._lastX=Et.clientX,this._lastY=Et.clientY,Qn();for(var e=document.elementFromPoint(Et.clientX,Et.clientY),i=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Et.clientX,Et.clientY),e!==i);)i=e;if(h.parentNode[pt]._isOutsideThisEl(e),i)do{if(i[pt]){var n=void 0;if(n=i[pt]._onDragOver({clientX:Et.clientX,clientY:Et.clientY,target:e,rootEl:i}),n&&!this.options.dragoverBubble)break}e=i}while(i=qn(i));to()}},_onTouchMove:function(e){if(Ft){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=e.touches?e.touches[0]:e,a=C&&ee(C,!0),s=C&&a&&a.a,l=C&&a&&a.d,c=He&&at&&xn(at),d=(r.clientX-Ft.clientX+o.x)/(s||1)+(c?c[0]-Li[0]:0)/(s||1),u=(r.clientY-Ft.clientY+o.y)/(l||1)+(c?c[1]-Li[1]:0)/(l||1);if(!E.active&&!Jt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(C){a?(a.e+=d-(Mi||0),a.f+=u-(Ri||0)):a={a:1,b:0,c:0,d:1,e:d,f:u};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");x(C,"webkitTransform",p),x(C,"mozTransform",p),x(C,"msTransform",p),x(C,"transform",p),Mi=d,Ri=u,Et=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!C){var e=this.options.fallbackOnBody?document.body:P,i=X(h,!0,He,!0,e),n=this.options;if(He){for(at=e;x(at,"position")==="static"&&x(at,"transform")==="none"&&at!==document;)at=at.parentNode;at!==document.body&&at!==document.documentElement?(at===document&&(at=_t()),i.top+=at.scrollTop,i.left+=at.scrollLeft):at=_t(),Li=xn(at)}C=h.cloneNode(!0),gt(C,n.ghostClass,!1),gt(C,n.fallbackClass,!0),gt(C,n.dragClass,!0),x(C,"transition",""),x(C,"transform",""),x(C,"box-sizing","border-box"),x(C,"margin",0),x(C,"top",i.top),x(C,"left",i.left),x(C,"width",i.width),x(C,"height",i.height),x(C,"opacity","0.8"),x(C,"position",He?"absolute":"fixed"),x(C,"zIndex","100000"),x(C,"pointerEvents","none"),E.ghost=C,e.appendChild(C),x(C,"transform-origin",En/parseInt(C.style.width)*100+"% "+$n/parseInt(C.style.height)*100+"%")}},_onDragStart:function(e,i){var n=this,o=e.dataTransfer,r=n.options;if(ht("dragStart",this,{evt:e}),E.eventCanceled){this._onDrop();return}ht("setupClone",this),E.eventCanceled||(U=Yn(h),U.removeAttribute("id"),U.draggable=!1,U.style["will-change"]="",this._hideClone(),gt(U,this.options.chosenClass,!1),E.clone=U),n.cloneId=Fe(function(){ht("clone",n),!E.eventCanceled&&(n.options.removeCloneOnHide||P.insertBefore(U,h),n._hideClone(),ut({sortable:n,name:"clone"}))}),!i&&gt(h,r.dragClass,!0),i?(Ye=!0,n._loopId=setInterval(n._emulateDragOver,50)):(V(document,"mouseup",n._onDrop),V(document,"touchend",n._onDrop),V(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,h)),M(document,"drop",n),x(h,"transform","translateZ(0)")),Jt=!0,n._dragStartId=Fe(n._dragStarted.bind(n,i,e)),M(document,"selectstart",n),ue=!0,window.getSelection().removeAllRanges(),fe&&x(document.body,"user-select","none")},_onDragOver:function(e){var i=this.el,n=e.target,o,r,a,s=this.options,l=s.group,c=E.active,d=Le===l,u=s.sort,p=tt||c,y,f=this,b=!1;if(ji)return;function $(It,_e){ht(It,f,Dt({evt:e,isOwner:d,axis:y?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:u,fromSortable:p,target:n,completed:A,onMove:function(ae,De){return Oe(P,i,h,o,ae,X(ae),e,De)},changed:S},_e))}function w(){$("dragOverAnimationCapture"),f.captureAnimationState(),f!==p&&p.captureAnimationState()}function A(It){return $("dragOverCompleted",{insertion:It}),It&&(d?c._hideClone():c._showClone(f),f!==p&&(gt(h,tt?tt.options.ghostClass:c.options.ghostClass,!1),gt(h,s.ghostClass,!0)),tt!==f&&f!==E.active?tt=f:f===E.active&&tt&&(tt=null),p===f&&(f._ignoreWhileAnimating=n),f.animateAll(function(){$("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===h&&!h.animated||n===i&&!n.animated)&&(Gt=null),!s.dragoverBubble&&!e.rootEl&&n!==document&&(h.parentNode[pt]._isOutsideThisEl(e.target),!It&&jt(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function S(){mt=wt(h),Pt=wt(h,s.draggable),ut({sortable:f,name:"change",toEl:i,newIndex:mt,newDraggableIndex:Pt,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=$t(n,s.draggable,i,!0),$("dragOver"),E.eventCanceled)return b;if(h.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||f._ignoreWhileAnimating===n)return A(!1);if(Ye=!1,c&&!s.disabled&&(d?u||(a=Z!==P):tt===this||(this.lastPutMode=Le.checkPull(this,c,h,e))&&l.checkPut(this,c,h,e))){if(y=this._getDirection(e,n)==="vertical",o=X(h),$("dragOverValid"),E.eventCanceled)return b;if(a)return Z=P,w(),this._hideClone(),$("revert"),E.eventCanceled||(qt?P.insertBefore(h,qt):P.appendChild(h)),A(!0);var R=tn(i,s.draggable);if(!R||aa(e,y,this)&&!R.animated){if(R===h)return A(!1);if(R&&i===e.target&&(n=R),n&&(r=X(n)),Oe(P,i,h,o,n,r,e,!!n)!==!1)return w(),R&&R.nextSibling?i.insertBefore(h,R.nextSibling):i.appendChild(h),Z=i,S(),A(!0)}else if(R&&ra(e,y,this)){var H=oe(i,0,s,!0);if(H===h)return A(!1);if(n=H,r=X(n),Oe(P,i,h,o,n,r,e,!1)!==!1)return w(),i.insertBefore(h,H),Z=i,S(),A(!0)}else if(n.parentNode===i){r=X(n);var _=0,B,J=h.parentNode!==i,j=!ta(h.animated&&h.toRect||o,n.animated&&n.toRect||r,y),St=y?"top":"left",ot=Sn(n,"top","top")||Sn(h,"top","top"),I=ot?ot.scrollTop:void 0;Gt!==n&&(B=r[St],ye=!1,Ie=!j&&s.invertSwap||J),_=sa(e,n,r,y,j?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,Ie,Gt===n);var Y;if(_!==0){var K=wt(h);do K-=_,Y=Z.children[K];while(Y&&(x(Y,"display")==="none"||Y===C))}if(_===0||Y===n)return A(!1);Gt=n,me=_;var Ct=n.nextElementSibling,dt=!1;dt=_===1;var Ut=Oe(P,i,h,o,n,r,e,dt);if(Ut!==!1)return(Ut===1||Ut===-1)&&(dt=Ut===1),ji=!0,setTimeout(oa,30),w(),dt&&!Ct?i.appendChild(h):n.parentNode.insertBefore(h,dt?Ct:n),ot&&Xn(ot,0,I-ot.scrollTop),Z=h.parentNode,B!==void 0&&!Ie&&(Ue=Math.abs(B-X(n)[St])),S(),A(!0)}if(i.contains(h))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){V(document,"mousemove",this._onTouchMove),V(document,"touchmove",this._onTouchMove),V(document,"pointermove",this._onTouchMove),V(document,"dragover",jt),V(document,"mousemove",jt),V(document,"touchmove",jt)},_offUpEvents:function(){var e=this.el.ownerDocument;V(e,"mouseup",this._onDrop),V(e,"touchend",this._onDrop),V(e,"pointerup",this._onDrop),V(e,"pointercancel",this._onDrop),V(e,"touchcancel",this._onDrop),V(document,"selectstart",this)},_onDrop:function(e){var i=this.el,n=this.options;if(mt=wt(h),Pt=wt(h,n.draggable),ht("drop",this,{evt:e}),Z=h&&h.parentNode,mt=wt(h),Pt=wt(h,n.draggable),E.eventCanceled){this._nulling();return}Jt=!1,Ie=!1,ye=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),qi(this.cloneId),qi(this._dragStartId),this.nativeDraggable&&(V(document,"drop",this),V(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),fe&&x(document.body,"user-select",""),x(h,"transform",""),e&&(ue&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),C&&C.parentNode&&C.parentNode.removeChild(C),(P===Z||tt&&tt.lastPutMode!=="clone")&&U&&U.parentNode&&U.parentNode.removeChild(U),h&&(this.nativeDraggable&&V(h,"dragend",this),Ii(h),h.style["will-change"]="",ue&&!Jt&&gt(h,tt?tt.options.ghostClass:this.options.ghostClass,!1),gt(h,this.options.chosenClass,!1),ut({sortable:this,name:"unchoose",toEl:Z,newIndex:null,newDraggableIndex:null,originalEvent:e}),P!==Z?(mt>=0&&(ut({rootEl:Z,name:"add",toEl:Z,fromEl:P,originalEvent:e}),ut({sortable:this,name:"remove",toEl:Z,originalEvent:e}),ut({rootEl:Z,name:"sort",toEl:Z,fromEl:P,originalEvent:e}),ut({sortable:this,name:"sort",toEl:Z,originalEvent:e})),tt&&tt.save()):mt!==te&&mt>=0&&(ut({sortable:this,name:"update",toEl:Z,originalEvent:e}),ut({sortable:this,name:"sort",toEl:Z,originalEvent:e})),E.active&&((mt==null||mt===-1)&&(mt=te,Pt=ge),ut({sortable:this,name:"end",toEl:Z,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){ht("nulling",this),P=h=Z=C=qt=U=ke=Nt=Ft=Et=ue=mt=Pt=te=ge=Gt=me=tt=Le=E.dragged=E.ghost=E.clone=E.active=null,Ge.forEach(function(e){e.checked=!0}),Ge.length=Mi=Ri=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":h&&(this._onDragOver(e),na(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],$t(i,a.draggable,this.el,!1)&&e.push(i.getAttribute(a.dataIdAttr)||ca(i));return e},sort:function(e,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];$t(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,i){return $t(e,i||this.options.draggable,this.el,!1)},option:function(e,i){var n=this.options;if(i===void 0)return n[e];var o=Ce.modifyOption(this,e,i);typeof o<"u"?n[e]=o:n[e]=i,e==="group"&&Kn(n)},destroy:function(){ht("destroy",this);var e=this.el;e[pt]=null,V(e,"mousedown",this._onTapStart),V(e,"touchstart",this._onTapStart),V(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(V(e,"dragover",this),V(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),We.splice(We.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Nt){if(ht("hideClone",this),E.eventCanceled)return;x(U,"display","none"),this.options.removeCloneOnHide&&U.parentNode&&U.parentNode.removeChild(U),Nt=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Nt){if(ht("showClone",this),E.eventCanceled)return;h.parentNode==P&&!this.options.group.revertClone?P.insertBefore(U,h):qt?P.insertBefore(U,qt):P.appendChild(U),this.options.group.revertClone&&this.animate(h,U),x(U,"display",""),Nt=!1}}};function na(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Oe(t,e,i,n,o,r,a,s){var l,c=t[pt],d=c.options.onMove,u;return window.CustomEvent&&!Lt&&!Ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||X(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),d&&(u=d.call(c,l,a)),u}function Ii(t){t.draggable=!1}function oa(){ji=!1}function ra(t,e,i){var n=X(oe(i.el,0,i.options,!0)),o=Wn(i.el,i.options,C),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}function aa(t,e,i){var n=X(tn(i.el,i.options.draggable)),o=Wn(i.el,i.options,C),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}function sa(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,u=n?i.bottom:i.right,p=!1;if(!a){if(s&&Ue<c*o){if(!ye&&(me===1?l>d+c*r/2:l<u-c*r/2)&&(ye=!0),ye)p=!0;else if(me===1?l<d+Ue:l>u-Ue)return-me}else if(l>d+c*(1-o)/2&&l<u-c*(1-o)/2)return la(e)}return p=p||a,p&&(l<d+c*r/2||l>u-c*r/2)?l>d+c/2?1:-1:0}function la(t){return wt(h)<wt(t)?1:-1}function ca(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function ua(t){Ge.length=0;for(var e=t.getElementsByTagName("input"),i=e.length;i--;){var n=e[i];n.checked&&Ge.push(n)}}function Fe(t){return setTimeout(t,0)}function qi(t){return clearTimeout(t)}Ei&&M(document,"touchmove",function(t){(E.active||Jt)&&t.cancelable&&t.preventDefault()});E.utils={on:M,off:V,css:x,find:Zn,is:function(e,i){return!!$t(e,i,e,!1)},extend:zr,throttle:zn,closest:$t,toggleClass:gt,clone:Yn,index:wt,nextTick:Fe,cancelNextTick:qi,detectDirection:Jn,getChild:oe,expando:pt};E.get=function(t){return t[pt]};E.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(E.utils=Dt(Dt({},E.utils),n.utils)),Ce.mount(n)})};E.create=function(t,e){return new E(t,e)};E.version=qr;var z=[],de,Zi,zi=!1,Hi,Oi,Je,he;function da(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?M(document,"dragover",this._handleAutoScroll):this.options.supportPointer?M(document,"pointermove",this._handleFallbackAutoScroll):n.touches?M(document,"touchmove",this._handleFallbackAutoScroll):M(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?V(document,"dragover",this._handleAutoScroll):(V(document,"pointermove",this._handleFallbackAutoScroll),V(document,"touchmove",this._handleFallbackAutoScroll),V(document,"mousemove",this._handleFallbackAutoScroll)),Cn(),je(),Xr()},nulling:function(){Je=Zi=de=zi=he=Hi=Oi=null,z.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(Je=i,n||this.options.forceAutoScrollFallback||Ae||Lt||fe){Pi(i,this.options,s,n);var l=kt(s,!0);zi&&(!he||r!==Hi||a!==Oi)&&(he&&Cn(),he=setInterval(function(){var c=kt(document.elementFromPoint(r,a),!0);c!==l&&(l=c,je()),Pi(i,o.options,c,n)},10),Hi=r,Oi=a)}else{if(!this.options.bubbleScroll||kt(s,!0)===_t()){je();return}Pi(i,this.options,kt(s,!1),!1)}}},Rt(t,{pluginName:"scroll",initializeByDefault:!0})}function je(){z.forEach(function(t){clearInterval(t.pid)}),z=[]}function Cn(){clearInterval(he)}var Pi=zn(function(t,e,i,n){if(e.scroll){var o=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=_t(),c=!1,d;Zi!==i&&(Zi=i,je(),de=e.scroll,d=e.scrollFn,de===!0&&(de=kt(i,!0)));var u=0,p=de;do{var y=p,f=X(y),b=f.top,$=f.bottom,w=f.left,A=f.right,S=f.width,R=f.height,H=void 0,_=void 0,B=y.scrollWidth,J=y.scrollHeight,j=x(y),St=y.scrollLeft,ot=y.scrollTop;y===l?(H=S<B&&(j.overflowX==="auto"||j.overflowX==="scroll"||j.overflowX==="visible"),_=R<J&&(j.overflowY==="auto"||j.overflowY==="scroll"||j.overflowY==="visible")):(H=S<B&&(j.overflowX==="auto"||j.overflowX==="scroll"),_=R<J&&(j.overflowY==="auto"||j.overflowY==="scroll"));var I=H&&(Math.abs(A-o)<=a&&St+S<B)-(Math.abs(w-o)<=a&&!!St),Y=_&&(Math.abs($-r)<=a&&ot+R<J)-(Math.abs(b-r)<=a&&!!ot);if(!z[u])for(var K=0;K<=u;K++)z[K]||(z[K]={});(z[u].vx!=I||z[u].vy!=Y||z[u].el!==y)&&(z[u].el=y,z[u].vx=I,z[u].vy=Y,clearInterval(z[u].pid),(I!=0||Y!=0)&&(c=!0,z[u].pid=setInterval((function(){n&&this.layer===0&&E.active._onTouchMove(Je);var Ct=z[this.layer].vy?z[this.layer].vy*s:0,dt=z[this.layer].vx?z[this.layer].vx*s:0;typeof d=="function"&&d.call(E.dragged.parentNode[pt],dt,Ct,t,Je,z[this.layer].el)!=="continue"||Xn(z[this.layer].el,dt,Ct)}).bind({layer:u}),24))),u++}while(e.bubbleScroll&&p!==l&&(p=kt(p,!1)));zi=c}},30),eo=function(e){var i=e.originalEvent,n=e.putSortable,o=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(i){var c=n||r;s();var d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,u=document.elementFromPoint(d.clientX,d.clientY);l(),c&&!c.el.contains(u)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function en(){}en.prototype={startIndex:null,dragStart:function(e){var i=e.oldDraggableIndex;this.startIndex=i},onSpill:function(e){var i=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=oe(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:eo};Rt(en,{pluginName:"revertOnSpill"});function nn(){}nn.prototype={onSpill:function(e){var i=e.dragEl,n=e.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:eo};Rt(nn,{pluginName:"removeOnSpill"});E.mount(new da);E.mount(nn,en);const ha=t=>{const e=t.item;let i=Array.prototype.slice.call(e.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},fa=(t,e,i,n,o,r)=>{const s=t.item.parentNode;for(const $ of i)s.appendChild($);if(t.oldIndex==t.newIndex)return;const l=n.getArray(),c=t.item.querySelector("eox-layercontrol-layer").layer.get(o),d=l.find($=>$.get(o)===c),u=r.dataset.layer,p=l.find($=>$.get(o)==u);let y,f;for(y=0;y<l.length;y++)if(l[y]==d){n.removeAt(y);break}for(f=0;f<l.length;f++)if(l[f]===p){y>f?n.insertAt(f,d):n.insertAt(f+1,d);break}const b=ve(e,"eox-layercontrol")||e;we(b,"sort:layer",{layer:c,oldIndex:t.oldIndex,newIndex:t.newIndex}),e.requestUpdate()};function pa(t,e,i,n){let o=[],r=null;t._sortable=E.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=ha(a)},onMove:a=>{r=a.related},onEnd:a=>fa(a,n,o,e,i,r)})}function ga(t,e,i,n){const o=t.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(e)||(a.set(e,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function on(t,e,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(c=>c.get(a)===s)];const l=r.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>o(c.getLayers().getArray(),a,s)),n};return o(t,e,i),n}function ma(t,e,i){if(!t||!e)return!1;if(!io(t,i))return!0;const n=t.get("minZoom"),o=t.get("maxZoom"),r=e.getView().getZoom();return r>n&&r<o}function io(t,e){const i=t.get("minZoom"),n=t.get("maxZoom");return!!(e&&(i!==-1/0||n!==1/0))}function _n(t,e){var o,r,a;return!t||!e?void 0:t.getLayers?"group":((a=(o=e.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(t.getSource?(r=t.getSource())==null?void 0:r.ol_uid:void 0))?"draw":t.declutter_!==void 0||t.get("type")==="Vector"?"vector":"raster"}const ya=(t,e,i)=>{var l,c;let n=e;const o=i.layer.getSource(),r=((c=(l=i.layerConfig.schema)==null?void 0:l.options)==null?void 0:c.removeProperties)??[],a={...t};r.forEach(d=>delete a[d]),o.updateParams?o.updateParams(a):o.getTileUrlFunction&&o.getTileUrlFunction()&&(n||(n=o.getTileUrlFunction()),o instanceof qo&&(o._updatedUrl=Di(o.getUrls()[0],t)),o.setTileUrlFunction((...d)=>{const u=new URL(n(...d));return r.forEach(p=>u.searchParams.delete(p)),Di(u.href,t)}),o.setKey(new Date().toISOString()));const s=document.querySelector("eox-map");if(s){const d=s.globe;if(d){const u=d.planet.layers.filter(p=>p.name==i.layer.get("id"))[0];u&&u.setUrl(Di(u.url,t)),window.eoxMapGlobe.refresh()}}return n};async function ba(t,e,i){var s,l,c,d,u,p,y,f;const n="updateStyleVariables"in e,o="setStyle"in e,r=n?e.style_:i.style,a=rn(t);if(r){const b=r.variables||{};r.variables={...b,...a}}if(n){const b=(t==null?void 0:t.variable)??(t==null?void 0:t.band);if(b!==void 0){const A=e.get("_lastVariable");if(b!==A){const S=await $a(e,String(b)),R=(S==null?void 0:S.targetMin)??Qe(e,String(b)).targetMin,H=(S==null?void 0:S.targetMax)??Qe(e,String(b)).targetMax;((i==null?void 0:i.autofill)===!0||((s=i==null?void 0:i.schema)==null?void 0:s.autofill)===!0||((l=r==null?void 0:r.variables)==null?void 0:l.min)!==void 0||((c=r==null?void 0:r.variables)==null?void 0:c.max)!==void 0||((u=(d=i==null?void 0:i.schema)==null?void 0:d.properties)==null?void 0:u.min)!==void 0||((y=(p=i==null?void 0:i.schema)==null?void 0:p.properties)==null?void 0:y.max)!==void 0)&&(Fi(t,(f=i==null?void 0:i.schema)==null?void 0:f.properties,R,H),a.min=R,a.max=H,r!=null&&r.variables&&(r.variables.min=R,r.variables.max=H))}}const $=e.get("_geozarrDimensions"),w=e.getSource?e.getSource():null;if(w&&typeof w.updateDimensions=="function"&&$){const A={};for(const S of Object.keys($))t[S]!==void 0&&(A[S]=Number(t[S]));Object.keys(A).length>0&&w.updateDimensions(A)}e.updateStyleVariables(a)}else if(o&&r){const b=va(r);e.setStyle(b)}}const rn=t=>{const e={};for(const i in t)if(typeof t[i]=="object"&&t[i]!==null){const n=rn(t[i]);for(const o in n)e[o]=n==null?void 0:n[o]}else e[i]=t==null?void 0:t[i];return e};function va(t){let e=t;if("variables"in t){let i=JSON.stringify(t);const{variables:n}=t;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,String(n[o])):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);e=JSON.parse(i)}return e}const wa=(t,e,i)=>{if(!t)return;const n=rn(e);let o,r;return Array.isArray(t)?r=structuredClone(t):r=[structuredClone(t)],o=r.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in n&&n[s]==l}),o.length||(o=null),o==null?void 0:o.map(a=>{var s;if(delete a.boundTo,a.rangeProperty&&i){const l=n[a.rangeProperty];l&&i[l]?(a.range=i[l],delete a.rangeProperty):l&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:(s=Object.keys(a))==null?void 0:s.reduce((l,c)=>{if(c==="domainProperties"){const d=a[c].map(u=>n[u]);l.domain=d,a.tickFormat===void 0&&d.length===2&&typeof d[0]=="number"&&typeof d[1]=="number"&&Number.isFinite(d[0])&&Number.isFinite(d[1])&&(l.tickFormat=Bo([d[0],d[1]]))}else l[c]=a[c];return l},{})}).filter(Boolean)};function Ni(t,e){var s,l,c,d,u,p,y,f,b;if(!e)return null;let i={},n="updateStyleVariables"in t?t.styleVariables_||((s=t.style_)==null?void 0:s.variables)||((c=(l=t.get)==null?void 0:l.call(t,"style"))==null?void 0:c.variables):(d=e.style)==null?void 0:d.variables;if((e.type==="style"||e.style)&&n)i={...n};else if((p=(u=t.getSource())==null?void 0:u.getParams)!=null&&p.call(u))i=t.getSource().getParams();else if((f=(y=t.getSource())==null?void 0:y.getTileUrlFunction)!=null&&f.call(y))try{const $=t.getSource().getTileUrlFunction()([0,0,0]);if($){const w=new URL($);i={};for(const[A,S]of w.searchParams.entries()){const R=w.searchParams.getAll(A);i[A]=R.length>1?R:S}}}catch($){console.error("Error parsing start values from tile URL",$)}else return null;const o=e;i.min===void 0&&o.min!==void 0&&(i.min=o.min),i.max===void 0&&o.max!==void 0&&(i.max=o.max),i.bands===void 0&&o.bands!==void 0&&(i.bands=o.bands),i.band===void 0&&o.band!==void 0&&(i.band=o.band),i.variable===void 0&&(i.variable=o.variable??o.band??(Array.isArray(o.bands)&&o.bands.length>0?o.bands[0]:void 0)??((b=t.get)==null?void 0:b.call(t,"_lastVariable")));const r=Ke(e.schema),a=no(Object.keys(r).length?r:e.schema,i,e.schema,t);return Object.keys(a).length?a:null}function Ke(t,e=t,i=new Set){if(!t||typeof t!="object")return{};const n={};typeof t.$ref=="string"&&!i.has(t.$ref)&&(i.add(t.$ref),Object.assign(n,Ke(Sa(t.$ref,e),e,i)));for(const o of["anyOf","oneOf","allOf"])if(Array.isArray(t[o]))for(const r of t[o])Object.assign(n,Ke(r,e,i));return Object.assign(n,t.properties)}function no(t,e,i=t,n=null){var r,a,s,l,c,d,u,p,y,f,b,$;let o={};for(const w in t){const A=(r=t[w])==null?void 0:r.type;if(A&&A!=="object"&&e[w]!==void 0){const S=["number","integer"].includes(A)?Number(e[w]):e[w];o[w]=Number.isNaN(S)?e[w]:S}else if(w==="variable"&&A&&A!=="object"&&n){const S=n.getSource?n.getSource():null,R=((a=n.get)==null?void 0:a.call(n,"_lastVariable"))||(typeof(S==null?void 0:S.getBands)=="function"?S.getBands():null)||(S==null?void 0:S.bands_)||((c=(l=(s=n.get)==null?void 0:s.call(n,"_jsonDefinition"))==null?void 0:l.source)==null?void 0:c.bands)||((u=(d=n.get)==null?void 0:d.call(n,"source"))==null?void 0:u.bands),H=Array.isArray(R)&&R.length>0?R[0]:typeof R=="string"?R:void 0;H&&(!Array.isArray((p=t[w])==null?void 0:p.enum)||t[w].enum.includes(H))?o[w]=H:((y=t[w])==null?void 0:y.default)!==void 0?o[w]=t[w].default:Array.isArray((f=t[w])==null?void 0:f.enum)&&t[w].enum.length>0&&(o[w]=t[w].enum[0])}else if(A&&A!=="object"&&((b=t[w])==null?void 0:b.default)!==void 0)o[w]=t[w].default;else if(A&&A!=="object"&&Array.isArray(($=t[w])==null?void 0:$.enum)&&t[w].enum.length>0)o[w]=t[w].enum[0];else{const S=no(Ke(t[w],i),e,i,n);Object.keys(S).length>0&&(o[w]=S)}}return o}function Sa(t,e){if(t.startsWith("#/"))return t.slice(2).split("/").reduce((i,n)=>i==null?void 0:i[n.replace(/~1/g,"/").replace(/~0/g,"~")],e)}const oo=(t,e)=>t==null?void 0:t.filter(i=>["remove","sort"].filter(n=>e!=null&&e.get("layerControlDisable")?n!=="sort":!0).includes(i)),ro=(t,e)=>t==null?void 0:t.filter(i=>{var o;let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=e.get("description")),i==="config"&&(n=e.get("layerConfig")),i==="datetime"&&(n=(o=e.get("layerDatetime"))==null?void 0:o.controlValues),i==="legend"&&(n=e.get("layerLegend")),n}),xa=(t,e,i)=>g`
  <button
    slot="${t}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${i?t:g`<i class="small primary-text">${e}</i>`}
  </button>
`,ao=(t,e)=>g`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:i}=t;i==null||i.set("layerControlOptional",!0),i==null||i.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:i,bubbles:!0}))}}
  >
    ${t.unstyled?"x":g`<i class="small red-text">${e}</i>`}
  </button>
`,so=(t,e,i)=>g`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${t.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${i?"═":g`<i class="small primary-text">${e}</i>`}
  </button>
`;function be(){return{dots:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const lo=t=>{var i;const e=["layerControlHide","layerControlOptional"];return(i=t==null?void 0:t.getArray())==null?void 0:i.filter(n=>e.every(o=>!n.get(o)))};function Ea(t,e){var o,r;const i=(o=t.get("layerDatetime"))==null?void 0:o.sliceMap;if(!i||!(e in i))return;const n=(r=t.getSource)==null?void 0:r.call(t);typeof(n==null?void 0:n.updateDimensions)=="function"&&n.updateDimensions({time:i[e]})}function co(t,e,i=!1){if(t.stopPropagation(),!i){const n=Object.assign(new CustomEvent("datetime:updated",{detail:t.detail,bubbles:!0,composed:!0}),{isUser:t.isUser===!0});e.dispatchEvent(n);return}Ze(e,"datetime:updated",{detail:t.detail,bubbles:!0,composed:!0,activity:t.isUser===!0,action:"datetime:updated"})}function Qe(t,e,i){const n=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,o=n==null?void 0:n[e],r=o==null?void 0:o.valid_range;let a,s;return Array.isArray(r)&&r.length===2&&typeof r[0]=="number"&&typeof r[1]=="number"&&!Number.isNaN(r[0])&&!Number.isNaN(r[1])&&([a,s]=ko([r[0],r[1]])),{targetMin:a!==void 0?a:0,targetMax:s!==void 0?s:1}}async function $a(t,e){var b,$,w,A,S,R,H,_,B,J,j,St,ot,I,Y,K,Ct,dt,Ut,It,_e,$i,ae,De,an,sn,ln,cn,un,dn,hn,fn,pn,gn;if(!t||!e)return;const i=t.getSource?t.getSource():null,n=t.get("_geozarrSourceUrl")||(($=(b=t.get("_jsonDefinition"))==null?void 0:b.source)==null?void 0:$.url)||((w=t.get("source"))==null?void 0:w.url)||t.get("_geozarrRootUrl");let o=i;if(i){if(typeof i.setBands=="function")i.setBands([e]);else if(n&&i.constructor){const lt=i.constructor,k=((A=i.getProjection)==null?void 0:A.call(i))||t.get("_mapProjection")||((R=(S=t.get("_jsonDefinition"))==null?void 0:S.source)==null?void 0:R.projection),ct=new lt({url:n,bands:[e],crossOrigin:"anonymous",...k?{projection:k}:{}});t.setSource(ct),o=ct}}if(typeof(o==null?void 0:o.ready)=="function")try{await o.ready()}catch{}t.set("_lastVariable",e);const r=t.get("bands")||(Array.isArray((_=(H=t.get("_jsonDefinition"))==null?void 0:H.source)==null?void 0:_.bands)?(J=(B=t.get("_jsonDefinition"))==null?void 0:B.source)==null?void 0:J.bands:null),a=Array.isArray(r)&&r.length>1?r:[e];t.get("bands")!==void 0&&t.set("bands",a),t.get("band")!==void 0&&t.set("band",e);const s=t.get("layerConfig"),{targetMin:l,targetMax:c}=Qe(t,e),d=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,u=(j=d==null?void 0:d[e])==null?void 0:j.valid_range;let p=s;if(s){const lt=(s==null?void 0:s.autofill)===!0||((St=s==null?void 0:s.schema)==null?void 0:St.autofill)===!0;let k;(ot=s.schema)!=null&&ot.properties&&(k={...s.schema.properties},k.variable&&(k.variable={...k.variable,default:e}),k.band&&(k.band={...k.band,default:e}),k.bands&&(k.bands={...k.bands,default:k.bands.type==="array"?a:a[0]}),k.redMax||k.greenMax||k.blueMax||Uo(k,l,c,u,lt,!0)),p={...s,bands:a,band:e,...lt||s.min!==void 0?{min:l}:{},...lt||s.max!==void 0?{max:c}:{},schema:k?{...s.schema,properties:k}:s.schema},t.set("layerConfig",p)}if(((s==null?void 0:s.autofill)===!0||((I=s==null?void 0:s.schema)==null?void 0:I.autofill)===!0||((Y=t.styleVariables_)==null?void 0:Y.min)!==void 0||((K=t.styleVariables_)==null?void 0:K.max)!==void 0||((dt=(Ct=t.style_)==null?void 0:Ct.variables)==null?void 0:dt.min)!==void 0||((It=(Ut=t.style_)==null?void 0:Ut.variables)==null?void 0:It.max)!==void 0||((ae=($i=(_e=t.get)==null?void 0:_e.call(t,"style"))==null?void 0:$i.variables)==null?void 0:ae.min)!==void 0||((sn=(an=(De=t.get)==null?void 0:De.call(t,"style"))==null?void 0:an.variables)==null?void 0:sn.max)!==void 0||((cn=(ln=s==null?void 0:s.schema)==null?void 0:ln.properties)==null?void 0:cn.min)!==void 0||((dn=(un=s==null?void 0:s.schema)==null?void 0:un.properties)==null?void 0:dn.max)!==void 0)&&Fo(t,{min:l,max:c}),o&&typeof o.getDimensions=="function")try{const lt=await o.getDimensions();if(lt){const k={};for(const[ct,xt]of Object.entries(lt)){if(ct==="time"||!xt||xt.size<=0)continue;k[ct]=xt;const rt=t.get("layerConfig")||p,Ht=(rt==null?void 0:rt.autofill)===!0||((hn=rt==null?void 0:rt.schema)==null?void 0:hn.autofill)===!0;if((fn=rt==null?void 0:rt.schema)!=null&&fn.properties&&(rt.schema.properties[ct]!==void 0||Ht)){const Te=((pn=xt.attributes)==null?void 0:pn.long_name)||ct.charAt(0).toUpperCase()+ct.slice(1),se=(gn=xt.attributes)==null?void 0:gn.units,le=se?`${Te} (${se})`:Te,Ot={...rt.schema.properties};Ot[ct]={type:"integer",title:le,default:0,minimum:0,maximum:xt.size-1,step:1,format:"range",...Ot[ct]||{}},p={...rt,schema:{...rt.schema,properties:Ot}},t.set("layerConfig",p)}typeof o.updateDimensions=="function"&&o.updateDimensions({[ct]:0})}if(t.set("_geozarrDimensions",k),lt!=null&&lt.time&&lt.time.size>0){const ct=lt.time,{units:xt}=ct.attributes||{};let rt=0,Ht=1e3;if(xt&&typeof xt=="string"&&xt.includes(" since ")){const Q=xt.split(" since ");let vt=Q[1].trim();!vt.includes("T")&&!vt.includes("Z")&&(vt=vt.replace(" ","T")+"Z"),rt=Date.parse(vt)||0;const ce=Q[0].toLowerCase();ce.includes("day")?Ht=86400*1e3:ce.includes("nanosecond")?Ht=1e-6:ce.includes("microsecond")?Ht=.001:ce.includes("millisecond")?Ht=1:ce.includes("second")&&(Ht=1e3)}const Te=Q=>typeof Q=="string"?new Date(Q):new Date(rt+Number(Q)*Ht),se=await Promise.all([...Array(ct.size).keys()].map(async Q=>{const vt=typeof o.getValue=="function"?await o.getValue("time",Q):Q;return{index:Q,date:Te(vt)}}));se.sort((Q,vt)=>Q.date.getTime()-vt.date.getTime());const le={},Ot=se.map(Q=>{const vt=Q.date.toISOString();return le[vt]=Q.index,vt}),Ve=t.get("layerDatetime")||{},mn=Ve.currentStep&&Ot.includes(Ve.currentStep)?Ve.currentStep:Ot[0];t.set("layerDatetime",{showUTC:!0,slider:!0,navigation:!0,...Ve,controlValues:Ot,sliceMap:le,currentStep:mn});const Lo=Ot.map(Q=>({date:Q}));t.set("timeControlValues",Lo);const Io=le[mn]??0;typeof o.updateDimensions=="function"&&o.updateDimensions({time:Io})}}}catch(lt){console.warn("Could not refresh GeoZarr dimensions for new band:",lt)}return{targetMin:l,targetMax:c}}var uo="Expected a function",Dn=NaN,Aa="[object Symbol]",Ca=/^\s+|\s+$/g,_a=/^[-+]0x[0-9a-f]+$/i,Da=/^0b[01]+$/i,Ta=/^0o[0-7]+$/i,Va=parseInt,Ma=typeof Me=="object"&&Me&&Me.Object===Object&&Me,Ra=typeof self=="object"&&self&&self.Object===Object&&self,La=Ma||Ra||Function("return this")(),Ia=Object.prototype,Ha=Ia.toString,Oa=Math.max,Pa=Math.min,Bi=function(){return La.Date.now()};function Na(t,e,i){var n,o,r,a,s,l,c=0,d=!1,u=!1,p=!0;if(typeof t!="function")throw new TypeError(uo);e=Tn(e)||0,ti(i)&&(d=!!i.leading,u="maxWait"in i,r=u?Oa(Tn(i.maxWait)||0,e):r,p="trailing"in i?!!i.trailing:p);function y(_){var B=n,J=o;return n=o=void 0,c=_,a=t.apply(J,B),a}function f(_){return c=_,s=setTimeout(w,e),d?y(_):a}function b(_){var B=_-l,J=_-c,j=e-B;return u?Pa(j,r-J):j}function $(_){var B=_-l,J=_-c;return l===void 0||B>=e||B<0||u&&J>=r}function w(){var _=Bi();if($(_))return A(_);s=setTimeout(w,b(_))}function A(_){return s=void 0,p&&n?y(_):(n=o=void 0,a)}function S(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function R(){return s===void 0?a:A(Bi())}function H(){var _=Bi(),B=$(_);if(n=arguments,o=this,l=_,B){if(s===void 0)return f(l);if(u)return s=setTimeout(w,e),y(l)}return s===void 0&&(s=setTimeout(w,e)),a}return H.cancel=S,H.flush=R,H}function Ba(t,e,i){var n=!0,o=!0;if(typeof t!="function")throw new TypeError(uo);return ti(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),Na(t,e,{leading:n,maxWait:e,trailing:o})}function ti(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ka(t){return!!t&&typeof t=="object"}function Ua(t){return typeof t=="symbol"||ka(t)&&Ha.call(t)==Aa}function Tn(t){if(typeof t=="number")return t;if(Ua(t))return Dn;if(ti(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ti(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Ca,"");var i=Da.test(t);return i||Ta.test(t)?Va(t.slice(2),i?2:8):_a.test(t)?Dn:+t}var Fa=Ba;const Vn=Zo(Fa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=t=>t??Xt;var yt,ei,ii;class ho extends At{constructor(){super();T(this,yt,[]);T(this,ei,ki`
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
  `);T(this,ii,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return m(this,yt)?m(this,yt).length>1?m(this,yt):m(this,yt)[0]:null}set layerLegend(i){var n;i?Array.isArray(i)?W(this,yt,i.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):W(this,yt,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...i}]):W(this,yt,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var i;W(this,yt,(i=m(this,yt))==null?void 0:i.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),g`
      <style>
        ${m(this,ei)}
        ${!this.unstyled&&m(this,ii)}
      </style>
      ${N(this.layerLegend,()=>g`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${m(this,yt).map((i,n,o)=>g`
                <color-legend
                  id="${i.id}"
                  width=${i.width??325}
                  scaleType="${Pe(i.scaleType)}"
                  markType="${Pe(i.markType)}"
                  titleText="${Pe(i.title)}"
                  .range=${i.range}
                  .domain=${i.domain}
                  tickFormat="${Pe(i.tickFormat)}"
                  .ticks=${i.ticks??5}
                  .tickValues=${i.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${n!==o.length-1?g`<div class="separator"></div>`:Xt}
              `)}
          </div>
        `)}
    `}}yt=new WeakMap,ei=new WeakMap,ii=new WeakMap,q(ho,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",ho);var F,st,ie,Zt,xe,Xi,ni,oi;class fo extends At{constructor(){super();T(this,xe);T(this,F,{});T(this,st,null);T(this,ie);T(this,Zt,i=>{var o,r,a,s,l,c,d,u,p;const n=i;if(n.key==="source"&&W(this,ie,void 0),n.key==="layerConfig"){this.layerConfig=this.layer.get("layerConfig");const y=Ni(this.layer,this.layerConfig)||{},f=(r=(o=this.layerConfig)==null?void 0:o.schema)==null?void 0:r.properties,b=((a=this.layerConfig)==null?void 0:a.autofill)===!0||((l=(s=this.layerConfig)==null?void 0:s.schema)==null?void 0:l.autofill)===!0;((c=this.layerConfig)==null?void 0:c.min)!==void 0&&((d=this.layerConfig)==null?void 0:d.max)!==void 0&&Fi(m(this,F),f,this.layerConfig.min,this.layerConfig.max,b);const $=this.layer.get("_lastVariable")||((u=this.layerConfig)==null?void 0:u.band)||(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0);if($&&(b||(f==null?void 0:f.variable)!==void 0||(f==null?void 0:f.band)!==void 0)&&((f==null?void 0:f.band)!==void 0?m(this,F).band=$:m(this,F).variable=$),W(this,st,{...m(this,F),...y}),f&&!b){const w=new Set(Object.keys(f));for(const A of Object.keys(m(this,st)))w.has(A)||delete m(this,st)[A]}W(this,F,{...m(this,st)}),this.requestUpdate()}});T(this,ni,ki`
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
  `);T(this,oi,ki`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Vn(O(this,xe,Xi),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){var i;super.connectedCallback(),(i=this.layer)!=null&&i.on&&this.layer.on("propertychange",m(this,Zt))}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.layer)!=null&&i.un&&this.layer.un("propertychange",m(this,Zt))}updated(i){var n,o,r;if(i.has("layer")){const a=i.get("layer");a!=null&&a.un&&a.un("propertychange",m(this,Zt)),(n=this.layer)!=null&&n.on&&this.layer.on("propertychange",m(this,Zt))}if(i.has("layerConfig")){const a=((o=this.layerConfig)==null?void 0:o.type)==="style"||(r=this.layerConfig)!=null&&r.style?100:1e3;this.throttleDataChange=Vn(O(this,xe,Xi),a)}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l,c,d,u,p;const n={...Ni(this.layer,this.layerConfig)||{},...m(this,F)},o=(c=(l=this.layerConfig)==null?void 0:l.schema)==null?void 0:c.properties,r=((d=this.layerConfig)==null?void 0:d.autofill)===!0||((p=(u=this.layerConfig)==null?void 0:u.schema)==null?void 0:p.autofill)===!0;if(o&&!r){const y=new Set(Object.keys(o));for(const f of Object.keys(n))y.has(f)||delete n[f]}const a=Object.keys(n).length?n:null;JSON.stringify(a)!==JSON.stringify(m(this,st))&&W(this,st,a),W(this,F,{...m(this,st)}),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const s={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return g`
      <style>
        ${m(this,ni)}
        ${!this.unstyled&&m(this,oi)}
      </style>
      ${N(this.layerConfig,()=>g`
          ${N(this.layerConfig.legend,()=>g`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${wa(this.layerConfig.legend,m(this,st),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${m(this,st)}
            .options=${s}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${y=>{this.throttleDataChange(y)}}
            @eox:activity=${y=>{y.stopPropagation()}}
          ></eox-jsonform>
        `)}
    `}}F=new WeakMap,st=new WeakMap,ie=new WeakMap,Zt=new WeakMap,xe=new WeakSet,Xi=async function(i){var s,l,c,d,u,p,y,f,b,$,w,A,S,R,H,_,B,J,j,St;const n=!!(i!=null&&i.isUser),o=((s=m(this,F))==null?void 0:s.variable)??((l=m(this,F))==null?void 0:l.band)??((d=(c=this.layer)==null?void 0:c.get)==null?void 0:d.call(c,"_lastVariable"))??((u=this.layerConfig)==null?void 0:u.band)??(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0),r=((y=i.detail)==null?void 0:y.variable)??((f=i.detail)==null?void 0:f.band),a=r!==void 0&&o!==void 0&&String(r)!==String(o);if(a){const{targetMin:ot,targetMax:I}=Qe(this.layer,String(r),this.layerConfig),Y=($=(b=this.layerConfig)==null?void 0:b.schema)==null?void 0:$.properties;Fi(i.detail,Y,ot,I)}if(W(this,F,{...i.detail}),((w=this.layerConfig)==null?void 0:w.type)==="style"||(A=this.layerConfig)!=null&&A.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?await ba(m(this,F),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):W(this,ie,ya(m(this,F),m(this,ie),this)),a){this.layerConfig=((R=(S=this.layer)==null?void 0:S.get)==null?void 0:R.call(S,"layerConfig"))||this.layerConfig;const ot=Ni(this.layer,this.layerConfig)||{},I=(_=(H=this.layerConfig)==null?void 0:H.schema)==null?void 0:_.properties,Y=((B=this.layerConfig)==null?void 0:B.autofill)===!0||((j=(J=this.layerConfig)==null?void 0:J.schema)==null?void 0:j.autofill)===!0;if(W(this,st,{...m(this,F),...ot,...r&&(Y||(I==null?void 0:I.variable)!==void 0||(I==null?void 0:I.band)!==void 0)?(I==null?void 0:I.band)!==void 0?{band:r}:{variable:r}:{},...m(this,F).min!==void 0&&(Y||(I==null?void 0:I.min)!==void 0)?{min:m(this,F).min}:{},...m(this,F).max!==void 0&&(Y||(I==null?void 0:I.max)!==void 0)?{max:m(this,F).max}:{}}),I&&!Y){const Ct=new Set(Object.keys(I));for(const dt of Object.keys(m(this,st)))Ct.has(dt)||delete m(this,st)[dt]}W(this,F,{...m(this,st)});const K=(St=this.renderRoot)==null?void 0:St.querySelector("eox-jsonform");K!=null&&K.editor&&!K.editor.destroyed&&K.editor.ready&&K.editor.setValue(m(this,F))}this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:m(this,F),layer:this.layer,isUser:n}})),this.requestUpdate()},ni=new WeakMap,oi=new WeakMap,q(fo,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",fo);var Ee,ri,go,ai,si;class po extends At{constructor(){super();T(this,ri);T(this,Ee,Ln(Ea,300));T(this,ai,"");T(this,si,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){m(this,Ee).flush(),super.disconnectedCallback()}render(){var i;return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),g`
      <style>
        ${m(this,ai)}
        ${!this.unstyled&&m(this,si)}
      </style>
      ${N((i=this.layerDatetime)==null?void 0:i.controlValues,()=>g`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(n=>({date:n}))}]}
            @select=${O(this,ri,go)}
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
    `}}Ee=new WeakMap,ri=new WeakSet,go=function(i){var s;i.stopPropagation();const n=new Date(i.detail.date[0]),o=(s=this.layerDatetime.controlValues)==null?void 0:s.some(l=>typeof l=="string"&&l.includes("T"));let r;if(o?r=n.toISOString():r=(c=>`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`)(n),r===this.layerDatetime.currentStep)return;const a=Object.assign(new CustomEvent("datetime:updated",{bubbles:!0,composed:!0,detail:{datetime:r,layer:this.layer}}),{isUser:i.isUser===!0});this.dispatchEvent(a),m(this,Ee).call(this,this.layer,r),this.layerDatetime.currentStep=r,this.requestUpdate()},ai=new WeakMap,si=new WeakMap,q(po,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",po);var $e,li,ci;class mo extends At{constructor(){super();T(this,$e,i=>(this.selectedTab===i||this.toolsAsList)&&"highlighted");T(this,li,`
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
  `);T(this,ci,`
    ${Gi}
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.tabs,n=this.actions,o=n.length+i.length>1;return g`
      <style>
        ${m(this,li)}
        ${!this.unstyled&&m(this,ci)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${N(o,()=>g`
            <nav>
              ${N(!this.toolsAsList,()=>g`
                  <div>
                    <!-- Labels for tabs -->
                    ${Ne(i,(r,a)=>g`
                        <label
                          class=${m(this,$e).call(this,a)}
                          @click=${s=>{this.selectedTab=a;const l=ve(this,"eox-layercontrol")||this;we(l,"select:tool",{tool:r},s)}}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${Ne(n,r=>g`
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
          ${Ne(i,(r,a)=>g`
              ${N(this.toolsAsList,()=>g`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${m(this,$e).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${N(this.toolsAsList&&a<i.length-1,()=>g`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}$e=new WeakMap,li=new WeakMap,ci=new WeakMap,q(mo,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",mo);var ui,bo,ne,di,hi;class yo extends At{constructor(){super();T(this,ui);q(this,"_removeButton",i=>ao(this,i));q(this,"_sortButton",i=>so(this,i,this.unstyled));q(this,"_button",(i,n)=>xa(i,n,this.unstyled));q(this,"_getDefaultTools",i=>{var n,o;return g`
      <div slot="info-content">
        ${jo(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Ui((n=this.layer)==null?void 0:n.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
            @change=${r=>{var s,l;const a=ve(this,"eox-layercontrol")||this;we(a,"change:opacity",{layer:((s=this.layer)==null?void 0:s.get("id"))||((l=this.layer)==null?void 0:l.get("name")),opacity:parseFloat(r.target.value)},r)}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${N(this.layer.get("layerConfig"),()=>g`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${O(this,ui,bo)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${N(this.layer.get("layerDatetime"),()=>g`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>co(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${N(this.layer.get("layerLegend"),()=>g`
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
    `});T(this,ne,!1);T(this,di,"");T(this,hi,`
    ${this.embedded?"":Gi}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var n,o,r;const i=this.parentElement||((n=this.getRootNode())==null?void 0:n.host);this.embedded=(i==null?void 0:i.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((o=this.layer)!=null&&o.getVisible()):this.embedded===!1?!0:!!((r=this.layer)!=null&&r.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){var i,n;(n=(i=this.layer)==null?void 0:i.on)==null||n.call(i,"propertychange",o=>{const r=o;(r.key==="layerConfig"||r.key==="layerDatetime"||r.key==="timeControlValues")&&this.requestUpdate()})}updated(i){var n;this.toolsAutoExpand&&(i.has("toolsAutoExpand")||i.has("layer"))&&(this.open=!!((n=this.layer)!=null&&n.getVisible()))}render(){const i=oo(this.tools,this.layer),n=ro(this.tools,this.layer),o=i==null?void 0:i.length,r=n==null?void 0:n.length;return g`
      <style>
        ${m(this,di)}
        ${!this.unstyled&&m(this,hi)}
      </style>
      ${N(o+r>0,()=>g`
          ${N(!(o===1&&r===0),()=>g`
              <details
                class="tools"
                .open=${Ui(this.open)}
                @toggle=${a=>{var s,l;if(this.open=a.target.open,m(this,ne)){W(this,ne,!1);const c=ve(this,"eox-layercontrol")||this;we(c,"toggle:tools",{layer:((s=this.layer)==null?void 0:s.get("id"))||((l=this.layer)==null?void 0:l.get("name")),open:this.open},a)}}}
              >
                <summary
                  @click=${()=>{W(this,ne,!0)}}
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
                  ${Ne(n,a=>this._button(a,be()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(be())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}ui=new WeakSet,bo=function(i){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:i.detail.jsonformValue,layer:i.detail.layer,isUser:i.detail.isUser}}))},ne=new WeakMap,di=new WeakMap,hi=new WeakMap,q(yo,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",yo);const ja=t=>{var a,s,l,c;const e=()=>{const d=ma(t.layer,t.map,t.showLayerZoomState);let u=!1;!d&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,u=!0):d&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,u=!0),u&&(t.requestUpdate(),Ze(t,"change:resolution",{bubbles:!0,composed:!1,activity:!1}))};let i;const n=()=>{i&&Re(i),i=void 0,t.map&&io(t.layer,t.showLayerZoomState)&&(i=t.map.getView().on("change:resolution",e)),t.map&&e()};n();const o=(s=(a=t.map)==null?void 0:a.on)==null?void 0:s.call(a,"change:view",n),r=(c=(l=t.layer)==null?void 0:l.on)==null?void 0:c.call(l,"propertychange",d=>{const u=d;(u.key==="layerDatetime"||u.key==="layerConfig"||u.key==="timeControlValues")&&t.requestUpdate()});return()=>{i&&Re(i),o&&Re(o),r&&Re(r)}},qa=(t,e)=>{const i=e.layer;if(i.setVisible(t.target.checked),e.toolsAutoExpand){const n=e.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=t.target.checked)}t.target.checked&&i.get("layerControlExclusive")&&e.closest(`${e.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;if(o.layer!==i&&((r=o.layer)!=null&&r.get("layerControlExclusive"))){if(o.layer.setVisible(!1),o.toolsAutoExpand){const a=o.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}o.requestUpdate()}}),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),e.requestUpdate()};var bt,Kt,zt,Yi,wo,fi,pi;class vo extends At{constructor(){super();T(this,bt);q(this,"currLayerVisibilityBasedOnZoom",!0);T(this,zt);T(this,fi,"");T(this,pi,`
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&O(this,bt,Yi).call(this)}disconnectedCallback(){var i;(i=m(this,zt))==null||i.call(this),W(this,zt,void 0),super.disconnectedCallback()}updated(i){this.isConnected&&(i.has("layer")||i.has("map")||i.has("showLayerZoomState"))&&O(this,bt,Yi).call(this)}render(){var d,u;const i=this.layer.getVisible(),n=i?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=O(this,bt,Kt).call(this,"layerControlDisable")?"disabled":"",a=O(this,bt,Kt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((d=oo(this.tools,this.layer))==null?void 0:d.length)>0,l=((u=ro(this.tools,this.layer))==null?void 0:u.length)>0,c=document.querySelector("eox-layercontrol-layer-tools");return c&&Object.assign(c,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),g`
      <style>
        ${m(this,fi)}
        ${!this.unstyled&&m(this,pi)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${N(this.layer,()=>g`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${n} ${o} responsive tiny-space"
          >
            ${N(!this.unstyled,()=>{if(O(this,bt,Kt).call(this,"color"))return g`
                  <i class="small" style="color: ${O(this,bt,Kt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return g` <i class="small"> </i> `;case"draw":return g`
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
                  `;case"vector":return g`
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
                  `;case"raster":return g`
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
                  `;default:return g` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${O(this,bt,Kt).call(this,this.titleProperty)}</span
              >
            </div>

            ${N(l&&!this.toolsAutoExpand,()=>g`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const p=this.renderRoot.querySelector("eox-layercontrol-layer-tools");p.open=!p.open}}
                >
                  <i class="small">
                    ${be()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${N(!l&&s,()=>this.tools[0]==="remove"?ao(this,be()[this.tools[0]]):so(this,be()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Ui(i)}
                @click=${O(this,bt,wo)}
                disabled=${r||Xt}
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
      ${N(l&&!c,()=>g`
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
    `}}bt=new WeakSet,Kt=function(i){var n;return(n=this.layer)==null?void 0:n.get(i)},zt=new WeakMap,Yi=function(){var i;(i=m(this,zt))==null||i.call(this),W(this,zt,ja(this))},wo=function(i){qa(i,this)},fi=new WeakMap,pi=new WeakMap,q(vo,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",vo);var gi,mi;class So extends At{constructor(){super();T(this,gi,"");T(this,mi,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const i=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=lo(this.group.getLayers()))==null?void 0:r.length;return g`
      <style>
        ${m(this,gi)}
        ${!this.unstyled&&m(this,mi)}
      </style>
      ${N(this.group,()=>g`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${i||Xt}
            data-children-length=${n}
          >
            <summary class="square">
              ${N(n>0,()=>g`
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
    `}}gi=new WeakMap,mi=new WeakMap,q(So,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",So);const Za=t=>{const{layers:e,idProperty:i,titleProperty:n,renderRoot:o}=t,r=Ln(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(e&&(e.hasListener("change:length")&&(e==null||e.un("change:length",a)),e.on("change:length",a),e)){const s=o.querySelector("ul");ga(e,i,n,t),pa(s,e,i,t)}};var yi,bi;class xo extends At{constructor(){super();T(this,yi,"");T(this,bi,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){Za(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.layers?lo(this.layers).reverse():[];return g`
      <style>
        ${m(this,yi)}
        ${!this.unstyled&&m(this,bi)}
      </style>
      <ul class="list no-space">
        ${N(this.layers,()=>g`
            ${Po(i,n=>n,n=>g`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${_n(n,this.map)}"
                  class="square"
                >
                  ${n.getLayers?g`
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
                        `:g`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${n}
                            .layerType=${_n(n,this.map)}
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
    `}}yi=new WeakMap,bi=new WeakMap,q(xo,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",xo);const za=t=>{const e=t.querySelector("select[name=optional]"),i=e?e.value:null,n=on(t.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(t.idProperty)||o.ol_uid)===i);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:n})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),t.requestUpdate()};var vi,$o;class Eo extends At{constructor(){super();T(this,vi);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=on(this.layers.getArray(),"layerControlOptional",!0);return g`
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
            ${i.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return g` <option value="${o}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${O(this,vi,$o)}">Add</button>
      </nav>
    `}}vi=new WeakSet,$o=function(){za(this)},q(Eo,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Eo);const Xa=(t,e)=>{e.jsonInput=t.target.value,e.requestUpdate()},Mn=t=>{const e=JSON.parse(`{"data":${Un(t.jsonInput)}}`);Array.isArray(e.data)?e.data.forEach(n=>{t.eoxMap.addOrUpdateLayer(n)}):t.eoxMap.addOrUpdateLayer(e.data),t.jsonInput=null;const i=ve(t,"eox-layercontrol")||t;we(i,"add:layer",{layers:e.data}),t.requestUpdate()},Ya=(t,e)=>{e.urlInput=t.target.value,e.requestUpdate()};async function Wa(t){const e=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!e)return!1;if(Ki(e)==="XYZ")return{Name:e};try{const i=await Nr(e);t.wmsCapabilities=i}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const Ga=(t,e)=>{const{Name:i}=t,n=Ki(e.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:e.urlInput,params:{LAYERS:i}}};e.jsonInput=JSON.stringify(o)},Ja=(t,e)=>{e.open=t||null,e.urlInput=null,e.jsonInput=null,e.wmsCapabilities=null,e.requestUpdate()};var et,Co,_o,Wi,Do,To,qe,wi;class Ao extends At{constructor(){super();T(this,et);q(this,"urlInput",null);q(this,"jsonInput",null);q(this,"open",null);q(this,"searchLoad",!1);q(this,"wmsCapabilities",null);T(this,wi,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i={add:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},n=this.open?"open":"close",o=this.open==="url",r=this.open==="json",a=!Br(this.urlInput)||this.searchLoad?!0:Xt;return g`
      <style>
        ${m(this,wi)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${n}"
          >
            <a
              @click=${()=>O(this,et,qe).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>O(this,et,qe).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>O(this,et,qe).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":g`<i class="small primary-text">${i.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${n}" style="padding: 15px 0">
          ${o?g`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${O(this,et,Co)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${O(this,et,_o)}
                  >
                    ${this.unstyled?"Search":g`<i class="small">${i.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?g`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return g`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>O(this,et,Wi).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:Xt}
              `:g`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${O(this,et,To)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${kr(this.jsonInput)?Xt:!0}
                  @click=${O(this,et,Do)}
                >
                  ${this.unstyled?"Add JSON":g`<i class="small">${i.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}et=new WeakSet,Co=function(i){Ya(i,this)},_o=async function(){const i=await Wa(this);i&&O(this,et,Wi).call(this,i)},Wi=function(i){Ga(i,this),Mn(this)},Do=function(){Mn(this)},To=function(i){Xa(i,this)},qe=function(i){Ja(i,this)},wi=new WeakMap,q(Ao,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Ao);const Ka=(t,e)=>{if(e.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=e.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}},Rn=t=>{const e=zo(t.for);return e&&e.map!==t.map&&(t.map=e.map),e};No();var Bt,re,Mo,Ro,Si;class Vo extends At{constructor(){super();T(this,re);T(this,Bt);T(this,Si,`
    ${Gi}
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
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=Rn(this)}updated(i){i.has("for")&&(this.eoxMap=Rn(this))}get eoxMap(){return m(this,Bt)}set eoxMap(i){const n=m(this,Bt);W(this,Bt,i),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const i=(o=this.map)==null?void 0:o.getLayers().getArray(),n=i&&((r=on(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return g`
      <style>
        ${!this.unstyled&&m(this,Si)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${N(this.addExternalLayers&&((a=m(this,Bt))==null?void 0:a.addOrUpdateLayer),()=>g`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${m(this,Bt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${N(this.map,()=>g`
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
            @changed=${O(this,re,Mo)}
            @datetime:updated=${s=>co(s,this,s.isUser===!0)}
            @layerConfig:change=${O(this,re,Ro)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${N(n,()=>g`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Bt=new WeakMap,re=new WeakSet,Mo=function(i){Ka(i,this);const n=!!(i.detail&&!("activity"in i.detail&&i.detail.activity===!1));Ze(this,"layerchange",{detail:i.detail,activity:n,action:"layerchange"})},Ro=function(i){var n;Ze(this,"layerConfig:change",{detail:i.detail,activity:((n=i.detail)==null?void 0:n.isUser)!==!1,action:"layerConfig:change"})},Si=new WeakMap,q(Vo,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",Vo);export{Vo as EOxLayerControl,va as updateVectorLayerStyle};
