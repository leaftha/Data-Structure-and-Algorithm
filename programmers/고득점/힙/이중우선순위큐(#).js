class MinHeap {
    constructor() {
        this.heap = [null];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    isEmty() {
        return this.heap.length === 1;
    }

    push(val) {
        this.heap.push(val);
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);

        while (par != 0 && this.heap[cur] < this.heap[par]) {
            this.swap(cur, par);
            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    pop() {
        if (this.isEmty()) return;
        if (this.heap.length === 2) return this.heap.pop();
        const val = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = 2;
        let right = 3;

        while (
            (this.heap[left] && this.heap[cur] > this.heap[left]) ||
            (this.heap[right] && this.heap[cur] > this.heap[right])
        ) {
            if (this.heap[left] === undefined) {
                this.swap(right, cur);
            } else if (this.heap[right] === undefined) {
                this.swap(left, cur);
            } else if (this.heap[left] > this.heap[right]) {
                this.swap(cur, right);
                cur = right;
            } else if (this.heap[left] <= this.heap[right]) {
                this.swap(cur, left);
                cur = left;
            }

            left = cur * 2;
            right = cur * 2 + 1;
        }

        return val;
    }

    MaxPop() {
        if (this.isEmty()) return;
        if (this.heap.length === 2) return this.heap.pop();
        const parentIndex = Math.floor((this.heap.length - 1) / 2);
        const lastLeaf = this.heap.slice(parentIndex);
        const max = Math.max(...lastLeaf);
        this.swap(parentIndex + lastLeaf.indexOf(max), this.heap.length - 1);
        return this.heap.pop();
    }
}

function solution(operations) {
    var answer = [];
    let q = new MinHeap();
    for (let i of operations) {
        const [P, N] = i.split(' ');
        if (P === 'D' && N === '-1') {
            let a = q.pop();
        } else if (P === 'D' && N === '1') {
            q.MaxPop();
        } else if (P === 'I') {
            q.push(N * 1);
        }
    }
    if (q.heap.length != 1) {
        answer.push(q.MaxPop(), q.pop());
    } else {
        answer.push(0, 0);
    }

    return answer;
}
