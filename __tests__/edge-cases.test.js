import { getText } from '../lib';

describe('Single digit boundary cases', () => {
  test('0 returns "không"', () => {
    expect(getText(0)).toBe('không');
  });
  test('1 returns "một"', () => {
    expect(getText(1)).toBe('một');
  });
  test('9 returns "chín"', () => {
    expect(getText(9)).toBe('chín');
  });
});

describe('Teen and tens boundary cases', () => {
  test('10 returns "mười"', () => {
    expect(getText(10)).toBe('mười');
  });
  test('11 returns "mười một"', () => {
    expect(getText(11)).toBe('mười một');
  });
  test('14 returns "mười bốn"', () => {
    expect(getText(14)).toBe('mười bốn');
  });
  test('15 returns "mười lăm"', () => {
    expect(getText(15)).toBe('mười lăm');
  });
  test('19 returns "mười chín"', () => {
    expect(getText(19)).toBe('mười chín');
  });
  test('20 returns "hai mươi"', () => {
    expect(getText(20)).toBe('hai mươi');
  });
  test('21 returns "hai mươi mốt"', () => {
    expect(getText(21)).toBe('hai mươi mốt');
  });
  test('24 returns "hai mươi tư"', () => {
    expect(getText(24)).toBe('hai mươi tư');
  });
  test('25 returns "hai mươi lăm"', () => {
    expect(getText(25)).toBe('hai mươi lăm');
  });
  test('99 returns "chín mươi chín"', () => {
    expect(getText(99)).toBe('chín mươi chín');
  });
});

describe('Special Vietnamese number rules', () => {
  // Numbers ending in 4 use "tư" (not "bốn") in tens place
  test('24 uses "tư"', () => {
    expect(getText(24)).toBe('hai mươi tư');
  });
  test('34 uses "tư"', () => {
    expect(getText(34)).toBe('ba mươi tư');
  });
  test('44 uses "tư"', () => {
    expect(getText(44)).toBe('bốn mươi tư');
  });
  test('54 uses "tư"', () => {
    expect(getText(54)).toBe('năm mươi tư');
  });

  // Numbers ending in 5 use "lăm" (not "năm") in tens place
  test('15 uses "lăm"', () => {
    expect(getText(15)).toBe('mười lăm');
  });
  test('25 uses "lăm"', () => {
    expect(getText(25)).toBe('hai mươi lăm');
  });
  test('35 uses "lăm"', () => {
    expect(getText(35)).toBe('ba mươi lăm');
  });

  // Numbers ending in 1 use "một" (not "mốt") after "mười"
  test('11 uses "một"', () => {
    expect(getText(11)).toBe('mười một');
  });
  // Numbers ending in 1 use "mốt" in other tens
  test('21 uses "mốt"', () => {
    expect(getText(21)).toBe('hai mươi mốt');
  });
  test('31 uses "mốt"', () => {
    expect(getText(31)).toBe('ba mươi mốt');
  });

  // 14 uses "bốn" (special case for teenager)
  test('14 uses "bốn" not "tư"', () => {
    expect(getText(14)).toBe('mười bốn');
  });
});

describe('Hundred boundary cases', () => {
  test('100 returns "một trăm"', () => {
    expect(getText(100)).toBe('một trăm');
  });
  test('101 returns "một trăm linh một"', () => {
    expect(getText(101)).toBe('một trăm linh một');
  });
  test('104 returns "một trăm linh tư"', () => {
    expect(getText(104)).toBe('một trăm linh tư');
  });
  test('105 returns "một trăm linh năm"', () => {
    expect(getText(105)).toBe('một trăm linh năm');
  });
  test('110 returns "một trăm mười"', () => {
    expect(getText(110)).toBe('một trăm mười');
  });
  test('111 returns "một trăm mười một"', () => {
    expect(getText(111)).toBe('một trăm mười một');
  });
  test('114 returns "một trăm mười bốn"', () => {
    expect(getText(114)).toBe('một trăm mười bốn');
  });
  test('115 returns "một trăm mười lăm"', () => {
    expect(getText(115)).toBe('một trăm mười lăm');
  });
  test('120 returns "một trăm hai mươi"', () => {
    expect(getText(120)).toBe('một trăm hai mươi');
  });
  test('999 returns "chín trăm chín mươi chín"', () => {
    expect(getText(999)).toBe('chín trăm chín mươi chín');
  });
});

