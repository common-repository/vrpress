!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({86:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n="/Users/kelvin/Local Sites/multisite/app/public/wp-content/plugins/VRPress/assets/src/js/block/vr/edit.js";const{InspectorControls:l}=wp.blockEditor,{PanelBody:s,SelectControl:a,RangeControl:o}=wp.components,{useEffect:i,useState:c}=wp.element,{__:u}=wp.i18n;var m=({attributes:e,setAttributes:t})=>{const{postID:r,width:m,height:p}=e,[_,d]=c([]);return i(()=>{fetch(ubc_vrpress_editor.site_address+"/wp-json/wp/v2/ubcvrpress/").then(e=>e.json()).then(e=>{d(e)},e=>{alert("An unexcepted error occured, please contact site administrator.")})},[]),React.createElement(React.Fragment,null,function(){const e=_.filter(e=>e.id===r),t=1===e.length?e[0].title.rendered:"";return React.createElement("div",{className:"ubc-vrpress-default-view",__self:this,__source:{fileName:n,lineNumber:38,columnNumber:4}},React.createElement("div",{__self:this,__source:{fileName:n,lineNumber:39,columnNumber:5}},"VRPress Instance selected : ",React.createElement("strong",{style:{paddingLeft:"5px"},__self:this,__source:{fileName:n,lineNumber:39,columnNumber:38}},-1===r?"None":t)))}(),React.createElement(l,{__self:void 0,__source:{fileName:n,lineNumber:48,columnNumber:4}},React.createElement(s,{title:"Settings",initialOpen:!0,__self:void 0,__source:{fileName:n,lineNumber:49,columnNumber:5}},React.createElement(a,{label:u("Select VRPress Instance:"),value:r,onChange:e=>{t({postID:parseInt(e)})},options:[{value:-1,label:"None"},..._.map(e=>({value:e.id,label:e.title.rendered}))],__self:void 0,__source:{fileName:n,lineNumber:50,columnNumber:21}}),React.createElement(o,{label:"Panel Width",value:m,min:2,max:3840,onChange:e=>{t({width:e})},__self:void 0,__source:{fileName:n,lineNumber:68,columnNumber:21}}),React.createElement(o,{label:"Panel Height",value:p,min:2,max:3840,onChange:e=>{t({height:e})},__self:void 0,__source:{fileName:n,lineNumber:79,columnNumber:21}}))))};const{__:p}=wp.i18n,{registerBlockType:_}=wp.blocks;_("ubc/vrpress",{title:p("VRPress","ubc-vrpress"),description:p("Render 360 panorama images with hotspots.","ubc-vrpress"),icon:"format-image",keywords:[p("360","ubc-vrpress"),p("Panorama","ubc-vrpress")],category:"media",edit:m,save:()=>null});var d="/Users/kelvin/Local Sites/multisite/app/public/wp-content/plugins/VRPress/assets/src/js/block/map/edit.js";const{InspectorControls:b}=wp.blockEditor,{PanelBody:f,SelectControl:v,RangeControl:N}=wp.components,{useEffect:g,useState:h}=wp.element,{__:R}=wp.i18n;var w=({attributes:e,setAttributes:t})=>{const{postID:r,width:n,height:l}=e,[s,a]=h([]);return g(()=>{fetch(ubc_vrpress_editor.site_address+"/wp-json/wp/v2/ubcvrpress/").then(e=>e.json()).then(e=>{a(e.filter(e=>"google"===e.ubc_vr_type))},e=>{alert("An unexcepted error occured, please contact site administrator.")})},[]),React.createElement(React.Fragment,null,function(){const e=s.filter(e=>e.id===r),t=1===e.length?e[0].title.rendered:"";return React.createElement("div",{className:"ubc-vrpress-default-view",__self:this,__source:{fileName:d,lineNumber:40,columnNumber:4}},React.createElement("div",{__self:this,__source:{fileName:d,lineNumber:41,columnNumber:5}},"VRPress Instance selected : ",React.createElement("strong",{style:{paddingLeft:"5px"},__self:this,__source:{fileName:d,lineNumber:41,columnNumber:38}},-1===r?"None":t)))}(),React.createElement(b,{__self:void 0,__source:{fileName:d,lineNumber:50,columnNumber:4}},React.createElement(f,{title:"Settings",initialOpen:!0,__self:void 0,__source:{fileName:d,lineNumber:51,columnNumber:5}},React.createElement(v,{label:R("Select VRPress Streetview Instance:"),value:r,onChange:e=>{t({postID:parseInt(e)})},options:[{value:-1,label:"None"},...s.map(e=>({value:e.id,label:e.title.rendered}))],__self:void 0,__source:{fileName:d,lineNumber:52,columnNumber:21}}),React.createElement(N,{label:"Map Width",value:n,min:2,max:3840,onChange:e=>{t({width:e})},__self:void 0,__source:{fileName:d,lineNumber:70,columnNumber:21}}),React.createElement(N,{label:"Map Height",value:l,min:2,max:3840,onChange:e=>{t({height:e})},__self:void 0,__source:{fileName:d,lineNumber:81,columnNumber:21}}))))};const{__:y}=wp.i18n,{registerBlockType:E}=wp.blocks;E("ubc/vrpress-map",{title:y("VRPress Google Map","ubc-vrpress"),description:y("Render google map associated with Streetview Panorama","ubc-vrpress"),icon:"format-image",keywords:[y("360","ubc-vrpress"),y("Panorama","ubc-vrpress")],category:"media",edit:w,save:()=>null});r(86)}});