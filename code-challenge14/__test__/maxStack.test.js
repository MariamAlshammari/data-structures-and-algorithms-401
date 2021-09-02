const Stack=require('../stack');

describe('max stack',()=>{
    it('return max',()=>{
        let stack=new Stack();
        stack.push(5);
        stack.push(55);
        stack.push(3);
        expect(stack.gitMax()).toEqual(55);

    })
    it('empty stack!',()=>{
        let stack=new Stack();
        
        expect(stack.gitMax()).toEqual('empty stack!');

    })
})