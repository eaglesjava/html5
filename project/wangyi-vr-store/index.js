/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/ 		};

        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
/************************************************************************/
/******/ ({

    /***/ 0:
    /***/ function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(1);


        /***/ },

    /***/ 1:
    /***/ function(module, exports, __webpack_require__) {

        __webpack_require__(2),__webpack_require__(57),__webpack_require__(58),__webpack_require__(59),__webpack_require__(60);

        /***/ },

    /***/ 2:
    /***/ function(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/ },

    /***/ 57:
    /***/ function(module, exports) {

        !function(e,n){var t=e.documentElement,i=navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),a=i?Math.min(n.devicePixelRatio,3):1,a=window.top===window.self?a:1,o=1/a,d="orientationchange"in window?"orientationchange":"resize";t.dataset.dpr=a;var c=e.createElement("meta");c.name="viewport",c.content="initial-scale="+o+",maximum-scale="+o+", minimum-scale="+o+",user-scalable=no",t.firstElementChild.appendChild(c);var r=function(){var e=t.clientWidth;e/a>750&&(e=750*a),t.style.fontSize=100*(e/750)+"px"};r(),e.addEventListener&&n.addEventListener(d,r,!1)}(document,window);

        /***/ },

    /***/ 58:
    /***/ function(module, exports) {

        !function(t){function e(t){t.preventDefault()}function n(t,e,n){return 0>t?n?e-1:0:t>=e?n?0:e-1:t}function o(t,e,n){var o="0px",r="0px";"v"===e?r=n+"px":o=n+"px",t.style.cssText+=";-webkit-transform : translate3d("+o+", "+r+", 0px);transform : translate3d("+o+", "+r+", 0px);"}function r(t){var e=t?t:{};for(var n in i)e.hasOwnProperty(n)||(e[n]=i[n]);var o=this;o.curIndex=-1,o.o=e,o.startY=0,o.movingFlag=!1,o.ele.classList.add("fullPage-wp"),o.parentEle=o.ele.parentNode;var r=e.page;0==r.indexOf(".")&&(r=r.substring(1,r.length)),o.pageEles=o.ele.getElementsByClassName(r);for(var a=0;a<o.pageEles.length;a++){var s=o.pageEles[a];s.classList.add("fullPage-page"),s.classList.add("fullPage-dir-"+e.dir)}o.pagesLength=o.pageEles.length,o.update(),o.initEvent(),o.start()}function a(t,e){this.ele=t,r.call(this,e)}var i={page:".page",start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(t){},beforeChange:function(t){},afterChange:function(t){},orientationchange:function(t){}};a.prototype.update=function(){if("h"===this.o.dir){this.width=this.parentEle.offsetWidth;for(var t=0;t<this.pageEles.length;t++){var e=this.pageEles[t];e.style.width=this.width+"px"}this.ele.style.width=this.width*this.pagesLength+"px"}this.height=this.parentEle.offsetHeight;for(var t=0;t<this.pageEles.length;t++){var e=this.pageEles[t];e.style.height=this.height+"px"}this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},a.prototype.initEvent=function(){var e=this,n=e.ele;n.addEventListener("touchstart",function(t){return e.status?e.movingFlag?0:(e.startX=t.targetTouches[0].pageX,void(e.startY=t.targetTouches[0].pageY)):1}),n.addEventListener("touchend",function(t){if(!e.status)return 1;if(e.movingFlag)return 0;var n="v"===e.o.dir?(t.changedTouches[0].pageY-e.startY)/e.height:(t.changedTouches[0].pageX-e.startX)/e.width,o=n>e.o.der||n<-e.o.der?n>0?-1:1:0;e.moveTo(e.curIndex+o,!0)}),e.o.drag&&n.addEventListener("touchmove",function(t){if(!e.status)return 1;if(e.movingFlag)return e.startX=t.targetTouches[0].pageX,e.startY=t.targetTouches[0].pageY,0;var r=t.changedTouches[0].pageY-e.startY;(0==e.curIndex&&r>0||e.curIndex===e.pagesLength-1&&0>r)&&(r/=2);var a=t.changedTouches[0].pageX-e.startX;(0==e.curIndex&&a>0||e.curIndex===e.pagesLength-1&&0>a)&&(a/=2);var i="v"===e.o.dir?-e.curIndex*e.height+r:-e.curIndex*e.width+a;n.classList.remove("anim"),o(n,e.o.dir,i)}),t.addEventListener("orientationchange",function(){180!==t.orientation&&0!==t.orientation||e.o.orientationchange("portrait"),90!==t.orientation&&-90!==t.orientation||e.o.orientationchange("landscape")},!1),t.addEventListener("resize",function(){e.update()},!1)},a.prototype.holdTouch=function(){document.addEventListener("touchmove",e)},a.prototype.unholdTouch=function(){document.removeEventListener("touchmove",e)},a.prototype.start=function(){this.status=1,this.holdTouch()},a.prototype.stop=function(){this.status=0,this.unholdTouch()},a.prototype.getCurIndex=function(){return this.curIndex},a.prototype.moveTo=function(e,r){var a=this,i=a.ele,s=a.curIndex;if(e=n(e,a.pagesLength,a.o.loop),r?i.classList.add("anim"):i.classList.remove("anim"),e!==s){var h=a.o.beforeChange({next:e,cur:s});if(h===!1)return 1}a.movingFlag=!0,a.curIndex=e,o(i,a.o.dir,-e*("v"===a.o.dir?a.height:a.width)),e!==s&&a.o.change({prev:s,cur:e}),t.setTimeout(function(){if(a.movingFlag=!1,e!==s){a.o.afterChange({prev:s,cur:e});for(var t=0;t<a.pageEles.length;t++){var n=a.pageEles[t];t===e?n.classList.add("cur"):n.classList.remove("cur")}}},a.o.duration)},a.prototype.movePrev=function(t){this.moveTo(this.curIndex-1,t)},a.prototype.moveNext=function(t){this.moveTo(this.curIndex+1,t)},Element.prototype.fullpage=function(t){return new a(this,t)}}(window);

        /***/ },

    /***/ 59:
    /***/ function(module, exports) {

        !function(){function e(e,o){e=e||window.location.search,o=o||window.location.hash;var t=function(e,o){if(e){var t={};return e.replace(o,function(e,o,n,r){t[o]=r}),t}};return{search:t(e,new RegExp("([^?=&]+)(=([^&]*))?","g"))||{},hash:t(o,new RegExp("([^#=&]+)(=([^&]*))?","g"))||{}}}window.localParam=e;var o=e().search,t=function(){var e=document.querySelector(".result"+o.result);e.style.display="block",e.classList.add("result-animation"),setTimeout(function(){document.querySelector(".share-wrap").classList.add("share")},7e3),document.querySelector(".short-orange-btn").addEventListener("click",function(){return d?void(window.location.href="http://flv.bn.netease.com/vr/vrplayer/WebVR_01.html?vrmode=0"):void document.querySelector(".choose-mode").classList.add("show-mode")})};o.result?(document.querySelector(".wrapper").style["z-index"]=0,window.orientation?(document.querySelector(".portrait-wrap").style.display="block",setTimeout(function(){document.querySelector(".portrait-wrap").style.display="none",t()},2e3)):t()):document.querySelector(".loading-bac").style.display="block",setTimeout(function(){document.querySelector(".loading-bac").classList.add("hide-loading")},2200);var n=navigator.userAgent,r=navigator.userAgent.toLowerCase(),a=n.match(/android/gi),c=r.indexOf("android"),i=r.substr(c+8,3),l=(n.match(/iphone/gi),r.indexOf("iphone os")),d=(r.substr(l+10,3).replace(/_/g,"."),navigator.userAgent.match(/NewsApp/gi));document.querySelector(".wp-inner").fullpage({afterChange:function(e){if(e.cur){var o=e.cur+1,t=document.querySelector(".page"+o);t.classList.add("fullpage-animation"),3==e.cur&&setTimeout(function(){var e=!!window.CanvasRenderingContext2D,o=document.createElement("canvas"),t=!(!window.WebGLRenderingContext||!o.getContext("webgl")&&!o.getContext("experimental-webgl")),n=i>5;if(console.log(e),console.log(t),console.log(n),console.log(i),!(e&&t&&n))return void(window.location.href="http://news.163.com/special/echo_of_radiation/");var r=!(!window.google||!window.chrome);return a&&n&&!r&&alert("请使用chrome浏览器体验"),d?void(window.location.href="http://flv.bn.netease.com/vr/vrplayer/WebVR_01.html?vrmode=0"):void document.querySelector(".choose-mode").classList.add("show-mode")},3e3)}},beforeChange:function(e){if(-1!=e.cur){var o=e.cur+1,t=document.querySelector(".page"+o);t.classList.remove("fullpage-animation")}}});var s=document.querySelector(".audio-btn"),u=document.querySelector(".audio-voice"),m=s.classList;s.addEventListener("touchstart",function(){m.add("active")}),s.addEventListener("touchend",function(){m.remove("active"),m.contains("on")?(m.remove("on"),m.add("off"),u.pause()):(m.remove("off"),m.add("on"),u.play())});var v=document.querySelector(".glass-learn");document.querySelector(".vr-glass").addEventListener("click",function(){v.style.display="block",gotoWebvr=setTimeout(function(){window.location.href="http://flv.bn.netease.com/vr/vrplayer/WebVR_01.html?vrmode=1"},2500)}),document.querySelector(".glass-learn .back-icon").addEventListener("click",function(){v.style.display="none",clearTimeout(gotoWebvr)})}();

        /***/ },

    /***/ 60:
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;!function(){function e(e,n){var t=document,i=t.head||t.getElementsByTagName("head")[0]||t.documentElement,t=t.createElement("script");t.onload=n,t.onerror=function(){},t.async=!0,t.src=e[0],i.appendChild(t)}function n(e){e.WXconfig&&o([a],function(n){n.config||(n=window.wx);var t=e.WXconfig;n.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"]}),n.error(function(e){}),n.ready(function(){var i={title:e.title,desc:e.summary,link:e.url,imgUrl:e.pic,type:"",dataUrl:"",success:function(){},cancel:function(){}};n.onMenuShareAppMessage(i),n.onMenuShareQQ(i),n.onMenuShareQZone(i),t.swapTitleInWX?n.onMenuShareTimeline({title:e.summary,desc:e.title,link:e.url,imgUrl:e.pic,type:"",dataUrl:"",success:function(){},cancel:function(){}}):n.onMenuShareTimeline(i)})})}function t(e){var n={title:e.title,desc:e.summary,share_url:e.url,image_url:e.pic};o([s],function(){try{window.mqq.data.setShareInfo(n)}catch(e){}})}function i(e){o([c],function(){if(QZAppExternal&&QZAppExternal.setShare){for(var n=[],t=[],i=[],r=[],o=0;5>o;o++)n.push(e.pic),t.push(e.title),i.push(e.summary),r.push(e.url);QZAppExternal.setShare(function(e){},{type:"share",image:n,title:t,summary:i,shareURL:r})}})}function r(e){var r=navigator.userAgent,o=r.match(/MicroMessenger\/([\d\.]+)/),a=r.match(/QQ\/([\d\.]+)/),r=-1!==r.indexOf("Qzone/");o&&n(e),a&&t(e),r&&i(e)}var o,a="http://img5.cache.netease.com/utf8/3g/share/jweixin-1.0.0.js",s="http://img5.cache.netease.com/utf8/3g/share/qqapi.js",c="http://img5.cache.netease.com/utf8/3g/share/qzonejsbridge.js";"function"=="function"&&(__webpack_require__(61).cmd||__webpack_require__(62))?(__webpack_require__(61).cmd?o=seajs.use:__webpack_require__(62)&&(o=window.require),!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):(o=e,window.setShareInfo=r)}(),function(){var e,n,t,i,r,o,a,s,c,u,d,l,p,m;!function(){!function(e,n){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return n(e)}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=n:e.echo=n(e)}(this,function(e){"use strict";var n,t,i,r,o,a,s,c,u,d;r={},n=function(){},s=void 0,c=void 0,i=void 0,d=void 0,u=void 0,a=function(e){return null===e.offsetParent},o=function(e,n){var t;return a(e)?!1:(t=e.getBoundingClientRect(),t.right>=n.l&&t.bottom>=n.t&&t.left<=n.r&&t.top<=n.b)},t=function(){!d&&c||(clearTimeout(c),c=setTimeout(function(){r.render(),c=null},i))}})}(),m=function(e,n){var t,i;t=void 0,i=void 0,i=[];for(t in e)e.hasOwnProperty(t)&&"undefined"!=typeof n[t]?i.push(n[t]=e[t]):i.push(void 0);return i},l=function(e,n){var t,i;i=[];for(t in n)n.hasOwnProperty(t)&&null!=n[t]&&i.push(t.toString()+"="+encodeURIComponent(n[t].toString()||""));window.open(p[e]+i.join("&"))},t=function(){var e;return e=window.location.origin+location.pathname},c={lofter:{from:"news",title:"",content:"",sourceUrl:"",charset:"utf8"},wb:{appkey:"603437721",url:"",title:"",pic:""},renren:{resourceUrl:"",title:"",description:"",pic:""},qq:{url:"",title:"",summary:"",pics:""},yx:{type:"webpage",url:"",title:"",desc:"",appkey:"yxb7d5da84ca9642ab97d73cd6301664ad"},youdao:{title:"",summary:""},wx:{img_url:"",link:"",desc:"",title:""}},p={lofter:"http://www.lofter.com/sharetext/?",yx:"http://open.yixin.im/share?",wb:"http://service.weibo.com/share/share.php?",qq:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?",renren:"http://widget.renren.com/dialog/share?",youdao:"http://note.youdao.com/memory?"},a=navigator.userAgent.match(/micromessenger/gi),o=navigator.userAgent.match(/weibo/gi),s=navigator.userAgent.match(/yixin/gi),i=navigator.userAgent.match(/qq/gi)&&!navigator.userAgent.match(/qqbrowser/gi),r=navigator.userAgent.match(/qzone/gi),isNewsapp=navigator.userAgent.match(/NewsApp/gi),u=window.localParam().search,n=u.docid,document.querySelector("body").addEventListener("click",function(e){return e.target.classList.contains("item")?void 0:document.querySelector(".wx-share").style.display="none"}),d=document.querySelector(".share-icon"),e={title:"网易VR故事|“不要惊慌，没有辐射！”",body:"VR还原切尔诺贝利核事故瞬间。",imgurl:"http://img4.cache.netease.com/m/common/chernoblyVR/img/share-icon.jpg"},e.body=e.body.replace(/<.*?>/g,"").replace(/(^\s*)/g,"").substr(0,30)||e.title,window.setShareData=function(n,t,i){window.setShareData=null,e.title=n,t=t||n,e.body=t.replace(/<.*?>/g,"").replace(/(^\s*)/g,"").substr(0,30)||e.title,e.imgurl=i},d.addEventListener("click",function(u){var d,p,h,f,g,w,y;u.preventDefault(),g=u.target;var v=document.querySelector(".wx-share");if(w=g.dataset.type,o&&("wx"===w||"wb"===w))return void(v.style.display="block");if(a&&"wx"===w)return void(v.style.display="block");if(i||r&&"wb"!==w)return void(v.style.display="block");if(s&&"yx"===w)return void(v.style.display="block");if(isNewsapp){if("yx"===w)return void(location.href="share://206");if("wx"===w)return void(location.href="share://209");if("wb"===w)return void(location.href="share://201")}return p=e.body,h=e.title,d=e.imgurl||"http://img4.cache.netease.com/m/common/chernoblyVR/img/share-icon.jpg",g.dataset.type&&m({title:h,userdesc:p,description:p,desc:p,info:p,text:p,content:p,summary:p,pic:d,pics:d},c[w]),y=t(),c.lofter.sourceUrl=y,c.wb.url=y,c.renren.resourceUrl=y,c.qq.url=y,c.yx.url=y,c.youdao.url=y,c.wx.url=y,"wb"===w&&(c.wb.title="分享网易新闻：「"+h+"」 @网易新闻客户端"),f=window.localParam().search.w||1,"function"==typeof neteaseTracker&&neteaseTracker(!1,"http://sps.163.com/func/?func=sharedone&spss=newsapp&spst=0&docid="+n+"&spsw="+f+"&spsf="+w,"","sps"),l(w,c[w]),!1}),function(){var e,i,r={title:"网易VR故事|“不要惊慌，没有辐射！”",body:"VR还原切尔诺贝利核事故瞬间。",imgurl:"http://img4.cache.netease.com/m/common/chernoblyVR/img/share-icon.jpg"};i=t(),document.addEventListener("WeixinJSBridgeReady",function(){return window.WeixinJSBridge.on("menu:share:appmessage",function(t){return window.WeixinJSBridge.invoke("sendAppMessage",{img_url:r.imgurl||e,link:i,desc:r.body,title:r.title},function(){var e,t;e=NTES.localParam().search.s||"newsapp",t=NTES.localParam().search.w||1,"function"==typeof neteaseTracker&&neteaseTracker(!1,"http://sps.163.com/func/?func=sharedone&spst=0&docid="+n+"&spsw="+t+"&spss="+e+"&spsf=wx","","sps")})}),window.WeixinJSBridge.on("menu:share:timeline",function(t){return window.WeixinJSBridge.invoke("shareTimeline",{img_url:r.imgurl||e,img_width:"200",img_height:"200",link:i,desc:r.body,title:r.title},function(){var e,t;return e=NTES.localParam().search.s||"newsapp",t=NTES.localParam().search.w||1,"function"==typeof neteaseTracker?neteaseTracker(!1,"http://sps.163.com/func/?func=sharedone&spst=0&docid="+n+"&spsw="+t+"&spss="+e+"&spsf=wx","","sps"):void 0})})}),document.addEventListener("YixinJSBridgeReady",function(){return window.YixinJSBridge.on("menu:share:appmessage",function(e){window.YixinJSBridge.invoke("sendAppMessage",{img_url:"http://img4.cache.netease.com/m/common/chernoblyVR/img/share-icon.jpg",link:i,desc:r.body,title:r.title},function(){var e,t;e=window.localParam().search.s||"newsapp",t=window.localParam().search.w||1,"function"==typeof neteaseTracker&&neteaseTracker(!1,"http://sps.163.com/func/?func=sharedone&spst=0&docid="+n+"&spsw="+t+"&spss="+e+"&spsf=wx","","sps")})})})}()}();

        /***/ },

    /***/ 61:
    /***/ function(module, exports) {

        module.exports = function() { throw new Error("define cannot be used indirect"); };


        /***/ },

    /***/ 62:
    /***/ function(module, exports) {

        /* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

            /* WEBPACK VAR INJECTION */}.call(exports, {}))

        /***/ }

    /******/ });