class Node {
  constructor(coord) {
    this.coord = coord
    this.parNode = null
  }
}
function knightMove([startX, startY], [endX, endY]) {
  if (startX === endX && startY === endY) throw new Error("pls move!!!");
  let queue = [[startX, startY]];
  let visited = [];//拿到目标坐标前的所有遍历的节点
  while (queue[0][0] !== endX || queue[0][1] !== endY) {
    let coord = queue.shift();
    visited.push(coord);
    let nextMoves = move(coord);
    nextMoves = nextMoves.filter(([mX, mY]) => {
      return !visited.some(([vX, vY]) => {
        return vX === mX && vY === mY;
      });
    });
    
    queue = queue.concat(nextMoves);
  }
  
}

knightMove([3, 3], [1, 1]);

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
// function knightMove([startX, startY], [endX, endY], visited = []) {
//   if (startX === endX && startY === endY) {
//     return visited;
//   }
//   let allPaths = [];
//   let possibleMoves = move([startX, startY]);
//   possibleMoves = possibleMoves.filter((move) => !visited.includes(move))
//   visited.push([startX, startY]);
//   possibleMoves.forEach((coord) =>
//     allPaths.push(knightMove(coord, [endX, endY], visited))
//   );
//   let shortPath = allPaths[0];
//   allPaths.forEach((path) => {
//     if (path.length < shortPath) shortPath = path;
//   });
//   return shortPath;
// }
