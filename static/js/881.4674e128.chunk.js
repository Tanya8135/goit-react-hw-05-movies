"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{14:function(e,t,n){n.d(t,{$:function(){return s},T:function(){return a}});var a="https://api.themoviedb.org/3",s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDgwNzYwYjIzMTI4OWI5NmU0ODE1YzYwNDQ1MzM5ZCIsInN1YiI6IjY0YWMwYzYzZTI0YjkzMDBlMzI3YThhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgN-PRKOtSLevLnOVfPIZ949JuxtZF7KWHhbTGJNx_E"},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(861),s=n(439),c=n(757),r=n.n(c),i=n(791),o=n(87),u=n(243),l=n(14),h="Movies_boxMovies__Hijky",v="Movies_search__VjLZn",_="Movies_titleHome__aHuXE",f="Movies_itemMovie__C74R-",m="Movies_input__KrUqs",d="Movies_btnSearch__OTpvi",p="Movies_textColor__l-2Sz",I=n(184),x=function(){var e=(0,o.lr)(),t=(0,s.Z)(e,2),n=t[0],c=t[1],x=localStorage.getItem("searchRequest"),M=(0,i.useState)(n.get("name")||x||""),j=(0,s.Z)(M,2),N=j[0],g=j[1],Z=(0,i.useState)([]),z=(0,s.Z)(Z,2),w=z[0],y=z[1],J=(0,i.useState)(""),Y=(0,s.Z)(J,2),b=Y[0],k=Y[1];(0,i.useEffect)((function(){N&&N!==b&&S(N)}),[N,b]),(0,i.useEffect)((function(){localStorage.setItem("searchRequest",N)}),[N]);var C=function(){k(N),E(N)},S=function(){var e=(0,a.Z)(r().mark((function e(){var t,n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",url:"".concat(l.T,"/search/movie"),params:{query:N,language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(l.$)}},e.next=4,u.Z.request(t);case 4:n=e.sent,a=n.data.results,y(a),k(N),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),E=function(e){c(""!==e?{name:e}:{})};return(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)("h2",{className:_,children:"Movies"}),(0,I.jsxs)("div",{className:v,children:[(0,I.jsx)("input",{type:"text",placeholder:"Enter name",value:N,onChange:function(e){g(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&C()},className:m}),(0,I.jsx)("button",{onClick:C,className:d,children:"Search"})]}),(0,I.jsx)("ul",{children:w.map((function(e){return(0,I.jsx)("li",{className:f,children:(0,I.jsx)(o.OL,{to:"/movies/".concat(e.id),state:{from:"/movies?query=".concat(N)},className:p,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=881.4674e128.chunk.js.map