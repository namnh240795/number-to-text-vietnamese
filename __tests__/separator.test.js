import { getText } from "../lib";

test("9007199254740991 (MAX_SAFE_INTEGER)", () => {
  expect(getText(9007199254740991, "|")).toBe(
    "chín triệu bảy nghìn một trăm chín mươi chín tỷ| hai trăm năm mươi tư triệu| bảy trăm bốn mươi nghìn| chín trăm chín mươi mốt"
  );
});

test("9007199254740992 throws error", () => {
  expect(() => getText(9007199254740992, "|")).toThrow("Your number is too big");
});

test("10", () => {
  expect(getText(10, "|")).toBe("mười");
});

test("11", () => {
  expect(getText(11, "|")).toBe("mười một");
});

test("95", () => {
  expect(getText(95, "|")).toBe("chín mươi lăm");
});

test("105", () => {
  expect(getText(105, "|")).toBe("một trăm linh năm");
});

test("110", () => {
  expect(getText(110, "|")).toBe("một trăm mười");
});

test("100100", () => {
  expect(getText(100100, "|")).toBe("một trăm nghìn| một trăm");
});

test("1001000", () => {
  expect(getText(1001000, "|")).toBe("một triệu| một nghìn");
});

test("10000001", () => {
  expect(getText(10000001, "|")).toBe("mười triệu| không trăm linh một");
});

test("10010001", () => {
  expect(getText(10010001, "|")).toBe("mười triệu| mười nghìn| không trăm linh một");
});

test("100100001", () => {
  expect(getText(100100001, "|")).toBe("một trăm triệu| một trăm nghìn| không trăm linh một");
});

test("100010001", () => {
  expect(getText(100010001, "|")).toBe("một trăm triệu| mười nghìn| không trăm linh một");
});

// v2.0.0: Additional separator tests
test("1000 with comma separator", () => {
  expect(getText(1000, ",")).toBe("một nghìn");
});

test("1000000 with comma separator", () => {
  expect(getText(1000000, ",")).toBe("một triệu");
});

test("1000000000 with comma separator", () => {
  expect(getText(1000000000, ",")).toBe("một tỷ");
});

test("complex number with comma separator", () => {
  expect(getText(109231123456, ",")).toBe(
    "một trăm linh chín tỷ, hai trăm ba mươi mốt triệu, một trăm hai mươi ba nghìn, bốn trăm năm mươi sáu"
  );
});

test("no trailing separator", () => {
  const result = getText(1000000, ",");
  expect(result).not.toMatch(/,\s*$/);
});
