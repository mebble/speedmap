parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({4:[function(require,module,exports) {
var n=document.querySelector(".table");if(navigator.geolocation){var o={lat:null,long:null,downlink:null};navigator.connection.onchange=function(n){console.log("Network change!"),o.downlink=n.target.downlink,e(null,o)};var t=navigator.geolocation.watchPosition(function(n){console.log("Location change!"),o.lat=n.coords.latitude,o.long=n.coords.longitude,e(null,o)},function(n){var o=$("tr:last").data("error-type");o&&o===n.code||e(n)},{timeout:5e3})}else alert("Geolocation not supported by your browser");function e(o,t){var e=t||{},r=e.lat,a=e.long,c=e.downlink;$(n).append(l(o,r,a,c)),$(document).scrollTop($(document).height())}function l(n,o,t,e){return n?$('\n            <tr>\n                <td colspan="3">'+n+"</td>\n            </tr>\n        ").addClass("error-entry").data("error-type",n.code):$("\n            <tr>\n                <td>"+o+"</td>\n                <td>"+t+"</td>\n                <td>"+e+"</td>\n            </tr>\n        ")}
},{}]},{},[4], null)
//# sourceMappingURL=/public.057aa42b.map