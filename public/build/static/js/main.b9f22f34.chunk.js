(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(49)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a(5),i=a(6),u=a(8),s=a(7),m=a(9),o=(a(22),a(24),function(){return c.a.createElement("div",{className:"Header"},c.a.createElement("div",{className:"Container"},c.a.createElement("p",{className:"Header__title"}," \u041d\u0430 \u0421\u0442\u0430\u0440\u0442 "),c.a.createElement("div",{className:"Header__button_exit"},c.a.createElement("img",{src:"../../img/icon/exit.svg"}))))}),d=function(){return c.a.createElement("div",null," d")},E=a(51),f=a(53),v=a(52),p=(a(26),a(28),a(50)),_=function(e){return c.a.createElement("ul",{className:"MenuIcons"},c.a.createElement(p.a,{to:"/d2"},c.a.createElement("li",{className:"MenuIcons__startup"},c.a.createElement("img",{src:"../../img/icon/startup.svg"}))),c.a.createElement(p.a,{to:"/"},c.a.createElement("li",{className:"MenuIcons__people"},c.a.createElement("img",{src:"../../img/icon/people.svg"}))),c.a.createElement(p.a,{to:"/"},c.a.createElement("li",{className:"MenuIcons__find"},c.a.createElement("img",{src:"../../img/icon/find.svg"}))),c.a.createElement("div",{className:"MenuIcons__div_for_circle"}),c.a.createElement("div",{className:"MenuIcons__div_for_shadow"}))},h=(a(32),a(34),a(36),function(e){return c.a.createElement("div",{className:"SearchField"},c.a.createElement("input",{type:"text",name:"",placeholder:"\u041f\u043e\u0438\u0441\u043a...",className:"SearchField__input"}),c.a.createElement("div",{className:"SearchField__div_white1"}," "),c.a.createElement("div",{className:"SearchField__div_white2"}," "))}),N=(a(38),function(e){return c.a.createElement("div",{className:"SearchGamburger"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}),b=(a(40),function(e){return c.a.createElement("div",{className:"SearchButton"}," \u041f\u043e\u0438\u0441\u043a ")}),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchJoinLine"},c.a.createElement(h,null),c.a.createElement(N,null),c.a.createElement(b,null))}}]),t}(n.Component),j=(a(42),function(e){return c.a.createElement("div",{className:"LineOFConditions"})}),O=(a(44),a(46),function(e){var t=e.title,a=e.body;e.id;return c.a.createElement("div",{className:"StartupCard"},c.a.createElement("div",{className:"StartupCard__topLine"}),c.a.createElement("div",{className:"StartupCard__title"}," ",t," "),c.a.createElement("div",{className:"StartupCard__body"}," ",a," "),c.a.createElement("div",{className:"StartupCard__bottomLine"}),c.a.createElement("img",{className:"StartupCard__triangle",src:"../../img/triangle.svg"}),c.a.createElement("div",{className:"StartupCard__button"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"))}),S=function(e){var t=e.startups;return(t=t||[{title:"default value",body:"smth is wrong",id:3}]).map(function(e){return c.a.createElement(O,Object.assign({},e,{key:e.id}))})},y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={startups:[],str_search:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/startups").then(function(e){return e.json()}).then(function(t){return e.onDownload(t)})}},{key:"onDownload",value:function(e){console.log(e),this.setState({startups:e})}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(g,null),c.a.createElement(j,null),c.a.createElement(S,{startups:this.state.startups}))}}]),t}(n.Component),C=function(){return c.a.createElement("div",null," d2 ")},w=function(e){return c.a.createElement(E.a,null,c.a.createElement("div",{className:"Body"},c.a.createElement("div",{className:"Container"},c.a.createElement(_,null),c.a.createElement(f.a,null,c.a.createElement(v.a,{exact:!0,path:"/",component:y}),c.a.createElement(v.a,{path:"/d2",component:C})))))},k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o,null),c.a.createElement(w,null),c.a.createElement(d,null))}}]),t}(n.Component);Object(r.render)(c.a.createElement(k,null),document.getElementById("this_for_react"))}],[[16,2,1]]]);
//# sourceMappingURL=main.b9f22f34.chunk.js.map