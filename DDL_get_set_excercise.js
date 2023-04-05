// DLL get - Exercise
// Implement the following on the DoublyLinkedList.prototype

// get

// This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it.)


// DLL set - Exercise
// Implement the following on the DoublyLinkedList.prototype

// set

// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it.)

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.val = val
        this.next = null;
        this.head = null; // poczatek
        this.tail = null; // current lub end
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            let tail = this.tail
            tail.next = newNode
            newNode.prev = tail
            this.tail = newNode
        }
        this.length++
            return this
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.tail = newNode
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
            return this
    }

    shift() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let removed = this.head
            let newHead = this.head.next

            newHead.prev = null
            removed.next = null
            this.head = newHead

            this.length--
                return removed
        }

    }

    //Singly Linked List
    // get(index) {
    //     if (index < 0 || index >= this.length) return null
    //     if (this.length === 0) return undefined
    //     let count = 0
    //     let current = this.head
    //     while (count != index) {
    //         current = current.next
    //         count++
    //     }
    //     return current
    // }

    get(index) {
        if (index < 0 || index >= this.length) return null
        if (this.length === 0) return undefined
        let count = 0
        let current
        if (index <= this.length / 2) {
            current = this.head
            for (let i = 0; i < this.length / 2; i++) {
                if (count != index) {
                    current = current.next
                    count++
                }

            }
        } else {
            current = this.tail
            for (let i = this.tail - 1; i > this.length / 2; i--) {
                if (count != index) {
                    current = current.prev
                    count++
                }
            }
        }
        return current
    }

    //set ==== replace
    set(val, index) {
        if (this.length === 0) return undefined
        let replacedNode = this.get(index)
        if (replacedNode !== null) {
            replacedNode.val = val
            return true
        }
        return false

    }


}


var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.push(5)); // doublyLinkedList
console.log(doublyLinkedList.push(10)); // doublyLinkedList
console.log(doublyLinkedList.unshift(555)); // doublyLinkedList
// console.log(doublyLinkedList.shift()); // doublyLinkedList
console.log(doublyLinkedList.get(2)); // doublyLinkedList
console.log(doublyLinkedList.set('replaced', 2)); // doublyLinkedList
// doublyLinkedList.length; // 1
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.head.prev // null
// doublyLinkedList.push(10);
// doublyLinkedList
// doublyLinkedList.length; // 2
// doublyLinkedList.head.val; // 5
// doublyLinkedList.head.next.val; // 10
// doublyLinkedList.tail.val; // 10
// doublyLinkedList.head.next.prev.val // 10
// doublyLinkedList.push(15);
// doublyLinkedList
// doublyLinkedList.length; // 3
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 15
// doublyLinkedList.tail.prev.val; // 10
// doublyLinkedList.head.next.next.val; // 15

// doublyLinkedList.pop().val; // 15
// doublyLinkedList.length; // 2
// doublyLinkedList.pop().val; // 10
// doublyLinkedList.length; // 1
// doublyLinkedList.pop().val; // 5
// doublyLinkedList.length; // 0
// doublyLinkedList.pop(); // undefined
// doublyLinkedList.length; // 0