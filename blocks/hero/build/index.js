(window.webpackJsonp_multiple_blocks_plugin=window.webpackJsonp_multiple_blocks_plugin||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var o,u,i=t[0],p=t[1],c=t[2],f=0,a=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&a.push(r[u][0]),r[u]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);for(s&&s(t);a.length;)a.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,i=1;i<n.length;i++){var p=n[i];0!==r[p]&&(o=!1)}o&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={0:0},l=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp_multiple_blocks_plugin=window.webpackJsonp_multiple_blocks_plugin||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=p;l.push([5,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(4),n(0)),l=n(1),u=n(2);Object(o.registerBlockType)("multiple-blocks-plugin/hero",{edit:function(){return Object(r.createElement)("p",Object(u.useBlockProps)(),Object(l.__)("Multiple Blocks Plugin – hello from the editor!","multiple-blocks-plugin"))},save:function(){return Object(r.createElement)("p",u.useBlockProps.save(),Object(l.__)("Multiple Blocks Plugin – hello from the saved content!","multiple-blocks-plugin"))}})}]);