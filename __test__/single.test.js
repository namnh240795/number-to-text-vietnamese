import { getText } from '../lib';

const base = ["không","một","hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

for (let i =0; i< 10; i++) {
  test(`${i}`, () => {
    expect(getText(i)).toBe(base[i]);
  });
}

test(`năm mươi tư`, () => {
  expect(getText(54)).toBe('năm mươi tư');
})

test('một trăm linh tư nghìn năm trăm', () => {
  expect(getText(104500)).toBe('một trăm linh tư nghìn năm trăm');
})

test('5000909', () => {
  expect(getText(5000909)).toBe('năm triệu chín trăm linh chín');
})

test('5000000909', () => {
  expect(getText(5000000909)).toBe('năm tỷ chín trăm linh chín');
})

test('5000100909', () => {
  expect(getText(5000100909)).toBe('năm tỷ một trăm nghìn chín trăm linh chín');
})
test('9999999999', () => {
  expect(getText(9999999999)).toBe('chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
})

for (let i = 1; i< 10; i++) {
  test(`-${i}`, () => {
    expect(getText(-i)).toBe(`âm ${base[i]}`);
  });
}

test(`âm năm mươi tư`, () => {
  expect(getText(-54)).toBe('âm năm mươi tư');
})

test('âm một trăm linh tư nghìn năm trăm', () => {
  expect(getText(-104500)).toBe('âm một trăm linh tư nghìn năm trăm');
})

test('âm 5000909', () => {
  expect(getText(-5000909)).toBe('âm năm triệu chín trăm linh chín');
})

test('âm 5000000909', () => {
  expect(getText(-5000000909)).toBe('âm năm tỷ chín trăm linh chín');
})

test('âm 5000100909', () => {
  expect(getText(-5000100909)).toBe('âm năm tỷ một trăm nghìn chín trăm linh chín');
})

test('âm 9999999999', () => {
  expect(getText(-9999999999)).toBe('âm chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
})

test('- 0', () => {
  expect(getText(-0)).toBe('không');
})

