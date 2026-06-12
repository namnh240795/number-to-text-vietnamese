import { getText } from '../lib';

// Helper to get expected text for validation
const base = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
const base_ten = ['mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];

describe('All single digits (0-9)', () => {
  for (let i = 0; i <= 9; i++) {
    test(`${i} returns "${base[i]}"`, () => {
      expect(getText(i)).toBe(base[i]);
    });
  }
});

describe('All teens (10-19)', () => {
  const expected = [
    'mười',
    'mười một',
    'mười hai',
    'mười ba',
    'mười bốn',
    'mười lăm',
    'mười sáu',
    'mười bảy',
    'mười tám',
    'mười chín',
  ];
  for (let i = 0; i <= 9; i++) {
    test(`${10 + i} returns "${expected[i]}"`, () => {
      expect(getText(10 + i)).toBe(expected[i]);
    });
  }
});

describe('All tens (20-90)', () => {
  for (let i = 2; i <= 9; i++) {
    test(`${i * 10} returns "${base_ten[i - 1]}"`, () => {
      expect(getText(i * 10)).toBe(base_ten[i - 1]);
    });
  }
});

describe('All numbers ending in special digits (x1, x4, x5)', () => {
  // Test x1 (một/mốt)
  for (let tens = 1; tens <= 9; tens++) {
    const num = tens * 10 + 1;
    const expected = tens === 1 ? 'mười một' : `${base_ten[tens - 1]} mốt`;
    test(`${num} (ending in 1)`, () => {
      expect(getText(num)).toBe(expected);
    });
  }

  // Test x4 (bốn/tư)
  for (let tens = 1; tens <= 9; tens++) {
    const num = tens * 10 + 4;
    const expected = tens === 1 ? 'mười bốn' : `${base_ten[tens - 1]} tư`;
    test(`${num} (ending in 4)`, () => {
      expect(getText(num)).toBe(expected);
    });
  }

  // Test x5 (lăm)
  for (let tens = 1; tens <= 9; tens++) {
    const num = tens * 10 + 5;
    const expected = tens === 1 ? 'mười lăm' : `${base_ten[tens - 1]} lăm`;
    test(`${num} (ending in 5)`, () => {
      expect(getText(num)).toBe(expected);
    });
  }
});

describe('All hundreds (100-900)', () => {
  for (let i = 1; i <= 9; i++) {
    test(`${i * 100} returns "${base[i]} trăm"`, () => {
      expect(getText(i * 100)).toBe(`${base[i]} trăm`);
    });
  }
});

describe('All hundreds with content (101-999)', () => {
  // Test hundreds with "linh" (only when tens=0, ones>0)
  for (let h = 1; h <= 9; h++) {
    test(`${h * 100 + 1} returns "${base[h]} trăm linh một"`, () => {
      expect(getText(h * 100 + 1)).toBe(`${base[h]} trăm linh một`);
    });
    test(`${h * 100 + 4} returns "${base[h]} trăm linh tư"`, () => {
      expect(getText(h * 100 + 4)).toBe(`${base[h]} trăm linh tư`);
    });
    test(`${h * 100 + 5} returns "${base[h]} trăm linh năm"`, () => {
      expect(getText(h * 100 + 5)).toBe(`${base[h]} trăm linh năm`);
    });
    // Numbers like 110, 210, etc. use "mười" not "linh mười"
    test(`${h * 100 + 10} returns "${base[h]} trăm mười"`, () => {
      expect(getText(h * 100 + 10)).toBe(`${base[h]} trăm mười`);
    });
  }

  // Test hundreds with tens
  for (let h = 1; h <= 9; h++) {
    for (let t = 1; t <= 9; t++) {
      const num = h * 100 + t * 10;
      const expected = `${base[h]} trăm ${base_ten[t - 1]}`;
      test(`${num}`, () => {
        expect(getText(num)).toBe(expected);
      });
    }
  }
});

describe('All thousands (1000-9000)', () => {
  for (let i = 1; i <= 9; i++) {
    test(`${i * 1000} returns "${base[i]} nghìn"`, () => {
      expect(getText(i * 1000)).toBe(`${base[i]} nghìn`);
    });
  }
});

describe('All thousands with hundreds (1100-9900)', () => {
  for (let k = 1; k <= 9; k++) {
    for (let h = 0; h <= 9; h++) {
      const num = k * 1000 + h * 100;
      let expected;
      if (h === 0) {
        expected = `${base[k]} nghìn`;
      } else {
        expected = `${base[k]} nghìn ${base[h]} trăm`;
      }
      test(`${num}`, () => {
        expect(getText(num)).toBe(expected);
      });
    }
  }
});

describe('All millions (1000000-9000000)', () => {
  for (let i = 1; i <= 9; i++) {
    test(`${i}000000 returns "${base[i]} triệu"`, () => {
      expect(getText(i * 1000000)).toBe(`${base[i]} triệu`);
    });
  }
});

describe('All millions with thousands (1100000-9900000)', () => {
  for (let m = 1; m <= 9; m++) {
    for (let k = 0; k <= 9; k++) {
      const num = m * 1000000 + k * 1000;
      let expected;
      if (k === 0) {
        expected = `${base[m]} triệu`;
      } else {
        expected = `${base[m]} triệu ${base[k]} nghìn`;
      }
      test(`${num}`, () => {
        expect(getText(num)).toBe(expected);
      });
    }
  }
});

describe('All billions (1000000000-9000000000)', () => {
  for (let i = 1; i <= 9; i++) {
    test(`${i}000000000 returns "${base[i]} tỷ"`, () => {
      expect(getText(i * 1000000000)).toBe(`${base[i]} tỷ`);
    });
  }
});

describe('All billions with millions (1100000000-9900000000)', () => {
  for (let b = 1; b <= 9; b++) {
    for (let m = 0; m <= 9; m++) {
      const num = b * 1000000000 + m * 1000000;
      let expected;
      if (m === 0) {
        expected = `${base[b]} tỷ`;
      } else {
        expected = `${base[b]} tỷ ${base[m]} triệu`;
      }
      test(`${num}`, () => {
        expect(getText(num)).toBe(expected);
      });
    }
  }
});

describe('Boundary transitions', () => {
  // Single to double
  test('9 -> 10 transition', () => {
    expect(getText(9)).toBe('chín');
    expect(getText(10)).toBe('mười');
  });

  // Double to triple
  test('99 -> 100 transition', () => {
    expect(getText(99)).toBe('chín mươi chín');
    expect(getText(100)).toBe('một trăm');
  });

  // Triple to thousand
  test('999 -> 1000 transition', () => {
    expect(getText(999)).toBe('chín trăm chín mươi chín');
    expect(getText(1000)).toBe('một nghìn');
  });

  // Thousand to million
  test('999999 -> 1000000 transition', () => {
    expect(getText(999999)).toBe('chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
    expect(getText(1000000)).toBe('một triệu');
  });

  // Million to billion
  test('999999999 -> 1000000000 transition', () => {
    expect(getText(999999999)).toBe('chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
    expect(getText(1000000000)).toBe('một tỷ');
  });
});

describe('Random comprehensive numbers', () => {
  const randomNumbers = [
    123, 456, 789, 1234, 5678, 9012,
    12345, 67890, 123456, 789012,
    1234567, 8901234, 12345678, 90123456,
    123456789, 901234567, 1234567890, 9012345678,
    12345678901, 90123456789,
  ];

  for (const num of randomNumbers) {
    test(`${num} produces valid output`, () => {
      const result = getText(num);
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

describe('Negative numbers for all ranges', () => {
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
  test('-9999999999 returns full text', () => {
    expect(getText(-9999999999)).toBe('âm chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín');
  });
});

describe('Separator functionality', () => {
  test('100 with comma separator', () => {
    expect(getText(100, ',')).toBe('một trăm');
  });
  test('1000 with comma separator', () => {
    expect(getText(1000, ',')).toBe('một nghìn');
  });
  test('1000000 with comma separator', () => {
    expect(getText(1000000, ',')).toBe('một triệu');
  });
  test('1000000000 with comma separator', () => {
    expect(getText(1000000000, ',')).toBe('một tỷ');
  });
  test('100100 with pipe separator', () => {
    expect(getText(100100, '|')).toBe('một trăm nghìn| một trăm');
  });
  test('1001000 with pipe separator', () => {
    expect(getText(1001000, '|')).toBe('một triệu| một nghìn');
  });
  test('no separator when empty string', () => {
    expect(getText(100100, '')).toBe('một trăm nghìn một trăm');
  });
  test('no separator when undefined', () => {
    expect(getText(100100)).toBe('một trăm nghìn một trăm');
  });
});

describe('Edge case: numbers with many zeros', () => {
  test('10000 has no trailing space', () => {
    expect(getText(10000)).toBe('mười nghìn');
    expect(getText(10000)).not.toMatch(/\s$/);
  });
  test('100000 has no trailing space', () => {
    expect(getText(100000)).toBe('một trăm nghìn');
    expect(getText(100000)).not.toMatch(/\s$/);
  });
  test('1000000 has no trailing space', () => {
    expect(getText(1000000)).toBe('một triệu');
    expect(getText(1000000)).not.toMatch(/\s$/);
  });
  test('10000000 has no trailing space', () => {
    expect(getText(10000000)).toBe('mười triệu');
    expect(getText(10000000)).not.toMatch(/\s$/);
  });
  test('100000000 has no trailing space', () => {
    expect(getText(100000000)).toBe('một trăm triệu');
    expect(getText(100000000)).not.toMatch(/\s$/);
  });
  test('1000000000 has no trailing space', () => {
    expect(getText(1000000000)).toBe('một tỷ');
    expect(getText(1000000000)).not.toMatch(/\s$/);
  });
  test('10000000000 has no trailing space', () => {
    expect(getText(10000000000)).toBe('mười tỷ');
    expect(getText(10000000000)).not.toMatch(/\s$/);
  });
  test('100000000000 has no trailing space', () => {
    expect(getText(100000000000)).toBe('một trăm tỷ');
    expect(getText(100000000000)).not.toMatch(/\s$/);
  });
});
