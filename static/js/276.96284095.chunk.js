"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{672:function(n,e,r){r.d(e,{Z:function(){return h}});r(791);var t,a,o,c=r(689),i=r(766),u=r(87),s=r(867),p=s.ZP.ul(t||(t=(0,i.Z)(["\n  margin-top: 25px;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  margin-bottom: 10px;\n  font-family: 'Trebuchet MS', 'Lucida Sans';\n  padding: 7px 20px;\n  border-radius: 5px;\n  border-left: 10px solid #f05d22;\n  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),\n    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),\n    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);\n  font-size: 20px;\n  letter-spacing: 2px;\n  transition: 0.3s all linear;\n  &: nth-child(2n + 0) {\n    border-color: #8bc63e;\n  }\n  &:nth-child(3n + 0) {\n    border-color: #fcba30;\n  }\n  &:nth-child(4n + 0) {\n    border-color: #1ccfc9;\n  }\n  &:nth-child(5n + 0) {\n    border-color: #493224;\n  }\n"]))),d=(0,s.ZP)(u.rU)(o||(o=(0,i.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),l=r(184),h=function(n){var e=n.movies,r=(0,c.TH)();return e&&0!==e.length?(0,l.jsx)(p,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,l.jsx)(f,{children:(0,l.jsx)(d,{to:"/movies/".concat(e),state:{from:r},children:t})},e)}))}):(0,l.jsx)("p",{children:" Movies not found"})}},256:function(n,e,r){r.d(e,{IQ:function(){return p},Jh:function(){return f},TP:function(){return s},Wp:function(){return u},zp:function(){return d}});var t=r(861),a=r(757),o=r.n(a),c=r(340),i="3286f85825625e7e7de93d878ce7cd80";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,t.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},276:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,o,c=r(861),i=r(439),u=r(757),s=r.n(u),p=r(263),f=r(672),d=r(791),l=r(766),h=r(867),x=h.ZP.form(t||(t=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 300px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n"]))),v=h.ZP.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=h.ZP.button(o||(o=(0,l.Z)(["\n  // display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),b=r(185),m=r(184),Z=function(n){var e=n.setSearchParams,r=(0,d.useState)(""),t=(0,i.Z)(r,2),a=t[0],o=t[1];return(0,m.jsxs)(x,{onSubmit:function(n){n.preventDefault(),e({query:a}),n.target.reset()},children:[(0,m.jsx)(v,{name:"searchMovie",type:"text",id:"search",placeholder:"Search movie",onChange:function(n){var e=n.target.value;o(e)}}),(0,m.jsx)(g,{children:(0,m.jsx)(b.dVI,{})})]})},k=r(256),w=r(87),y=function(){var n=(0,d.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,d.useState)(!1),o=(0,i.Z)(a,2),u=o[0],l=o[1],h=(0,w.lr)(),x=(0,i.Z)(h,2),v=x[0],g=x[1];return(0,d.useEffect)((function(){var n=v.get("query");if(n){var e=function(){var e=(0,c.Z)(s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,(0,k.zp)(n);case 4:r=e.sent,a=r.results,t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{setSearchParams:g}),u&&(0,m.jsx)(p.Z,{}),r.length>0&&(0,m.jsx)(f.Z,{movies:r})]})}}}]);
//# sourceMappingURL=276.96284095.chunk.js.map