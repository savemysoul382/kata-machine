function walk(curr: BinaryNode<number> | null | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre

    // recurse
    walk(curr.left, path);
    path.push(curr.value)
    walk(curr.right, path);

    // post
    return path;
}

//        A
//       / \
//      /   \
//     B-----C
//    / \
//   D---E

// In-order
// D, B, E, A, C
// между walk(left) и walk(right)

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}