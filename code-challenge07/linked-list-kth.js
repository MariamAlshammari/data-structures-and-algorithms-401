'use strict';

const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            if (this.length == 0) {

                this.tail = node


            }

            return this;
        }
        let current = this.head;
        this.length = this.length + 1;

        while (current.next) {
            current = current.next;
            this.length = this.length + 1;
        }
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


        }
        this.length++;
    }

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


            this.length++;

            if (this.length == 0) {

                this.tail = newnode


            }

        }
    }


    kthFromEnd(k) {
        if (k < 0 || k > this.length) {
            return 'Wrong Value of k';
        }
        else {
            let current = this.head
            for (let i = 1; i < (this.length - k) + 1; i++) {

                current = current.next;
            }

            return current.value;

        }
    }



}

module.exports = LinkedList;