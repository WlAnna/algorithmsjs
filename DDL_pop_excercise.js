// DLL pop - Exercise
// Implement the following on the DoublyLinkedList class

// pop

// This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

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

    pop() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let before = this.tail.prev
            let tail = this.tail

            tail.prev = null
            before.next = null
            this.tail = before
            this.length--
                return tail
        }

    }

}


var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.push(5)); // doublyLinkedList
console.log(doublyLinkedList.push(10)); // doublyLinkedList
console.log(doublyLinkedList.unshift(555)); // doublyLinkedList
// console.log(doublyLinkedList.shift()); // doublyLinkedList
console.log(doublyLinkedList.get(2)); // doublyLinkedList
console.log(doublyLinkedList.set('replaced', 2)); // doublyLinkedList
console.log(doublyLinkedList.pop()); // doublyLinkedList
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