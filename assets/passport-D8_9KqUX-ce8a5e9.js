import{c as n}from"./button-BsXSSnm1-ce8a5e9.js";import{p as r}from"./index-C-lWNyDS-ce8a5e9.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],p=n("lock",a);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],m=n("mail",s),d=e=>{const t=new URLSearchParams;for(const o in e)t.append(o,e[o]);return r.Post("/passport/auth/login",t.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},w=e=>{const t=new URLSearchParams;for(const o in e)t.append(o,e[o]);return r.Post("/passport/comm/sendEmailVerify",t.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},h=e=>{const t=new URLSearchParams;for(const o in e)e[o]&&t.append(o,e[o]);return r.Post("/passport/auth/register",t.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})};export{p as L,m as M,d as l,h as r,w as s};
