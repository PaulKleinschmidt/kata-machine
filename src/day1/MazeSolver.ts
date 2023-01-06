const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
// Base Cases:
// Its a wall
// It's off the map
// It's the end
// We've seen it
const walk = (
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
) => {
  // If wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // If off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // If at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end)
    return true;
  }

  // If seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // Pre recursion
  path.push(curr);
  seen[curr.y][curr.x] = true;

  for (let i = 0; i < directions.length; ++i) {
    const [x, y] = directions[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // Post recursion
  path.pop();
  return false
};

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = maze.map((maze) => Array(maze.length).fill(false));
  const path: Point[] = [];

  walk(maze, wall, start, end, seen, path);

  return path;
}
