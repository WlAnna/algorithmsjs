// Inserting a node - iteratively or recursively
// Create a new node
// Starting at the root
// - Check if there is a root, if not - the root now becomes that new node
// - If there is a root, check if the value of the new node is grater than or less than the value of the root
// - If it is grater
//   Check to see if there is a node to the right
//    If there is, move to that node an repeat these steps
//    If there is not, add that node as the right property
// - If it is less
//   Check to see of there is a node to the left
//    If there is, move to that node and repeat these steps
//    If there is not, add as the left property

// Finding a node in a BST (Breadth First Search)
// Steps - iteratively or Recursively
// Starting at the root
// - Checking if there is a root, if not - we're done searching!
// - If there is a root, check if the value of the new node is the value we are searching for. If we found it, we are done!
// - If not, check to see if the value is grater than or less than the value of the root
// - If it is grater
//   Check to see if there is a node to the right
//     If there is, move to that node and repeat these steps
//     If there is not, we're done searching!
// - If it is less
//   Check to see if there is a node to the left
//     If there is, move to that node and repeat these steps
//     If there is not, we're done searching!

// BSF (Breadth First Search)
// Steps - iteratively
// Starting at the root
// - Create a queue (this can be an array) and a variable to store the values of nodes visited
// - Place the root node in the queue
// - Loop as long as there is anything in the queue
//  Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//  If there is a left property on the node dequeued - add it to the queue
//  If there is a right property on the node dequeued - add it to the queue

// DFS - PreOrder
// Steps - recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// - Push the value of the node to the variable that stores the values
// - If the node has a left property, call the helper function with the left property on the node
// - If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// Return the array of value

// DFS - PostOrder
// Steps - Recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// - If the node has a left property, call the helper function with the left property on the node
// - If the node has a right property, call the helper function with the right property on the node
// - Push the value of the node to the variable that stores the values
// - Invoke the helper function with the current variable
// Return the array of values

// DFS - InOrder
// Steps - Recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// - If the node has a left property, call the helper function with the left property on the node
// - Push the value of the node to the variable that stores the values
// - If the node has a right property, call the helper function with the right property on the node
// - Invoke the helper function with the current variable
// Return the array of values



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if (val === current.value) return undefined
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    // insert(value) {
    //     var newNode = new Node(value);
    //     if (this.root === null) {
    //         this.root = newNode;
    //         return this;
    //     }
    //     var current = this.root;
    //     while (true) {
    //         if (value === current.value) return undefined;
    //         if (value < current.value) {
    //             if (current.left === null) {
    //                 current.left = newNode;
    //                 return this;
    //             }
    //             current = current.left;
    //         } else {
    //             if (current.right === null) {
    //                 current.right = newNode;
    //                 return this;
    //             }
    //             current = current.right;
    //         }
    //     }
    // }

    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }


    BFS() {
        let queue = []
        let data = []
        queue.push(this.root)
        let node;
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

        }
        return data

    }

    //DFS
    preOder() {
        let data = []
        let current = this.root

        function helper(node) {
            data.push(node.value)
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
        }

        helper(current)
        return data
    }

    //DFS
    postOrder() {
        let data = []
        let current = this.root

        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
            data.push(node.value)
        }

        helper(current)
        return data
    }

    //DFS
    inOrder() {
        let data = []
        let current = this.root

        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            data.push(node.value)
            if (node.right) {
                helper(node.right)
            }

        }

        helper(current)
        return data
    }

}




var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

//     10
//  5      13
// 2  7  11  16
//  3
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(16)
// tree.insert(2)
// tree.insert(7)
// console.log(tree.insert(10))
// console.log(tree.find(2))
// console.log(tree.find(7))
// console.log(tree.find(15))

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.BFS()) //[10, 6, 15, 3, 8, 20]
console.log(tree.preOder()) //  [10, 6, 3, 8, 15, 20]
console.log(tree.postOrder()) //  [3, 8, 6, 20, 15, 10]
console.log(tree.inOrder()) //  [3, 6, 8, 10, 15, 20]

//              10
//         6          15
//       3   8          20