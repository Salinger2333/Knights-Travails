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
function move([x, y]) {
  let nextSteps = [];
  if (x + 2 <= 7 && y + 1 <= 7) {
    nextSteps.push([x + 2, y + 1]);
  }
  if (x + 2 <= 7 && y - 1 >= 0) {
    nextSteps.push([x + 2, y - 1]);
  }
  if (x - 2 >= 0 && y + 1 <= 7) {
    nextSteps.push([x - 2, y + 1]);
  }
  if (x - 2 >= 0 && y - 1 >= 0) {
    nextSteps.push([x - 2, y - 1]);
  }
  if (x + 1 <= 7 && y + 2 <= 7) {
    nextSteps.push([x + 1, y + 2]);
  }
  if (x + 1 <= 7 && y - 2 >= 0) {
    nextSteps.push([x + 1, y - 2]);
  }
  if (x - 1 >= 0 && y + 2 <= 7) {
    nextSteps.push([x - 1, y + 2]);
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    nextSteps.push([x - 1, y - 2]);
  }
  return nextSteps;
}