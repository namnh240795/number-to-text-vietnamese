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

test('9007199254740991 (MAX_SAFE_INTEGER)', () => {
  expect(getText(9007199254740991)).toBe('chín triệu bảy nghìn một trăm chín mươi chín tỷ hai trăm năm mươi tư triệu bảy trăm bốn mươi nghìn chín trăm chín mươi mốt')
})

test('10010001', () => {
  expect(getText(10010001)).toBe('mười triệu mười nghìn không trăm linh một')
})

// v2.0.0: NaN handling tests
describe('NaN handling', () => {
  test('getText(NaN) throws error', () => {
    expect(() => getText(NaN)).toThrow('Input is not a number');
  });
});

// v2.0.0: Float handling tests
describe('Float handling', () => {
  test('getText(1.5) throws error', () => {
    expect(() => getText(1.5)).toThrow('Input must be an integer');
  });

  test('getText(0.5) throws error', () => {
    expect(() => getText(0.5)).toThrow('Input must be an integer');
  });

  test('getText(-3.14) throws error', () => {
    expect(() => getText(-3.14)).toThrow('Input must be an integer');
  });
});

// v2.0.0: Infinity handling tests
describe('Infinity handling', () => {
  test('getText(Infinity) throws error', () => {
    expect(() => getText(Infinity)).toThrow('Your number is too big');
  });

  test('getText(-Infinity) throws error', () => {
    expect(() => getText(-Infinity)).toThrow('Your number is too big');
  });
});

// v2.0.0: Invalid input tests
describe('Invalid input', () => {
  test('getText(undefined) throws error', () => {
    expect(() => getText(undefined)).toThrow();
  });

  test('getText(null) throws error', () => {
    expect(() => getText(null)).toThrow('Input is not a number');
  });

  test('getText("123") throws error', () => {
    expect(() => getText("123")).toThrow('Input is not a number');
  });
});

// v2.0.0: Trailing space tests
describe('Trailing spaces', () => {
  test('getText(1000) has no trailing space', () => {
    const result = getText(1000);
    expect(result).toBe('một nghìn');
    expect(result).not.toMatch(/\s$/);
  });

  test('getText(100000) has no trailing space', () => {
    const result = getText(100000);
    expect(result).toBe('một trăm nghìn');
    expect(result).not.toMatch(/\s$/);
  });

  test('getText(1000000000) has no trailing space', () => {
    const result = getText(1000000000);
    expect(result).toBe('một tỷ');
    expect(result).not.toMatch(/\s$/);
  });

  test('getText(1000000) has no trailing space', () => {
    const result = getText(1000000);
    expect(result).toBe('một triệu');
    expect(result).not.toMatch(/\s$/);
  });
});

// v2.0.0: Edge case tests
describe('Edge cases', () => {
  test('getText(0) returns "không"', () => {
    expect(getText(0)).toBe('không');
  });

  test('getText(1) returns "một"', () => {
    expect(getText(1)).toBe('một');
  });

  test('getText(10) returns "mười"', () => {
    expect(getText(10)).toBe('mười');
  });

  test('getText(100) returns "một trăm"', () => {
    expect(getText(100)).toBe('một trăm');
  });

  test('getText(MAX_SAFE_INTEGER) works correctly', () => {
    const result = getText(9007199254740991);
    expect(result).toContain('tỷ');
    expect(result).toContain('triệu');
    expect(result).toContain('nghìn');
  });
});
