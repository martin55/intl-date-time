(self.webpackChunkIntlDateTime=self.webpackChunkIntlDateTime||[]).push([[414],{6150:(t,n,e)=>{"use strict";e.d(n,{W:()=>a,f:()=>r});var a={default:{translation:"en-gb",name:"english"},ar:{translation:"ar",name:"Arabic"},at:{translation:"de-at",name:"Austria"},az:{translation:"az",name:"Azerbaijan"},be:{translation:"be",name:"Belarusian"},bg:{translation:"bg",name:"Bulgarian"},bn:{translation:"bn",name:"Bangla"},bs:{translation:"bs",name:"Bosnian"},cat:{translation:"ca",name:"Catalan"},cs:{translation:"cs",name:"Czech"},cy:{translation:"cy",name:"Welsh"},da:{translation:"da",name:"Danish"},de:{translation:"de",name:"German"},eo:{translation:"eo",name:"Esperanto"},es:{translation:"es",name:"Spanish"},et:{translation:"et",name:"Estonian"},fa:{translation:"fa",name:"Persian"},fi:{translation:"fi",name:"Finnish"},fo:{translation:"fo",name:"Faroese"},fr:{translation:"fr",name:"French"},ga:{translation:"ga",name:"Irish"},gr:{translation:"el",name:"Greek"},he:{translation:"he",name:"Hebrew"},hi:{translation:"hi",name:"Hindi"},hr:{translation:"hr",name:"Croatian"},hu:{translation:"hu",name:"Hungarian"},id:{translation:"id",name:"Indonesian"},is:{translation:"is",name:"Icelandic"},it:{translation:"it",name:"Italian"},ja:{translation:"ja",name:"Japanese"},ka:{translation:"ka",name:"Georgian"},km:{translation:"km",name:"Khmer"},ko:{translation:"ko",name:"Korean"},kz:{translation:"kk",name:"Kazakh"},lt:{translation:"lt",name:"Lithuanian"},lv:{translation:"lv",name:"Latvian"},mk:{translation:"mk",name:"Macedonian"},mn:{translation:"mn",name:"Mongolian"},ms:{translation:"ms",name:"Malaysian"},my:{translation:"my",name:"Burmese"},nl:{translation:"nl",name:"Dutch"},no:{translation:"nb",name:"Norwegian"},pa:{translation:"pa-in",name:"Punjabi"},pl:{translation:"pl",name:"Polish"},pt:{translation:"pt",name:"Portuguese"},ro:{translation:"ro",name:"Romanian"},ru:{translation:"ru",name:"Russian"},si:{translation:"si",name:"Sinhala"},sk:{translation:"sk",name:"Slovak"},sl:{translation:"sl",name:"Slovenian"},sq:{translation:"sq",name:"Albanian"},sr:{translation:"sr",name:"Serbian"},"sr-cyr":{translation:"sr-cyrl",name:"SerbianCyrillic"},sv:{translation:"sv",name:"Swedish"},th:{translation:"th",name:"Thai"},tr:{translation:"tr",name:"Turkish"},uk:{translation:"uk",name:"Ukrainian"},vn:{translation:"vi",name:"Vietnamese"},zh:{translation:"zh-cn",name:"Mandarin"},"zh-tw":{translation:"zh-tw",name:"MandarinTraditional"}},r={ar:{translation:"ar"},az:{translation:"az"},be:{translation:"be"},bg:{translation:"bg"},bn:{translation:"bn"},bs:{translation:"bs"},ca:{translation:"cat"},cs:{translation:"cs"},cy:{translation:"cy"},da:{translation:"da"},de:{translation:"de"},"de-at":{translation:"at"},"de-ch":{translation:"de"},el:{translation:"gr"},en:{translation:"default"},"en-au":{translation:"default"},"en-ca":{translation:"default"},"en-gb":{translation:"default"},"en-ie":{translation:"default"},"en-nz":{translation:"default"},eo:{translation:"eo"},es:{translation:"es"},"es-do":{translation:"es"},"es-us":{translation:"es"},et:{translation:"et"},fa:{translation:"fa"},fi:{translation:"fi"},fo:{translation:"fo"},fr:{translation:"fr"},"fr-ca":{translation:"fr"},"fr-ch":{translation:"fr"},ga:{translation:"ga"},he:{translation:"he"},hi:{translation:"hi"},hr:{translation:"hr"},hu:{translation:"hu"},id:{translation:"id"},is:{translation:"is"},it:{translation:"it"},ja:{translation:"ja"},ka:{translation:"ka"},kk:{translation:"kz"},km:{translation:"km"},ko:{translation:"ko"},lt:{translation:"lt"},lv:{translation:"lv"},mk:{translation:"mk"},mn:{translation:"mn"},ms:{translation:"ms"},my:{translation:"my"},nb:{translation:"no"},nl:{translation:"nl"},"pa-in":{translation:"pa"},pl:{translation:"pl"},pt:{translation:"pt"},"pt-br":{translation:"pt"},ro:{translation:"ro"},ru:{translation:"ru"},si:{translation:"si"},sk:{translation:"sk"},sl:{translation:"sl"},sq:{translation:"sq"},sr:{translation:"sr"},"sr-cyrl":{translation:"sr-cyr"},sv:{translation:"sv"},th:{translation:"th"},tr:{translation:"tr"},uk:{translation:"uk"},vi:{translation:"vn"},"zh-cn":{translation:"zh"},"zh-hk":{translation:"zh"},"zh-tw":{translation:"zh-tw"}}},4904:(t,n,e)=>{"use strict";e.d(n,{Z:()=>d});for(var a=e(316),r=e(6150),o={flatpickr:{},momentjs:{}},i=0,s=Object.keys(r.W);i<s.length;i++){var l=s[i];o.flatpickr[l]=e(9948)("./".concat(l,".js"))[r.W[l].name]}for(var m=0,u=Object.keys(r.f);m<u.length;m++){var c=u[m];o.momentjs[c]=a.k[c]}const d=o},9948:(t,n,e)=>{var a={"./ar.js":5643,"./at.js":5085,"./az.js":8633,"./be.js":7090,"./bg.js":2707,"./bn.js":6388,"./bs.js":2832,"./cat.js":8920,"./cs.js":6687,"./cy.js":5024,"./da.js":7623,"./de.js":6785,"./default.js":6895,"./eo.js":9435,"./es.js":4151,"./et.js":277,"./fa.js":4574,"./fi.js":9088,"./fo.js":8930,"./fr.js":2712,"./ga.js":6499,"./gr.js":7066,"./he.js":8999,"./hi.js":7913,"./hr.js":2805,"./hu.js":6517,"./id.js":4060,"./index.js":3910,"./is.js":337,"./it.js":7041,"./ja.js":9103,"./ka.js":2937,"./km.js":1658,"./ko.js":9241,"./kz.js":1377,"./lt.js":8170,"./lv.js":4030,"./mk.js":4672,"./mn.js":4509,"./ms.js":1127,"./my.js":9664,"./nl.js":5439,"./no.js":1850,"./pa.js":5865,"./pl.js":6101,"./pt.js":6901,"./ro.js":8223,"./ru.js":7896,"./si.js":320,"./sk.js":9248,"./sl.js":8939,"./sq.js":8509,"./sr-cyr.js":6997,"./sr.js":9113,"./sv.js":4533,"./th.js":3871,"./tr.js":6075,"./uk.js":5639,"./uz.js":7574,"./uz_latn.js":2656,"./vn.js":6911,"./zh-tw.js":6122,"./zh.js":4903};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(a,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id=9948},8907:(t,n,e)=>{var a={"./ar.json":[1709,5416],"./az.json":[644,2688],"./bd.json":[72,3142],"./bg.json":[2123,3600],"./ca.json":[5334,9191],"./ckb.json":[7221,3011],"./cs.json":[480,1738],"./da.json":[5321,5401],"./de.json":[8563,3407],"./el.json":[7412,4888],"./en.json":[5505,8314],"./es.json":[2568,8359],"./et.json":[9195,5556],"./eu.json":[8542,6039],"./fa.json":[2658,2067],"./fi.json":[3696,6262],"./fr.json":[8377,6057],"./he.json":[4122,793],"./hr.json":[7280,9968],"./hu.json":[4986,4177],"./id.json":[2212,5894],"./it.json":[5438,6328],"./ja.json":[843,2164],"./ka.json":[8172,6388],"./ko.json":[9925,3603],"./lt.json":[8561,5421],"./lv.json":[9152,1848],"./mn.json":[1125,991],"./ms_MY.json":[8017,1766],"./nb_NO.json":[1160,8544],"./ne.json":[7383,5113],"./nl.json":[984,7263],"./nn_NO.json":[8864,8320],"./pl.json":[9710,774],"./pt_BR.json":[6489,4642],"./pt_PT.json":[2784,4932],"./ro.json":[3453,8948],"./ru.json":[9621,1261],"./sk.json":[1881,6353],"./sl.json":[8005,3306],"./sq.json":[7322,4291],"./sr.json":[7869,4780],"./sr_Latin.json":[420,4213],"./sv.json":[4169,2043],"./th.json":[3674,2697],"./tr.json":[8289,53],"./uk.json":[883,7884],"./vi.json":[626,3556],"./zh_CN.json":[5631,8682],"./zh_TW.json":[5522,3597]};function r(t){if(!e.o(a,t))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[t],r=n[0];return e.e(n[1]).then((()=>e.t(r,19)))}r.keys=()=>Object.keys(a),r.id=8907,t.exports=r},822:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>S});var a=e(2706),r=e(6171),o=e(9066),i=e.n(o),s=e(7378),l=e(2903),m=e(2200),u=e(1539);function c(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==e.return||e.return()}finally{if(s)throw o}}}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function f(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var h={d:"DD",D:"ddd",l:"dddd",j:"D",J:"Do",w:"e",F:"MMMM",m:"MM",n:"M",M:"MMM",U:"X",y:"YY",Y:"YYYY",Z:"YYYY-MM-DDTHH:mm:ss.SSSZ",H:"HH",h:"h",i:"mm",S:"ss",s:"s",K:"A"},j={dddd:"l",ddd:"D",DD:"d",Do:"J",D:"j",e:"w",MMMM:"F",MMM:"M",MM:"m",M:"n",X:"U",YYYY:"Y",YY:"y",HH:"H",H:"H",h:"h",mm:"i",m:"i",ss:"S",s:"s",A:"K"},p={dddd:"EEEE",ddd:"E..EEE",DD:"dd",Do:"do",D:"d",d:"i",MMMM:"MMMM",MMM:"MMM",MM:"MM",M:"M",X:"t",YYYY:"yyyy",YY:"yy",HH:"HH",H:"H",h:"h",mm:"mm",m:"m",ss:"ss",s:"s",A:"a..aaa"},v=[".","-","/",":"," ","年","日"],y=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,a;return n=t,a=[{key:"convertFormat",value:function(t,n){for(var e=n.replace(/[^ -~]+/g,"").replace(/\s+/g," ").trim(),a=Object.keys(t),r="";e.length>0;){var o,i=!1,s=c(a);try{for(s.s();!(o=s.n()).done;){var l=o.value;v.indexOf(e.slice(0,1))>-1&&(r+=e.slice(0,1),e=e.slice(1),i=!0),e.startsWith(l)&&(r+=t[l],e=e.slice(l.length),i=!0)}}catch(t){s.e(t)}finally{s.f()}if(!i)break}return r.trim()}},{key:"momentToFlatpickr",value:function(t){if(t)return this.convertFormat(j,t);throw new Error("Empty input string provided!")}},{key:"flatpickrToMoment",value:function(t){if(t)return this.convertFormat(h,t);throw new Error("Empty input string provided!")}},{key:"momentToDateFns",value:function(t){if(t)return this.convertFormat(p,t);throw new Error("Empty input string provided!")}}],(e=null)&&f(n.prototype,e),a&&f(n,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(),b=e(6150),k=e(4904);function g(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return M(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function F(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}const D={directives:{mask:s.mask},props:{field:{type:Object,required:!0},value:{type:String,required:!1,default:""},readonly:{type:Boolean,default:!1},dateFormat:{type:String,default:""},timeFormat:{type:String,default:""},twelveHourTime:{type:Boolean,default:!1},enableTime:{type:Boolean,default:!1},enableSeconds:{type:Boolean,default:!1},locale:{type:String,default:"en-gb"},errorMessageLocale:{type:String,default:"en"},placeholder:{type:String,default:""},minDate:{type:[Date,Object],default:null},maxDate:{type:[Date,Object],default:null},defaultHour:{type:Number,default:null},defaultMinute:{type:Number,default:null}},data:function(){return{refName:"intlDatepickerInput",flatpickr:null,validationError:!1,validationErrors:new a.Errors,now:new Date}},computed:{momentjsFormat:function(){return this.timeFormat||(this.field.displayLocaleTime?this.$set(this,"timeFormat",k.Z.momentjs[this.locale].LTS):this.field.displayLocaleTimeShort&&this.$set(this,"timeFormat",k.Z.momentjs[this.locale].LT)),"".concat(k.Z.momentjs[this.locale].L," ").concat(this.timeFormat).replace(/[^ -~]+/g,"").trim()},dateFormatString:function(){if(this.dateFormat)return this.dateFormat;try{return y.momentToFlatpickr(this.momentjsFormat)}catch(t){console.warn(t)}return"d/m/Y H:i:S"},maskFormat:function(){return this.momentjsFormat.replace(/\w/g,"#")},dateValidationRule:function(){return"date_format:".concat(y.momentToDateFns(this.momentjsFormat))},displayShortcutButtons:function(){return this.field.displayShortcutButtons||!1},required:function(){return this.field.required||!1}},mounted:function(){var t=this;Promise.all([e.e(9778),e.e(8012)]).then(e.bind(e,814)).then((function(n){(0,l.l7)("date_format",function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){F(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},n)),t.loadLocale(t.errorMessageLocale)}));var n=[].concat(g(this.displayShortcutButtons?[{label:this.__("Yesterday")},{label:this.__("Today")},{label:this.__("Tomorrow")}]:[]),g(this.required?[]:[{label:this.__("Clear")}])),a=[].concat(g(this.displayShortcutButtons?[function(n,e){if(!(n>2)){var a;switch(n){case 0:a=(0,m.Z)(t.now,1);break;case 1:default:a=t.now;break;case 2:a=(0,u.Z)(t.now,1)}e.setDate(a)}}]:[]),g(this.required?[]:[function(n,e){3!=n&&t.displayShortcutButtons||(e.clear(),e.close())}])),o={enableTime:this.enableTime,enableSeconds:this.enableSeconds,onChange:this.onChange,onValueUpdate:this.onChange,onClose:this.onChange,dateFormat:this.dateFormatString,allowInput:!0,time_24hr:!0,locale:k.Z.flatpickr[b.f[this.locale].translation],plugins:n.length>0?[i()({button:n,onClick:a})]:[],defaultHour:this.defaultHour,defaultMinute:this.defaultMinute};this.minDate&&(o.minDate=this.minDate.format(this.momentjsFormat)),this.maxDate&&(o.maxDate=this.maxDate.format(this.momentjsFormat)),void 0===this.field.firstDayOfWeek||isNaN(Number(this.field.firstDayOfWeek))||(o.locale.firstDayOfWeek=Number(this.field.firstDayOfWeek)),this.$nextTick((function(){t.flatpickr=(0,r.Z)(t.$refs[t.refName],o)})),Nova.$on("".concat(this.field.attribute,"-value"),(function(n){t.flatpickr.setDate(n),t.onChange([],n)}))},methods:{onChange:function(t,n){var e=this;n?(0,l.Gu)(n,this.dateValidationRule,{name:this.field.name}).then((function(t){var r=t.valid,o=t.errors;r?(e.$set(e,"validationErrors",new a.Errors),e.$set(e,"validationError",!1),e.$emit("change",n)):(e.$set(e,"validationErrors",new a.Errors(o)),e.$set(e,"validationError",!0),e.$emit("error",e.validationErrors))})):(this.$set(this,"validationErrors",new a.Errors),this.$set(this,"validationError",!1),this.$emit("change",n))},loadLocale:function(t){e(8907)("./".concat(t,".json")).then((function(n){(0,l.NC)(t,n)})).catch((function(){console.warn("The error messages do not support the '".concat(t,"' locale. Defaulting back to English. Please define another locale manually with errorMessageLocale()."))}))}}};var E=e(1900);const T={components:{IntlDateTimePicker:(0,E.Z)(D,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.maskFormat,expression:"maskFormat"}],ref:t.refName,class:{"!cursor-not-allowed":t.field.readonly},attrs:{disabled:t.field.readonly,dusk:t.field.attribute,name:t.field.name,placeholder:t.placeholder,type:"text",required:t.field.required||!1},domProps:{value:t.value}})}),[],!1,null,"35ca0594",null).exports},mixins:[a.HandlesValidationErrors,a.FormField,a.InteractsWithDates],data:function(){return{defaultMomentJSFormat:"YYYY-MM-DD HH:mm:ss",localizedValue:"",validationError:!1,validationErrors:new a.Errors}},computed:{systemTimeZone:function(){return this.field.timeZone?this.field.timeZone:"UTC"},userTimezone:function(){return this.field.userTimeZone?this.field.userTimeZone:Nova.config.userTimezone||moment.tz.guess()},dateFormat:function(){if(this.field.dateFormat)try{return y.momentToFlatpickr("".concat(this.field.dateFormat," ").concat(this.timeFormat).trim())}catch(t){console.warn(t)}return this.defaultFlatpickrFormat},timeFormat:function(){if(this.field.timeFormat){if(this.field.timeFormat.match(/^[Hh]{1,2}:[m]{1,2}(:[s]{1,2})?$/))return this.field.timeFormat}else{if(this.field.displayLocaleTime)return k.Z.momentjs[this.locale].LTS;if(this.field.displayLocaleTimeShort)return k.Z.momentjs[this.locale].LT}return""},enableTime:function(){return!!this.timeFormat},enableSeconds:function(){return!(!this.timeFormat||!this.timeFormat.match(/:[s]{1,2}$/))},locale:function(){return this.field.locale||"en-gb"},errorMessageLocale:function(){return this.field.errorMessageLocale||"en"},momentjsFormat:function(){return"".concat(k.Z.momentjs[this.locale].L," ").concat(this.timeFormat).replace(/[^ -~]+/g,"").trim()},defaultFlatpickrFormat:function(){try{return y.momentToFlatpickr(this.momentjsFormat)}catch(t){console.warn(t)}return"d/m/Y H:i:S"},format:function(){return this.field.dateFormat?"".concat(this.field.dateFormat," ").concat(this.timeFormat).trim():this.momentjsFormat},placeholder:function(){if("placeholder"in this.field){if(this.field.placeholder)return this.field.placeholder;if(!1===this.field.placeholder)return""}return this.momentjsFormat},firstError:function(){return this.validationErrors.errors.length?this.field.errorMessage||this.validationErrors.errors[0]:null},minDate:function(){return this.field.minDate?moment(this.field.minDate):null},maxDate:function(){return this.field.maxDate?moment(this.field.maxDate):null},defaultHour:function(){var t;return null!==(t=this.field.defaultHour)&&void 0!==t?t:12},defaultMinute:function(){var t;return null!==(t=this.field.defaultMinute)&&void 0!==t?t:0}},mounted:function(){var t=this;Nova.$on("".concat(this.field.attribute,"-value"),(function(n){t.localizedValue=n}))},methods:{setInitialValue:function(){this.$set(this,"value",this.field.value||""),""!==this.value&&this.$set(this,"localizedValue",moment.tz(this.value,this.defaultMomentJSFormat,this.systemTimeZone).clone().tz(this.userTimezone).format(this.format))},handleChange:function(t){this.$set(this,"validationErrors",new a.Errors),this.$set(this,"validationError",!1),this.$set(this,"value",t?moment.tz(t,this.format,this.userTimezone).clone().tz(this.systemTimeZone).format("".concat(this.defaultMomentJSFormat," ZZ")):"")},handleError:function(t){var n=t.errors;this.$set(this,"validationErrors",new a.Errors(n)),this.$set(this,"validationError",!0)}}};const S=(0,E.Z)(T,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("default-field",{attrs:{field:t.field,errors:t.errors,"show-help-text":t.showHelpText},on:{"update:errors":function(n){t.errors=n}}},[e("template",{slot:"field"},[e("div",{staticClass:"flex items-center"},[e("intl-date-time-picker",{staticClass:"w-full form-control form-input form-input-bordered",class:{errorClass:t.validationError},attrs:{field:t.field,value:t.localizedValue,"date-format":t.dateFormat,"time-format":t.timeFormat,"enable-time":t.enableTime,"enable-seconds":t.enableSeconds,"min-date":t.minDate,"max-date":t.maxDate,placeholder:t.placeholder,locale:t.locale,"error-message-locale":t.errorMessageLocale,"default-hour":t.defaultHour,"default-minute":t.defaultMinute},on:{change:t.handleChange,error:t.handleError}}),t._v(" "),t.field.displayUserTimeZone?e("span",{staticClass:"text-80 text-sm ml-2"},[t._v("("+t._s(t.__(t.userTimezone))+")")]):t._e()],1),t._v(" "),t.firstError?e("help-text",{staticClass:"error-text mt-2 text-danger"},[t._v("\n            "+t._s(t.firstError)+"\n        ")]):t._e()],1)],2)}),[],!1,null,null,null).exports}}]);