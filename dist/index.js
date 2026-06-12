Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
//#region lib/utils.js
const toString = Object.prototype.toString;
function getTag(value) {
	if (value == null) return value === void 0 ? "[object Undefined]" : "[object Null]";
	return toString.call(value);
}
function isObjectLike(value) {
	return typeof value === "object" && value !== null;
}
function isNumber(value) {
	return typeof value === "number" || isObjectLike(value) && getTag(value) == "[object Number]";
}
function addSeperator(result = "", seperator = "") {
	if (!seperator || !result) return result;
	const words = result.split(" ");
	const unitHierarchy = {
		"nghìn": 1,
		"triệu": 2,
		"tỷ": 3
	};
	const unitPositions = [];
	for (let i = 0; i < words.length; i++) if (Object.prototype.hasOwnProperty.call(unitHierarchy, words[i])) unitPositions.push({
		index: i,
		unit: words[i],
		level: unitHierarchy[words[i]]
	});
	const groupMarkers = [];
	for (let i = 0; i < unitPositions.length; i++) {
		const unit = unitPositions[i];
		if (unit.unit === "tỷ") groupMarkers.push(unit);
		else if (unit.unit === "triệu") {
			if (!unitPositions.slice(i + 1).some((u) => u.unit === "tỷ")) groupMarkers.push(unit);
		} else if (unit.unit === "nghìn") {
			if (!unitPositions.slice(i + 1).some((u) => u.unit === "triệu" || u.unit === "tỷ")) groupMarkers.push(unit);
		}
	}
	const resultWords = [];
	for (let i = 0; i < words.length; i++) {
		resultWords.push(words[i]);
		if (groupMarkers.find((u) => u.index === i) && i < words.length - 1) resultWords[resultWords.length - 1] = words[i] + seperator;
	}
	return resultWords.join(" ");
}
//#endregion
//#region lib/index.js
const base = [
	"không",
	"một",
	"hai",
	"ba",
	"bốn",
	"năm",
	"sáu",
	"bảy",
	"tám",
	"chín"
];
const base_ten = [
	"mười",
	"hai mươi",
	"ba mươi",
	"bốn mươi",
	"năm mươi",
	"sáu mươi",
	"bảy mươi",
	"tám mươi",
	"chín mươi"
];
const base_hundred = [
	"không trăm",
	"một trăm",
	"hai trăm",
	"ba trăm",
	"bốn trăm",
	"năm trăm",
	"sáu trăm",
	"bảy trăm",
	"tám trăm",
	"chín trăm"
];
const getTen = (number) => {
	const array = `${number}`.split("");
	const first = parseInt(array[0]);
	const second = parseInt(array[1]);
	if (second === 0) return base_ten[first - 1];
	if (second === 5) return `${base_ten[first - 1]} lăm`;
	if (second === 4) {
		if (first === 1) return `${base_ten[first - 1]} bốn`;
		return `${base_ten[first - 1]} tư`;
	}
	if (second === 1) {
		if (first === 1) return `${base_ten[first - 1]} một`;
		return `${base_ten[first - 1]} mốt`;
	}
	return `${base_ten[first - 1]} ${base[second]}`;
};
const getHundred = (number) => {
	const array = `${number}`.split("");
	const first = parseInt(array[0]);
	const second = parseInt(array[1]);
	const third = parseInt(array[2]);
	if (second > 0) return `${base_hundred[first]} ${getTen(`${second}${third}`)}`;
	if (third === 0) return `${base_hundred[first]}`;
	if (third === 4) return `${base_hundred[first]} linh tư`;
	return `${base_hundred[first]} linh ${base[third]}`;
};
const getThousand = (number) => {
	const reverse_array = `${number}`.split("").reverse();
	const after_number = reverse_array.slice(0, 3).reverse().join("");
	const before_number = parseInt(reverse_array.slice(3, reverse_array.length).reverse().join(""));
	const beforeLength = `${before_number}`.length;
	let afterText = "";
	if (parseInt(after_number) >= 1) afterText = getHundred(after_number);
	if (beforeLength === 1) return `${base[before_number]} nghìn${afterText ? " " + afterText : ""}`;
	if (beforeLength === 2) return `${getTen(before_number)} nghìn${afterText ? " " + afterText : ""}`;
	return `${getHundred(before_number)} nghìn${afterText ? " " + afterText : ""}`;
};
const getMillion = (number) => {
	const reverse_array = `${number}`.split("").reverse();
	const after_number = reverse_array.slice(0, 6).reverse().join("");
	const before_number = parseInt(reverse_array.slice(6, reverse_array.length).reverse().join(""));
	const beforeLength = `${before_number}`.length;
	let afterText = "";
	if (parseInt(after_number) > 999) afterText = getThousand(after_number);
	else if (parseInt(after_number) <= 999 && parseInt(after_number) >= 1) afterText = getHundred(`${after_number}`.split("").slice(3, 6).join(""));
	if (beforeLength === 1) return `${base[before_number]} triệu${afterText ? " " + afterText : ""}`;
	if (beforeLength === 2) return `${getTen(before_number)} triệu${afterText ? " " + afterText : ""}`;
	return `${getHundred(before_number)} triệu${afterText ? " " + afterText : ""}`;
};
const getBillion = (number) => {
	const reverse_array = `${number}`.split("").reverse();
	const after_number = reverse_array.slice(0, 9).reverse().join("");
	const before_number = parseInt(reverse_array.slice(9, reverse_array.length).reverse().join(""));
	let afterText = "";
	if (parseInt(after_number) > 999999 && parseInt(after_number) <= 999999999) afterText = getMillion(after_number);
	else if (parseInt(after_number) <= 999999 && parseInt(after_number) > 999) afterText = getThousand(`${after_number}`.split("").slice(3, 9).join(""));
	else if (parseInt(after_number) <= 999 && parseInt(after_number) >= 1) afterText = getHundred(`${after_number}`.split("").slice(6, 9).join(""));
	const beforeLength = `${before_number}`.length;
	if (beforeLength === 1) return `${base[before_number]} tỷ${afterText ? " " + afterText : ""}`;
	if (beforeLength === 2) return `${getTen(before_number)} tỷ${afterText ? " " + afterText : ""}`;
	if (beforeLength === 3) return `${getHundred(before_number)} tỷ${afterText ? " " + afterText : ""}`;
	if (beforeLength > 3 && beforeLength <= 6) return `${getThousand(before_number)} tỷ${afterText ? " " + afterText : ""}`;
	if (beforeLength > 6 && beforeLength <= 9) return `${getMillion(before_number)} tỷ${afterText ? " " + afterText : ""}`;
};
const getText = (number, seperator = "") => {
	if (!isNumber(number)) throw new Error("Input is not a number");
	if (Number.isNaN(number)) throw new Error("Input is not a number");
	if (!isFinite(number)) throw new Error("Your number is too big");
	if (!Number.isInteger(number)) throw new Error("Input must be an integer");
	if (Math.abs(number) >= 9007199254740992) throw new Error("Your number is too big");
	if (number < 0) return `âm ${getText(Math.abs(number))}`;
	const length = `${number}`.length;
	let result;
	if (length === 1) result = base[number];
	if (length === 2) result = getTen(number);
	if (length === 3) result = getHundred(number);
	if (length > 3 && length <= 6) result = getThousand(number);
	if (length > 6 && length <= 9) result = getMillion(number);
	if (length > 9) result = getBillion(number);
	if (seperator) return addSeperator(result, seperator);
	return result;
};
const numberToText = { getText };
//#endregion
exports.default = numberToText;
exports.getText = getText;

//# sourceMappingURL=index.js.map