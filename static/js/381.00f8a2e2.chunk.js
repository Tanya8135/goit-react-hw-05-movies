"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[381],{14:function(e,n,t){t.d(n,{$:function(){return i},T:function(){return r}});var r="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDgwNzYwYjIzMTI4OWI5NmU0ODE1YzYwNDQ1MzM5ZCIsInN1YiI6IjY0YWMwYzYzZTI0YjkzMDBlMzI3YThhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgN-PRKOtSLevLnOVfPIZ949JuxtZF7KWHhbTGJNx_E"},381:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),i=t(439),s=t(757),c=t.n(s),a=t(791),o=t(689),u=t(243),h=t(14),l="Reviews_reviews__N+PvS",v="Reviews_btn__GxSXZ",d="Reviews_boxBtn__uUuVm",f="Reviews_author__NQrvN",_="Reviews_infoAuthor__3OsNb",x=t(184),m=function(){var e=(0,o.UO)().movieId,n=(0,a.useState)([]),t=(0,i.Z)(n,2),s=t[0],m=t[1],p=(0,a.useState)(null),w=(0,i.Z)(p,2),N=w[0],j=w[1],I=(0,a.useState)(!1),Z=(0,i.Z)(I,2),b=Z[0],g=Z[1];(0,a.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={method:"GET",url:"".concat(h.T,"/movie/").concat(e,"/reviews"),params:{api_key:h.$,language:"en-US",reviews:!0},headers:{accept:"application/json",Authorization:"Bearer ".concat(h.$)}},n.next=4,u.Z.request(t);case 4:r=n.sent,m(r.data.results),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0),j("Error fetching Reviews");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);return N?(0,x.jsx)("div",{children:N}):s?(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:l}),b&&(0,x.jsxs)(x.Fragment,{children:[s&&s.length>0?(0,x.jsx)("div",{children:s.map((function(e){return(0,x.jsxs)("div",{children:[(0,x.jsxs)("h3",{className:f,children:["Author: ",e.author]}),(0,x.jsx)("p",{className:_,children:e.content})]},e.id)}))}):(0,x.jsx)("div",{children:"No Information"}),(0,x.jsx)("div",{className:d,children:(0,x.jsx)("button",{onClick:function(){g((function(e){return!e}))},className:v,children:"Close"})})]})]}):(0,x.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=381.00f8a2e2.chunk.js.map