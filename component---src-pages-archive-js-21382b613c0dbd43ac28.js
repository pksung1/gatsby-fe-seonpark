/*! For license information please see component---src-pages-archive-js-21382b613c0dbd43ac28.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[527],{5900:function(e,t){var l;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)){if(l.length){var i=a.apply(null,l);i&&e.push(i)}}else if("object"===n)if(l.toString===Object.prototype.toString)for(var c in l)r.call(l,c)&&l[c]&&e.push(c);else e.push(l.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},9762:function(e,t,l){"use strict";l.d(t,{Z:function(){return f}});var r=l(7294),a=l(5444),n=l(5900),i=l.n(n),c=function(e){var t=e.onClick;return r.createElement("svg",{version:"1.1",baseProfile:"full",width:"35",height:"25",onClick:t},r.createElement("rect",{width:"35",height:"2",fill:"#000",rx:"5",ry:"5"}),r.createElement("rect",{width:"35",height:"2",y:"10",fill:"#000",rx:"5",ry:"5"}),r.createElement("rect",{width:"35",height:"2",y:"20",fill:"#000",rx:"5",ry:"5"}))},s=[{to:"/posts",display:"Posts"},{to:"/archive",display:"Archive"},{to:"/category",display:"Category"},{to:"/about",display:"About"}],o=function(){var e=(0,r.useState)(!1),t=e[0],l=e[1],n=i()("flex flex-col items-center absolute left-0 top-12 bg-white w-full shadow",{hidden:!t});return r.createElement("div",{className:"flex items-center"},r.createElement("div",{className:"flex flex-row justify-center items-center gap-4 hidden lg:flex"},s.map((function(e){var t=e.to,l=e.display;return r.createElement(a.Link,{to:t},l)}))),r.createElement("div",{className:"lg:hidden flex items-center"},r.createElement(c,{onClick:function(){l(!t)}}),r.createElement("div",{className:n},s.map((function(e){var t=e.to,l=e.display;return r.createElement(a.Link,{className:"py-2 w-full shadow text-center",to:t},l)})))))},f=function(e){var t=e.location,l=e.title,n=e.children,c="/"===t.pathname,s=i()("flex-1 overflow-hidden relative",{"pt-12":!c});return r.createElement("div",{"data-is-root-path":c},r.createElement("header",{className:"shadow-md w-full h-12 items-center z-20 fixed bg-white"},r.createElement("div",{className:"flex flex-row justify-between px-4 py-2"},r.createElement("h1",{className:"text-xl font-title"},r.createElement(a.Link,{to:"/"},l)),r.createElement(o,null))),r.createElement("main",{className:"flex flex-column"},r.createElement("section",{className:"flex"}),r.createElement("section",{className:s},n)),r.createElement("footer",null))}},226:function(e,t,l){"use strict";l.r(t);var r=l(7294),a=l(9762);t.default=function(e){var t,l=e.location,n=(null===(t=e.data.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(a.Z,{location:l,title:n},r.createElement("div",{className:"flex items-center justify-center"},r.createElement("h1",null,"준비중")))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-21382b613c0dbd43ac28.js.map