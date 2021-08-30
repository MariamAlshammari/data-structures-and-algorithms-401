'use strict';
const Node = require('./node')

class Queue {
    constructor() {
        this.front = null;
    }

    peek() {
        return this.front.value;
    }

    enqueue(item) {
        const node = new Node(item);
        if (!this.front) {
            this.front = node;
        }
        else {
            let current = this.front;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

    }

    dequeue() {
        try{
        let current = this.front;
        this.front = this.front.next;
        current.next = null;
        return current.value;}
    catch{
        'empty';
    }    }
    
        isEmpty() {
            if (!this.front) {
                return true;
            } else {
                return false;
            }
        }
} 

module.exports = Queue;