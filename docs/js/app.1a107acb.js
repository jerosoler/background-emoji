(function(e){function t(t){for(var i,n,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},o=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-container",[a("el-header",[a("h1",[e._v("🔥 Background Emoji 🎉")])]),a("el-main",[a("canvas",{attrs:{id:"canvas"}}),a("div",{attrs:{id:"demo"}},["Linear"===e.typeback?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 "+e.input.length/2*(e.size_x+e.size_x*e.space_x)+" "+(e.size_y+e.size_y*e.space_y),width:e.input.length/2*(e.size_x+e.size_x*e.space_x),height:e.size_y+e.size_y*e.space_y}},e._l(e.input.length/2,(function(t,i){return a("text",{key:i,attrs:{x:1.25*(i+i*e.space_x)+"em",y:"1em","font-size":e.size,transform:"rotate("+e.rotate+" "+(1.25*(i+i*e.space_x)*e.size+e.size_x/2)+" "+e.size_y/2+")"}},[e._v(e._s(e.input.slice(2*i,2*(i+1))))])})),0):"Steps"===e.typeback?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 "+e.input.length/2*(e.size_x+e.size_x*e.space_x)+" "+(2*e.size_y+2*e.size_y*e.space_y),width:e.input.length/2*(e.size_x+e.size_x*e.space_x),height:2*e.size_y+2*e.size_y*e.space_y}},e._l(e.input.length/2,(function(t,i){return a("text",{key:i,attrs:{x:1.25*(i+i*e.space_x)+"em",y:i%2==0?"1em":2+e.space_y+"em","font-size":e.size,transform:i%2==0?"rotate("+e.rotate+" "+(1.25*(i+i*e.space_x)*e.size+e.size_x/2)+" "+e.size_y/2+")":"rotate("+e.rotate+" "+(1.25*(i+i*e.space_x)*e.size+e.size_x/2)+" "+((1+e.space_y)*e.size+e.size_y/2)+")"}},[e._v(e._s(e.input.slice(2*i,2*(i+1))))])})),0):e._e()]),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:24,md:6}},[a("el-card",{staticClass:"box-card controls"},[a("el-row",[a("el-col",{attrs:{span:16}},[a("el-input",{staticStyle:{"font-size":"27px"},attrs:{placeholder:"Please Pick emoji",disabled:!0},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),a("el-col",{attrs:{span:8}},[a("el-button",{staticStyle:{"font-size":"27px",padding:"5px"},on:{click:function(t){e.showDialogEmoji=!e.showDialogEmoji}}},[e._v("😃")]),a("el-button",{staticStyle:{"font-size":"27px",padding:"5px"},on:{click:e.removeLastCharacter}},[e._v("❌")])],1),a("el-col",{staticClass:"emojibox",attrs:{span:24}},[a("Emoji",{directives:[{name:"show",rawName:"v-show",value:e.showDialogEmoji,expression:"showDialogEmoji"}],on:{select:e.onSelectEmoji}})],1),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"el-form-item"},[a("el-radio-group",{on:{change:e.reload},model:{value:e.typeback,callback:function(t){e.typeback=t},expression:"typeback"}},[a("el-radio-button",{attrs:{label:"Linear"}}),a("el-radio-button",{attrs:{label:"Steps"}})],1)],1)]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"el-form-item"},[a("span",{staticClass:"label"},[e._v("Opacity")]),a("el-slider",{staticClass:"content",attrs:{min:.1,max:1,step:.1},on:{input:e.reload},model:{value:e.opacity,callback:function(t){e.opacity=t},expression:"opacity"}})],1),a("div",{staticClass:"el-form-item"},[a("span",{staticClass:"label"},[e._v("Grayscale")]),a("el-slider",{staticClass:"content",attrs:{min:0,max:1,step:.1},on:{input:e.reload},model:{value:e.grayscale,callback:function(t){e.grayscale=t},expression:"grayscale"}})],1),a("div",{staticClass:"el-form-item"},[a("span",{staticClass:"label"},[e._v("Size")]),a("el-slider",{staticClass:"content",attrs:{min:15,max:230,step:1},on:{input:e.reload},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}})],1),a("div",{staticClass:"el-form-item"},[a("span",{staticClass:"label"},[e._v("Space X")]),a("el-slider",{staticClass:"content",attrs:{min:0,max:2,step:.1},on:{input:e.reload},model:{value:e.space_x,callback:function(t){e.space_x=t},expression:"space_x"}})],1),a("div",{staticClass:"el-form-item"},[a("span",{staticClass:"label"},[e._v("Space Y")]),a("el-slider",{staticClass:"content",attrs:{min:0,max:3,step:.1},on:{input:e.reload},model:{value:e.space_y,callback:function(t){e.space_y=t},expression:"space_y"}})],1),a("div",{staticClass:"el-form-item"},[a("span",{staticClass:"label"},[e._v("Rotate")]),a("el-slider",{staticClass:"content",attrs:{min:0,max:360,step:1},on:{input:e.reload},model:{value:e.rotate,callback:function(t){e.rotate=t},expression:"rotate"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.exportback}},[e._v("Export & Download")])],1)],1)],1)],1)],1),a("el-dialog",{attrs:{title:"Export",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("p",[e._v("SVG")]),a("prism",{attrs:{language:"svg"}},[e._v(e._s(e.codeSvg))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.codeSvg,expression:"codeSvg",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copied,expression:"copied",arg:"success"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary"}},[e._v("Copy!!")]),a("p",[e._v("CSS")]),a("prism",{attrs:{language:"css"}},[e._v(e._s(e.codeCss))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.codeCss,expression:"codeCss",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copied,expression:"copied",arg:"success"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary"}},[e._v("Copy!!")]),a("p",[e._v("PNG")]),a("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary",loading:e.loadingDownload},on:{click:function(t){return e.download()}}},[e._v("Download")])],1),a("h1",{staticClass:"titlebody"},[e._v("EXAMPLES")]),e._l(7,(function(t,i){return a("div",{key:t,class:"examples example"+i},e._l(3,(function(t,i){return a("el-card",{key:t,class:i>0?"hidden":"",attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}}),a("div",{staticStyle:{padding:"14px"}},[a("span",[e._v("Emoji!!!")]),a("div",{staticClass:"bottom clearfix"},[a("time",{staticClass:"time"}),a("el-button",{staticClass:"button",attrs:{type:"text"}},[e._v("Buy!")])],1)])])})),1)}))],2),a("el-footer",[e._v("Made by "),a("a",{attrs:{href:"https://github.com/jerosoler"}},[e._v("Jero Soler")]),e._v(" with ❤️")])],1),a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/jerosoler/background-emoji/","aria-label":"View source on GitHub"}},[a("svg",{staticStyle:{fill:"#151513",color:"rgb(89, 88, 88)",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"60",height:"60",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])],1)},o=[],n=(a("fb6a"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("ddb0"),a("2b3d"),a("5c96")),r=a.n(n),l=(a("0fae"),a("79b5")),c=a("4eb5"),d=a.n(c),p=(a("c197"),a("84bf"),a("70cb"),a("a888"),a("5253"),a("8d51")),u=a.n(p);i["default"].use(r.a),i["default"].use(d.a),i["default"].component("prism",u.a);var m={name:"App",components:{Emoji:l["a"]},data:function(){return{input:"🐮🐼🐵🦁",showDialogEmoji:!1,typeback:"Steps",opacity:.5,grayscale:.5,size:60,size_x:75,size_y:71,space_x:0,space_y:0,rotate:0,dialogVisible:!1,codeSvg:" ",codeCss:" ",loadingDownload:!1}},mounted:function(){this.reload()},methods:{onSelectEmoji:function(e){this.input+=e.data,this.reload()},removeLastCharacter:function(){this.input=this.input.slice(0,-2),this.reload()},exportback:function(){this.dialogVisible=!this.dialogVisible;var e=document.getElementById("demo"),t=e.innerHTML.replace(/ {2}|\r\n|\n|\r/gm,""),a=document.getElementById("demo").children[0].getAttribute("width"),i=document.getElementById("demo").children[0].getAttribute("height");this.codeSvg=t;var s=".div {\n";s+=" background-size: "+a+"px "+i+"px;\n",s+=" background-image: url('data:image/svg+xml;utf8,"+t+"');\n",s+="}\n",this.codeCss=s},copied:function(){this.$message({message:"👏 Copied! 🎉",type:"success"})},download:function(){this.loadingDownload=!0;var e=(new XMLSerializer).serializeToString(document.querySelector("svg")),t=document.getElementById("canvas"),a=document.getElementById("demo").children[0].getAttribute("width");t.width=a;var i=document.getElementById("demo").children[0].getAttribute("height");t.height=i;var s=t.getContext("2d");s.clearRect(0,0,t.width,t.height);var o=self.URL||self.webkitURL||self,n=new Image,r=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),l=o.createObjectURL(r);n.onload=function(){s.drawImage(n,0,0);var e=t.toDataURL("image/png"),a=document.createElement("a");a.download="emoji-background.png",a.href=document.getElementById("canvas").toDataURL(),a.click(),o.revokeObjectURL(e)},n.src=l;var c=this;setTimeout((function(){c.loadingDownload=!1}),1e3)},reload:function(){var e=this;this.size_x=1.25*this.size,this.size_y=1.2*this.size,setTimeout((function(){var t=document.getElementById("demo"),a="opacity: "+e.opacity+"; ";a+="filter:grayscale("+e.grayscale+"); ",document.getElementById("demo").children[0].style=a;var i=document.getElementById("demo").children[0].getAttribute("width");document.getElementById("demo").children[0].setAttribute("width",i);var s=document.getElementById("demo").children[0].getAttribute("height");document.getElementById("demo").children[0].setAttribute("height",s);var o=t.innerHTML.replace(/ {2}|\r\n|\n|\r/gm,"");t.style.backgroundSize=i+"px "+s+"px",t.style.backgroundImage="url('data:image/svg+xml;utf8,"+o+"')"}),25)}}},g=m,v=(a("034f"),a("2877")),h=Object(v["a"])(g,s,o,!1,null,null,null),y=h.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.1a107acb.js.map