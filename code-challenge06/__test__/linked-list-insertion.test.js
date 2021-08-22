'use strict';

const LinkedList=require('../linked-list-insertion');

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



})