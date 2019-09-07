//Optimised Priority queue using Heap much more faster 
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
        //console.log(this.bubbleUp(this.values));
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

class WeightedGraph {
    constructor() {
            this.list = {};
            this.visited = {};
            this.distance = {};
            this.previous = {};
        }
        //adding new vertex in the Graph without any connections.
    addVertex = (vertex) => {
            //if not exist add new.
            if (!this.list[vertex]) this.list[vertex] = [];
        }
        //adding edges and weight between 2 vertices.
    addEdgesAndWeight(vertex1, vertex2, weight) {
        if (!this.list[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.list[vertex2]) {
            this.addVertex(vertex2);
        }
        this.list[vertex1].push({ to: vertex2, weight });
        this.list[vertex2].push({ to: vertex1, weight });
        return this.list;
    }
    initializeDistances = (start) => {
        //adding values in the priority queue 
        //adding distances in distance object
        const queue = new PriorityQueue();
        for (let keys of Object.keys(this.list)) {
            if (keys !== start) {
                //default every thing is infinity except the starting vertex.
                this.distance[keys] = Infinity;
                queue.enqueue(keys, Infinity);
            } else {
                this.distance[keys] = 0;
                queue.enqueue(keys, 0);
            }
            //Initialize pervious.
            this.previous[keys] = null;
        }
        return queue.values;
    }
    findingShortestPath = (start, end) => {
        //Here is all the initializings.
        const pq = new PriorityQueue();
        const initialPosition = start;
        const priorityQueue = this.initializeDistances(start);
        //as long as there is something to visit
        while (priorityQueue.length) {
            let smallest = priorityQueue.shift().value;
            // console.log(smallest);
            if (smallest === end) { //At the end both start and end become same then we will return the resulted shortesPath.
                while (this.previous[smallest]) {
                    console.log(smallest);
                    smallest = this.previous[smallest];
                    console.log("^" + "\n" + "^");
                }
                console.log(initialPosition);
                break;
            }
            if (smallest || this.distance[smallest] !== Infinity) {
                for (let neighbor in this.list[smallest]) {
                    let nextValue = this.list[smallest][neighbor]; // it gives the Whole object ex : {to : 'B' , weight : 4}.
                    let candidate = this.distance[smallest] + nextValue.weight; // adding weight from A to Current smallest.
                    let nextNeighbor = nextValue.to;
                    if (candidate < this.distance[nextNeighbor]) { //Validating weight and updating value.
                        this.distance[nextNeighbor] = candidate;
                        this.previous[nextNeighbor] = smallest;
                        pq.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
    }
}
let wGraph = new WeightedGraph();
wGraph.addEdgesAndWeight('A', 'B', 4);
wGraph.addEdgesAndWeight('A', 'C', 2);
wGraph.addEdgesAndWeight('C', 'D', 2);
wGraph.addEdgesAndWeight('C', 'F', 4);
wGraph.addEdgesAndWeight('B', 'E', 3);
wGraph.addEdgesAndWeight('D', 'E', 3);
wGraph.addEdgesAndWeight('D', 'F', 1);
wGraph.addEdgesAndWeight('F', 'E', 1);
console.log(wGraph.findingShortestPath('D', 'E'));