(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8618:function(e,t,n){Promise.resolve().then(n.bind(n,3670)),Promise.resolve().then(n.bind(n,4207)),Promise.resolve().then(n.bind(n,2826)),Promise.resolve().then(n.t.bind(n,4742,23)),Promise.resolve().then(n.t.bind(n,3686,23)),Promise.resolve().then(n.t.bind(n,4250,23)),Promise.resolve().then(n.t.bind(n,8966,23)),Promise.resolve().then(n.t.bind(n,6360,23)),Promise.resolve().then(n.t.bind(n,7960,23)),Promise.resolve().then(n.t.bind(n,8553,23)),Promise.resolve().then(n.t.bind(n,1953,23)),Promise.resolve().then(n.t.bind(n,4294,23)),Promise.resolve().then(n.t.bind(n,660,23)),Promise.resolve().then(n.t.bind(n,5834,23))},3670:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var i=n(2265);function a(){return(0,i.useEffect)(()=>{"scrollRestoration"in history&&(history.scrollRestoration="auto");let e=0;function t(){let t=document.querySelector('[role="dialog"], .modal, .fixed.inset-0'),n=document.body.classList.contains("modal-open");t&&!n?(e=window.scrollY,document.body.classList.add("modal-open"),document.body.style.overflow="hidden",document.body.style.height="100%",document.body.style.position="relative"):!t&&n&&(document.body.classList.remove("modal-open"),document.body.style.overflow="",document.body.style.height="",document.body.style.position="",window.scrollTo(0,e))}"undefined"!=typeof MutationObserver&&document.body&&new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()},[]),null}},6205:function(e,t,n){"use strict";n.d(t,{ZK:function(){return r},ZP:function(){return d},iL:function(){return c}});var i=n(7437),a=n(2265),l=n(3949),s=n(9564);let o=(0,a.createContext)(void 0);function r(){let e=(0,a.useContext)(o);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}function c(e){let{children:t}=e,{i18n:n}=(0,l.$G)(),[r,c]=(0,a.useState)("de"),[d,u]=(0,a.useState)(!1),[m,f]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(async()=>{try{let e=localStorage.getItem("language")||"de";await n.changeLanguage(e),c(e),(0,s.mX)(e),(0,s.Cm)(e),f(!0)}catch(e){console.error("Failed to initialize language:",e),c("de"),(0,s.mX)("de"),f(!0)}})()},[n]);let h=async()=>{try{u(!0);let e="de"===r?"en":"de";await n.changeLanguage(e),localStorage.setItem("language",e),c(e),(0,s.mX)(e),(0,s.Cm)(e),window.dispatchEvent(new Event("languageChanged"))}catch(e){console.error("Failed to change language:",e)}finally{u(!1)}};return m?(0,i.jsx)(o.Provider,{value:{currentLang:r,toggleLanguage:h,isLoading:d},children:t}):null}function d(){let{currentLang:e,toggleLanguage:t,isLoading:n}=r(),{t:a}=(0,l.$G)();return(0,i.jsxs)("button",{onClick:t,className:"text-white hover:text-[#C8A97E] transition-colors px-4 py-2 rounded flex items-center space-x-2","aria-label":a("language.switchTo"),disabled:n,children:[n?(0,i.jsx)("span",{className:"inline-block animate-spin mr-1",children:"⟳"}):null,(0,i.jsx)("span",{children:e.toUpperCase()})]})}},4207:function(e,t,n){"use strict";n.d(t,{G:function(){return o},MediaProvider:function(){return s}});var i=n(7437),a=n(2265);let l=(0,a.createContext)(void 0);function s(e){let{children:t}=e,[n,s]=(0,a.useState)(null);return(0,i.jsx)(l.Provider,{value:{currentlyPlaying:n,setCurrentlyPlaying:s,stopAllMedia:()=>{s(null);let e=new CustomEvent("stopAllMedia");window.dispatchEvent(e)}},children:t})}function o(){let e=(0,a.useContext)(l);if(void 0===e)throw Error("useMedia must be used within a MediaProvider");return e}},2826:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var i=n(7437),a=n(2265),l=n(6205);function s(e){let{children:t}=e;return(0,a.useEffect)(()=>{let e=localStorage.getItem("language");e&&(document.documentElement.lang=e)},[]),(0,i.jsx)(l.iL,{children:t})}n(9564);var o=n(9981),r=n(7648),c=n(166),d=n(3145),u=n(2489);let m=(0,c.default)(()=>n.e(210).then(n.bind(n,2210)).catch(()=>()=>(0,i.jsx)("div",{className:"text-red-500",children:"Failed to load Datenschutz content"})),{loadableGenerated:{webpack:()=>[2210]},loading:()=>(0,i.jsx)("p",{className:"text-gray-400",children:"Loading..."}),ssr:!1}),f=(0,c.default)(()=>n.e(682).then(n.bind(n,1682)).catch(()=>()=>(0,i.jsx)("div",{className:"text-red-500",children:"Failed to load AGB content"})),{loadableGenerated:{webpack:()=>[1682]},loading:()=>(0,i.jsx)("p",{className:"text-gray-400",children:"Loading..."}),ssr:!1}),h=(0,c.default)(()=>n.e(384).then(n.bind(n,9384)).catch(()=>()=>(0,i.jsx)("div",{className:"text-red-500",children:"Failed to load Impressum content"})),{loadableGenerated:{webpack:()=>[9384]},loading:()=>(0,i.jsx)("p",{className:"text-gray-400",children:"Loading..."}),ssr:!1});function g(){var e,t;let[n,l]=(0,a.useState)(null),[s,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>()=>{document.body.style.overflow=""},[]);let g=e=>{l(e),document.documentElement.classList.add("modal-open")},b=()=>{c(!0),document.documentElement.classList.remove("modal-open"),setTimeout(()=>{l(null),c(!1)},300)},p=[{title:"Datenschutz",component:m},{title:"AGB",component:f},{title:"Impressum",component:h}];return(0,i.jsx)("footer",{className:"bg-black border-t border-white/10",children:(0,i.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,i.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,i.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,i.jsx)("h3",{className:"text-xl text-white",children:"Mel jazz"}),(0,i.jsx)("div",{className:"flex gap-6",children:[{name:"Facebook",href:"https://www.facebook.com/singingJazz/",icon:e=>(0,i.jsx)(o.E.svg,{whileHover:{scale:1.2,rotate:5},transition:{type:"spring",stiffness:400,damping:10},className:"w-8 h-8",fill:"#C8A97E",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"})})},{name:"Instagram",href:"https://www.instagram.com/jazzamell/?hl=en",icon:e=>(0,i.jsx)(o.E.svg,{whileHover:{scale:1.2,rotate:-5},transition:{type:"spring",stiffness:400,damping:10},className:"w-8 h-8",fill:"#C8A97E",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})},{name:"YouTube",href:"https://www.youtube.com/@jazzamell",icon:e=>(0,i.jsx)(o.E.svg,{whileHover:{scale:1.2,rotate:5},transition:{type:"spring",stiffness:400,damping:10},className:"w-8 h-8",fill:"#C8A97E",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",clipRule:"evenodd"})})},{name:"Spotify",href:"https://open.spotify.com/artist/jazzamell",icon:e=>(0,i.jsx)(o.E.svg,{whileHover:{scale:1.2,rotate:-5},transition:{type:"spring",stiffness:400,damping:10},className:"w-8 h-8",fill:"#C8A97E",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"})})}].map(e=>(0,i.jsxs)(r.default,{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-[#C8A97E] hover:text-[#B69A6E] transition-colors",children:[(0,i.jsx)("span",{className:"sr-only",children:e.name}),"function"==typeof e.icon?e.icon({}):(0,i.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:e.icon,clipRule:"evenodd"})})]},e.name))})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start space-y-4",children:[(0,i.jsx)("p",{className:"text-gray-400",children:"Vocal Coaching in Berlin"}),(0,i.jsxs)("div",{className:"text-sm text-gray-400 text-center",children:["\xa9 2025 Mel jazz.",(0,i.jsx)("br",{}),"Alle Rechte vorbehalten."]})]}),(0,i.jsxs)("div",{className:"flex flex-col justify-start items-end w-full",children:[(0,i.jsx)("div",{className:"flex items-center justify-end gap-6 mb-4 w-full",children:p.map(e=>(0,i.jsx)("button",{onClick:()=>g(e.title),className:"text-gray-400 hover:text-[#C8A97E] transition-colors text-sm",children:e.title},e.title))}),(0,i.jsx)("div",{className:"w-48 h-24 relative flex justify-end",children:(0,i.jsx)(d.default,{src:"/vocal-coaching/images/footer/footer.png",alt:"Footer decoration",width:192,height:96,className:"object-contain filter brightness-0 invert transform -translate-x-4 translate-y-2",priority:!0})})]})]})}),n&&(0,i.jsxs)(o.E.div,{className:"fixed inset-0 z-[100] flex items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:b,children:[(0,i.jsx)(o.E.div,{className:"absolute inset-0 bg-black/60 backdrop-blur-[2px]",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),(0,i.jsx)("div",{className:"relative w-full h-full flex items-center justify-center p-4",children:(0,i.jsxs)(o.E.div,{className:"relative w-full max-w-2xl bg-[#0A0A0A] rounded-xl border border-[#C8A97E]/20 shadow-2xl",initial:{opacity:0,y:20,scale:.95},animate:{opacity:s?0:1,y:s?20:0,scale:s?.95:1},transition:{duration:.3,ease:"easeInOut"},onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)("div",{className:"flex items-center justify-between px-6 pt-2.5 pb-0.5 border-b border-[#C8A97E]/20",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-white pt-1.5 mt-0.5",children:n}),(0,i.jsx)("button",{onClick:b,className:"absolute right-5 top-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors",children:(0,i.jsx)(u.Z,{className:"w-5 h-5 text-white/70 hover:text-white transition-colors"})})]}),(0,i.jsx)("div",{className:"px-5 pt-3 pb-6 overflow-y-auto max-h-[calc(85vh-80px)] custom-scrollbar",children:(null===(e=p.find(e=>e.title===n))||void 0===e?void 0:e.component)&&(0,a.createElement)(null===(t=p.find(e=>e.title===n))||void 0===t?void 0:t.component)})]})})]})]})})}var b=n(8614);function p(){let[e,t]=(0,a.useState)(!1);(0,a.useEffect)(()=>{localStorage.getItem("cookiesAccepted")||t(!0)},[]);let n=()=>{localStorage.setItem("cookiesDeclined","true"),t(!1)};return(0,i.jsx)(b.M,{children:e&&(0,i.jsx)(o.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{duration:.5},className:"fixed bottom-0 left-0 right-0 z-50 p-4",children:(0,i.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,i.jsx)("div",{className:"bg-[#0A0A0A] border border-[#C8A97E]/20 rounded-xl p-6 shadow-2xl backdrop-blur-md",children:(0,i.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsx)("h3",{className:"text-lg font-medium text-[#C8A97E]",children:"Cookie-Einstellungen"}),(0,i.jsx)("p",{className:"text-sm text-gray-300",children:"Wir verwenden Cookies, um Ihnen die bestm\xf6gliche Erfahrung auf unserer Website zu bieten. Diese helfen uns zu verstehen, wie Sie unsere Website nutzen und erm\xf6glichen es uns, unseren Service kontinuierlich zu verbessern."}),(0,i.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,i.jsx)("button",{onClick:()=>{localStorage.setItem("cookiesAccepted","true"),t(!1)},className:"px-6 py-2 bg-[#C8A97E] hover:bg-[#B69A6E] text-black rounded-lg transition-colors text-sm font-medium",children:"Alle akzeptieren"}),(0,i.jsx)("button",{onClick:n,className:"px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm",children:"Nur notwendige"})]})]}),(0,i.jsx)("button",{onClick:n,className:"p-2 hover:bg-white/5 rounded-lg transition-colors",children:(0,i.jsx)(u.Z,{className:"w-5 h-5 text-gray-400"})})]})})})})})}function v(e){let{children:t,className:n}=e,[l,o]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{o(!0)},[]),l)?(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:n,children:[t,(0,i.jsx)(g,{}),(0,i.jsx)(p,{})]})}):(0,i.jsx)("div",{className:n,style:{visibility:"hidden"}})}},9564:function(e,t,n){"use strict";n.d(t,{Cm:function(){return u},mX:function(){return c}});var i=n(6550),a=n(3949),l=n(9427),s=JSON.parse('{"nav":{"home":"Home","services":"Services","about":"About","references":"References","testimonials":"Testimonials","contact":"Contact","menu":"Open Menu","close":"Close Menu"},"logo":{"alt":"Mel Jazz Logo"},"language":{"switchTo":"Zu Deutsch wechseln"},"hero":{"title":"Discover Your Voice","subtitle":"Professional Vocal Coaching in Berlin","cta":"Book Now"},"music":{"title":"My Music","play":"Play","pause":"Pause","loading":"Loading..."},"video":{"title":"Insights"},"services":{"title":"Services","singing":{"title":"Singing Lessons","description":"Individual lessons for all levels","features":["Voice Training","Breathing Technique","Interpretation","Stage Presence"],"details":{"includes":["Voice Analysis","Individual Training Plan","Recordings","Practice Material"],"suitable":["Beginners","Advanced","Professionals","All Genres"],"duration":"60-90 min","location":"Online & Studio Berlin"}}},"about":{"title":"About Me","subtitle":"Professional Singer & Vocal Coach","description":"With over 15 years of experience in jazz and vocal coaching"},"references":{"title":"References & Collaborations"},"testimonials":{"title":"What People Say","subtitle":"Testimonials from students and collaborators"},"contact":{"title":"Get in Touch","subtitle":"Book your session or ask any questions","form":{"name":"Your Name","email":"Your Email","message":"Your Message","submit":"Send Message"}},"footer":{"rights":"All Rights Reserved"},"booking":{"title":"Book a Session","service":"Select Service","date":"Select Date","time":"Select Time","contact":"Your Contact Information","name":"Full Name","email":"Email Address","phone":"Phone Number","message":"Additional Message","submit":"Submit Booking","success":"Booking submitted successfully!","error":"There was an error submitting your booking. Please try again."}}'),o=JSON.parse('{"nav":{"home":"Start","services":"Leistungen","about":"\xdcber mich","references":"Referenzen","testimonials":"Stimmen","contact":"Kontakt","menu":"Men\xfc \xf6ffnen","close":"Men\xfc schlie\xdfen"},"logo":{"alt":"Mel Jazz Logo"},"language":{"switchTo":"Switch to English"},"hero":{"title":"Entdecke deine Stimme","subtitle":"Professionelles Vocal Coaching in Berlin","cta":"Jetzt buchen"},"music":{"title":"Meine Musik","play":"Abspielen","pause":"Pause","loading":"L\xe4dt..."},"video":{"title":"Einblicke"},"services":{"title":"Leistungen","singing":{"title":"Gesangsunterricht","description":"Individueller Unterricht f\xfcr alle Level","features":["Stimmtraining","Atemtechnik","Interpretation","B\xfchnenpr\xe4senz"],"details":{"includes":["Stimmanalyse","Individueller Trainingsplan","Aufnahmen","\xdcbungsmaterial"],"suitable":["Anf\xe4nger","Fortgeschrittene","Profis","Alle Genres"],"duration":"60-90 min","location":"Online & Studio Berlin"}}},"about":{"title":"\xdcber mich","subtitle":"Professionelle S\xe4ngerin & Vocal Coach","description":"Mit \xfcber 15 Jahren Erfahrung im Jazz und Vocal Coaching"},"references":{"title":"Referenzen & Kooperationen"},"testimonials":{"title":"Das sagen andere","subtitle":"Stimmen von Sch\xfclern und Kollaborateuren"},"contact":{"title":"Kontakt aufnehmen","subtitle":"Buche deine Session oder stelle Fragen","form":{"name":"Dein Name","email":"Deine E-Mail","message":"Deine Nachricht","submit":"Nachricht senden"}},"footer":{"rights":"Alle Rechte vorbehalten"},"booking":{"title":"Termin buchen","service":"Leistung ausw\xe4hlen","date":"Datum ausw\xe4hlen","time":"Uhrzeit ausw\xe4hlen","contact":"Ihre Kontaktdaten","name":"Vollst\xe4ndiger Name","email":"E-Mail-Adresse","phone":"Telefonnummer","message":"Zus\xe4tzliche Nachricht","submit":"Buchung absenden","success":"Buchung erfolgreich \xfcbermittelt!","error":"Bei der \xdcbermittlung Ihrer Buchung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."}}');let r=()=>document.querySelectorAll("[data-i18n]"),c=e=>{document.documentElement.lang=e,document.documentElement.dir="ar"===e?"rtl":"ltr"},d=()=>({en:{translation:s},de:{translation:o}}),u=e=>{let t=r(),n=d();t.forEach(t=>{var i;let a=t.getAttribute("data-i18n");if(a&&(null===(i=n[e])||void 0===i?void 0:i.translation)){let i=a.split("."),l=n[e].translation;for(let e of i)l[e]&&(l=l[e]);"string"==typeof l&&(t instanceof HTMLInputElement?"submit"===t.type||"button"===t.type?t.value=l:t.placeholder=l:t instanceof HTMLImageElement?t.alt=l:t.textContent=l)}})};i.ZP.isInitialized||i.ZP.use(l.Z).use(a.Db).init({resources:{en:{translation:s},de:{translation:o}},fallbackLng:"de",defaultNS:"translation",interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator"],lookupLocalStorage:"language",caches:["localStorage"]},react:{useSuspense:!1}})},9205:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:c="",children:d,iconNode:u,...m}=e;return(0,i.createElement)("svg",{ref:t,...s,width:a,height:a,stroke:n,strokeWidth:r?24*Number(o)/Number(a):o,className:l("lucide",c),...m},[...u.map(e=>{let[t,n]=e;return(0,i.createElement)(t,n)}),...Array.isArray(d)?d:[d]])}),r=(e,t)=>{let n=(0,i.forwardRef)((n,s)=>{let{className:r,...c}=n;return(0,i.createElement)(o,{ref:s,iconNode:t,className:l("lucide-".concat(a(e)),r),...c})});return n.displayName="".concat(e),n}},2489:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});let i=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},166:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var i=n(5775),a=n.n(i)},5775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=n(7043);n(7437),n(2265);let a=i._(n(5602));function l(e,t){var n;let i={loading:e=>{let{error:t,isLoading:n,pastDelay:i}=e;return null}};"function"==typeof e&&(i.loader=e);let l={...i,...t};return(0,a.default)({...l,modules:null==(n=l.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let i=n(8993);function a(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new i.BailoutToCSRError(t);return n}},5602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let i=n(7437),a=n(2265),l=n(1523),s=n(49);function o(e){return{default:e&&"default"in e?e.default:e}}let r={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},c=function(e){let t={...r,...e},n=(0,a.lazy)(()=>t.loader().then(o)),c=t.loading;function d(e){let o=c?(0,i.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,r=t.ssr?(0,i.jsxs)(i.Fragment,{children:["undefined"==typeof window?(0,i.jsx)(s.PreloadCss,{moduleIds:t.modules}):null,(0,i.jsx)(n,{...e})]}):(0,i.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(n,{...e})});return(0,i.jsx)(a.Suspense,{fallback:o,children:r})}return d.displayName="LoadableComponent",d}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let i=n(7437),a=n(544);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,a.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,i.jsx)(i.Fragment,{children:l.map(e=>(0,i.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},7960:function(){},660:function(){},8553:function(){},5834:function(){},4294:function(){},1953:function(){},8966:function(e){e.exports={style:{fontFamily:"'__Cormorant_Garamond_1991b4', '__Cormorant_Garamond_Fallback_1991b4'",fontStyle:"normal"},className:"__className_1991b4",variable:"__variable_1991b4"}},4742:function(e){e.exports={style:{fontFamily:"'__Inter_bd3e75', '__Inter_Fallback_bd3e75'",fontStyle:"normal"},className:"__className_bd3e75"}},6360:function(e){e.exports={style:{fontFamily:"'__Montserrat_2ff634', '__Montserrat_Fallback_2ff634'",fontStyle:"normal"},className:"__className_2ff634",variable:"__variable_2ff634"}},3686:function(e){e.exports={style:{fontFamily:"'__Playfair_Display_d7fec4', '__Playfair_Display_Fallback_d7fec4'",fontStyle:"normal"},className:"__className_d7fec4",variable:"__variable_d7fec4"}},4250:function(e){e.exports={style:{fontFamily:"'__Roboto_cb3890', '__Roboto_Fallback_cb3890'",fontStyle:"normal"},className:"__className_cb3890",variable:"__variable_cb3890"}}},function(e){e.O(0,[912,872,981,972,949,504,437,971,117,744],function(){return e(e.s=8618)}),_N_E=e.O()}]);