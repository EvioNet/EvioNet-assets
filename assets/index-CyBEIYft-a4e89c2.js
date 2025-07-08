import{c as a}from"./button-h1DSpZXA-a4e89c2.js";import{r as c}from"./index-DYkXUbAd-a4e89c2.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],l=a("copy",n);function d(o){const t=document.createElement("textarea");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function m(){const[o,t]=c.useState(null),r=c.useCallback(e=>{(async()=>{try{if(navigator?.clipboard?.writeText)await navigator.clipboard.writeText(e),t(e);else throw new Error("writeText not supported")}catch{d(e),t(e)}})()},[]);return[o,r]}export{l as C,m as u};
