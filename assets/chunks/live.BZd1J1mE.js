import{T as n,E as s}from"./lit-element.CIht5NN8.js";import{e as T,i as l,t}from"./directive.CvdRHFdJ.js";import{f as p,m as f}from"./directive-helpers.BMu_cjfm.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=T(class extends l{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!p(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===s)return r;const o=e.element,i=e.name;if(e.type===t.PROPERTY){if(r===o[i])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===o.hasAttribute(i))return n}else if(e.type===t.ATTRIBUTE&&o.getAttribute(i)===r+"")return n;return f(e),r}});export{m as l};
