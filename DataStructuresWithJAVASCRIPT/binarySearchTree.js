class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.count = 0; // count if there are same value insertion in the tree so we will increment the count
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) { //Insert element in the tree.
        let newNode = new BinarySearchTreeNode(value);
        if (!this.root) {
            this.root = newNode;
            newNode.count++;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) {
                current.count++;
                return this;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    current.left.count++;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    current.right.count++;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    find(value) { //Takes a value and checks if it is in the tree or not 
        if (!this.root) return 'Empty List'; //Edge Case
        if (this.root.value === value) return this.root; //o(1) if value is at the root 
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    return 'Not found';
                }
                if (current.left.value === value) {
                    return current.left;
                }
                current = current.left;
            }
            if (value > current.value) {
                if (!current.right) {
                    return 'Not found';
                }
                if (current.right.value === value) {
                    return current.right;
                }
                current = current.right;

            }
        }
    }
    bfs() { //BFS => Breadth First Search - Use to traverse the whole tree through side  EX:
        // -->  10
        // --> 12 13
        if (!this.root) return 'Empty Tree';
        let currentNode = this.root,
            valueQueue = [];
        const data = [];
        valueQueue.push(currentNode);
        while (valueQueue.length) {
            currentNode = valueQueue.shift();
            data.push(currentNode.value);
            if (currentNode.left) valueQueue.push(currentNode.left);
            if (currentNode.right) valueQueue.push(currentNode.right);
        }
        return data;
    }
    dfsPreOrder() { //DFS Pre-order implementation  " ROOT , LEFT ,RIGHT"
        if (!this.root) return 'Empty Tree';
        let data = [],
            current = this.root;
        // helper function to traverse the tree
        function traverse(node) {
            data.push(node.value); //Root
            if (node.left) traverse(node.left); //left
            if (node.right) traverse(node.right); //right
        }
        traverse(current);
        return data;
    }
    dfsPostOrder() { // "LEFT, RIGHT , ROOT"
        if (!this.root) return 'Empty Tree';
        let data = [],
            current = this.root;
        // helper function to traverse through recursion 
        function traverse(node) {
            if (node.left) traverse(node.left); //left
            if (node.right) traverse(node.right); //right
            data.push(node.value); //root
        }
        traverse(current);
        return data;
    }
    dfsInOrder() { //"LEFT ROOT RIGHT" return value in sorted order .
        if (!this.root) return 'Empty Tree';
        let data = [],
            current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left); //left
            data.push(node.value); //root
            if (node.right) traverse(node.right); //right
        }
        traverse(current);
        return data;
    }
}

let tree = new BinarySearchTree();
//tree.insert(100);
tree.insert(100);
tree.insert(100);
tree.insert(101);
tree.insert(10);
tree.insert(6);
console.log(tree.insert(1));
console.log('Results : ')
console.log(tree.find(100));
console.log(`Breadth Fist Search : ${tree.bfs()}`);
console.log(`DFS PRE ORDER : ${tree.dfsPreOrder()}`);
console.log(`DFS POST ORDER : ${tree.dfsPostOrder()}`);
console.log(`DFS IN ORDER : ${tree.dfsInOrder()}`);