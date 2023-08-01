"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[375],{8375:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var i=t(7689),r=t(8650),a=t(5048),c=(t(2791),t(1087)),s=t(3329),o=function(){return(0,s.jsx)("div",{style:{fontSize:"23px",fontStyle:"italic"},children:(0,s.jsx)("nav",{children:(0,s.jsx)(c.OL,{to:"contacts",children:"Contacts"})})})},l=t(9439),u=t(6306),d=t(824),f=t(6582),p=t(884),h=t(9055),x=function(){var n=(0,a.v9)(r.vW),e=(0,u.Zn)(),t=(0,l.Z)(e,1)[0];return(0,s.jsx)(d.xu,{children:(0,s.jsxs)(f.k,{h:16,alignItems:"center",children:[(0,s.jsxs)(p.x,{fontSize:"23px",color:"green",mr:30,children:["Hi, ",n," !"]}),(0,s.jsx)(h.z,{type:"button",bg:"burlywood",width:"100px",borderRadius:"3px",padding:"23px",color:"white",_hover:{bg:"#fc2706"},onClick:function(){t()},children:"Log Out"})]})})},m=function(){return(0,s.jsx)(d.xu,{children:(0,s.jsxs)(f.k,{alignItems:"center",justifyContent:"space-evenly",children:[(0,s.jsx)(o,{}),(0,s.jsx)(x,{})]})})},g=function(){var n=(0,a.v9)(r.Vp);return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(m,{}),(0,s.jsx)(i.j3,{})]})}},9055:function(n,e,t){t.d(e,{z:function(){return k}});var i=t(4925),r=t(1413),a=t(9439),c=t(2791);var s=(0,t(9886).k)({strict:!1,name:"ButtonGroupContext"}),o=(0,a.Z)(s,2),l=(o[0],o[1]),u=t(5113),d=t(6992),f=t(3329),p=["children","className"];function h(n){var e=n.children,t=n.className,a=(0,i.Z)(n,p),s=(0,c.isValidElement)(e)?(0,c.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,o=(0,d.cx)("chakra-button__icon",t);return(0,f.jsx)(u.m.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:o,children:s}))}h.displayName="ButtonIcon";var x=t(4942),m=t(2577),g=["label","placement","spacing","children","className","__css"];function v(n){var e=n.label,t=n.placement,a=n.spacing,s=void 0===a?"0.5rem":a,o=n.children,l=void 0===o?(0,f.jsx)(m.$,{color:"currentColor",width:"1em",height:"1em"}):o,p=n.className,h=n.__css,v=(0,i.Z)(n,g),j=(0,d.cx)("chakra-button__spinner",p),Z="start"===t?"marginEnd":"marginStart",_=(0,c.useMemo)((function(){var n;return(0,r.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,x.Z)(n,Z,e?s:0),(0,x.Z)(n,"fontSize","1em"),(0,x.Z)(n,"lineHeight","normal"),n),h)}),[h,e,Z,s]);return(0,f.jsx)(u.m.div,(0,r.Z)((0,r.Z)({className:j},v),{},{__css:_,children:l}))}v.displayName="ButtonSpinner";var j=t(4591),Z=t(5597),_=t(6232),b=t(2996),y=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,Z.G)((function(n,e){var t=l(),s=(0,_.mq)("Button",(0,r.Z)((0,r.Z)({},t),n)),o=(0,b.Lr)(n),p=o.isDisabled,h=void 0===p?null==t?void 0:t.isDisabled:p,x=o.isLoading,m=o.isActive,g=o.children,Z=o.leftIcon,k=o.rightIcon,w=o.loadingText,S=o.iconSpacing,I=void 0===S?"0.5rem":S,C=o.type,B=o.spinner,q=o.spinnerPlacement,T=void 0===q?"start":q,z=o.className,A=o.as,E=(0,i.Z)(o,y),L=(0,c.useMemo)((function(){var n=(0,r.Z)((0,r.Z)({},null==s?void 0:s._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s),!!t&&{_focus:n})}),[s,t]),D=function(n){var e=(0,c.useState)(!n),t=(0,a.Z)(e,2),i=t[0],r=t[1];return{ref:(0,c.useCallback)((function(n){n&&r("BUTTON"===n.tagName)}),[]),type:i?"button":void 0}}(A),G=D.ref,O=D.type,P={rightIcon:k,leftIcon:Z,iconSpacing:I,children:g};return(0,f.jsxs)(u.m.button,(0,r.Z)((0,r.Z)({ref:(0,j.qq)(e,G),as:A,type:null!=C?C:O,"data-active":(0,d.PB)(m),"data-loading":(0,d.PB)(x),__css:L,className:(0,d.cx)("chakra-button",z)},E),{},{disabled:h||x,children:[x&&"start"===T&&(0,f.jsx)(v,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:I,children:B}),x?w||(0,f.jsx)(u.m.span,{opacity:0,children:(0,f.jsx)(N,(0,r.Z)({},P))}):(0,f.jsx)(N,(0,r.Z)({},P)),x&&"end"===T&&(0,f.jsx)(v,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:I,children:B})]}))}));function N(n){var e=n.leftIcon,t=n.rightIcon,i=n.children,r=n.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(h,{marginEnd:r,children:e}),i,t&&(0,f.jsx)(h,{marginStart:r,children:t})]})}k.displayName="Button"},884:function(n,e,t){t.d(e,{x:function(){return p}});var i=t(1413),r=t(4925),a=t(5597),c=t(6232),s=t(2996),o=t(5113),l=t(6992),u=t(2796),d=t(3329),f=["className","align","decoration","casing"],p=(0,a.G)((function(n,e){var t=(0,c.mq)("Text",n),a=(0,s.Lr)(n),p=(a.className,a.align,a.decoration,a.casing,(0,r.Z)(a,f)),h=(0,u.o)({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,d.jsx)(o.m.p,(0,i.Z)((0,i.Z)((0,i.Z)({ref:e,className:(0,l.cx)("chakra-text",n.className)},h),p),{},{__css:t}))}));p.displayName="Text"},6582:function(n,e,t){t.d(e,{k:function(){return l}});var i=t(1413),r=t(4925),a=t(5597),c=t(5113),s=t(3329),o=["direction","align","justify","wrap","basis","grow","shrink"],l=(0,a.G)((function(n,e){var t=n.direction,a=n.align,l=n.justify,u=n.wrap,d=n.basis,f=n.grow,p=n.shrink,h=(0,r.Z)(n,o),x={display:"flex",flexDirection:t,alignItems:a,justifyContent:l,flexWrap:u,flexBasis:d,flexGrow:f,flexShrink:p};return(0,s.jsx)(c.m.div,(0,i.Z)({ref:e,__css:x},h))}));l.displayName="Flex"},2796:function(n,e,t){function i(n){var e=Object.assign({},n);for(var t in e)void 0===e[t]&&delete e[t];return e}t.d(e,{o:function(){return i}})},4591:function(n,e,t){t.d(e,{lq:function(){return a},qq:function(){return c}});var i=t(2791);function r(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(t){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}function a(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){e.forEach((function(e){r(e,n)}))}}function c(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,i.useMemo)((function(){return a.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=375.d9ba7206.chunk.js.map