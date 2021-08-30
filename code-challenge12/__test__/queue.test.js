'use strict';

const Queue = require('../queue');

describe('Queue', () => {
    it('Can successfully enqueue into a queue,Can successfully enqueue multiple values into a queue ,Can successfully dequeue out of a queue the expected value,Can successfully empty a queue after multiple dequeues', () => {
        const queue = new Queue();
        queue.enqueue('first');
        queue.enqueue('second');
        queue.enqueue('third');
        
        expect(queue.dequeue()).toBe('first');
        expect(queue.dequeue()).toBe('second');
        expect(queue.dequeue()).toBe('third');
    }); 
     it('Can successfully instantiate an empty queue', () => {
            const queue = new Queue();
            expect(queue.front).toBe(null);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
        const queue = new Queue();
        queue.enqueue('first');
        expect(queue.peek()).toBe('first');
        queue.enqueue('second');
        queue.enqueue('third');
        expect(queue.peek()).toBe('first');
    });

   

});