// 그래프(Graph) != Chart와는 다름

// 노드나 노드들의 연결을 모은 것 === 노드와 각 꼭지점의 연결쌍의 집합
// 부모,자식이노드가 없고 순서도 상관없다.

// sns, 지도 기능, 구글지도, 방향안내, 위치, 길찾기(네비게이션) 등등 쓰임
// 추천 알고리즘을 만들때도 쓰인다.

// 정점,꼭지점(Vertex) : 노드를 일컫는 말
// 간선(Edge) : 노드들 사이의 선

// 유형

// 트리또한 그래프의 일종

// 방향 그래프
// 간선이 한쪽 방향으로 만 이동 가능한 그래프

// 무방향 그래프
// 간선이 양방향(무방향)으로 이동 가능한 그래프

// 가중 그래프
// 간선 사이에 값이 부여된 그래프
// ex) 지도의 네비게이션

// 비가중 그래프
// 간선 사이에 값이 부여되지 않은 그래프
// 인스타그램또는 페이스북

//*************************************************************

// 그래프를 코드로 표현하는 법
// 인접 행렬을 이용한다.

// -  A  B  C  D  E  F
// A  0  1  0  0  0  1
// B  1  0  1  0  0  0
// C  0  1  0  1  0  0
// D  0  0  1  0  1  0
// E  0  0  0  1  0  1
// F  1  0  0  0  1  0

// 노드 사이에 간선이 있으면 1 없으면 0으로 표현한다.

// 두번째 방법 인접 리스트

//   [
// 0     [1,5],
// 1     [0,2],
// 2     [1,3],
// 3     [2,4],
// 4     [3,5],
// 5     [4,0],
//   ]

// 배열에 간선이 연결된 노드를 저장
// 무방향 연결이다.
// 문자 처럼 순서가 없는 것들을 저장 할때는 해시를 이용

// {
//     A: ["B", "F"],
//     B: ["A", "C"],
//     C: ["B", "D"],
//     D: ["C", "E"],
//     E: ["D", "F"],
//     F: ["E", "A"],
// }

// 비교

// v는 정점 갯수
// e는 간선 갯수

//           인접 행렬  |  인접리스트
// 정점 삽입    O(1)         O(v**2)
// 간선 삽입    O(1)         O(1)
// 정점 삭제    O(v+e)       O(v**2)
// 간선 삭제    O(e)         O(1)
// 순회 확인    O(v+e)       O(1)
// 공간 크기    O(v+e)       O(v**2)

// 크게 의미 있는 것은 아니고 그저 행렬이 리스트보다 공간을 더 차지한다는 것을 알아야한다
// 퍼져있는 데이터를 다룰 때는 좋지 않다. 모든 간선을 순환해야해서 느리다.
// 하지만 특정 간선을 확인 할때는 더 빠르다.
// 리스트인 위의 반대이다.

// sns나 위키의 정보는 퍼져있는 경우가 많다. 리스트가 효율이 좋다.

//*************************************************************

// 구현

// 인접 리스트 사용

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g);

g.depthFirstRecursive('A');

// 재귀 방식으로 순회 방법
// 빈 배열을 준비해서
// 인접을 을 찾아가면서 순회
// 방문한 노드를 기록해서 확인한다.
