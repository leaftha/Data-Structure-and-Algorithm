function solution(nodeinfo) {
    var answer = [];

    for (let i = 0; i < nodeinfo.length; i++) {
        nodeinfo[i].push(i + 1);
    }

    class Node {
        constructor(x, y, i) {
            this.val = [x, y, i];
            this.left = null;
            this.right = null;
        }
    }

    class Tree {
        constructor() {
            this.root = null;
        }

        insert(x, y, i) {
            let newNode = new Node(x, y, i);
            if (this.root === null) {
                this.root = newNode;
                return this;
            }
            let current = this.root;

            while (true) {
                if (current.val[0] > x) {
                    if (current.left === null) {
                        return (current.left = newNode);
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        return (current.right = newNode);
                    }
                    current = current.right;
                }
            }
        }

        first() {
            let arr = [];

            function recur(root) {
                arr.push(root.val[2]);
                if (root.left) {
                    recur(root.left);
                }
                if (root.right) {
                    recur(root.right);
                }
            }

            recur(this.root);

            return arr;
        }
        second() {
            let arr = [];

            function recur(root) {
                if (root.left) {
                    recur(root.left);
                }
                if (root.right) {
                    recur(root.right);
                }
                arr.push(root.val[2]);
            }

            recur(this.root);

            return arr;
        }
    }

    const tree = new Tree();
    nodeinfo.sort((a, b) => b[1] - a[1]);

    for (let i of nodeinfo) {
        tree.insert(i[0], i[1], i[2]);
    }

    answer.push(tree.first());
    answer.push(tree.second());

    return answer;
}
