/*! vue-ydui v0.7.0 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var r=n(76),i=o(r);e.Popup=i.default},1:function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var u=a.computed||(a.computed={});Object.keys(o).forEach(function(t){var e=o[t];u[t]=function(){return e}})}return{esModule:r,exports:i,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},3:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=p[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));p[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function i(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return m;o.parentNode.removeChild(o)}if(v){var i=d++;o=f||(f=r()),e=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),e=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function s(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,l=n(4),p={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var r=l(t,e);return o(r),function(e){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=p[s.id];a.refs--,n.push(a)}e?(r=l(t,e),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete p[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=i[0],a=i[1],u=i[2],l=i[3],p={id:t+":"+r,css:a,media:u,sourceMap:l};o[s]?o[s].parts.push(p):n.push(o[s]={id:s,parts:[p]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),o=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||o.test(t)},r=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},i=function(t,e){var n=t==window?document.body.offsetHeight:t.offsetHeight,o=t===window?0:t.getBoundingClientRect().top,r=e.getBoundingClientRect().top-o,i=r+e.offsetHeight;return r>=0&&r<n||i>0&&i<=n},s=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},a=function(t,e){s(t,e)||(t.className=""==t.className?e:t.className+" "+e)},u=function(t,e){if(s(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},l=function(t){function e(n,o,r){if(n!==o){var i=n+r>o?o:n+r;n>o&&(i=n-r<o?o:n-r),t===window?window.scrollTo(i,i):t.scrollTop=i,window.requestAnimationFrame(function(){return e(i,o,r)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var i=Math.abs(n-o),s=Math.ceil(i/r*50);e(n,o,s)};e.pageScroll=n,e.isColor=o,e.getScrollview=r,e.checkInview=i,e.addClass=a,e.removeClass=u,e.scrollTop=l},41:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".m-popup{position:fixed;background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;pointer-events:none}.m-popup.popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.m-popup.popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.m-popup.popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.m-popup.popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.m-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .1s;transition:all .1s;border-radius:2px;pointer-events:none}.m-popup-center.popup-show{pointer-events:auto;opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.m-popup-mask{background-color:rgba(0,0,0,.4);position:fixed;z-index:1500;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])},76:function(t,e,n){n(177);var o=n(1)(n(213),n(148),null,null);t.exports=o.exports},148:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"m-popup-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{class:t.classes(),style:t.styles()},[t._t("default")],2)])},staticRenderFns:[]}},177:function(t,e,n){var o=n(41);"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);n(3)("27071b5a",o,!0)},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5);e.default={name:"yd-popup",data:function(){return{show:this.value}},props:{position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},height:{type:String,default:"50%"},width:{type:String,default:"50%"},value:{type:Boolean}},watch:{value:function(t){this.isIOS&&(t?(o.pageScroll.lock(),(0,o.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(o.pageScroll.unlock(),(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))),this.show=t}},methods:{styles:function(){return"left"==this.position||"right"==this.position?{width:this.width}:"bottom"==this.position?{width:"100%",height:this.height}:{width:this.width}},classes:function(){return("center"==this.position?"m-popup-center ":"m-popup ")+(this.show?"popup-show ":"")+"popup-"+this.position},close:function(){this.isIOS&&(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.show=!1,this.$emit("input",!1)}},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el),this.isIOS=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}}}})});