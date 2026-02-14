//       A  B  C
// A  [  0  1  0 ]
// B  [  1  0  1 ]
// C  [  0  1  0 ]
// это матрица с рядами и колонками и презентует связь vertices с весами

const matrix2: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1],
];


//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number): number[] | null {

    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr]; // ряд
        for (let i = 0; i < adjs.length; ++i) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length)

    if (prev[needle] === -1) {
        return null;
    }

    // build it backwards
    //
    let curr = needle;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}

bfs(matrix2, 0, 6);