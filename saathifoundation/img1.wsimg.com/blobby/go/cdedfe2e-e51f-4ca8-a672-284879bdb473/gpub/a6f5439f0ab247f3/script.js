window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme13"]=window.wsb["Theme13"]||window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-259987\"}"));
window.wsb["DynamicFontScaler"]=function(e){let t,{containerId:n,targetId:o,fontSizes:r,maxLines:a,prioritizeDefault:s}=e;if("undefined"==typeof document)return;const i=document.getElementById(n),c=document.getElementById(o);function l(e){return function(e){const t=parseInt(g(e,"padding-left")||0,10),n=parseInt(g(e,"padding-right")||0,10);return e.scrollWidth+t+n}(e)<=i.clientWidth&&function(e){const t=e.offsetHeight,n=parseInt(g(e,"line-height"),10)||1;return Math.floor(t/n)}(e)<=a}function p(e){return parseInt(g(e,"font-size")||0,10)}function d(e){if(1===e.length)return e[0];const t=e.filter(l);if(1===t.length)return t[0];if(!t.length)return function(e){return e.sort(((e,t)=>p(e)-p(t)))[0]}(e);return t.sort(((e,t)=>p(t)-p(e)))[0]}function u(){if(!i||!c||t===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void function(){c.removeAttribute("data-last-size");const e=document.querySelector(`#${o}-style`);e&&e.parentNode.removeChild(e)}();t=window.innerWidth;const e=Array.prototype.slice.call(i.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((e,t)=>r.indexOf(e.getAttribute("data-size"))-r.indexOf(t.getAttribute("data-size"))));if(i.clientWidth&&e.length){const t=i.style.width||"";i.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${i.clientWidth}px`}));const n=d(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),i.style.width=t;const r=g(n,"font-size"),a=c.getAttribute("data-last-size");if(r&&r!==a){if(s){const e=g(c,"font-size");if(parseInt(r,10)>=parseInt(e,10))return}c.setAttribute("data-last-size",r);let e=document.querySelector(`#${o}-style`);e||(e=document.createElement("style"),e.id=`${o}-style`,document.head.appendChild(e)),e.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}u(),window.addEventListener("resize",u)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-259991\",\"targetId\":\"logo-text-259992\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-260000\",\"targetId\":\"logo-text-260001\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"league-spartan\",\"default\",\"\"],\"colors\":[\"#1C5739\"],\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"c718be83-ec2c-41b0-84ad-5796da1efb30\":{\"pageId\":\"f8dc450f-f8e1-4913-aec3-79a46222023d\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"2ffa110e-f839-4d01-9522-e4652d1870b2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2ffa110e-f839-4d01-9522-e4652d1870b2\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f8dc450f-f8e1-4913-aec3-79a46222023d\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"f8dc450f-f8e1-4913-aec3-79a46222023d\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#1C5739\",\"meta\":{\"primary\":\"rgb(28, 87, 57)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"league-spartan\",\"description\":\"\",\"meta\":{\"order\":20,\"primary\":{\"id\":\"league-spartan\",\"name\":\"League Spartan\",\"url\":\"//img1.wsimg.com/blobby/go/font/LeagueSpartan/league-spartan.css\",\"family\":\"'League Spartan', arial, helvetica, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-260002\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-259997\",\"widgetId\":\"c7476af9-2ecb-4b16-ac9b-264c2e45a5fb\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"c7476af9-2ecb-4b16-ac9b-264c2e45a5fb\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:l,logoImageId:i,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(l);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(w)}function w(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let l=0,i=a.concat(n).findIndex((e=>{if(l+e>m)return e;l+=e}));i<0&&(i=a.length);const o=a.slice(0,i);let r,c,s=a.slice(i);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(f(b,0,o.length,M),f(t,0,o.length,R),f(y,0,o.length,R),f(b,o.length,o.length+s.length,R),f(t,o.length,o.length+s.length,M),f(y,o.length,o.length+s.length,R),f(b,o.length+s.length,t.length,R),f(t,o.length+s.length,t.length,R),f(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function I(){window.innerWidth<1024&&r&&r!==t.Q||(window.clearTimeout(c),c=window.setTimeout(h,50))}function f(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),l=k(t);return Math.abs(n-l)>Math.abs(n-a-(l+a))}if(I(),window.ResizeObserver){const e=new window.ResizeObserver(I);return[document.getElementById(a),document.getElementById(i)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",I,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",I,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-259985259996-navId-2\",\"inlineUtilitiesMenu\":false,\"containerId\":\"navContainer-259997\",\"splitNavId\":\"n-259985259995-navId-1\"}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-260005\",\"targetId\":\"dynamic-tagline-260006\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-260007\",\"targetId\":\"dynamic-tagline-260008\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb['context-bs-2']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"league-spartan\",\"default\",\"\"],\"colors\":[\"#1C5739\"],\"fontScale\":\"medium\",\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"c718be83-ec2c-41b0-84ad-5796da1efb30\":{\"pageId\":\"f8dc450f-f8e1-4913-aec3-79a46222023d\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"2ffa110e-f839-4d01-9522-e4652d1870b2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2ffa110e-f839-4d01-9522-e4652d1870b2\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f8dc450f-f8e1-4913-aec3-79a46222023d\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"f8dc450f-f8e1-4913-aec3-79a46222023d\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#1C5739\",\"meta\":{\"primary\":\"rgb(28, 87, 57)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"league-spartan\",\"description\":\"\",\"meta\":{\"order\":20,\"primary\":{\"id\":\"league-spartan\",\"name\":\"League Spartan\",\"url\":\"//img1.wsimg.com/blobby/go/font/LeagueSpartan/league-spartan.css\",\"family\":\"'League Spartan', arial, helvetica, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/GALLERY/bs-gallery1-Gallery',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery1\",\"id\":\"a1350fc0-7e31-4a12-8e1c-2f822fe85620\",\"galleryImages\":[{\"image\":{\"image\":\"//img1.wsimg.com/isteam/stock/u6yJZzeWnZS8kGJbE\"}},{\"image\":{\"image\":\"//img1.wsimg.com/isteam/stock/11930\"}},{\"image\":{\"image\":\"//img1.wsimg.com/isteam/stock/mADagle\"}},{\"image\":{\"image\":\"//img1.wsimg.com/isteam/stock/5511\"}},{\"image\":{\"image\":\"//img1.wsimg.com/isteam/stock/10915\"}},{\"image\":{\"image\":\"//img1.wsimg.com/isteam/stock/10917\"}}],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"Images of Impact: The Work of Saathi Foundation in Photos\",\"autoplay\":false,\"showthumbnails\":true,\"isInternalPage\":false,\"autoplayDelay\":\"3.5\",\"showArrows\":true,\"fullBleed\":false,\"enableImageDimension\":true,\"images\":[{\"lightboxUrl\":\"//img1.wsimg.com/isteam/stock/u6yJZzeWnZS8kGJbE/:/\",\"index\":0,\"position\":\"center\",\"imageData\":{\"image\":\"//img1.wsimg.com/isteam/stock/u6yJZzeWnZS8kGJbE\",\"src\":\"//img1.wsimg.com/isteam/stock/u6yJZzeWnZS8kGJbE\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/stock/11930/:/\",\"index\":1,\"position\":\"center\",\"imageData\":{\"image\":\"//img1.wsimg.com/isteam/stock/11930\",\"src\":\"//img1.wsimg.com/isteam/stock/11930\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/stock/mADagle/:/\",\"index\":2,\"position\":\"center\",\"imageData\":{\"image\":\"//img1.wsimg.com/isteam/stock/mADagle\",\"src\":\"//img1.wsimg.com/isteam/stock/mADagle\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/stock/5511/:/\",\"index\":3,\"position\":\"center\",\"imageData\":{\"image\":\"//img1.wsimg.com/isteam/stock/5511\",\"src\":\"//img1.wsimg.com/isteam/stock/5511\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/stock/10915/:/\",\"index\":4,\"position\":\"center\",\"imageData\":{\"image\":\"//img1.wsimg.com/isteam/stock/10915\",\"src\":\"//img1.wsimg.com/isteam/stock/10915\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/stock/10917/:/\",\"index\":5,\"position\":\"center\",\"imageData\":{\"image\":\"//img1.wsimg.com/isteam/stock/10917\",\"src\":\"//img1.wsimg.com/isteam/stock/10917\"}}],\"renderAsThumbnail\":false,\"hasCaption\":false,\"data-test-radpack\":\"publish\",\"widgetId\":\"a1350fc0-7e31-4a12-8e1c-2f822fe85620\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":1,\"widgetId\":\"a1350fc0-7e31-4a12-8e1c-2f822fe85620\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery1\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/GALLERY/bs-gallery1-Gallery"},false);
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/CONTACT/bs-Component',props:JSON.parse("{\"structuredHours\":[{\"hour\":{\"day\":\"Monday\",\"dayOfWeek\":1,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"day\":\"Tuesday\",\"dayOfWeek\":2,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"day\":\"Wednesday\",\"dayOfWeek\":3,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"day\":\"Thursday\",\"dayOfWeek\":4,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"day\":\"Friday\",\"dayOfWeek\":5,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"day\":\"Saturday\",\"dayOfWeek\":6,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":true}},{\"hour\":{\"day\":\"Sunday\",\"dayOfWeek\":0,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":true}}],\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"collapsible\":true,\"widgetId\":\"91ed7ddc-f407-4a13-aff7-b0edeab23d59\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":2,\"widgetId\":\"91ed7ddc-f407-4a13-aff7-b0edeab23d59\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact4\",\"group\":\"Content\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/CONTACT/bs-Component"},false);
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/SUBSCRIBE/bs-subscribe2-subscribe-form',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"subscribe2\",\"id\":\"6d75e605-fd95-40ed-8bdc-170cacb1f635\",\"isInternalPage\":false,\"websiteId\":\"cdedfe2e-e51f-4ca8-a672-284879bdb473\",\"accountId\":\"471ec2ed-9d5a-11ee-8374-3417ebe73f23\",\"hasNonCommercePlan\":true,\"couponToggleHidden\":false,\"sectionTitle\":\"Subscribe\",\"staticContent\":{\"defaultButtonLabel\":\"Sign Up\",\"emailPlaceholderText\":\"Email Address\",\"verificationText\":\"To let us know it's really you and that you'd like to receive emails from us, please click the link in the confirmation email we just sent you. You can unsubscribe from these emails at any time.\",\"emailErrorMessage\":\"Please enter a valid email address.\"},\"confirmationMessage\":\"Great, now please verify your email\",\"couponConfirmationMessage\":\"Thanks so much for signing up!\",\"description\":\"Sign up to hear from us about specials, sales, and events.\",\"inputPlaceholder\":\"Email\",\"subscribeButtonLabel\":\"Sign up\",\"couponToggle\":true,\"couponDiscount\":0,\"couponDiscountMessage\":\"Use this coupon code {coupon_code} for {discount}% off your first purchase.\",\"couponDescription\":\"Get 10% off your first purchase when you sign up for our newsletter!\",\"widgetId\":\"6d75e605-fd95-40ed-8bdc-170cacb1f635\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":3,\"widgetId\":\"6d75e605-fd95-40ed-8bdc-170cacb1f635\",\"widgetType\":\"SUBSCRIBE\",\"widgetPreset\":\"subscribe2\",\"group\":\"Group\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/SUBSCRIBE/bs-subscribe2-subscribe-form"},false);
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"daf2b2ea-e634-4710-bc93-6a52c5130462\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
Core.utils.renderBootstrap({elId:'bs-5',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"Saathi Foundation\",\"reamazeBrandId\":\"cdedfe2e-e51f-4ca8-a672-284879bdb473\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"thesaathi.in\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"471ec2ed-9d5a-11ee-8374-3417ebe73f23\",\"websiteId\":\"cdedfe2e-e51f-4ca8-a672-284879bdb473\",\"id\":\"f9c548cd-874d-4c7a-8231-6c92ffd4d77d\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeThemeColor\":\"#1C5739\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"f9c548cd-874d-4c7a-8231-6c92ffd4d77d\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"f9c548cd-874d-4c7a-8231-6c92ffd4d77d\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-259984').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"ABOUT","wam_site_homepageFirstWidgetPreset":"about1","wam_site_businessCategory":"nonprofit","wam_site_theme":"layout13","wam_site_fontPack":"league-spartan","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);