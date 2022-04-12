import { getText } from "./lib";


let array = getText(101111505865030).split(' ').reverse();
const tram = array.findIndex(e => e === 'trăm');
const nghin = array.findIndex(e => e === 'nghìn');
const trieu = array.findIndex(e => e === 'triệu');
const ty = array.findIndex(e => e === 'tỷ');
if (ty !== - 1) {
    array.splice(ty, 0, ',')
}
if (trieu !== - 1) {
    array.splice(trieu, 0, ',')
}
if (nghin !== - 1) {
    array.splice(nghin, 0, ',')
}
if (tram !== - 1) {
    array.splice(tram, 0, ',')
}


array = array.reverse();

console.log(array);
console.log(array.join(' '));