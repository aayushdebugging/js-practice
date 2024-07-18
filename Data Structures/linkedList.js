// All applications of both stack and queues are application of linked list 
// A linked list is a linear data structure that includes a series of connected nodes
// ImageViewer

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

    // O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    //O(N)
    append(){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0;i<this.size;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    //remove particular index 
    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedNode
        if(index==0){
            removedNode = this.head
            this.head = this.head.next
        }else{


            let prev = this.head
            for(let i = 0;i<index-1;i++){
                prev = prev.next
            }
            removedNode =  prev.next
            prev.next = removedNode.next


        }
        this.size--
        return removedNode.value
    }

    //remove particular value
    removeValue(value){
        if(this.isEmpty()){
            return null
        }if(this.head.value === value){
            this.head.next = this.head
            this.size--
            return value
        }else{ //change previous.next = removed.next
            let prev = this.head
            while(prev.next && prev.next.value!== value){
                prev = prev.next
            }
            if(prev.next){
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty')
        }else{
            let curr = this.head
            let listValues =''
            while(curr){
                listValues += `${curr.value}`
                curr =  curr.next   
            }
            console.log(listValues)

        }
    }
}

const list = new LinkedList()
console.log('List is Empty?',list.isEmpty())
console.log('List Size',list.getSize())
list.prepend(10)
list.prepend(20)
list.print()
list.prepend(30)
list.prepend(40)
console.log('List is Empty?',list.isEmpty())
console.log('List Size',list.getSize())
list.print()

