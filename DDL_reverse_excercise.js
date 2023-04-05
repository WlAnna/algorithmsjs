// DLL reverse - Exercise
// reverse

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

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

    insert(val, index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)

        let nodeBefore = this.get(index - 1)
        let newNode = new Node(val)
        let nodeAfter = nodeBefore.next

        nodeBefore.next = newNode
        newNode.prev = nodeBefore
        nodeAfter.prev = newNode
        newNode.next = nodeAfter
        this.length++
            return this
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        let nodeBefore = removedNode.prev
        let nodeAfter = removedNode.next

        removedNode.prev = null
        removedNode.next = null
        nodeBefore.next = nodeAfter
        nodeAfter.prev = nodeBefore

        this.length--
            return removedNode
    }

    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }

    // reverse() {
    //     let current = this.head;
    //     this.head = this.tail;
    //     this.tail = current;

    //     while (current) {
    //         let next = current.next;
    //         let prev = current.prev;
    //         current.next = prev;
    //         current.prev = next;
    //         current = next;
    //     }
    //     return this;
    // }

    // //  iterative version of reverse
    reverse() {
        if (this.length === 1) return this
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next, prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

}


var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.push(5)); // doublyLinkedList
console.log(doublyLinkedList.push(10)); // doublyLinkedList
console.log(doublyLinkedList.unshift(555)); // doublyLinkedList
// console.log(doublyLinkedList.shift()); // doublyLinkedList
// console.log(doublyLinkedList.get(2)); // doublyLinkedList
// console.log(doublyLinkedList.set('replaced', 2)); // doublyLinkedList
// console.log(doublyLinkedList.pop()); // doublyLinkedList
console.log(doublyLinkedList.insert('inserted', 1)); // doublyLinkedList
console.log(doublyLinkedList.remove(1)); // doublyLinkedList
console.log(doublyLinkedList.reverse()); // doublyLinkedList
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