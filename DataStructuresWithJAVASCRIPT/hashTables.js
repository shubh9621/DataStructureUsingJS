class HashTable {
    constructor(size = 5) {
            this.keyMap = new Array(size);
        }
        //takes one input and return it hashed postion in array
    hashCode = (value) => {
            let total = 0;
            let primeNumber = 31;
            for (let i = 0; i < Math.min(value.length, 100); i++) {
                let code = value.charCodeAt(i) - 96;
                total = (total * primeNumber + code) % this.keyMap.length;
            }
            return total;
        }
        //set method accepts the key and the value and store it in the array.
    set = (key, value) => {
            const index = this.hashCode(key);
            //implemented linear probing to store the value the Index is the same.
            if (!this.keyMap[index]) {
                this.keyMap[index] = [];
            }
            this.keyMap[index].push([key, value]);
            return this.keyMap;
        }
        //get method gets one key and returns the values for that key only.
    get = (key) => {
        //getting index of the passed key.
        let index = this.hashCode(key);
        if (this.keyMap[index]) {
            //if there more values in the single index we will loop through all the values and find.
            if (this.keyMap[index].length > 1) {
                for (let i = 0; i < this.keyMap.length; i++) {
                    if (this.keyMap[index][i][0] === key) {
                        //returns the value of that passed key
                        return this.keyMap[index][i][1];
                    }
                }
                return undefined;
            }
            //returns the value of that passed key
            return this.keyMap[index][0][1];
        }
        return undefined;
    }
}

let hashTable = new HashTable();
hashTable.set('himachal', 'shubham sharma');
hashTable.set('orisha', 'shibajee');
console.log(hashTable.set('hyderabad', 'harish'));
console.log(hashTable.get('hyderabad'));