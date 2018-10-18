import GridGenerator from "../../src/GridGenerator";

test("getGenerator should work when the request exists", () => {
  expect(GridGenerator.getGenerator("rectangle")).toBe(GridGenerator.rectangle);
});

test("getGenerator should work when the request does not exist", () => {
  expect(GridGenerator.getGenerator("bogus")).toBeNull();
});

test("parallelogram should work", () => {
  expect(GridGenerator.parallelogram(0, 1, 0, 1)).toEqual([
    { meta: {}, q: 0, r: 0, s: -0 },
    { meta: {}, q: 0, r: 1, s: -1 },
    { meta: {}, q: 1, r: 0, s: -1 },
    { meta: {}, q: 1, r: 1, s: -2 }
  ]);
});

test("triangle should work", () => {
  expect(GridGenerator.triangle(1)).toEqual([
    { meta: {}, q: 0, r: 0, s: -0 },
    { meta: {}, q: 0, r: 1, s: -1 },
    { meta: {}, q: 1, r: 0, s: -1 }
  ]);
});

test("hexagon should work", () => {
  expect(GridGenerator.hexagon(1)).toEqual([
    { meta: {}, q: -1, r: 0, s: 1 },
    { meta: {}, q: -1, r: 1, s: 0 },
    { meta: {}, q: 0, r: -1, s: 1 },
    { meta: {}, q: 0, r: 0, s: -0 },
    { meta: {}, q: 0, r: 1, s: -1 },
    { meta: {}, q: 1, r: -1, s: 0 },
    { meta: {}, q: 1, r: 0, s: -1 }
  ]);
});

test("rectangle should work", () => {
  expect(GridGenerator.rectangle(3, 3)).toEqual([
    { meta: {}, q: -0, r: 0, s: 0 },
    { meta: {}, q: 1, r: 0, s: -1 },
    { meta: {}, q: 2, r: 0, s: -2 },
    { meta: {}, q: -0, r: 1, s: -1 },
    { meta: {}, q: 1, r: 1, s: -2 },
    { meta: {}, q: 2, r: 1, s: -3 },
    { meta: {}, q: -1, r: 2, s: -1 },
    { meta: {}, q: 0, r: 2, s: -2 },
    { meta: {}, q: 1, r: 2, s: -3 }
  ]);
});

test("orientedRectangle should work", () => {
  expect(GridGenerator.orientedRectangle(3, 3)).toEqual([
    { meta: {}, q: 0, r: -0, s: 0 },
    { meta: {}, q: 0, r: 1, s: -1 },
    { meta: {}, q: 0, r: 2, s: -2 },
    { meta: {}, q: 1, r: -0, s: -1 },
    { meta: {}, q: 1, r: 1, s: -2 },
    { meta: {}, q: 1, r: 2, s: -3 },
    { meta: {}, q: 2, r: -1, s: -1 },
    { meta: {}, q: 2, r: 0, s: -2 },
    { meta: {}, q: 2, r: 1, s: -3 }
  ]);
});
