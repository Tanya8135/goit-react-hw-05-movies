"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{14:function(e,t,n){n.d(t,{$:function(){return a},T:function(){return i}});var i="https://api.themoviedb.org/3",a="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDgwNzYwYjIzMTI4OWI5NmU0ODE1YzYwNDQ1MzM5ZCIsInN1YiI6IjY0YWMwYzYzZTI0YjkzMDBlMzI3YThhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgN-PRKOtSLevLnOVfPIZ949JuxtZF7KWHhbTGJNx_E"},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(861),a=n(439),s=n(757),r=n.n(s),c=n(791),o=n(87),u=n(243),l=n(14),h="Movies_boxMovies__Hijky",_="Movies_search__VjLZn",v="Movies_titleHome__aHuXE",d="Movies_itemMovie__C74R-",p="Movies_input__KrUqs",f="Movies_btnSearch__OTpvi",m="Movies_textColor__l-2Sz",x=n(184),M=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),n=t[0],s=t[1],M=(0,c.useState)([]),j=(0,a.Z)(M,2),I=j[0],N=j[1],z=function(){var e=(0,i.Z)(r().mark((function e(){var t,i,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",url:"".concat(l.T,"/search/movie"),params:{query:n,language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(l.$)}},e.next=4,u.Z.request(t);case 4:i=e.sent,a=i.data.results,N(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("h2",{className:v,children:"Movies"}),(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("input",{type:"text",placeholder:"Enter name",value:n,onChange:function(e){s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&z()},className:p}),(0,x.jsx)("button",{onClick:function(){z(n)},className:f,children:"Search"})]}),(0,x.jsx)("ul",{children:I.map((function(e){return(0,x.jsx)("li",{className:d,children:(0,x.jsx)(o.OL,{to:"/movies/".concat(e.id),className:m,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=881.553370eb.chunk.js.map