describe('Thousand boundary cases', () => {
  test('1000 returns "một nghìn"', () => {
    expect(getText(1000)).toBe('một nghìn');
  });
  test('1001 returns "một nghìn không trăm linh một"', () => {
    expect(getText(1001)).toBe('một nghìn không trăm linh một');
  });
  test('1010 returns "một nghìn không trăm mười"', () => {
    expect(getText(1010)).toBe('một nghìn không trăm mười');
  });
  test('1100 returns "một nghìn một trăm"', () => {
    expect(getText(1100)).toBe('một nghìn một trăm');
  });
  test('1111 returns "một nghìn một trăm mười một"', () => {
    expect(getText(1111)).toBe('một nghìn một trăm mười một');
  });
  test('10000 returns "mười nghìn"', () => {
    expect(getText(10000)).toBe('mười nghìn');
  });
  test('100000 returns "một trăm nghìn"', () => {
    expect(getText(100000)).toBe('một trăm nghìn');
  });
  test('999999 returns "chín trăm chín mươi chín nghìn chín trăm chín mươi chín"', () => {
    expect(getText(999999)).toBe('chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
  });
});

describe('Million boundary cases', () => {
  test('1000000 returns "một triệu"', () => {
    expect(getText(1000000)).toBe('một triệu');
  });
  test('1000001 returns "một triệu không trăm linh một"', () => {
    expect(getText(1000001)).toBe('một triệu không trăm linh một');
  });
  test('1001000 returns "một triệu một nghìn"', () => {
    expect(getText(1001000)).toBe('một triệu một nghìn');
  });
  test('1100000 returns "một triệu một trăm nghìn"', () => {
    expect(getText(1100000)).toBe('một triệu một trăm nghìn');
  });
  test('10000000 returns "mười triệu"', () => {
    expect(getText(10000000)).toBe('mười triệu');
  });
  test('100000000 returns "một trăm triệu"', () => {
    expect(getText(100000000)).toBe('một trăm triệu');
  });
  test('999999999 returns "chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"', () => {
    expect(getText(999999999)).toBe('chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
  });
});

describe('Billion boundary cases', () => {
  test('1000000000 returns "một tỷ"', () => {
    expect(getText(1000000000)).toBe('một tỷ');
  });
  test('1000000001 returns "một tỷ không trăm linh một"', () => {
    expect(getText(1000000001)).toBe('một tỷ không trăm linh một');
  });
  test('1000001000 returns "một tỷ một nghìn"', () => {
    expect(getText(1000001000)).toBe('một tỷ một nghìn');
  });
  test('1001000000 returns "một tỷ một triệu"', () => {
    expect(getText(1001000000)).toBe('một tỷ một triệu');
  });
  test('1100000000 returns "một tỷ một trăm triệu"', () => {
    expect(getText(1100000000)).toBe('một tỷ một trăm triệu');
  });
  test('10000000000 returns "mười tỷ"', () => {
    expect(getText(10000000000)).toBe('mười tỷ');
  });
  test('100000000000 returns "một trăm tỷ"', () => {
    expect(getText(100000000000)).toBe('một trăm tỷ');
  });
  test('999999999999 returns full text', () => {
    expect(getText(999999999999)).toBe('chín trăm chín mươi chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
  });
});

describe('MAX_SAFE_INTEGER boundary', () => {
  test('9007199254740991 (MAX_SAFE_INTEGER) works', () => {
    const result = getText(9007199254740991);
    expect(result).toContain('tỷ');
    expect(result).toContain('triệu');
    expect(result).toContain('nghìn');
    expect(result).not.toMatch(/\s$/);
  });
  test('-9007199254740991 (negative MAX_SAFE_INTEGER) works', () => {
    const result = getText(-9007199254740991);
    expect(result).toMatch(/^âm /);
    expect(result).toContain('tỷ');
    expect(result).toContain('triệu');
    expect(result).toContain('nghìn');
  });
});

describe('Negative numbers', () => {
  test('-0 returns "không"', () => {
    expect(getText(-0)).toBe('không');
  });
  test('-1 returns "âm một"', () => {
    expect(getText(-1)).toBe('âm một');
  });
  test('-14 returns "âm mười bốn"', () => {
    expect(getText(-14)).toBe('âm mười bốn');
  });
  test('-100 returns "âm một trăm"', () => {
    expect(getText(-100)).toBe('âm một trăm');
  });
  test('-1000 returns "âm một nghìn"', () => {
    expect(getText(-1000)).toBe('âm một nghìn');
  });
  test('-1000000 returns "âm một triệu"', () => {
    expect(getText(-1000000)).toBe('âm một triệu');
  });
  test('-1000000000 returns "âm một tỷ"', () => {
    expect(getText(-1000000000)).toBe('âm một tỷ');
  });
});

describe('Error handling - should throw', () => {
  test('NaN throws error', () => {
    expect(() => getText(NaN)).toThrow('Input is not a number');
  });
  test('Infinity throws error', () => {
    expect(() => getText(Infinity)).toThrow('Your number is too big');
  });
  test('-Infinity throws error', () => {
    expect(() => getText(-Infinity)).toThrow('Your number is too big');
  });
  test('float throws error', () => {
    expect(() => getText(1.5)).toThrow('Input must be an integer');
  });
  test('string throws error', () => {
    expect(() => getText('123')).toThrow('Input is not a number');
  });
  test('null throws error', () => {
    expect(() => getText(null)).toThrow('Input is not a number');
  });
  test('undefined throws error', () => {
    expect(() => getText(undefined)).toThrow();
  });
  test('object throws error', () => {
    expect(() => getText({})).toThrow('Input is not a number');
  });
  test('boolean throws error', () => {
    expect(() => getText(true)).toThrow('Input is not a number');
  });
  test('too big throws error', () => {
    expect(() => getText(9007199254740992)).toThrow('Your number is too big');
  });
  test('negative too big throws error', () => {
    expect(() => getText(-9007199254740992)).toThrow('Your number is too big');
  });
});

describe('No trailing whitespace', () => {
  const numbers = [0, 1, 10, 100, 1000, 10000, 100000, 1000000, 1000000000];
  for (const num of numbers) {
    test(`getText(${num}) has no trailing space`, () => {
      const result = getText(num);
      expect(result).not.toMatch(/\s$/);
    });
  }
});

describe('No double spaces', () => {
  const numbers = [0, 1, 14, 24, 100, 101, 104, 114, 1000, 1001, 1111, 1000000, 1000000000];
  for (const num of numbers) {
    test(`getText(${num}) has no double spaces`, () => {
      const result = getText(num);
      expect(result).not.toMatch(/  /);
    });
  }
});
