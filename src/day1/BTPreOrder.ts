function walk(curr: BinaryNode<number> | null | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre
    path.push(curr.value)

    // recurse
    walk(curr.left, path);
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

// Pre-order
// A, B, D, E, C
// до walk(left) и walk(right)

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}