(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf86b400"],{"0cb2":function(e,t,n){var a=n("7b0b"),r=Math.floor,o="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,i,u,l){var d=n+e.length,f=i.length,b=s;return void 0!==u&&(u=a(u),b=c),o.call(l,b,(function(a,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":c=u[o.slice(1,-1)];break;default:var s=+o;if(0===s)return a;if(s>f){var l=r(s/10);return 0===l?a:l<=f?void 0===i[l-1]?o.charAt(1):i[l-1]+o.charAt(1):a}c=i[s-1]}return void 0===c?"":c}))}},"11de":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("cf75"),i=Object(s["d"])({id:Object(s["c"])(c["t"]),inline:Object(s["c"])(c["g"],!1),novalidate:Object(s["c"])(c["g"],!1),validated:Object(s["c"])(c["g"],!1)},o["z"]),u=a["default"].extend({name:o["z"],functional:!0,props:i,render:function(e,t){var n=t.props,a=t.data,o=t.children;return e("form",Object(r["a"])(a,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),o)}})},"205f":function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("9b76"),i=n("8690"),u=n("365c"),l=n("d82f"),d=n("cf75"),f=n("d580"),b=n("6197"),g=n("b885");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=Object(d["d"])(Object(l["m"])(m(m({},Object(d["a"])(f["a"],d["f"].bind(null,"footer"))),{},{footer:Object(d["c"])(c["t"]),footerClass:Object(d["c"])(c["e"]),footerHtml:Object(d["c"])(c["t"])})),o["l"]),j=a["default"].extend({name:o["l"],functional:!0,props:O,render:function(e,t){var n,a=t.props,o=t.data,c=t.children,s=a.footerBgVariant,u=a.footerBorderVariant,l=a.footerTextVariant;return e(a.footerTag,Object(r["a"])(o,{staticClass:"card-footer",class:[a.footerClass,(n={},h(n,"bg-".concat(s),s),h(n,"border-".concat(u),u),h(n,"text-".concat(l),l),n)],domProps:c?{}:Object(i["a"])(a.footerHtml,a.footer)}),c)}}),v=n("4918");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=Object(d["d"])(Object(l["m"])(x(x({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(d["c"])(c["g"],!1),end:Object(d["c"])(c["g"],!1),start:Object(d["c"])(c["g"],!1),top:Object(d["c"])(c["g"],!1)})),o["n"]),k=a["default"].extend({name:o["n"],functional:!0,props:P,render:function(e,t){var n=t.props,a=t.data,o=n.src,c=n.alt,s=n.width,i=n.height,u="card-img";return n.top?u+="-top":n.right||n.end?u+="-right":n.bottom?u+="-bottom":(n.left||n.start)&&(u+="-left"),e("img",Object(r["a"])(a,{class:u,attrs:{src:o,alt:c,width:s,height:i}}))}});function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=Object(d["a"])(P,d["f"].bind(null,"img"));R.imgSrc.required=!1;var C=Object(d["d"])(Object(l["m"])(z(z(z(z(z(z({},b["b"]),g["b"]),O),R),f["a"]),{},{align:Object(d["c"])(c["t"]),noBody:Object(d["c"])(c["g"],!1)})),o["j"]),D=a["default"].extend({name:o["j"],functional:!0,props:C,render:function(e,t){var n,a=t.props,o=t.data,c=t.slots,l=t.scopedSlots,f=a.imgSrc,p=a.imgLeft,m=a.imgRight,h=a.imgStart,v=a.imgEnd,w=a.imgBottom,x=a.header,y=a.headerHtml,P=a.footer,S=a.footerHtml,z=a.align,C=a.textVariant,D=a.bgVariant,T=a.borderVariant,F=l||{},N=c(),B={},E=e(),V=e();if(f){var L=e(k,{props:Object(d["e"])(R,a,d["h"].bind(null,"img"))});w?V=L:E=L}var _=e(),$=Object(u["a"])(s["p"],F,N);($||x||y)&&(_=e(g["a"],{props:Object(d["e"])(g["b"],a),domProps:$?{}:Object(i["a"])(y,x)},Object(u["b"])(s["p"],B,F,N)));var A=Object(u["b"])(s["h"],B,F,N);a.noBody||(A=e(b["a"],{props:Object(d["e"])(b["b"],a)},A),a.overlay&&f&&(A=e("div",{staticClass:"position-relative"},[E,A,V]),E=e(),V=e()));var Z=e(),M=Object(u["a"])(s["o"],F,N);return(M||P||S)&&(Z=e(j,{props:Object(d["e"])(O,a),domProps:$?{}:Object(i["a"])(S,P)},Object(u["b"])(s["o"],B,F,N))),e(a.tag,Object(r["a"])(o,{staticClass:"card",class:(n={"flex-row":p||h,"flex-row-reverse":(m||v)&&!(p||h)},I(n,"text-".concat(z),z),I(n,"bg-".concat(D),D),I(n,"border-".concat(T),T),I(n,"text-".concat(C),C),n)}),[E,_,A,Z,V])}})},"25f0":function(e,t,n){"use strict";var a=n("6eeb"),r=n("825a"),o=n("577e"),c=n("d039"),s=n("ad6d"),i="toString",u=RegExp.prototype,l=u[i],d=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=i;(d||f)&&a(RegExp.prototype,i,(function(){var e=r(this),t=o(e.source),n=e.flags,a=o(void 0===n&&e instanceof RegExp&&!("flags"in u)?s.call(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"330d":function(e,t,n){e.exports=n.p+"img/zelID.ced69d20.svg"},"3e0d":function(e,t,n){"use strict";n("8c05")},4918:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return h}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("2326"),i=n("6c06"),u=n("7b1e"),l=n("3a58"),d=n("cf75"),f=n("fa73");function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',p=function(e,t,n){var a=encodeURIComponent(g.replace("%{w}",Object(f["g"])(e)).replace("%{h}",Object(f["g"])(t)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(a)},m=Object(d["d"])({alt:Object(d["c"])(c["t"]),blank:Object(d["c"])(c["g"],!1),blankColor:Object(d["c"])(c["t"],"transparent"),block:Object(d["c"])(c["g"],!1),center:Object(d["c"])(c["g"],!1),fluid:Object(d["c"])(c["g"],!1),fluidGrow:Object(d["c"])(c["g"],!1),height:Object(d["c"])(c["o"]),left:Object(d["c"])(c["g"],!1),right:Object(d["c"])(c["g"],!1),rounded:Object(d["c"])(c["j"],!1),sizes:Object(d["c"])(c["f"]),src:Object(d["c"])(c["t"]),srcset:Object(d["c"])(c["f"]),thumbnail:Object(d["c"])(c["g"],!1),width:Object(d["c"])(c["o"])},o["O"]),h=a["default"].extend({name:o["O"],functional:!0,props:m,render:function(e,t){var n,a=t.props,o=t.data,c=a.alt,d=a.src,g=a.block,m=a.fluidGrow,h=a.rounded,O=Object(l["c"])(a.width)||null,j=Object(l["c"])(a.height)||null,v=null,w=Object(s["b"])(a.srcset).filter(i["a"]).join(","),x=Object(s["b"])(a.sizes).filter(i["a"]).join(",");return a.blank&&(!j&&O?j=O:!O&&j&&(O=j),O||j||(O=1,j=1),d=p(O,j,a.blankColor||"transparent"),w=null,x=null),a.left?v="float-left":a.right?v="float-right":a.center&&(v="mx-auto",g=!0),e("img",Object(r["a"])(o,{attrs:{src:d,alt:c,width:O?Object(f["g"])(O):null,height:j?Object(f["g"])(j):null,srcset:w||null,sizes:x||null},class:(n={"img-thumbnail":a.thumbnail,"img-fluid":a.fluid||m,"w-100":m,rounded:""===h||!0===h},b(n,"rounded-".concat(h),Object(u["m"])(h)&&""!==h),b(n,v,v),b(n,"d-block",g),n)}))}})},4968:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("cf75"),i=n("fa73"),u=Object(s["d"])({title:Object(s["c"])(c["t"]),titleTag:Object(s["c"])(c["t"],"h4")},o["q"]),l=a["default"].extend({name:o["q"],functional:!0,props:u,render:function(e,t){var n=t.props,a=t.data,o=t.children;return e(n.titleTag,Object(r["a"])(a,{staticClass:"card-title"}),o||Object(i["g"])(n.title))}})},5319:function(e,t,n){"use strict";var a=n("d784"),r=n("d039"),o=n("825a"),c=n("a691"),s=n("50c4"),i=n("577e"),u=n("1d80"),l=n("8aa5"),d=n("0cb2"),f=n("14c3"),b=n("b622"),g=b("replace"),p=Math.max,m=Math.min,h=function(e){return void 0===e?e:String(e)},O=function(){return"$0"==="a".replace(/./,"$0")}(),j=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),v=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,n){var a=j?"$":"$0";return[function(e,n){var a=u(this),r=void 0==e?void 0:e[g];return void 0!==r?r.call(e,a,n):t.call(i(a),e,n)},function(e,r){var u=o(this),b=i(e);if("string"===typeof r&&-1===r.indexOf(a)&&-1===r.indexOf("$<")){var g=n(t,u,b,r);if(g.done)return g.value}var O="function"===typeof r;O||(r=i(r));var j=u.global;if(j){var v=u.unicode;u.lastIndex=0}var w=[];while(1){var x=f(u,b);if(null===x)break;if(w.push(x),!j)break;var y=i(x[0]);""===y&&(u.lastIndex=l(b,s(u.lastIndex),v))}for(var P="",k=0,S=0;S<w.length;S++){x=w[S];for(var z=i(x[0]),I=p(m(c(x.index),b.length),0),R=[],C=1;C<x.length;C++)R.push(h(x[C]));var D=x.groups;if(O){var T=[z].concat(R,I,b);void 0!==D&&T.push(D);var F=i(r.apply(void 0,T))}else F=d(z,b,I,R,D,r);I>=k&&(P+=b.slice(k,I)+F,k=I+z.length)}return P+b.slice(k)}]}),!v||!O||j)},6076:function(e,t,n){"use strict";n("99af");var a=n("b4c0");t["a"]={help:function(){return Object(a["a"])().get("/daemon/help")},helpSpecific:function(e){return Object(a["a"])().get("/daemon/help/".concat(e))},getInfo:function(){return Object(a["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(a["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(e,t){return Object(a["a"])().get("/daemon/getrawtransaction/".concat(e,"/").concat(t))},listZelNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(a["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(a["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(a["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(a["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(a["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(a["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(e){return Object(a["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark:function(e){return Object(a["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo:function(){return Object(a["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(a["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(a["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(e,t){return Object(a["a"])().get("/daemon/validateaddress/".concat(t),{headers:{zelidauth:e}})},getWalletInfo:function(e){return Object(a["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listZelNodeConf:function(e){return Object(a["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start:function(e){return Object(a["a"])().get("/daemon/start",{headers:{zelidauth:e}})},restart:function(e){return Object(a["a"])().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon:function(e){return Object(a["a"])().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon:function(e,t){return Object(a["a"])().get("/daemon/rescanblockchain/".concat(t),{headers:{zelidauth:e}})},getBlock:function(e,t){return Object(a["a"])().get("/daemon/getblock/".concat(e,"/").concat(t))},tailDaemonDebug:function(e){return Object(a["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},6197:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return m}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("d82f"),i=n("cf75"),u=n("d580"),l=n("4968"),d=n("ba06");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=Object(i["d"])(Object(s["m"])(b(b(b(b({},l["b"]),d["b"]),Object(i["a"])(u["a"],i["f"].bind(null,"body"))),{},{bodyClass:Object(i["c"])(c["e"]),overlay:Object(i["c"])(c["g"],!1)})),o["k"]),m=a["default"].extend({name:o["k"],functional:!0,props:p,render:function(e,t){var n,a=t.props,o=t.data,c=t.children,s=a.bodyBgVariant,u=a.bodyBorderVariant,f=a.bodyTextVariant,b=e();a.title&&(b=e(l["a"],{props:Object(i["e"])(l["b"],a)}));var p=e();return a.subTitle&&(p=e(d["a"],{props:Object(i["e"])(d["b"],a),class:["mb-2"]})),e(a.bodyTag,Object(r["a"])(o,{staticClass:"card-body",class:[(n={"card-img-overlay":a.overlay},g(n,"bg-".concat(s),s),g(n,"border-".concat(u),u),g(n,"text-".concat(f),f),n),a.bodyClass]}),[b,p,c])}})},"867f":function(e,t,n){"use strict";n("99af");var a=n("b4c0");t["a"]={updateFlux:function(e){return Object(a["a"])().get("/flux/updateflux",{headers:{zelidauth:e}})},hardUpdateFlux:function(e){return Object(a["a"])().get("/flux/hardupdateflux",{headers:{zelidauth:e}})},rebuildHome:function(e){return Object(a["a"])().get("/flux/rebuildhome",{headers:{zelidauth:e}})},updateDaemon:function(e){return Object(a["a"])().get("/flux/updatedaemon",{headers:{zelidauth:e}})},reindexDaemon:function(e){return Object(a["a"])().get("/flux/reindexdaemon",{headers:{zelidauth:e}})},updateBenchmark:function(e){return Object(a["a"])().get("/flux/updatebenchmark",{headers:{zelidauth:e}})},getFluxVersion:function(){return Object(a["a"])().get("/flux/version")},broadcastMessage:function(e,t){var n=t,r={headers:{zelidauth:e}};return Object(a["a"])().post("/flux/broadcastmessage",JSON.stringify(n),r)},connectedPeers:function(){return Object(a["a"])().get("/flux/connectedpeers?timestamp=".concat((new Date).getTime()))},connectedPeersInfo:function(){return Object(a["a"])().get("/flux/connectedpeersinfo?timestamp=".concat((new Date).getTime()))},incomingConnections:function(){return Object(a["a"])().get("/flux/incomingconnections?timestamp=".concat((new Date).getTime()))},incomingConnectionsInfo:function(){return Object(a["a"])().get("/flux/incomingconnectionsinfo?timestamp=".concat((new Date).getTime()))},addPeer:function(e,t){return Object(a["a"])().get("/flux/addpeer/".concat(t),{headers:{zelidauth:e}})},removePeer:function(e,t){return Object(a["a"])().get("/flux/removepeer/".concat(t),{headers:{zelidauth:e}})},removeIncomingPeer:function(e,t){return Object(a["a"])().get("/flux/removeincomingpeer/".concat(t),{headers:{zelidauth:e}})},adjustCruxID:function(e,t){return Object(a["a"])().get("/flux/adjustcruxid/".concat(t),{headers:{zelidauth:e}})},adjustKadena:function(e,t,n){return Object(a["a"])().get("/flux/adjustkadena/".concat(t,"/").concat(n),{headers:{zelidauth:e}})},getCruxID:function(){return Object(a["a"])().get("/flux/cruxid")},getKadenaAccount:function(){return Object(a["a"])().get("/flux/kadena")},getZelid:function(){return Object(a["a"])().get("/flux/zelid")},tailFluxLog:function(e,t){return Object(a["a"])().get("/flux/tail".concat(e,"log"),{headers:{zelidauth:t}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"8c05":function(e,t,n){},"9e7b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{staticClass:"row",class:e.classes},[n("dt",{staticClass:"col-sm-3"},[e._v(" "+e._s(e.title)+" ")]),e.href.length>0?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+e.variant},[e.href.length>0?n("b-link",{attrs:{href:e.href,target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")]):e._e()],1):e.click?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+e.variant,on:{click:function(t){return e.$emit("click")}}},[n("b-link",[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")])],1):n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+e.variant},[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")])])},r=[],o=(n("a9e3"),n("aa59")),c={components:{BLink:o["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},s=c,i=n("2877"),u=Object(i["a"])(s,a,r,!1,null,null,null);t["a"]=u.exports},aa3c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-card",{attrs:{title:"FluxOS - Node Details"}},[a("list-entry",{attrs:{title:"Flux owner ZelID",data:e.userconfig.zelid}}),a("list-entry",{attrs:{title:"Status",data:e.getNodeStatusResponse.nodeStatus,variant:e.getNodeStatusResponse.class}}),""!==e.getInfoResponse.message?a("list-entry",{attrs:{title:"Daemon Version",data:e.getInfoResponse.message.version.toString()}}):e._e(),""!==e.getInfoResponse.message?a("list-entry",{attrs:{title:"Protocol Version",data:e.getInfoResponse.message.protocolversion.toString()}}):e._e(),""!==e.getInfoResponse.message?a("list-entry",{attrs:{title:"Current Blockchain Height",data:e.getInfoResponse.message.blocks.toString()}}):e._e(),e.getInfoResponse.status.length>0&&""!=e.getInfoResponse.message.errors?a("list-entry",{attrs:{title:"Error",data:e.getInfoResponse.message.errors,variant:"danger"}}):e._e()],1),"none"===e.privilege?a("b-card",[a("b-card-title",[e._v("Log In")]),a("dl",{staticClass:"row"},[a("dd",{staticClass:"col-sm-4"},[a("b-card-text",{staticClass:"text-center"},[e._v(" Please log in using ZelID ")]),a("a",{attrs:{href:"zel:?action=sign&message="+e.loginPhrase+"&icon=https%3A%2F%2Fraw.githubusercontent.com%2Frunonflux%2Fflux%2Fmaster%2FZelFront%2Fsrc%2Fassets%2Fimg%2FzelID.svg&callback="+e.callbackValue},on:{click:e.initiateLoginWS}},[a("img",{staticClass:"zelidLogin",attrs:{src:n("330d"),alt:"Zel ID",height:"100%",width:"100%"}})])],1),a("dd",{staticClass:"col-sm-8"},[a("b-card-text",{staticClass:"text-center"},[e._v(" or sign the following message with any Bitcoin address ")]),a("b-form",{staticClass:"mx-5",on:{submit:function(e){e.preventDefault()}}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Message","label-for":"h-message","label-cols-md":"3"}},[a("b-form-input",{attrs:{id:"h-message",placeholder:"Insert Login Phrase"},model:{value:e.loginForm.loginPhrase,callback:function(t){e.$set(e.loginForm,"loginPhrase",t)},expression:"loginForm.loginPhrase"}})],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Address","label-for":"h-address","label-cols-md":"3"}},[a("b-form-input",{attrs:{id:"h-address",placeholder:"Insert ZelID or Bitcoin address"},model:{value:e.loginForm.zelid,callback:function(t){e.$set(e.loginForm,"zelid",t)},expression:"loginForm.zelid"}})],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Signature","label-for":"h-signature","label-cols-md":"3"}},[a("b-form-input",{attrs:{id:"h-signature",placeholder:"Insert Signature"},model:{value:e.loginForm.signature,callback:function(t){e.$set(e.loginForm,"signature",t)},expression:"loginForm.signature"}})],1)],1),a("b-col",{attrs:{"offset-md":"5"}},[a("b-button",{staticClass:"mr-1",attrs:{type:"submit",variant:"primary"},on:{click:e.login}},[e._v(" Login ")])],1)],1)],1)],1)])],1):e._e()],1)},r=[],o=n("1da1"),c=n("5530"),s=(n("96cf"),n("ac1f"),n("466d"),n("1276"),n("a15b9"),n("5319"),n("99af"),n("caad"),n("2532"),n("d3b7"),n("25f0"),n("205f")),i=n("d6e4"),u=n("4968"),l=n("1947"),d=n("11de"),f=n("b28b"),b=n("a15b"),g=n("4797"),p=n("8226"),m=n("2f62"),h=n("b307"),O=n("9e7b"),j=n("6076"),v=n("f33c"),w=n("867f"),x=n("4328"),y=n("8ded"),P={components:{BCard:s["a"],BCardText:i["a"],BCardTitle:u["a"],BButton:l["a"],BForm:d["a"],BCol:f["a"],BRow:b["a"],BFormInput:g["a"],BFormGroup:p["a"],ListEntry:O["a"],ToastificationContent:h["a"]},data:function(){return{getInfoResponse:{status:"",message:""},getNodeStatusResponse:{class:"text-success",status:"",data:"",nodeStatus:"Checking status..."},websocket:null,errorMessage:"",loginPhrase:"",loginForm:{zelid:"",signature:"",loginPhrase:""}}},computed:Object(c["a"])(Object(c["a"])({},Object(m["b"])("flux",["userconfig","config","privilege"])),{},{callbackValue:function(){var e=this.backendURL(),t="".concat(e,"/zelid/verifylogin");return encodeURI(t)}}),mounted:function(){this.daemonGetInfo(),this.daemonWelcomeGetZelNodeStatus(),this.getZelIdLoginPhrase(),this.getOwnerZelid()},methods:{backendURL:function(){var e=window.location,t=e.protocol,n=e.hostname,a="";a+=t,a+="//";var r=/[A-Za-z]/g;if(n.match(r)){var o=n.split(".");o[0]="api",a+=o.join(".")}else"string"===typeof n&&this.$store.commit("setUserIp",n),a+=":",a+=this.config.apiPort;return y.get("backendURL")||a},getOwnerZelid:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w["a"].getZelid();case 2:n=t.sent,a=n.data.data,"success"===n.data.status&&"string"===typeof a&&e.$store.commit("setUserZelid",a);case 5:case"end":return t.stop()}}),t)})))()},daemonGetInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].getInfo();case 2:n=t.sent,e.getInfoResponse.status=n.data.status,e.getInfoResponse.message=n.data.data;case 5:case"end":return t.stop()}}),t)})))()},daemonWelcomeGetZelNodeStatus:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].getZelNodeStatus();case 2:n=t.sent,e.getNodeStatusResponse.status=n.data.status,e.getNodeStatusResponse.data=n.data.data,e.getNodeStatusResponse.data&&("CONFIRMED"===e.getNodeStatusResponse.data.status||"CONFIRMED"===e.getNodeStatusResponse.data.location?(e.getNodeStatusResponse.nodeStatus="Flux is working correctly",e.getNodeStatusResponse.class="success"):"STARTED"===e.getNodeStatusResponse.data.status||"STARTED"===e.getNodeStatusResponse.data.location?(e.getNodeStatusResponse.nodeStatus="Flux has just been started. Flux is running with limited capabilities.",e.getNodeStatusResponse.class="warning"):(e.getNodeStatusResponse.nodeStatus="Flux is not confirmed. Flux is running with limited capabilities.",e.getNodeStatusResponse.class="danger"));case 6:case"end":return t.stop()}}),t)})))()},initiateLoginWS:function(){var e=this,t=this.backendURL();t=t.replace("https://","wss://"),t=t.replace("http://","ws://");var n="".concat(t,"/ws/id/").concat(this.loginPhrase),a=new WebSocket(n);this.websocket=a,a.onopen=function(t){e.onOpen(t)},a.onclose=function(t){e.onClose(t)},a.onmessage=function(t){e.onMessage(t)},a.onerror=function(t){e.onError(t)}},onError:function(e){console.log(e)},onMessage:function(e){var t=x.parse(e.data);if(console.log(t),"success"===t.status&&t.data){var n={zelid:t.data.zelid,signature:t.data.signature,loginPhrase:t.data.loginPhrase};this.$store.commit("flux/setPrivilege",t.data.privilage),localStorage.setItem("zelidauth",x.stringify(n)),this.showToast("success",t.data.message)}console.log(t),console.log(e)},onClose:function(e){console.log(e)},onOpen:function(e){console.log(e)},showToast:function(e,t){this.$toast({component:h["a"],props:{title:t,icon:"BellIcon",variant:e}})},getZelIdLoginPhrase:function(){var e=this;v["a"].loginPhrase().then((function(t){console.log(t),"error"===t.data.status?JSON.stringify(t.data.data).includes("CONN")?e.getEmergencyLoginPhrase():e.showToast("danger",t.data.data.message):(e.loginPhrase=t.data.data,e.loginForm.loginPhrase=t.data.data)})).catch((function(t){console.log(t),e.showToast("danger",t)}))},getEmergencyLoginPhrase:function(){var e=this;v["a"].emergencyLoginPhrase().then((function(t){console.log(t),"error"===t.data.status?e.showToast("danger",t.data.data.message):(e.loginPhrase=t.data.data,e.loginForm.loginPhrase=t.data.data)})).catch((function(t){console.log(t),e.showToast("danger",t)}))},getVariant:function(e){return"error"===e?"danger":"message"===e?"info":e},login:function(){var e=this;console.log(this.loginForm),v["a"].verifyLogin(this.loginForm).then((function(t){if(console.log(t),"success"===t.data.status){var n={zelid:e.loginForm.zelid,signature:e.loginForm.signature,loginPhrase:e.loginForm.loginPhrase};e.$store.commit("flux/setPrivilege",t.data.data.privilage),localStorage.setItem("zelidauth",x.stringify(n)),e.showToast("success",t.data.data.message)}else e.showToast(e.getVariant(t.data.status),t.data.data.message||t.data.data)})).catch((function(t){console.log(t),e.showToast("danger",t.toString())}))}}},k=P,S=(n("3e0d"),n("2877")),z=Object(S["a"])(k,a,r,!1,null,null,null);t["default"]=z.exports},b885:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return p}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("8690"),i=n("d82f"),u=n("cf75"),l=n("d580");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(u["d"])(Object(i["m"])(f(f({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(c["t"]),headerClass:Object(u["c"])(c["e"]),headerHtml:Object(u["c"])(c["t"])})),o["m"]),p=a["default"].extend({name:o["m"],functional:!0,props:g,render:function(e,t){var n,a=t.props,o=t.data,c=t.children,i=a.headerBgVariant,u=a.headerBorderVariant,l=a.headerTextVariant;return e(a.headerTag,Object(r["a"])(o,{staticClass:"card-header",class:[a.headerClass,(n={},b(n,"bg-".concat(i),i),b(n,"border-".concat(u),u),b(n,"text-".concat(l),l),n)],domProps:c?{}:Object(s["a"])(a.headerHtml,a.header)}),c)}})},ba06:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("cf75"),i=n("fa73"),u=Object(s["d"])({subTitle:Object(s["c"])(c["t"]),subTitleTag:Object(s["c"])(c["t"],"h6"),subTitleTextVariant:Object(s["c"])(c["t"],"muted")},o["o"]),l=a["default"].extend({name:o["o"],functional:!0,props:u,render:function(e,t){var n=t.props,a=t.data,o=t.children;return e(n.subTitleTag,Object(r["a"])(a,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),o||Object(i["g"])(n.subTitle))}})},d580:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("2b0e"),r=n("c637"),o=n("a723"),c=n("cf75"),s=Object(c["d"])({bgVariant:Object(c["c"])(o["t"]),borderVariant:Object(c["c"])(o["t"]),tag:Object(c["c"])(o["t"],"div"),textVariant:Object(c["c"])(o["t"])},r["j"]);a["default"].extend({props:s})},d6e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),c=n("a723"),s=n("cf75"),i=Object(s["d"])({textTag:Object(s["c"])(c["t"],"p")},o["p"]),u=a["default"].extend({name:o["p"],functional:!0,props:i,render:function(e,t){var n=t.props,a=t.data,o=t.children;return e(n.textTag,Object(r["a"])(a,{staticClass:"card-text"}),o)}})}}]);
//# sourceMappingURL=chunk-cf86b400.c48022fb.js.map