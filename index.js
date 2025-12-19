class Vertex {
  constructor([x, y]) {
    this.coord = [x, y];
    this.x = x;
    this.y = y;
    this.parent = null;
  }
}
function knightMoves([startX, startY], [endX, endY]) {
  if (startX === endX && startY === endY) throw new Error("pls move!!!");
  let queue = [new Vertex([startX, startY])];
  let visited = [];
  while (queue[0].x !== endX || queue[0].y !== endY) {
    let vertex = queue.shift();
    visited.push(vertex);
    let nextMoves = move(vertex.coord);
    // could use Set to refine, but have to notice the array is reference tyep
    nextMoves = nextMoves.filter(([mX, mY]) => {
      return !visited.some((ver) => {
        return ver.x === mX && ver.y === mY;
      });
    });
    let nextVertices = nextMoves.map((move) => {
      let v = new Vertex(move);
      v.parent = vertex;
      return v;
    });
    queue = queue.concat(nextVertices);
  }
  let v = queue.shift();
  let arr = [];
  while (v !== null) {
    arr.unshift(v.coord);
    v = v.parent;
  }
  console.log(`You made it in ${arr.length - 1} moves! Here's your path:`);
  for (const v of arr) {
    console.log(v);
  }
}
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [1, 2]);
function move([mx, my]) {
  let nextSteps = [];
  let OFFSETS = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  for (const [x, y] of OFFSETS) {
    if (mx + x >= 0 && mx + x <= 7 && my + y >= 0 && my + y <= 7) {
      nextSteps.push([x + mx, y + my]);
    }
  }
  return nextSteps;
}
