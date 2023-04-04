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

class DoublyLinkedList {
    constructor() {
        this.head = null; // poczatek
        this.tail = null; // current lub end
        this.length = 0;
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