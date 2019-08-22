class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) { //Enter new node in the queue 
        let newValue = new QueueNode(value);
        if (!this.first) {
            this.first = newValue;
            this.last = this.first;
        } else {
            let current = this.last;
            current.next = newValue;
            this.last = newValue;
        }
        this.size++;
        return newValue.value;
    }
    dequeue() { //Remove the first element in the queue
        if (!this.first) return 'Empty Queue';
        if (this.size === 1) {
            this.last = null;
        }
        let removedValue = this.first;
        this.first = this.first.next;
        removedValue.next = null;
        this.size--;
        return this;
    }
}



let queue = new Queue(); //creating object of the Queue class 

console.log(queue.enqueue(100));
console.log(queue.enqueue(200));
console.log(queue.enqueue('&%$^&&(*&()*(&*^'));
console.log(queue.enqueue(300));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());