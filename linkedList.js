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

// get()
// This function should accept an index
// If the index is less than zero or grater than or equal to the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index

// set()
// This function should accept a value and an index
// Use your get function to find the specific node
// If the node is not found, return false
// If the node is found, set the value of that node to be the value passed to the function and return true

// insert()
// If the index is less than zero or grater than the length, return false
// If the index is the same as the length, push a new node to the en of the list
// If the index is 0, unshift a new node to the start of the list
// Otherwise, using the get method, access the node at the index -1
// Set the next property on that node to be the new node
// Set the next property on the new node to be the previous next
// Increment the length
// Return true

// remove()
// If the index is less than zero or grater than the length return undefined
// If the index is the same as the length -1, pop
// If the index is 0, shift
// Otherwise, using rhe get method, access the node at the index -1
// Set the next property on that node to be the next of the next node
// Decrement the length
// Return the value of tne node removed

// reverse()


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

    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0;
        let current = this.head;
        while (counter != index) {
            current = current.next
            counter++;
        }
        return current
    }

    set(val, index) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(val, index) {

        if (index < 0 || index > this.length) return false
        if (index == this.length) return this.push(val)
        if (index == 0) return this.unshift(val)

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next // to zostalo przerwane, wiec tu je zachowuje
        prev.next = newNode
        newNode.next = temp
        this.length++
            return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
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

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
    // console.log(list.push("HELLO"))
    // console.log(list.push("GOODBYE"))
    // console.log(list.push(99))
    // console.log(list.head.next)
    // console.log(list.head.next.next)

// console.log(list.pop())
// console.log(list.shift())

// console.log(list.unshift('xx'))
// console.log(list.get(1))


// console.log(list.push("!"))
// console.log(list.push("<3"))
// console.log(list.push(":)"))

// console.log(list.get(2)) // !
// console.log(list.get(3)) // <3
// console.log(list.get(10)) // null

// console.log(list.set('???', 2)) // true
// console.log(list.insert('inserted', 2)) // true
// console.log(list.insert('FIRST', 0)) // true
// console.log(list.insert('LAST', 5)) // true

// console.log(list.remove(1)) // true
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)

console.log(list.print())
list.reverse()
console.log(list.print())