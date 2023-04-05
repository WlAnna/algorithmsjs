// piece of data - val
// reference to next node - next
// reference to previous node - prev
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//push()
// Create a new node with the value passed to the function
// If the head property is null set the head and tail to be the newly created node
// If not, set the next property on the tail to be that node
// Set the previous property on the newly created node to be the tail
// Set the tail to be the newly created node
// Increment the length
// Return the Doubly Linked List

// pop()
// If there is no head, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and tail to be null
// update the tail to be the previous Node
// Set the newTail's next to null
// Decrement the length
// Return the value removed

// shift()
// If length is 0, return undefined
// Store he current head property in a variable (We'll call it old head)
// It the length is one
// - set the head to be null
// - set the tail to be null
// update the head to be the next of the old head
// set the head's prev property to null
// set the old head's next to null
// decrement the length
// return old head

// unshift()
// create a new node with the value passed to the function
// If the length is 0
// - set the head to be the new node
// - Set the tail to be the new node
// Otherwise
// - set the prev property on the head of the list to be the new node
// - set the next property on the new node to be the head property
// - update the head to be the new node
// Increment the length
// Return the list

// get()
// If the index is less than 0 or grater or equal to the length, return null
// If the index is less than or equal to half the length of the list
// - Loop through the list starting from the head and loop towards the middle
// - Return the node once it is found
// If the index is grater than half the length of the list
// - Loop through the list starting from the tail and loop towards the middle
// - Return the node once it is found

// set()
// Create a variable which is the result of the get method at the index passed to the function
// - If the get method returns a valid node, set the value of that node to be the value passed to the function
// - return true
// Otherwise, return false

// insert()
// If the index is less than zero or grater than or equal to the length return false
// If the index is 0, unshift
// If the index is the same as the length, push
// Use the get method to access the index-1
// Set the next and prev properties on the correct nodes to link everything together
// Increment the length
// Return true

// remove()
// If the index is less than zero or grater than or equal to the length return undefined
// If the index is 0, shift
// If the index is the same as the length-1, pop
// Use the get method to retrieve the item to be removed
// Update the next and prev properties to remove the found node from the list
// Set next and prev to null on the found node
// Decrement the length
// Return the removed node


class DoublyLinkedList {
    constructor() {
        this.head = null; // poczatek
        this.tail = null; // current lub end
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) { //this.length === 0
            this.head = newNode
            this.tail = newNode // newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
            return this
    }


    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }

        this.tail = this.tail.prev
        this.tail.next = null
        poppedNode.prev = null

        this.length--
            return poppedNode
    }

    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--
            return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
            return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let middle = this.length / 2
        let counter, current;
        if (index <= middle) {
            current = this.head
            counter = 0
            while (counter != index) {
                current = current.next
                counter++;
            }
        } else {
            current = this.tail
            counter = this.length - 1
            while (counter != index) {
                current = current.prev
                counter--;
            }
        }
        return current
    }

    //works
    // get(index) {
    //     if (index < 0 || index >= this.length) return null
    //     let middle = this.length / 2
    //     let counter
    //     let current
    //     if (index <= middle) {
    //         current = this.head
    //         for (let i = 0; i < middle; i++) {
    //             if (counter != index) {
    //                 counter = 0
    //                 current = current.next
    //                 counter++;
    //             }
    //             return current
    //         }
    //     } else if (index > middle) {
    //         current = this.tail
    //         for (let i = middle; i < this.length - 1; i++) {
    //             if (counter != index) {
    //                 counter = this.length - 1
    //                 current = current.prev
    //                 counter++;
    //             }
    //             return current
    //         }
    //     }
    // }

    set(val, index) {
        let node = this.get(index)
        if (!node) {
            node.val = val
            return true
        }
        return false
    }

    insert(val, index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        let prevNode = this.get(index - 1)
        let newNode = new Node(val)
        let afterNode = prevNode.next
        newNode.next = afterNode
        afterNode.prev = newNode
        prevNode.next = newNode
        newNode.prev = prevNode

        this.length++
            return true
    }


    remove(index) {
        if (index < 0 | index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index)
        let prevNode = this.get(index - 1)
        let afterNode = this.get(index + 1)
        removedNode.next = null
        removedNode.prev = null
        prevNode.next = afterNode
        afterNode.prev = prevNode
        this.length--
            return removedNode
    }

}

var first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")
first.next.prev = first // to jest to samo
console.log(first)
console.log(first.next)
console.log(first.next.next)
console.log(first.next.prev)

var list = new DoublyLinkedList()
list.push('aa')
list.push('bb')
list.push('cc')
list.push('dd')
list.push('ee')
    // console.log(list.pop())
    // console.log(list.shift())
    // console.log(list.unshift('000'))
    // console.log(list.get(3))
    // console.log(list.set('neeeew', 2))
console.log(list.insert('inserted', 1))
console.log(list.remove(1))