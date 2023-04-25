// Push the value into the values property on the heap
// Bubble up:
//  Create a variable called index which is the length of the values property -1
//  Create a variable called parentIndex which is the floor of (index-1)/2
//  Keep looping as long as the values element at the parentIndex is less than the values element at the child index
//    Swap the value of the values element at the parentIndex with the value of the element property at the child index
//    Set the index to be the parentIndex, and start over

// Removing
// Swap the first value in the values property with the last one
// Pop from the values property, so you can return the value at the end
// Have the new root "sink down" to the correct spot
// - Your parent index starts at 0 (the root)
// - Find the index of the left child: 2 * index + 1 (make sure tis not out of bounds)
// - If the left or right child is grater than the element .... swap. If both left and right children are larger, swap with the largest child
// - The child index you swaped to now becomes the new parent index.
// - Keep looping and swapping until neither child is larger than the element
// - Return the old root!


class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        this.values.push(val)

        let index = this.values.length - 1
        let element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element <= parent) break;
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }

    // extractMax() { // nie dziala
    //     let lastIndex = this.values.length - 1
    //     let lastValue = this.values[lastIndex]
    //     this.values.pop()
    //     this.values[0] = lastValue // [12, 39, 33, 18, 27]


    //     let index = 0
    //     let element = this.values[index]

    //     let leftIndex = 2 * index + 1
    //     let rightIndex = 2 * index + 2
    //     let length = this.values.length


    //     while (true) {
    //         let left = this.values[leftIndex] || -Infinity; // this can be out of bound and give errror
    //         let right = this.values[rightIndex] || -Infinity;
    //         if (left || right) {
    //             if (left < element && right < element) return
    //             if (left > element && left > right) {
    //                 console.log(this.values[leftIndex], left)
    //                 this.values[index] = left
    //                 index = leftIndex
    //                 this.values[leftIndex] = element // [39, 12, 33, 18, 27]
    //             }
    //             if (right > element && right > left) {
    //                 this.values[index] = right
    //                 index = rightIndex
    //                 this.values[rightIndex] = element
    //             }
    //             console.log(this.values)
    //         } else {
    //             break
    //         }
    //     }
    // }


    extractMax() {
        let lastIndex = this.values.length - 1
        let lastValue = this.values[lastIndex]
        this.values.pop()
        this.values[0] = lastValue // [12, 39, 33, 18, 27]


        let currIdx = 0;
        const element = this.values[0];

        while (true) {
            let child1Idx = currIdx * 2 + 1;
            let child2Idx = currIdx * 2 + 2;
            let child1 = this.values[child1Idx] || -Infinity;
            let child2 = this.values[child2Idx] || -Infinity;

            let tempIdx = child1 > child2 ? child1Idx : child2Idx;
            if (this.values[tempIdx] > element) {
                [this.values[tempIdx], this.values[currIdx]] = [this.values[currIdx], this.values[tempIdx]];
                currIdx = tempIdx;
            } else break;

            //If your value is 0, then your child is going to be -Infinity because 0 is falsy. 
            // Also, if both child1 and child2 is - Infinity, then you're going to go out of bounds.
        }
    }


}


var heap = new MaxBinaryHeap();

// heap.insert(10)
// heap.insert(6)
// heap.insert(15)
// heap.insert(3)
// heap.insert(8)
// heap.insert(20) // [10, 6, 15, 3, 8, 20]

//              10
//         6          15
//       3   8          20


// heap.insert(55);
// [41, 39, 33, 18, 27, 12, 55];
//  0   1   2    3   4   5   6
// heap.insert(45); // [55, 45, 41, 39, 27, 12, 33, 18]
heap.extractMax() // [39, 27, 33, 18, 12]