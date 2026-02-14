// хранится в виде массива так [2, 3, 5, 7, 8, 6]
export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    // это спускание вниз
    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        // lIdx потому что мы всегда заполняем слева на право
        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }
    }

    // минимальное значение всплывает вверх (тк heap значение root должно быть меньше всего нижнего дерева)
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent_idx = this.parent(idx);
        const parentV = this.data[parent_idx];
        const v = this.data[idx];

        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[parent_idx] = v;
            this.heapifyUp(parent_idx);
        }
    }

    private parent(idx: number): number {
        // Math.floor for 13 / 2 be equal 6 - its JS problem
        // formula for find index of parent = (i - 1) / 2
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        // formula for find index of left child = (2 * i) + 1
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        // formula for find index of right child = (2 * i) + 2
        return 2 * idx + 2;
    }
}