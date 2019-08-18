class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
            constructor(){
                this.head = null;
                this.tail = null;
                this.length = 0;
            }
            push(value) {          // store data at the end of the list 
                let newNode = new Node(value); 
                if(!this.head){
                     this.head = newNode;
                     this.tail = this.head;
                 }
                 else{
                 this.tail.next = newNode;
                 newNode.prev = this.tail;
                 this.tail = newNode;
                 }
                 this.length++;
                 return this;
            }
            pop(){                  //Remove the element at the end of the list.
              if(this.length === 0){
                  return 'List is already empty';
              }
              if(this.length === 1){
                  this.head = null;
                  this.tail = null;
                  return this;
              }
              let newTail = this.tail.prev;
              this.tail = newTail;
              newTail.next = null;
              this.length--;
              return this;
            }
            traverse(){                                                  //traverse and print the whole list
                if(this.length === 0) return 'Empty list cannot traverse';
                let current = this.head;
                while(current){
                    process.stdout.write(`${current.value} <--> `);   //Print all the value in the single line only.
                    current = current.next;
                }
              console.log("\n");                    // for the next line after the loop.
            }
          shift(){                                        // remove element at the start of the list
              if(this.length === 0) return 'list not found';
              if(this.length === 1) {
                  this.head = null;
                  this.tail = null;
                  return this;
              }
              let newHead = this.head.next;
              this.head.next = null;
              this.head = newHead;
              newHead.prev = null;
              this.length--;
              if(this.length === 1){
                  newHead.prev = null;
                  newHead.next = null;
              }
          return this;
          }
          unShift(value){                                 // add element at the start of the list
              let newNode = new Node(value);
              if(this.length === 0 || !this.head) {
                         this.head = newNode;
                         this.tail = newNdoe;
              }
              else{
                  let tempValue = this.head;
                  this.head = newNode;
                  newNode.next = tempValue;
                  tempValue.prev = newNode;
                  newNode.prev = null;
              }
              this.length++;
              return this;
          }   
          get(index) {                      // get method accept index and get the value of that index
            if(index < 0 || index > this.length - 1) return 'Index not found';  
            let counter = 0;
            let mid = Math.floor(this.length/2);     // getting the middle index
            if(index <= mid){                      // IF true start from the head                     
                let current = this.head;
                while(counter != index){
                    current = current.next;
                    counter++;
                }
                return current;
            }
            let counter2 = this.length - 1;
            if(index > mid) {                    // IF true start from the  Tail of the list.
                let current = this.tail;
                while(counter2 != index){
                    current = current.prev;
                    counter--;
                }
                return current;
            }
          }   
          set(index , value) { 
            let oldValue = this.get(index);               // replace the value at the passed index
            if(!oldValue.value){
                return 'Not found! cannot set value';
            }
             oldValue.value = value;
             return true;
}
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(10);
list.push(20);
list.push(900);
list.push(700);
list.push(-700);
list.traverse();
list.pop();
console.log("After pop operation");
list.traverse();
list.shift();
// list.shift();
console.log("After shift operation");
list.traverse();
console.log(list.unShift('people are awesome!'));
console.log("After Unshift operation");
list.traverse();
console.log(`${list.get(5)}`);
list.set(2,"hello");
console.log('list after setting value');
list.traverse();