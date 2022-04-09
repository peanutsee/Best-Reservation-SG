"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[401],{61367:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var r=n(72791),a=n(49920),s=n(92592),o=n(80184);var c=function(){return(0,o.jsxs)(a.Z,{className:"h-10",children:[(0,o.jsx)(a.Z.Item,{interval:2e3,children:(0,o.jsx)(s.Z,{fluid:!0,className:"w-100",src:"/static/assets/1.png"})}),(0,o.jsx)(a.Z.Item,{interval:2e3,children:(0,o.jsx)(s.Z,{fluid:!0,className:"w-100",src:"/static/assets/2.png"})}),(0,o.jsx)(a.Z.Item,{interval:2e3,children:(0,o.jsx)(s.Z,{fluid:!0,className:"w-100",src:"/static/assets/3.png"})})]})},i=n(70885),l=n(89743),u=n(2677),d=n(16030),f=n(43504),p=n(15861),m=n(87757),v=n.n(m),h=n(74569),y=n.n(h),b=n(78596),x=n(1413),g=n(95316),j=n(43360),Z=n(45987),N=n(81694),w=n.n(N),C=n(10162),O=n(66543),P=n(27472),E=["bsPrefix","className","variant","as"],k=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.variant,s=e.as,c=void 0===s?"img":s,i=(0,Z.Z)(e,E),l=(0,C.vE)(n,"card-img");return(0,o.jsx)(c,(0,x.Z)({ref:t,className:w()(a?"".concat(l,"-").concat(a):l,r)},i))}));k.displayName="CardImg";var R=k,S=n(96040),F=["bsPrefix","className","as"],I=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,s=e.as,c=void 0===s?"div":s,i=(0,Z.Z)(e,F),l=(0,C.vE)(n,"card-header"),u=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:l}}),[l]);return(0,o.jsx)(S.Z.Provider,{value:u,children:(0,o.jsx)(c,(0,x.Z)((0,x.Z)({ref:t},i),{},{className:w()(a,l)}))})}));I.displayName="CardHeader";var T=I,D=["bsPrefix","className","bg","text","border","body","children","as"],A=(0,P.Z)("h5"),_=(0,P.Z)("h6"),H=(0,O.Z)("card-body"),L=(0,O.Z)("card-title",{Component:A}),M=(0,O.Z)("card-subtitle",{Component:_}),z=(0,O.Z)("card-link",{Component:"a"}),B=(0,O.Z)("card-text",{Component:"p"}),K=(0,O.Z)("card-footer"),W=(0,O.Z)("card-img-overlay"),J=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.bg,s=e.text,c=e.border,i=e.body,l=e.children,u=e.as,d=void 0===u?"div":u,f=(0,Z.Z)(e,D),p=(0,C.vE)(n,"card");return(0,o.jsx)(d,(0,x.Z)((0,x.Z)({ref:t},f),{},{className:w()(r,p,a&&"bg-".concat(a),s&&"text-".concat(s),c&&"border-".concat(c)),children:i?(0,o.jsx)(H,{children:l}):l}))}));J.displayName="Card",J.defaultProps={body:!1};var U=Object.assign(J,{Img:R,Title:L,Subtitle:M,Body:H,Link:z,Text:B,Header:T,Footer:K,ImgOverlay:W});function V(e){var t=e.restaurant;return(0,o.jsxs)(g.Z,(0,x.Z)((0,x.Z)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,o.jsx)(g.Z.Header,{closeButton:!0,children:(0,o.jsx)(g.Z.Title,{id:"contained-modal-title-vcenter",children:t.restaurant_name})}),(0,o.jsxs)(g.Z.Body,{children:[(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)(s.Z,{className:"pb-3",fluid:!0,style:{width:"25rem"},src:"/static/assets/burgers.jpg"})}),(0,o.jsx)("p",{children:t.restaurant_longer_description})]}),(0,o.jsx)(g.Z.Footer,{children:(0,o.jsx)(f.Link,{to:"/restaurant/".concat(t.id),children:(0,o.jsx)(j.Z,{children:"Check Availability"})})})]}))}var q=function(e){var t=e.restaurant,n=(0,r.useState)(!1),a=(0,i.Z)(n,2),c=a[0],l=a[1];return(0,o.jsxs)(U,{className:"h-100 shadow shadow-100 rounded glass-card",children:[(0,o.jsxs)(U.Body,{children:[(0,o.jsx)(s.Z,{className:"p-2",fluid:!0,src:t.image}),(0,o.jsx)("h3",{className:"py-2 text-center",children:t.restaurant_name}),(0,o.jsx)("p",{children:t.restaurant_shorter_description})]}),(0,o.jsxs)(U.Footer,{className:"py-2 text-center",children:[(0,o.jsx)(j.Z,{variant:"primary",onClick:function(){return l(!0)},children:"View Restaurant"}),(0,o.jsx)(V,{show:c,onHide:function(){return l(!1)},restaurant:t})]})]})},X=n(42982),G=n(16445),Q=["active","disabled","className","style","activeLabel","children"],Y=["children"],$=r.forwardRef((function(e,t){var n=e.active,r=e.disabled,a=e.className,s=e.style,c=e.activeLabel,i=e.children,l=(0,Z.Z)(e,Q),u=n||r?"span":G.Z;return(0,o.jsx)("li",{ref:t,style:s,className:w()(a,"page-item",{active:n,disabled:r}),children:(0,o.jsxs)(u,(0,x.Z)((0,x.Z)({className:"page-link",disabled:r},l),{},{children:[i,n&&c&&(0,o.jsx)("span",{className:"visually-hidden",children:c})]}))})}));$.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},$.displayName="PageItem";var ee=$;function te(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;function r(e){var r=e.children,a=(0,Z.Z)(e,Y);return(0,o.jsxs)($,(0,x.Z)((0,x.Z)({},a),{},{children:[(0,o.jsx)("span",{"aria-hidden":"true",children:r||t}),(0,o.jsx)("span",{className:"visually-hidden",children:n})]}))}return r.displayName=e,r}var ne=te("First","\xab"),re=te("Prev","\u2039","Previous"),ae=te("Ellipsis","\u2026","More"),se=te("Next","\u203a"),oe=te("Last","\xbb"),ce=["bsPrefix","className","size"],ie=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.size,s=(0,Z.Z)(e,ce),c=(0,C.vE)(n,"pagination");return(0,o.jsx)("ul",(0,x.Z)((0,x.Z)({ref:t},s),{},{className:w()(r,c,a&&"".concat(c,"-").concat(a))}))}));ie.displayName="Pagination";var le=Object.assign(ie,{First:ne,Prev:re,Ellipsis:ae,Item:ee,Next:se,Last:oe}),ue=n(81564);var de=function(e){var t=e.pages,n=e.page;if(t>1&&t<10)return(0,o.jsx)(le,{className:"shadow shadow-100",children:(0,X.Z)(Array(t).keys()).map((function(e){return(0,o.jsx)(ue.J,{to:"/?page=".concat(e+1),children:(0,o.jsx)(le.Item,{active:e+1===n,children:e+1})},e+1)}))});var a=(0,r.useState)(1),s=(0,i.Z)(a,2),c=s[0],l=s[1],u=function(e){return(0,o.jsx)(ue.J,{to:"/?page=".concat(e),children:(0,o.jsx)(le.Item,{active:e===n,children:e})},e)},d=[];d.push(u(1)),d.push((0,o.jsx)(le.Ellipsis,{}));for(var f=t/2,p=f;p<=f+4;p+=1)d.push(u(p));return d.push((0,o.jsx)(le.Ellipsis,{})),d.push(u(t)),(0,o.jsxs)(le,{className:"paginationInfo",children:[(0,o.jsx)(le.Prev,{onClick:function(){return l(c-1)},disabled:1===c}),d,(0,o.jsx)(le.Next,{onClick:function(){return l(c+1)},disabled:c===t})]})};var fe=function(){var e=(0,d.I0)(),t=(0,f.useSearchParams)(),n=(0,i.Z)(t,1)[0],a=(0,d.v9)((function(e){return e.retrieveRestaurantReducer})),s=a.loading,c=a.error,m=a.restaurants,h=a.page,x=a.pages,g=n.get("page")||"";return(0,r.useEffect)((function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=(0,p.Z)(v().mark((function t(n){var r,a,s,o,c;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n({type:b.JO}),r={headers:{"Content-type":"application/json"}},""!==e){t.next=11;break}return t.next=6,y().get("http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/restaurants/retrieve-all-restaurants/",r);case 6:a=t.sent,s=a.data,n({type:b.P1,payload:s}),t.next=16;break;case 11:return t.next=13,y().get("http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/restaurants/retrieve-all-restaurants/?page=".concat(e,"/"),r);case 13:o=t.sent,c=o.data,n({type:b.P1,payload:c});case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),n({type:b.T3,payload:"Error While Loading Restaurants"});case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}()}(g))}),[e,g]),(0,o.jsxs)("div",{className:"p-5 my-5",children:[(0,o.jsx)("h2",{className:"mb-5",children:"Check out these restaurants!"}),s?(0,o.jsx)("p",{className:"text-center",children:"Loading Restaurants..."}):c?(0,o.jsx)("p",{className:"text-center",children:"Error Loading Restaurants..."}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{children:m.map((function(e,t){return(0,o.jsx)(u.Z,{sm:3,className:"mb-3",children:(0,o.jsx)(q,{restaurant:e})},t)}))}),(0,o.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,o.jsx)(de,{page:h,pages:x})})]})]})};var pe=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(fe,{})]})}},11701:function(e,t,n){n.d(t,{Ed:function(){return s},UI:function(){return a},XW:function(){return o}});var r=n(72791);function a(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}function s(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}function o(e,t){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===t}))}},95316:function(e,t,n){n.d(t,{Z:function(){return K}});var r,a=n(70885),s=n(45987),o=n(1413),c=n(81694),i=n.n(c),l=n(3070),u=n(97357),d=n(78376),f=n(36382);function p(e){if((!r&&0!==r||e)&&u.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}var m=n(28633),v=n(39007),h=n(73201),y=n(91683),b=n(33690),x=n(72791),g=n(57246),j=n(28099),Z=n(72709),N=n(66543),w=(0,N.Z)("modal-body"),C=n(99820),O=n(10162),P=n(80184),E=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],k=x.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.contentClassName,c=e.centered,l=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,p=(0,s.Z)(e,E);n=(0,O.vE)(n,"modal");var m="".concat(n,"-dialog"),v="string"===typeof u?"".concat(n,"-fullscreen-").concat(u):"".concat(n,"-fullscreen");return(0,P.jsx)("div",(0,o.Z)((0,o.Z)({},p),{},{ref:t,className:i()(m,r,l&&"".concat(n,"-").concat(l),c&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),u&&v),children:(0,P.jsx)("div",{className:i()("".concat(n,"-content"),a),children:d})}))}));k.displayName="ModalDialog";var R=k,S=(0,N.Z)("modal-footer"),F=n(32086),I=["bsPrefix","className"],T=x.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=(0,s.Z)(e,I);return n=(0,O.vE)(n,"modal-header"),(0,P.jsx)(F.Z,(0,o.Z)((0,o.Z)({ref:t},a),{},{className:i()(r,n)}))}));T.displayName="ModalHeader",T.defaultProps={closeLabel:"Close",closeButton:!1};var D=T,A=(0,n(27472).Z)("h4"),_=(0,N.Z)("modal-title",{Component:A}),H=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],L={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:R};function M(e){return(0,P.jsx)(Z.Z,(0,o.Z)((0,o.Z)({},e),{},{timeout:null}))}function z(e){return(0,P.jsx)(Z.Z,(0,o.Z)((0,o.Z)({},e),{},{timeout:null}))}var B=x.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.style,Z=e.dialogClassName,N=e.contentClassName,w=e.children,E=e.dialogAs,k=e["aria-labelledby"],R=e.show,S=e.animation,F=e.backdrop,I=e.keyboard,T=e.onEscapeKeyDown,D=e.onShow,A=e.onHide,_=e.container,L=e.autoFocus,B=e.enforceFocus,K=e.restoreFocus,W=e.restoreFocusOptions,J=e.onEntered,U=e.onExit,V=e.onExiting,q=e.onEnter,X=e.onEntering,G=e.onExited,Q=e.backdropClassName,Y=e.manager,$=(0,s.Z)(e,H),ee=(0,x.useState)({}),te=(0,a.Z)(ee,2),ne=te[0],re=te[1],ae=(0,x.useState)(!1),se=(0,a.Z)(ae,2),oe=se[0],ce=se[1],ie=(0,x.useRef)(!1),le=(0,x.useRef)(!1),ue=(0,x.useRef)(null),de=(0,m.Z)(),fe=(0,a.Z)(de,2),pe=fe[0],me=fe[1],ve=(0,h.Z)(t,me),he=(0,v.Z)(A),ye=(0,O.SC)();n=(0,O.vE)(n,"modal");var be=(0,x.useMemo)((function(){return{onHide:he}}),[he]);function xe(){return Y||(0,j.t)({isRTL:ye})}function ge(e){if(u.Z){var t=xe().getScrollbarWidth()>0,n=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;re({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}}var je=(0,v.Z)((function(){pe&&ge(pe.dialog)}));(0,y.Z)((function(){(0,f.Z)(window,"resize",je),null==ue.current||ue.current()}));var Ze=function(){ie.current=!0},Ne=function(e){ie.current&&pe&&e.target===pe.dialog&&(le.current=!0),ie.current=!1},we=function(){ce(!0),ue.current=(0,b.Z)(pe.dialog,(function(){ce(!1)}))},Ce=function(e){"static"!==F?le.current||e.target!==e.currentTarget?le.current=!1:null==A||A():function(e){e.target===e.currentTarget&&we()}(e)},Oe=(0,x.useCallback)((function(e){return(0,P.jsx)("div",(0,o.Z)((0,o.Z)({},e),{},{className:i()("".concat(n,"-backdrop"),Q,!S&&"show")}))}),[S,Q,n]),Pe=(0,o.Z)((0,o.Z)({},c),ne);S||(Pe.display="block");return(0,P.jsx)(C.Z.Provider,{value:be,children:(0,P.jsx)(g.Z,{show:R,ref:ve,backdrop:F,container:_,keyboard:!0,autoFocus:L,enforceFocus:B,restoreFocus:K,restoreFocusOptions:W,onEscapeKeyDown:function(e){I||"static"!==F?I&&T&&T(e):(e.preventDefault(),we())},onShow:D,onHide:A,onEnter:function(e,t){e&&(e.style.display="block",ge(e)),null==q||q(e,t)},onEntering:function(e,t){null==X||X(e,t),(0,l.ZP)(window,"resize",je)},onEntered:J,onExit:function(e){null==ue.current||ue.current(),null==U||U(e)},onExiting:V,onExited:function(e){e&&(e.style.display=""),null==G||G(e),(0,f.Z)(window,"resize",je)},manager:xe(),transition:S?M:void 0,backdropTransition:S?z:void 0,renderBackdrop:Oe,renderDialog:function(e){return(0,P.jsx)("div",(0,o.Z)((0,o.Z)({role:"dialog"},e),{},{style:Pe,className:i()(r,n,oe&&"".concat(n,"-static")),onClick:F?Ce:void 0,onMouseUp:Ne,"aria-labelledby":k,children:(0,P.jsx)(E,(0,o.Z)((0,o.Z)({},$),{},{onMouseDown:Ze,className:Z,contentClassName:N,children:w}))}))}})})}));B.displayName="Modal",B.defaultProps=L;var K=Object.assign(B,{Body:w,Header:D,Title:_,Footer:S,Dialog:R,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},81965:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(72791)),a=c(n(52007)),s=n(43504),o=["children","onClick","replace","to","activeClassName","className","activeStyle","style","isActive"];function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.children,n=e.onClick,a=e.replace,c=e.to,i=e.activeClassName,u=e.className,p=e.activeStyle,m=e.style,v=e.isActive,h=f(e,o),y="object"===d(c)?c.pathname:c,b=(0,s.useNavigate)(),x=(0,s.useHref)("string"===typeof c?{pathname:c}:c),g=(0,s.useMatch)(y),j=(0,s.useLocation)(),Z=r.default.Children.only(t),N=!!(v?"function"===typeof v?v(g,j):v:g);return r.default.cloneElement(Z,l(l({},h),{},{className:[u,Z.props.className,N?i:null].join(" ").trim(),style:N?l(l({},m),p):m,href:x,onClick:function(e){t.props.onClick&&t.props.onClick(e),n&&n(e),e.defaultPrevented||0!==e.button||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),b(c,{replace:a}))}}))};p.propTypes={children:a.default.element.isRequired,onClick:a.default.func,replace:a.default.bool,to:a.default.oneOfType([a.default.string,a.default.object]).isRequired,className:a.default.string,activeClassName:a.default.string,style:a.default.objectOf(a.default.oneOfType([a.default.string,a.default.number])),activeStyle:a.default.objectOf(a.default.oneOfType([a.default.string,a.default.number])),isActive:a.default.oneOfType([a.default.func,a.default.bool])},p.defaultProps={replace:!1,activeClassName:"active",onClick:null,className:null,style:null,activeStyle:null,isActive:null};var m=p;t.default=m},81564:function(e,t,n){Object.defineProperty(t,"J",{enumerable:!0,get:function(){return a.default}});var r,a=(r=n(81965))&&r.__esModule?r:{default:r}}}]);
//# sourceMappingURL=401.733d6e6b.chunk.js.map