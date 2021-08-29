'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        // this.items = new Array();
        this.top = null;
    }

    peek() {
        try{
        return this.top.value;}
        catch{
            return 'empty';
        }
    }

    push(item) {
        const node = new Node(item);
        if (this.top) {
            node.next = this.top
        }
        this.top = node;
    }

    pop() {
        try{
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        return temp.value;}
        catch{
            return 'empty';
        }
    }
    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }








}

module.exports = Stack;
