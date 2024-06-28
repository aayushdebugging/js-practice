// FIFO
// ENQUEUE - adds an element to the rear/tail of the collection
// DEQUEUE - removes he element from the front/head of the collection


//QUEUE Usage 
//Printers
//CPU Task Scheduling
//Callback queue in javascript

class Queue {
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
       return this.items.shift()
    }
    
    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
