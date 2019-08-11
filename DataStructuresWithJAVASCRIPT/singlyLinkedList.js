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
           push(value){
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

          pop(){
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

}


let list = new SinglyLinkedList();
list.push('hello');
list.push('people');
list.push('Keep Rocking!');
list.push(938839829982);
list.traverse();
console.log(`After POP() of ${list.pop()}`);
list.traverse();