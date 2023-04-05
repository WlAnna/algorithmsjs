class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            let first = this.first
            this.first = newNode
            this.first.next = first
        }
        return ++this.size
    }

    pop() {
        let removed = this.first
        if (this.size === 0) return null
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            let newFirst = this.first.next
            removed.next = null
            this.first = newFirst
        }
        this.size--
            return removed

    }

    // pop(){
    //     if(!this.first) return null;
    //     var temp = this.first;
    //     if(this.first === this.last){
    //         this.last = null;
    //     }
    //     this.first = this.first.next;
    //     this.size--;
    //     return temp.value;
    // }
}

let stack = new Stack()
stack.push(11)
stack.push(22)
stack.push(33)
console.log(stack.pop())
console.log(stack.pop())