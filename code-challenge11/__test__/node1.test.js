'use strict';

const Node=require('../node');

describe('Node',()=>{
    it('Should create new node',()=>{
        let value='valueee';
        let node=new Node(value);

        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
})