(function(t){if("function"==typeof bootstrap)bootstrap("promise",t);else if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=t}else Q=t()})(function(){"use strict";function t(t){var e=Function.call;return function(){return e.apply(t,arguments)}}function e(t){return"[object StopIteration]"===ae(t)||t instanceof $}function i(t,e){e.stack&&"object"==typeof t&&null!==t&&t.stack&&-1===t.stack.indexOf(he)&&(t.stack=n(t.stack)+"\n"+he+"\n"+n(e.stack))}function n(t){for(var e=t.split("\n"),i=[],n=0;e.length>n;++n){var r=e[n];s(r)||o(r)||i.push(r)}return i.join("\n")}function o(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function s(t){var e=/at .+ \((.*):(\d+):\d+\)/.exec(t);if(!e)return!1;var i=e[1],n=e[2];return i===J&&n>=G&&pe>=n}function r(){if(Error.captureStackTrace){var t,e,i=Error.prepareStackTrace;return Error.prepareStackTrace=function(i,n){t=n[1].getFileName(),e=n[1].getLineNumber()},Error().stack,Error.prepareStackTrace=i,J=t,e}}function a(t){return S(t)}function h(){function t(t){e=t,ee(i,function(e,i){B(function(){t.promiseDispatch.apply(t,i)})},void 0),i=void 0,n=void 0}var e,i=[],n=[],o=oe(h.prototype),s=oe(u.prototype);return s.promiseDispatch=function(t,o,s){var r=te(arguments);i?(i.push(r),"when"===o&&s[1]&&n.push(s[1])):B(function(){e.promiseDispatch.apply(e,r)})},s.valueOf=function(){if(i)return s;var t=f(e);return l(t)&&(e=t),t},Error.captureStackTrace&&a.longStackJumpLimit>0&&(Error.captureStackTrace(s,h),s.stack=s.stack.substring(s.stack.indexOf("\n")+1)),o.promise=s,o.resolve=function(i){e||t(S(i))},o.fulfill=function(i){e||t(y(i))},o.reject=function(i){e||t(_(i))},o.notify=function(t){e||ee(n,function(e,i){B(function(){i(t)})},void 0)},o}function c(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=h();return O(t,e.resolve,e.reject,e.notify).fail(e.reject),e.promise}function u(t,e,i,n,o){void 0===e&&(e=function(t){return _(Error("Promise does not support operation: "+t))});var s=oe(u.prototype);return s.promiseDispatch=function(i,n,o){var r;try{r=t[n]?t[n].apply(s,o):e.call(s,n,o)}catch(a){r=_(a)}i&&i(r)},i&&(s.valueOf=i),o&&(s.exception=n),s}function f(t){return l(t)?t.valueOf():t}function l(t){return t&&"function"==typeof t.promiseDispatch}function p(t){return t&&"function"==typeof t.then}function d(t){return!v(t)&&!g(t)}function v(t){return!p(f(t))}function g(t){return t=f(t),l(t)&&"exception"in t}function m(){fe||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",ce),fe=!0}function _(t){var e=u({when:function(e){if(e){var i=ie(ue,this);-1!==i&&(ue.splice(i,1),ce.splice(i,1))}return e?e(t):this}},function(){return _(t)},function(){return this},t,!0);return m(),ue.push(e),ce.push(t),e}function y(t){return u({when:function(){return t},get:function(e){return t[e]},set:function(e,i){t[e]=i},"delete":function(e){delete t[e]},post:function(e,i){return null===e||void 0===e?t.apply(void 0,i):t[e].apply(t,i)},apply:function(e,i){return t.apply(e,i)},keys:function(){return re(t)}},void 0,function(){return t})}function S(t){return l(t)?t:(t=f(t),p(t)?w(t):y(t))}function w(t){var e=h();return B(function(){try{t.then(e.resolve,e.reject,e.notify)}catch(i){e.reject(i)}}),e.promise}function b(t){return u({isDef:function(){}},function(e,i){return E(t,e,i)},function(){return f(t)})}function k(t,e,n,o){function s(t){try{return"function"==typeof e?e(t):t}catch(i){return _(i)}}function r(t){if("function"==typeof n){i(t,l);try{return n(t)}catch(e){return _(e)}}return _(t)}function c(t){return"function"==typeof o?o(t):t}var u=h(),f=!1,l=S(t);return B(function(){l.promiseDispatch(function(t){f||(f=!0,u.resolve(s(t)))},"when",[function(t){f||(f=!0,u.resolve(r(t)))}])}),l.promiseDispatch(void 0,"when",[void 0,function(t){var e,i=!1;try{e=c(t)}catch(n){if(i=!0,!a.onerror)throw n;a.onerror(n)}i||u.notify(e)}]),u.promise}function x(t,e,i){return k(t,function(t){return R(t).then(function(t){return e.apply(void 0,t)},i)},i)}function j(t){return function(){function i(t,i){var r;try{r=n[t](i)}catch(a){return e(a)?a.value:_(a)}return k(r,o,s)}var n=t.apply(this,arguments),o=i.bind(i,"send"),s=i.bind(i,"throw");return o()}}function C(t){throw new $(t)}function M(t){return function(){return x([this,R(arguments)],function(e,i){return t.apply(e,i)})}}function E(t,e,i){var n=h();return B(function(){S(t).promiseDispatch(n.resolve,e,i)}),n.promise}function P(t){return function(e){var i=te(arguments,1);return E(e,t,i)}}function T(t,e){var i=te(arguments,2);return le(t,e,i)}function I(t,e){return E(t,"apply",[void 0,e])}function O(t){var e=te(arguments,1);return I(t,e)}function A(t){var e=te(arguments,1);return function(){var i=e.concat(te(arguments));return E(t,"apply",[this,i])}}function R(t){return k(t,function(t){var e=0,i=h();return ee(t,function(n,o,s){v(o)?t[s]=f(o):(++e,k(o,function(n){t[s]=n,0===--e&&i.resolve(t)},i.reject))},void 0),0===e&&i.resolve(t),i.promise})}function z(t){return k(t,function(t){return t=ne(t,S),k(R(ne(t,function(t){return k(t,Z,Z)})),function(){return t})})}function L(t,e){return k(t,void 0,e)}function Q(t,e){return k(t,void 0,void 0,e)}function q(t,e){return k(t,function(t){return k(e(),function(){return t})},function(t){return k(e(),function(){return _(t)})})}function H(t,e,n,o){var s=function(e){B(function(){if(i(e,t),!a.onerror)throw e;a.onerror(e)})},r=e||n||o?k(t,e,n,o):t;"object"==typeof process&&process&&process.domain&&(s=process.domain.bind(s)),L(r,s)}function F(t,e,i){var n=h(),o=setTimeout(function(){n.reject(Error(i||"Timed out after "+e+" ms"))},e);return k(t,function(t){clearTimeout(o),n.resolve(t)},function(t){clearTimeout(o),n.reject(t)},n.notify),n.promise}function W(t,e){void 0===e&&(e=t,t=void 0);var i=h();return k(t,void 0,void 0,i.notify),setTimeout(function(){i.resolve(t)},e),i.promise}function V(t,e){var i=te(e),n=h();return i.push(n.makeNodeResolver()),I(t,i).fail(n.reject),n.promise}function N(t){var e=te(arguments,1),i=h();return e.push(i.makeNodeResolver()),I(t,e).fail(i.reject),i.promise}function D(t){var e=te(arguments,1);return function(){var i=e.concat(te(arguments)),n=h();return i.push(n.makeNodeResolver()),I(t,i).fail(n.reject),n.promise}}function K(t,e){var i=te(arguments,2);return function(){function n(){return t.apply(e,arguments)}var o=i.concat(te(arguments)),s=h();return o.push(s.makeNodeResolver()),I(n,o).fail(s.reject),s.promise}}function Y(t,e,i){var n=te(i||[]),o=h();return n.push(o.makeNodeResolver()),le(t,e,n).fail(o.reject),o.promise}function U(t,e){var i=te(arguments,2),n=h();return i.push(n.makeNodeResolver()),le(t,e,i).fail(n.reject),n.promise}function X(t,e){return e?(t.then(function(t){B(function(){e(null,t)})},function(t){B(function(){e(t)})}),void 0):t}var J,B,G=r(),Z=function(){};"function"==typeof setImmediate?B="undefined"!=typeof window?setImmediate.bind(window):setImmediate:"undefined"!=typeof process&&process.nextTick?B=process.nextTick:function(){function t(){if(--o,++r>=n){r=0,n*=4;for(var t=s&&Math.min(s-1,n);t>o;)++o,a()}for(;s;){--s,e=e.next;var i=e.task;e.task=void 0,i()}r=0}var e={task:void 0,next:null},i=e,n=2,o=0,s=0,r=0,a=void 0;if(B=function(t){i=i.next={task:t,next:null},++s>o&&n>o&&(++o,a())},"undefined"!=typeof MessageChannel){var h=new MessageChannel;h.port1.onmessage=t,a=function(){h.port2.postMessage(0)}}else a=function(){setTimeout(t,0)}}();var $,te=t(Array.prototype.slice),ee=t(Array.prototype.reduce||function(t,e){var i=0,n=this.length;if(1===arguments.length)for(;;){if(i in this){e=this[i++];break}if(++i>=n)throw new TypeError}for(;n>i;i++)i in this&&(e=t(e,this[i],i));return e}),ie=t(Array.prototype.indexOf||function(t){for(var e=0;this.length>e;e++)if(this[e]===t)return e;return-1}),ne=t(Array.prototype.map||function(t,e){var i=this,n=[];return ee(i,function(o,s,r){n.push(t.call(e,s,r,i))},void 0),n}),oe=Object.create||function(t){function e(){}return e.prototype=t,new e},se=t(Object.prototype.hasOwnProperty),re=Object.keys||function(t){var e=[];for(var i in t)se(t,i)&&e.push(i);return e},ae=t(Object.prototype.toString);$="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t},a.longStackJumpLimit=1;var he="From previous event:";a.nextTick=B,a.defer=h,h.prototype.makeNodeResolver=function(){var t=this;return function(e,i){e?t.reject(e):arguments.length>2?t.resolve(te(arguments,1)):t.resolve(i)}},a.promise=c,a.makePromise=u,u.prototype.then=function(t,e,i){return k(this,t,e,i)},u.prototype.thenResolve=function(t){return k(this,function(){return t})},u.prototype.thenReject=function(t){return k(this,function(){throw t})},ee(["isFulfilled","isRejected","isPending","dispatch","when","spread","get","set","del","delete","post","send","invoke","keys","fapply","fcall","fbind","all","allResolved","timeout","delay","catch","finally","fail","fin","progress","done","nfcall","nfapply","nfbind","denodeify","nbind","npost","nsend","ninvoke","nodeify"],function(t,e){u.prototype[e]=function(){return a[e].apply(a,[this].concat(te(arguments)))}},void 0),u.prototype.toSource=function(){return""+this},u.prototype.toString=function(){return"[object Promise]"},a.nearer=f,a.isPromise=l,a.isPromiseAlike=p,a.isPending=d,a.isFulfilled=v,a.isRejected=g;var ce=a.unhandledReasons=[],ue=[],fe=!1;"undefined"!=typeof process&&process.on&&process.on("exit",function(){for(var t=0;ce.length>t;t++){var e=ce[t];e&&e.stack!==void 0?console.warn("Unhandled rejection reason:",e.stack):console.warn("Unhandled rejection reason (no stack):",e)}}),a.reject=_,a.fulfill=y,a.resolve=S,a.master=b,a.when=k,a.spread=x,a.async=j,a["return"]=C,a.promised=M,a.dispatch=E,a.dispatcher=P,a.get=P("get"),a.set=P("set"),a["delete"]=a.del=P("delete");var le=a.post=P("post");a.send=T,a.invoke=T,a.fapply=I,a["try"]=O,a.fcall=O,a.fbind=A,a.keys=P("keys"),a.all=R,a.allResolved=z,a["catch"]=a.fail=L,a.progress=Q,a["finally"]=a.fin=q,a.done=H,a.timeout=F,a.delay=W,a.nfapply=V,a.nfcall=N,a.nfbind=D,a.denodeify=a.nfbind,a.nbind=K,a.npost=Y,a.nsend=U,a.ninvoke=a.nsend,a.nodeify=X;var pe=r();return a});var EventEmitter=function(){};EventEmitter.prototype={on:function(t,e){return this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e),this},one:function(t,e){function i(){e.apply(this,arguments),n.off(t,i),delete e.wrappedFct}var n=this;return e.wrappedFct=i,this.on(t,i)},off:function(t,e){return t?e?(e=e.wrappedFct||e,this._events=this._events||{},t in this._events==!1?this:(this._events[t].splice(this._events[t].indexOf(e),1),this)):(delete this._events[t],this):(delete this._events,this)},trigger:function(t){if(this._events=this._events||{},t in this._events!=!1){for(var e=0;this._events[t].length>e;e++)this._events[t][e].apply(this,Array.prototype.slice.call(arguments,1));return this}}};var ji={};(function(){var t={},e={easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)"},i=["transitionend","webkitTransitionEnd","oTransitionEnd"],n=function(){var t=document.body.style,e=["Webkit","O","Ms","Moz"],i={};return function(n){if(n in i)return i[n];var o,s="",r=e.length,a=n.replace(/-([a-z])/gi,function(t,e){return e.toUpperCase()});if(a in t)s=n;else for(o=a.slice(0,1).toUpperCase()+a.slice(1);r--;)if(e[r]+o in t){s=e[r]+o;break}return i[n]=s}}();t.css=function(t,e,i){t.style[n(e)]=i},t.transition=function(t,o,s,r){function a(e){e.target==t&&(i.forEach(function(e){t.removeEventListener(e,a)}),t.style[n("transition")]="",t.offsetWidth,l.resolve())}var h,c,u={},f="",l=Q.defer();for(c in o)h=n(c),h&&(u[c]=o[c],f+=(f?",":"")+c);t.offsetWidth,i.forEach(function(e){t.addEventListener(e,a)}),t.style[n("transition")]="all "+s+"s "+(e[r||"easeInOutQuad"]||r),t.style[n("transition-property")]=f;for(c in u)t.style[n(c)]=u[c];return l.promise},t.formatTime=function(t){var e=Math.floor(t/6e4);t%=6e4;var i=Math.floor(t/1e3),n=Math.floor(t%1e3);return e+":"+(10>i?"0"+i:i)+"."+(10>n?"00"+n:100>n?"0"+n:n)},ji.utils=t})(),function(){function t(){this.x=0,this.renderX=-1e3,this.y=0,this.width=0,this.height=0,this.xMax=0,this.xVel=0,this.jankiness=0,this.loop=!0,this.active=!0,this.sprite=null}var e,i;t.load=function(){return i?i:i=Q.fcall(function(){var t=Q.defer(),e=new Image;return e.onload=function(){t.resolve(e)},e.onerror=function(){t.reject(e)},e.src="static/imgs/ships.png",t.promise}).then(function(t){return e=[[97,100,0,0],[88,75,7,114],[70,91,17,204],[92,95,3,310]].map(function(e){var i=document.createElement("canvas");return i.width=e[0]+2,i.height=e[1]+2,i.getContext("2d").drawImage(t,e[2],e[3],e[0],e[1],1,1,e[0],e[1]),i}),!0})},t.random=function(){return t.fromSprite(Math.floor(Math.random()*e.length))},t.fromSprite=function(i){var n=e[i],o=new t;return o.sprite=n,o.width=n.width,o.height=n.height,o};var n=t.prototype;n.tick=function(t){this.x=this.x+this.xVel*t/1e3,this.x>this.xMax&&(this.loop?this.x=this.x%this.xMax-100:this.active=!1),(!this.jankiness||1>Math.random()+this.jankiness)&&(this.renderX=this.x)},n.draw=function(t){t.drawImage(this.sprite,this.renderX,this.y)},ji.Ship=t}(),function(){function t(){this.width=0,this.height=0,this.duration=500,this.active=!1,this._opacity=0,this._timeRemaining=0,this._colorStr=""}var e=t.prototype;e.flash=function(t,e,i){this._colorStr=t+","+e+","+i+",",this._timeRemaining=this.duration,this.active=!0},e.tick=function(t){this._timeRemaining-=t,0>=this._timeRemaining?this.active=!1:this._opacity=.5*(this._timeRemaining/this.duration)},e.draw=function(t){t.fillStyle="rgba("+this._colorStr+this._opacity+")",t.fillRect(0,0,this.width,this.height)},ji.Flash=t}(),function(){function t(){this.stageWidth=0,this.stageHeight=0,this.active=!1,this.needsResolving=null,this.x=0,this.y=0,this.leftShotPoints=Array(8),this.rightShotPoints=Array(8),this._remaining=0,this._leftShotLen=0,this._leftShotAngle=0,this._rightShotLen=0,this._rightShotAngle=0}var e=300,i=300,n=t.prototype;n.fire=function(t,e){this.x=t,this.y=e,this._remaining=i,this.active=!0;var n=e-this.stageHeight/2;this._leftShotLen=Math.sqrt(t*t+n*n),this._leftShotAngle=Math.atan2(n,t),this._rightShotLen=Math.sqrt(Math.pow(this.stageWidth-t,2)+n*n),this._rightShotAngle=Math.atan2(n,this.stageWidth-t)},n.tick=function(t){if(this._remaining-=t,0>=this._remaining)this.needsResolving=!0,this.active=!1;else{var n=1-Math.pow(this._remaining/i,3),o=Math.max(2*n-1,0),s=this._leftShotLen*o,r=this._rightShotLen*o,a=this._leftShotLen*n,h=this._rightShotLen*n,c=(1-o)*e/2,u=(1-n)*e/2;this.leftShotPoints[0]=s*Math.cos(this._leftShotAngle),this.leftShotPoints[1]=s*Math.sin(this._leftShotAngle)+c+this.stageHeight/2,this.leftShotPoints[2]=this.leftShotPoints[0],this.leftShotPoints[3]=s*Math.sin(this._leftShotAngle)-c+this.stageHeight/2,this.leftShotPoints[4]=a*Math.cos(this._leftShotAngle),this.leftShotPoints[5]=a*Math.sin(this._leftShotAngle)-u+this.stageHeight/2,this.leftShotPoints[6]=this.leftShotPoints[4],this.leftShotPoints[7]=a*Math.sin(this._leftShotAngle)+u+this.stageHeight/2,this.rightShotPoints[0]=this.stageWidth-r*Math.cos(this._rightShotAngle),this.rightShotPoints[1]=r*Math.sin(this._rightShotAngle)+c+this.stageHeight/2,this.rightShotPoints[2]=this.rightShotPoints[0],this.rightShotPoints[3]=r*Math.sin(this._rightShotAngle)-c+this.stageHeight/2,this.rightShotPoints[4]=this.stageWidth-h*Math.cos(this._rightShotAngle),this.rightShotPoints[5]=h*Math.sin(this._rightShotAngle)-u+this.stageHeight/2,this.rightShotPoints[6]=this.rightShotPoints[4],this.rightShotPoints[7]=h*Math.sin(this._rightShotAngle)+u+this.stageHeight/2}},n.draw=function(t){t.fillStyle="rgba(255, 50, 0, 1)",t.beginPath(),t.moveTo(this.leftShotPoints[0],this.leftShotPoints[1]),t.lineTo(this.leftShotPoints[2],this.leftShotPoints[3]),t.lineTo(this.leftShotPoints[4],this.leftShotPoints[5]),t.lineTo(this.leftShotPoints[6],this.leftShotPoints[7]),t.closePath(),t.moveTo(this.rightShotPoints[0],this.rightShotPoints[1]),t.lineTo(this.rightShotPoints[2],this.rightShotPoints[3]),t.lineTo(this.rightShotPoints[4],this.rightShotPoints[5]),t.lineTo(this.rightShotPoints[6],this.rightShotPoints[7]),t.closePath(),t.fill()},ji.Shot=t}(),function(){function t(){this.x=0,this.y=0,this.xVel=0,this.yVel=0,this.active=!1,this.width=7,this.height=7,this.friction=0,this.sprite=null,this.opacity=1,this.fadeTime=600,this.timeTillFade=300,this.activeTime=0,this.scale=1}function e(){this.x=0,this.y=0,this.active=!1,this._particles=[];for(var e=s+r;e--;)this._particles[e]=new t}var i,n,o=t.prototype;o.tick=function(t){this.activeTime+=t,this.x+=this.xVel*t/1e3,this.y+=this.yVel*t/1e3,this.yVel*=1-this.friction,this.xVel*=1-this.friction,this.activeTime>this.timeTillFade+this.fadeTime?this.active=!1:this.activeTime>this.timeTillFade&&(this.opacity=1-(this.activeTime-this.timeTillFade)/this.fadeTime)};var s=400,r=200;e.load=function(){return i?i:i=Q.fcall(function(){var t=Q.defer(),e=new Image;return e.onload=function(){t.resolve(e)},e.onerror=function(){t.reject(e)},e.src="static/imgs/particle-sprites.png",t.promise}).then(function(t){return n=[[7,7,1,1],[7,7,11,1],[7,7,22,1]].map(function(e){var i=document.createElement("canvas");return i.width=e[0]+2,i.height=e[1]+2,i.getContext("2d").drawImage(t,e[2],e[3],e[0],e[1],1,1,e[0],e[1]),i}),!0})};var a=e.prototype,h=Math.PI/4,c=0,u=500;a.tick=function(t){var e;this.active=!1;for(var i=this._particles.length;i--;)e=this._particles[i],e.active&&(e.tick(t),e.active&&!this.active&&(this.active=!0))},a.start=function(t){var e,i,o,r=Math.random()*Math.PI;this.active=!0;for(var a=this._particles.length;a--;)e=this._particles[a],o=s>a?r+(Math.random()*h-h/2):Math.random()*Math.PI,i=(Math.pow(Math.random(),3)*(u-c)+c)*(Math.round(Math.random())?-1:1),e.x=t.x+t.width/2,e.y=t.y+t.height/2,e.xVel=Math.cos(o)*i,e.yVel=Math.sin(o)*i,e.friction=.05*Math.random(),e.sprite=n[Math.round(.7*Math.random())?t.jankiness?2:0:1],e.opacity=1,e.active=!0,e.activeTime=0,e.fadeTime=400+300*Math.random(),e.scale=3*Math.random()+.5,e.tick(50)},a.draw=function(t){var e;t.globalCompositeOperation="lighter";for(var i=this._particles.length;i--;)e=this._particles[i],t.globalAlpha=e.opacity,t.drawImage(e.sprite,0,0,e.width,e.height,e.x-e.width*e.scale/2,e.y-e.height*e.scale/2,e.width*e.scale,e.height*e.scale);t.globalCompositeOperation="source-over",t.globalAlpha=1},ji.Explosion=e}(),function(){function t(t){this.normalShips=50,this.jankyShips=10,this.speed=100,this.speedVariance=50,this.jankiness=.2,this._canvas=t,this._context=t.getContext("2d"),this._ships=[],this._shot=new ji.Shot,this._explosions=[new ji.Explosion,new ji.Explosion],this._flash=new ji.Flash,this._pendingClick=null,this._warpAway=!1,this._scoreTime=0,this._innocentsKilled=0,this._timeEl=document.querySelector(".level-ui .time .num"),this._remainingEl=document.querySelector(".level-ui .spies .num"),this._onCanvasClick=this._onCanvasClick.bind(this)}var e=t.prototype=Object.create(EventEmitter.prototype);e.play=function(){for(var t,e=1e3,i=this.normalShips+this.jankyShips;i--;){t=ji.Ship.random();do t.y=Math.random()*(this._canvas.height-t.height-80),t.x=-t.width-Math.random()*this._canvas.width,e&&e--;while(e&&this._getIntersectingShip(t.x,t.y,t.width,t.height));t.xMax=this._canvas.width,t.xVel=this.speed+Math.random()*2*this.speedVariance-this.speedVariance,t.jankiness=this.jankyShips>i?this.jankiness:0,this._ships.push(t)}this._shot.stageWidth=this._canvas.width,this._shot.stageHeight=this._canvas.height,this._flash.width=this._canvas.width,this._flash.height=this._canvas.height,this._canvas.addEventListener("touchstart",this._onCanvasClick),this._canvas.addEventListener("mousedown",this._onCanvasClick),this._remainingEl.textContent=this.jankyShips,this._timeEl.textContent="0:00.000",this._gameLoop()},e._end=function(){this._canvas.removeEventListener("touchstart",this._onCanvasClick),this._canvas.removeEventListener("mousedown",this._onCanvasClick),this.trigger("end",{time:this._scoreTime,innocentsKilled:this._innocentsKilled})},e._getIntersectingShip=function(t,e,i,n){for(var o,s=this._ships.length;s--;)if(o=this._ships[s],o.active&&o.x+o.width>t&&o.y+o.height>e&&t+i>o.x&&e+n>o.y)return o;return null},e._gameLoop=function(){function t(o){var s,r,a,h=o-e,c=!1;for(e=o,n.clearRect(0,0,i._canvas.width,i._canvas.height),i._pendingClick&&(i._shot.active||i._shot.fire(i._pendingClick.clientX,i._pendingClick.clientY),i._pendingClick=null),i._flash.active&&(i._flash.tick(h),i._flash.active&&i._flash.draw(n)),a=0,len=i._ships.length;len>a;a++)s=i._ships[a],s.active&&(i._warpAway&&(s.xVel*=1.05),s.tick(h),s.active&&(c=!0,s.draw(n)));if(i._shot.active&&(i._shot.tick(h),i._shot.active&&(c=!0,i._shot.draw(n))),i._shot.needsResolving){if(s=i._getIntersectingShip(i._shot.x,i._shot.y,1,1)){if(s.active=!1,r=i._explosions[i._explosions[0].active?1:0],r.start(s),s.jankiness?(i.jankyShips--,i._flash.flash(0,180,0),i._remainingEl.textContent=i.jankyShips):(i.normalShips--,i._innocentsKilled++,i._flash.flash(255,0,0),i._scoreTime+=1e4),!i.jankyShips||!i.normalShips)for(i._warpAway=!0,a=0,len=i._ships.length;len>a;a++)i._ships[a].loop=!1;console.log("Normal",i.normalShips,"Janky",i.jankyShips)}i._shot.needsResolving=!1}for(a=0,len=i._explosions.length;len>a;a++)r=i._explosions[a],r.active&&(r.tick(h),r.active&&(c=!0,r.draw(n)));i.jankyShips&&(i._scoreTime+=h,i._timeEl.textContent=ji.utils.formatTime(i._scoreTime)),c?requestAnimationFrame(t):i._end()}var e,i=this,n=i._context;requestAnimationFrame(function(i){e=i,requestAnimationFrame(t)})},e._onCanvasClick=function(t){this._pendingClick=t.touches?t.touches[0]:t,t.preventDefault()},ji.Level=t}(),function(){function t(){var t=this;this._el=document.querySelector(".intro"),this.active=!1,this._goodShips=[0,1,2,3].map(function(t){return ji.Ship.fromSprite(t)}),this._badShips=[0,1,2,3].map(function(t){return ji.Ship.fromSprite(t)}),this._goodCanvas=this._el.querySelector(".good-guys"),this._badCanvas=this._el.querySelector(".bad-guys"),this._el.querySelector(".begin").addEventListener("click",function(e){t.active&&(t.active=!1,t.hide().then(function(){t.trigger("gamestart")})),e.preventDefault()})}var e=t.prototype=Object.create(EventEmitter.prototype);e.show=function(){this._el.style.display="block";var t=this._el.parentNode,e=t.offsetWidth,i=t.offsetHeight,n=this._el.offsetWidth,o=this._el.offsetHeight,s=this;this._goodCanvas.width=this._goodCanvas.offsetWidth,this._goodCanvas.height=this._goodCanvas.offsetHeight,this._badCanvas.width=this._badCanvas.offsetWidth,this._badCanvas.height=this._badCanvas.offsetHeight;var r="translate("+(e/2-n/2)+"px, "+-o+"px)",a="translate("+(e/2-n/2)+"px, "+(i/2-o/2)+"px)";ji.utils.css(this._el,"transform",r),ji.utils.transition(this._el,{transform:a},1,"easeOutQuint").then(function(){s._animShips()}),this.active=!0},e._animShips=function(){function t(t){r-=t.width,t.x=r,t.y=n._goodCanvas.height/2-t.height/2,t.xMax=n._goodCanvas.width,t.xVel=100,r-=20}function e(t){var r,a=t-i;i=t,o.clearRect(0,0,n._goodCanvas.width,n._goodCanvas.height),s.clearRect(0,0,n._badCanvas.width,n._badCanvas.height);for(var h=n._goodShips.length;h--;)r=n._goodShips[h],r.tick(a),r.draw(o);for(h=n._badShips.length;h--;)r=n._badShips[h],r.tick(a),r.draw(s);n.active&&requestAnimationFrame(e)}var i,n=this,o=this._goodCanvas.getContext("2d"),s=this._badCanvas.getContext("2d"),r=0;this._goodShips.forEach(t),r=0,this._badShips.forEach(function(e){t(e),e.jankiness=.2}),requestAnimationFrame(function(t){i=t,requestAnimationFrame(e)})},e.hide=function(){var t=this,e=this._el.parentNode,i=e.offsetWidth,n=e.offsetHeight,o=this._el.offsetWidth;this._el.offsetHeight;var s="translate("+(i/2-o/2)+"px, "+(n+2)+"px)";return ji.utils.transition(this._el,{transform:s},.5,"easeInQuad").then(function(){t._el.style.display="none"})},ji.Intro=t}(),function(){function t(){var t=this;this._el=document.querySelector(".summary"),this._timeEl=this._el.querySelector(".time"),this._msgEl=this._el.querySelector(".msg"),this._el.querySelector(".restart").addEventListener("click",function(e){t.active&&(t.active=!1,t.hide().then(function(){t.trigger("restart")})),e.preventDefault()})}var e=t.prototype=Object.create(EventEmitter.prototype);e.show=function(t){this._el.style.display="block";var e=this._el.parentNode;this._timeEl.textContent=ji.utils.formatTime(t.time),this._msgEl.textContent=t.innocentsKilled>10?"Traitor! You destroyed more of your own fleet than the janky spies!":t.innocentsKilled>4?"Hmm, you took out quite a few of your own ships. You need to be better at spotting jank.":15e3>t.time?"Wow! That's better than the author of the game ever managed! You're a gifted individual!":2e4>t.time?"Brilliant, you're one of the best! You need to be a few seconds quicker to be the very best though.":3e4>t.time?"A damn fine effort captain! I'm sure you can shave another 5 seconds off that though.":4e4>t.time?"Pretty good, you've got an eye for this. Could be faster, but you're on the right track!":5e4>t.time?"You've got potential, a bit more training and you'll be ready for battle.":8e4>t.time?"Not bad for a first go. It is your first go right? Do it in half the time, then we're talking.":12e4>t.time?"Well, you know what you're doing, you're just not doing it very fast.":"I assume you fell asleep half way through?";var i=e.offsetWidth,n=e.offsetHeight,o=this._el.offsetWidth,s=this._el.offsetHeight;this._el.style.left=i/2-o/2+"px",this._el.style.top=n/2-s/2+"px",this._el.style.opacity="0",ji.utils.css(this._el,"transform","scale(2)"),ji.utils.transition(this._el,{transform:"scale(1)",opacity:"1"},.4,"easeOutQuint"),this.active=!0},e.hide=function(){var t=this;return ji.utils.transition(this._el,{transform:"scale(0.1)",opacity:"0"},.2,"easeInQuad").then(function(){t._el.style.display="none"})},ji.Summary=t}(),function(){var t=document.querySelector(".level-canvas");t.width=t.offsetWidth,t.height=t.offsetHeight;var e=document.querySelector(".container");e.style.width=t.width+"px",e.style.height=t.height+"px",Q.all([ji.Ship.load(),ji.Explosion.load()]).then(function(){var e=new ji.Intro,i=new ji.Summary;e.on("gamestart",function(){var e=new ji.Level(t);e.play(),e.on("end",function(t){i.show(t)})}),i.on("restart",function(){e.show()}),e.show()})}();
//@ sourceMappingURL=/static/js/all.js.map