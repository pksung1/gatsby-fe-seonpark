(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9535:function(t,e,i){"use strict";var n=i(7294),r=i(5444),o=i(6125);e.Z=function(){var t,e,a=(0,r.useStaticQuery)("3257411868"),s=null===(t=a.site.siteMetadata)||void 0===t?void 0:t.author;null===(e=a.site.siteMetadata)||void 0===e||e.social;return n.createElement("div",{className:"flex flex-row items-center justify-center gap-3 py-4"},n.createElement(o.S,{className:"rounded-3xl",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:i(8765)}),(null==s?void 0:s.name)&&n.createElement("p",null,"Written by ",n.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null))}},4983:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return d}});var n=i(7294),r=i(5444),o=i(9535),a=i(9762),s=i(3751),c=i(3279),l=i.n(c),f=function(){function t(t,e){this.canvas=t,this.options=e}return t.prototype.render=function(){var t=this.canvas.getContext("2d");t.strokeStyle="rgb(\n      "+parseInt(255*Math.random())+",\n      "+parseInt(255*Math.random())+",\n      "+parseInt(255*Math.random())+")";var e=this.options,i=e.width,n=e.height;t.font="6rem 'The Nautigal'";var r=t.measureText("DEVSEON");t.strokeText("DEVSEON",(i-r.width)/2,(n-r.fontBoundingBoxAscent)/2)},t}(),u=function(){function t(t){this.canvas=t,this.width=t.offsetWidth,this.height=t.offsetHeight,this.tick=100,this.options={width:this.width,height:this.height},this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.resize=this.resize.bind(this),window.addEventListener("resize",l()(this.resize,300)),this.start()}var e=t.prototype;return e.start=function(){this.textCtx=new f(this.canvas,this.options),this.loop=this.loop.bind(this),this.loop()},e.resize=function(t){var e=this.canvas,i=e.offsetWidth,n=e.offsetHeight;this.width=i,this.height=n,this.options={width:i,height:n}},e.render=function(){this.ctx.clearRect(0,0,this.width,this.height),this.textCtx.render()},e.loop=function(){var t=this;requestAnimationFrame((function(){t.render(),setTimeout((function(){t.loop()}),t.tick)}))},t}(),p=function(){var t=(0,n.useRef)();return(0,n.useEffect)((function(){new u(t.current)}),[t]),n.createElement("div",{id:"main-canvas",className:"flex fixed h-screen w-screen pt-12 top-0 left-0 z-0 items-center justify-center bg-gray-100"},n.createElement("canvas",{ref:t,className:"w-full h-full"}))},d=function(t){var e,i=t.data,c=t.location,l=(null===(e=i.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",f=i.allMarkdownRemark.nodes;return 0===f.length?n.createElement(a.Z,{location:c,title:l},n.createElement(s.Z,{title:"All posts"}),n.createElement(o.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(a.Z,{location:c,title:l},n.createElement(s.Z,{title:"All posts"}),n.createElement(p,null),n.createElement("div",{className:"pt-screen -mt-8 z-10 relative lg:px-20"},n.createElement("div",{className:"bg-white mx-auto rounded-t-3xl p-8 max-h"},n.createElement("h2",{className:"text-2xl pb-4"},"Recent Posts"),n.createElement("ol",{className:"lg:grid grid-rows-3 grid-cols-2 gap-2"},f.slice(0,6).map((function(t){var e=t.frontmatter.title||t.fields.slug;return n.createElement("li",{key:t.fields.slug,onClick:function(){return(0,r.navigate)("posts"+t.fields.slug)},className:"p-4 transition-shadow border-gray-100 border rounded shadow-sm hover:shadow-lg cursor-pointer"},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",{className:"text-lg"},n.createElement(r.Link,{to:"posts"+t.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},e))),n.createElement("small",null,t.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description",className:"text-sm"}))))}))),n.createElement(o.Z,null))))}},2705:function(t,e,i){var n=i(5639).Symbol;t.exports=n},4239:function(t,e,i){var n=i(2705),r=i(9607),o=i(2333),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):o(t)}},7561:function(t,e,i){var n=i(7990),r=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(r,""):t}},1957:function(t,e,i){var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=n},9607:function(t,e,i){var n=i(2705),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),i=t[s];try{t[s]=void 0;var n=!0}catch(c){}var r=a.call(t);return n&&(e?t[s]=i:delete t[s]),r}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,i){var n=i(1957),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();t.exports=o},7990:function(t){var e=/\s/;t.exports=function(t){for(var i=t.length;i--&&e.test(t.charAt(i)););return i}},3279:function(t,e,i){var n=i(3218),r=i(7771),o=i(4841),a=Math.max,s=Math.min;t.exports=function(t,e,i){var c,l,f,u,p,d,h=0,m=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var i=c,n=l;return c=l=void 0,h=e,u=t.apply(n,i)}function x(t){return h=t,p=setTimeout(w,e),m?b(t):u}function y(t){var i=t-d;return void 0===d||i>=e||i<0||v&&t-h>=f}function w(){var t=r();if(y(t))return E(t);p=setTimeout(w,function(t){var i=e-(t-d);return v?s(i,f-(t-h)):i}(t))}function E(t){return p=void 0,g&&c?b(t):(c=l=void 0,u)}function N(){var t=r(),i=y(t);if(c=arguments,l=this,d=t,i){if(void 0===p)return x(d);if(v)return clearTimeout(p),p=setTimeout(w,e),b(d)}return void 0===p&&(p=setTimeout(w,e)),u}return e=o(e)||0,n(i)&&(m=!!i.leading,f=(v="maxWait"in i)?a(o(i.maxWait)||0,e):f,g="trailing"in i?!!i.trailing:g),N.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=d=l=p=void 0},N.flush=function(){return void 0===p?u:E(r())},N}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,i){var n=i(4239),r=i(7005);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==n(t)}},7771:function(t,e,i){var n=i(5639);t.exports=function(){return n.Date.now()}},4841:function(t,e,i){var n=i(7561),r=i(3218),o=i(3448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var i=s.test(t);return i||c.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}},8765:function(t){"use strict";t.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#c8d8e8","images":{"fallback":{"src":"/static/905c7f416dfb7409be8f6b89f33c6117/d24ee/profile-pic.jpg","srcSet":"/static/905c7f416dfb7409be8f6b89f33c6117/d24ee/profile-pic.jpg 50w,\\n/static/905c7f416dfb7409be8f6b89f33c6117/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/905c7f416dfb7409be8f6b89f33c6117/d4bf4/profile-pic.avif 50w,\\n/static/905c7f416dfb7409be8f6b89f33c6117/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/905c7f416dfb7409be8f6b89f33c6117/3faea/profile-pic.webp 50w,\\n/static/905c7f416dfb7409be8f6b89f33c6117/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4793b4fed235ef8dd5c7.js.map