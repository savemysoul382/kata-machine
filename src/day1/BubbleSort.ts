export default function bubble_sort(arr: number[]): void {
    // for sum elements from 1 to N
    // formula: (N+1) * N/2
    // O(n) = O(n^2 + n) = O(n)

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {

            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}