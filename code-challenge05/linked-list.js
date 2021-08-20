'use strict';

const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let current = this.head;
        while (current.next) { current = current.next; }
        current.next = node;

        return this;
    }
    includes(value) {
      
        let current = this.head;
        while (current) {
            if (current.value == value) { return true; }
            current = current.next;
        }
        return false;
        
    }

    toString() {
      
        let current = this.head;
        let str=" ";
        while (current) {
            str=str+`{${current.value}}->`;
            current=current.next;
            
        }
        str=str+'NULL';
        return str;
        
    }


}
module.exports = LinkedList;