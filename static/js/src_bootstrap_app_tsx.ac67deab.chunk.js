/*! For license information please see src_bootstrap_app_tsx.ac67deab.chunk.js.LICENSE.txt */
(globalThis.webpackChunkdefi_land=globalThis.webpackChunkdefi_land||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return s.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return c.default}});var n=l(r(96369)),a=l(r(16960)),i=l(r(26252)),o=l(r(47547)),s=l(r(69363)),c=l(r(83272));function l(e){return e&&e.__esModule?e:{default:e}}const p=[n.default,a.default,i.default,o.default];t.h0=p},28392:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>k,__esModule:()=>S.X$,logo:()=>S.jY,panels:()=>S.h0,readme:()=>S.ng});var n=r(55754),a=r(68275),i=r(92950),o=r(45263),s=r(80754);const c=function(e){var t=e.appId,r=e.src,n=e.title,a=e.wallet,c=e.verbose,l=void 0!==c&&c;return(0,i.useEffect)((function(){return new s.Gateway(a,l).terminate}),[]),(0,o.jsx)("iframe",{id:t+"-iframe",src:r,title:n,style:{height:"calc(100vh - 64px)",margin:-12,marginTop:-24,border:"none",width:"100vw"},loading:"lazy",allowFullScreen:!0})};var l=r(94751);const p=()=>(0,o.jsxs)(l.Row,{gutter:[24,24],children:[(0,o.jsx)(l.Col,{span:24,style:{height:32}}),(0,o.jsx)(l.Col,{span:24,style:{textAlign:"center"},children:(0,o.jsxs)(l.Space,{direction:"vertical",children:[(0,o.jsx)(l.Typography.Title,{level:2,children:"\u26a0\ufe0f Only supported on Solana mainnet."}),(0,o.jsx)(l.Typography.Text,{children:"You can open the Control Center, switch to mainnet and experience the application."})]})})]});const d={appId:"defi_land",url:"https://descartesnetwork.github.io/defiland-iframe/index.js"},f={manifest:{development:{...d},production:{...d}}[a.env]},{manifest:{appId:u}}=f,b=()=>{const e=(0,a.useSetBackground)();return(0,i.useEffect)((()=>{e({light:"#4abffe",dark:"#4abffe"})}),[e]),"mainnet"!==a.net?(0,o.jsx)(p,{}):(0,o.jsx)(c,{wallet:window.sentre.wallet,appId:u,src:"https://play.defiland.app",title:"DeFi Land: Gamified Decentralized Finance"})};var y=r(19289),g=r(71256),h=r(48744),m=r.n(h),j=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const v={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof g.PublicKey||e instanceof m()||j.isBuffer(e)}},O="main",x=(0,y.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:r}=t;const{main:{counter:n}}=r();return{counter:n+1}})),w=(0,y.createSlice)({name:O,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(x.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,_=(0,y.configureStore)({middleware:e=>e(v),devTools:!1,reducer:{main:w}});var S=r(45597);const{manifest:{appId:P}}=f,k=()=>(0,o.jsx)(a.AntdProvider,{appId:P,children:(0,o.jsx)(n.Provider,{store:_,children:(0,o.jsx)(b,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,s,c=a(e),l=1;l<arguments.length;l++){for(var p in o=Object(arguments[l]))r.call(o,p)&&(c[p]=o[p]);if(t){s=t(o);for(var d=0;d<s.length;d++)n.call(o,s[d])&&(c[s[d]]=o[s[d]])}}return c}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),a=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),i("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:p,props:i,_owner:o.current}}t.jsx=l,t.jsxs=l},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.3a3ff41c55e01dd1004c.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.952f21b742eb1d436643.png"},96369:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-1.eb7d47868ada8b4a2bf7.png"},16960:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-2.9ea000163d88fc31dc5e.jpeg"},26252:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-3.fcfb91be543f91c31d49.png"},47547:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-4.3203eafc6a48b09a86bd.jpeg"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.ac67deab.chunk.js.map