const toString = Object.prototype.toString;

function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

export function isNumber(value) {
  return (
    typeof value === "number" ||
    (isObjectLike(value) && getTag(value) == "[object Number]")
  );
}

export function addSeperator(result = "", seperator = "") {
  let array = result.split(" ").reverse();
  const tram = array.findIndex((e) => e === "trăm");
  const nghin = array.findIndex((e) => e === "nghìn");
  const trieu = array.findIndex((e) => e === "triệu");
  const ty = array.findIndex((e) => e === "tỷ");
  
  if (ty !== -1 && !!seperator) {
    array.splice(ty, 1, `${array[ty]}${seperator}`);
  }
  if (trieu !== -1 && !!seperator) {
    array.splice(trieu, 1, `${array[trieu]}${seperator}`);
  }
  if (nghin !== -1 && !!seperator && tram !== -1) {
    array.splice(nghin, 1, `${array[nghin]}${seperator}`);
  }
  return array.reverse().join(" ");
}
