// 다익스트라 알고리즘

// 다익스트라 알고리즘 === 최단 경로 알고리즘

// 그래프와 우선순위 큐를 활용

// 네비게이션의 최단 길 찾기등에 사용

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "D", 3);
g.addEdge("C", "E", 2);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 6);
g.addEdge("E", "F", 9);

console.log(g);
