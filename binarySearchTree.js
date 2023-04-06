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
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(16)
tree.insert(2)
tree.insert(7)
console.log(tree.insert(10))
console.log(tree.find(2))
console.log(tree.find(7))
console.log(tree.find(15))