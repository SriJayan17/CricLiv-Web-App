(this.webpackJsonpcricliv=this.webpackJsonpcricliv||[]).push([[0],{30:function(e,a,s){},41:function(e,a,s){"use strict";s.r(a);var t=s(2),c=s.n(t),n=s(22),r=s.n(n),i=s(6),l=s.n(i),j=s(10),d=s(4),o=(s(30),s(11)),m=s(3),b=s(18),h=s.n(b),u=s(0),x=function(e){e.title,e.icon;var a=Object(t.useState)(null),s=Object(d.a)(a,2),c=s[0],n=s[1];setTimeout((function(){var e=window.location.href.split("/"),a=e[e.length-1];""===a&&(a="Home"),n(a),document.getElementById(a).style.background="#fff",document.getElementById(a).style.color="#333"}),1);var r=function(e){var a;e.target.id!==c&&e.target.parentElement.id!==c&&((a=e.target.classList.contains("fas")?e.target.parentElement:e.target).style.background="#fff",a.style.color="#333",document.getElementById(c).style.background="none",document.getElementById(c).style.color="#fff",n(a.id))};return Object(u.jsx)("nav",{id:"main-navbar",children:Object(u.jsxs)("div",{id:"nav-tools",children:[Object(u.jsx)(o.b,{to:"/",className:"Link",id:"Home",onClick:r,children:Object(u.jsx)("i",{className:"fas fa-home fa-2x"})}),Object(u.jsx)(o.b,{to:"/Matches",className:"Link",id:"Matches",onClick:r,children:Object(u.jsx)("i",{className:"fas fa-calendar-alt fa-2x"})}),Object(u.jsx)(o.b,{to:"/PlayerSearch",className:"Link",id:"PlayerSearch",onClick:r,children:Object(u.jsx)("i",{className:"fas fa-chart-pie fa-2x"})}),Object(u.jsx)(o.b,{to:"/About",className:"Link",id:"About",onClick:r,children:Object(u.jsx)("i",{className:"fas fa-info-circle fa-2x"})})]})})};x.prototype={title:h.a.string.isRequired,icon:h.a.string.isRequired},x.defaultProps={title:"CricLiv",icon:"fas fa-star fa-2x"};var p=x,f=s(24),O=function(e){var a=e.scorecard;return Object(u.jsxs)("div",{id:"score-card",children:[Object(u.jsxs)("div",{id:"score-title",children:[Object(u.jsx)("div",{children:Object(u.jsx)("i",{className:"fas fa-trophy fa-2x"})}),Object(u.jsx)("h1",{className:"secondary",children:a.title})]}),Object(u.jsxs)("div",{className:"runs",children:[Object(u.jsxs)("div",{className:"team1",children:[Object(u.jsx)("h2",{children:a.team1}),Object(u.jsx)("h2",{children:a.score.map((function(e){if(e.inning.includes(a.team1))return Object(u.jsxs)("span",{children:[e.r,"/",e.w]})}))})]}),Object(u.jsxs)("div",{className:"team2",children:[Object(u.jsx)("h2",{children:a.team2}),Object(u.jsx)("h2",{children:a.score.map((function(e){if(e.inning.includes(a.team2))return Object(u.jsxs)("span",{children:[e.r,"/",e.w]})}))})]})]})]})},y=function(){return Object(u.jsxs)("div",{id:"loading",children:[Object(u.jsx)("img",{src:"https://acegif.com/wp-content/uploads/loading-36.gif",className:"loader",alt:"loading"}),Object(u.jsx)("h1",{className:"secondary",children:"Fetching details Please wait..."})]})},v=function(e){var a=e.livmatches,s=Object(t.useState)([]),c=Object(d.a)(s,2),n=c[0],r=c[1],i=function(){var e=Object(j.a)(l.a.mark((function e(){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=a.map((function(e){var a={};return a.title=e.name,a.team1=e.teams[0],a.team2=e.teams[1],a.score=e.score,a})),(t=n).push(s),console.log(t),r.apply(void 0,Object(f.a)(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){i()}),[]),Object(u.jsxs)("div",{id:"liv-matches",children:[Object(u.jsx)("i",{className:"fas fa-satellite-dish fa-2x"}),Object(u.jsx)("span",{className:"primary",children:"Live Scores"}),n.length===a.length?Object(u.jsx)("div",{id:"score-cards",children:a.map((function(e,a){return Object(u.jsx)(O,{scorecard:n[a]})}))}):null,0===n.length?Object(u.jsx)(y,{}):null]})},g=function(e){var a=e.match;return Object(u.jsxs)("div",{className:"match",onClick:function(){window.location.href="https://www.google.com/search?q=".concat(a.name).concat(a.date)},children:[Object(u.jsx)("i",{className:"fas fa-trophy"}),Object(u.jsxs)("span",{className:"secondary",children:[" ",a.name]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"date",children:a.date})]})},N=function(e){var a=e.matches;return Object(u.jsxs)("div",{className:"matches",children:[Object(u.jsx)("i",{className:"fas fa-forward fa-2x"}),Object(u.jsx)("span",{className:"title",children:" Upcoming Matches : "}),Object(u.jsx)("div",{className:"upcoming-matches",children:a.map((function(e){return Object(u.jsx)(g,{match:e})}))})]})},w=function(){return Object(u.jsxs)("div",{id:"title-card",className:"bgprimary",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{className:"logo",src:"https://media.istockphoto.com/vectors/cricket-team-vector-logo-design-vector-id1222258799?b=1&k=6&m=1222258799&s=612x612&w=0&h=k3g_cT3q5P2Spt7xy4YTIvA0NLMhazPT5JAM_L6UoVI=",alt:"Logo"}),Object(u.jsx)("h1",{className:"primary",children:"CricLiv"})]}),Object(u.jsx)("img",{src:"https://pngimg.com/uploads/cricket/cricket_PNG106.png",className:"titlecard-image1",alt:"image1"})]})},k=function(){return Object(u.jsxs)("div",{id:"welcome",className:"card bgsecondary",children:[Object(u.jsx)("h1",{className:"primary",children:"Hello , Welcome to CriLiv"}),Object(u.jsx)("p",{className:"secondary",children:"Live Scores, Match schedules, Players info and so on..."})]})},S=function(e){var a=e.stat,s=Object(t.useState)({}),c=Object(d.a)(s,2),n=c[0],r=c[1];return Object(t.useEffect)((function(){!function(e){var a={};e.map((function(e){"batting"==e.fn&&"odi"==e.matchtype&&"runs"==e.stat&&(a.odi_r=e.value),"batting"==e.fn&&"odi"==e.matchtype&&"hs"==e.stat&&(a.odi_hs=e.value),"batting"==e.fn&&"odi"==e.matchtype&&"avg"==e.stat&&(a.odi_avg=e.value),"batting"==e.fn&&"t20"==e.matchtype&&"runs"==e.stat&&(a.t20_r=e.value),"batting"==e.fn&&"t20"==e.matchtype&&"hs"==e.stat&&(a.t20_hs=e.value),"batting"==e.fn&&"t20"==e.matchtype&&"avg"==e.stat&&(a.t20_avg=e.value)})),r(a)}(a.stats)}),[]),Object(u.jsxs)("div",{id:"player",children:[Object(u.jsx)("i",{className:"fas fa-star fa-2x"}),Object(u.jsxs)("span",{className:"title",children:[" ",a.name]}),Object(u.jsxs)("div",{id:"bio",children:[a.playerImg?Object(u.jsx)("img",{src:a.playerImg,alt:"playerimage",className:"profile-pic"}):Object(u.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",alt:"playerimage",className:"profile-pic"}),""!==a.profile?Object(u.jsx)("h1",{className:"secondary",children:a.profile}):Object(u.jsx)("h1",{className:"secondary",children:"Profile Deatils haven't been uploaded yet."})]}),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsxs)("div",{id:"info",children:[Object(u.jsx)("h1",{children:"Personal Deatils :"}),Object(u.jsxs)("div",{className:"info-grid",children:[Object(u.jsx)("p",{className:"secondary",children:"Name"}),Object(u.jsx)("p",{className:"secondary",children:a.name})]}),Object(u.jsxs)("div",{className:"info-grid",children:[Object(u.jsx)("p",{className:"secondary",children:"DOB"}),Object(u.jsx)("p",{className:"secondary",children:a.dateOfBirth.slice(0,a.dateOfBirth.length-9)})]})]}),Object(u.jsxs)("div",{id:"cric-info",children:[Object(u.jsx)("h1",{children:"Player Deatils :"}),Object(u.jsxs)("div",{className:"info-grid",children:[Object(u.jsx)("p",{className:"secondary",children:"Batting Style"}),Object(u.jsx)("p",{className:"secondary",children:a.battingStyle})]}),Object(u.jsxs)("div",{className:"info-grid",children:[Object(u.jsx)("p",{className:"secondary",children:"Bowling Style"}),Object(u.jsx)("p",{className:"secondary",children:a.bowlingStyle})]}),Object(u.jsxs)("div",{className:"info-grid",children:[Object(u.jsx)("p",{className:"secondary",children:"Role"}),Object(u.jsx)("p",{className:"secondary",children:a.role})]}),Object(u.jsxs)("div",{className:"info-grid",children:[Object(u.jsx)("p",{className:"secondary",children:"Country"}),Object(u.jsx)("p",{className:"secondary",children:a.country})]})]}),Object(u.jsxs)("div",{id:"batting-stats",children:[Object(u.jsx)("h1",{children:"Batting Stats : "}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{className:"formats",children:[Object(u.jsx)("p",{className:"secondary",children:"Format"}),Object(u.jsx)("p",{className:"secondary",children:"Runs"}),Object(u.jsx)("p",{className:"secondary",children:"Highest"}),Object(u.jsx)("p",{className:"secondary",children:"Average"})]}),Object(u.jsxs)("div",{className:"formats",children:[Object(u.jsx)("p",{className:"secondary",children:"ODIs"}),Object(u.jsx)("p",{className:"secondary",children:n.odi_r?n.odi_r:"-"}),Object(u.jsx)("p",{className:"secondary",children:n.odi_hs?n.odi_hs:"-"}),Object(u.jsx)("p",{className:"secondary",children:n.odi_avg?n.odi_avg:"-"})]}),Object(u.jsxs)("div",{className:"formats",children:[Object(u.jsx)("p",{className:"secondary",children:"T20s"}),Object(u.jsx)("p",{className:"secondary",children:n.t20_r?n.t20_r:"-"}),Object(u.jsx)("p",{className:"secondary",children:n.t20_hs?n.t20_hs:"-"}),Object(u.jsx)("p",{className:"secondary",children:n.t20_avg?n.t20_avg:"-"})]})]})]})]})]})},E=function(e){var a=e.players,s=e.selectplayer,c=e.clear,n=function(e){var t=e.target.id,n=a["".concat(t)].id;console.log(n),s(n),c(null)},r=Object(t.useState)([]),i=Object(d.a)(r,2);i[0],i[1];return Object(t.useLayoutEffect)((function(){console.log(a.object)}),[]),Object(u.jsxs)("div",{id:"players",children:[Object(u.jsx)("h1",{className:"secondary",children:"Player names matched as per your search :"}),a.map((function(e,a){return Object(u.jsxs)("div",{id:a,className:"player",onClick:n,children:[Object(u.jsx)("img",{id:a,className:"player-image",src:e.playerImg,alt:"player-img",onError:function(e){e.target.src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"}}),Object(u.jsx)("h1",{id:a,className:"secondary",children:e.name})]})}))]})},_=function(){return Object(u.jsx)("div",{className:"alert",children:Object(u.jsx)("h1",{className:"secondary",children:"Please Enter a valid player name!"})})},I=function(){var e=Object(t.useState)(null),a=Object(d.a)(e,2),s=a[0],c=a[1],n=Object(t.useState)(null),r=Object(d.a)(n,2),i=r[0],o=r[1],m=Object(t.useState)(""),b=Object(d.a)(m,2),h=b[0],x=b[1],p=Object(t.useState)(!1),f=Object(d.a)(p,2),O=f[0],v=f[1],g=function(){var e=Object(j.a)(l.a.mark((function e(a){var s,t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.cricapi.com/v1/players?apikey=6d7d3568-e02b-4113-8c84-fa72407196fd&offset=0&search=".concat(a));case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,n=t.data,r=n.map((function(e){return e.playerImg="https://h.cricapi.com/img/players/".concat(e.id,".jpg"),e})),console.log(r),v(!1),c(r);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(l.a.mark((function e(a){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://api.cricapi.com/v1/players_info?apikey=6d7d3568-e02b-4113-8c84-fa72407196fd&id=".concat(a));case 3:return s=e.sent,e.next=6,s.json();case 6:t=e.sent,v(!1),o(t.data);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"player-search",children:[Object(u.jsx)("i",{className:"fas fa-search fa-2x",children:" "}),Object(u.jsx)("span",{className:"primary",children:" Players Stats :"}),Object(u.jsx)("p",{className:"secondary",children:"Search the stats of any cricket player using his name."}),Object(u.jsxs)("form",{id:"search-form",onSubmit:function(e){e.preventDefault();var a=document.getElementById("playername").value;""!==a&&null===a.match(/^[0-9]+$/)?(v(!0),o(null),g(a),document.getElementById("playername").value="",x(a)):(x(null),setTimeout((function(){x("")}),2e3))},children:[Object(u.jsx)("input",{type:"text",id:"playername",placeholder:"Enter player name..."}),Object(u.jsx)("input",{type:"submit",value:"Get Stats"})]}),!0===O&&null!==h?Object(u.jsx)(y,{}):null,null===h?Object(u.jsx)(_,{}):null,null!==s&&!0!==O?Object(u.jsx)(E,{players:s,selectplayer:N,clear:c}):null,null===s&&null===i&&!1===O&&null!==h?Object(u.jsxs)("div",{id:"search-results",children:[Object(u.jsx)("i",{className:"fas fa-user-secret fa-4x"}),Object(u.jsx)("h1",{className:"secondary",children:"Search results will appear here.."})]}):null,null!==i&&!0!==O?Object(u.jsx)(S,{stat:i}):null]})},P=function(){return Object(u.jsxs)("div",{id:"success",children:[Object(u.jsx)("i",{className:"fas fa-check-circle fa-2x"}),Object(u.jsx)("span",{className:"secondary",children:"Message sent Successfully"})]})},B=function(){return Object(u.jsxs)("div",{id:"failed",children:[Object(u.jsx)("i",{className:"fas fa-times-circle fa-2x"}),Object(u.jsx)("span",{className:"secondary",children:"Please Enter a valid Name , email and Message"})]})},C=function(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),s=a[0],c=a[1],n=Object(t.useState)(!1),r=Object(d.a)(n,2),i=r[0],l=r[1];return Object(u.jsxs)("div",{id:"contact-sec",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("i",{className:"fas fa-paper-plane fa-2x"}),Object(u.jsx)("span",{className:"primary",children:"Contact us!"})]}),Object(u.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault();var a=document.getElementById("name"),s=document.getElementById("email"),t=document.getElementById("msg");""!==a.value&&""!==s.value&&""!==t.value?(c(!0),setTimeout((function(){c(!1)}),2e3)):(l(!0),setTimeout((function(){l(!1)}),2e3))},children:[Object(u.jsx)("input",{name:"name",id:"name",type:"text",placeholder:"Enter your name"}),Object(u.jsx)("input",{name:"email",id:"email",type:"email",placeholder:"Enter your email-id"}),Object(u.jsx)("textarea",{name:"message",id:"msg",placeholder:"Your message here"}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("input",{type:"submit",value:"Send Message"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("msg").value=""},children:"Clear"})]})]}),s?Object(u.jsx)(P,{}):null,i?Object(u.jsx)(B,{}):null]})},L=function(){return Object(u.jsxs)("div",{id:"founder",children:[Object(u.jsx)("i",{className:"fas fa-laptop-code fa-2x"}),Object(u.jsx)("span",{className:"primary",children:"Developed By..."}),Object(u.jsxs)("div",{id:"dev",children:[Object(u.jsx)("img",{src:"https://srijayanportfolio.netlify.app/Image_resorces/me.jpg",alt:"developer",className:"image"}),Object(u.jsx)("h1",{className:"secondary",children:"Hi this is Sri Jayan.I'm really passionate on cricket so i have developed this Web Application to offer a better UI to all Cricket fans.If you have any suggestions or comments contact me."})]})]})},A=function(){return Object(u.jsxs)("div",{id:"about",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("i",{className:"fas fa-lightbulb fa-2x"}),Object(u.jsx)("span",{className:"primary",children:"About this App :"})]}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h2",{children:"CricLive Version 1.0.0"}),Object(u.jsx)("h1",{className:"secondary",children:"CricLive App gives you updates about Live scores, schedules of upcoming Cricket matches and also you can also search for the stats of any player using the Player stats section."})]}),Object(u.jsx)(C,{}),Object(u.jsx)(L,{})]})},M=function(){return Object(u.jsxs)("div",{id:"main-footer",children:[Object(u.jsxs)("div",{id:"email-letter",children:[Object(u.jsxs)("p",{className:"center",children:[Object(u.jsx)("i",{className:"fas fa-envelope fa-2x"}),Object(u.jsx)("span",{className:"secondary",children:"Email-letter"})]}),Object(u.jsx)("p",{children:"Subscribe to our Email Letter to get instant update about Latest Cricket news."}),Object(u.jsxs)("form",{id:"eletter-form",children:[Object(u.jsx)("input",{type:"email",placeholder:"Enter your Email-id"}),Object(u.jsx)("input",{type:"submit",value:"Subscribe"})]})]}),Object(u.jsxs)("div",{id:"social-media",children:[Object(u.jsxs)("p",{className:"center",children:[Object(u.jsx)("i",{className:"fas fa-comments fa-2x"}),Object(u.jsx)("span",{className:"secondary",children:"Follow us"})]}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)("a",{href:"https://www.instagram.com/sri_jayan_17/",target:"blank",children:Object(u.jsx)("i",{className:"fab fa-instagram fa-2x"})}),Object(u.jsx)("a",{href:"https://www.facebook.com/esrijayan.srijayan",target:"blank",children:Object(u.jsx)("i",{className:"fab fa-facebook fa-2x"})}),Object(u.jsx)("a",{href:"https://github.com/SriJayan17",target:"blank",children:Object(u.jsx)("i",{className:"fab fa-github fa-2x"})}),Object(u.jsx)("a",{href:"https://www.youtube.com/",target:"blank",children:Object(u.jsx)("i",{className:"fab fa-youtube fa-2x"})})]}),Object(u.jsx)("p",{className:"center",children:"Support us by following on social media."})]}),Object(u.jsxs)("div",{id:"contact",children:[Object(u.jsxs)("p",{className:"center",children:[Object(u.jsx)("i",{className:"fas fa-phone-square-alt fa-2x"}),Object(u.jsx)("span",{className:"secondary",children:"Contact"})]}),Object(u.jsx)("p",{children:"To contact us reagrding promotion or queries text me on whatsapp 9361482979."})]}),Object(u.jsx)("div",{id:"copy",children:Object(u.jsxs)("p",{className:"center",children:[Object(u.jsx)("i",{className:"fas fa-copyright fa-2x"}),Object(u.jsx)("span",{className:"secondary",children:"CricLiv "}),Object(u.jsx)("i",{className:"fas fa-trademark"}),Object(u.jsx)("span",{className:"secondary",children:" All rights Reserved 2025"})]})})]})};var D=function(){var e=Object(t.useState)([]),a=Object(d.a)(e,2),s=a[0],c=a[1],n=Object(t.useState)([]),r=Object(d.a)(n,2),i=r[0],b=r[1],h=function(){var e=Object(j.a)(l.a.mark((function e(){var a,s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.cricapi.com/v1/matches?apikey=6d7d3568-e02b-4113-8c84-fa72407196fd&offset=0");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t=s.data,c(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.cricapi.com/v1/currentMatches?apikey=6d7d3568-e02b-4113-8c84-fa72407196fd&offset=0");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,b(s.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){x(),h()}),[]),Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{children:Object(u.jsx)(p,{})}),Object(u.jsxs)("div",{id:"main-area",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(w,{}),Object(u.jsx)(k,{})]}),Object(u.jsxs)(m.c,{children:[i.length>0?Object(u.jsx)(m.a,{exact:!0,path:"/",render:function(e){return Object(u.jsx)(v,{livmatches:i})}}):null,s.length>0?Object(u.jsx)(m.a,{exact:!0,path:"/Matches",render:function(e){return Object(u.jsx)(N,{matches:s})}}):Object(u.jsx)(y,{}),Object(u.jsx)(m.a,{exact:!0,path:"/PlayerSearch",render:function(e){return Object(u.jsx)(I,{})}}),Object(u.jsx)(m.a,{exact:!0,path:"/About",render:function(e){return Object(u.jsx)(A,{})}})]}),Object(u.jsx)(M,{})]})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.808555e6.chunk.js.map