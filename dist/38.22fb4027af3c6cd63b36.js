/*! @version 0.0.1-55d0bd1c86dd20165df3 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{MHbn:function(r,n,t){"use strict"
t.r(n)
var a=t("RIqP"),o=t.n(a),e=t("q1tI"),i=t.n(e),s=t("17x9"),d=t("OS56"),g=t.n(d),p=t("YZSi"),l=t.n(p),b=t("y1Xp"),c=t("JOgF"),m=function Slider(r){var n=Object(b.a)(l.a,r.classes),t=r.minHeight,a=r.autoplay,s=r.autoplaySpeed,d=r.fade,p=r.infinite,m=r.showArrows,f=r.showDots,u=r.textAlign,h=r.border,y=r.borderColor,w=r.borderWidth,O=r.borderRadius,v=r.marginTop,R=r.marginRight,T=r.marginBottom,j=r.marginLeft,C=r.paddingTop,L=r.paddingRight,S=r.paddingBottom,k=r.paddingLeft,x=r.cssClasses,B=void 0===x?[]:x,A=r.children,W={minHeight:t,textAlign:u,border:h,borderColor:y,borderWidth:w,borderRadius:O,marginTop:v,marginRight:R,marginBottom:T,marginLeft:j,paddingTop:C,paddingRight:L,paddingBottom:S,paddingLeft:k},H={},P={dots:f,arrows:m,afterChange:function afterChange(){Object.keys(H).map(function(r){Object(c.jarallax)(H[r].element,"onScroll")})},infinite:p,autoplay:a,autoplaySpeed:s,fade:d}
return e.Children.map(A,function(r,t){return r.props&&r.props.data&&(r.props.data.classes={root:n.bannerRoot,link:n.bannerLink,wrapper:n.bannerWrapper,posterOverlay:n.bannerPosterOverlay},r.props.data.getParallax=function(r,n){H[t]={element:r,options:n}}),r}),i.a.createElement("div",{className:[n.root].concat(o()(B)).join(" "),style:W},i.a.createElement(g.a,P,A))}
m.propTypes={classes:Object(s.shape)({root:s.string,bannerRoot:s.string,bannerLink:s.string,bannerWrapper:s.string,bannerPosterOverlay:s.string}),appearance:Object(s.oneOf)(["default"]),minHeight:s.string,autoplay:s.bool,autoplaySpeed:s.number,fade:s.bool,infinite:s.bool,showArrows:s.bool,showDots:s.bool,textAlign:s.string,border:s.string,borderColor:s.string,borderWidth:s.string,borderRadius:s.string,marginTop:s.string,marginRight:s.string,marginBottom:s.string,marginLeft:s.string,paddingTop:s.string,paddingRight:s.string,paddingBottom:s.string,paddingLeft:s.string,cssClasses:Object(s.arrayOf)(s.string)}
var f=m
t.d(n,"default",function(){return f})},YZSi:function(r,n,t){var a=t("kgOT")
"string"==typeof a&&(a=[[r.i,a,""]])
var o={hmr:!0,transform:void 0,insertInto:void 0}
t("aET+")(a,o)
a.locals&&(r.exports=a.locals)}}])
