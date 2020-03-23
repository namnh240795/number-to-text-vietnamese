import isNumber from 'lodash/isNumber';

const base = ["không","một","hai", "ba", "bốn", "năm", "sáu", "bảy", "tám, chín"]
const base_ten = ["mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
const base_hundred = ["một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];

const getTen = (number) => {
  const array = `${number}`.split('');
  const first = parseInt(array[0]);
  const second = parseInt(array[1]);
  if (second === 0) {
    return base_ten[first - 1];
  }
  if (second === 5) {
    return `${base_ten[first - 1]} lăm`;
  }
  if (second === 1) {
    if (first === 1) {
      return `${base_ten[first - 1]} một`;
    }
    return `${base_ten[first - 1]} mốt`
  }
  return `${base_ten[first-1]} ${base[second]}`
};

const getHundred = (number) => {
  const array = `${number}`.split('');
  const first = parseInt(array[0]);
  const second = parseInt(array[1]);
  const third = parseInt(array[2]);
  if (second > 0) {
    return `${base_hundred[first - 1]} ${getTen(`${second}${third}`)}`
  }
  return 0;
};

export const getText = (number) => {
  try {
    if (!isNumber(number)) {
      throw "Input is not a number";
    }
    const length = `${number}`.length;
    if (length === 1) {
      return base[number];
    }
    if (length === 2) {
      return getTen(number);
    }
    if (length === 3) {
      return getHundred(number);
    }
  } catch (error) {
    console.log('error', error);
  }
}

