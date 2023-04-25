// set
// Accept a key and a value
// Hashes the key
// Stores the key value pair in the hash table array via separate chaining

// get
// Accepts the key
// Hashes the key
// Retrieves the key-value pair in the hash table
// If the key ins't found return undefined

// keys
// Loops through the hash table array and returns an array of keys in a table
// Loops through the hash table array and returns an array of values in a table


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let position = this._hash(key)
        if (this.keyMap[position] == null) {
            this.keyMap[position] = [
                [key, value]
            ]
            console.log(this.keyMap)
        } else {
            this.keyMap[position].push([key, value])
        }
    }

    // set(key, value) {
    //     let index = this._hash(key);
    //     if (!this.keyMap[index]) {
    //         this.keyMap[index] = [];
    //     }
    //     this.keyMap[index].push([key, value]);
    // }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
    }

    keys() {
        let keyArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keyArr.includes(this.keyMap[i][j][0])) {
                        keyArr.push(this.keyMap[i][j][0])
                    }

                }
            }
        }
        return keyArr
    }



    values() {
        let valArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valArr.includes(this.keyMap[i][j][1]))
                        valArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valArr
    }

}

// let ht = new HashTable(17);
// ht.set("maroon", "#800000")
// ht.set("yellow", "#FFFF00")
// ht.set("olive", "#808000")
// ht.set("salmon", "#FA8072")
// ht.set("lightcoral", "#F08080")
// ht.set("mediumvioletred", "#C71585")
// ht.set("plum", "#DDA0DD")

let ht = new HashTable(3);
ht.set("hello word", "goodbye!!")
ht.set("dogs", "are cool")
ht.set("cats", "are fine")
ht.set("cats", "are fine")
ht.set("i love", "pizza")
console.log(ht.get("hello word"))
console.log(ht.get("cats"))
console.log(ht.keys())
console.log(ht.values())