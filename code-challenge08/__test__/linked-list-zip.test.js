'use strict';

const LinkedList = require('../linked-list-zip');

describe('Linked List Insertion ', () => {
    it('Should create new empty linked list', () => {
        let list = new LinkedList();

        expect(list.head).toBeNull();
    });
    it('Should adds a new node with the given value to the end of the list', () => {
        const list = new LinkedList();
        const value = 'any value';
        list.append(value);

        expect(list.head.value).toBe(value);
        expect(list.head.next).toBeNull();
    });
    it('Should insert multiple nodes to Linked List', () => {
        const list = new LinkedList();
        const value = 'any value';
        list.append(value);
        const value2 = "second value";
        list.append(value2);

        expect(list.head.value).toBe(value);
        expect(list.head.next.value).toBe(value2);
        expect(list.head.next.next).toBeNull();
    });
    it('Should adds a new node with the given new value immediately before the first node that has the value specified', () => {
        const list = new LinkedList();
        const value = 'any value';
        const value2 = "second value";
        const value3 = "third value";
        list.append(value3);

        list.append(value2);
        list.append(value);
        const value4 = "neww value"

        list.insertBefore(value2, value4)

        expect(list.head.value).toBe(value3);
        expect(list.head.next.value).toBe(value4);
        expect(list.head.next.next.value).toBe(value2);
        expect(list.head.next.next.next.value).toBe(value);
        expect(list.head.next.next.next.next).toBeNull();
    });
    it('Should adds a new node with the given new value immediately after the first node that has the value specified', () => {
        const list = new LinkedList();
        const value = 'any value';
        const value2 = "second value";
        const value3 = "third value";
        list.append(value3);

        list.append(value2);
        list.append(value);
        const value4 = "neww value"

        list.insertAfter(value2, value4)

        expect(list.head.value).toBe(value3);
        expect(list.head.next.value).toBe(value2);
        expect(list.head.next.next.value).toBe(value4);
        expect(list.head.next.next.next.value).toBe(value);
        expect(list.head.next.next.next.next).toBeNull();
    });
    it('Should Returns a string representing all the values in the Linked List',()=>{
        const list=new LinkedList();
        const value='any value';
        // list.includes(value);
        list.append(value);
        const value2="new value";
        list.append(value2);

        expect( list.toString()).toBe(` [${value}] -> [${value2}] -> X`);
    });
    // it("Where k is greater than the length of the linked list || Where k is not a positive integer", () => {
    //     let list = new LinkedList();
    //     list.append(2);
    //     list.append(8);
    //     list.append(3);
    //     list.append(1);

    //     expect(list.kthFromEnd(-1)).toEqual("Wrong Value of k");
    //     expect(list.kthFromEnd(7)).toEqual("Wrong Value of k");
    //   });
    //   it("Where k and the length of the list are the same",()=>{
    //     let list = new LinkedList();
    //     list.append(6)
    //     list.append(5)
        
    //     expect(list.kthFromEnd(1)).toBe(6)
    // });
    it("Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.",()=>{
        let list = new LinkedList();
        let list2 = new LinkedList();
        let list3 = new LinkedList();


        list.append(1);
        list.append(2);
        list.append(3);

        list2.append(4);
        list2.append(5);
        list2.append(6);


        
        expect(list3.zipLists(list,list2)).toEqual("head ->  [1] -> [4] -> [2] -> [5] -> [3] -> [6] -> X ");
    });




})