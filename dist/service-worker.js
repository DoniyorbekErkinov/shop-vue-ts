if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const n=e=>s(e,c),a={module:{uri:c},exports:o,require:n};i[c]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(d(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"e-commerce"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.218e6590.css",revision:null},{url:"/images/nn-found.jpg",revision:"b4ade6795335cdfe93150902be519bac"},{url:"/images/products/img_1.jpg",revision:"bfff0d95518ad2b3cd3d91dce67ce8b0"},{url:"/images/products/img_10.jpg",revision:"42631b4051159846859d49329073beca"},{url:"/images/products/img_2.jpg",revision:"259f0585962315a85c9166af0dd05562"},{url:"/images/products/img_3.jpg",revision:"80001665695835dc0d95484f354da3d5"},{url:"/images/products/img_4.jpg",revision:"2692e871e03874072aa75b9935d3089d"},{url:"/images/products/img_5.jpg",revision:"f065a79fccd5f1d597c8dd69a5c6b756"},{url:"/images/products/img_6.jpg",revision:"f56826ba8dd018e3b937dfd538887e9d"},{url:"/images/products/img_7.jpg",revision:"908be833d5b40a8a64e427b6eb1e5ab1"},{url:"/images/products/img_8.jpg",revision:"ca8746afef6b0b380fcbcbade4baddf3"},{url:"/images/products/img_9.jpg",revision:"ec8551101ee4ac804582a976bba103bf"},{url:"/index.html",revision:"436c421570654fa51f271c2cb4e02953"},{url:"/js/app.ee762d3e.js",revision:null},{url:"/manifest.json",revision:"d606c6529683216a708f2401db28ce16"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
