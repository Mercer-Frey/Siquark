!function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=22)}([function(t,e,o){var n,s,r={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=n.apply(this,arguments)),s}),l=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,c=0,d=[],f=o(9);function u(t,e){for(var o=0;o<t.length;o++){var n=t[o],s=r[n.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](n.parts[i]);for(;i<n.parts.length;i++)s.parts.push(v(n.parts[i],e))}else{var l=[];for(i=0;i<n.parts.length;i++)l.push(v(n.parts[i],e));r[n.id]={id:n.id,refs:1,parts:l}}}}function p(t,e){for(var o=[],n={},s=0;s<t.length;s++){var r=t[s],i=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};n[i]?n[i].parts.push(l):o.push(n[i]={id:i,parts:[l]})}return o}function h(t,e){var o=l(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),d.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=l(t.insertAt.before,o);o.insertBefore(e,s)}}function $(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return w(e,t.attrs),h(t,e),e}function w(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function v(t,e){var o,n,s,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var i=c++;o=a||(a=m(e)),n=b.bind(null,o,i,!1),s=b.bind(null,o,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",w(e,t.attrs),h(t,e),e}(e),n=function(t,e,o){var n=o.css,s=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||r)&&(n=f(n));s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var i=new Blob([n],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,o,e),s=function(){$(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),s=function(){$(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=p(t,e);return u(o,e),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s];(l=r[i.id]).refs--,n.push(l)}t&&u(p(t,e),e);for(s=0;s<n.length;s++){var l;if(0===(l=n[s]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete r[l.id]}}}};var y,g=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function b(t,e,o,n){var s=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}},function(t,e){var o;o=jQuery,jQuery.scrollSpeed=function(t,e,n){var s,r,i,l=o(document),a=o(window),c=o("html, body"),d=n||"default",f=0,u=!1;if(window.navigator.msPointerEnabled)return!1;a.on("mousewheel DOMMouseScroll",function(o){var n=o.originalEvent.wheelDeltaY,p=o.originalEvent.detail;return s=l.height()>a.height(),r=l.width()>a.width(),u=!0,s&&(i=a.height(),(n<0||p>0)&&(f=f+i>=l.height()?f:f+=t),(n>0||p<0)&&(f=f<=0?0:f-=t),c.stop().animate({scrollTop:f},e,d,function(){u=!1})),r&&(i=a.width(),(n<0||p>0)&&(f=f+i>=l.width()?f:f+=t),(n>0||p<0)&&(f=f<=0?0:f-=t),c.stop().animate({scrollLeft:f},e,d,function(){u=!1})),!1}).on("scroll",function(){s&&!u&&(f=a.scrollTop()),r&&!u&&(f=a.scrollLeft())}).on("resize",function(){s&&!u&&(i=a.height()),r&&!u&&(i=a.width())})},jQuery.easing.default=function(t,e,o,n,s){return-n*((e=e/s-1)*e*e*e-1)+o}},function(t,e){document.onreadystatechange=function(){"complete"===document.readyState&&($(window).width()>768?$("body").css("overflow","hidden"):$(window).width()<=768&&$("body").css("overflow","scroll"),document.querySelector("#dot").style.transform="scale(1)",$(".padding > h1").css("top",$(window).height()/2),$(".padding > h1").css("left",$(window).width()/2),$(".preambule").css("top",$(window).height()/2),$(".preambule").css("left",$(window).width()/4),$(".navbar-toggle").addClass("puffIn"),setTimeout(function(){$(".hello-part:nth-child(1) span:nth-child(1)").addClass("vanishIn")},700),setTimeout(function(){$(".hello-part:nth-child(1) span:nth-child(2)").addClass("vanishIn")},200),setTimeout(function(){$(".hello-part:nth-child(1) span:nth-child(3)").addClass("vanishIn")},500),setTimeout(function(){$(".hello-part:nth-child(2) span:nth-child(1)").addClass("vanishIn")},400),setTimeout(function(){$(".hello-part:nth-child(2) span:nth-child(2)").addClass("vanishIn")},600),setTimeout(function(){$(".hello-part:nth-child(2) span:nth-child(3)").addClass("vanishIn")},300),setTimeout(function(){$(".page-color").css("width","50%"),$(".top-line").css("transform","scaleY(1)"),$(".bottom-line").css("transform","scaleY(1)"),$(".left-line").css("transform","scaleX(1)"),$(".right-line").css("transform","scaleX(1)"),$(".hello-scrolldown").css("top",$(window).height()-120),$(".hello-scrolldown").css("left",$(window).width()/2-30)},300))},$(function(){var t=$("body").offset().top;$(document).scroll(function(){t-$(window).scrollTop()<-200?($(".page-color").css("width","100%"),$("#hello-h1").css("left","100%"),$(".hello-scrolldown").css("opacity","0"),$(".hello-scrolldown").css("top",$(window).height()),$(".scrolldown").css("opacity","1"),$(".scrolldown").css("top",$(window).height()-120),$(".scrolltop").css("top",$(window).height()-110),$(".scrolltop").css("left",$(window).width()-200),$(".scrolltop").css("opacity","0"),$(".mskd").css("opacity","1"),$(".preambule p > strong").css("margin-bottom","0"),$(".preambule p > strong").css("opacity","1"),$(".preambule p > span").css("margin-bottom","0"),$(".preambule p > span").css("opacity","1"),$(".preambule span > i").css("width","50px"),t-$(window).scrollTop()<-700&&($(".scrolltop").css("opacity","1"),$(".scrolltop").css("top",$(window).height()-200))):t-$(window).scrollTop()>=-400&&($(".page-color").css("width","50%"),$("#hello-h1").css("left",$(window).width()/2),$(".hello-scrolldown").css("opacity","1"),$(".hello-scrolldown").css("top",$(window).height()-120),$(".scrolldown").css("opacity","0"),$(".scrolldown").css("top",$(window).height()),$(".mskd").css("opacity","0"),$(".preambule p > strong").css("margin-bottom","-50px"),$(".preambule p > strong").css("opacity","0"),$(".preambule p > span").css("margin-bottom","-50px"),$(".preambule p > span").css("opacity","0"),$(".preambule span > i").css("width","0")),t-$(window).scrollTop()+1.75*$(window).height()<0?$("#hello-h1, .preambule").css("display","none"):t-$(window).scrollTop()+1.75*$(window).height()>0&&$("#hello-h1, .preambule").css("display","block")})})},function(t,e){$(function(){$("#menu").mouseover(function(){$("#left-line").css("width","124px")}),$("#menu").mouseout(function(){$("#left-line").css("width","62px")}),$("#menu").click(function(t){t.preventDefault(),$("body").toggleClass("show-Menu"),$("#menu > .txt").toggle(""),$(".icon").addClass("menu-cross"),$(".left-line").addClass("left-active"),$("body").addClass("hide-overflow"),$(".main-color-menu").css("background-color","rgba(255, 88, 81, .9)"),$(".main-color-menu").css("transform","scaleX(1)"),$(".scrolltop, .scrolldown").addClass("hide-block"),$("body").hasClass("show-Menu")?($("#menu-content").css("transform","scaleX(1)"),$("#menu-content").css("opacity","1"),$(".list-socials").css("padding","0 60.5px 0 22.5px"),$(".top-line").css("padding","56.5px 124px 18.5px 15%"),$(".bottom-line").css("height","100px"),$(".nav-item").css("transform","scaleY(1)"),$(".nav-item").css("opacity","1"),$(".menu-container > .briefLink, .contact").css("transform","scaleX(1)"),$(".menu-container > .briefLink, .contact").css("opacity","1"),$("#list-lang-menu, #list-socials-menu").css("transform","scaleX(1)"),$("#list-lang-menu, #list-socials-menu").css("opacity","1"),$(".footer-wrapper").css("opacity","0")):($(".nav-item, .menu-container > .contact").css("transform","scaleY(0)"),$(".nav-item, .menu-container > .contact").css("opacity","0"),$(".menu-container > .briefLink").css("transform","scaleX(0)"),$(".menu-container > .briefLink").css("opacity","0"),$("#list-lang-menu, #list-socials-menu").css("transform","scaleX(0)"),$("#list-lang-menu, #list-socials-menu").css("opacity","0"),setTimeout(function(){$(".icon").removeClass("menu-cross"),$(".left-line").removeClass("left-active"),$("body").removeClass("hide-overflow"),$(".main-color-menu").css("background-color","transparent"),$(".main-color-menu").css("transform","scaleX(0)"),$(".scrolltop, .scrolldown").removeClass("hide-block"),$("#menu-content").css("transform","scaleX(0)"),$("#menu-content").css("opacity","0"),$(".list-socials").css("padding","0 22.5px"),$(".top-line").css("padding","18.5px 62px"),$(".bottom-line").css("height","62px"),$(".footer-wrapper").css("opacity","1")},700))})})},function(t,e){$(function(){$(window).scroll(function(){var t=$(this).scrollTop();$(".video-container > img").css({transform:"scale(1.2) translate(0%, "+(t/60-30)+"%)"}),$(".project-visual > img").css({transform:"translate(0%, "+(t/50-130)+"%)"}),$(".skills-container").css({transform:"translate(0%, "+(35+-t/80)+"%)"}),$(".visuel-container").css({transform:"translate(0%, "+(t/90-35)+"%)"}),$(".visuel-container > .animated > img").css({transform:"translate(0%, "+(t/80-90)+"%)"}),$(".h2-wrapper-crearivity").css({transform:"translate(0%, "+(t/40-50)+"%)"}),$(".h2-wrapper-digital").css({transform:"translate(0%, "+(t/40-50)+"%)"}),$(".h2-wrapper-ideas").css({transform:"translate(0%, "+(t/20-198)+"%)"})})})},function(t,e){$(function(){var t=$(window).height()+62,e=$("#h2Creativity").offset().top-t,o=$("#h2Digital").offset().top-t,n=$("#h2Ideas").offset().top-t,s=$("#skills").offset().top-t,r=$("#projectItem").offset().top-t,i=$("#visuelIdeas").offset().top-t;$(window).scroll(function(){e-$(window).scrollTop()<=150&&($("#h2Creativity").addClass("vanishIn"),$("#h2Creativity").css("opacity","1")),o-$(window).scrollTop()<=150&&($("#h2Digital").addClass("vanishIn"),$("#h2Digital").css("opacity","1")),n-$(window).scrollTop()<=150&&($("#h2Ideas").addClass("vanishIn"),$("#h2Ideas").css("opacity","1")),s-$(window).scrollTop()<=150&&($("#skills").addClass("slideDownReturn"),$("#skills").css("opacity","1")),r-$(window).scrollTop()<=150&&($("#projectItem").addClass("slideDownReturn"),$("#projectItem").css("opacity","1")),i-$(window).scrollTop()<=50&&($("#visuelIdeas").addClass("slideDownReturn"),$("#visuelIdeas").css("opacity","1"))})})},function(t,e){$(window).resize(function(){$(".padding > h1").css("top",$(window).height()/2),$(".padding > h1").css("left",$(window).width()/2),$(".hello-scrolldown").css("top",$(window).height()-120),$(".hello-scrolldown").css("left",$(window).width()/2-30),$(".preambule").css("top",$(window).height()/2),$(".preambule").css("left",$(window).width()/4),$(window).width()>768?$("body").css("overflow","hidden"):$(window).width()<=768&&$("body").css("overflow","scroll")}),$(".scrolltop").click(function(t){return t.preventDefault(),$("html, body").animate({scrollTop:0},4e3),!1}),$(function(){jQuery.scrollSpeed(75,1e3)})},function(t,e,o){var n=o(8);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(s=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},function(t,e,o){var n=o(11);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e,o){var n=o(13);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e,o){var n=o(15);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e,o){var n=o(17);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e,o){var n=o(19);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e,o){var n=o(21);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,o){},function(t,e,o){"use strict";o.r(e);o(1),o(2),o(3),o(4),o(5),o(6),o(7),o(10),o(12),o(14),o(16),o(18),o(20)}]);