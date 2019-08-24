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
        if (this.root.value === value) return 'Found at root'; //o(1) if value is at the root 
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