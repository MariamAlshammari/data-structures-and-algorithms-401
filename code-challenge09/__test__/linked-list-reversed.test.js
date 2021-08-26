'use strict';

const LinkedList = require('../linked-list-reverse');

describe('Linked List Insertion ', () => {
    it('Should create new empty linked list', () => {
        let list = new LinkedList();

        expect(list.head).toBeNull();
    });
    it('Should adds a new node with the given value to the end of the list', () => {
        const list = new LinkedList();
        const value = 'any value';
        const value2 = "second value";

        list.append(value);
        list.append(value2);
        

    expect(list.head.value).toBe(value2);
    expect(list.head.next).toBeTruthy();
    });
    it('Should insert multiple nodes to Linked List', () => {
        const list = new LinkedList();
        const value = 'any value';
        list.append(value);
        const value2 = "second value";
        list.append(value2);

        expect(list.head.value).toBe(value2);
        expect(list.head.next.value).toBe(value);
        expect(list.head.next.next).toBeNull();
    });
    it('Should Returns a string representing all the values in the Linked List',()=>{
        const list=new LinkedList();
        const value='any value';
        // list.includes(value);
        list.append(value);
        const value2="new value";
        list.append(value2);

        expect( list.toString()).toBe(` [${value2}] -> [${value}] -> X`);
    });
    it('Should Returns a reversed Linked List',()=>{
        const list=new LinkedList();
        const list2=new LinkedList();

        const value='any value';
        // list.includes(value);
        const value2="new value";
        const value3="third value";
        
        list2.append(value3);
        list2.append(value2);
        list2.append(value);


        expect( list.reverseList(list2)).toBe(` head -> [${value3}] -> [${value2}] -> [${value}] -> X`);
    });
    
    


})