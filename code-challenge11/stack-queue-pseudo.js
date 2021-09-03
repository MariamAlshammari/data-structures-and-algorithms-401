'use strict';
const Node = require('./node')
const Stack=require('./stack')

class pseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();

    }

    // peek() {
    //     return this.front.value;
    // }

    enqueue(item) {
        this.stack1.push(item);
        return this.stack1.peek();

        // console.log(this.stack1);
        
    }

    dequeue() {
        if(this.stack2.peek()!=="empty"){
         return this.stack2.pop();
         }
         while(this.stack1.peek()!=="empty"){
             this.stack2.push(this.stack1.pop());

         }
         return this.stack2.pop();

    
        // isEmpty() {
        //     if (!this.front) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
}} 

module.exports = pseudoQueue;