"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[477],{85477:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t=r(72791),o=r(47022),a=r(70885),s=r(89743),i=r(24849),c=r(2469),l=r(2677),d=r(43360),u=r(95316),p=r(16030),f=r(16871),h=r(15861),m=r(87757),v=r.n(m),x=r(74569),Z=r.n(x),b=r(70720),j=r(80184);var g=function(){var e=(0,t.useState)(!1),n=(0,a.Z)(e,2),r=n[0],o=n[1],m=(0,p.I0)(),x=(0,f.UO)(),g=(0,p.v9)((function(e){return e.splitBillProportionsReducer})),y=g.loading,N=g.success,w=g.error,k=function(){return o(!1)};return(0,j.jsxs)(s.Z,{className:"mt-5",children:[y&&(0,j.jsx)(i.Z,{animation:"border"}),N&&(0,j.jsx)(c.Z,{variant:"success",children:"Payment Successful!"}),w&&(0,j.jsx)(c.Z,{variant:"danger",children:"Payment Unsuccessful!"}),!N&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)("h4",{children:"Do you accept the proportions?"})}),(0,j.jsxs)(l.Z,{className:"d-flex justify-content-end",children:[(0,j.jsx)(d.Z,{className:"me-5",variant:"success",onClick:function(e){var n;e.preventDefault(),m((n=x.id,function(){var e=(0,h.Z)(v().mark((function e(r,t){var o,a,s,i,c;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:b.Rg}),o=t(),a=o.userLoginReducer.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,Z().get("http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/payment/split-bill-to-users/bill_id=".concat(n,"/"),s);case 6:i=e.sent,c=i.data,r({type:b.Pw,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r({type:b.Gg,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,r){return e.apply(this,arguments)}}()))},children:"Accept"}),(0,j.jsx)(d.Z,{variant:"danger",onClick:function(){return o(!0)},children:"Reject"})]}),(0,j.jsxs)(u.Z,{show:r,onHide:k,children:[(0,j.jsx)(u.Z.Header,{closeButton:!0,children:(0,j.jsx)(u.Z.Title,{children:"Reject Proportions?"})}),(0,j.jsx)(u.Z.Body,{children:"Are you sure you want to reject the proportions?"}),(0,j.jsxs)(u.Z.Footer,{children:[(0,j.jsx)(d.Z,{variant:"success",children:"Yes"}),(0,j.jsx)(d.Z,{variant:"danger",onClick:k,children:"Cancel"})]})]})]})]})},y=r(62591);var N=function(e){var n=e.proportion;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("h2",{className:"pt-5",children:["@",n.telegram_handle,"'s Proportions"]}),(0,j.jsxs)(y.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Item"}),(0,j.jsx)("th",{children:"Unit Price"}),(0,j.jsx)("th",{children:"Portions"})]})}),(0,j.jsx)("tbody",{children:n.proportions.map((function(e){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:e.item.menu_item_name}),(0,j.jsx)("td",{children:e.item.menu_item_price}),(0,j.jsx)("td",{children:e.quantity})]})}))})]})]})};var w=function(){var e=(0,p.I0)(),n=(0,p.v9)((function(e){return e.getProportionsReducer})),r=n.loading,o=n.error,a=n.proportions,s=(0,f.UO)();return(0,t.useEffect)((function(){var n;a||e((n=s.id,function(){var e=(0,h.Z)(v().mark((function e(r,t){var o,a,s,i,c;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:b.af}),o=t(),a=o.userLoginReducer.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,Z().get("http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/payment/get-proportions/bill_id=".concat(n,"/"),s);case 6:i=e.sent,c=i.data,r({type:b.eK,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r({type:b.$J,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,r){return e.apply(this,arguments)}}()))}),[a]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:"text-left",children:(0,j.jsx)("strong",{children:"Proportions"})}),(0,j.jsxs)("p",{className:"text-left",children:["Please view the submitted proportions.",(0,j.jsx)("br",{}),"If everything seems fine, accept the proportion to split the bill!"]}),r?(0,j.jsx)("h1",{children:"Loading Proportions..."}):o?(0,j.jsx)("h1",{children:"Error Loading Proportions..."}):a&&0!==a.length?(0,j.jsx)(j.Fragment,{children:a.map((function(e){return(0,j.jsx)(N,{proportion:e})}))}):null]})};var k=function(){return(0,j.jsxs)(o.Z,{className:"py-5 my-5",children:[(0,j.jsx)(w,{}),(0,j.jsx)(g,{})]})}},2469:function(e,n,r){var t=r(1413),o=r(45987),a=r(81694),s=r.n(a),i=r(72791),c=r(80239),l=r(39007),d=r(16445),u=r(10162),p=r(72709),f=r(80473),h=r(27472),m=r(66543),v=r(80184),x=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Z=(0,h.Z)("h4");Z.displayName="DivStyledAsH4";var b=(0,m.Z)("alert-heading",{Component:Z}),j=(0,m.Z)("alert-link",{Component:d.Z}),g={variant:"primary",show:!0,transition:p.Z,closeLabel:"Close alert"},y=i.forwardRef((function(e,n){var r=(0,c.Ch)(e,{show:"onClose"}),a=r.bsPrefix,i=r.show,d=r.closeLabel,h=r.closeVariant,m=r.className,Z=r.children,b=r.variant,j=r.onClose,g=r.dismissible,y=r.transition,N=(0,o.Z)(r,x),w=(0,u.vE)(a,"alert"),k=(0,l.Z)((function(e){j&&j(!1,e)})),C=!0===y?p.Z:y,E=(0,v.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},C?void 0:N),{},{ref:n,className:s()(m,w,b&&"".concat(w,"-").concat(b),g&&"".concat(w,"-dismissible")),children:[g&&(0,v.jsx)(f.Z,{onClick:k,"aria-label":d,variant:h}),Z]}));return C?(0,v.jsx)(C,(0,t.Z)((0,t.Z)({unmountOnExit:!0},N),{},{ref:void 0,in:i,children:E})):i?E:null}));y.displayName="Alert",y.defaultProps=g,n.Z=Object.assign(y,{Link:j,Heading:b})},95316:function(e,n,r){r.d(n,{Z:function(){return M}});var t,o=r(70885),a=r(45987),s=r(1413),i=r(81694),c=r.n(i),l=r(3070),d=r(97357),u=r(78376),p=r(36382);function f(e){if((!t&&0!==t||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),t=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return t}var h=r(28633),m=r(39007),v=r(73201),x=r(91683),Z=r(33690),b=r(72791),j=r(57246),g=r(28099),y=r(72709),N=r(66543),w=(0,N.Z)("modal-body"),k=r(99820),C=r(10162),E=r(80184),P=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],R=b.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,o=e.contentClassName,i=e.centered,l=e.size,d=e.fullscreen,u=e.children,p=e.scrollable,f=(0,a.Z)(e,P);r=(0,C.vE)(r,"modal");var h="".concat(r,"-dialog"),m="string"===typeof d?"".concat(r,"-fullscreen-").concat(d):"".concat(r,"-fullscreen");return(0,E.jsx)("div",(0,s.Z)((0,s.Z)({},f),{},{ref:n,className:c()(h,t,l&&"".concat(r,"-").concat(l),i&&"".concat(h,"-centered"),p&&"".concat(h,"-scrollable"),d&&m),children:(0,E.jsx)("div",{className:c()("".concat(r,"-content"),o),children:u})}))}));R.displayName="ModalDialog";var F=R,A=(0,N.Z)("modal-footer"),D=r(32086),z=["bsPrefix","className"],O=b.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,o=(0,a.Z)(e,z);return r=(0,C.vE)(r,"modal-header"),(0,E.jsx)(D.Z,(0,s.Z)((0,s.Z)({ref:n},o),{},{className:c()(t,r)}))}));O.displayName="ModalHeader",O.defaultProps={closeLabel:"Close",closeButton:!1};var S=O,H=(0,r(27472).Z)("h4"),I=(0,N.Z)("modal-title",{Component:H}),T=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],L={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:F};function _(e){return(0,E.jsx)(y.Z,(0,s.Z)((0,s.Z)({},e),{},{timeout:null}))}function B(e){return(0,E.jsx)(y.Z,(0,s.Z)((0,s.Z)({},e),{},{timeout:null}))}var U=b.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,i=e.style,y=e.dialogClassName,N=e.contentClassName,w=e.children,P=e.dialogAs,R=e["aria-labelledby"],F=e.show,A=e.animation,D=e.backdrop,z=e.keyboard,O=e.onEscapeKeyDown,S=e.onShow,H=e.onHide,I=e.container,L=e.autoFocus,U=e.enforceFocus,M=e.restoreFocus,K=e.restoreFocusOptions,W=e.onEntered,V=e.onExit,q=e.onExiting,G=e.onEnter,J=e.onEntering,Y=e.onExited,$=e.backdropClassName,Q=e.manager,X=(0,a.Z)(e,T),ee=(0,b.useState)({}),ne=(0,o.Z)(ee,2),re=ne[0],te=ne[1],oe=(0,b.useState)(!1),ae=(0,o.Z)(oe,2),se=ae[0],ie=ae[1],ce=(0,b.useRef)(!1),le=(0,b.useRef)(!1),de=(0,b.useRef)(null),ue=(0,h.Z)(),pe=(0,o.Z)(ue,2),fe=pe[0],he=pe[1],me=(0,v.Z)(n,he),ve=(0,m.Z)(H),xe=(0,C.SC)();r=(0,C.vE)(r,"modal");var Ze=(0,b.useMemo)((function(){return{onHide:ve}}),[ve]);function be(){return Q||(0,g.t)({isRTL:xe})}function je(e){if(d.Z){var n=be().getScrollbarWidth()>0,r=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;te({paddingRight:n&&!r?f():void 0,paddingLeft:!n&&r?f():void 0})}}var ge=(0,m.Z)((function(){fe&&je(fe.dialog)}));(0,x.Z)((function(){(0,p.Z)(window,"resize",ge),null==de.current||de.current()}));var ye=function(){ce.current=!0},Ne=function(e){ce.current&&fe&&e.target===fe.dialog&&(le.current=!0),ce.current=!1},we=function(){ie(!0),de.current=(0,Z.Z)(fe.dialog,(function(){ie(!1)}))},ke=function(e){"static"!==D?le.current||e.target!==e.currentTarget?le.current=!1:null==H||H():function(e){e.target===e.currentTarget&&we()}(e)},Ce=(0,b.useCallback)((function(e){return(0,E.jsx)("div",(0,s.Z)((0,s.Z)({},e),{},{className:c()("".concat(r,"-backdrop"),$,!A&&"show")}))}),[A,$,r]),Ee=(0,s.Z)((0,s.Z)({},i),re);A||(Ee.display="block");return(0,E.jsx)(k.Z.Provider,{value:Ze,children:(0,E.jsx)(j.Z,{show:F,ref:me,backdrop:D,container:I,keyboard:!0,autoFocus:L,enforceFocus:U,restoreFocus:M,restoreFocusOptions:K,onEscapeKeyDown:function(e){z||"static"!==D?z&&O&&O(e):(e.preventDefault(),we())},onShow:S,onHide:H,onEnter:function(e,n){e&&(e.style.display="block",je(e)),null==G||G(e,n)},onEntering:function(e,n){null==J||J(e,n),(0,l.ZP)(window,"resize",ge)},onEntered:W,onExit:function(e){null==de.current||de.current(),null==V||V(e)},onExiting:q,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,p.Z)(window,"resize",ge)},manager:be(),transition:A?_:void 0,backdropTransition:A?B:void 0,renderBackdrop:Ce,renderDialog:function(e){return(0,E.jsx)("div",(0,s.Z)((0,s.Z)({role:"dialog"},e),{},{style:Ee,className:c()(t,r,se&&"".concat(r,"-static")),onClick:D?ke:void 0,onMouseUp:Ne,"aria-labelledby":R,children:(0,E.jsx)(P,(0,s.Z)((0,s.Z)({},X),{},{onMouseDown:ye,className:y,contentClassName:N,children:w}))}))}})})}));U.displayName="Modal",U.defaultProps=L;var M=Object.assign(U,{Body:w,Header:S,Title:I,Footer:A,Dialog:F,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},24849:function(e,n,r){var t=r(1413),o=r(45987),a=r(81694),s=r.n(a),i=r(72791),c=r(10162),l=r(80184),d=["bsPrefix","variant","animation","size","as","className"],u=i.forwardRef((function(e,n){var r=e.bsPrefix,a=e.variant,i=e.animation,u=e.size,p=e.as,f=void 0===p?"div":p,h=e.className,m=(0,o.Z)(e,d);r=(0,c.vE)(r,"spinner");var v="".concat(r,"-").concat(i);return(0,l.jsx)(f,(0,t.Z)((0,t.Z)({ref:n},m),{},{className:s()(h,v,u&&"".concat(v,"-").concat(u),a&&"text-".concat(a))}))}));u.displayName="Spinner",n.Z=u},62591:function(e,n,r){var t=r(1413),o=r(45987),a=r(81694),s=r.n(a),i=r(72791),c=r(10162),l=r(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,n){var r=e.bsPrefix,a=e.className,i=e.striped,u=e.bordered,p=e.borderless,f=e.hover,h=e.size,m=e.variant,v=e.responsive,x=(0,o.Z)(e,d),Z=(0,c.vE)(r,"table"),b=s()(a,Z,m&&"".concat(Z,"-").concat(m),h&&"".concat(Z,"-").concat(h),i&&"".concat(Z,"-striped"),u&&"".concat(Z,"-bordered"),p&&"".concat(Z,"-borderless"),f&&"".concat(Z,"-hover")),j=(0,l.jsx)("table",(0,t.Z)((0,t.Z)({},x),{},{className:b,ref:n}));if(v){var g="".concat(Z,"-responsive");return"string"===typeof v&&(g="".concat(g,"-").concat(v)),(0,l.jsx)("div",{className:g,children:j})}return j}));n.Z=u}}]);
//# sourceMappingURL=477.9913d22c.chunk.js.map