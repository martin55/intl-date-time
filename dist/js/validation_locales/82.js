webpackJsonp([7],{fSMg:function(e,a,n){var i;i=function(){"use strict";var e,a={name:"sr_Latin",messages:{_default:function(e){return"Polje "+e+" nije validno."},after:function(e,a){return"Polje "+e+" mora biti posle "+a[0]+"."},alpha:function(e){return"Polje "+e+" može sadržati samo slova."},alpha_dash:function(e){return"Polje "+e+" može sadržati alfanumeričke karaktere i povlake."},alpha_num:function(e){return"Polje "+e+" može sadržati samo alfanumeričke karaktere."},alpha_spaces:function(e){return"Polje "+e+" može sadržati samo alfanumeričke karaktere i razmake."},before:function(e,a){return"Polje "+e+" mora biti pre "+a[0]+"."},between:function(e,a){return"Polje "+e+" mora biti između "+a[0]+" i "+a[1]+"."},confirmed:function(e){return"Potvrda polja "+e+" se ne poklapa."},credit_card:function(e){return"Polje "+e+" nije validno."},date_between:function(e,a){return"Polje "+e+" mora biti između "+a[0]+" i "+a[1]+"."},date_format:function(e,a){return"Polje "+e+" mora biti u formatu "+a[0]+"."},decimal:function(e,a){void 0===a&&(a=[]);var n=a[0];return void 0===n&&(n="*"),"Polje "+e+" mora biti broj i može sadržati"+("*"===n?"":" "+n)+" decimalnih mesta."},digits:function(e,a){return"Polje "+e+" mora biti broj i sadržati tačno "+a[0]+" cifara."},dimensions:function(e,a){return"Polje "+e+" mora biti "+a[0]+" x "+a[1]+" piksela."},email:function(e){return"Polje "+e+" mora biti validan imejl."},excluded:function(e){return"Polje "+e+" mora imati validnu vrednost."},ext:function(e){return"Polje "+e+" mora biti validan fajl."},image:function(e){return"Polje "+e+" mora biti slika."},included:function(e){return"Polje "+e+" mora biti validna vrednost."},ip:function(e){return"Polje "+e+' mora biti validna "IP" adresa.'},max:function(e,a){return"Polje "+e+" ne sme biti duže od "+a[0]+" karaktera."},max_value:function(e,a){return"Polje "+e+" ne sme biti veće od "+a[0]+"."},mimes:function(e){return"Polje "+e+" mora biti validan tip fajla."},min:function(e,a){return"Polje "+e+" mora sadržati najmanje "+a[0]+" karaktera."},min_value:function(e,a){return"Polje "+e+" ne sme biti manje od "+a[0]+"."},numeric:function(e){return"Polje "+e+" mora biti broj."},regex:function(e){return"Format polja "+e+" nije validan."},required:function(e){return"Polje "+e+" je obavezno."},size:function(e,a){var n,i,r;return"Polje "+e+" mora biti manje od "+(n=a[0],i=1024,r=0==(n=Number(n)*i)?0:Math.floor(Math.log(n)/Math.log(i)),1*(n/Math.pow(i,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+"."},url:function(e){return"Polje "+e+" nije validna veb adresa."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[a.name]=a,e)),a},e.exports=i()}});