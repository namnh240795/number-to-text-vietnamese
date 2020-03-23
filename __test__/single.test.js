import { getText } from '../lib';

const base = ["không","một","hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

for (let i =0; i< 10; i++) {
  test(`${i}`, () => {
    expect(getText(i)).toBe(base[i]);
  });
}
