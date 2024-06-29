// All applications of both stack and queues are application of linked list 
// A linked list is a linear data structure that includes a series of connected nodes
// ImageViewer

class Node {
    constructor(value){
        this.value =  value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
}

const list = new LinkedList()
console.log('List is Empty?',list.isEmpty())
console.log('List Size',list.getSize())

