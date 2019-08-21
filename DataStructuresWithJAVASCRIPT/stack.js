class StackNode{
     constructor(value){
         this.value = value;
         this.next = null;
     }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){                                 //Push method to add value at the top of the stack
        let newValue = new StackNode(value);
        if(!this.first){
            this.first = newValue;
            this.last = this.first;
        }
        else{
            let currentFirst = this.first;
            newValue.next = currentFirst;
            this.first = newValue;
        }
        this.size++;
        return this;
    }
    pop(){                                  //Removes the first element in the stack.
          if(!this.first) return 'No values to POP';
          let popedElement = this.first;
          if(this.first === this.last){
              this.last = null;
          }
          this.first = this.first.next;
          this.size--;
          return popedElement.value;
    }
}

let stack = new Stack();          //creating stack class object

console.log(stack.push(500));
console.log(stack.push(400));
console.log(stack.push(300));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
