(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{51:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),l=(a(56),a(14)),u=a(42),s=a.n(u),o=a(43),m=a.n(o),f=a(44),b=a.n(f),d=(a(60),function(e){var t=e.data,a=Object(l.b)(),n=t.id,r=t.title,i=t.isBest;return c.a.createElement("li",{className:"favMusicListItem"},c.a.createElement("p",{className:"favMusicListItem__title"}," ",r," "),c.a.createElement("div",{className:"favMusicListItem__removeIcon",onClick:function(){a(function(e){return{type:"REMOVE_ALBUM",payload:e}}(n))}},c.a.createElement(s.a,null)),c.a.createElement("div",{className:i?"favMusicListItem__starIcon active":"favMusicListItem__starIcon",onClick:function(){a(function(e){return{type:"ADD_TO_FAVOURITE",payload:e}}(n))}},i?c.a.createElement(m.a,null):c.a.createElement(b.a,null)))}),E=(a(62),function(){var e=Object(l.c)((function(e){return e.albums.albums})).map((function(e){return c.a.createElement(d,{data:e,key:e.id})}));return c.a.createElement("ul",{className:"favMusicList__list"},e)}),_=a(45),v=a(96),O=a(97),p=a(98),y=(a(63),function(){var e=Object(l.b)(),t=Object(n.useState)(""),a=Object(_.a)(t,2),r=a[0],i=a[1];return c.a.createElement("form",{className:"favMusicList__form"},c.a.createElement(v.a,{onChange:function(e){return function(e){i(e.target.value)}(e)},value:r,id:"standard-basic",label:"favourite album"}),c.a.createElement(O.a,{onClick:function(t){t.preventDefault();var a=Object(p.a)();r?(e(function(e,t){return{type:"ADD_ALBUM",payload:{title:e,id:t}}}(r,a)),i("")):alert("Fill album value")},type:"submit",variant:"contained",color:"primary"},"Add to List"))}),L=function(){return c.a.createElement("div",{className:"favMusicList"},c.a.createElement(y,null),c.a.createElement(E,null))},I=a(33),j=a(27),M=a(34),D={albums:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALBUM":return{albums:[].concat(Object(M.a)(e.albums),[{id:t.payload.id,title:t.payload.title,isBest:!1}])};case"REMOVE_ALBUM":return Object(j.a)(Object(j.a)({},e),{},{albums:Object(M.a)(e.albums.filter((function(e){return e.id!==t.payload})))});case"ADD_TO_FAVOURITE":var a=e.albums.findIndex((function(e){return e.id===t.payload})),n=Object(M.a)(e.albums);return n[a].isBest=!0,Object(j.a)(Object(j.a)({},e),{},{albums:n});default:return e}},A=Object(I.a)({albums:N}),S=Object(I.b)(A,function(){try{var e=localStorage.getItem("musicList");if(null===e)return;return JSON.parse(e)}catch(t){console.warn(t)}}(),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());S.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("musicList",t)}catch(a){console.warn(a)}}(S.getState())}));var g=S;i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:g},c.a.createElement(L,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.cbb73d35.chunk.js.map