(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[223],{1542:function(e,t,n){"use strict";n.d(t,{Vv:function(){return I},ch:function(){return b}});var r,o,a,i,c,u,s=n(2265);(r=i||(i={})).INITIAL="initial",r.PENDING="pending",r.REJECTED="rejected",r.RESOLVED="resolved",(o=c||(c={})).LOADING_STATUS="setLoadingStatus",o.RESET_OPTIONS="resetOptions",o.SET_BRAINTREE_INSTANCE="braintreeInstance",(a=u||(u={})).NUMBER="number",a.CVV="cvv",a.EXPIRATION_DATE="expirationDate",a.EXPIRATION_MONTH="expirationMonth",a.EXPIRATION_YEAR="expirationYear",a.POSTAL_CODE="postalCode";var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function f(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var p="data-react-paypal-script-id",v={DATA_JS_SDK_LIBRARY:"dataJsSdkLibrary",DATA_LIBRARY_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource"},h="paypal";function m(e){return void 0===e&&(e=h),window[e]}function E(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i=n.charAt(0).toUpperCase().concat(n.substring(1)),c="Unable to render <".concat(t," /> because window.").concat(void 0===a?h:a,".").concat(i," is undefined."),u="string"==typeof o?o:o.join(",");if(!u.includes(n)){var s=[u,n].filter(Boolean).join();c+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(s,"'}}>`.")}return c}function y(e){e[p];var t=d(e,[p+""]);return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(t)))}function A(e,t){var n,r,o,a;switch(t.type){case c.LOADING_STATUS:if("object"==typeof t.value)return l(l({},e),{loadingStatus:t.value.state,loadingStatusErrorMessage:t.value.message});return l(l({},e),{loadingStatus:t.value});case c.RESET_OPTIONS:return o=e.options[p],(null==(a=self.document.querySelector("script[".concat(p,'="').concat(o,'"]')))?void 0:a.parentNode)&&a.parentNode.removeChild(a),l(l({},e),{loadingStatus:i.PENDING,options:l(l(((n={})[v.DATA_SDK_INTEGRATION_SOURCE]=v.DATA_LIBRARY_VALUE,n),t.value),((r={})[p]="".concat(y(t.value)),r))});case c.SET_BRAINTREE_INSTANCE:return l(l({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var S=(0,s.createContext)(null);function g(){var e=function(e){if("function"==typeof(null==e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}((0,s.useContext)(S));return[l(l({},e),{isInitial:e.loadingStatus===i.INITIAL,isPending:e.loadingStatus===i.PENDING,isResolved:e.loadingStatus===i.RESOLVED,isRejected:e.loadingStatus===i.REJECTED}),e.dispatch]}(0,s.createContext)({});var b=function(e){var t,n,r=e.className,o=e.disabled,a=void 0!==o&&o,i=e.children,c=e.forceReRender,u=d(e,["className","disabled","children","forceReRender"]),p="".concat(void 0===r?"":r," ").concat(a?"paypal-buttons-disabled":"").trim(),h=(0,s.useRef)(null),y=(0,s.useRef)(null),A=((t=(0,s.useRef)(new Proxy({},{get:function(e,t,n){return"function"==typeof e[t]?function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e[t].apply(e,n)}:Reflect.get(e,t,n)}}))).current=Object.assign(t.current,u),t.current),S=g()[0],T=S.isResolved,N=S.options,P=(0,s.useState)(null),R=P[0],I=P[1],O=(0,s.useState)(!0),w=O[0],C=O[1],_=(0,s.useState)(null)[1];function D(){null!==y.current&&y.current.close().catch(function(){})}return(null===(n=y.current)||void 0===n?void 0:n.updateProps)&&y.current.updateProps({message:u.message}),(0,s.useEffect)(function(){if(!1===T)return D;var e=m(N.dataNamespace);if(void 0===e||void 0===e.Buttons)return _(function(){throw Error(E({reactComponentName:b.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:N.components,sdkDataNamespace:N[v.DATA_NAMESPACE]}))}),D;try{y.current=e.Buttons(l(l({},A),{onInit:function(e,t){I(t),"function"==typeof u.onInit&&u.onInit(e,t)}}))}catch(e){return _(function(){throw Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))})}return!1===y.current.isEligible()?C(!1):h.current&&y.current.render(h.current).catch(function(e){null!==h.current&&0!==h.current.children.length&&_(function(){throw Error("Failed to render <PayPalButtons /> component. ".concat(e))})}),D},f(f([T],void 0===c?[]:c,!0),[u.fundingSource],!1)),(0,s.useEffect)(function(){null!==R&&(!0===a?R.disable().catch(function(){}):R.enable().catch(function(){}))},[a,R]),s.createElement(s.Fragment,null,w?s.createElement("div",{ref:h,style:a?{opacity:.38}:{},className:p}):i)};function T(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach(function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])}),n}function N(e,t){if("object"!=typeof e||null===e)throw Error("Expected an options object.");var n=e.environment;if(n&&"production"!==n&&"sandbox"!==n)throw Error('The `environment` option must be either "production" or "sandbox".');if(void 0!==t&&"function"!=typeof t)throw Error("Expected PromisePonyfill to be a function.")}b.displayName="PayPalButtons","function"==typeof SuppressedError&&SuppressedError;var P=function(e){var t=e.className,n=e.children,r=d(e,["className","children"]),o=g()[0],a=o.isResolved,i=o.options,c=(0,s.useRef)(null),u=(0,s.useState)(!0),f=u[0],p=u[1],h=(0,s.useState)(null)[1],y=function(e){var t=c.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch(function(e){null!==t&&0!==t.children.length&&h(function(){throw Error("Failed to render <PayPalMarks /> component. ".concat(e))})})};return(0,s.useEffect)(function(){if(!1!==a){var e=m(i[v.DATA_NAMESPACE]);if(void 0===e||void 0===e.Marks)return h(function(){throw Error(E({reactComponentName:P.displayName,sdkComponentKey:"marks",sdkRequestedComponents:i.components,sdkDataNamespace:i[v.DATA_NAMESPACE]}))});y(e.Marks(l({},r)))}},[a,r.fundingSource]),s.createElement(s.Fragment,null,f?s.createElement("div",{ref:c,className:void 0===t?"":t}):n)};P.displayName="PayPalMarks";var R=function(e){var t=e.className,n=e.forceReRender,r=d(e,["className","forceReRender"]),o=g()[0],a=o.isResolved,i=o.options,c=(0,s.useRef)(null),u=(0,s.useRef)(null),p=(0,s.useState)(null)[1];return(0,s.useEffect)(function(){if(!1!==a){var e=m(i[v.DATA_NAMESPACE]);if(void 0===e||void 0===e.Messages)return p(function(){throw Error(E({reactComponentName:R.displayName,sdkComponentKey:"messages",sdkRequestedComponents:i.components,sdkDataNamespace:i[v.DATA_NAMESPACE]}))});u.current=e.Messages(l({},r)),u.current.render(c.current).catch(function(e){null!==c.current&&0!==c.current.children.length&&p(function(){throw Error("Failed to render <PayPalMessages /> component. ".concat(e))})})}},f([a],void 0===n?[]:n,!0)),s.createElement("div",{ref:c,className:void 0===t?"":t})};R.displayName="PayPalMessages";var I=function(e){var t,n=e.options,r=void 0===n?{clientId:"test"}:n,o=e.children,a=e.deferLoading,u=void 0!==a&&a,d=(0,s.useReducer)(A,{options:l(l({},r),((t={})[v.DATA_JS_SDK_LIBRARY]=v.DATA_LIBRARY_VALUE,t[v.DATA_SDK_INTEGRATION_SOURCE]=v.DATA_LIBRARY_VALUE,t[p]="".concat(y(r)),t)),loadingStatus:u?i.INITIAL:i.PENDING}),f=d[0],h=d[1];return(0,s.useEffect)(function(){if(!1===u&&f.loadingStatus===i.INITIAL)return h({type:c.LOADING_STATUS,value:i.PENDING});if(f.loadingStatus===i.PENDING){var e=!0;return(function(e,t){if(void 0===t&&(t=Promise),N(e,t),"undefined"==typeof document)return t.resolve(null);var n,r,o,a,i,c,u,s,l=(r=e.sdkBaseUrl,o=e.environment,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(e,["sdkBaseUrl","environment"]),i=r||("sandbox"===o?"https://www.sandbox.paypal.com/sdk/js":"https://www.paypal.com/sdk/js"),u=(c=Object.keys(a).filter(function(e){return void 0!==a[e]&&null!==a[e]&&""!==a[e]}).reduce(function(e,t){var n=a[t].toString();return"data"===(t=t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(e,t){return(t?"-":"")+e.toLowerCase()})).substring(0,4)||"crossorigin"===t?e.attributes[t]=n:e.queryParams[t]=n,e},{queryParams:{},attributes:{}})).queryParams,s=c.attributes,u["merchant-id"]&&-1!==u["merchant-id"].indexOf(",")&&(s["data-merchant-id"]=u["merchant-id"],u["merchant-id"]="*"),{url:"".concat(i,"?").concat((n="",Object.keys(u).forEach(function(e){0!==n.length&&(n+="&"),n+=e+"="+u[e]}),n)),attributes:s}),d=l.url,f=l.attributes,p=f["data-namespace"]||"paypal",v=window[p];return(f["data-js-sdk-library"]||(f["data-js-sdk-library"]="paypal-js"),function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=T(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach(function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)}),a?n:null}(d,f)&&v)?t.resolve(v):(function(e,t){void 0===t&&(t=Promise),N(e,t);var n=e.url,r=e.attributes;if("string"!=typeof n||0===n.length)throw Error("Invalid url.");if(void 0!==r&&"object"!=typeof r)throw Error("Expected attributes to be an object.");return new t(function(e,t){var o,a,i,c,u,s;if("undefined"==typeof document)return e();a=(o={url:n,attributes:r,onSuccess:function(){return e()},onError:function(){return t(Error('The script "'.concat(n,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.')))}}).url,i=o.attributes,c=o.onSuccess,u=o.onError,(s=T(a,i)).onerror=u,s.onload=c,document.head.insertBefore(s,document.head.firstElementChild)})})({url:d,attributes:f},t).then(function(){var e=window[p];if(e)return e;throw Error("The window.".concat(p," global variable is not available."))})})(f.options).then(function(){e&&h({type:c.LOADING_STATUS,value:i.RESOLVED})}).catch(function(t){console.error("".concat("Failed to load the PayPal JS SDK script."," ").concat(t)),e&&h({type:c.LOADING_STATUS,value:{state:i.REJECTED,message:String(t)}})}),function(){e=!1}}},[f.options,u,f.loadingStatus]),s.createElement(S.Provider,{value:l(l({},f),{dispatch:h})},o)};function O(){}(0,s.createContext)({cardFieldsForm:null,fields:{},registerField:O,unregisterField:O})},9376:function(e,t,n){"use strict";var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},257:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(4227)},4227:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u=[],s=!1,l=-1;function d(){s&&r&&(s=!1,r.length?u=r.concat(u):l=-1,u.length&&f())}function f(){if(!s){var e=c(d);s=!0;for(var t=u.length;t;){for(r=u,u=[];++l<t;)r&&r[l].run();l=-1,t=u.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||s||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o=r(229);e.exports=o}()}}]);