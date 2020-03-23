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
