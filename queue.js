class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
            return this
    }

    dequeue() {
        let removed = this.first
        if (this.first === null) return null
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {

            let after = this.first.next
            this.first = after
                //removed.next = null
        }
        this.size--
            return removed
    }

}

let queue = new Queue()
queue.enqueue(123)
queue.enqueue(345)
queue.enqueue(678)
console.log(queue.dequeue())
console.log(queue.dequeue())