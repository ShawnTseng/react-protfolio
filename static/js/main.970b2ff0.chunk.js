(this["webpackJsonpreact-protfolio"]=this["webpackJsonpreact-protfolio"]||[]).push([[0],[,,function(e,t,a){},,,,function(e){e.exports=JSON.parse('{"title":"React Related Application","desc":"From 0 to 1, all I need to know basiclly.","like":"100%","students":310,"price":3200,"teacher":{"name":"Mr. Yao","link":"https://shawntseng.github.io/protfolio/","image":"./asset/me.jpg"},"video":{"poster":"","source":""}}')},,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),s=(a(14),a(2),function(e){var t=e.data;t.name,t.link,t.image}),o=a(4),i=a(5),d=a(8),m=a(7),u=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isOpen,t="card__desc__text ".concat(e?"":"less");return c.a.createElement("div",{className:"card__desc"},c.a.createElement("div",{className:t},this.props.children),c.a.createElement("button",{className:"card__desc__button",onClick:this.toggle},e?"Less":"More"))}}]),a}(n.PureComponent),p=function(e){var t=e.data,a=t.title,n=t.desc,r=t.like,l=t.students,o=t.price,i=t.teacher,d=t.video;return c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"card__title"},a),c.a.createElement(u,null,n),c.a.createElement("div",{className:"card__stats"},c.a.createElement("div",{className:"card__stat"},c.a.createElement("label",null,"\u6eff\u610f\u5ea6"),c.a.createElement("div",null,r)),c.a.createElement("div",{className:"card__stat"},c.a.createElement("label",null,"\u5b78\u751f"),c.a.createElement("div",null,l)),c.a.createElement("div",{className:"card__stat"},c.a.createElement("label",null,"\u50f9\u683c"),c.a.createElement("div",null,o)),c.a.createElement("div",{className:"card__stat"},c.a.createElement("label",null,"\u8001\u5e2b"),c.a.createElement(s,{data:i}))),c.a.createElement("video",{className:"card__video",poster:d.poster,src:d.source,controls:!0}))},v=a(6);var E=function(){return c.a.createElement("div",null,c.a.createElement(p,{data:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.970b2ff0.chunk.js.map