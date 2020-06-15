import * as grid from "./grid";

//   00, 10,  20
//   01, 11,  21
//   02, 12,  22
const SQUARES = {
  "0,0": { x: 0, y: 0 },
  "0,1": { x: 0, y: 1 },
  "0,2": { x: 0, y: 2 },
  "1,0": { x: 1, y: 0 },
  "1,1": { x: 1, y: 1 },
  "1,2": { x: 1, y: 2 },
  "2,0": { x: 2, y: 0 },
  "2,1": { x: 2, y: 1 },
  "2,2": { x: 2, y: 2 },
};

describe("grid", () => {
  it("should exist", () => {
    expect(grid).toBeDefined();
  });
});

describe("toCell", () => {
  it("should work with locIds", () => {
    expect(grid.toCell("1,2")).toEqual({ x: 1, y: 2 });
  });

  it("should work with cells", () => {
    expect(grid.toCell({ x: 1, y: 2 })).toEqual({ x: 1, y: 2 });
  });
});

describe("getNeighbors", () => {
  it("should work for CARDINAL", () => {
    expect(grid.getNeighbors({ x: 1, y: 1 }, grid.CARDINAL)).toEqual([
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 1,
      },
      {
        x: 1,
        y: 2,
      },
      {
        x: 0,
        y: 1,
      },
    ]);
  });

  it("should work for DIAGONAL", () => {
    expect(grid.getNeighbors({ x: 1, y: 1 }, grid.DIAGONAL)).toEqual([
      {
        x: 2,
        y: 0,
      },
      {
        x: 2,
        y: 2,
      },
      {
        x: 0,
        y: 2,
      },
      {
        x: 0,
        y: 0,
      },
    ]);
  });
});

describe("getNeighborIds", () => {
  it("should work", () => {
    expect(grid.getNeighborIds("1,1", "ALL")).toEqual([
      "1,0",
      "2,1",
      "1,2",
      "0,1",
      "2,0",
      "2,2",
      "0,2",
      "0,0",
    ]);
  });
});

describe("circle", () => {
  it("should work for whole radii", () => {
    expect(grid.circle({ x: 3, y: 3 }, 2)).toEqual([
      "3,1",
      "2,2",
      "3,2",
      "4,2",
      "1,3",
      "2,3",
      "3,3",
      "4,3",
      "5,3",
      "2,4",
      "3,4",
      "4,4",
      "3,5",
    ]);
  });

  it("should work for half radii", () => {
    expect(grid.circle({ x: 3, y: 3 }, 2.5)).toEqual([
      "2,1",
      "3,1",
      "4,1",
      "1,2",
      "2,2",
      "3,2",
      "4,2",
      "5,2",
      "1,3",
      "2,3",
      "3,3",
      "4,3",
      "5,3",
      "1,4",
      "2,4",
      "3,4",
      "4,4",
      "5,4",
      "2,5",
      "3,5",
      "4,5",
    ]);
  });
});
