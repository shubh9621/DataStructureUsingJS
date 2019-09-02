class UndirectedGraph {
    constructor() {
            this.list = {};
            this.vistedVertices = {};
        }
        //add new vertex in the graph.
    addVertex = (value) => {
            if (!this.list[value]) this.list[value] = [];
            return this.list;
        }
        //add edge between 2 vertices
    addEdge = (vertex1, vertex2) => {
            if (!this.list[vertex1]) {
                this.addVertex(vertex1);
            }
            if (!this.list[vertex2]) {
                this.addVertex(vertex2);
            }
            this.list[vertex1].push(vertex2);
            this.list[vertex2].push(vertex1);
            return this.list;
        }
        //Remove edge from a graph.
    removeEdge = (vertex1, vertex2) => {
            if (this.list[vertex1]) {
                //Filter Method to filter the given values of an Object.
                this.list[vertex1] = this.list[vertex1].filter(v => v !== vertex2);
            }
            if (this.list[vertex2]) {
                this.list[vertex2] = this.list[vertex2].filter(v => v !== vertex1);
            }
            return this.list;
        }
        //Remove the whole vertex and all its references.
    removeVertex = (vertex) => {
            if (!this.list[vertex]) {
                return false;
            }
            for (let v of this.list[vertex]) {
                this.removeEdge(vertex, v);
            }
            delete this.list[vertex];
            console.log(this.list);
        }
        //Traverse through the graph using DFS and mark down the already visited vertices in one object.
    dfsGraphTraversal = (vertex) => {
        //Base case.
        if (!this.list[vertex]) return undefined;
        //Set vertex equals to visited.
        this.vistedVertices[vertex] = true;
        //looping throught all of its neighbors.
        for (let v of this.list[vertex]) {
            //checking if vertex is visited or not 
            if (this.vistedVertices[v] !== true) {
                //recursive call for next not visited neighbor.
                this.dfsGraphTraversal(v);
            }
        }
        //return all the visited vertices.
        return this.vistedVertices;
    }

}

let graph = new UndirectedGraph();
graph.addVertex('Kondapur');
graph.addVertex('Gachibowli');
graph.addEdge('Kothaguda', 'Gachibowli');
graph.addEdge('Tolichowki', 'Kothaguda');
console.log(graph.addEdge('Kondapur', 'Gachibowli'));
//console.log(graph.removeEdge('Kothaguda', 'Gachibowli'));
// graph.removeVertex('Kondapur');
console.log(graph.dfsGraphTraversal('Kothaguda'));