"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[230],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:4,title:"Form customisation"},o=void 0,c={unversionedId:"going-further/form-customisation",id:"going-further/form-customisation",title:"Form customisation",description:"Predicate and attribute labels in forms may be specified with I18n in a translation file (see the locale files in Ransack:",source:"@site/docs/going-further/form-customisation.md",sourceDirName:"going-further",slug:"/going-further/form-customisation",permalink:"/ransack/going-further/form-customisation",draft:!1,editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/form-customisation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Form customisation"},sidebar:"tutorialSidebar",previous:{title:"i18n",permalink:"/ransack/going-further/i18n"},next:{title:"Merging searches",permalink:"/ransack/going-further/merging-searches"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Predicate and attribute labels in forms may be specified with I18n in a translation file (see the locale files in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/activerecord-hackery/ransack/tree/main/lib/ransack/locale"},"Ransack::Locale")," for more examples):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# locales/en.yml\nen:\n  ransack:\n    asc: ascending\n    desc: descending\n    predicates:\n      cont: contains\n      not_cont: not contains\n      start: starts with\n      end: ends with\n      gt: greater than\n      lt: less than\n    attributes:\n      person:\n        name: Full Name\n      article:\n        title: Article Title\n        body: Main Content\n")),(0,a.kt)("p",null,"The names of attribute fields may also be changed globally or under activerecord:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# locales/en.yml\nen:\n  attributes:\n    model_name:\n      model_field1: field name1\n      model_field2: field name2\n  activerecord:\n    attributes:\n      namespace/article:\n        title: AR Namespaced Title\n      namespace_article:\n        title: Old Ransack Namespaced Title\n")),(0,a.kt)("p",null,"To limit the predicates in the ",(0,a.kt)("inlineCode",{parentName:"p"},"predicate_select")," form helper in a view template, pass an array of permitted predicates with ",(0,a.kt)("inlineCode",{parentName:"p"},"only"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-erb"},"<%= f.predicate_select only: %i(cont not_cont eq not_eq blank null) %>\n")),(0,a.kt)("p",null,"Compound predicates (",(0,a.kt)("inlineCode",{parentName:"p"},"_any")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"_all"),") may be removed by passing the option ",(0,a.kt)("inlineCode",{parentName:"p"},"compounds: false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-erb"},"<%= f.predicate_select compounds: false %>\n")),(0,a.kt)("p",null,"Searchable attributes versus non-searchable ones may be specified as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def self.ransackable_attributes(auth_object = nil)\n  %w(searchable_attribute_1 searchable_attribute_2 ...) + _ransackers.keys\nend\n")))}p.isMDXComponent=!0}}]);