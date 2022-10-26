const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner");
const addFive = require(`../javaScriptPractice/addFive`);

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
}
);