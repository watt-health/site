(this.webpackJsonphealth=this.webpackJsonphealth||[]).push([[0],{166:function(n,e,t){n.exports=t(388)},388:function(n,e,t){"use strict";t.r(e);t(167);var r=t(0),a=t.n(r),i=t(156),o=t.n(i),l=t(4),c=t(3),u=t(108),s=t(33),m=t(82),f=t(389);function p(){var n=Object(l.a)(["\n  height: 80%;\n  margin: auto 0;\n"]);return p=function(){return n},n}var d=c.b.img(p()),b=function(){return a.a.createElement(f.a,{as:d,src:"navbar.png",alt:"Watt Health"})};function h(){var n=Object(l.a)(["\n  position: relative;\n  margin-top: .7rem;\n  cursor: pointer;\n  display: block;\n  outline: none;\n\n  &[tabindex]:focus {\n    outline: none;\n    border: none;\n    box-shadow: none;\n  }\n\n  &:focus:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -0.7rem;\n    right: -0.7rem;\n    left: -0.7rem;\n    bottom: -0.7rem;\n    border: 1px solid #ffec00;\n    box-shadow: 0px 0px 5px  #ffec00;\n    pointer-events: none;\n  }\n\n  & span {\n    background: #ffec00;\n    display: block;\n    position: relative;\n    width: 3.5rem;\n    height: .4rem;\n    margin-bottom: .7rem;\n    transition: all ease-in-out 0.2s;\n  }\n\n  .open span:nth-child(2) {\n      opacity: 0;\n    }\n\n  .open span:nth-child(3) {\n    transform: rotate(45deg);\n    top: -11px;\n  }\n\n  .open span:nth-child(1) {\n    transform: rotate(-45deg);\n    top: 11px;\n  }\n\n"]);return h=function(){return n},n}var g=c.b.div(h()),v=function(n){var e=n.handleNavbar,t=n.navbarState;return a.a.createElement(f.a,{as:g,onClick:e},a.a.createElement("div",{className:t?"open":""},a.a.createElement("span",null,"\xa0"),a.a.createElement("span",null,"\xa0"),a.a.createElement("span",null,"\xa0")))};function x(){var n=Object(l.a)(["\n  list-style-type: none;\n  padding: 2rem 1rem 2rem 2rem;\n\n  & li {\n    transition: all 300ms linear 0s;\n  }       \n\n  & a {\n    font-size: 1.4rem;\n    line-height: 2;\n    color: #000000;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      color: #ffec00;\n      border-bottom: 1px solid #ffec00;\n    }\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(l.a)(["\n  background: #ffffff;\n  position: fixed;\n  top: 6.5rem;\n  left: 0;\n  right: 0;\n  z-index: 1;\n"]);return E=function(){return n},n}var w=c.b.div(E()),y=c.b.ul(x()),j=function(n){var e=n.navbarState;return a.a.createElement(s.b,{from:{css:{transform:"translate3d(0, 0, 0)"}},to:{css:{transform:"translate3d(0, -200px, 0)"}},playState:e?"reverse":"play",duration:.35},a.a.createElement(w,null,a.a.createElement(y,null,a.a.createElement(f.a,{as:"li"},a.a.createElement("a",{href:"/"},"Musique,")),a.a.createElement(f.a,{as:"li"},a.a.createElement("a",{href:"/"},"Sport,")),a.a.createElement(f.a,{as:"li"},a.a.createElement("a",{href:"/"},"Sant\xe9,")),a.a.createElement(f.a,{as:"li"},a.a.createElement("a",{href:"/"},"\u2026 quoi d\u2019autre ?")))))};function O(){var n=Object(l.a)(["\n  margin: auto 0;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(l.a)(["\n  justify-self: end;\n  list-style-type: none;\n  margin: auto 0;\n\n  & a {\n    color: #000000;\n    text-transform: uppercase;\n    font-weight: 600;\n    border-bottom: 1px solid transparent;\n    margin: 0 1.5rem;\n    transition: all 300ms linear 0s;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      color: #ffec00;\n      border-bottom: 1px solid #ffec00;\n    }\n\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(l.a)(["\n  max-width: 120rem;\n  display: flex;\n  margin: auto;\n  padding: 0 2rem;\n  justify-content: space-between;\n  height: 7rem;\n"]);return z=function(){return n},n}function S(){var n=Object(l.a)(["\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  z-index: 2;\n  font-size: 1.4rem;\n"]);return S=function(){return n},n}var N=c.b.nav(S()),q=c.b.div(z()),M=c.b.ul(k()),I=c.b.div(O()),U=function(){var n=Object(r.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.b,{from:{transform:"translate3d(0, -10rem, 0)"},to:{transform:"translate3d(0, 0, 0)"}},a.a.createElement(N,null,a.a.createElement(q,null,a.a.createElement(b,null),a.a.createElement(s.b,{from:{transform:"translate3d(0, 30px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1},delay:.8,ease:"Elastic.easeInOut"},a.a.createElement(M,null,a.a.createElement(f.a,{as:"a"},"Musique,"),a.a.createElement(f.a,{as:"a"},"Sport,"),a.a.createElement(f.a,{as:"a"},"Sant\xe9,"),a.a.createElement(f.a,{as:"a"},"\u2026 quoi d\u2019autre ?"))),a.a.createElement(I,null,a.a.createElement(v,{navbarState:t,handleNavbar:function(){return i((function(n){return!n}))}}))))),a.a.createElement(j,{navbarState:t}))};function _(){var n=Object(l.a)(["\n"]);return _=function(){return n},n}function A(){var n=Object(l.a)(["\n"]);return A=function(){return n},n}function F(){var n=Object(l.a)(["\n  background: rgba(255, 255, 255, 0.8);\n  min-height: 33%;\n  padding: 2rem 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  h2 {\n    font-size: 3.5rem;\n  }\n\n  p {\n    font-size: 2rem;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return F=function(){return n},n}function W(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"]);return W=function(){return n},n}var L=c.b.div(W(),(function(n){return n.bgImg})),B=c.b.div(F()),C=c.b.div(A()),H=c.b.div(_());function T(){var n=Object(l.a)(["\n  color: #000000;\n  padding: 0.7em calc(0.7em * 1.2);\n  margin: calc(0.7em * 1.2) 0.7rem;\n  display: inline-block;\n  border: 3px solid transparent;\n  position: relative;\n  font-size: 2em;\n  cursor: pointer;\n  letter-spacing: 0.07em;\n  white-space: nowrap;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  .text {\n    transform: translate3d(0, 0.7em, 0);\n    display: block;\n    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n  }\n\n  &:after {\n    position: absolute;\n    content: '';\n    bottom: -3px;\n    left: calc(0.7em * 1.2);\n    right: calc(0.7em * 1.2);\n    height: 3px;\n    background: #ffec00;\n    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;\n    transform-origin: left;\n  }\n\n  .line {\n    position: absolute;\n    background: #ffec00;\n  }\n\n  .line.-right, .line.-left {\n    width: 3px;\n    bottom: -3px;\n    top: -3px;\n    transform: scale3d(1, 0, 1);\n  }\n\n  .line.-top, .line.-bottom {\n    height: 3px;\n    left: -3px;\n    right: -3px;\n    transform: scale3d(0, 1, 1);\n  }\n\n  .line.-right {\n    right: -3px;\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\n    transform-origin: top;\n  }\n\n  .line.-top {\n    top: -3px;\n    transition: transform 0.08s linear 0.43s;\n    transform-origin: left;\n  }\n\n  .line.-left {\n    left: -3px;\n    transition: transform 0.08s linear 0.51s;\n    transform-origin: bottom;\n  }\n\n  .line.-bottom {\n    bottom: -3px;\n    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\n    transform-origin: right;\n  }\n\n  &:hover .text,\n  &:active .text {\n    transform: translate3d(0, 0, 0);\n    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n  }\n\n  &:hover:after,\n  &:active:after {\n    transform: scale3d(0, 1, 1);\n    right: -3px;\n    left: -3px;\n    transform-origin: right;\n    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;\n  }\n\n  &:hover .line,\n  &:active .line {\n    transform: scale3d(1, 1, 1);\n  }\n\n  &:hover .line.-right,\n  &:active .line.-right {\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\n    transform-origin: bottom;\n  }\n\n  &:hover .line.-top,\n  &:active .line.-top {\n    transition: transform 0.08s linear 0.4s;\n    transform-origin: right;\n  }\n\n  &:hover .line.-left,\n  &:active .line.-left {\n    transition: transform 0.08s linear 0.48s;\n    transform-origin: top;\n  }\n\n  &:hover .line.-bottom,\n  &:active .line.-bottom {\n    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\n    transform-origin: left;\n  }\n"]);return T=function(){return n},n}var D=c.b.a(T()),J=function(n){var e=n.href,t=void 0===e?"#":e,r=n.children,i=void 0===r?"":r;return a.a.createElement(D,t,a.a.createElement("span",{className:"text"},i),a.a.createElement("span",{className:"line -right"}),a.a.createElement("span",{className:"line -top"}),a.a.createElement("span",{className:"line -left"}),a.a.createElement("span",{className:"line -bottom"}))},Y=function(){return a.a.createElement(L,{bgImg:"images/slides/nNkm5WUTD18.jpg"},a.a.createElement(B,null,a.a.createElement(C,null,a.a.createElement("h1",null,"Sport"),a.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste accusantium sint excepturi velit eligendi laborum veniam facere, nulla pariatur dicta odio non laudantium voluptate inventore porro culpa sunt possimus.")),a.a.createElement(H,null,a.a.createElement(J,null,"Achetez Maintenant"))))},P=function(){return a.a.createElement(L,{bgImg:"images/slides/9XrYUO8laY4.jpg"},a.a.createElement(B,null,a.a.createElement(C,null,a.a.createElement("h1",null,"Musique"),a.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste accusantium sint excepturi velit eligendi laborum veniam facere, nulla pariatur dicta odio non laudantium voluptate inventore porro culpa sunt possimus.")),a.a.createElement(H,null,a.a.createElement(J,null,"Achetez Maintenant"))))},R=function(){return a.a.createElement(L,{bgImg:"images/slides/h_q9c1RUdzc.jpg"},a.a.createElement(B,null,a.a.createElement(C,null,a.a.createElement("h1",null,"Sante"),a.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste accusantium sint excepturi velit eligendi laborum veniam facere, nulla pariatur dicta odio non laudantium voluptate inventore porro culpa sunt possimus.")),a.a.createElement(H,null,a.a.createElement(J,null,"Achetez Maintenant"))))},X=t(112),$=t.n(X),G=t(159);function K(){var n=Object(l.a)(["\n  vertical-align: middle;\n  width: 100%;\n"]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n  flex: calc(100% / 3);\n  max-width: calc(100% / 3);\n"]);return Q=function(){return n},n}function V(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  height: calc(100vh - 6.5rem);\n  padding: 0 1rem;\n"]);return V=function(){return n},n}var Z=c.b.div(V()),nn=c.b.div(Q()),en=c.b.img(K()),tn=function(){var n=Object(r.useState)([]),e=Object(m.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)((function(){var n=new AbortController,e=n.signal;return function(){var n=Object(G.a)($.a.mark((function n(){var t,r,a;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("slides.txt",{signal:e});case 2:return t=n.sent,n.next=5,t.text();case 5:r=n.sent,a=r.split(/\r|\n/).reduce((function(n,e,t){var r=t%3;return n[r]=[].concat(n[r]||[],e),n}),[[],[],[]]),i(a);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){n.abort()}}),[]),a.a.createElement(Z,null,t.map((function(n,e){return a.a.createElement(nn,{key:e},n.map((function(n){return a.a.createElement(en,{key:n,src:n,alt:""})})))})))};function rn(){var n=Object(l.a)(["\n  height: 80%;\n  margin: auto 0;\n"]);return rn=function(){return n},n}var an=c.b.img(rn()),on=function(n){var e=n.className;return a.a.createElement(an,{src:"logo.png",alt:"Watt Health",className:e})};function ln(){var n=Object(l.a)(["\n  font-size: 1.4em;\n  width: 100%;\n  height: 110px;\n  max-height: 110px;\n  padding: 15px;\n  background: transparent;\n  outline: none;\n  border: solid 1px #ffec00;\n  border-bottom: none;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background: #ffec00;\n  }\n\n  @media (max-width: 768px) {\n    height: 70px;\n    max-height: 70px;\n  }\n"]);return ln=function(){return n},n}function cn(){var n=Object(l.a)(['\n  font-size: 1.4em;\n  width: 100%;\n  height: 50px;\n  padding: 0px 15px 0px 15px;\n  background: transparent;\n  outline: none;\n  border: solid 1px #ffec00;\n  border-bottom: none;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background: #ffec00;\n  }\n\n  &[type="submit"] {\n    padding: 0;\n    margin: -5px 0px 0px 0px;\n    cursor: pointer;\n    border: solid 1px #ffec00;\n    text-transform: uppercase;\n  }\n\n  @media (max-width: 768px) {\n    height: 40px;\n  }\n']);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px auto 0;\n"]);return un=function(){return n},n}function sn(){var n=Object(l.a)(["\n  width: 100%;\n\n  h2 {\n    text-align: center;\n  }\n"]);return sn=function(){return n},n}var mn=c.b.div(sn()),fn=c.b.form(un()),pn=c.b.input(cn()),dn=c.b.textarea(ln()),bn=function(){return a.a.createElement(mn,null,a.a.createElement("h2",null,"Contactez-nous"),a.a.createElement(fn,{action:"https://briskforms.com/go/0e24346a450ce462c7815fed865972e1",method:"POST"},a.a.createElement(pn,{type:"text",name:"nom",placeholder:"Nom",required:!0}),a.a.createElement(pn,{type:"email",name:"email",placeholder:"Email",required:!0}),a.a.createElement(pn,{type:"tel",name:"telephone",placeholder:"T\xe9l\xe9phone",required:!0}),a.a.createElement(dn,{name:"message",placeholder:"Envoyez-nous un message",cols:"30",rows:"10",required:!0}),a.a.createElement(pn,{type:"submit",value:"Envoyer"})))},hn=t(160),gn=t(161),vn=t(162),xn=t(164),En=t(163);function wn(){var n=Object(l.a)(["\n  color: #F40009;\n"]);return wn=function(){return n},n}function yn(){var n=Object(l.a)(["\n  color: #FF0000;\n"]);return yn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  color: #1DA1F2;\n"]);return jn=function(){return n},n}function On(){var n=Object(l.a)(["\n  color: #ffffff;\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n  border-radius: 1rem;\n  height: 4rem;\n  width: 4rem;\n"]);return On=function(){return n},n}function kn(){var n=Object(l.a)(["\n  color: #4267B2;\n"]);return kn=function(){return n},n}function zn(){var n=Object(l.a)(["\n  height: 5rem;\n  width: 5rem;\n  line-height: 5rem;\n"]);return zn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 5rem;\n  width: 100%;\n"]);return Sn=function(){return n},n}var Nn=c.b.ul(Sn()),qn=c.b.li(zn()),Mn=Object(c.b)(hn.a)(kn()),In=Object(c.b)(gn.a)(On()),Un=Object(c.b)(vn.a)(jn()),_n=Object(c.b)(En.a)(yn()),An=Object(c.b)(xn.a)(wn()),Fn=function(){return a.a.createElement(Nn,null,a.a.createElement(qn,null,a.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Mn,null))),a.a.createElement(qn,null,a.a.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(In,null))),a.a.createElement(qn,null,a.a.createElement("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Un,null))),a.a.createElement(qn,null,a.a.createElement("a",{href:"mailto:jtrishmawi@gmail.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(An,null))),a.a.createElement(qn,null,a.a.createElement("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(_n,null))))};function Wn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  flex: 50%;\n  max-width: 50%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    flex: 100%;\n    max-width: 100%;\n  }\n\n  "," {\n    height: 25vh;\n    margin: 0;\n  }\n"]);return Wn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  flex: 50%;\n  max-width: 50%;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);return Ln=function(){return n},n}function Bn(){var n=Object(l.a)([""]);return Bn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  padding: 2rem 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  h2 {\n    font-size: 3.5rem;\n  }\n\n  p {\n    font-size: 2rem;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column-reverse;\n  }\n"]);return Cn=function(){return n},n}var Hn=c.b.div(Cn()),Tn=Object(c.b)(on)(Bn()),Dn=Object(c.b)(C)(Ln()),Jn=Object(c.b)(H)(Wn(),Tn),Yn=function(){return a.a.createElement(L,null,a.a.createElement(Hn,null,a.a.createElement(Dn,null,a.a.createElement(tn,null)),a.a.createElement(Jn,null,a.a.createElement(Tn,null),a.a.createElement(bn,null),a.a.createElement(Fn,null))))};function Pn(){var n=Object(l.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');\n\n  *,\n  *::after,\n  *::before {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n  }\n\n  [tabindex]:focus {\n    outline: 0;\n    border: 1px solid #ffec00;\n    box-shadow: 0px 0px 5px  #ffec00;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return Pn=function(){return n},n}var Rn=Object(c.a)(Pn());function Xn(){var n=Object(l.a)(["\n  overflow: hidden;\n  \n  #container {\n    height: calc(100vh - 6.5rem);\n    width: 100vw;\n    overflow: hidden;\n    margin-top: 6.5rem;\n  }\n\n  #container section {\n    width: 100%;\n    height: calc(100vh - 6.5rem);\n    position: absolute;\n    background-color: #fff;\n  }\n"]);return Xn=function(){return n},n}var $n=c.b.div(Xn());var Gn=function(){return a.a.createElement($n,null,a.a.createElement(U,null),a.a.createElement(u.a,null,a.a.createElement(u.b,{triggerHook:"onLeave",duration:"300%",pin:!0},a.a.createElement(s.a,{wrapper:a.a.createElement("div",{id:"container"})},a.a.createElement("section",null,a.a.createElement(P,null)),a.a.createElement(s.b,{from:{x:"-100%",opacity:.5},to:{x:"0%",opacity:1}},a.a.createElement("section",null,a.a.createElement(Y,null))),a.a.createElement(s.b,{from:{x:"100%",opacity:.5},to:{x:"0%",opacity:1}},a.a.createElement("section",null,a.a.createElement(R,null))),a.a.createElement(s.b,{from:{y:"-100%",opacity:.5},to:{y:"0%",opacity:1}},a.a.createElement("section",null,a.a.createElement(Yn,null)))))),a.a.createElement(Rn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[166,1,2]]]);
//# sourceMappingURL=main.0a33a91c.chunk.js.map