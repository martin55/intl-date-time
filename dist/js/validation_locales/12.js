webpackJsonp([42],{qqz1:function(e,n,i){var t;t=function(){"use strict";var e,n={name:"de",messages:{_default:function(e){return e+" ist ungültig."},after:function(e,n){return e+" muss nach "+n[0]+" liegen."},alpha:function(e){return e+" darf nur alphabetische Zeichen enthalten."},alpha_dash:function(e){return e+" darf alphanumerische Zeichen sowie Striche und Unterstriche enthalten."},alpha_num:function(e){return e+" darf nur alphanumerische Zeichen enthalten."},alpha_spaces:function(e){return e+" darf nur alphanumerische Zeichen und Leerzeichen enthalten."},before:function(e,n){return e+" muss vor "+n[0]+" liegen."},between:function(e,n){return e+" muss zwischen "+n[0]+" und "+n[1]+" liegen."},confirmed:function(e){return"Die Bestätigung von "+e+" stimmt nicht überein"},credit_card:function(e){return e+" ist keine gültiger Wert für Kreditkarten."},date_between:function(e,n){return e+" muss zwischen "+n[0]+" und "+n[1]+" liegen."},date_format:function(e,n){return e+" muss das Format "+n[0]+" haben."},decimal:function(e,n){void 0===n&&(n=[]);var i=n[0];return void 0===i&&(i="*"),e+" muss numerisch sein und darf"+("*"===i?"":" "+i)+" Dezimalpunkte enthalten."},digits:function(e,n){return e+" muss numerisch sein und exakt "+n[0]+" Ziffern enthalten."},dimensions:function(e,n){return e+" muss "+n[0]+" x "+n[1]+" Bildpunkte groß sein."},email:function(e){return e+" muss eine gültige E-Mail-Adresse sein."},excluded:function(e){return e+" muss ein gültiger Wert sein."},ext:function(e){return e+" muss eine gültige Datei sein."},image:function(e){return e+" muss eine Grafik sein."},included:function(e){return e+" muss ein gültiger Wert sein."},integer:function(e){return e+" muss eine ganze Zahl sein."},ip:function(e){return e+" muss eine gültige IP-Adresse sein."},length:function(e,n){var i=n[0],t=n[1];return t?"Die Länge von "+e+" muss zwischen "+i+" und "+t+" liegen.":"Die Länge von "+e+" muss "+i+" sein."},max:function(e,n){return e+" darf nicht länger als "+n[0]+" Zeichen sein."},max_value:function(e,n){return e+" darf maximal "+n[0]+" sein."},mimes:function(e){return e+" muss einen gültigen Dateityp haben."},min:function(e,n){return e+" muss mindestens "+n[0]+" Zeichen lang sein."},min_value:function(e,n){return e+" muss mindestens "+n[0]+" sein."},numeric:function(e){return e+" darf nur numerische Zeichen enthalten."},regex:function(e){return"Das Format von "+e+" ist ungültig."},required:function(e){return e+" ist ein Pflichtfeld."},required_if:function(e){return e+" ist ein Pflichtfeld."},size:function(e,n){var i,t,r;return e+" muss kleiner als "+(i=n[0],t=1024,r=0==(i=Number(i)*t)?0:Math.floor(Math.log(i)/Math.log(t)),1*(i/Math.pow(t,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+" sein."},url:function(e){return e+" ist keine gültige URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n},e.exports=t()}});