(window["webpackJsonpsearch-food-refactor"]=window["webpackJsonpsearch-food-refactor"]||[]).push([[0],{101:function(e,t,a){e.exports=a(216)},106:function(e,t,a){},107:function(e,t,a){},211:function(e,t,a){e.exports=a.p+"static/media/format_align_right.988d3227.svg"},212:function(e,t,a){e.exports=a.p+"static/media/format_align_center.473edf91.svg"},213:function(e,t,a){e.exports=a.p+"static/media/format_align_justify.0a2f8cbd.svg"},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),l=a.n(c),i=a(21),o=a(72),s=a.n(o),u=a(73),m=a.n(u),f=a(74),d=a.n(f),p=a(75),g=a.n(p),b=a(76),v=a.n(b),y=a(77),E=a.n(y),h=a(78),k=a.n(h),_=a(79),O=a.n(_),x=a(80),j=a.n(x),w=(a(106),function(e){var t=e.createFunc,a=e.isDay,n=e.setIsDay;return r.a.createElement("div",{className:"sidebar",style:{backgroundColor:a?"#2F419B":"#26252A"}},r.a.createElement("h1",null,"FreeNote"),r.a.createElement("button",{onClick:t,style:{backgroundColor:a?"#fff":"#fed32c"}},r.a.createElement("img",{src:s.a,alt:"add",style:{backgroundColor:a?"#2F419B":"#26252A"}}),r.a.createElement("span",null,"\u65b0\u589e\u7b46\u8a18")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:m.a,alt:"file"}),r.a.createElement("span",null,"\u6240\u6709\u7b46\u8a18")),r.a.createElement("li",null,r.a.createElement("img",{src:d.a,alt:"file"}),r.a.createElement("span",null,"\u6377\u5f91")),r.a.createElement("li",null,r.a.createElement("img",{src:g.a,alt:"label",style:{transform:"rotate(45deg)"}}),r.a.createElement("span",null,"\u6a19\u7c64")),r.a.createElement("li",null,r.a.createElement("img",{src:v.a,alt:"calendar"}),r.a.createElement("span",null,"\u6708\u66c6")),r.a.createElement("li",null,r.a.createElement("img",{src:E.a,alt:"share"}),r.a.createElement("span",null,"\u8207\u6211\u5171\u7528")),r.a.createElement("li",null,r.a.createElement("img",{src:k.a,alt:"delete"}),r.a.createElement("span",null,"\u5783\u573e\u6876"))),r.a.createElement("div",null,r.a.createElement("span",null,"\u6a21\u5f0f"),r.a.createElement("img",{src:O.a,alt:"day",onClick:function(){return n(!0)},style:{backgroundColor:a?"#fff":"transparent"}}),r.a.createElement("img",{src:j.a,alt:"night",onClick:function(){return n(!1)},style:{backgroundColor:a?"transparent":"#fff"}})))}),C=(a(107),function(e){var t=e.isDay;return r.a.createElement("div",{className:"searchBar",style:{backgroundColor:t?"#F4F6F7":"#343338"}})}),D=a(47),S=a(81),N=a(82),F=a(99),P=a(83),B=a(100),I=a(98),A=a(3),J=JSON.parse(localStorage.getItem("content")),M=A.n.fromJSON(J||{document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",text:"\u8acb\u5beb\u4e0b\u5167\u5bb9"}]}]}});function K(e){var t=e.type,a=e.key;return{onKeyDown:function(e,n,r){if(!e.ctrlKey||e.key!==a)return r();e.preventDefault(),n.toggleMark(t)}}}var L=[K({key:"b",type:"bold"}),K({key:"`",type:"code"}),K({key:"i",type:"italic"}),K({key:"~",type:"strikethrough"}),K({key:"u",type:"underline"})],W=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(F.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(c)))).state={value:M},a.onChange=function(e){var t=e.value;a.setState({value:t})},a.renderMark=function(e,t,a){switch(e.mark.type){case"bold":return r.a.createElement("strong",null,e.children);case"code":return r.a.createElement("code",null,e.children);case"italic":return r.a.createElement("em",null,e.children);case"strikethrough":return r.a.createElement("del",null,e.children);case"underline":return r.a.createElement("u",null,e.children);default:return a()}},a}return Object(B.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,{value:this.state.value,plugins:L,onChange:this.onChange,onClick:function(){return console.log("t")},renderMark:this.renderMark})}}]),t}(r.a.Component),q=a(87),$=a.n(q),z=a(88),G=a.n(z),H=a(89),Q=a.n(H),R=a(90),T=a.n(R),U=a(91),V=a.n(U),X=a(92),Y=a.n(X),Z=(a(211),a(212),a(213),a(93)),ee=a.n(Z),te=a(94),ae=a.n(te),ne=a(95),re=a.n(ne),ce=a(96),le=a.n(ce),ie=a(97),oe=a.n(ie);a(214);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ue=function(e){var t=e.isDay,a=Object(n.useState)({}),c=Object(i.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){function e(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(D.a)({},e.target.alt,!l[e.target.alt])))}var t=document.querySelector(".note__icons").childNodes,a=!0,n=!1,r=void 0;try{for(var c,i=t[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){c.value.addEventListener("click",e)}}catch(s){n=!0,r=s}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return function(){var a=!0,n=!1,r=void 0;try{for(var c,l=t[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){c.value.removeEventListener("click",e)}}catch(s){n=!0,r=s}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}}})),r.a.createElement("div",{className:"note",style:{backgroundColor:t?"#fff":"#26252A"}},r.a.createElement("div",{className:"note__icons"},r.a.createElement("img",{src:$.a,alt:"bold"}),r.a.createElement("img",{src:G.a,alt:"italic"}),r.a.createElement("img",{src:Q.a,alt:"underline"}),r.a.createElement("img",{src:T.a,alt:"format_indent_increase"}),r.a.createElement("img",{src:V.a,alt:"format_indent_decrease"}),r.a.createElement("img",{src:Y.a,alt:"format_align_left"}),r.a.createElement("img",{src:ee.a,alt:"format_line_spacing"}),r.a.createElement("img",{src:ae.a,alt:"format_list_bulleted"}),r.a.createElement("img",{src:re.a,alt:"insert_link"}),r.a.createElement("img",{src:le.a,alt:"image"}),r.a.createElement("img",{src:oe.a,alt:"attachment"})),r.a.createElement("div",null,r.a.createElement(W,{status:l})))},me=(a(215),function(){var e=Object(n.useState)(localStorage.getItem("number")||0),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],u=o[1];return r.a.createElement("div",{className:"container"},r.a.createElement(w,{createFunc:function(){c(a+1)},isDay:s,setIsDay:u}),r.a.createElement(C,{isDay:s}),r.a.createElement(ue,{isDay:s}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){e.exports=a.p+"static/media/add.4c35bb93.svg"},73:function(e,t,a){e.exports=a.p+"static/media/file.b8a4237b.svg"},74:function(e,t,a){e.exports=a.p+"static/media/bookmark-star.3ae5967d.svg"},75:function(e,t,a){e.exports=a.p+"static/media/label.74688b4f.svg"},76:function(e,t,a){e.exports=a.p+"static/media/calendar_today.e690b02a.svg"},77:function(e,t,a){e.exports=a.p+"static/media/people.32b92487.svg"},78:function(e,t,a){e.exports=a.p+"static/media/delete.2ce373a5.svg"},79:function(e,t,a){e.exports=a.p+"static/media/wb_sunny.9b2d2e3d.svg"},80:function(e,t,a){e.exports=a.p+"static/media/nights_stay.42b709ed.svg"},87:function(e,t,a){e.exports=a.p+"static/media/format_bold.b3be8994.svg"},88:function(e,t,a){e.exports=a.p+"static/media/format_italic.37e5b25f.svg"},89:function(e,t,a){e.exports=a.p+"static/media/format_underline.9d1ce7df.svg"},90:function(e,t,a){e.exports=a.p+"static/media/format_indent_increase.bc17da31.svg"},91:function(e,t,a){e.exports=a.p+"static/media/format_indent_decrease.6d5d67e7.svg"},92:function(e,t,a){e.exports=a.p+"static/media/format_align_left.1b7fb0f2.svg"},93:function(e,t,a){e.exports=a.p+"static/media/format_line_spacing.15db8c42.svg"},94:function(e,t,a){e.exports=a.p+"static/media/format_list_bulleted.91bc12e3.svg"},95:function(e,t,a){e.exports=a.p+"static/media/insert_link.50106c10.svg"},96:function(e,t,a){e.exports=a.p+"static/media/image.504ac7ce.svg"},97:function(e,t,a){e.exports=a.p+"static/media/attachment.d32f26bd.svg"}},[[101,1,2]]]);
//# sourceMappingURL=main.09374bc7.chunk.js.map