(window.webpackJsonp=window.webpackJsonp||[]).push([[5,41,42,43,52],{399:function(e,t,n){"use strict";var o=n(5),r=n(24),l=n(25),c=n(131),d=n(71),f=n(9),m=n(54).f,h=n(55).f,x=n(11).f,v=n(409).trim,y="Number",w=o.Number,_=w,k=w.prototype,I=l(n(93)(k))==y,C="trim"in String.prototype,S=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,l=(t=C?t.trim():v(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(I?f((function(){k.valueOf.call(n)})):l(n)!=y)?c(new _(S(t)),n,w):S(t)};for(var M,E=n(8)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)r(_,M=E[N])&&!r(w,M)&&x(w,M,h(_,M));w.prototype=k,k.constructor=w,n(14)(o,y,w)}},403:function(e,t,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(70).default)("745ddbfc",content,!0,{sourceMap:!1})},409:function(e,t,n){var o=n(4),r=n(35),l=n(9),c=n(410),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(e,t,n){var r={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=r[e]=d?t(x):c[e];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},x=h.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=h},410:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},413:function(e,t,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(70).default)("4b5af0c6",content,!0,{sourceMap:!1})},415:function(e,t,n){"use strict";n.r(t);var o={props:{svgImport:{type:Object},bullets:{type:Object,description:String}}},r=n(30),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bullet-box"},[n("svg-import",{attrs:{"svg-import":e.bullets,lazy:"",width:"26",height:"26"}}),e._v(" "),n("p",{staticClass:"paragraph"},[e._v(e._s(e.bullets.description))])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SvgImport:n(181).default})},419:function(e,t,n){"use strict";n(403)},420:function(e,t,n){var o=n(69)(!1);o.push([e.i,'.typo-caption{font-size:14px;line-height:19px;font-weight:400;font-family:"Nunito Sans",sans-serif;color:hsla(0,0%,100%,.8)}.typo-caption.typo-caption__dark{color:rgba(18,30,72,.7)}.typo-caption.typo-caption__bold{font-weight:700}@media (min-width:1024px){.typo-caption{font-size:16px;line-height:26px}}',""]),e.exports=o},430:function(e,t,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(70).default)("f34ea3b0",content,!0,{sourceMap:!1})},434:function(e,t,n){"use strict";n.r(t);var o={props:{content:{type:String,required:!0},dark:{type:Boolean,required:!1},bold:{type:Boolean,required:!1}}},r=(n(419),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"typo-caption",class:{"typo-caption__dark":e.dark,"typo-caption__bold":e.bold}},[e._v("\n  "+e._s(e.content)+"\n")])}),[],!1,null,null,null);t.default=component.exports},436:function(e,t,n){"use strict";n(413)},437:function(e,t,n){var o=n(69)(!1);o.push([e.i,".info-baloon{display:flex;flex-direction:column;align-items:center;justify-content:center;width:166px}.info-baloon>.info-baloon-box{width:100%;padding:10px;border-radius:5px;background-color:rgba(18,30,72,.9);text-align:center}@media (min-width:1024px){.info-baloon>.info-baloon-box>.typo-caption{font-size:14px;line-height:19px}}.info-baloon>.info-baloon-triangle{width:0;height:0;margin-top:-10px;margin-right:0;margin-bottom:0;border-color:rgba(18,30,72,.9) rgba(18,30,72,.9) transparent transparent;border-style:solid;border-width:10px;border-radius:0;border-top-right-radius:4px;transform:rotate(135deg)}",""]),e.exports=o},442:function(e,t,n){"use strict";n.r(t);var o={props:{content:{type:String,required:!0}}},r=(n(436),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-baloon"},[n("div",{staticClass:"info-baloon-box"},[n("typo-caption",{attrs:{content:e.content}})],1),e._v(" "),n("div",{staticClass:"info-baloon-triangle"})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TypoCaption:n(434).default})},443:function(e,t,n){"use strict";n.r(t);var o=n(30),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"img-tooltip",attrs:{width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Preço",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Desktop-/-Home---Página-de-Preço-v7",transform:"translate(-338.000000, -1620.000000)"}},[n("g",{attrs:{id:"icon-/-warning-copy-2",transform:"translate(338.000000, 1620.000000)"}},[n("polygon",{attrs:{id:"Path",opacity:"0",points:"20 20 0 20 0 0 20 0"}}),e._v(" "),n("circle",{attrs:{id:"Oval",stroke:"#121E48","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",cx:"10",cy:"10",r:"7.5"}}),e._v(" "),n("line",{attrs:{id:"Path",x1:"9.16666667",y1:"12.9166667",x2:"11.0916667",y2:"12.9166667",stroke:"#121E48","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("polyline",{attrs:{id:"Path",stroke:"#121E48","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",points:"10.1325 12.9166667 10.1325 9.375 9.17416667 9.375"}}),e._v(" "),n("path",{attrs:{id:"Path",d:"M10.0833333,6.87271667 L10.0833333,6.87271667 C10.0833333,6.98777583 9.99005917,7.08105 9.875,7.08105 C9.75994083,7.08105 9.66666667,6.98777583 9.66666667,6.87271667 C9.66666667,6.7576575 9.75994083,6.66438333 9.875,6.66438333",stroke:"#121E48","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{id:"Path",d:"M9.875,6.66438333 L9.87499999,6.66438333 C9.99005916,6.66438333 10.0833333,6.7576575 10.0833333,6.87271667",stroke:"#121E48","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])}),[],!1,null,null,null);t.default=component.exports},463:function(e,t,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(70).default)("7fd1c660",content,!0,{sourceMap:!1})},464:function(e,t,n){"use strict";n(430)},465:function(e,t,n){var o=n(69)(!1);o.push([e.i,".info-tooltip{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.info-tooltip>.info-baloon{position:absolute;bottom:28px;display:none;opacity:0;visibility:hidden}.info-tooltip>.info-baloon[\\:has\\(\\%20.img-tooltip\\:hover\\)]{display:flex;opacity:1;visibility:visible}.info-tooltip>.info-baloon:has(~.img-tooltip:hover){display:flex;opacity:1;visibility:visible}.info-tooltip>.img-tooltip{opacity:.3;transition:.2s}.info-tooltip>.img-tooltip:hover{opacity:.7}@media (min-width:1024px){.info-tooltip{align-items:center}.info-tooltip>.img-tooltip{margin-right:0}}",""]),e.exports=o},483:function(e,t,n){"use strict";n.r(t);var o={props:{content:{type:String,required:!0}}},r=(n(464),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-tooltip"},[n("info-baloon",{attrs:{content:e.content}}),e._v(" "),n("img-tooltip")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{InfoBaloon:n(442).default,ImgTooltip:n(443).default})},499:function(e,t,n){"use strict";n(463)},500:function(e,t,n){var o=n(69)(!1);o.push([e.i,'.img-step{display:flex;align-items:center;max-width:112px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:40px;padding:0 16px 0 8px;border-radius:8px;background-color:#ff4bb7;box-shadow:2px 8px 16px 0 rgba(255,75,140,.2)}.img-step.-green{background-color:#63e1a5;box-shadow:2px 8px 16px 0 rgba(99,225,165,.2)}.img-step.-orange{background-color:#ff974b;box-shadow:2px 8px 16px 0 rgba(255,151,75,.2)}.img-step.-red{background-color:#ff6362;box-shadow:2px 8px 16px 0 rgba(255,99,98,.2)}.img-step.-blue{background-color:#940dff;box-shadow:2px 8px 16px 0 rgba(148,13,255,.2)}.img-step.-dark-blue{background-color:#183273;box-shadow:2px 8px 16px 0 rgba(24,50,115,.2)}.img-step>.img-step-img{width:22px;margin-right:8px}.img-step>.img-step-text{color:#fff;padding-top:1px;font-family:"Nunito Sans",sans-serif;font-size:13px;font-weight:700;letter-spacing:0;text-transform:uppercase}@media (min-width:768px){.img-step{height:42px}}',""]),e.exports=o},534:function(e,t,n){var content=n(802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(70).default)("39e35cc0",content,!0,{sourceMap:!1})},560:function(e,t,n){"use strict";n.r(t);n(33);var o={props:{content:{type:Object,required:!0,validator:function(e){return["green","orange","purple","blue","pink","light-pink","lilac","dark-lilac","red","dark-blue","gray"].includes(e)}}}},r=(n(499),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"img-step",class:["-"+e.content.color]},[o("img",{staticClass:"img-step-img",attrs:{src:n(182)("./"+e.content.icon),alt:e.content.icon,lazy:"",sizes:"xs:22px"}}),e._v(" "),o("p",{staticClass:"img-step-text"},[e._v(e._s(e.content.step))])])}),[],!1,null,null,null);t.default=component.exports},801:function(e,t,n){"use strict";n(534)},802:function(e,t,n){var o=n(69)(!1);o.push([e.i,'.plans-container{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.plans-container>.plans-container-grid>.grid{position:relative;display:flex;flex-direction:column;flex:1}.plans-container>.plans-container-grid>.grid>.element{overflow:hidden;border-radius:8px;width:100%;position:relative;z-index:10}.plans-container>.plans-container-grid>.grid>.element>.label-benefit{border-radius:8px 8px 0 0;background:#fff;padding:22px 24px 30px;position:relative;overflow:hidden}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.img-step{margin-bottom:22px}@media (min-width:1415px){.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.img-step{margin-bottom:32px}}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.content>.price>.fixed{color:rgba(18,30,72,.5);font-size:16px;letter-spacing:0;line-height:26px;margin-bottom:22px}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.content>.price>.fixed>.coin{color:rgba(18,30,72,.9);font-size:30px;letter-spacing:0;line-height:39px;font-family:"Roboto Slab",serif;font-weight:900;margin-right:5px}@media (min-width:1415px){.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.content>.price>.fixed{margin-bottom:32px}}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.content>.price>.colab{display:inline-block;color:rgba(18,30,72,.5);font-size:16px;letter-spacing:0;line-height:26px}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.content>.price>.colab>.small-coin{color:rgba(18,30,72,.9);font-size:16px;letter-spacing:0;line-height:26px;font-family:"Nunito Sans",sans-serif;font-weight:700}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.btn-try{width:160px;margin:24px 0 0}@media (min-width:1024px){.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.btn-try{margin:32px 0 0}}@media (min-width:1415px){.plans-container>.plans-container-grid>.grid>.element>.label-benefit{padding:32px 32px 30px}}.plans-container>.plans-container-grid>.grid>.element>.label-includes{position:relative;background:#fff;padding:35px 46px 24px 24px;height:100%;border-radius:0 0 8px 8px;border-top:1px solid rgba(18,30,72,.1)}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.label-includes-title{color:rgba(18,30,72,.5);font-size:16px;letter-spacing:0;line-height:26px;margin-bottom:32px}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes{z-index:10;position:relative}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box{display:flex}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box>.info-tooltip{margin:14px 0 0 8px}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box>.bullet-box,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-right>.topic-box>.bullet-box{display:flex;align-items:center;margin-top:12px}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box>.bullet-box>.paragraph,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-right>.topic-box>.bullet-box>.paragraph{color:rgba(18,30,72,.7);font-size:14px;line-height:19px}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box>.bullet-box>img,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-right>.topic-box>.bullet-box>img{height:24px;margin-right:10px;aspect-ratio:1/1}@media (min-width:1024px){.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box>.bullet-box,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-right>.topic-box>.bullet-box{margin-top:0}}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-left>.topic-box:not(:first-child)>.bullet-box,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes>.-right>.topic-box:not(:first-child)>.bullet-box{margin-top:12px}@media (min-width:1024px){.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes{display:flex}.plans-container>.plans-container-grid>.grid>.element>.label-includes>.includes .-left{margin:0 70px 0 0}}.plans-container>.plans-container-grid>.grid>.element>.label-includes.-open{display:block}.plans-container>.plans-container-grid>.grid>.element>.label-includes.-closed{display:hidden}.plans-container>.plans-container-grid>.grid>.element>.label-includes:before{background:rgba(18,30,72,.02);content:"";z-index:0;position:absolute;display:block;height:100%;width:100%;top:0;left:0}@media (min-width:1024px){.plans-container>.plans-container-grid>.grid>.element>.label-includes{padding:32px 62px 40px 32px}}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more{display:flex;justify-content:flex-end;margin-top:32px;cursor:pointer}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more>.more,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more>.more{text-align:right;letter-spacing:0;line-height:18px;font-size:13px;font-weight:700;text-transform:uppercase;align-items:center;display:inline-flex;z-index:10}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more>.more>.see,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more>.more>.see{margin-right:9px;color:rgba(18,30,72,.7)}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more>.more>.direction img,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more>.more>.direction img{opacity:.5}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more>.more>.direction.-closed .direction,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more>.more>.direction.-closed .direction{transform:rotate(90deg)}.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more>.more>.direction.-open .direction,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more>.more>.direction.-open .direction{transform:rotate(-90deg)}@media (min-width:768px){.plans-container>.plans-container-grid>.grid>.element>.label-benefit>.wrapper-more,.plans-container>.plans-container-grid>.grid>.element>.label-includes>.wrapper-more{margin-top:0}}@media (min-width:1415px){.plans-container>.plans-container-grid>.grid{flex-direction:row}}',""]),e.exports=o},873:function(e,t,n){"use strict";n.r(t);var o=n(56),r=(n(399),n(36),{mixins:[n(393).a],props:{modalityInfo:{type:Object,hid:String,title:String,priceMonthly:{type:Object,hid:String,coin:String,fixed:Number,fix:String,plus:String,perColab:String,size:String},priceAnnual:{type:Object,hid:String,coin:String,fixed:String,fix:String,plus:String,perColab:String,size:String},callToActions:{type:Object,hid:String,description:String,image:String,altTitleImage:String,linkTo:String},seeMoreAction:{type:Object,hid:String,image:String,altTitleImage:String,class:String}},includesInfo:{type:Array,hid:String,image:String,altTitleImage:String,description:String},urlParams:{type:String,default:""},modality:{type:Boolean,required:!0},toggle:{type:Boolean,required:!1}},data:function(){return{dataModality:{fixed:0,fix:"",perColab:""},show:!1,showIncludes:!0}},computed:{info:function(){var e=this.includesInfo,t=Math.round(this.includesInfo.length/2),n=e.slice(0,t),r=e.slice(t,e.length);return[Object(o.a)(n||[]),Object(o.a)(r||[])]},seeMore:function(){return{"-open":this.show,"-closed":!this.show}},textSee:function(){return this.show?"ver menos":"ver mais"}},watch:{modality:function(e){if(this.hasElement(this.modalityInfo.priceMonthly))for(var t in this.dataModality)this.dataModality[t]=e?this.modalityInfo.priceAnnual[t]:this.modalityInfo.priceMonthly[t]}},mounted:function(){var e=this;if(this.$nextTick((function(){requestAnimationFrame(e.showMore),window.addEventListener("resize",e.showMore)})),this.hasElement(this.modalityInfo.priceMonthly))for(var t in this.dataModality)this.dataModality[t]=this.modalityInfo.priceMonthly[t]},destroyed:function(){window.removeEventListener("resize",this.showMore)},methods:{checkFirst:function(e){return{"-first":0===e}},checkHalf:function(e,t){return e<=t/2},isClickable:function(e){return!(!this.isXsTablet||!this.changeShowMore(!this.hasElement(e)))},hasElement:function(element){return void 0!==element},showMore:function(){if(!this.isXsTablet)return this.show=!0;this.show=this.showIncludes&&!this.toggle},changeShowMore:function(e){e&&(this.show=!this.show,this.showIncludes=!this.showIncludes)}}}),l=(n(801),n(30)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"element"},[n("div",{staticClass:"label-benefit"},[n("img-step",{attrs:{content:e.modalityInfo.icon}}),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"price"},[n("p",{staticClass:"fixed"},[n("span",{staticClass:"coin"},[e._v(" "+e._s(e.modalityInfo.coin)+" "+e._s(e.modalityInfo.fixed))]),e._v("\n          "+e._s(e.modalityInfo.fix)+".\n        ")]),e._v(" "),n("p",{staticClass:"colab"},[e._v("\n          "+e._s(e.modalityInfo.plus)+"\n          "),n("span",{staticClass:"small-coin"},[e._v(" "+e._s(e.modalityInfo.coin)+" "+e._s(e.modalityInfo.perColab))]),e._v("\n          "+e._s(e.modalityInfo.size)+" "),e.isXsTablet?e._e():n("br"),e._v("\n          "+e._s(e.modalityInfo.info)+"\n        ")])])]),e._v(" "),n("c-button",{staticClass:"btn-try",attrs:{to:"/testar-gratis"+e.urlParams}},[e._v(" Testar grátis ")]),e._v(" "),e.show?e._e():n("span",{staticClass:"wrapper-more",on:{click:function(t){return e.isClickable(e.modalityInfo.callToActions)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.isXsTablet,expression:"isXsTablet"}],staticClass:"more"},[n("span",{staticClass:"see"},[e._v(e._s(e.textSee))]),e._v(" "),n("span",{class:[e.modalityInfo.seeMoreAction.class,e.seeMore]},[n("svg-import",{attrs:{height:"24px",width:"24px","svg-import":e.modalityInfo.seeMoreAction}})],1)])])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"label-includes",class:e.seeMore},[n("p",{staticClass:"label-includes-title"},[e._v("\n      "+e._s(e.modalityInfo.includes)+"\n    ")]),e._v(" "),n("div",{staticClass:"includes"},[n("div",{staticClass:"-left"},e._l(e.info[0],(function(t,o){return n("span",{key:t.key,staticClass:"topic-box",class:e.checkFirst(o)},[n("bullet",{attrs:{bullets:t}}),e._v(" "),t.tooltip?n("info-tooltip",{attrs:{content:t.tooltip}}):e._e()],1)})),0),e._v(" "),n("div",{staticClass:"-right"},e._l(e.info[1],(function(t,o){return n("span",{key:t.key,staticClass:"topic-box",class:e.checkFirst(o)},[n("bullet",{attrs:{bullets:t}})],1)})),0)]),e._v(" "),e.show?n("span",{staticClass:"wrapper-more",on:{click:function(t){return e.isClickable(e.modalityInfo.callToActions)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.isXsTablet,expression:"isXsTablet"}],staticClass:"more"},[n("span",{staticClass:"see"},[e._v(e._s(e.textSee))]),e._v(" "),n("span",{class:[e.modalityInfo.seeMoreAction.class,e.seeMore]},[n("svg-import",{attrs:{height:"24px",width:"24px","svg-import":e.modalityInfo.seeMoreAction}})],1)])]):e._e()])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ImgStep:n(560).default,CButton:n(400).default,SvgImport:n(181).default,Bullet:n(415).default,InfoTooltip:n(483).default})}}]);