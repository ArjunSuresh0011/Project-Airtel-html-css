/** Script with sessionId refresh logic: 
    - 30 min of inactivity(no pixel calls)
    - date changes
    - any of the url param(utm_campaign, utm_source, utm_medium) changes, not internal campaign change.
**/

var ClickStream=function(){"use strict";for(var e={browserHeight:"bh",browserWidth:"bw",url:"url",visitorId:"vid",sessionId:"sid",navigationstartTS:"nt",domContentLoadTS:"dt",pageLoadTS:"pt",ctaTS:"ct",timezone:"tz",networkSpeed:"ns",utm_source:"us",utm_campaign:"uc",utm_medium:"um",language:"lg",cookieSupport:"cs",colorDepth:"cd",corelationId:"cid",referrer:"r",userType:"ut",internalCampaignid:"iCamId",campaignid:"camId",previousPage:"ppn",currentPage:"cpn",isAppUser:"isau"},t=0;t<=250;t++)e["eVar"+t]="e"+t;for(var n=0;n<=100;n++)e["prop"+n]="p"+n;function r(e){if(!e)return null;try{var t=sessionStorage.getItem(e);return JSON.parse(t)}catch(e){return null}}function i(e,t){if(!e||!t)return null;try{t=JSON.stringify(t),sessionStorage.setItem(e,t)}catch(e){return null}}function o(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n);var i="; expires="+r.toGMTString()}else i="";document.cookie=e+"="+t+i+"; path=/"}function a(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}function u(e){var t=void 0,n=l=function(e){var t=new RegExp(e+"=([^;]+)").exec(document.cookie);return null!=t?unescape(t[1]):null}(e);if("cs_vid"===e)u=l?"REPEAT":(l=a(),"NEW"),n=l,t=31536e6;else if("cs_sid"===e){try{var r,i,u,d,s,m,p,l,g=c("utm_source"),f=c("utm_campaign"),v=c("utm_medium"),w=c("icid");n=n?(r=!1,u=(i=JSON.parse(l)).userType,l=i.uuid,d=i.urlParam,s=i.date,m=d,p=(new Date).getDate(),s&&s<p&&(r=!0),m&&(m.utm_campaign==f&&m.utm_source==g&&m.utm_medium==v||w||(r=!0,d={utm_campaign:f,utm_source:g,utm_medium:v})),{uuid:l=r?a():l,userType:u,date:p,urlParam:d}):{uuid:l=a(),userType:u,date:(new Date).getDate(),urlParam:{utm_campaign:f,utm_source:g,utm_medium:v}},n=JSON.stringify(n)}catch(e){u=u,l=l}t=18e5}return o(e,n,t),l}function c(e){return new URL(window.location.href).searchParams.get(e)}var d=null,s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,m=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,p=(u("cs_vid"),u("cs_sid"),window.performance.timing.navigationStart,window.performance.timing.domContentLoadedEventEnd,window.performance.timing.loadEventEnd,(new Date).getTimezoneOffset()),l=navigator.connection?navigator.connection.effectiveType:"",g=c("utm_source")||"",f=c("utm_campaign")||"",v=c("utm_medium")||"",w=window.navigator.language,h=window.navigator.cookieEnabled,x=window.screen.colorDepth,y=null,T=c("icid")||"",E=c("cid")||"",_="undefined"!=typeof MyAirtelAppReact;function S(e,t,n){e[t]=e[t]||n}function D(t){var n=function(e){var t={browserHeight:s,browserWidth:m,url:encodeURIComponent(location.href),visitorId:u("cs_vid"),sessionId:u("cs_sid"),navigationstartTS:window.performance.timing.navigationStart,domContentLoadTS:window.performance.timing.domContentLoadedEventEnd,pageLoadTS:window.performance.timing.loadEventEnd,timezone:p,networkSpeed:l,utm_source:g,utm_campaign:f,utm_medium:v,language:w,cookieSupport:h,colorDepth:x,corelationId:y,userType:d,referrer:encodeURIComponent(document.referrer),internalCampaignid:T,campaignid:E,isAppUser:_},n=e.eVar0||"";t.currentPage="",t.previousPage="";var o=function(e){var t,n=void 0,o=void 0,a=r("aa-pi");a?(n=a.cpn,o=a.ppn):n=o="",t=!e||n&&e===n?(e=n,o):n;var u={cpn:e,ppn:t};return i("aa-pi",u),u}(n);return o&&(t.currentPage=o.cpn,t.previousPage=o.ppn),t}(t);if(null!=t)for(var o in t)n[o]=t[o];!function(e,t){var n=e.headers||{},r=e.body,i=e.method||(r?"POST":"GET"),o=!1,a=function(e){return e&&window.XDomainRequest&&!/MSIE 1/.test(navigator.userAgent)?new XDomainRequest:window.XMLHttpRequest?new XMLHttpRequest:void 0}(e.cors);function u(e,n){return function(){o||(t(void 0===a.status?e:a.status,0===a.status?"Error":a.response||a.responseText||n,a),o=!0)}}a.open(i,e.url,!0);var c=a.onload=u(200);a.onreadystatechange=function(){4===a.readyState&&c()},a.onerror=u(null,"Error"),a.ontimeout=u(null,"Timeout"),a.onabort=u(null,"Abort"),r&&(S(n,"X-Requested-With","XMLHttpRequest"),window.FormData&&r instanceof window.FormData||S(n,"Content-Type","application/x-www-form-urlencoded"));for(var d,s=0,m=b.length;s<m;s++)e[d=b[s]]&&(a[d]=e[d]);for(var p in n)a.setRequestHeader(p,n[p]);a.send(r)}({method:"GET",url:function(t,n){var r="";for(var i in n)n.hasOwnProperty(i)&&(r+=e[i]+"="+n[i]+"&");return encodeURI("https://digi-api.airtel.in/analytics/pixel?"+r)}(0,n)},function(e,t){})}window.onload=function(){o("cs_cid",y=a())};var b=["responseType","withCredentials","timeout","onprogress"],C=[];document.addEventListener("click",function(e){var t=function e(t){if(!t)return null;var n=null;try{return(n=t.getAttribute("data-analytics")||t.dataset&&t.dataset.analytics)||e(t.parentElement)}catch(e){console.log("error occurred in finding attribute: ",e)}return n}((e=e||window.event).target);if(t)try{t=JSON.parse(t),R.trackEvent(t)}catch(e){}},!1);var I=void 0,R={trackEvent:function(e){if(e){var t=void 0;try{var n=t=r("aa-"+(I=e.prop0||I||"").toLowerCase())||{};for(var o in e)n[o]=e[o];for(var a in n)/^evar/i.test(a)&&delete n[a];i("aa-"+I.toLowerCase(),n)}catch(e){t={}}for(var u in e)t[u]=e[u];t.ctaTS=(new Date).getTime(),C.push(t),function e(){0<window.performance.timing.loadEventEnd?(C.forEach(function(e){try{D(e)}catch(e){console.log("fireEvent error: "+e)}}),C.length=0):setTimeout(function(){e()},300)}()}}};return R}();
