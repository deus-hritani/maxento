/*! @version 0.0.1-55d0bd1c86dd20165df3 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{TN8f:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".createAccountPage-container-p4Q {\n    margin: 16px auto 0;\n    max-width: 360px;\n}\n",""]),n.locals={container:"createAccountPage-container-p4Q"}},YQ8e:function(e,n,t){"use strict"
t.r(n)
var a=t("q1tI"),c=t.n(a),r=t("17x9"),i=t("lSNA"),o=t.n(i),s=t("MVZn"),u=t.n(s),l=t("Ty5D"),p=["email","firstName","lastName"],f=function useCreateAccountPage(){var e=Object(l.g)(),n=Object(l.h)().search
return{handleCreateAccount:Object(a.useCallback)(function(){e.push("/")},[e]),initialValues:Object(a.useMemo)(function(){return function getCreateAccountInitialValues(e){var n=new URLSearchParams(e)
return p.reduce(function(e,t){return u()({},e,o()({},t,n.get(t)))},{})}(n)},[n])}},d=t("+h8t"),h=t("y1Xp"),m=t("tkRL"),b=t.n(m),g=function CreateAccountPage(e){var n=f(),t=n.initialValues,a=n.handleCreateAccount,r=Object(h.a)(b.a,e.classes)
return c.a.createElement("div",{className:r.container},c.a.createElement(d.a,{initialValues:t,isCancelButtonHidden:!0,onSubmit:a}))}
g.propTypes={classes:Object(r.shape)({container:r.string}),initialValues:Object(r.shape)({})}
var v=g
t.d(n,"default",function(){return v})},tkRL:function(e,n,t){var a=t("TN8f")
"string"==typeof a&&(a=[[e.i,a,""]])
var c={hmr:!0,transform:void 0,insertInto:void 0}
t("aET+")(a,c)
a.locals&&(e.exports=a.locals)}}])
