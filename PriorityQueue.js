// Priority Queue
// Write a Min Binary Heap - lower means higher priority
// Each Node has a val and a priority. Use the priority to build the heap
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off its priority
// Dequeue method removes root element, return it, and rearranges heap using priority

class Node {
    constructor(val, pty) {
        this.val = val;
        this.priority = pty;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }


    enqueue(val, pty) {
        let node = new Node(val, pty)
        this.values.push(node)

        let index = this.values.length - 1
        let element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }

    // enqueue(val, priority) {
    //     let newNode = new Node(val, priority);
    //     this.values.push(newNode);
    //     this.bubbleUp();
    // }
    // bubbleUp() {
    //     let idx = this.values.length - 1;
    //     const element = this.values[idx];
    //     while (idx > 0) {
    //         let parentIdx = Math.floor((idx - 1) / 2);
    //         let parent = this.values[parentIdx];
    //         if (element.priority >= parent.priority) break;
    //         this.values[parentIdx] = element;
    //         this.values[idx] = parent;
    //         idx = parentIdx;
    //     }
    // }

    // Return the one node at a time in a priority order
    dequeue() {
        let arr = this.values
            //No need to swap if there is only one node in the array
        if (arr.length <= 1) {
            return
        }
        //initial swap
        let removedNode = arr[0]
        let temp = arr[arr.length - 1]
        arr.pop()
        arr[0] = temp
            //variables for loop
        let parent = 0
        let left = 2 * parent + 1
        let right = 2 * parent + 2
        while ((arr[left] && arr[parent].priority > arr[left].priority) ||
            (arr[right] && arr[parent].priority > arr[right].priority)) {
            //if the left is NOT out of bound but right is out of bound OR left's priority is less than right's priority
            if (arr[left] && !arr[right] || arr[left].priority < arr[right].priority) {
                //swap left
                let temp = arr[parent]
                arr[parent] = arr[left]
                arr[left] = temp
                parent = left
            }
            //if the right is NOT out of bound but left is out of bound OR right's priority is less than left's priority
            else if (arr[right] && !arr[left] || arr[right].priority < arr[left].priority) {
                //swap right
                let temp = arr[parent]
                arr[parent] = arr[right]
                arr[right] = temp
                parent = right
            }
            //update left , right
            left = 2 * parent + 1
            right = 2 * parent + 2

            //when left or right are out of bound, break the loop
            if (left > arr.length && right > arr.length) {
                break;
            }
        }
        return removedNode
    }


}


var ER = new PriorityQueue();
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)
ER.enqueue("broken hand", 6)
ER.enqueue("fever", 7)