// 기본적으로 힙은 트리이다.
// 하지만 특별히 추가되는 규칙들이 있다.
// 종류또한 다양

// 그중 이진힙이 중요

// 이진 힙 (Binary Heap)

// 이진 힙은 이진 탐색 트리와 매우 비슷하지만 다른 규칙이 있다.
// 종류는 2가지

// 최대 이진 힙에서는 부모노드가 항상 자식 노드보다 큰값을 가진다.
// 왼쪽 오른쪽 상관없이 자식노드 보다는 항상 부모 노드가 크다
// 각각의 부모는 최대 두개의 자식을 가진다.
// 형제 노드사이에서는 크기에 대한 제한이 없다.
// 왼쪽의 자식을 먼저 추가하고 오른쪽을 추가해야한다.

// 최소 이진 힙에는서느 반대, 부모노드가 언제나 양쪽의 자식보다 작다.

// 힙 정렬

// 이진 힙을 배열로 하면

// [100,19,34,17,12,25,5]
//   0 , 1, 2, 3, 4, 5,6
// 부모, 왼, 오 .....
// 배열 안에 있는 모든 인덱스에 대해, 그 왼쪽 자식은 2n+1에 저장되어 있고,
// 오른쪽 자식은 2n+2에 저장되어 있다.

// 부모노드는 Math.floor((n-1)/2)에 있다.

//*************************************************************
// 구현

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(elemet) {
    this.values.push(elemet);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const elemet = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (elemet <= parent) break;
      this.values[parentIdx] = elemet;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap != null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(20);

console.log(heap);

//*************************************************************

// 우선 순위 큐

// 우선 순위 큐는 각 요소가 그에 해당하는 우선 순위를 가지는 데이터 구조
// 그리고 더 높은 우선 순위를 가진 요소가 더 낮은 우선 순위를 가진 요소보다 먼저 처리 된다.

// ex) 유닉스의 나이스

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const elemet = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (elemet.priority >= parent.priority) break;
      this.values[parentIdx] = elemet;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap != null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();

ER.enqueue("one", 1);
ER.enqueue("five", 5);
ER.enqueue("two", 2);

console.log(ER);

//*************************************************************

// 이진 힙의 big O은 매우 빠른 수준

// Insertion - O(logN)
// Removal - O(logN)
// Search - O(N)
