// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// push()
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one
// Return linked list

// pop()
// If there are no nodes in the list, return undefined
// Loop trough the list until you reach the tail
// Set the next property of the 2nd to last nore to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the node removed

// shift()
// If there are no nodes, return undefined
// Store the current head property in a variable
// Set the head property to be the current head's next property
// Decrement the length by 1
// Return the value of the node removed

// unshift()
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the newly created node's next property to be the current head property on the list
// Set the head property on the list to be the newly created node
// Increment the length of the list by 1
// Return the linked list

class SinglyLinkedList {
    constructor() {
        this.head = null; // poczatek
        this.tail = null; // current lub end
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined

        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }

        console.log(current.val)
        console.log(newTail.val)

        this.tail = newTail
        this.tail.next = null

        this.length--
            if (this.length == 0) {
                this.head = null;
                this.tail = null;
            }
        return current
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head; // newNode points to the current Head
            this.head = newNode; // we update the head
        }
        this.length++;
        return this;

    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
console.log(list.push("HELLO"))
console.log(list.push("GOODBYE"))
console.log(list.push(99))
console.log(list.head.next)
console.log(list.head.next.next)

console.log(list.pop())
console.log(list.shift())

console.log(list.unshift('xx'))