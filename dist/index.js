"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e=(t=require("lodash/isNumber"))&&"object"==typeof t&&"default"in t?t.default:t;const r=["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"],n=["mười","hai mươi","ba mươi","bốn mươi","năm mươi","sáu mươi","bảy mươi","tám mươi","chín mươi"],s=["không trăm","một trăm","hai trăm","ba trăm","bốn trăm","năm trăm","sáu trăm","bảy trăm","tám trăm","chín trăm"],i=t=>{const e=`${t}`.split(""),s=parseInt(e[0]),i=parseInt(e[1]);return 0===i?n[s-1]:5===i?`${n[s-1]} lăm`:4===i?`${n[s-1]} tư`:1===i?1===s?`${n[s-1]} một`:`${n[s-1]} mốt`:`${n[s-1]} ${r[i]}`},$=t=>{const e=`${t}`.split(""),n=parseInt(e[0]),$=parseInt(e[1]),o=parseInt(e[2]);return $>0?`${s[n]} ${i(`${$}${o}`)}`:0===o?`${s[n]}`:4===o?`${s[n]} linh tư`:`${s[n]} linh ${r[o]}`},o=t=>{const e=`${t}`.split("").reverse(),n=e.slice(0,3).reverse().join(""),s=parseInt(e.slice(3,e.length).reverse().join("")),o=`${s}`.length;let l="";return parseInt(n)>1&&(l=$(n)),1===o?`${r[s]} nghìn ${l}`:2===o?`${i(s)} nghìn ${l}`:`${$(s)} nghìn ${l}`},l=t=>{const e=`${t}`.split("").reverse(),n=e.slice(0,6).reverse().join(""),s=parseInt(e.slice(6,e.length).reverse().join("")),l=`${s}`.length;let a="";return parseInt(n)>999?a=o(n):parseInt(n)<=999&&parseInt(n)>=1&&(a=$(`${n}`.split("").slice(3,6).join(""))),1===l?`${r[s]} triệu ${a}`:2===l?`${i(s)} triệu ${a}`:`${$(s)} triệu ${a}`},a=t=>{const e=`${t}`.split("").reverse(),n=e.slice(0,9).reverse().join(""),s=parseInt(e.slice(9,e.length).reverse().join(""));let m="";parseInt(n)>999999&&parseInt(n)<=999999999?m=l(n):parseInt(n)<=999999&&parseInt(n)>999?m=o(`${n}`.split("").slice(3,9).join("")):parseInt(n)<=999&&parseInt(n)>=1&&(m=$(`${n}`.split("").slice(6,9).join("")));const p=`${s}`.length;return 1===p?`${r[s]} tỷ ${m}`:2===p?`${i(s)} tỷ ${m}`:3===p?`${$(s)} tỷ ${m}`:p>3&&p<=6?`${o(s)} tỷ ${m}`:p>6&&p<=9?`${l(s)} tỷ ${m}`:p>9?`${a(s)} tỷ ${m}`:void 0},m=t=>{try{if(t>9007199254740992)throw new Error("Your number is too big");if(!e(t))throw new Error("Input is not a number");const n=`${t}`.length;if(1===n)return r[t];if(2===n)return i(t);if(3===n)return $(t);if(n>3&&n<=6)return o(t);if(n>6&&n<=9)return l(t);if(n>9)return a(t)}catch(t){console.error("error",t)}};var p={getText:m};exports.default=p,exports.getText=m;
