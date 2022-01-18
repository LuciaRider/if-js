const corSum = require('./main');

test('adds 1 + 2 to equal 3', () => {
  expect(corSum(1, 2)).toBe(3);
});

test('adds -1 + (-1) to equal -2', () => {
  expect(corSum(-1, -1)).toBe(-2);
});

test('adds true + 3 to equal 4', () => {
  expect(corSum(true, 3)).toBe(4);
});

test('adds "kkk" + 3 to equal "kkk3"', () => {
  expect(corSum("kkk", 3)).toBe("kkk3");
});

test('adds "kkk" + "kkk" to equal "kkkkkk"', () => {
  expect(corSum("kkk", "kkk")).toBe("kkkkkk");
});
