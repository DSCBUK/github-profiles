(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.2d44cad2.png"},33:function(e,t,a){e.exports=a(52)},38:function(e,t,a){},40:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a.n(c),l=(a(38),a(2)),i=a(3),o=a(5),u=a(4),m=a(6),p=(a(40),a(42),a(17)),d=a(13),f=a.n(d),b=a(18),h=a(19),g=new h.a("github-profiles"),v=new h.a("http://administrator:Ymsc4ics@35.232.119.58:5984/github-profiles"),O=function(){var e=Object(b.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:if((n=e.sent).login){e.next=9;break}throw new Error;case 9:return r={_id:""+n.id,avatar_url:n.avatar_url,name:n.name,html_url:n.html_url,login:n.login},e.next=12,g.put(r);case 12:return e.abrupt("return",r);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{});case 18:case"end":return e.stop()}},e,this,[[0,15]])}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.allDocs({include_docs:!0});case 3:return t=e.sent,a=t.rows.map(function(e){return e.doc}),g.sync(v).on("complete",function(){console.log("Sync success")}).on("error",function(e){console.log("Error")}),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),E={msg:"",class:""},y=function(e){return{type:"SHOW_MESSAGE",payload:e}},N={allProfiles:[]},_="USER_ADD",w="LOAD_ADD",k=a(10),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=e.target.elements.userID.value;a.props.addUser(t),e.target.elements.userID.value=""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"field has-addons has-addons-centered column"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{hidden:!0},"Profile"),r.a.createElement("input",{className:"input",name:"userID",type:"text",placeholder:"Add github profile "})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark is-outlined"},"Add")))}}]),t}(n.Component),D=Object(k.b)(function(e){return e},{addUser:function(e){return function(t){t(y({msg:"adding user"})),O(e).then(function(e){if(e.login)return t({type:_,payload:{_id:(a=e)._id,avatar_url:a.avatar_url,name:a.name,html_url:a.html_url,login:a.login}});var a;t(y({msg:"Cannot add user",class:"msg-red"})),setTimeout(function(){return t(y({msg:""}))},2e3)})}}})(S),A=a(30),P=a.n(A),x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:P.a,className:"github-logo",alt:""}),"DSCBUK Github Profiles")}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.message?r.a.createElement("div",{className:"message ".concat(this.props.message.class)}," ",this.props.message.msg," "):null}}]),t}(n.Component),U=Object(k.b)(function(e){return{message:e.message}})(C),I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"column is-mobile is-2"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:this.props.avatar_url,alt:""}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left profile-details"},r.a.createElement("p",{className:"bubtitile is-4",length:"12"},this.props.name),r.a.createElement("p",{className:"subtitle is-6"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.html_url},"@",this.props.login)))))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.getUsers()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container has-background-white-bis\t"},r.a.createElement("div",{className:"columns is-multiline"},this.props.allProfiles.map(function(e){return r.a.createElement(I,Object.assign({key:e._id},e))}))))}}]),t}(n.Component),G=Object(k.b)(function(e){return{allProfiles:e.users.allProfiles}},{getUsers:function(){return function(e){e(y({msg:"loading users"})),j().then(function(t){return e({type:w,payload:t})})}}})(M),W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(U,null),r.a.createElement(D,null),r.a.createElement(G,null))}}]),t}(n.Component),B=a(11),H=a(31),J=a(32),R=Object(B.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return e.allProfiles.find(function(e){return Number(e._id)===Number(t.payload._id)})?Object(p.a)({},e):Object(p.a)({},e,{allProfiles:e.allProfiles.concat(t.payload)});case w:return Object(p.a)({},e,{allProfiles:t.payload});default:return e}},message:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SHOW_MESSAGE":return{class:e.payload.class||"",msg:e.payload.msg};case _:case w:default:return E}}}),T=Object(B.createStore)(R,Object(J.composeWithDevTools)(Object(B.applyMiddleware)(H.a))),K=T.getState();s.a.render(r.a.createElement(k.a,{store:T},r.a.createElement(W,{allProfiles:K})),document.getElementById("root"))}},[[33,2,1]]]);
//# sourceMappingURL=main.806477bf.chunk.js.map