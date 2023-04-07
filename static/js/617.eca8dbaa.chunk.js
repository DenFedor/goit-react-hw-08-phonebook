"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{617:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,i,o,a,s,c,l,d,u,p=t(2791),x=t(168),f=t(7691),m=f.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n"]))),h=f.ZP.div(i||(i=(0,x.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n  min-width: 300px;\n  width: 20rem;\n  padding: 15px;\n\n  border: 2px solid #fff;\n  border-radius: 10px;\n  border-color: #fff;\n  border-image: linear-gradient(-45deg, #3498db, #e67e22) 1;\n"]))),g=f.ZP.label(o||(o=(0,x.Z)(["\n  text-align: left;\n  font-size: 16px;\n  font-weight: 700;\n"]))),b=f.ZP.input(a||(a=(0,x.Z)(["\n  margin-top: 10px;\n  display: block;\n  border: 1px solid gray;\n  border-radius: 5px;\n  text-align: center;\n  height: 25px;\n  width: 300px;\n  font-size: 14px;\n  font-weight: 600;\n"]))),Z=f.ZP.button(s||(s=(0,x.Z)(["\n  transition: background 0.8s;\n  :hover {\n    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)\n      center/15000%;\n  }\n  :active {\n    background-color: #6eb9f7;\n    background-size: 100%;\n    transition: background 0s;\n  }\n  /* Button style */\n  border: none;\n  border-radius: 10px;\n  padding: 12px 18px;\n  font-size: 12px;\n  width: fit-content;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: white;\n  background-color: #2196f3;\n  box-shadow: 0 0 4px #999;\n  outline: none;\n"]))),j=t(9434),v=t(5036),y=t(184),w=function(){var n=(0,j.I0)();return(0,y.jsx)(h,{children:(0,y.jsxs)(m,{onSubmit:function(e){e.preventDefault();var t=e.target,r={name:t.elements.name.value,number:t.elements.number.value};n((0,v.uK)(r)),t.reset()},children:[(0,y.jsxs)(g,{htmlFor:"name",children:["Name",(0,y.jsx)(b,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(g,{htmlFor:"number",children:["Number",(0,y.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(Z,{type:"submit",children:"Add Contacts"})]})})},k=f.ZP.div(c||(c=(0,x.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n  padding: 15px;\n  min-width: 300px;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  border-color: #fff;\n  border-image: linear-gradient(-45deg, #3498db, #e67e22) 1;\n"]))),C=f.ZP.ul(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  min-width: 296px;\n"]))),P=f.ZP.li(d||(d=(0,x.Z)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 700;\n"]))),z=f.ZP.button(u||(u=(0,x.Z)(["\n  transition: background 0.8s;\n  :hover {\n    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)\n      center/15000%;\n  }\n  :active {\n    background-color: #6eb9f7;\n    background-size: 100%;\n    transition: background 0s;\n  }\n  /* Button style */\n  border: none;\n  border-radius: 10px;\n  padding: 6px 9px;\n  font-size: 10px;\n  width: fit-content;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: white;\n  background-color: #2196f3;\n  box-shadow: 0 0 4px #999;\n  outline: none;\n"]))),F=function(n){return n.contacts.contacts.isLoading},A=function(n){return n.contacts.contacts.error},I=function(n){return n.contacts.filter},q=function(n){var e=function(n){return n.contacts.contacts.items}(n),t=I(n);return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},L=function(){var n=(0,j.I0)(),e=(0,j.v9)(q);return(0,y.jsx)(k,{children:e.length<1?(0,y.jsx)(P,{children:"Your contact list ist empty"}):(0,y.jsx)(C,{children:e.map((function(e){var t=e.id,r=e.name,i=e.number;return(0,y.jsxs)(P,{children:[r,(0,y.jsx)("span",{children:":"}),i,(0,y.jsx)(z,{type:"button",id:t,onClick:function(){return n((0,v.GK)(t))},children:"Delete"})]},t)}))})})},B=t(5206),G=t(4942),N=t(9439),S=t(4395),W=t(4554),D=t(4663),R=t(3400),_=t(890),E=t(4172),M=t(1614),O=t(3044),T=t(6520),K=t(9891),U=t(6934),J=t(2065),Y=t(757),$=t(4834),H=t(5403),Q=t(1538),V=t(9869),X=t(2007),nn=function(n){return n.split(" ").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" ")};nn.propTypes={name:t.n(X)().string.isRequired};var en=t(8724),tn=t(3277);var rn=function(){var n=(0,j.I0)(),e=(0,j.v9)(V.Z.getUserName),t=nn(e),r=(0,j.v9)(I),i=p.useState(null),o=(0,N.Z)(i,2),a=o[0],s=o[1],c=(0,U.ZP)("div")((function(n){var e=n.theme;return{position:"absolute",left:"50%",transform:"translate(-50%, 0)",borderRadius:e.shape.borderRadius,backgroundColor:(0,J.Fq)(e.palette.common.white,.15),"&:hover":{backgroundColor:(0,J.Fq)(e.palette.common.white,.25)},marginLeft:0,width:"auto"}})),l=(0,U.ZP)("div")((function(n){return{padding:n.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),d=(0,U.ZP)($.ZP)((function(n){var e,t=n.theme;return{color:"inherit","& .MuiInputBase-input":(e={padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},(0,G.Z)(e,t.breakpoints.up("xs"),{width:"10rem"}),(0,G.Z)(e,t.breakpoints.up("sm"),{width:"20rem"}),e)}}));return(0,y.jsx)(S.Z,{position:"sticky",children:(0,y.jsx)(M.Z,{maxWidth:"xl",children:(0,y.jsxs)(D.Z,{disableGutters:!0,children:[(0,y.jsx)(Y.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,y.jsx)(_.Z,{variant:"h6",noWrap:!0,component:"a",href:tn.a.contacts,sx:{mr:2,display:{xs:"none",sm:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Phonebook"}),(0,y.jsx)(W.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,y.jsxs)(c,{children:[(0,y.jsx)(l,{children:(0,y.jsx)(H.Z,{})}),(0,y.jsx)(d,{type:"text",name:"filter",id:"filter",onChange:function(e){return function(e){n((0,Q.T)(e.target.value.toLowerCase().trim()))}(e)},value:r,placeholder:"Filter by Name",inputProps:{"aria-label":"search"},autoFocus:!0})]}),(0,y.jsx)(Y.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),(0,y.jsx)(W.Z,{sx:{flexGrow:1,display:"flex"}}),(0,y.jsxs)(_.Z,{textAlign:"center",sx:{mr:2,display:{xs:"none",sm:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".1rem",color:"inherit",textDecoration:"none"},children:["Welcome, ",t]}),(0,y.jsxs)(W.Z,{sx:{flexGrow:0},children:[(0,y.jsx)(T.Z,{title:"Open settings",children:(0,y.jsx)(R.Z,{onClick:function(n){s(n.currentTarget)},sx:{p:0},children:(0,y.jsx)(O.Z,{alt:t.charAt(0),src:""})})}),(0,y.jsx)(E.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(a),onClose:function(){s(null)},children:(0,y.jsx)(K.Z,{onClick:function(){return n((0,en.kS)())},children:(0,y.jsx)(_.Z,{textAlign:"center",children:"Logout"})},"logout")})]})]})})})},on=function(){var n=(0,j.v9)(F),e=(0,j.v9)(A),t=(0,j.I0)();return(0,p.useEffect)((function(){t((0,v.yF)())}),[t]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(rn,{}),(0,y.jsx)(w,{}),(0,y.jsx)("h2",{children:"Contacts"}),n&&!e?(0,y.jsx)("b",{children:"Request in progress..."}):(0,y.jsx)(L,{}),(0,y.jsx)(B.Ix,{})]})}}}]);
//# sourceMappingURL=617.eca8dbaa.chunk.js.map