/*! @version 0.0.1-55d0bd1c86dd20165df3 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{M53w:function(t,n,e){var o=e("rce9")
"string"==typeof o&&(o=[[t.i,o,""]])
var r={hmr:!0,transform:void 0,insertInto:void 0}
e("aET+")(o,r)
o.locals&&(t.exports=o.locals)},UNp6:function(t,n,e){"use strict"
e.r(n)
var o=e("RIqP"),r=e.n(o),i=e("q1tI"),a=e.n(i),s=e("17x9"),c=e("pwkN"),p=e.n(c),l=e("M53w"),g=e.n(l),u=e("UpPT"),d=e.n(u),m=e("y1Xp"),b=e("wiT2"),f=function getLocationFormattedAsHtml(t){var n=t.name?"<h3>".concat(d()(t.name),"</h3>"):"",e=t.comment?'<p class="map-comment">'.concat(d()(t.comment).replace(/(?:\r\n|\r|\n)/g,"<br>"),"</p>"):"",o=t.phone?"Phone: ".concat(d()(t.phone),"<br>"):"",r=t.address?"".concat(d()(t.address),"<br>"):"",i=t.city?d()(t.city):"",a=t.country?d()(t.country):"",s=t.state?d()(t.state)+" ":"",c=t.zipcode?d()(t.zipcode):"",p=i.length&&(s.length||c.length)?", ":"",l=i.length||c.length?"<br>":""
return'\n    <div class="map-popup">\n        '.concat(n,"\n        ").concat(e,"\n        <p><span>").concat(o).concat(r).concat(i).concat(p).concat(s).concat(c).concat(l).concat(a,"</span></p>\n    </div>\n")},h=function GoogleMap(t){var n=Object(i.useRef)(null),e=Object(m.a)(g.a,t.classes),o=t.apiKey,s=t.locations,c=t.height,l=t.mapOptions,u=t.textAlign,d=t.border,h=t.borderColor,y=t.borderWidth,j=t.borderRadius,w=t.marginTop,O=t.marginRight,v=t.marginBottom,x=t.marginLeft,T=t.paddingTop,L=t.paddingRight,M=t.paddingBottom,R=t.paddingLeft,k=t.cssClasses,C=void 0===k?[]:k,E={height:c,textAlign:u,border:d,borderColor:h,borderWidth:y,borderRadius:j,marginTop:w,marginRight:O,marginBottom:v,marginLeft:x,paddingTop:T,paddingRight:L,paddingBottom:M,paddingLeft:R}
return Object(i.useEffect)(function(){if(s.length){var t,e=[],r={key:o,v:"3"}
return p()(r).then(function(o){t=o.event
var r,i=new o.Map(n.current,l),a=[]
if(s.forEach(function(t){var n=new o.LatLng(t.position.latitude,t.position.longitude)
a.push(n)
var s=new o.Marker({map:i,position:n,title:t.name}),c=new o.InfoWindow({content:f(t),maxWidth:350})
s.addListener("click",function(){r&&r.close(),c.open(i,s),r=c}),e.push(s),e.push(c)}),a.length>1){var c=new o.LatLngBounds
a.forEach(function(t){c.extend(t)}),i.fitBounds(c)}1===a.length&&(i.setCenter(a[0]),i.setZoom(b.b.mapOptions.zoom))}).catch(function(t){}),function(){t&&e.forEach(function(n){t.clearInstanceListeners(n)})}}},[o,s,l]),s.length?a.a.createElement("div",{ref:n,style:E,className:[e.root].concat(r()(C)).join(" ")}):null}
h.propTypes={classes:Object(s.shape)({root:s.string}),apiKey:s.string,height:s.string,mapOptions:Object(s.shape)({zoom:s.number,center:Object(s.shape)({lat:s.number,lng:s.number}),scrollwheel:s.bool,disableDoubleClickZoom:s.bool,disableDefaultUI:s.bool,mapTypeControl:s.bool,mapTypeControlStyle:Object(s.shape)({style:s.number})}),locations:Object(s.arrayOf)(Object(s.shape)({position:Object(s.shape)({latitude:s.number.isRequired,longitude:s.number.isRequired}),name:s.string,phone:s.string,address:s.string,city:s.string,state:s.string,zipcode:s.string,country:s.string,comment:s.string,styles:Object(s.arrayOf)(Object(s.shape)({featureType:s.string,elementType:s.string,stylers:Object(s.arrayOf)(s.object)}))})).isRequired,textAlign:s.string,border:s.string,borderColor:s.string,borderWidth:s.string,borderRadius:s.string,marginTop:s.string,marginRight:s.string,marginBottom:s.string,marginLeft:s.string,paddingTop:s.string,paddingRight:s.string,paddingBottom:s.string,cssClasses:Object(s.arrayOf)(s.string)},h.defaultProps=b.b
var y=h
e.d(n,"default",function(){return y})},UpPT:function(t,n,e){(function(n){var e=1/0,o="[object Symbol]",r=/[&<>"'`]/g,i=RegExp(r.source),a="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,c=a||s||Function("return this")()
var p=function basePropertyOf(t){return function(n){return null==t?void 0:t[n]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"}),l=Object.prototype.toString,g=c.Symbol,u=g?g.prototype:void 0,d=u?u.toString:void 0
function baseToString(t){if("string"==typeof t)return t
if(function isSymbol(t){return"symbol"==typeof t||function isObjectLike(t){return!!t&&"object"==typeof t}(t)&&l.call(t)==o}(t))return d?d.call(t):""
var n=t+""
return"0"==n&&1/t==-e?"-0":n}t.exports=function escape(t){return(t=function toString(t){return null==t?"":baseToString(t)}(t))&&i.test(t)?t.replace(r,p):t}}).call(this,e("yLpj"))},pwkN:function(t,n){const e="__googleMapsApiOnLoadCallback",o=["channel","client","key","language","region","v"]
let r=null
t.exports=function(t={}){return r=r||new Promise(function(n,r){const i=setTimeout(function(){window[e]=function(){},r(new Error("Could not load the Google Maps API"))},t.timeout||1e4)
window[e]=function(){null!==i&&clearTimeout(i),n(window.google.maps),delete window[e]}
const a=document.createElement("script"),s=[`callback=${e}`]
o.forEach(function(n){t[n]&&s.push(`${n}=${t[n]}`)}),t.libraries&&t.libraries.length&&s.push(`libraries=${t.libraries.join(",")}`),a.src=`${t.apiUrl||"https://maps.googleapis.com/maps/api/js"}?${s.join("&")}`,document.body.appendChild(a)})}},rce9:function(t,n,e){(n=t.exports=e("JPst")(!1)).push([t.i,".map-root-1Mj {\n    height: 300px;\n}\n.map-root-1Mj .gm-style .gm-style-iw-c {\n    padding: 18px;\n}\n.map-root-1Mj .map-popup {\n    min-width: 200px;\n}\n.map-root-1Mj .map-popup h3 {\n    margin: 0 0 18px 0;\n    font-weight: 300;\n}\n.map-root-1Mj .map-popup p {\n    font-size: 16px;\n}\n.map-root-1Mj .map-popup p.map-comment {\n    font-size: 14px;\n}\n.map-root-1Mj .gm-style img {\n    max-width: none;\n    max-height: none;\n    margin: 0;\n}\n",""]),n.locals={root:"map-root-1Mj"}}}])
