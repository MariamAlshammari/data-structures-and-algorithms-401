'use strict';

const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
    }
  
    append(value) {
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

    insertBefore(value, newValue) {
        let newNode = this.head;
        const node = new Node(newValue);
        if (newNode.value === value) {
            node.next = this.head;
            this.head = node;
            // return this;
        }
        else {
            while (newNode.next) {
                if (newNode.next.value === value) {
                    node.next = newNode.next;
                    newNode.next = node;
                
                // return this;
                break;
            }
        else {
                newNode = newNode.next;
            }

        }


    }}

    insertAfter(value, newValue) {
        let newNode = this.head;
        const node = new Node(newValue);
       
        
            while (newNode) {
                if (newNode.value === value) {
                    node.next = newNode.next;
                    newNode.next = node;
                    
                break;
            }
         
                newNode = newNode.next;
            

        


    }}





}
    
module.exports = LinkedList;