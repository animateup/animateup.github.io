(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5b57db1225173b3db231":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),a=n("ab4cb61bcb2dc161defb"),f=n("8e5b932303aba15e6056"),s=n("37c9ae85ae6fc4337eea"),u=n("adc20f99e57c573c589c"),b=n("d95b0cf107403b178365"),p=n("935ef7042cdcd483e0f2"),l=function(e){return e.get("projects",p.b)},d=function(){return Object(c.a)(l,function(e){return e.toJS()})},y=regeneratorRuntime.mark(m);function m(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},y,this)}var h=n("deb1edf8e03fc2092ec7"),j=Object(h.c)(["0%{left:30%;opacity:1;}100%{left:-50%;opacity:0;}"]),w=Object(h.c)(["0%{left:150%;opacity:0;}70%{left:28%;opacity:1;}100%{left:30%;opacity:1;}"]),v=n("e14beed3800d525a08b0"),O=h.a.div.withConfig({displayName:"styles__ProjectContainer"})(["width:100%;height:100%;"]),g=h.a.div.withConfig({displayName:"styles__TitleContainer"})(["left:30%;top:27%;width:100%;text-align:center;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;padding:10px;opacity:1;-webkit-animation:",";animation:",";font-size:70px;"],function(e){return e.exitAnim?j+" 0.5s cubic-bezier(.31,.65,.71,.82) both":w+" 0.5s cubic-bezier(.31,.65,.71,.82) both"},function(e){return e.exitAnim?j+" 0.5s cubic-bezier(.31,.65,.71,.82) both":w+" 0.5s cubic-bezier(.31,.65,.71,.82) both"}),P=h.a.span.withConfig({displayName:"styles__Point"})(["color:",";font-size:185px;font-family:Impact;"],v.c),_=h.a.span.withConfig({displayName:"styles__Title"})(["color:white;font-size:130px;font-family:Impact;"]);n.d(t,"Projects",function(){return C});var x=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===c)n.children=o;else if(c>1){for(var f=Array(c),s=0;s<c;s++)f[s]=arguments[s+3];n.children=f}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),k(t,[{key:"componentWillMount",value:function(){this.props.setPathClicked(""),this.props.setRedirect(!1),this.props.setExitAnimProjects(!1)}},{key:"render",value:function(){var e=this.props.exitAnimProjects;return x(O,{},void 0,x(g,{exitAnim:e},void 0,x(P,{},void 0,"."),x(_,{onClick:function(){return setExitAnimHome(!0)}},void 0," PROJECTS")))}}]),t}(),A=Object(c.b)({projects:d(),exitAnimProjects:Object(c.a)(l,function(e){return e.get("exitAnimProjects")})});var z=Object(i.connect)(A,function(e){return{setExitAnimProjects:function(t){return e(Object(s.a)(t))},setRedirect:function(t){return e(Object(f.c)(t))},setPathClicked:function(t){return e(Object(f.b)(t))},dispatch:e}}),E=Object(b.a)({key:"projects",reducer:p.a}),R=Object(u.a)({key:"projects",saga:m});t.default=Object(a.compose)(E,R,z)(C)}}]);