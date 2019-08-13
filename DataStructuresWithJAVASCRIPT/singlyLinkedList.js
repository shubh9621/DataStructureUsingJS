class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList { 
           constructor () {
               // dont take any argument
               this.head = null;
               this.tail = null;
               this.length = 0;
           }
           push(value){                              //push(value) will add new at the end of the list.
            let  newNode = new Node(value);  //creating New Node  
               if(!this.head){       // checking if the node already empty or not.           
                   this.head = newNode;        
                   this.tail = this.head;
               }
               else {
                 this.tail.next = newNode;
                 this.tail = newNode;
               }
               this.length++;
               return this;
           }
           traverse(){
              let current  = this.head;
              if(!this.head && this.length === 0){
                   console.log('Oops!Empty List');
              }
              while(current){
                  console.log(current.value);
                  current = current.next;
              }
            
           }

          pop(){                                               // pop() will remove the last element in the list
              if(!this.head && this.length === 0){
                  return 'No values in the list';
              }
              let current = this.head;
              let newTail = current;
              while(current.next){
                  newTail = current;
                  current = current.next;
              }
              this.tail = newTail
              newTail.next = null;
              this.length--; 
              if(this.length === 0){
                  this.tail = null;
                  this.head = null;
              }
              return current.value;
          } 
        shift(){
            if(!this.head){
                return 'Empty List : shift is not possible at this time.';
            }
            let firstElement = this.head;
            this.head = firstElement.next;
            this.length--;  
            if(this.length === 0){
                this.tail = null;
            }       
        }
        unShift(value){
            let newNode = new Node(value);
            if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            }
            else{
            newNode.next = this.head;
            this.head = newNode;
            }
            this.length++;
        }
    get(index){    // gets the metionded index value
        if(index > this.length || index < 0){
            return 'Invalid Index';
        }
        let counter = 0 , currentElement = this.head;

        while(counter != index){
            currentElement = currentElement.next;
            counter++;
        }
        return currentElement;
    }
    set(index,value){
        let oldValue = this.get(index);
        if(!oldValue.value){
            return 'Not found! cannot set value';
        }
         oldValue.value = value;
         return true;
    }
}


let list = new SinglyLinkedList();
list.push('hello');   // add new values
list.push('people');   // add new values
list.push('Keep Rocking!'); // add new values
list.push(938839829982);   // add new values
list.traverse();   //traverse the list
console.log(`After POP() of ${list.pop()}`);  // remove the last element
list.traverse();  //again traverse the resulted list.
list.shift();   //removes element at the head of the list.
console.log('-----After shift------');
list.traverse();    
list.unShift('200');  // add element at the start of the list
console.log('-----After UnShift------');
list.traverse();
console.log(`Element Found : ${list.get(2)}`);
// set function
console.log(list.set(10,'lets Go!'));   // will set the passed value in the list
list.traverse();