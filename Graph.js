// Write a method called addVertex, which accepts a name of a vertex
// It should add a key to the adjacency list with the name of the vertex and sets its value to be an empty array

//Adding an edge
// This function should accept two vertices, we can call them vertex1 and vertex2
// The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
// Don't worry about handling errors/invalid vertices

// Removing an edge
// This function should accept two verticies, we'll call them vertex1 and vertex2
// The function should reassing the key of vertex1 to be an array that does not contain vertex2
// The function should reassing the key of vertex2 to be an array that soes not contain vertex1
// Don't worry about handling errors/invalid vertices

// Removing a vertex
// The function should accept a vertex to remove
// The function should loop as long as there are any other verticles in the adjacency list for that vertex
// Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex

// Depth First Traversal - recursive
// The function should accept a starting noe
// Create a list to store end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
// - The helper function should return early if the vertex is empty
// - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
// Loop over all of the values in the adjacencyList for that vertex
// If any of those values have not been visited, recurively invoke the helper function with that vertex
// Invoke the helper function with the starting vertex
// REturn the result array

// Depth first traversal - iterative
// The function should accept a starting node
// Create a stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// White the stack has something in it:
// - Pop the next vertex from the stack
// - If the vertex hasn't been visited yet:
// - - Mark it as visited
// - - Add it to the result list
// - - Push all of its neighbors into the stack

// Breadth First
// This function should accept a starting vertex
// Create a queue (you can use an array) and place the starting vertex in it
// Create an array to store the nodes visited
// Create and object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores nodes visited
// Loop over each vertex in the adjacency list for the vertex you are visiting
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the array of visited nodes



class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
        return this.adjacencyList
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstTraversalRecursive(startingNode) {
        let list = []
        let visited = {}
        let adjacencyList = this.adjacencyList

        function helper(vertex) {
            if (!vertex) return null
            visited[vertex] = true
            list.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return helper(neighbor)
                }
            });

        }

        helper(startingNode)
        return list
    }

    depthFirstTraversalIterative(startingNode) {
        let stack = [startingNode]
        let result = []
        let visited = {}
        visited[startingNode] = true
        let currentVertex
        while (stack.length) {
            console.log(stack)
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            });

        }
        return result
    }

    breadthFirst(startingNode) {
        let queue = [startingNode]
        let result = []
        let visited = {}
        visited[startingNode] = true
        let currentVertex
        while (queue.length) {
            console.log(queue)
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => { // reverse
                // this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            });
        }
        return result
    }
}

// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.removeEdge("Dallas", "Aspen")
// g.removeVertex('Tokyo')
// g.depthFirstTraversal('A')


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.depthFirstTraversalRecursive("A")) //  ['A', 'B', 'D', 'E', 'C', 'F']
console.log(g.depthFirstTraversalIterative("A")) // ['A', 'C', 'E', 'F', 'D', 'B']
console.log(g.breadthFirst("A")) // ['A', 'B', 'C', 'D', 'E', 'F']
    // reverse ['A', 'C', 'B', 'E', 'D', 'F']

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F