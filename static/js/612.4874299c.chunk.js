"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[612],{59612:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(72791),a=t(1413),o=t(70885),s=t(16030),i=t(16871),c=t(47022),l=t(2469),d=t(62591),u=t(43360),f=t(95316),p=t(46654),m=t(99410),h=t(74292),v=t(80184);var x=function(e){var n=e.item,t=e.setQuantity,r=e.quantity;return(0,v.jsxs)(m.Z,{className:"mb-3",children:[(0,v.jsx)(u.Z,{variant:"outline-secondary",id:"button-addon1",onClick:function(){r>0&&t(Number(r)-1)},children:"-"}),(0,v.jsx)(h.Z,{className:"text-center",size:"smaller-input",value:r}),(0,v.jsx)(u.Z,{variant:"outline-secondary",id:"button-addon1",onClick:function(){r<n.order_item_qty&&t(Number(r)+1)},children:"+"})]})};var Z=function(e){var n=e.item,t=e.orderQty,a=n.id,s=n.value,i=(0,r.useState)(0),c=(0,o.Z)(i,2),l=c[0],d=c[1];return(0,r.useEffect)((function(){d(l),t[a]=l}),[l]),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:s.order_item_name}),(0,v.jsxs)("td",{children:["$"," ",s.order_item_price]}),(0,v.jsx)("td",{children:(0,v.jsx)(x,{item:s,quantity:l,setQuantity:d})})]})},b=t(15861),y=t(87757),j=t.n(y),g=t(74569),N=t.n(g),w=t(91636);function C(e){var n=(0,r.useState)(""),t=(0,o.Z)(n,2),s=t[0],i=t[1],c=(0,r.useState)(""),l=(0,o.Z)(c,2),d=l[0],m=l[1],h=e.submit;return(0,v.jsxs)(f.Z,(0,a.Z)((0,a.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,v.jsx)(f.Z.Header,{children:(0,v.jsx)(f.Z.Title,{id:"contained-modal-title-vcenter",children:"Hmmm..."})}),(0,v.jsx)(f.Z.Body,{children:(0,v.jsxs)(p.Z,{children:[(0,v.jsxs)(p.Z.Group,{id:"access-pasword",className:"mb-3",children:[(0,v.jsx)(p.Z.Label,{children:"Password"}),(0,v.jsx)(p.Z.Control,{type:"password",placeholder:"******",onChange:function(e){return i(e.target.value)}})]}),(0,v.jsxs)(p.Z.Group,{id:"access-telegram",className:"mb-3",children:[(0,v.jsx)(p.Z.Label,{children:"Telegram Handle"}),(0,v.jsx)(p.Z.Control,{type:"text",placeholder:"john_doe",onChange:function(e){return m(e.target.value)}}),(0,v.jsx)(p.Z.Text,{children:"Telegram handle without '@'"})]}),(0,v.jsx)("div",{className:"d-flex justify-content-end",children:(0,v.jsx)(u.Z,{type:"submit",disabled:""===d,onClick:function(e){e.preventDefault(),h(s,d)},children:"Submit Details"})})]})})]}))}var k=function(){var e=(0,s.I0)(),n=(0,i.UO)(),t=(0,s.v9)((function(e){return e.retrieveBillReducer})).bill_details,a=(0,s.v9)((function(e){return e.submitProportionReducer})),f=a.success,p=a.error,m=(0,r.useState)(!1),h=(0,o.Z)(m,2),x=h[0],y=h[1],g=(0,r.useState)(""),k=(0,o.Z)(g,2),E=k[0],P=k[1],_=(0,r.useState)(""),R=(0,o.Z)(_,2),S=R[0],F=R[1],T=(0,r.useState)([]),O=(0,o.Z)(T,2),D=O[0],H=O[1],z=(0,r.useState)([]),I=(0,o.Z)(z,1)[0];return(0,r.useEffect)((function(){var r;if(t||e((r=n.id,function(){var e=(0,b.Z)(j().mark((function e(n){var t,a,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:w.y9}),t={headers:{"Content-type":"application/json"}},e.next=5,N().get("/api/payment/pay-full-bill-tabulate/order_id=".concat(r,"/"),t);case 5:a=e.sent,o=a.data,n({type:w.xy,payload:o}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n({type:w.Jl,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}())),t){P(t.bill_pin);for(var a=0,s=Object.entries(t.order_items);a<s.length;a++){var i=(0,o.Z)(s[a],2),c=i[0],l=i[1];D[c]||(D.push({id:c,order_item_id:l.id,quantity:0,value:l}),I.push(0))}H(D)}}),[t]),(0,v.jsxs)(c.Z,{className:"py-5 my-5",children:[(0,v.jsx)(C,{show:!x,submit:function(e,n){e===E?(F(n),y(!x)):window.alert("Invalid Pin!")}}),(0,v.jsx)("h1",{className:"text-left",children:(0,v.jsxs)("strong",{children:["Final Order #ID:"," ",n.id]})}),f&&(0,v.jsxs)(l.Z,{variant:"success",children:["Proportion submitted! Please access"," ",(0,v.jsx)("a",{href:"t.me/Best_Reservation_SG_bot",children:"@Best_Reservation_SG_bot"})," ","on telegram if you haven't already done so!"]}),p&&(0,v.jsxs)(l.Z,{variant:"danger",children:["Proportion already submitted! Please access"," ",(0,v.jsx)("strong",{children:"@Best_Reservation_SG_bot"})," ","on telegram if you haven't already done so!"]}),(0,v.jsxs)(d.Z,{className:"table table-striped table-sm",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{scope:"col",width:"220",children:"Items"}),(0,v.jsx)("th",{scope:"col",width:"220",children:"Unit Price"}),(0,v.jsx)("th",{scope:"col",width:"10",children:"Portions"})]})}),(0,v.jsx)("tbody",{children:0!==D.length&&D.map((function(e){return(0,v.jsx)(Z,{item:e,orderQty:I,proportions:D,setProportions:H})}))})]}),(0,v.jsx)("div",{className:"d-flex justify-content-end mb-3",children:(0,v.jsx)(u.Z,{onClick:function(){for(var t=[],r=0;r<I.length;r++){var a=I[r];t.push("".concat(D[r].order_item_id," - ").concat(a))}e(function(e,n,t){return function(){var r=(0,b.Z)(j().mark((function r(a){var o,s,i;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:w.sk}),o={headers:{"Content-type":"application/json"}},r.next=5,N().post("/api/payment/add-proportions/order_id=".concat(e,"/"),{telegram_handle:n,proportions:t},o);case 5:s=r.sent,i=s.data,a({type:w.pH,payload:i}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),a({type:w.PQ,payload:r.t0.response&&r.t0.response.data.detail?r.t0.response.data.detail:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()}(n.id,S,t))},children:"Tap to Submit"})}),(0,v.jsx)("div",{className:"d-flex justify-content-end",children:(0,v.jsx)("p",{className:"small",children:"Reservation Owner will verify and send out PayLah! request to your telegram!"})})]})};var E=function(){return(0,v.jsx)(k,{})}},2469:function(e,n,t){var r=t(1413),a=t(45987),o=t(81694),s=t.n(o),i=t(72791),c=t(80239),l=t(39007),d=t(16445),u=t(10162),f=t(72709),p=t(80473),m=t(27472),h=t(66543),v=t(80184),x=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Z=(0,m.Z)("h4");Z.displayName="DivStyledAsH4";var b=(0,h.Z)("alert-heading",{Component:Z}),y=(0,h.Z)("alert-link",{Component:d.Z}),j={variant:"primary",show:!0,transition:f.Z,closeLabel:"Close alert"},g=i.forwardRef((function(e,n){var t=(0,c.Ch)(e,{show:"onClose"}),o=t.bsPrefix,i=t.show,d=t.closeLabel,m=t.closeVariant,h=t.className,Z=t.children,b=t.variant,y=t.onClose,j=t.dismissible,g=t.transition,N=(0,a.Z)(t,x),w=(0,u.vE)(o,"alert"),C=(0,l.Z)((function(e){y&&y(!1,e)})),k=!0===g?f.Z:g,E=(0,v.jsxs)("div",(0,r.Z)((0,r.Z)({role:"alert"},k?void 0:N),{},{ref:n,className:s()(h,w,b&&"".concat(w,"-").concat(b),j&&"".concat(w,"-dismissible")),children:[j&&(0,v.jsx)(p.Z,{onClick:C,"aria-label":d,variant:m}),Z]}));return k?(0,v.jsx)(k,(0,r.Z)((0,r.Z)({unmountOnExit:!0},N),{},{ref:void 0,in:i,children:E})):i?E:null}));g.displayName="Alert",g.defaultProps=j,n.Z=Object.assign(g,{Link:y,Heading:b})},99410:function(e,n,t){var r=t(45987),a=t(1413),o=t(81694),s=t.n(o),i=t(72791),c=t(66543),l=t(10162),d=t(96882),u=t(91991),f=t(80184),p=["bsPrefix","size","hasValidation","className","as"],m=(0,c.Z)("input-group-text",{Component:"span"}),h=i.forwardRef((function(e,n){var t=e.bsPrefix,o=e.size,c=e.hasValidation,d=e.className,m=e.as,h=void 0===m?"div":m,v=(0,r.Z)(e,p);t=(0,l.vE)(t,"input-group");var x=(0,i.useMemo)((function(){return{}}),[]);return(0,f.jsx)(u.Z.Provider,{value:x,children:(0,f.jsx)(h,(0,a.Z)((0,a.Z)({ref:n},v),{},{className:s()(d,t,o&&"".concat(t,"-").concat(o),c&&"has-validation")}))})}));h.displayName="InputGroup",n.Z=Object.assign(h,{Text:m,Radio:function(e){return(0,f.jsx)(m,{children:(0,f.jsx)(d.Z,(0,a.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,f.jsx)(m,{children:(0,f.jsx)(d.Z,(0,a.Z)({type:"checkbox"},e))})}})},95316:function(e,n,t){t.d(n,{Z:function(){return G}});var r,a=t(70885),o=t(45987),s=t(1413),i=t(81694),c=t.n(i),l=t(3070),d=t(97357),u=t(78376),f=t(36382);function p(e){if((!r&&0!==r||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var m=t(28633),h=t(39007),v=t(73201),x=t(91683),Z=t(33690),b=t(72791),y=t(57246),j=t(28099),g=t(72709),N=t(66543),w=(0,N.Z)("modal-body"),C=t(99820),k=t(10162),E=t(80184),P=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],_=b.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,a=e.contentClassName,i=e.centered,l=e.size,d=e.fullscreen,u=e.children,f=e.scrollable,p=(0,o.Z)(e,P);t=(0,k.vE)(t,"modal");var m="".concat(t,"-dialog"),h="string"===typeof d?"".concat(t,"-fullscreen-").concat(d):"".concat(t,"-fullscreen");return(0,E.jsx)("div",(0,s.Z)((0,s.Z)({},p),{},{ref:n,className:c()(m,r,l&&"".concat(t,"-").concat(l),i&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),d&&h),children:(0,E.jsx)("div",{className:c()("".concat(t,"-content"),a),children:u})}))}));_.displayName="ModalDialog";var R=_,S=(0,N.Z)("modal-footer"),F=t(32086),T=["bsPrefix","className"],O=b.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,a=(0,o.Z)(e,T);return t=(0,k.vE)(t,"modal-header"),(0,E.jsx)(F.Z,(0,s.Z)((0,s.Z)({ref:n},a),{},{className:c()(r,t)}))}));O.displayName="ModalHeader",O.defaultProps={closeLabel:"Close",closeButton:!1};var D=O,H=(0,t(27472).Z)("h4"),z=(0,N.Z)("modal-title",{Component:H}),I=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],A={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:R};function L(e){return(0,E.jsx)(g.Z,(0,s.Z)((0,s.Z)({},e),{},{timeout:null}))}function B(e){return(0,E.jsx)(g.Z,(0,s.Z)((0,s.Z)({},e),{},{timeout:null}))}var M=b.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.style,g=e.dialogClassName,N=e.contentClassName,w=e.children,P=e.dialogAs,_=e["aria-labelledby"],R=e.show,S=e.animation,F=e.backdrop,T=e.keyboard,O=e.onEscapeKeyDown,D=e.onShow,H=e.onHide,z=e.container,A=e.autoFocus,M=e.enforceFocus,G=e.restoreFocus,q=e.restoreFocusOptions,Q=e.onEntered,U=e.onExit,K=e.onExiting,V=e.onEnter,W=e.onEntering,J=e.onExited,$=e.backdropClassName,X=e.manager,Y=(0,o.Z)(e,I),ee=(0,b.useState)({}),ne=(0,a.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,b.useState)(!1),oe=(0,a.Z)(ae,2),se=oe[0],ie=oe[1],ce=(0,b.useRef)(!1),le=(0,b.useRef)(!1),de=(0,b.useRef)(null),ue=(0,m.Z)(),fe=(0,a.Z)(ue,2),pe=fe[0],me=fe[1],he=(0,v.Z)(n,me),ve=(0,h.Z)(H),xe=(0,k.SC)();t=(0,k.vE)(t,"modal");var Ze=(0,b.useMemo)((function(){return{onHide:ve}}),[ve]);function be(){return X||(0,j.t)({isRTL:xe})}function ye(e){if(d.Z){var n=be().getScrollbarWidth()>0,t=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;re({paddingRight:n&&!t?p():void 0,paddingLeft:!n&&t?p():void 0})}}var je=(0,h.Z)((function(){pe&&ye(pe.dialog)}));(0,x.Z)((function(){(0,f.Z)(window,"resize",je),null==de.current||de.current()}));var ge=function(){ce.current=!0},Ne=function(e){ce.current&&pe&&e.target===pe.dialog&&(le.current=!0),ce.current=!1},we=function(){ie(!0),de.current=(0,Z.Z)(pe.dialog,(function(){ie(!1)}))},Ce=function(e){"static"!==F?le.current||e.target!==e.currentTarget?le.current=!1:null==H||H():function(e){e.target===e.currentTarget&&we()}(e)},ke=(0,b.useCallback)((function(e){return(0,E.jsx)("div",(0,s.Z)((0,s.Z)({},e),{},{className:c()("".concat(t,"-backdrop"),$,!S&&"show")}))}),[S,$,t]),Ee=(0,s.Z)((0,s.Z)({},i),te);S||(Ee.display="block");return(0,E.jsx)(C.Z.Provider,{value:Ze,children:(0,E.jsx)(y.Z,{show:R,ref:he,backdrop:F,container:z,keyboard:!0,autoFocus:A,enforceFocus:M,restoreFocus:G,restoreFocusOptions:q,onEscapeKeyDown:function(e){T||"static"!==F?T&&O&&O(e):(e.preventDefault(),we())},onShow:D,onHide:H,onEnter:function(e,n){e&&(e.style.display="block",ye(e)),null==V||V(e,n)},onEntering:function(e,n){null==W||W(e,n),(0,l.ZP)(window,"resize",je)},onEntered:Q,onExit:function(e){null==de.current||de.current(),null==U||U(e)},onExiting:K,onExited:function(e){e&&(e.style.display=""),null==J||J(e),(0,f.Z)(window,"resize",je)},manager:be(),transition:S?L:void 0,backdropTransition:S?B:void 0,renderBackdrop:ke,renderDialog:function(e){return(0,E.jsx)("div",(0,s.Z)((0,s.Z)({role:"dialog"},e),{},{style:Ee,className:c()(r,t,se&&"".concat(t,"-static")),onClick:F?Ce:void 0,onMouseUp:Ne,"aria-labelledby":_,children:(0,E.jsx)(P,(0,s.Z)((0,s.Z)({},Y),{},{onMouseDown:ge,className:g,contentClassName:N,children:w}))}))}})})}));M.displayName="Modal",M.defaultProps=A;var G=Object.assign(M,{Body:w,Header:D,Title:z,Footer:S,Dialog:R,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},62591:function(e,n,t){var r=t(1413),a=t(45987),o=t(81694),s=t.n(o),i=t(72791),c=t(10162),l=t(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.striped,u=e.bordered,f=e.borderless,p=e.hover,m=e.size,h=e.variant,v=e.responsive,x=(0,a.Z)(e,d),Z=(0,c.vE)(t,"table"),b=s()(o,Z,h&&"".concat(Z,"-").concat(h),m&&"".concat(Z,"-").concat(m),i&&"".concat(Z,"-striped"),u&&"".concat(Z,"-bordered"),f&&"".concat(Z,"-borderless"),p&&"".concat(Z,"-hover")),y=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},x),{},{className:b,ref:n}));if(v){var j="".concat(Z,"-responsive");return"string"===typeof v&&(j="".concat(j,"-").concat(v)),(0,l.jsx)("div",{className:j,children:y})}return y}));n.Z=u}}]);
//# sourceMappingURL=612.4874299c.chunk.js.map