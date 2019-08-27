class BinaryHeap { // MAX Heap
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        console.log(this.bubbleUp(this.values));
    }
    bubbleUp(values) { // shift the added value to its real position according to its size
        let index = values.length - 1; // finding the child index
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // calculating the parent index
            if (values[index] < values[parentIndex]) break;
            let temp = values[parentIndex];
            values[parentIndex] = values[index];
            values[index] = temp;
            index = parentIndex;
        }
        return values;
    }
    extractMax() { // Remove the max element and replace the first position with last position
        let max = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = max;
        this.values.pop();
        return this.sinkDown(this.values);
    }
    sinkDown(values) { //Find the lasgest in the list and move it to the first position
        let index = 0;
        let length = values.length;
        if (length === 1 || length === 0) return values; //Edge Case 
        if (length === 2) { //Edge Cases
            if (values[0] < values[1]) {
                let temp = values[1];
                values[1] = values[0];
                values[0] = temp;
            }
            return values;
        }
        let leftChild = 2 * index + 1; // calculating the *left child
        let rightChild = 2 * index + 2; // calculating the *Right child
        while (leftChild < length && rightChild < length) {
            if (values[leftChild] < values[index] || values[rightChild] < values[index]) break;
            if (values[leftChild] > values[rightChild]) {
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
        return values; // Printing the result
    }
}

let heap = new BinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert('a');
heap.insert(12);
heap.insert(33);
console.log("Extracting Max ....");
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax()); // This leads to the empty heap