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

export function addSeperator(result = "", separator = "") {
  let array = result.split(" ").reverse();
  const tram = array.findIndex((e) => e === "trăm");
  const nghin = array.findIndex((e) => e === "nghìn");
  const trieu = array.findIndex((e) => e === "triệu");
  const ty = array.findIndex((e) => e === "tỷ");
  
  if (ty !== -1 && !!separator) {
    array.splice(ty, 0, separator);
  }
  if (trieu !== -1 && !!separator) {
    array.splice(trieu, 0, separator);
  }
  if (nghin !== -1 && !!separator && tram !== -1) {
    array.splice(nghin, 0, separator);
  }

  array = array.reverse();
  return array.join(" ");
}
