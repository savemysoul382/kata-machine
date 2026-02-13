function walk(curr: BinaryNode<number> | null | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    path.push(curr.value)
    return path;
}

//        A
//       / \
//      /   \
//     B-----C
//    / \
//   D---E

// по схеме stack

// Post-order
// D, E, B, C, A
// после walk(left) и walk(right)

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}