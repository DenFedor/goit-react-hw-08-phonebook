"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[981],{4554:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),o=t(3366),i=t(2791),a=t(8182),u=t(3842),c=t(104),s=t(8519),l=t(418),p=t(184),d=["className","component"];var f=t(5902),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,t=e.defaultClassName,f=void 0===t?"MuiBox-root":t,h=e.generateClassName,m=(0,u.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(c.Z),v=i.forwardRef((function(e,t){var i=(0,l.Z)(n),u=(0,s.Z)(e),c=u.className,v=u.component,g=void 0===v?"div":v,b=(0,o.Z)(u,d);return(0,p.jsx)(m,(0,r.Z)({as:g,ref:t,className:(0,a.Z)(c,h?h(f):f),theme:i},b))}));return v}({defaultTheme:(0,t(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),m=h},3701:function(e,n,t){t.d(n,{Z:function(){return ee}});var r=t(9439),o=t(4942),i=t(7462),a=t(3366),u=t(2791),c=t(8182),s=t(4419),l=t(6934),p=t(1402),d=t(2071),f=t(9683),h=t(3031),m=t(3433),v=t(168),g=t(7326),b=t(4578),Z=t(5545);function y(e,n){var t=Object.create(null);return e&&u.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,u.isValidElement)(e)?n(e):e}(e)})),t}function x(e,n,t){return null!=t[n]?t[n]:e.props[n]}function R(e,n,t){var r=y(e.children),o=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,o=Object.create(null),i=[];for(var a in e)a in n?i.length&&(o[a]=i,i=[]):i.push(a);var u={};for(var c in n){if(o[c])for(r=0;r<o[c].length;r++){var s=o[c][r];u[o[c][r]]=t(s)}u[c]=t(c)}for(r=0;r<i.length;r++)u[i[r]]=t(i[r]);return u}(n,r);return Object.keys(o).forEach((function(i){var a=o[i];if((0,u.isValidElement)(a)){var c=i in n,s=i in r,l=n[i],p=(0,u.isValidElement)(l)&&!l.props.in;!s||c&&!p?s||!c||p?s&&c&&(0,u.isValidElement)(l)&&(o[i]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:l.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)})):o[i]=(0,u.cloneElement)(a,{in:!1}):o[i]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)})}})),o}var M=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},w=function(e){function n(n,t){var r,o=(r=e.call(this,n,t)||this).handleExited.bind((0,g.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,b.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,o=n.children,i=n.handleExited;return{children:n.firstRender?(t=e,r=i,y(t.children,(function(e){return(0,u.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",t),enter:x(e,"enter",t),exit:x(e,"exit",t)})}))):R(e,o,i),firstRender:!1}},t.handleExited=function(e,n){var t=y(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,a.Z)(e,["component","childFactory"]),o=this.state.contextValue,i=M(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?u.createElement(Z.Z.Provider,{value:o},i):u.createElement(Z.Z.Provider,{value:o},u.createElement(n,r,i))},n}(u.Component);w.propTypes={},w.defaultProps={component:"div",childFactory:function(e){return e}};var k=w,E=t(2554),T=t(184);var C=function(e){var n=e.className,t=e.classes,o=e.pulsate,i=void 0!==o&&o,a=e.rippleX,s=e.rippleY,l=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=u.useState(!1),m=(0,r.Z)(h,2),v=m[0],g=m[1],b=(0,c.Z)(n,t.ripple,t.rippleVisible,i&&t.ripplePulsate),Z={width:l,height:l,top:-l/2+s,left:-l/2+a},y=(0,c.Z)(t.child,v&&t.childLeaving,i&&t.childPulsate);return p||v||g(!0),u.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,T.jsx)("span",{className:b,style:Z,children:(0,T.jsx)("span",{className:y})})},P=t(5878);var S,W,N,B,L,V,j,F,D=(0,P.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),O=["center","classes","className"],I=(0,E.F4)(L||(L=S||(S=(0,v.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),A=(0,E.F4)(V||(V=W||(W=(0,v.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),z=(0,E.F4)(j||(j=N||(N=(0,v.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),G=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),K=(0,l.ZP)(C,{name:"MuiTouchRipple",slot:"Ripple"})(F||(F=B||(B=(0,v.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),D.rippleVisible,I,550,(function(e){return e.theme.transitions.easing.easeInOut}),D.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),D.child,D.childLeaving,A,550,(function(e){return e.theme.transitions.easing.easeInOut}),D.childPulsate,z,(function(e){return e.theme.transitions.easing.easeInOut})),X=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),o=t.center,s=void 0!==o&&o,l=t.classes,d=void 0===l?{}:l,f=t.className,h=(0,a.Z)(t,O),v=u.useState([]),g=(0,r.Z)(v,2),b=g[0],Z=g[1],y=u.useRef(0),x=u.useRef(null);u.useEffect((function(){x.current&&(x.current(),x.current=null)}),[b]);var R=u.useRef(!1),M=u.useRef(null),w=u.useRef(null),E=u.useRef(null);u.useEffect((function(){return function(){clearTimeout(M.current)}}),[]);var C=u.useCallback((function(e){var n=e.pulsate,t=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;Z((function(e){return[].concat((0,m.Z)(e),[(0,T.jsx)(K,{classes:{ripple:(0,c.Z)(d.ripple,D.ripple),rippleVisible:(0,c.Z)(d.rippleVisible,D.rippleVisible),ripplePulsate:(0,c.Z)(d.ripplePulsate,D.ripplePulsate),child:(0,c.Z)(d.child,D.child),childLeaving:(0,c.Z)(d.childLeaving,D.childLeaving),childPulsate:(0,c.Z)(d.childPulsate,D.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:r,rippleSize:o},y.current)])})),y.current+=1,x.current=i}),[d]),P=u.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=n.pulsate,o=void 0!==r&&r,i=n.center,a=void 0===i?s||n.pulsate:i,u=n.fakeElement,c=void 0!==u&&u;if("mousedown"===(null==e?void 0:e.type)&&R.current)R.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(R.current=!0);var l,p,d,f=c?null:E.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)l=Math.round(h.width/2),p=Math.round(h.height/2);else{var m=e.touches&&e.touches.length>0?e.touches[0]:e,v=m.clientX,g=m.clientY;l=Math.round(v-h.left),p=Math.round(g-h.top)}if(a)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var b=2*Math.max(Math.abs((f?f.clientWidth:0)-l),l)+2,Z=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(b,2)+Math.pow(Z,2))}null!=e&&e.touches?null===w.current&&(w.current=function(){C({pulsate:o,rippleX:l,rippleY:p,rippleSize:d,cb:t})},M.current=setTimeout((function(){w.current&&(w.current(),w.current=null)}),80)):C({pulsate:o,rippleX:l,rippleY:p,rippleSize:d,cb:t})}}),[s,C]),S=u.useCallback((function(){P({},{pulsate:!0})}),[P]),W=u.useCallback((function(e,n){if(clearTimeout(M.current),"touchend"===(null==e?void 0:e.type)&&w.current)return w.current(),w.current=null,void(M.current=setTimeout((function(){W(e,n)})));w.current=null,Z((function(e){return e.length>0?e.slice(1):e})),x.current=n}),[]);return u.useImperativeHandle(n,(function(){return{pulsate:S,start:P,stop:W}}),[S,P,W]),(0,T.jsx)(G,(0,i.Z)({className:(0,c.Z)(D.root,d.root,f),ref:E},h,{children:(0,T.jsx)(k,{component:null,exit:!0,children:b})}))})),U=X,Y=t(1217);function _(e){return(0,Y.Z)("MuiButtonBase",e)}var H,q=(0,P.Z)("MuiButtonBase",["root","disabled","focusVisible"]),J=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Q=(0,l.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((H={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,o.Z)(H,"&.".concat(q.disabled),{pointerEvents:"none",cursor:"default"}),(0,o.Z)(H,"@media print",{colorAdjust:"exact"}),H)),$=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),o=t.action,l=t.centerRipple,m=void 0!==l&&l,v=t.children,g=t.className,b=t.component,Z=void 0===b?"button":b,y=t.disabled,x=void 0!==y&&y,R=t.disableRipple,M=void 0!==R&&R,w=t.disableTouchRipple,k=void 0!==w&&w,E=t.focusRipple,C=void 0!==E&&E,P=t.LinkComponent,S=void 0===P?"a":P,W=t.onBlur,N=t.onClick,B=t.onContextMenu,L=t.onDragLeave,V=t.onFocus,j=t.onFocusVisible,F=t.onKeyDown,D=t.onKeyUp,O=t.onMouseDown,I=t.onMouseLeave,A=t.onMouseUp,z=t.onTouchEnd,G=t.onTouchMove,K=t.onTouchStart,X=t.tabIndex,Y=void 0===X?0:X,H=t.TouchRippleProps,q=t.touchRippleRef,$=t.type,ee=(0,a.Z)(t,J),ne=u.useRef(null),te=u.useRef(null),re=(0,d.Z)(te,q),oe=(0,h.Z)(),ie=oe.isFocusVisibleRef,ae=oe.onFocus,ue=oe.onBlur,ce=oe.ref,se=u.useState(!1),le=(0,r.Z)(se,2),pe=le[0],de=le[1];x&&pe&&de(!1),u.useImperativeHandle(o,(function(){return{focusVisible:function(){de(!0),ne.current.focus()}}}),[]);var fe=u.useState(!1),he=(0,r.Z)(fe,2),me=he[0],ve=he[1];u.useEffect((function(){ve(!0)}),[]);var ge=me&&!M&&!x;function be(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k;return(0,f.Z)((function(r){return n&&n(r),!t&&te.current&&te.current[e](r),!0}))}u.useEffect((function(){pe&&C&&!M&&me&&te.current.pulsate()}),[M,C,pe,me]);var Ze=be("start",O),ye=be("stop",B),xe=be("stop",L),Re=be("stop",A),Me=be("stop",(function(e){pe&&e.preventDefault(),I&&I(e)})),we=be("start",K),ke=be("stop",z),Ee=be("stop",G),Te=be("stop",(function(e){ue(e),!1===ie.current&&de(!1),W&&W(e)}),!1),Ce=(0,f.Z)((function(e){ne.current||(ne.current=e.currentTarget),ae(e),!0===ie.current&&(de(!0),j&&j(e)),V&&V(e)})),Pe=function(){var e=ne.current;return Z&&"button"!==Z&&!("A"===e.tagName&&e.href)},Se=u.useRef(!1),We=(0,f.Z)((function(e){C&&!Se.current&&pe&&te.current&&" "===e.key&&(Se.current=!0,te.current.stop(e,(function(){te.current.start(e)}))),e.target===e.currentTarget&&Pe()&&" "===e.key&&e.preventDefault(),F&&F(e),e.target===e.currentTarget&&Pe()&&"Enter"===e.key&&!x&&(e.preventDefault(),N&&N(e))})),Ne=(0,f.Z)((function(e){C&&" "===e.key&&te.current&&pe&&!e.defaultPrevented&&(Se.current=!1,te.current.stop(e,(function(){te.current.pulsate(e)}))),D&&D(e),N&&e.target===e.currentTarget&&Pe()&&" "===e.key&&!e.defaultPrevented&&N(e)})),Be=Z;"button"===Be&&(ee.href||ee.to)&&(Be=S);var Le={};"button"===Be?(Le.type=void 0===$?"button":$,Le.disabled=x):(ee.href||ee.to||(Le.role="button"),x&&(Le["aria-disabled"]=x));var Ve=(0,d.Z)(n,ce,ne);var je=(0,i.Z)({},t,{centerRipple:m,component:Z,disabled:x,disableRipple:M,disableTouchRipple:k,focusRipple:C,tabIndex:Y,focusVisible:pe}),Fe=function(e){var n=e.disabled,t=e.focusVisible,r=e.focusVisibleClassName,o=e.classes,i={root:["root",n&&"disabled",t&&"focusVisible"]},a=(0,s.Z)(i,_,o);return t&&r&&(a.root+=" ".concat(r)),a}(je);return(0,T.jsxs)(Q,(0,i.Z)({as:Be,className:(0,c.Z)(Fe.root,g),ownerState:je,onBlur:Te,onClick:N,onContextMenu:ye,onFocus:Ce,onKeyDown:We,onKeyUp:Ne,onMouseDown:Ze,onMouseLeave:Me,onMouseUp:Re,onDragLeave:xe,onTouchEnd:ke,onTouchMove:Ee,onTouchStart:we,ref:Ve,tabIndex:x?-1:Y,type:$},Le,ee,{children:[v,ge?(0,T.jsx)(U,(0,i.Z)({ref:re,center:m},H)):null]}))})),ee=$},1614:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(4942),o=t(3366),i=t(7462),a=t(2791),u=t(8182),c=t(7312),s=t(1217),l=t(4419),p=t(7078),d=(0,t(4046).ZP)(),f=t(5080),h=t(184),m=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,f.Z)(),g=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),b=function(e){return(0,p.Z)({props:e,name:"MuiContainer",defaultTheme:v})},Z=function(e,n){var t=e.classes,r=e.fixed,o=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,c.Z)(String(i))),r&&"fixed",o&&"disableGutters"]};return(0,l.Z)(a,(function(e){return(0,s.Z)(n,e)}),t)};var y=t(4036),x=t(6934),R=t(1402),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?g:n,c=e.useThemeProps,s=void 0===c?b:c,l=e.componentName,p=void 0===l?"MuiContainer":l,d=t((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,o=n.breakpoints.values[r];return 0!==o&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(o).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),f=a.forwardRef((function(e,n){var t=s(e),r=t.className,a=t.component,c=void 0===a?"div":a,l=t.disableGutters,f=void 0!==l&&l,v=t.fixed,g=void 0!==v&&v,b=t.maxWidth,y=void 0===b?"lg":b,x=(0,o.Z)(t,m),R=(0,i.Z)({},t,{component:c,disableGutters:f,fixed:g,maxWidth:y}),M=Z(R,p);return(0,h.jsx)(d,(0,i.Z)({as:c,ownerState:R,className:(0,u.Z)(M.root,r),ref:n},x))}));return f}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,y.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,R.Z)({props:e,name:"MuiContainer"})}}),w=M},890:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(3366),o=t(7462),i=t(2791),a=t(8182),u=t(8519),c=t(4419),s=t(6934),l=t(1402),p=t(4036),d=t(5878),f=t(1217);function h(e){return(0,f.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=t(184),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.variant&&n[t.variant],"inherit"!==t.align&&n["align".concat((0,p.Z)(t.align))],t.noWrap&&n.noWrap,t.gutterBottom&&n.gutterBottom,t.paragraph&&n.paragraph]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({margin:0},t.variant&&n.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTypography"}),i=function(e){return Z[e]||e}(t.color),s=(0,u.Z)((0,o.Z)({},t,{color:i})),d=s.align,f=void 0===d?"inherit":d,y=s.className,x=s.component,R=s.gutterBottom,M=void 0!==R&&R,w=s.noWrap,k=void 0!==w&&w,E=s.paragraph,T=void 0!==E&&E,C=s.variant,P=void 0===C?"body1":C,S=s.variantMapping,W=void 0===S?b:S,N=(0,r.Z)(s,v),B=(0,o.Z)({},s,{align:f,color:i,className:y,component:x,gutterBottom:M,noWrap:k,paragraph:T,variant:P,variantMapping:W}),L=x||(T?"p":W[P]||b[P])||"span",V=function(e){var n=e.align,t=e.gutterBottom,r=e.noWrap,o=e.paragraph,i=e.variant,a=e.classes,u={root:["root",i,"inherit"!==e.align&&"align".concat((0,p.Z)(n)),t&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,c.Z)(u,h,a)}(B);return(0,m.jsx)(g,(0,o.Z)({as:L,ref:n,ownerState:B,className:(0,a.Z)(V.root,y)},N))}))},3967:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r=t(418),o=t(6482);function i(){return(0,r.Z)(o.Z)}},9683:function(e,n,t){var r=t(8956);n.Z=r.Z},2071:function(e,n,t){var r=t(7563);n.Z=r.Z},3031:function(e,n,t){t.d(n,{Z:function(){return d}});var r,o=t(2791),i=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function l(){"hidden"===this.visibilityState&&a&&(i=!0)}function p(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return i||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!u[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var d=function(){var e=o.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",s,!0),n.addEventListener("pointerdown",s,!0),n.addEventListener("touchstart",s,!0),n.addEventListener("visibilitychange",l,!0))}),[]),n=o.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!p(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(a=!0,window.clearTimeout(r),r=window.setTimeout((function(){a=!1}),100),n.current=!1,!0)},ref:e}}},8519:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(3433),o=t(7462),i=t(3366),a=t(2466),u=t(7416),c=["sx"];function s(e){var n,t=e.sx,s=function(e){var n,t,r={systemProps:{},otherProps:{}},o=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:u.Z;return Object.keys(e).forEach((function(n){o[n]?r.systemProps[n]=e[n]:r.otherProps[n]=e[n]})),r}((0,i.Z)(e,c)),l=s.systemProps,p=s.otherProps;return n=Array.isArray(t)?[l].concat((0,r.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,a.P)(e)?(0,o.Z)({},l,e):l}:(0,o.Z)({},l,t),(0,o.Z)({},p,{sx:n})}},2971:function(e,n,t){function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return r}})},5721:function(e,n,t){var r=t(2791),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;n.Z=o},8956:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2791),o=t(5721);function i(e){var n=r.useRef(e);return(0,o.Z)((function(){n.current=e})),r.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}},7563:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2791),o=t(2971);function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r.useMemo((function(){return n.every((function(e){return null==e}))?null:function(e){n.forEach((function(n){(0,o.Z)(n,e)}))}}),n)}},5545:function(e,n,t){var r=t(2791);n.Z=r.createContext(null)},4578:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9611);function o(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,(0,r.Z)(e,n)}}}]);
//# sourceMappingURL=981.52e2033a.chunk.js.map