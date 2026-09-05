export type GraphNode = { x: number; y: number; z: number };

export type GraphEdge = { a: number; b: number; length: number };

export type ComputationGraph = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  adjacency: { node: number; weight: number }[][];
};

/** A reproducible, connected fabric with world-space distances as edge weights. */
export function createComputationGraph(
  columns = 29,
  rows = 17,
): ComputationGraph {
  if (
    !Number.isInteger(columns) ||
    !Number.isInteger(rows) ||
    columns < 2 ||
    rows < 2
  ) {
    throw new RangeError(
      "A computation graph needs at least two rows and columns.",
    );
  }

  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const adjacency: ComputationGraph["adjacency"] = Array.from(
    { length: columns * rows },
    () => [],
  );

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const x = ((column + (row % 2) * 0.5) / (columns - 0.5)) * 6.4 - 3.2;
      const y = (row / (rows - 1)) * 3.6 - 1.8;
      const z = Math.sin(x * 1.15) * 0.48 + Math.cos(y * 1.8 + x * 0.35) * 0.16;
      nodes.push({ x, y, z });
    }
  }

  const connect = (a: number, b: number) => {
    const start = nodes[a];
    const end = nodes[b];
    const length = Math.hypot(
      end.x - start.x,
      end.y - start.y,
      end.z - start.z,
    );
    edges.push({ a, b, length });
    adjacency[a].push({ node: b, weight: length });
    adjacency[b].push({ node: a, weight: length });
  };

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const current = row * columns + column;
      if (column < columns - 1) connect(current, current + 1);
      if (row < rows - 1) connect(current, current + columns);
      if (column < columns - 1 && row < rows - 1) {
        if ((column + row) % 2 === 0) {
          connect(current, current + columns + 1);
        } else {
          connect(current + 1, current + columns);
        }
      }
    }
  }

  return { nodes, edges, adjacency };
}

/** Dijkstra distances make pulses follow actual links instead of screen radii. */
export function signalDistances(
  graph: ComputationGraph,
  origin: number,
): Float32Array {
  const distances = new Float64Array(graph.nodes.length).fill(Infinity);
  if (!Number.isInteger(origin) || origin < 0 || origin >= distances.length) {
    return new Float32Array(distances);
  }

  type Entry = { node: number; distance: number };
  const heap: Entry[] = [];

  const push = (entry: Entry) => {
    let index = heap.length;
    heap.push(entry);
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (heap[parent].distance <= entry.distance) break;
      heap[index] = heap[parent];
      index = parent;
    }
    heap[index] = entry;
  };

  const pop = (): Entry => {
    const first = heap[0];
    const last = heap.pop()!;
    if (heap.length > 0) {
      let index = 0;
      while (index * 2 + 1 < heap.length) {
        let child = index * 2 + 1;
        if (
          child + 1 < heap.length &&
          heap[child + 1].distance < heap[child].distance
        ) {
          child++;
        }
        if (last.distance <= heap[child].distance) break;
        heap[index] = heap[child];
        index = child;
      }
      heap[index] = last;
    }
    return first;
  };

  distances[origin] = 0;
  push({ node: origin, distance: 0 });

  while (heap.length > 0) {
    const current = pop();
    if (current.distance > distances[current.node]) continue;

    for (const neighbor of graph.adjacency[current.node]) {
      const distance = current.distance + neighbor.weight;
      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        push({ node: neighbor.node, distance });
      }
    }
  }

  return new Float32Array(distances);
}
