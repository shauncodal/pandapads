(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{3579:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/GetInvolved",function(){return a(3371)}])},8418:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(s){n=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var n,o=(n=a(7294))&&n.__esModule?n:{default:n},l=a(6273),i=a(387),s=a(7190);var _={};function c(e,t,a,r){if(e&&l.isLocalURL(t)){e.prefetch(t,a,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;_[t+"%"+a+(n?"%"+n:"")]=!0}}var d=function(e){var t,a=!1!==e.prefetch,n=i.useRouter(),d=o.default.useMemo((function(){var t=r(l.resolveHref(n,e.href,!0),2),a=t[0],o=t[1];return{href:a,as:e.as?l.resolveHref(n,e.as):o||a}}),[n,e.href,e.as]),f=d.href,v=d.as,m=e.children,u=e.replace,p=e.shallow,h=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var g=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,b=r(s.useIntersection({rootMargin:"200px"}),2),x=b[0],w=b[1],K=o.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);o.default.useEffect((function(){var e=w&&a&&l.isLocalURL(f),t="undefined"!==typeof y?y:n&&n.locale,r=_[f+"%"+v+(t?"%"+t:"")];e&&!r&&c(n,f,v,{locale:t})}),[v,f,w,y,a,n]);var I={ref:K,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,r,n,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(a))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[n?"replace":"push"](a,r,{shallow:o,locale:s,scroll:i}))}(e,n,f,v,u,p,h,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(f)&&c(n,f,v,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:n&&n.locale,P=n&&n.isLocaleDomain&&l.getDomainLocale(v,k,n&&n.locales,n&&n.domainLocales);I.href=P||l.addBasePath(l.addLocale(v,k,n&&n.defaultLocale))}return o.default.cloneElement(t,I)};t.default=d},7190:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(s){n=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!l,s=n.useRef(),_=r(n.useState(!1),2),c=_[0],d=_[1],f=n.useCallback((function(e){s.current&&(s.current(),s.current=void 0),a||c||e&&e.tagName&&(s.current=function(e,t,a){var r=function(e){var t=e.rootMargin||"",a=i.get(t);if(a)return a;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return i.set(t,a={id:t,observer:n,elements:r}),a}(a),n=r.id,o=r.observer,l=r.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(n))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[a,t,c]);return n.useEffect((function(){if(!l&&!c){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[c]),[f,c]};var n=a(7294),o=a(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},3371:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var r=a(5893),n=a(7294),o=a(9008),l=a(1664),i=a(1202),s=a(7657),_=a(1849),c=(a(7575),a(4529)),d=a.n(c),f=a(3392),v=a.n(f),m=a(4892),u=a(6842),p=a(3251),h=a(8858),y=a(6976);function g(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b=new Array,x=new Array;var w={root:["root","topMenu","donate","keepagirlinschool","ecofriendly","periodpoverty","instagram","twitter","facebook","debitOrder","donateCareKit","link"],topMenu:["topMenu"],donate:["donate"],keepagirlinschool:["keepagirlinschool"],ecofriendly:["ecofriendly"],periodpoverty:["periodpoverty"],instagram:["instagram"],twitter:["twitter"],facebook:["facebook"],debitOrder:["debitOrder"],donateCareKit:["donateCareKit"],link:["link"]};function K(e){var t=function(t){var a=(0,i.xf)(t,{name:e,descendantNames:g(w[e]),internalArgPropNames:x,internalVariantPropNames:b});return function(e){e.variants,e.args;var t=e.overrides,a=e.forNode,r=(0,i.LK)({screen:(0,_.Xj)()});return(0,i.eh)(n.Fragment,null,(0,i.eh)(o.default,null,(0,i.eh)("meta",{name:"twitter:card",content:"summary"}),(0,i.eh)("title",{key:"title"},"Get Involved"),(0,i.eh)("meta",{key:"og:title",property:"og:title",content:"Get Involved"})),(0,i.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,i.eh)("div",{className:d().plasmic_page_wrapper},(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":a,className:(0,i.AK)(d().all,d().root_reset,d().plasmic_tokens,v().root)},(0,i.eh)(s.Z,{"data-plasmic-name":"topMenu","data-plasmic-override":t.topMenu,className:(0,i.AK)("__wab_instance",v().topMenu)}),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox___8Y6Fr)},(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__oYxIt)}),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__rnvCt)},(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__psUf1)},(0,i.eh)(m.Z,{className:(0,i.AK)(d().all,v().svg__i3S10),role:"img"}),(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text__wJfG)},"How you can get involved"))),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__ebPpO)}),((0,i.zK)(r,"screen","desktopOnly"),(0,i.eh)(i.Kq,{as:"div",hasGap:!0,className:(0,i.AK)(d().all,v().freeBox__g1UnP)},(0,i.eh)(i.Vv,{alt:"",className:(0,i.AK)(v().img___58X5),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:((0,i.zK)(r,"screen","desktopOnly"),"100%"),displayMinHeight:"0",displayMinWidth:"0",displayWidth:(0,i.zK)(r,"screen","desktopOnly")?"600px":"300px",loading:((0,i.zK)(r,"screen","desktopOnly"),"lazy"),src:((0,i.zK)(r,"screen","desktopOnly"),{src:"/plasmic/panda/images/whatsAppImage20211210At1039241Jpeg.jpeg",fullWidth:1280,fullHeight:960,aspectRatio:void 0})}),((0,i.zK)(r,"screen","desktopOnly"),(0,i.eh)(i.Vv,{alt:"",className:(0,i.AK)(v().img__ayJte),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:((0,i.zK)(r,"screen","desktopOnly"),"100%"),displayMinHeight:"0",displayMinWidth:"0",displayWidth:(0,i.zK)(r,"screen","desktopOnly")?"624px":"300px",loading:((0,i.zK)(r,"screen","desktopOnly"),"lazy"),src:(0,i.zK)(r,"screen","desktopOnly")?{src:"/plasmic/panda/images/_61778005002244828Dc1Cb7Af9Cf8D81Jpeg.jpeg",fullWidth:1280,fullHeight:924,aspectRatio:void 0}:{src:"/plasmic/panda/images/whatsAppImage20211210At1039241Jpeg.jpeg",fullWidth:1280,fullHeight:960,aspectRatio:void 0}}))))),(0,i.eh)(i.Kq,{as:"div",hasGap:!0,className:(0,i.AK)(d().all,v().freeBox__f1Qrb)},(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__uky3D)},(0,i.eh)(u.Z,{className:(0,i.AK)(d().all,v().svg__bObky),role:"img"}),(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text___1Jf8E)},"Donate any amount to our Non-Profit Organisation and become a member of our keep a girl child in school campaign."),(0,i.eh)("button",{"data-plasmic-name":"donate","data-plasmic-override":t.donate,className:(0,i.AK)(d().button,d().__wab_text,v().donate)},"Donate Now")),(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text__lFgp2)},"Become an Ambassador"),(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text__sJlia)},"Become an Ambassador by using your connections and social media platforms to create awareness of Period Poverty and how it affects millions of women around the world. "),(0,i.eh)(i.Kq,{as:"div",hasGap:!0,className:(0,i.AK)(d().all,v().freeBox__mEjcJ)},(0,i.eh)("button",{"data-plasmic-name":"keepagirlinschool","data-plasmic-override":t.keepagirlinschool,className:(0,i.AK)(d().button,d().__wab_text,v().keepagirlinschool),disabled:!1},"#KeepAGirlInSchool"),(0,i.eh)("button",{"data-plasmic-name":"ecofriendly","data-plasmic-override":t.ecofriendly,className:(0,i.AK)(d().button,d().__wab_text,v().ecofriendly)},"#EcoFriendly"),(0,i.eh)("button",{"data-plasmic-name":"periodpoverty","data-plasmic-override":t.periodpoverty,className:(0,i.AK)(d().button,d().__wab_text,v().periodpoverty)},"#PeriodPoverty")),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__jQiI)},(0,i.eh)(p.Z,{"data-plasmic-name":"instagram","data-plasmic-override":t.instagram,className:(0,i.AK)(d().all,v().instagram),role:"img"}),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox___1UTww)},(0,i.eh)(h.Z,{"data-plasmic-name":"twitter","data-plasmic-override":t.twitter,className:(0,i.AK)(d().all,v().twitter),role:"img"}),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__kDcb6)},(0,i.eh)(y.Z,{"data-plasmic-name":"facebook","data-plasmic-override":t.facebook,className:(0,i.AK)(d().all,v().facebook),role:"img"})))),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__elNzz)},(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text__gyreG)},"Set and forget "),(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text__dty8F)},"Set up a monthly debit order to make donating a hassle free contribution and ensuring there will always be someone new receiving a Care Kit every month "),(0,i.eh)("button",{"data-plasmic-name":"debitOrder","data-plasmic-override":t.debitOrder,className:(0,i.AK)(d().button,d().__wab_text,v().debitOrder)},"Setup a monthly debit order")),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__fbcc1)},(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text___01Cc4)},"Donate Care Kit Items"),(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text___7QC7I)},"Donate any items that form part of our Care Kits, namely, 5 litre white buckets with a lid and handle; laundry soap bars, personal body wash soap bars and Nutri-Go\u2019s nutritious meals. "),(0,i.eh)("button",{"data-plasmic-name":"donateCareKit","data-plasmic-override":t.donateCareKit,className:(0,i.AK)(d().button,d().__wab_text,v().donateCareKit)},"Donate Care Kit Items"))),(0,i.eh)("div",{className:(0,i.AK)(d().all,v().freeBox__fheix)},(0,i.eh)("div",{className:(0,i.AK)(d().all,d().__wab_text,v().text__tj35T)},(0,i.eh)(n.Fragment,null,(0,i.eh)(n.Fragment,null,""),(0,i.eh)(i.L,{"data-plasmic-name":"link","data-plasmic-override":t.link,className:(0,i.AK)(d().a,d().__wab_text,d().plasmic_default__inline,v().link),component:l.default,href:"mailto:info@pandapads.co.za",platform:"nextjs"},"info@pandapads.co.za"),(0,i.eh)(n.Fragment,null,"\nSandi: 0834770123\nRebecca: 0795011862\nWe are based in Randburg, Johannesburg.\n")))))))}({variants:a.variants,args:a.args,overrides:a.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicGetInvolved":"PlasmicGetInvolved.".concat(e),t}var I=Object.assign(K("root"),{topMenu:K("topMenu"),donate:K("donate"),keepagirlinschool:K("keepagirlinschool"),ecofriendly:K("ecofriendly"),periodpoverty:K("periodpoverty"),instagram:K("instagram"),twitter:K("twitter"),facebook:K("facebook"),debitOrder:K("debitOrder"),donateCareKit:K("donateCareKit"),link:K("link"),internalVariantProps:b,internalArgProps:x});var k=function(){return(0,r.jsx)(I,{})}},3392:function(e){e.exports={root:"PlasmicGetInvolved_root__6Y9Qh",topMenu:"PlasmicGetInvolved_topMenu__N69bk",freeBox___8Y6Fr:"PlasmicGetInvolved_freeBox___8Y6Fr__5bEUh",freeBox__oYxIt:"PlasmicGetInvolved_freeBox__oYxIt__wyyBX",freeBox__rnvCt:"PlasmicGetInvolved_freeBox__rnvCt__65JTL",freeBox__psUf1:"PlasmicGetInvolved_freeBox__psUf1__Pesn8",svg__i3S10:"PlasmicGetInvolved_svg__i3S10__FXFil",text__wJfG:"PlasmicGetInvolved_text__wJfG__ZSUOl",freeBox__ebPpO:"PlasmicGetInvolved_freeBox__ebPpO__dlwNC",freeBox__g1UnP:"PlasmicGetInvolved_freeBox__g1UnP__KkyhP",img___58X5:"PlasmicGetInvolved_img___58X5__tkLDG","__wab_img-spacer":"PlasmicGetInvolved___wab_img-spacer__BoDB5",img__ayJte:"PlasmicGetInvolved_img__ayJte__frD3h",freeBox__f1Qrb:"PlasmicGetInvolved_freeBox__f1Qrb__Kgq_C",freeBox__uky3D:"PlasmicGetInvolved_freeBox__uky3D__qeBog",svg__bObky:"PlasmicGetInvolved_svg__bObky__YBvgW",text___1Jf8E:"PlasmicGetInvolved_text___1Jf8E__MQ__u",donate:"PlasmicGetInvolved_donate__5VttA",text__lFgp2:"PlasmicGetInvolved_text__lFgp2__J04Fw",text__sJlia:"PlasmicGetInvolved_text__sJlia__NzZtu",freeBox__mEjcJ:"PlasmicGetInvolved_freeBox__mEjcJ__8s6f_",keepagirlinschool:"PlasmicGetInvolved_keepagirlinschool__PhLjD",ecofriendly:"PlasmicGetInvolved_ecofriendly__s16cX",periodpoverty:"PlasmicGetInvolved_periodpoverty__BDea9",freeBox__jQiI:"PlasmicGetInvolved_freeBox__jQiI__L0eTm",instagram:"PlasmicGetInvolved_instagram__G9zlA",freeBox___1UTww:"PlasmicGetInvolved_freeBox___1UTww__GtjIJ",twitter:"PlasmicGetInvolved_twitter__GWQCJ",freeBox__kDcb6:"PlasmicGetInvolved_freeBox__kDcb6__tKOzY",facebook:"PlasmicGetInvolved_facebook__BXaDZ",freeBox__elNzz:"PlasmicGetInvolved_freeBox__elNzz__F_IXf",text__gyreG:"PlasmicGetInvolved_text__gyreG__Q9PQ0",text__dty8F:"PlasmicGetInvolved_text__dty8F__J_NMS",debitOrder:"PlasmicGetInvolved_debitOrder__zGtxf",freeBox__fbcc1:"PlasmicGetInvolved_freeBox__fbcc1__Dl5jr",text___01Cc4:"PlasmicGetInvolved_text___01Cc4__pwm17",text___7QC7I:"PlasmicGetInvolved_text___7QC7I__S9kW5",donateCareKit:"PlasmicGetInvolved_donateCareKit__g_c3U",freeBox__fheix:"PlasmicGetInvolved_freeBox__fheix__OltnM",text__tj35T:"PlasmicGetInvolved_text__tj35T__19lH1"}},7575:function(){},9008:function(e,t,a){e.exports=a(5443)},1664:function(e,t,a){e.exports=a(8418)}},function(e){e.O(0,[842,774,888,179],(function(){return t=3579,e(e.s=t);var t}));var t=e.O();_N_E=t}]);