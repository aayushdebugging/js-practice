// LIFO
//Stack Usage
//Browser History Tracking
//Expression Conversion
//Call stack in Javascript runtime
class Stack {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.top = -1;
    }

    isFull() {
        return this.top === this.capacity - 1;
    }

    isEmpty() {
        return this.top === -1;
    }

    push(element) {
        if (!this.isFull()) {
            this.top += 1;
            this.items[this.top] = element;
        } else {
            console.log('Stack is full');
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return null;
        } else {
            const item = this.items[this.top];
            this.items[this.top] = null;
            this.top -= 1;
            return item;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        } else {
            return null;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
        } else {
            let str = '';
            for (let i = 0; i <= this.top; i++) {
                str += this.items[i] + ' ';
            }
            console.log(str.trim());
        }
    }
}

const stack = new Stack(5);
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.isFull());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
stack.print();

stack.push(60);
stack.print();