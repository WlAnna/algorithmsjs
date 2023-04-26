class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };

    dijkstras(start, end) {
        let distances = {
            start: 0,
            end: Infinity
        }

    }
}

let q = new PriorityQueue();
q.enqueue("p", 1)
q.enqueue("b", 3)
q.enqueue("c", 5)