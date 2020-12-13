(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{121:function(t,e,n){t.exports={alertMessage:"alert_alertMessage__2s2-O"}},122:function(t,e,n){t.exports={title:"title_title__XZde2"}},123:function(t,e,n){t.exports={appear:"titleAnimation_appear__2-wH5",appearActive:"titleAnimation_appearActive__2deXb"}},124:function(t,e,n){t.exports={container:"App_container__1O0Gl"}},141:function(t,e,n){},142:function(t,e,n){},152:function(t,e){},154:function(t,e){},166:function(t,e){},168:function(t,e){},19:function(t,e,n){t.exports={form:"ContactForm_form__1HYJI",title:"ContactForm_title__X-168",btn:"ContactForm_btn__1Fo-F",btnText:"ContactForm_btnText__elCEz",input:"ContactForm_input__2gOrX"}},195:function(t,e){},197:function(t,e){},198:function(t,e){},203:function(t,e){},205:function(t,e){},22:function(t,e,n){t.exports={listItem:"ContactList_listItem__2RX_y",deskription:"ContactList_deskription__RFaov",list:"ContactList_list__3QU3W",btn:"ContactList_btn__3kSGk",btnText:"ContactList_btnText__dWpHx"}},224:function(t,e){},236:function(t,e){},239:function(t,e){},243:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),i=n(16),r=n.n(i),s=n(18),o=n(28),l=n(117),u=n(118),b=n(128),j=n(126),m=n(19),d=n.n(m),p=n(14),O=Object(p.b)("ADD_CONTACT"),f=Object(p.b)("REMOVE_CONTACT"),h=Object(p.b)("CHANGE_FITER"),_=n(17),x=n(121),C=n.n(x);function v(t){var e=t.children;return Object(a.jsx)("div",{className:C.a.alertMessage,children:e})}var N=n(244),g=(n(141),{name:"",number:""}),F=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state=Object(o.a)({},g),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name}))?(t.setState({isExists:!0}),setTimeout((function(){t.setState({isExists:!1})}),1500)):t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState(Object(o.a)({},g))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{className:d.a.title,children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange,className:d.a.input})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{className:d.a.title,children:"Phone"}),Object(a.jsx)("input",{type:"text",name:"number",placeholder:"Enter phone",value:n,onChange:this.handleChange,className:d.a.input})]}),Object(a.jsxs)("button",{type:"submit",className:d.a.btn,children:[" ",Object(a.jsx)("span",{className:d.a.btnText,children:"add contact"})]})]}),Object(a.jsx)(N.a,{in:this.state.isExists,timeout:250,classNames:"alert",unmountOnExit:!0,children:Object(a.jsx)(v,{children:"Is already in contacts."})})]})}}]),n}(c.Component),y={addContact:O},E=Object(_.b)((function(t,e){return{contacts:t.contacts}}),y)(F),S=n(37),k=n.n(S);var A,T={filterRender:h},I=Object(_.b)((function(t){return{filter:t.filter,visibleFilter:t.contacts.length>1}}),T)((function(t){var e=t.filter,n=t.filterRender,c=t.visibleFilter;return Object(a.jsx)(N.a,{in:!!c,timeout:250,classNames:k.a.input,unmountOnExit:!0,children:Object(a.jsx)("div",{className:k.a.container,children:Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{className:k.a.title,children:"Find contact by name"}),Object(a.jsx)("input",{type:"text",name:"filter",placeholder:"Finder",value:e,onChange:function(t){return n(t.target.value)},className:k.a.input})]})})})})),w=n(245),L=n(22),R=n.n(L),X=(n(142),{deleteItem:f}),J=Object(_.b)((function(t){return{array:t.contacts.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}))}}),X)((function(t){var e=t.array,n=t.deleteItem;return Object(a.jsx)(w.a,{component:"ul",className:R.a.list,children:e.map((function(t){return Object(a.jsx)(N.a,{timeout:250,classNames:"item",children:Object(a.jsxs)("li",{className:R.a.listItem,children:[Object(a.jsx)("span",{className:R.a.deskription,children:t.name}),Object(a.jsx)("span",{className:R.a.deskription,children:t.number}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:R.a.btn,children:Object(a.jsx)("span",{className:R.a.btnText,children:"X"})})]},t.id)},t.id)}))})})),H=n(122),M=n.n(H),W=function(t){var e=t.title;return Object(a.jsx)("h1",{className:M.a.title,children:e})},D=n(123),G=n.n(D),P=n(124),Q=n.n(P),V=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:Q.a.container,children:[Object(a.jsx)(N.a,{in:!0,appear:!0,classNames:G.a,unmountOnExid:!0,timeout:500,children:Object(a.jsx)(W,{title:"Phonebook"})}),Object(a.jsx)(E,{}),Object(a.jsx)(I,{}),Object(a.jsx)(J,{})]})})},z=n(127),B=n(125),K=n.n(B),U={contacts:JSON.parse(localStorage.getItem("Contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},Y=Object(p.c)(U.contacts,(A={},Object(s.a)(A,O,(function(t,e){return[].concat(Object(z.a)(t),[Object(o.a)(Object(o.a)({},e.payload),{},{id:K.a.generate()})])})),Object(s.a)(A,f,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),A)),Z=Object(p.c)(U.filter,Object(s.a)({},h,(function(t,e){return e.payload}))),q=Object(p.a)({reducer:{contacts:Y,filter:Z}});q.subscribe((function(){localStorage.setItem("Contacts",JSON.stringify(q.getState().contacts))}));var $=q;r.a.render(Object(a.jsx)(_.a,{store:$,children:Object(a.jsx)(V,{})}),document.getElementById("root"))},37:function(t,e,n){t.exports={container:"Filter_container__WSJQX",title:"Filter_title__3lgVW",input:"Filter_input__2ARyk","input-appear":"Filter_input-appear__3aNm4","input-appear-active":"Filter_input-appear-active__LX-ME"}}},[[243,1,2]]]);
//# sourceMappingURL=main.23d77329.chunk.js.map