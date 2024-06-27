// FIFO
// ENQUEUE - adds an element to the rear/tail of the collection
// DEQUEUE - removes he element from the front/head of the collection


//QUEUE Usage 
//Printers
//CPU Task Scheduling
//Callback queue in javascript

class queue {
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
}