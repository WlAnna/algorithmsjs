// Dijkstra's Pseudocode
// This function should accept a starting and ending vertex
// Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for starting vertex which should have a value of 0
// After setting a value in  the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
// Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
// Start looping as long as there is anything in the priority queue
// - dequeue a vertex from the priority queue
// - if that vertex is the same as ending vertex - we are done!
// - otherwise loop through each value in the adjacency list at that vertex
//  -- Calculate the distance to that vertex from the starting vertex
//  -- If the distance is less than what is currently stored in our distances object
//   ---  update the distances object with new lower distance
//   ---  update the previous object to contain the vertex
//   ---  enqueue the vertex with the total distance from the start node

// The PriorityQueue is different here. Without sorting is faster!

class Node {
    constructor(val, pty) {
        this.val = val;
        this.priority = pty;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }


    enqueue(val, pty) {
        let node = new Node(val, pty)
        this.values.push(node)

        let index = this.values.length - 1
        let element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }

    // Return the one node at a time in a priority order
    dequeue() {
        let arr = this.values
            //No need to swap if there is only one node in the array
        if (arr.length <= 1) {
            return
        }
        //initial swap
        let removedNode = arr[0]
        let temp = arr[arr.length - 1]
        arr.pop()
        arr[0] = temp
            //variables for loop
        let parent = 0
        let left = 2 * parent + 1
        let right = 2 * parent + 2
        while ((arr[left] && arr[parent].priority > arr[left].priority) ||
            (arr[right] && arr[parent].priority > arr[right].priority)) {
            //if the left is NOT out of bound but right is out of bound OR left's priority is less than right's priority
            if (arr[left] && !arr[right] || arr[left].priority < arr[right].priority) {
                //swap left
                let temp = arr[parent]
                arr[parent] = arr[left]
                arr[left] = temp
                parent = left
            }
            //if the right is NOT out of bound but left is out of bound OR right's priority is less than left's priority
            else if (arr[right] && !arr[left] || arr[right].priority < arr[left].priority) {
                //swap right
                let temp = arr[parent]
                arr[parent] = arr[right]
                arr[right] = temp
                parent = right
            }
            //update left , right
            left = 2 * parent + 1
            right = 2 * parent + 2

            //when left or right are out of bound, break the loop
            if (left > arr.length && right > arr.length) {
                break;
            }
        }
        return removedNode
    }


}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
            const nodes = new PriorityQueue();
            const distances = {};
            const previous = {};
            let path = [] //to return at end
            let smallest;
            //build up initial state
            for (let vertex in this.adjacencyList) {
                if (vertex === start) {
                    distances[vertex] = 0;
                    nodes.enqueue(vertex, 0);
                } else {
                    distances[vertex] = Infinity;
                    nodes.enqueue(vertex, Infinity);
                }
                previous[vertex] = null;
            }
            // as long as there is something to visit
            while (nodes.values.length) {
                smallest = nodes.dequeue().val;
                if (smallest === finish) {
                    //WE ARE DONE
                    //BUILD UP PATH TO RETURN AT END
                    while (previous[smallest]) {
                        path.push(smallest);
                        smallest = previous[smallest];
                    }
                    break;
                }
                if (smallest || distances[smallest] !== Infinity) {
                    for (let neighbor in this.adjacencyList[smallest]) {
                        //find neighboring node
                        let nextNode = this.adjacencyList[smallest][neighbor];
                        //calculate new distance to neighboring node
                        let candidate = distances[smallest] + nextNode.weight;
                        let nextNeighbor = nextNode.node;
                        if (candidate < distances[nextNeighbor]) {
                            //updating new smallest distance to neighbor
                            distances[nextNeighbor] = candidate;
                            //updating previous - How we got to neighbor
                            previous[nextNeighbor] = smallest;
                            //enqueue in priority queue with new priority
                            nodes.enqueue(nextNeighbor, candidate);
                        }
                    }
                }
            }
            return path.concat(smallest).reverse();
        }
        // Easier solution
        // shortestPath(start, end) {
        //     let node = new PriorityQueue();
        //     let distances = {};
        //     let previous = {};
        //     let path = [];
        //     let currentVertex;

    //     node.enqueue(start, distances[start]);

    //     for (let vertex in this.adjacencyList) {
    //         vertex === start ? distances[vertex] = 0 : distances[vertex] = Infinity;
    //         previous[vertex] = null;
    //     }

    //     while (node.values.length) {
    //         currentVertex = node.dequeue().val;
    //         if (currentVertex === end) {
    //             path.push(currentVertex);
    //             while (previous[currentVertex]) {
    //                 path.push(previous[currentVertex]);
    //                 currentVertex = previous[currentVertex];
    //             }
    //             return path.reverse();
    //         };

    //         this.adjacencyList[currentVertex].forEach(neighbor => {
    //             let potential = distances[currentVertex] + neighbor.weight;
    //             if (potential < distances[neighbor.node]) {
    //                 distances[neighbor.node] = potential;
    //                 previous[neighbor.node] = currentVertex;
    //                 node.enqueue(neighbor.node, potential);
    //             }
    //         });
    //     }
    // }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.Dijkstra("A", "E"));
// console.log(graph.shortestPath("A", "E"))

// ["A", "C", "D", "F", "E"]