/*! @version 0.0.1-55d0bd1c86dd20165df3 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3Xft":function(e,t,n){var a=n("rtFg")
"string"==typeof a&&(a=[[e.i,a,""]])
var r={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(a,r)
a.locals&&(e.exports=a.locals)},"3nHv":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".categoryTile-root-29o {\n    display: block;\n    line-height: 1rem;\n    text-align: center;\n    width: 6rem;\n}\n\n.categoryTile-imageContainer-3pz {\n    margin: 0 0.5rem 1rem 0.5rem;\n}\n\n.categoryTile-image-1k7 {\n    border-radius: 50%;\n    box-shadow: 0 0 0 1px rgb(var(--venia-global-color-border));\n    display: block;\n    height: 5rem;\n    object-fit: cover;\n    object-position: center;\n}\n\n.categoryTile-image_empty-224 {\n}\n\n.categoryTile-name-3et {\n    display: block;\n}\n",""]),t.locals={root:"categoryTile-root-29o",imageContainer:"categoryTile-imageContainer-3pz",image:"categoryTile-image-1k7",image_empty:"categoryTile-image_empty-224 categoryTile-image-1k7",name:"categoryTile-name-3et"}},"Dx+2":function(e,t,n){"use strict"
n.r(t)
var a,r,i=n("q1tI"),o=n.n(i),c=n("17x9"),s=n("DUu4"),l=n("J4zp"),g=n.n(l),m=n("VX74"),u=n("y1Xp"),d=n("OlZo"),y=n("VkAN"),p=n.n(y),f={getCMSPageQuery:Object(m.gql)(a||(a=p()(["\n    query GetCmsPage($id: Int!) {\n        cmsPage(id: $id) {\n            url_key\n            content\n            content_heading\n            title\n            page_layout\n            meta_title\n            meta_keywords\n            meta_description\n        }\n        storeConfig {\n            id\n            root_category_id\n        }\n    }\n"])))},h=n("STDB"),b=n("cDf5"),v=n.n(b),_=n("MVZn"),E=n.n(_),w=n("kriW"),j={getCategoryListQuery:Object(m.gql)(r||(r=p()(["\n    query GetCategoryList($id: Int!) {\n        category(id: $id) {\n            id\n            children {\n                id\n                name\n                url_key\n                url_path\n                url_suffix\n                children_count\n                path\n                image\n                productImagePreview: products(pageSize: 1) {\n                    items {\n                        id\n                        small_image {\n                            url\n                        }\n                    }\n                }\n            }\n        }\n    }\n"])))},C=n("PVkr"),P=n.n(C),L=n("55Ip"),O=n("OlhY"),k=n("n60m"),T=n.n(k),x=function CategoryTile(e){var t=function useCategoryTile(e){var t=e.item,n=t.image,a=t.productImagePreview
return{image:Object(i.useMemo)(function(){var e=a.items[0]
return n?{url:n,type:"image-category",width:480}:e?{url:e.small_image,type:"image-product",width:480}:{url:"",type:"image-category",width:480}},[n,a]),item:Object(i.useMemo)(function(){return{name:t.name,url:"/".concat(t.url_key).concat(t.url_suffix)}},[t])}}({item:e.item}),n=t.image,a=t.item,r=Object(u.a)(T.a,e.classes),c=Object(i.useMemo)(function(){return n.url?o.a.createElement(O.a,{alt:a.name,classes:{image:r.image,root:r.imageContainer},resource:n.url,type:n.type,width:80}):o.a.createElement("span",{className:r.image_empty})},[r.image,r.image_empty,r.imageContainer,n.type,n.url,a.name])
return o.a.createElement(L.b,{className:r.root,to:a.url},c,o.a.createElement("span",{className:r.name},a.name))}
x.propTypes={item:Object(c.shape)({image:c.string,name:c.string.isRequired,productImagePreview:Object(c.shape)({items:Object(c.arrayOf)(Object(c.shape)({small_image:c.string}))}),url_key:c.string.isRequired}).isRequired,classes:Object(c.shape)({item:c.string,image:c.string,imageContainer:c.string,name:c.string})}
var I=x,N=function mapCategory(e){var t=e.productImagePreview.items
return E()({},e,{productImagePreview:{items:t.map(function(e){var t=e.small_image
return E()({},e,{small_image:"object"===v()(t)?t.url:t})})}})},M=function CategoryList(e){var t,n=e.id,a=e.title,r=function useCategoryList(e){var t=e.id,n=Object(u.a)(j,e.operations).getCategoryListQuery,a=Object(m.useLazyQuery)(n,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),r=g()(a,2),o=r[0],c=r[1],s=c.loading,l=c.error,d=c.data
return Object(i.useEffect)(function(){t&&o({variables:{id:t}})},[t,o]),{childCategories:d&&d.category&&d.category.children||null,error:l,loading:s}}({id:n}),c=r.childCategories,l=r.error,d=r.loading,y=Object(u.a)(P.a,e.classes),p=a?o.a.createElement("div",{className:y.header},o.a.createElement("h2",{className:y.title},o.a.createElement("span",null,a))):null
return l&&(t=o.a.createElement("div",{className:y.fetchError},o.a.createElement(w.a,{id:"categoryList.errorFetch",defaultMessage:"Data Fetch Error: "}),o.a.createElement("pre",null,l.message))),t=d||!c?s.a:0===c.length?o.a.createElement("div",{className:y.noResults},o.a.createElement(w.a,{id:"categoryList.noResults",defaultMessage:"No child categories found."})):o.a.createElement("div",{className:y.content},c.map(function(e){return o.a.createElement(I,{item:N(e),key:e.url_key})})),o.a.createElement("div",{className:y.root},p,t)}
M.propTypes={id:c.number.isRequired,title:c.string,classes:Object(c.shape)({root:c.string,header:c.string,content:c.string})}
var z=M,D=n("UPvi"),q=n("dDsW"),F=n("3Xft"),R=n.n(F),S=function CMSPage(e){var t=function useCmsPage(e){var t=e.id,n=Object(u.a)(f,e.operations).getCMSPageQuery,a=Object(m.useQuery)(n,{variables:{id:Number(t)},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),r=a.loading,o=a.error,c=a.data,s=Object(d.b)(),l=g()(s,2)[1].actions.setPageLoading
Object(i.useEffect)(function(){return function(){l(!1)}},[l]),Object(i.useEffect)(function(){l(r)},[r,l])
var y=!c,p=c?c.cmsPage:null,h=c?c.storeConfig.root_category_id:null,b=Object(i.useMemo)(function(){return p&&p.content&&p.content.length>0&&!p.content.includes("CMS homepage content goes here.")},[p])
return{cmsPage:p,error:o,hasContent:b,rootCategoryId:h,shouldShowLoadingIndicator:y}}({id:e.id}),n=t.cmsPage,a=t.hasContent,r=t.rootCategoryId,c=t.shouldShowLoadingIndicator,l=Object(q.a)().formatMessage
if(c)return s.a
var y=Object(u.a)(R.a,e.classes)
if(a){var p=n.content_heading,b=n.title,v=n.meta_title,_=n.meta_description,E=n.content,w=""!==p?o.a.createElement("h1",{className:y.heading},p):null,j=v||b
return o.a.createElement(i.Fragment,null,o.a.createElement(D.b,null,j),o.a.createElement(D.a,{name:"title",content:j}),o.a.createElement(D.a,{name:"description",content:_}),w,o.a.createElement(h.a,{html:E}))}return o.a.createElement(z,{title:l({id:"cms.shopByCategory",defaultMessage:"Shop by category"}),id:r})}
S.propTypes={id:c.number,classes:Object(c.shape)({heading:c.string})}
var Y=S
n.d(t,"default",function(){return Y})},PVkr:function(e,t,n){var a=n("wY90")
"string"==typeof a&&(a=[[e.i,a,""]])
var r={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(a,r)
a.locals&&(e.exports=a.locals)},n60m:function(e,t,n){var a=n("3nHv")
"string"==typeof a&&(a=[[e.i,a,""]])
var r={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(a,r)
a.locals&&(e.exports=a.locals)},rtFg:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".cms-root-3KW {\n    padding: 1rem;\n}\n\n.cms-title-3kN {\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n}\n\n.cms-layout_default-2YE {\n    padding: 0;\n}\n\n.cms-layout_1column-zAr {\n}\n",""]),t.locals={root:"cms-root-3KW",title:"cms-title-3kN",layout_default:"cms-layout_default-2YE",layout_1column:"cms-layout_1column-zAr cms-layout_default-2YE"}},wY90:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".categoryList-root-1FL {\n    padding: 1rem;\n}\n\n.categoryList-header-2W8 {\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n.categoryList-title-H-g {\n    text-transform: uppercase;\n}\n\n.categoryList-content-PaY {\n    display: grid;\n    grid-gap: 3rem 1rem;\n    grid-template-columns: repeat(auto-fit, 6rem);\n    justify-content: center;\n}\n\n.categoryList-fetchError-z3_ {\n    background-color: rgb(var(--venia-global-color-warning-light));\n    color: rgb(var(--venia-global-color-warning-dark));\n}\n\n.categoryList-fetchingData-1ew {\n    color: rgb(--venia-global-color-gray);\n}\n\n.categoryList-noResults-2Pl {\n}\n",""]),t.locals={root:"categoryList-root-1FL",header:"categoryList-header-2W8",title:"categoryList-title-H-g",content:"categoryList-content-PaY",fetchError:"categoryList-fetchError-z3_",fetchingData:"categoryList-fetchingData-1ew",noResults:"categoryList-noResults-2Pl categoryList-fetchingData-1ew"}}}])