'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        // this.items = new Array();
        this.top = null;
    }

    peek() {
        return this.top.value;
    }

    push(item) {
        const node = new Node(item);
        if (this.top) {
            node.next = this.top
        }
        this.top = node;
    }

    pop() {
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        return temp.value;
    }

    gitMax(){
        if(!this.top){
          return 'empty stack!'
        }
    
        let current=this.top;
        let pointer=this.top;
        while (pointer) {
          if(current.value<current.next.value){
            current=current.next;
          }
          pointer=pointer.next;
        }
        return current.value
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
