/*! @version 0.0.1-55d0bd1c86dd20165df3 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+sGa":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".myAccount-root-NhM {\n    display: grid;\n    grid-auto-flow: row;\n    row-gap: 1.5rem;\n}\n",""]),t.locals={root:"myAccount-root-NhM"}},"K+Bs":function(e,t,n){(t=e.exports=n("JPst")(!1)).i(n("uFFw"),""),t.i(n("ysJs"),""),t.push([e.i,".authModal-root-1aT {\n    display: block;\n}\n\n.authModal-createAccountActions-1fu {\n    grid-auto-flow: row;\n}\n\n.authModal-createAccountSubmitButton-3TV {\n    grid-column-start: auto;\n}\n",""]),t.locals={root:"authModal-root-1aT",createAccountActions:"authModal-createAccountActions-1fu "+n("uFFw").locals.actions,createAccountSubmitButton:"authModal-createAccountSubmitButton-3TV "+n("ysJs").locals.root_highPriority}},LMJ6:function(e,t,n){var o=n("+sGa")
"string"==typeof o&&(o=[[e.i,o,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(o,a)
o.locals&&(e.exports=o.locals)},"TM/D":function(e,t,n){var o=n("K+Bs")
"string"==typeof o&&(o=[[e.i,o,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(o,a)
o.locals&&(e.exports=o.locals)},"yu8+":function(e,t,n){"use strict"
n.r(t)
var o,a=n("q1tI"),c=n.n(a),s=n("17x9"),u=n("o0o1"),r=n.n(u),i=n("yXPU"),l=n.n(i),d=n("J4zp"),h=n.n(d),O=n("Ty5D"),w=n("VX74"),b=n("y1Xp"),f=n("cG95"),g=n("GpxZ"),A=n("FITH"),m=n("VkAN"),C=n.n(m),p={signOutMutation:Object(w.gql)(o||(o=C()(["\n    mutation SignOutFromModal {\n        revokeCustomerToken {\n            result\n        }\n    }\n"])))},M=["CREATE_ACCOUNT","FORGOT_PASSWORD","SIGN_IN"],S=n("+h8t"),j=n("jBXQ"),v=n("OlZo"),y=n("1Ek8"),T=n("LMJ6"),k=n.n(T),E=function MyAccount(e){var t=e.classes,n=e.onSignOut,o=e.onClose,s=Object(b.a)(k.a,t),u=function useMyAccount(e){var t=e.onSignOut,n=Object(v.b)(),o=h()(n,2)[1].closeDrawer,c=Object(O.h)(),s=Object(a.useRef)(!1),u=Object(a.useCallback)(function(){o(),t()},[o,t])
return Object(a.useEffect)(function(){s.current?o():s.current=!0},[o,c.key]),{handleSignOut:u}}({onSignOut:n,onClose:o}),r=u.handleSignOut,i=u.handleClose
return c.a.createElement("div",{className:s.root},c.a.createElement(y.a,{onSignOut:r,onClose:i}))},R=E
E.propTypes={classes:Object(s.shape)({actions:s.string,root:s.string,subtitle:s.string,title:s.string,user:s.string}),onSignOut:s.func.isRequired}
var F=n("i8h6"),N=n("TM/D"),_=n.n(N),I=function AuthModal(e){var t=function useAuthModal(e){var t=e.closeDrawer,n=e.showCreateAccount,o=e.showForgotPassword,c=e.showMainMenu,s=e.showMyAccount,u=e.showSignIn,i=e.view,d=Object(b.a)(p,e.operations).signOutMutation,m=Object(w.useApolloClient)(),C=Object(a.useState)(!1),S=h()(C,2),j=S[0],v=S[1],y=Object(a.useState)(""),T=h()(y,2),k=T[0],E=T[1],R=Object(A.b)(),F=h()(R,2),N=F[0],_=N.currentUser,I=N.isSignedIn,P=F[1].signOut,x=Object(w.useMutation)(d),q=h()(x,1)[0],B=Object(O.g)()
Object(a.useEffect)(function(){_&&_.email&&M.includes(i)&&s()},[_,s,i]),Object(a.useEffect)(function(){I||"MY_ACCOUNT"!==i||j||c()},[I,j,c,i])
var D=Object(a.useCallback)(function(){c(),t()},[t,c])
return{handleCancel:Object(a.useCallback)(function(){u()},[u]),handleClose:D,handleCreateAccount:Object(a.useCallback)(function(){s()},[s]),handleSignOut:Object(a.useCallback)(l()(r.a.mark(function _callee(){return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,P({revokeToken:q})
case 3:return e.next=5,Object(f.a)(m)
case 5:return e.next=7,Object(g.a)(m)
case 7:B.go(0)
case 8:case"end":return e.stop()}},_callee)})),[m,B,q,P]),setUsername:E,showCreateAccount:n,showForgotPassword:o,showMyAccount:s,username:k}}(e),n=t.handleCancel,o=t.handleCreateAccount,s=t.handleSignOut,u=t.setUsername,i=t.showCreateAccount,d=t.showForgotPassword,m=t.showMyAccount,C=t.username,v=Object(b.a)(_.a,e.classes),y=null
switch(e.view){case"CREATE_ACCOUNT":y=c.a.createElement(S.a,{classes:{actions:v.createAccountActions,submitButton:v.createAccountSubmitButton},initialValues:{email:C},isCancelButtonHidden:!1,onSubmit:o,onCancel:n})
break
case"FORGOT_PASSWORD":y=c.a.createElement(j.a,{initialValues:{email:C},onCancel:n})
break
case"MY_ACCOUNT":y=c.a.createElement(R,{onSignOut:s})
break
case"SIGN_IN":default:y=c.a.createElement(F.a,{setDefaultUsername:u,showCreateAccount:i,showForgotPassword:d,showMyAccount:m})}return c.a.createElement("div",{className:v.root},y)},P=I
I.propTypes={classes:Object(s.shape)({root:s.string}),closeDrawer:s.func.isRequired,showCreateAccount:s.func.isRequired,showForgotPassword:s.func.isRequired,showMyAccount:s.func.isRequired,showMainMenu:s.func.isRequired,showSignIn:s.func.isRequired,view:s.string},n.d(t,"default",function(){return P})}}])
