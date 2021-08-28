'use strict';

const Stack = require('../stack');

describe('Stack', () => {
    it('should create new instance of Stack', () => {
        const stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    });

    describe('should peek', () => {
        it('should return null on an empty stack', () => {
            const stack = new Stack();
            expect(stack.top).toBe(null);
        });

        it('Can successfully push onto a stack,Can successfully peek the next item on the stack ', () => {
            const stack = new Stack();
            stack.push(1);
            expect(stack.peek()).toBe(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).toBe(3);
        });

        it('Can successfully push multiple values onto a stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);

            // firts solution
            expect(stack.top.value).toBe(3);
            expect(stack.top.next.value).toBe(2);

            // second solution
            // stack.peek();
            // expect(stack.size()).toBe(3);
        });

        it('Can successfully pop off the stack, Can successfully empty a stack after multiple pops', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.top.value).toBe(3);
            stack.pop();
            expect(stack.top.value).toBe(2);
            stack.pop();
            expect(stack.top.value).toBe(1);
            stack.pop();
            expect(stack.top).toBe(null);
        });
    });

    describe('Push', () => {
        it('should add a value to the top of the stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            // expect(stack.top).toEquals(2);
            stack.push(3);

            expect(stack.top.value).toEqual(3);
            // expect(stack.size()).toBe(3);
        });
    });

    describe('Pop', () => {
        it('should return and remove the top item from the stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
            
        });
    });
})