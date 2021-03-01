(this["webpackJsonpfernando-duarte"]=this["webpackJsonpfernando-duarte"]||[]).push([[0],{49:function(e,t,n){},54:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(13),i=n.n(a),o=(n(49),n(16)),s=n(22),u=n(19),j={page:"home"},l=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":return Object(u.a)(Object(u.a)({},e),{},{page:t.page});default:return e}})),b=(n(54),n(55),n(5)),h=n(6),d=n(8),O=n(7),p=n(18),f=n(12),g=n(1),v=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).changePage=function(e){return function(t){t.preventDefault(),l.dispatch({type:"CHANGE_PAGE",page:e})}},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(p.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(p.a.Brand,{href:"#home",children:"Fernando Duarte"}),Object(g.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(f.a,{className:"mr-auto",children:[Object(g.jsx)(f.a.Link,{onClick:this.changePage("home"),children:"Home"}),Object(g.jsx)(f.a.Link,{onClick:this.changePage("academic"),children:"Academic"}),Object(g.jsx)(f.a.Link,{onClick:this.changePage("work-experience"),children:"Work Experience"}),Object(g.jsx)(f.a.Link,{onClick:this.changePage("projects"),children:"Projects"}),Object(g.jsx)(f.a.Link,{onClick:this.changePage("applications"),children:"Applications"}),Object(g.jsx)(f.a.Link,{onClick:this.changePage("contacts"),children:"Contacts"})]})})]})}}]),n}(c.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)(v,{})}}]),n}(c.a.Component),x=Object(o.b)()(m),C=n(31),_=n.n(C);_.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/fernando-duarte",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST_WS_PATH,responseType:"json"}).interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return console.error(e.message),Promise.reject(Object(u.a)({},e))}));var k=_.a.create({baseURL:"https://api.github.com",responseType:"json"});k.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return console.error(e.message),Promise.reject(Object(u.a)({},e))}));var y={getUser:function(e,t){k.get("/users/".concat(e)).then((function(e){t&&t(e,null)})).catch((function(e){t&&t(null,e)}))},getUserProjects:function(e,t){k.get("/users/".concat(e,"/projects")).then((function(e){t&&t(e,null)})).catch((function(e){t&&t(null,e)}))}},P=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={user:{login:"",id:0,node_id:"",avatar_url:"",gravatar_id:"",url:"",html_url:"",followers_url:"",following_url:"",gists_url:"",starred_url:"",subscriptions_url:"",organizations_url:"",repos_url:"",events_url:"",received_events_url:"",type:"",site_admin:!1,name:void 0,company:void 0,blog:"",location:void 0,email:void 0,hireable:void 0,bio:"",twitter_username:void 0,public_repos:0,public_gists:0,followers:0,following:0,created_at:"",updated_at:""},loading:!0},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getUser("FDuarte-Dev",(function(t,n){t&&200===t.status&&(e.setState({user:t.data,loading:!1}),e.forceUpdate())}))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.loading;return Object(g.jsxs)(g.Fragment,{children:[n&&Object(g.jsx)("h1",{children:"Loading Home Page Component"}),!n&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:t.login}),Object(g.jsx)("img",{src:t.avatar_url,alt:"user"})]})]})}}]),n}(c.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Academic Page Component"})}}]),n}(c.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Work Experience Page Component"})}}]),n}(c.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Projects Page Component"})}}]),n}(c.a.Component),D=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Applications Page Component"})}}]),n}(c.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Contacts Page Component"})}}]),n}(c.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Not Found Page Component"})}}]),n}(c.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"getCurrentPage",value:function(e){switch(e){case"home":return P;case"academic":return w;case"work-experience":return E;case"projects":return A;case"applications":return D;case"contacts":return T;default:return F}}},{key:"render",value:function(){var e=this.getCurrentPage(this.props.page);return Object(g.jsx)("div",{children:Object(g.jsx)(e,{})})}}]),n}(c.a.Component),L=Object(o.b)((function(e){return{page:e.page}}))(S),H=n(44),N=n(32),U=n(33),R=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)(p.a,{color:"dark",dark:!0,fixed:"bottom",children:Object(g.jsx)(H.a,{children:Object(g.jsxs)(f.a,{className:"mr-auto",children:[Object(g.jsxs)(f.a,{children:["FDuarte-Dev @ ",(new Date).getFullYear()]}),Object(g.jsx)(f.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("a",{href:"https://github.com/FDuarte-Dev",children:Object(g.jsx)(N.a,{icon:U.a,size:"2x"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/fernando-guerra-duarte/",children:Object(g.jsx)(N.a,{icon:U.b,size:"2x"})})]})})]})})})}}]),n}(c.a.Component),W=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)(R,{})}}]),n}(c.a.Component),B=Object(o.b)()(W),G=function(){return Object(g.jsx)(o.a,{store:l,children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(x,{}),Object(g.jsx)(L,{}),Object(g.jsx)(B,{})]})})};i.a.render(Object(g.jsx)(G,{}),document.getElementById("root"));var I=G,z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),z()}},[[79,1,2]]]);
//# sourceMappingURL=main.6b7ee382.chunk.js.map