//creating naive priority queue which is less efficient.
class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enQueue = (value, priority) => {
        this.queue.push({ value, priority });
        this.sort();
    };
    // sort according to the priority in N * L0g(n)
    sort = () => {
            this.queue.sort((a, b) => a.priority - b.priority);
        }
        // returns the top most value of the queue.
    deQueue = () => {
        return this.queue.shift();
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
                queue.enQueue(keys, Infinity);
            } else {
                this.distance[keys] = 0;
                queue.enQueue(keys, 0);
            }
            //Initialize pervious.
            this.previous[keys] = null;
        }
        return queue.queue;
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
            if (smallest === end) {
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
                        pq.enQueue(nextNeighbor, candidate);
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