'use strict';

const LinkedList=require('../linked-list');

describe('Linked List',()=>{
    it('Should create new empty linked list',()=>{
        let list=new LinkedList() ;

        expect(list.head).toBeNull();
    });
    it('Should insert node to Linked List',()=>{
        const list=new LinkedList();
        const value='any value';
        list.insert(value);

        expect(list.head.value).toBe(value);
        expect(list.head.next).toBeNull();
    });
    it('Should insert multiple nodes to Linked List',()=>{
        const list=new LinkedList();
        const value='any value';
        list.insert(value);
        const value2="second value";
        list.insert(value2);

        expect(list.head.value).toBe(value);
        expect(list.head.next.value).toBe(value2);
        expect(list.head.next.next).toBeNull();
    });


    it('Should Indicates whether that value exists as a Node’s value somewhere within the list.',()=>{
        const list=new LinkedList();
        const value='any value';
        // list.includes(value);
        list.insert(value);

        expect( list.includes(value)).toBe(true);
    });
    it('Should return false when searching for a value in the linked list that does not exist',()=>{
        const list=new LinkedList();
        const value='any value';
        // list.includes(value);
        const value2="new value";

        list.insert(value);

        expect( list.includes(value2)).toBe(false);
    });

    it('Should Returns a string representing all the values in the Linked List',()=>{
        const list=new LinkedList();
        const value='any value';
        // list.includes(value);
        list.insert(value);
        const value2="new value";
        list.insert(value2);

        expect( list.toString()).toBe(` {${value}}->{${value2}}->NULL`);
    });

})