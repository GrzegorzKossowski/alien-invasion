!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function s(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],u=n[a]||0,l="".concat(a," ").concat(u);n[a]=u+1;var f=s(l),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(h)):c.push({identifier:l,updater:d(h,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function h(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var y=null,v=0;function d(t,e){var n,r,o;if(e.singleton){var i=v++;n=y||(y=u(e)),r=h.bind(null,n,i,!1),o=h.bind(null,n,i,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);c[o].references--}for(var i=a(t,e),u=0;u<n.length;u++){var l=s(n[u]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=i}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,"body {\n    margin: 0;\n    background-color: #222;\n}\n.app {\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n.canvas {\n    border: 2px solid #555;    \n    background-color: #000000;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(c=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var c,s,a;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var s=0;s<t.length;s++){var a=[].concat(t[s]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.ctx,this.color="rgba(255,255,255,1)"}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){var e=t.mousePos;r(t,["mousePos"]),this.ctx.fillStyle=this.color,this.ctx.fillText("x: ".concat(e.x),10,10),this.ctx.fillText("x: ".concat(e.y),10,30)}}])&&o(e.prototype,n),i&&o(e,i),t}(),c=150,s={size:1,color:"#ff0000",velocity:.3,blastRadius:50,color0:"rgba(255, 255, 255, 1",color1:"rgba(238, 255, 0, .5)",color2:"rgba(255, 0, 0, 0)"},a={size:1,color:"#00FF1a",velocity:5,blastRadius:20,color0:"rgba(255, 255, 255, 1",color1:"rgba(0, 255, 0, .5)",color2:"rgba(0, 255, 0, 0)"};function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.y=0,this.x=0,this.size=1,this.velocity=0,this.xTarget=0,this.yTarget=0,this.xVect=0,this.yVect=0,this.dVect=0,this.vJedn=0,this.vxSpeed=0,this.vySpeed=0,this.color="rgba(255,0,255,1)"}var e,n,r;return e=t,(n=[{key:"init",value:function(t,e){this.x=t,this.y=e,this.vxSpeed=0,this.vySpeed=0}},{key:"speedVectorCount",value:function(t,e){this.xTarget=t,this.yTarget=e,this.countActualPosition(),this.countDistanceToTarget(),this.vxSpeed=this.xVect*this.velocity/this.dVect,this.vySpeed=this.yVect*this.velocity/this.dVect}},{key:"countActualPosition",value:function(){this.xVect=this.xTarget-this.x,this.yVect=this.yTarget-this.y}},{key:"countDistanceToTarget",value:function(){this.dVect=Math.sqrt(this.xVect*this.xVect+this.yVect*this.yVect)}},{key:"explosionRangeCheck",value:function(t,e){var n=t-this.x,r=e-this.y;return Math.sqrt(n*n+r*r)}},{key:"draw",value:function(){this.x+=this.vxSpeed,this.y+=this.vySpeed,this.ctx.fillStyle=this.color,this.ctx.fillRect(this.x-this.size,this.y-this.size,2*this.size,2*this.size)}}])&&u(e.prototype,n),r&&u(e,r),t}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(i,t);var e,n,r,o=y(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t.ctx)).color="rgba(255,0,0,1)",e.x=Math.round(Math.random()*t.cw),e.velocity=.3,e.xTarget=Math.round(Math.random()*(t.cw-100)+100),e.yTarget=t.ch,e}return e=i,(n=[{key:"init",value:function(){this.size=s.size,this.color=s.color,this.velocity=s.velocity,this.speedVectorCount(this.xTarget,this.yTarget)}}])&&h(e.prototype,n),r&&h(e,r),i}(l);function m(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(e){var n=e.ctx,r=e.r,o=void 0===r?60:r,i=m(e,["ctx","r"]);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=n,this.r=o,this.blastRadius=o,this.x=i.x,this.y=i.y,this.color0="",this.color1="",this.color2="",this.timeout=5e3,this.opacity=1,this.isActive=!0}var e,n,r;return e=t,(n=[{key:"draw",value:function(){var t=this.x,e=this.y,n=this.r,r=this.ctx.createRadialGradient(t,e,0,t,e,n);r.addColorStop(0,this.color0),r.addColorStop(.4,this.color1),r.addColorStop(1,this.color2),this.ctx.beginPath(),this.ctx.arc(t,e,n,2*Math.PI,0),this.ctx.fillStyle=r,this.ctx.fill()}}])&&g(e.prototype,n),r&&g(e,r),t}();function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(i,t);var e,n,r,o=j(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t)}return e=i,(n=[{key:"init",value:function(){var t=this;this.r=s.blastRadius,this.color0=s.color0,this.color1=s.color1,this.color2=s.color2,this.timeout=c,setTimeout((function(){t.isActive=!1}),this.timeout)}}])&&O(e.prototype,n),r&&O(e,r),i}(x);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=A(t);if(e){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(i,t);var e,n,r,o=C(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t)}return e=i,(n=[{key:"init",value:function(){var t=this;this.r=a.blastRadius,this.color0=a.color0,this.color1=a.color1,this.color2=a.color2,this.timeout=c,setTimeout((function(){t.isActive=!1}),this.timeout)}}])&&_(e.prototype,n),r&&_(e,r),i}(x);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=q(t);if(e){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(i,t);var e,n,r,o=F(i);function i(t){var e,n=t.ctx,r=t.mousePos,c=D(t,["ctx","mousePos"]);return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,n)).cw=c.cw,e.ch=c.ch,e.color="rgba(255,0,0,1)",e.x=c.cw/2,e.y=c.ch,e.velocity=.5,e.xTarget=r.x,e.yTarget=r.y,e.isActive=!0,e}return e=i,(n=[{key:"checkIsActive",value:function(){this.countActualPosition(),this.countDistanceToTarget(),this.dVect<5&&(this.isActive=!1)}},{key:"init",value:function(){this.size=a.size,this.color=a.color,this.velocity=a.velocity,this.speedVectorCount(this.xTarget,this.yTarget)}}])&&z(e.prototype,n),r&&z(e,r),i}(l);function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var H=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.querySelector("canvas"),this.cw=this.canvas.width,this.ch=this.canvas.height,this.ctx=this.canvas.getContext("2d"),this.grd=this.ctx.createLinearGradient(0,this.ch,0,0),this.ctx.font="normal 16px Helvetica",this.ctx.fillStyle="",this.ctx.textBaseline="top",this.lastFrame=0,this.delta=0,this.timestep=1e3/60,this.genTime=5e3,this.mousePos={x:0,y:0},this.city=new Image,this.hud=null,this.aliens=[],this.alienExplosions=[],this.rockets=[],this.rocketExplosions=[]}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=this;this.canvas.addEventListener("mousedown",(function(e){return t.handleMouseClick(e)}),!1),this.grd.addColorStop(0,"rgb(70,100,100,.7)"),this.grd.addColorStop(1,"rgb(0,0,0,0)"),this.hud=new i({ctx:this.ctx}),this.city.src="./assets/img/city25.png",this.createAlien()}},{key:"mainLoop",value:function(t){var e=this,n=0;for(this.delta+=t-this.lastFrame,this.lastFrame=t;this.delta>=this.timestep;)if(this.update(this.timestep),this.delta-=this.timestep,++n>=240){this.delta=0;break}this.draw(),requestAnimationFrame((function(t){return e.mainLoop(t)}))}},{key:"update",value:function(t){var e=this;this.aliens.forEach((function(t){if(t.y>=e.ch){var n=new T({ctx:e.ctx,x:t.x,y:t.y});n.init(),e.alienExplosions.push(n),e.aliens.splice(e.aliens.indexOf(t),1)}})),this.alienExplosions.forEach((function(t){t.isActive||e.alienExplosions.splice(e.alienExplosions.indexOf(t),1)})),this.rockets.forEach((function(t){if(t.checkIsActive(),!t.isActive){var n=new V({ctx:e.ctx,x:t.x,y:t.y,r:20});n.init(),e.alienExplosions.push(n),e.rockets.splice(e.rockets.indexOf(t),1)}}))}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.cw,this.ch),this.ctx.fillStyle=this.grd,this.ctx.fillRect(0,0,this.cw,this.ch),this.aliens.forEach((function(t){return t.draw()})),this.rockets.forEach((function(t){return t.draw()})),this.ctx.drawImage(this.city,0,this.ch-25),this.alienExplosions.forEach((function(t){return t.draw()})),this.hud.draw({mousePos:this.mousePos}),this.ctx.fillStyle="#ee0000",this.ctx.beginPath(),this.ctx.arc(this.cw/2,this.ch,10,1*Math.PI,0),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rbga(255,255,255,1)"}},{key:"handleMouseClick",value:function(t){this.mousePos=this.getMousePos(t),this.createRocket()}},{key:"getMousePos",value:function(t){var e=this.canvas.getBoundingClientRect();return{x:Math.floor(t.clientX-e.left),y:Math.floor(t.clientY-e.top)}}},{key:"createAlien",value:function(){var t=this,e=new b({ctx:this.ctx,cw:this.cw,ch:this.ch});e.init(),this.aliens.push(e),this.genTime>1e3&&(this.genTime-=Math.floor(100*Math.random())+100),setTimeout((function(){t.createAlien()}),Math.random()*(this.genTime-1e3)+1e3)}},{key:"createRocket",value:function(){var t=new B({ctx:this.ctx,mousePos:this.mousePos,cw:this.cw,ch:this.ch});t.init(),this.rockets.push(t)}}])&&U(e.prototype,n),r&&U(e,r),t}(),J=(n(0),new H);J.init(),requestAnimationFrame((function(t){return J.mainLoop(t)}))}]);