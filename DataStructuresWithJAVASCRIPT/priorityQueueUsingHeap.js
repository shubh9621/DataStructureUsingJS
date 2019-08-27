class PriorityQueueNode {
    constructor(value, p) {
        this.value = value;
        this.priority = p;
    }
}
class PriorityQueue { // MAX Heap
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new PriorityQueueNode(value, priority);
        this.values.push(newNode);
        console.log(this.bubbleUp(this.values));
    }
    bubbleUp(values) { // shift the added value to its real position according to its size
        let index = values.length - 1; // finding the child index
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // calculating the parent index
            if (values[index].priority < values[parentIndex].priority) break;
            let temp = values[parentIndex];
            values[parentIndex] = values[index];
            values[index] = temp;
            index = parentIndex;
        }
        return values;
    }
    dequeue() { // Remove the max element and replace the first position with last position
        let max = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = max;
        this.values.pop();
        return this.sinkDown(this.values, max);
    }
    sinkDown(values, max) { //Find the lasgest in the list and move it to the first position
        let index = 0;
        let length = values.length;
        if (length === 1 || length === 0) return values; //Edge Case 
        if (length === 2) { //Edge Cases
            if (values[0].priority < values[1].priority) {
                let temp = values[1];
                values[1] = values[0];
                values[0] = temp;
            }
            return values;
        }
        let leftChild = 2 * index + 1; // calculating the *left child
        let rightChild = 2 * index + 2; // calculating the *Right child
        while (leftChild < length && rightChild < length) {
            if (values[leftChild].priority < values[index].priority || values[rightChild].priority < values[index].priority) break;
            if (values[leftChild].priority > values[rightChild].priority) {
                let temp = values[leftChild];
                values[leftChild] = values[index];
                values[index] = temp;
                index = leftChild;
            } else {
                let temp = values[rightChild];
                values[rightChild] = values[index];
                values[index] = temp;
                index = rightChild;
            }
            leftChild = 2 * index + 1; // calculating the *left child
            rightChild = 2 * index + 2; // calculating the *Right child
        }
        return max; // Printing the result
    }
}

let pq = new PriorityQueue();
pq.enqueue(10, 2);
pq.enqueue(11, 5);
pq.enqueue(9, 1);
pq.enqueue(20, 4);
pq.enqueue(40, 3);
pq.enqueue(0, 0);
pq.enqueue(200, 7);

// pq.enqueue(10, 10);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());