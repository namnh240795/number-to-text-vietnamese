"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=(e=require("lodash/isNumber"))&&"object"==typeof e&&"default"in e?e.default:e;const r=["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"],n=["mười","hai mươi","ba mươi","bốn mươi","năm mươi","sáu mươi","bảy mươi","tám mươi","chín mươi"],s=["không trăm","một trăm","hai trăm","ba trăm","bốn trăm","năm trăm","sáu trăm","bảy trăm","tám trăm","chín trăm"],i=e=>{const t=`${e}`.split(""),s=parseInt(t[0]),i=parseInt(t[1]);return 0===i?n[s-1]:5===i?`${n[s-1]} lăm`:4===i?`${n[s-1]} tư`:1===i?1===s?`${n[s-1]} một`:`${n[s-1]} mốt`:`${n[s-1]} ${r[i]}`},$=e=>{const t=`${e}`.split(""),n=parseInt(t[0]),$=parseInt(t[1]),o=parseInt(t[2]);return $>0?`${s[n]} ${i(`${$}${o}`)}`:0===o?`${s[n]}`:4===o?`${s[n]} linh tư`:`${s[n]} linh ${r[o]}`},o=e=>{const t=`${e}`.split("").reverse(),n=t.slice(0,3).reverse().join(""),s=parseInt(t.slice(3,t.length).reverse().join("")),o=`${s}`.length;let m="";return parseInt(n)>1&&(m=$(n)),console.log("before_number",s),1===o?`${r[s]} nghìn ${m}`:2===o?`${i(s)} nghìn ${m}`:`${$(s)} nghìn ${m}`},m=e=>{const t=`${e}`.split("").reverse(),n=t.slice(0,6).reverse().join(""),s=parseInt(t.slice(6,t.length).reverse().join("")),m=`${s}`.length;let a="";return parseInt(n)>999?a=o(n):parseInt(n)<=999&&parseInt(n)>=1&&(a=$(a)),1===m?`${r[s]} triệu ${a}`:2===m?`${i(s)} triệu ${a}`:`${$(s)} triệu ${a}`},a=e=>{const t=`${e}`.split("").reverse(),n=t.slice(0,9).reverse().join(""),s=parseInt(t.slice(9,t.length).reverse().join(""));let l="";parseInt(n)>999999&&parseInt(n)<999999999?l=m(n):parseInt(n)>=999999&&parseInt(n)>999?l=o(n):parseInt(n)<=999&&parseInt(n)>=1&&(l=$(l));const u=`${s}`.length;return 1===u?`${r[s]} tỷ ${l}`:2===u?`${i(s)} tỷ ${l}`:3===u?`${$(s)} tỷ ${l}`:u>3&&u<=6?`${o(s)} tỷ ${l}`:u>6&&u<=9?`${m(s)} tỷ ${l}`:u>9?`${a(s)} tỷ ${l}`:void 0},l=e=>{try{if(e>9007199254740992)throw new Error("Your number is too big");if(!t(e))throw new Error("Input is not a number");const n=`${e}`.length;if(1===n)return r[e];if(2===n)return i(e);if(3===n)return $(e);if(n>3&&n<=6)return o(e);if(n>6&&n<=9)return m(e);if(n>9)return a(e)}catch(e){}};var u={getText:l};exports.default=u,exports.getText=l;
