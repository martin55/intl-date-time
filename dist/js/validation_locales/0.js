webpackJsonp([48],{VyJT:function(n,t,r){var e;e=function(){"use strict";var n,t={name:"ar",messages:{_default:function(n){return"قيمة الحقل "+n+" غير صحيحة."},after:function(n,t){return n+" يجب ان يكون بعد "+t[0]+"."},alpha:function(n){return n+" يجب ان يحتوي على حروف فقط."},alpha_dash:function(n){return n+" قد يحتوي على حروف او الرموز - و _."},alpha_num:function(n){return n+" قد يحتوي فقط على حروف وارقام."},alpha_spaces:function(n){return n+" قد يحتوي فقط على حروف ومسافات."},before:function(n,t){return n+" يجب ان يكون قبل "+t[0]+"."},between:function(n,t){return"قيمة "+n+" يجب ان تكون ما بين "+t[0]+" و "+t[1]+"."},confirmed:function(n){return n+" لا يماثل التأكيد."},credit_card:function(n){return"الحقل "+n+" غير صحيح."},date_between:function(n,t){return n+" يجب ان يكون ما بين "+t[0]+" و "+t[1]+"."},date_format:function(n,t){return n+" يجب ان يكون على هيئة "+t[0]+"."},decimal:function(n,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r="*"),n+" يجب ان يكون قيمة رقمية وقد يحتوي على"+("*"===r?"":" "+r)+" ارقام عشرية."},digits:function(n,t){return n+" يجب ان تحتوي فقط على ارقام والا يزيد عددها عن "+t[0]+" رقم."},dimensions:function(n,t){return n+" يجب ان تكون بمقاس "+t[0]+" بكسل في "+t[1]+" بكسل."},email:function(n){return n+" يجب ان يكون بريداً اليكتروناً صحيحاً."},excluded:function(n){return"الحقل "+n+" غير صحيح."},ext:function(n){return"نوع ملف "+n+" غير صحيح."},image:function(n){return n+" يجب ان تكون صورة."},included:function(n){return"الحقل "+n+" يجب ان يكون قيمة صحيحة."},integer:function(n){return"الحقل "+n+" يجب ان يكون عدداً صحيحاً"},ip:function(n){return n+" يجب ان يكون ip صحيح."},length:function(n,t){var r=t[0],e=t[1];return e?"طول الحقل "+n+" يجب ان يكون ما بين "+r+" و "+e+".":"طول الحقل "+n+" يجب ان يكون "+r+"."},max:function(n,t){return"الحقل "+n+" يجب ان يحتوي على "+t[0]+" حروف على الأكثر."},max_value:function(n,t){return"قيمة الحقل "+n+" يجب ان تكون اصغر من "+t[0]+" او تساويها."},mimes:function(n){return"نوع ملف "+n+" غير صحيح."},min:function(n,t){return"الحقل "+n+" يجب ان يحتوي على "+t[0]+" حروف على الأقل."},min_value:function(n,t){return"قيمة الحقل "+n+" يجب ان تكون اكبر من "+t[0]+" او تساويها."},numeric:function(n){return n+" يمكن ان يحتوي فقط على ارقام."},regex:function(n){return"الحقل "+n+" غير صحيح."},required:function(n){return n+" مطلوب."},size:function(n,t){return n+" يجب ان يكون اقل من "+function(n){var t,r,e,u={Byte:"بايت",KB:"كيلوبايت",GB:"جيجابايت",PB:"بيتابايت"};return(t=n,r=1024,e=0==(t=Number(t)*r)?0:Math.floor(Math.log(t)/Math.log(r)),1*(t/Math.pow(r,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]).replace(/(Byte|KB|GB|PB)/,function(n){return u[n]})}(t[0])+"."},url:function(n){return"الحقل "+n+" يجب ان يكون رابطاً صحيحاً."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t},n.exports=e()}});