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

test(`mười bốn`, () => {
  expect(getText(14)).toBe('mười bốn');
})

test(`một trăm mười bốn`, () => {
  expect(getText(114)).toBe('một trăm mười bốn');
})

test(`một nghìn không trăm mười bốn`, () => {
  expect(getText(1014)).toBe('một nghìn không trăm mười bốn');
})

test(`một nghìn một trăm mười bốn`, () => {
  expect(getText(1114)).toBe('một nghìn một trăm mười bốn');
})

test(`một trăm linh một nghìn một trăm mười bốn`, () => {
  expect(getText(101114)).toBe('một trăm linh một nghìn một trăm mười bốn');
})

test(`mười bốn triệu không trăm mười bốn`, () => {
  expect(getText(14000014)).toBe('mười bốn triệu không trăm mười bốn');
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

test('9007199254740992', () => {
  expect(getText(9007199254740992)).toBe('chín triệu bảy nghìn một trăm chín mươi chín tỷ hai trăm năm mươi tư triệu bảy trăm bốn mươi nghìn chín trăm chín mươi hai')
})

test('10010001', () => {
  expect(getText(10010001)).toBe('mười triệu mười nghìn không trăm linh một')
})