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
    toString() {
      
        let current = this.head;
        let str=" ";
        while (current) {
            str=str+`[${current.value}] -> `;
            current=current.next;
            
        }
        str=str+'X';
        return str;
        
    }


    zipLists(list1, list2){
        let list3=new LinkedList();
        let current1=list1.head;
        let current2=list2.head;

        while (current1 || current2) {
            if (current1) {
                list3.append(current1.value);
              current1 = current1.next;
            }
            if (current2) {
                list3.append(current2.value);
              current2 = current2.next;
            }
          }

          return `head -> ${list3.toString()} `;



    }



}

module.exports = LinkedList;